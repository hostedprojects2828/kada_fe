import React from 'react';
import Header from '../../component/Common/Header';
import Layout from '../../component/MyAccountDashboard/Layout';
import Dashboard from '../../component/MyAccountDashboard/DashBoard';
import TopTabs from '../../component/MyAccountDashboard/TopTabs';

import Footer from '../../component/Common/Footer';
const MyAccounts = () => {
  return (
    <>
      <Header />
      <Layout>
        <TopTabs />
        <Dashboard />
      </Layout>
      <Footer />
    </>
  );
};

export default MyAccounts;
