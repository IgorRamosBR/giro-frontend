import React, {useState} from "react";
import {Input, message, Flex} from "antd";
import {parsePhoneNumberFromString} from "libphonenumber-js";

// Brazil flag image URL
const brazilFlagUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png";

interface PhoneNumberProps {
    onChange: (phoneNumber: string) => void
}
const PhoneNumber: React.FC<PhoneNumberProps> = ({ onChange }) => {
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>(true);

    // Function to format the phone number as the user types
    const formatPhoneNumber = (value: string) => {
        // Remove all non-numeric characters
        let cleanedValue = value.replace(/\D/g, "");

        // Format based on Brazilian phone number format
        if (cleanedValue.length <= 2) {
            return `(${cleanedValue}`;
        } else if (cleanedValue.length <= 6) {
            return `(${cleanedValue.slice(0, 2)}) ${cleanedValue.slice(2)}`;
        } else if (cleanedValue.length <= 10) {
            return `(${cleanedValue.slice(0, 2)}) ${cleanedValue.slice(2, 7)}-${cleanedValue.slice(7, 11)}`;
        } else {
            return `(${cleanedValue.slice(0, 2)}) ${cleanedValue.slice(2, 7)}-${cleanedValue.slice(7, 11)}`;
        }
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPhoneNumber = e.target.value;

        // Remove any non-numeric characters
        const cleanedPhoneNumber = newPhoneNumber.replace(/\D/g, "");

        // Format the phone number
        const formattedPhoneNumber = formatPhoneNumber(cleanedPhoneNumber);

        setPhoneNumber(formattedPhoneNumber);

        // Validate the phone number for Brazil
        const phoneNumberParsed = parsePhoneNumberFromString(formattedPhoneNumber, "BR");

        if (phoneNumberParsed && phoneNumberParsed.isValid()) {
            setIsValid(true);
            onChange('+55' + formattedPhoneNumber)
        } else {
            setIsValid(false);
        }
    };

    return (
        <Flex gap={"small"} align="center" style={{maxWidth: '600px', width: "100%"}}>
            <img src={brazilFlagUrl} alt="Brazil Flag" style={{width: "24px", height: "16px", marginRight: "8px"}}/>
            <span>(+55)</span>
            <Input
                placeholder="Digite o número do telefone"
                value={phoneNumber}
                onChange={handlePhoneChange}
                size={"large"}
                style={{
                    width: "100%",
                    borderColor: isValid ? "" : "red", // Highlight in red if the number is invalid
                }}
                maxLength={15} // Brazilian phone numbers typically have a max of 15 characters
            />
        </Flex>
    );
};

export default PhoneNumber;
