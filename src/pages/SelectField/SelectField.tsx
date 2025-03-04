import {PageLayout} from "../../components/PageLayout/PageLayout";
import {Button, Carousel, Flex, Space, Typography} from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#D03737',

};

export const SelectField = () => {
    const navigate = useNavigate()

    const schedules: string[] = ["08:00", "10:00", "12:00"];

    return (
        <PageLayout>
            <Flex style={{padding: '0 15px'}} justify={"center"} align={"center"} gap={"middle"} vertical>
                <Typography.Title level={2}>Onde você deseja jogar? </Typography.Title>
                <div style={{width: "100%", maxWidth: 400}}>
                    <Carousel arrows infinite={false}>
                        <div>
                            <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>3</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>4</h3>
                        </div>
                    </Carousel>
                </div>
                <Typography.Title level={4} style={{marginTop: 0, marginBottom: 0}}>Campo do São Basílio </Typography.Title>
                <Space
                    direction="horizontal"
                    size="middle"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "20px",
                        flexWrap: "wrap", // Wrap if there are too many items
                        gap: "10px",
                        maxWidth: '600px',
                    }}
                >
                    {schedules.map((time) => (
                        <div
                            key={time}
                            style={{
                                backgroundColor: "#D03737",
                                opacity: 0.8, // Opacity for background
                                color: "#fff",
                                padding: "10px 20px",
                                borderRadius: "8px",
                                textAlign: "center",
                                fontWeight: "bold",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                            }}
                        >
                            {time}
                        </div>
                    ))}
                </Space>
                <Button type="primary" size='large' style={{maxWidth: '400px', width: "100%"}} onClick={() => navigate('/when')}>Quero jogar aqui</Button>
            </Flex>
        </PageLayout>
    )
}