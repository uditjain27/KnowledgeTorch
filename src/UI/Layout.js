import { Fragment } from "react"
import { useLocation } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import BTT from "../PageData/Home/BackToTop";
import Footer from "./Fotter";
import ChatBot from "./ChatBot/ChatBot";

const Layout = function (props) {
  const location = useLocation();
  var loc = 'aaaa';
  if (location?.pathname) {
    loc = location.pathname.split('/')[1];
    console.log(loc);
  }
  return (
    <Fragment>
      {(loc === 'signup' || loc === 'dashboard') ? '' : <NavBar />}
      <main style={{ marginTop: `${loc === 'dashboard' ? '0' : '80'}px`, height: '100%', marginBottom: '-20px' }}>
        {props.children}
      </main>
      {(loc === 'signup' || loc === 'dashboard') ? '' : <Footer></Footer>}
      <ChatBot />
      <BTT></BTT>
    </Fragment>
  )
}

export default Layout;