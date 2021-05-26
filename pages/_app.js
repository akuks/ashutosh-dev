import '../styles/globals.css'
import { Fragment } from "react";
import HeaderComponent from "../components/Header/HeaderComponent";

function MyApp({ Component, pageProps }) {
  return (
      <Fragment>
        <HeaderComponent />
        <Component {...pageProps} />
      </Fragment>

  )
}

export default MyApp
