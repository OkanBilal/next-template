import Head from 'next/head'


import React from 'react'

export default function about() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <p className=" text-black dark:text-white font-semibold text-2xl ">
        About
      </p>
    </div>
  )
}
