import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'
import AllUsers from '../views/users/AllUsers'

const AppContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Switch>
          {/* {routes.map((route, idx) => {
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
          })} */}
          <Route path='/allUsers'>
            <AllUsers/>
          </Route>
          <Redirect from="/abcd" to="/allUsers"></Redirect>
        </Switch>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
