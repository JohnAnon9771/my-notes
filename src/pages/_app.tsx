import {AppProps} from 'next/app'
import Head from 'next/head'

import GlobalStyle from 'styles/globals'

import {Header, Aside} from 'components'

export default function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <Aside />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}
