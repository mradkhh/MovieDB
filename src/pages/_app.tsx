import type { AppProps } from 'next/app'
import 'styles/normalize.css'
import 'styles/index.scss'
import 'static/fonts/stylesheet.css'
import {Provider} from "react-redux";
import store from "store/store";


function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
}

export default MyApp
