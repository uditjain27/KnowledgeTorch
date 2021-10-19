import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './PageData/Home/Home';
import DashBoard from './PageData/DashBoard/DashBoard';
import Upload from './PageData/Upload/Upload';
import Contributor from './PageData/Contributor/Contributor';
import ContactUs from './PageData/ContactUs/ContactUs';
import Profile from './PageData/Profile/Profile';

function App() {


  /* const [page, UpdatePageState] = useState(<Home></Home>);

  function UpdatePage(state) {
    let element;
    switch (state) {
      case 'Home': element = <Home></Home>;
        break;
      case 'DashBoard': element = <DashBoard></DashBoard>;
        break;
      case 'Uploads': element = <Upload></Upload>;
        break;
      case 'Top Contributors': element = <Contributor></Contributor>;
        break;
      case 'Contact Us': element = <ContactUs></ContactUs>;
        break;
      default: element = <Home></Home>;
        break;
    }

    UpdatePageState(element);
  } */

  return (
      <Switch>
        <Route path='/home'>
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
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='*'>
          <Redirect to='/home' />
          {/* <Home /> */}
        </Route>
        {/* <div className="App">
      <NavBar UpdatePage={UpdatePage}></NavBar>
      {page}
    </div> */}
      </Switch>
  );
}

export default App;
