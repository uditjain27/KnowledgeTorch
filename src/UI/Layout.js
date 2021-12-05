import { Fragment } from "react"
import { useLocation } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import BTT from "../PageData/Home/BackToTop";
import Footer from "./Fotter";

const Layout = function (props) {
  const location = useLocation();
  return (
    <Fragment>
      {location.pathname === '/signup' ? '' : <NavBar/>}
      <main style={{marginTop: '80px', height: '100%', marginBottom:'-20px'}}>
        {props.children}
      </main>
      {location.pathname === '/signup' ? '' : <Footer></Footer>}
      <BTT></BTT>
    </Fragment>
  )
}

export default Layout;