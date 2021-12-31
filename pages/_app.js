import "../styles/globals.css";
import Layout from "components/Layout";
import 'react-tabs/style/react-tabs.css';
import 'react-dropdown/style.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
