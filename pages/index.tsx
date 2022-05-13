import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import components
import Navbar from "../components/Navbar";
import ContactBar from "../components/ContactBar";
import Profile from "../components/Profile";
import Biography from "../components/Biography";

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <Profile />
      </div>
      <Biography />
    </div>
  );
};

export default Home;