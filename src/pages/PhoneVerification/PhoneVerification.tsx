import React, { useEffect, useState } from "react";
import { Button, Flex, Typography, Input } from "antd";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import PhoneNumberInput from "../../components/PhoneNumberInput/PhoneNumberInput";
import { useNavigate } from "react-router-dom";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../../firebase";
import 'react-phone-input-2/lib/style.css'

// Extend the Window interface to include recaptchaVerifier
declare global {
  interface Window {
    recaptchaVerifier: any;
  }
}

export const PhoneVerification = () => {
  const navigate = useNavigate()

  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [otp, setOtp] = useState<string>("");
  const [confirmationResult, setConfirmationResult] = useState<any>(null);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
      });
      setRecaptchaLoaded(true);
    }
  }, [auth]);

  const formatOTP = (value: string) => {
    const sanitizedValue = value.replace(/\D/g, ""); // Remove non-numeric characters
    return sanitizedValue;
  };

  const sendOtp = async () => {
    try {
      let recaptcha = window.recaptchaVerifier
      if (!recaptchaLoaded) {
        recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {
          size: "invisible",
        });
      }

      const result = await signInWithPhoneNumber(auth, phoneNumber, recaptcha);
      setConfirmationResult(result);
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const verifyOtp = async () => {
    try {
      await confirmationResult.confirm(otp);
      navigate("/team-profile");
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <PageLayout>
      {!confirmationResult ?
        <Flex style={{ padding: '0 15px' }} justify={"center"} align={"center"} gap={"middle"} vertical>
          <div id="recaptcha-container"></div>
          <Typography.Title level={2}>Insira seu número para prosseguir com a marcação dos jogos </Typography.Title>
          <PhoneNumberInput onChange={(phoneNumber) => setPhoneNumber(phoneNumber)} />
          {/* <div>
                    <PhoneInput country={'br'} onlyCountries={['br']} value={phoneNumber} onChange={(phoneNumber) => setPhoneNumber(phoneNumber)} />
                    </div> */}
          <Button type="primary" size='large' style={{ maxWidth: '600px', width: "100%" }} onClick={sendOtp}>Enviar código via SMS</Button>
        </Flex>
        :
        <Flex style={{ padding: '0 15px' }} justify={"center"} align={"center"} gap={"middle"} vertical>
          <Typography.Title level={2}>Insira o código recebido </Typography.Title>
          <Input.OTP type="tel" value={otp} length={6} size={"large"} style={{ maxWidth: '600px', width: "100%" }} formatter={formatOTP} onChange={(code) => setOtp(code)}  />
          <Button type="primary" size='large' style={{ maxWidth: '600px', width: "100%" }} onClick={verifyOtp}>Verificar</Button>
          {/* <Button type="link">Reenviar código. </Button> */}
        </Flex>
      }
    </PageLayout>
  );
}