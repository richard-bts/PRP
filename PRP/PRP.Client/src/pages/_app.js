import { Provider } from 'react-redux';
import getStore from '../store/store';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const store = getStore(pageProps.initialState);
  return (
    <Provider store={ store }>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp;