import React, { Suspense } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'


import '../scss/style.scss';
import Dashboard from '../views/dashboard/Dashboard';
import AllUsers from '../views/users/AllUsers';
import routes from '../routes'

const DefaultLayout = () => {
  return (
    <div className='use_coreui_css'>
      {/* <Suspense fallback={<CSpinner color="primary" />}>
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <>
                      <route.component {...props} />
                    </>
                  )}
                />
              )
            )
          })}
        </Switch>
      </Suspense> */}
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        {/* <AppFooter /> */}
      </div>
      <p>All Good</p>
    </div >
  )
}

export default DefaultLayout
