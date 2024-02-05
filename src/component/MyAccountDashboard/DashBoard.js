import React from 'react';
import BarChart from '../VendorDashboard/BarChart';
import LineChart from '../VendorDashboard/LineChart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import pdf from '../../app/data/andshop-invoice.pdf';

const DashBoard = () => {
  let products = useSelector(state => state.products.products);
  return (
    <>
      <div className='row'>
        <div className='col-lg-12 col-md-6 col-sm-6 col-12'>
          <div className='vendor_order_boxed pt-4'>
            <h4>Orders</h4>
            <table className='table pending_table'>
              <thead className='thead-light'>
                <tr>
                  <th scope='col'>Order Id</th>
                  <th scope='col'>Product Name</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Order Date</th>
                  <th scope='col'>Status</th>
                  <th scope='col'>Invoice</th>
                </tr>
              </thead>
              <tbody>
                {products.slice(1, 5).map((data, index) => (
                  <tr key={index}>
                    <td>
                      <Link href='/invoice-one' className='text-primary'>
                        #78153
                      </Link>
                    </td>

                    <td>
                      {' '}
                      <img width='52px' src={data.img} alt='img' className='mr-2' />
                      {data.title}
                    </td>
                    <td>${data.price}</td>
                    <td>May 10, 2018</td>

                    <td>
                      {/* Todo : change badge w.r.t to status. */}
                      <span className='badge badge-success'>Shipped</span>
                    </td>
                    <td>
                      {' '}
                      <td>
                        <a href={pdf} className='view' download>
                          Download
                        </a>
                      </td>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
