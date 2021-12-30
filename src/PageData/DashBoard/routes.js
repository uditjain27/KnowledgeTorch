import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

//Users
const AllUsers = React.lazy(() => import('./views/users/AllUsers'));
const CreateNewUser = React.lazy(() => import('./views/users/CreateNewUser'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/allUsers', name: 'Dashboard', component: AllUsers },
  { path: '/createNewUser', name: 'Dashboard', component: CreateNewUser }
]

export default routes
