import { Provider } from 'react-redux';
import getStore from '../store/store';
import '../styles/globals.css';
import NextNProgress from "nextjs-progressbar";


function MyApp({ Component, pageProps }) {
  const store = getStore(pageProps.initialState);
  return (
    <Provider store={ store }>
      <NextNProgress
        color="linear-gradient(90deg, rgba(170,166,242,1) 0%, rgba(79,70,229,1) 40%, rgba(79,70,229,1) 100%)"
        height={3}
      />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp;