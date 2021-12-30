import { Fragment } from "react"
import { useLocation } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import BTT from "../PageData/Home/BackToTop";
import Footer from "./Fotter";
import ChatBot from "./ChatBot/ChatBot";

const Layout = function (props) {
  const location = useLocation();
  console.log(location);
  return (
    <Fragment>
      {location.pathname === '/signup' ? '' : <NavBar/>}
      <main style={{marginTop: '80px', height: '100%', marginBottom:'-20px'}}>
        {props.children}
      </main>
      {location.pathname === '/signup' ? '' : <Footer></Footer>}
        <ChatBot />
      <BTT></BTT>
    </Fragment>
  )
}

export default Layout;