import Head from 'next/head';
import PropTypes from 'prop-types';
import { Header } from '../';
import { Sidebar } from '../';

export const Layout = ({ children, headTitle }) => {
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
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headTitle: PropTypes.string.isRequired
};
