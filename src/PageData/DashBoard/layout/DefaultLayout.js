import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'


import '../scss/style.scss';

const DefaultLayout = () => {
  return (
    <div className='use_coreui_css'>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          {/* <AppContent /> */}
        </div>
        <AppFooter />
      </div>
      <p>All Good</p>
    </div>
  )
}

export default DefaultLayout
