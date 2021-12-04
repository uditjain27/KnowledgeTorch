import { Fragment } from "react"
import NavBar from "../NavBar/NavBar"

const Layout = function (props) {
  return (
    <Fragment>
      <NavBar/>
      <main>
        {props.children}
      </main>
    </Fragment>
  )
}

export default Layout;