import '../styles/globals.css';
import HeaderMenu from '../components/HeaderMenu';

function MyApp({ Component, pageProps }) {
  return <HeaderMenu>
    <Component {...pageProps} />
  </HeaderMenu>
}

export default MyApp
