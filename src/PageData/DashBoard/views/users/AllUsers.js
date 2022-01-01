import React, { lazy, useEffect, useState } from 'react'

import {
  CAvatar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cifIn,
  cilPeople,
} from '@coreui/icons'
import { URL } from '../../../../store/helper'
import { useSelector } from 'react-redux'

const avatar = 'https://freesvg.org/img/abstract-user-flat-4.png'

const AllUsers = () => {

  const [userData, setUserData] = useState([]);
  const token = useSelector((state) => state.loginStore.token);

  const fetchData = async function (pageNo = 1) {
    try {
      const response = await fetch(`${URL}/users?pageSize=10&pageNo=${pageNo}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      });

      if (!response.ok) {
        throw new Error("unable to fetch users list");
      }

      const data = await response.json();
      data.content.forEach(element => {
        var newDate = new Date(element.lastLoggedIn);
        var year = newDate.getFullYear();
        var month = newDate.getMonth() + 1;
        var dt = newDate.getDate();

        if (dt < 10) {
          dt = '0' + dt;
        }
        if (month < 10) {
          month = '0' + month;
        }

        element.lastLoggedIn = dt + '-' + month + '-' + year;

        newDate = new Date(element.createdDate);
        year = newDate.getFullYear();
        month = newDate.getMonth() + 1;
        dt = newDate.getDate();

        if (dt < 10) {
          dt = '0' + dt;
        }
        if (month < 10) {
          month = '0' + month;
        }

        element.createdDate = dt + '-' + month + '-' + year;
        var role = element.roles.split(',');
        if(role.includes('ROLE_ADMIN')){
          element.role = 'ADMIN';
        }else if(role.includes('ROLE_USER')){
          element.role = 'USER';
        }
      });
      setUserData(data.content);
      return data;
    }catch(error){
      alert(error);
    }
  };

  useEffect(() => {
    const data = fetchData();
    console.log(userData);
  }, []);


  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>All Users</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      UserName
                    </CTableHeaderCell>
                    <CTableHeaderCell>User</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Country</CTableHeaderCell>
                    <CTableHeaderCell>Organisation</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Specialization</CTableHeaderCell>
                    <CTableHeaderCell>Activity</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>

                {/* Body of table */}
                <CTableBody>
                  {userData.length !== 0 ? userData.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <div className="small text-medium-emphasis">{item?.username}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item?.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item?.role}</span> | Registered:{' '}
                          {item?.createdDate}
                        </div>
                        <div>{item?.email}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={cifIn} title='IND' />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className="small text-medium-emphasis">{item?.organization}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item?.specialization}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last login</div>
                        <strong>{(item.lastLoggedIn)}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))
                    : ''}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default AllUsers;
