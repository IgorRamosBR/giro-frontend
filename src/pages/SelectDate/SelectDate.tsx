import {Button, DatePicker, DatePickerProps, Flex, Typography} from "antd";
import {PageLayout} from "../../components/PageLayout/PageLayout";
import React, { useState } from "react";
import dayjs, {Dayjs} from "dayjs";
import { useNavigate } from "react-router-dom";

export const SelectDate = () => {
    const navigate = useNavigate()

    const [when, setWhen] = useState<string>('')

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
        if (date) {
            setWhen(date.toISOString())
        }
    };

    const handleFormat = (value: dayjs.Dayjs) => {
        return `${value.format("dddd")}, ${value.format("DD/MM/YYYY")}`;
    };

    const disabledDate = (current: Dayjs | null): boolean => {
        if (!current) return false; // Ensure current is valid
        const day = current.day(); // Get day of the week (0 = Sunday, 6 = Saturday)
        return day !== 0 && day !== 6; // Disable all days except Saturday (6) and Sunday (0)
    };


    return (
        <PageLayout>
            <Flex style={{padding: '0 15px'}} justify={"center"} align={"center"} gap={"middle"} vertical>
                <Typography.Title level={2}>Quando você deseja jogar? </Typography.Title>
                <DatePicker disabledDate={disabledDate} format={handleFormat} onChange={onChange} allowClear={false} size={"large"} style={{maxWidth: '600px', width: "100%"}}/>
                
                 <Button type="primary" size='large' style={{ maxWidth: '600px', width: "100%" }} onClick={() => navigate('/where')} disabled={when === ""}>Selecionar data</Button>
            </Flex>
        </PageLayout>
    )
}