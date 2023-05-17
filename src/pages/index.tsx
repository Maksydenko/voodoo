import { NextPage } from "next";
import Layout from "@/components/layout/Layout";
import HomePage from "@/components/screens/Home/Home";

const Home: NextPage = () => (
  <Layout title="VooDoo Test" className="home">
    <HomePage />
  </Layout>
);

export default Home;
