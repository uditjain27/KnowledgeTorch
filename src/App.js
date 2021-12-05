import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './PageData/Home/Home';
import DashBoard from './PageData/DashBoard/DashBoard';
import Upload from './PageData/Upload/Upload';
import Contributor from './PageData/Contributor/Contributor';
import ContactUs from './PageData/ContactUs/ContactUs';
import SearchedResult from './PageData/SearchResult/SearchedResult';
import Profile from './PageData/Profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import ViewPopup from './ViewDocument/ViewPopup';
import Layout from './UI/Layout';
import { LoginActions } from './store/login-slice';
import Login_Register from './Signin/Login_Register';

function App() {

  const isLogin = useSelector((state) => state.loginStore.isLogin);
  const dispatch = useDispatch();
  const data = JSON.parse(localStorage.getItem("credentials"));
  console.log(data);

  useEffect(()=>{
    if(data){
      dispatch(LoginActions.setIsLogin(data));
    }
  },[]);

  return (
    <Layout>
      <Switch>
        <Route path='/home' exact>
          <Home></Home>
        </Route>
        <Route path='/dashboard'>
          <DashBoard />
        </Route>
        <Route path='/uploads'>
          <Upload />
        </Route>
        <Route path='/topcontributors'>
          <Contributor />
        </Route>
        <Route path='/contactus'>
          <ContactUs />
        </Route>
        <Route path='/search'>
          <SearchedResult />
        </Route>
        {isLogin && <Route path='/profile'>
          <Profile />
        </Route>}
        <Route path='/home/content/:documentId'>
          <ViewPopup />
        </Route>
        {!isLogin && <Route path='/signup'>
          <Login_Register/>
        </Route>}
        <Route path='*'>
          <Redirect to='/home' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
