import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navabr';
import TopCourse from '@/components/TopCourse';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const layout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            {/* <Navbar></Navbar> */}
            {/* <ToastContainer></ToastContainer> */}
            {children}

            {/* <Footer></Footer> */}
             
        </div>
    );
};

export default layout;