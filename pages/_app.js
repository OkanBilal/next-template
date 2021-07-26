import '../styles/global.css'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import Header from '../components/header'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/static/icon-favicon-32x32.png" />
      </Head>

      <div className="antialiased">
        <Layout>
          <Header />
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
