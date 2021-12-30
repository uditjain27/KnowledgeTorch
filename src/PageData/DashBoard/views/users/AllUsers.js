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

const avatar = 'https://freesvg.org/img/abstract-user-flat-4.png'

const AllUsers = () => {

  const [userData, setUserData] = useState([]);

  const fetchData =async function(pageNo){
    const response = await fetch('',{});
    
  };

  useEffect(() => {
    //const data = await fetchData();
  },[]);
  
  const tableExample = [
    {
      user: {
        name: 'Yiorgos Avraamu',
        role: 'student',
        registered: 'Jan 1, 2021',
      },
      country: { name: 'IND', flag: cifIn },
      organisation: 'Dr. Akhilesh Das Gupta Institute of TEchnology and Management',
      specialization: 'Btech',
      activity: '10 sec ago',
    },
    {
      user: {
        name: 'Yiorgos Avraamu',
        role: 'student',
        registered: 'Jan 1, 2021',
      },
      country: { name: 'IND', flag: cifIn },
      organisation: 'Dr. Akhilesh Das Gupta Institute of TEchnology and Management',
      specialization: 'Btech',
      activity: '10 sec ago',
    },
    {
      user: {
        name: 'Yiorgos Avraamu',
        role: 'student',
        registered: 'Jan 1, 2021',
      },
      country: { name: 'IND', flag: cifIn },
      organisation: 'Dr. Akhilesh Das Gupta Institute of TEchnology and Management',
      specialization: 'Btech',
      activity: '10 sec ago',
    },
    {
      user: {
        name: 'Yiorgos Avraamu',
        role: 'student',
        registered: 'Jan 1, 2021',
      },
      country: { name: 'IND', flag: cifIn },
      organisation: 'Dr. Akhilesh Das Gupta Institute of TEchnology and Management',
      specialization: 'Btech',
      activity: '10 sec ago',
    },
    {
      user: {
        name: 'Yiorgos Avraamu',
        role: 'student',
        registered: 'Jan 1, 2021',
      },
      country: { name: 'IND', flag: cifIn },
      organisation: 'Dr. Akhilesh Das Gupta Institute of TEchnology and Management',
      specialization: 'Btech',
      activity: '10 sec ago',
    },
    {
      user: {
        name: 'Yiorgos Avraamu',
        role: 'student',
        registered: 'Jan 1, 2021',
      },
      country: { name: 'IND', flag: cifIn },
      organisation: 'Dr. Akhilesh Das Gupta Institute of TEchnology and Management',
      specialization: 'Btech',
      activity: '10 sec ago',
    }
  ]

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
                      <CIcon icon={cilPeople} />
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
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="sm" src='https://freesvg.org/img/abstract-user-flat-4.png' status='success' />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.role}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.specialization.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last login</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
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
