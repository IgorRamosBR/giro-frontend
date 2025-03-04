import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './LoadingPage.css'; // For optional custom styling

const LoadingPage: React.FC = () => {
  // Customizing the loading icon
  const loadingIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

  return (
    <div className="loading-container">
      <Spin indicator={loadingIcon} tip="Loading, please wait..." />
    </div>
  );
};

export default LoadingPage;
