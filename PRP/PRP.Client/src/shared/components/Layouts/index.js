import Header from "../Header";
import Sidebar from "../Sidebar";
import Head from "next/head";

const Layout = ({ children, headTitle }) => {
  return (
    <>
      <Sidebar />
      <Head>
        <title>{`Partner Reporting Package - ${ headTitle }`}</title>
        <meta name="description" content="CDL Last Mile partner reporting package" />
      </Head>

      <Header />

      <div className="container px-4">
        {children}
      </div>
    </>
  )
}

export default Layout;