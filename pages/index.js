import Main from "../components/Main/Main";
import Head from "next/head";
import Products from "../components/Products/Products";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Home() {
  const categoryId = useSelector((state) => state.data.categoryId);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://intex-shop-production.up.railway.app/api/products?current_page=1`
  //     )
  //     .then((res) => setData(res.data.result))
  //     .catch((e) => {});
  // }, [categoryId]);

  return (
    <>
      <Head>
        <title>XNARX - MARKET</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href={"/Assets/Images/Logo/logo.svg"} /> */}
      </Head>
      {categoryId ? <Products data={data} /> : <Main />}
    </>
  );
}
