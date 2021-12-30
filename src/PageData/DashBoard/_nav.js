import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Users',
  },
  {
    component: CNavItem,
    name: 'All Users',
    to: '/allUsers',
    icon: <i className="fas fa-users" style={{padding: '0 7px', fontSize: '20px', marginRight: '15px'}}></i>,
  },
  {
    component: CNavItem,
    name: 'Create new user',
    to: '/createNewUser',
    icon: <i className="fas fa-user-plus" style={{padding: '0 7px', fontSize: '20px', marginRight: '15px'}}></i>,
  },
  {
    component: CNavTitle,
    name: 'Others',
  },
  {
    component: CNavItem,
    name: 'Review Resources',
    to: '/theme/typography',
    icon: <i className="far fa-file-pdf" style={{padding: '0 7px', fontSize: '20px', marginRight: '15px'}}></i>,
  },{
    component: CNavItem,
    name: 'Global Topics',
    to: '/theme/colors',
    icon: <i className="fas fa-globe-asia" style={{padding: '0 7px', fontSize: '20px', marginRight: '15px'}}></i>,
  },
]

export default _nav
