import React, { useEffect, useState } from 'react';
import Header from '../../component/Common/Header';
import Banner from '../../component/Common/Banner';
import Layout from '../../component/MyAccountDashboard/Layout';
import Address from '../../component/MyAccountDashboard/Address';
import AccountDetailsEdit from '../../component/MyAccountDashboard/AccountDetailsEdit';
// Data.
import { userAddress } from '../../app/data/userData';

import Footer from '../../component/Common/Footer';
const CustomerAddress = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState([]);

  //
  useEffect(() => {
    getUSerAddress(100);
  }, []);

  // toggle isEdit.
  const handleToggleEdit = () => {
    setIsEdit(prvState => !prvState);
  };

  const getUSerAddress = userId => {
    try {
      let userData = userAddress.filter(el => el.userId === userId);
      setData(userData);
    } catch (error) {
      console.log('Error in Address', error.message);
    }
  };

  return (
    <>
      <Header />
      <Layout>
        <Address data={data} />
      </Layout>
      <Footer />
    </>
  );
};

export default CustomerAddress;
