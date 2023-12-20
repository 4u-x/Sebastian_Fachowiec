import React from "react";
import Head from 'next/head';
import App from "../components/app";
import Script from 'next/script';
import Main from "../components/Main"



export default function Home(props) {
  
  return (
    <>
      <Head>
        <title>Fachowiec</title>
      </Head>

      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
      />

      <App/>
      <Main/>
      
    </>
  );
}

export async function getServerSideProps(context) {
  
  const response = await fetch("http://localhost:5000/");
  const data = await response.json(); 

  
  return {
    props: { data }, 
  };
}
