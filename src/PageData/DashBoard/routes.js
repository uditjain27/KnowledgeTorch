import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

//Users
const AllUsers = React.lazy(() => import('./views/users/AllUsers'));
const CreateNewUser = React.lazy(() => import('./views/users/CreateNewUser'));
const ReviewPage = React.lazy(() => import('../ReviewPage/ReviewPage'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard/main', name: 'Dashboard', component: Dashboard },
  { path: '/dashboard/allUsers', name: 'Dashboard', component: AllUsers },
  { path: '/dashboard/createNewUser', name: 'Dashboard', component: CreateNewUser },
  { path: '/dashboard/review', name: 'Dashboard', component: ReviewPage }
]

export default routes
