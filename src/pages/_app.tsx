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
      <div
        className="flex flex-col md:flex-row p-5 lg:p-0 leading-loose w-screen gap-24"
        style={{height: 'calc(100vh - 94px)'}}
      >
        <Aside />
        <Component {...pageProps} />
      </div>
    </>
  )
}
