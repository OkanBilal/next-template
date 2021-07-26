import Head from "next/head";

function Error() {
  return (
    <div>
      <Head>
        <title>404</title>
      </Head>
      <p className="text-black dark:text-white font-semibold text-2xl">404</p>
    </div>
  );
}

export default Error;
