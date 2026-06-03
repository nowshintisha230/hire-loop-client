import DashboardSideBar from '@/components/dashboard/DashboardSideBar';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div>
        <DashboardSideBar></DashboardSideBar>
           <div>{children}</div> 
        </div>
    );
};

export default DashboardLayout;