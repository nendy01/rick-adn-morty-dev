import React from "react"
import { BrowserRouter } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import Routers from "./Routers"

const Layout = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
            <Routers />
      <Footer />
    </BrowserRouter>
    </>
  );
};

export default Layout;
