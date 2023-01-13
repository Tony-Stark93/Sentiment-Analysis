// import Head from 'next/head'
// import { Inter } from '@next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Sentiment Analysis AI</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>

//       <h1 className='4xl text-green-400'>deez</h1>

//       {/* <Home></Home> */}
//     </>
//   )
// }


import type { NextPage } from 'next';
import Head from 'next/head';
import MainPage from './main-page';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sentiment Analysis</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage />
    </>
  );
};

export default Home;