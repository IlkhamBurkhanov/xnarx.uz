import {useState} from "react";
import { Provider } from "react-redux";
import Layout from "../components/Layout/Layout";
import { store } from "../redux/store";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


function MyApp({ Component, pageProps }) {
    const [queryClient] = useState(() => new QueryClient());
  return (
      <QueryClientProvider client={queryClient}>
          <Provider store={store}>
              <Layout>
                  <Component {...pageProps} />
              </Layout>
          </Provider>
      </QueryClientProvider>
  );
}

export default MyApp;
