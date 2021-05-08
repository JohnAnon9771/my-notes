import 'styles/global.css'

import {AppProps} from 'next/app'
import Head from 'next/head'

import {Header, Aside} from 'components'

export default function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <div className="flex w-screen" style={{height: 'calc(100vh - 88px)'}}>
        <Aside />
        <Component {...pageProps} />
      </div>
    </>
  )
}
