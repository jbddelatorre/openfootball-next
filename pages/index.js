import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import { sizing } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import HomeLayout from "../components/layouts/home";
import LoginCard from "../components/home/login";

const Home = () => (
  <HomeLayout>
    <Head title="Home" />
    <Box
      height={1}
      width={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <LoginCard />
    </Box>
  </HomeLayout>
);

export default Home;
