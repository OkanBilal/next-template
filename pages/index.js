import { useTheme } from 'next-themes'
import Toggle from '../components/toggle'
import Header from '../components/header'
import Head from 'next/head'


export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <p className=" text-black dark:text-white font-semibold text-2xl ">
        Home
      </p>
      <button
        className="mt-16 mb-16 px-4 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md"
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        }}
      >
        Change Theme
      </button>
    </div>
  )
}
