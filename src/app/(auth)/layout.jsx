import Header from '@/components/Header';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const layout = ({ children }) => {
    return (
        <div>
            <ToastContainer>
                
            </ToastContainer>
            <Header />
            {children}
        </div>
    );
};

export default layout;