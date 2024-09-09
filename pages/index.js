import Main from "../components/Main/Main";
import Head from "next/head";
import Products from "../components/Products/Products";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Sample from "../components/Sample/Sample";
import { useSelector, useDispatch } from "react-redux";

import { setTokenUser } from "../redux/siteDataReducer";

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();

  const categoryId = true;
  const [data, setData] = useState([]);
  const [token1, setToken1] = useState(null);
  useEffect(() => {
    // Check if window object is defined (client-side)
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("access_token");
      setToken1(storedToken);
      dispatch(setTokenUser(storedToken));
    }
  }, [router]);
  // console.log(token1);
  return (
    <>
      <Head>
        <title>XNARX - MARKET</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={"/Assets/Images/news/new3.png"} />
      </Head>
      {token1 ? <Main /> : <Sample />}
    </>
  );
}
