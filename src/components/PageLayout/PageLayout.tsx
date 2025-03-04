import React from "react";
import {ArrowLeftOutlined} from '@ant-design/icons';
import {useNavigate} from "react-router-dom";
import "./PageLayout.css"

interface PageLayoutProps {
    children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    const navigate = useNavigate();

    return (
        <div>
            <header className="header">
                <div className="header-navbar">
                    <div className={"header-back-button"}>
                        <ArrowLeftOutlined onClick={() => navigate(-1)}/>
                    </div>
                    {/*<p>Verifique seu número de celular</p>*/}
                </div>
                {/*<div className="header-content">*/}
                {/*    <img*/}
                {/*        src="/logo2.png" // Replace with your logo's path*/}
                {/*        alt="Logo"*/}
                {/*        className="header-logo"*/}
                {/*    />*/}
                {/*</div>*/}
                {/*<Divider style={{ borderColor: '#DDD' }}/>*/}
            </header>
            <div className={"content"}>
                {children}
            </div>
        </div>
    )
}