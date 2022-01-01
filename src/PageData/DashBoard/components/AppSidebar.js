import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'

import { AppSidebarNav } from './AppSidebarNav'


import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'
import { Link } from 'react-router-dom'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/" style={{padding: '5px 0'}}>
        {/* <CIcon icon={logoNegative} height={35} /> */}
        <Link to='/home' style={{textDecoration: 'none', color: '#E4E6E9', margin: '12px 0'}}>
          <div className="sidebar-brand-full" style={{ fontSize: '25px' }}>
            Knowledge
          </div>
          <span className="sidebar-brand-full" style={{ fontSize: '25px', padding: '0 10px' }}>
            Torch
          </span>
          <i className={`fas fa-book-open sidebar-brand-full`} style={{ fontSize: '30px', padding: '0 0px'  }}></i>

          <i
            className={`fas fa-book-open sidebar-brand-narrow`}
            style={{ fontSize: '30px'}}
          />
        </Link>
        {/*<CIcon className="sidebar-brand-narrow" icon={sygnet} /> */}
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
