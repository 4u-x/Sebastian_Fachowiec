import React from "react";
import Head from 'next/head';
import App from "../components/app";
import Script from 'next/script';


export default function Home(props) {
  // Use the props here, which are returned from getServerSideProps
  return (
    <>
      <Head>
        <title>TODO</title>
      </Head>

      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
      />

      <App/>
      {/* Example usage of props */}
      <div>Data from server: {JSON.stringify(props.data)}</div>
    </>
  );
}

export async function getServerSideProps(context) {
  // Fetch data here
  const response = await fetch("http://localhost:5000/api/home");
  const data = await response.json(); // Parse the JSON data

  // Return the data as props
  return {
    props: { data }, // This data can be accessed as props in your page component
  };
}
