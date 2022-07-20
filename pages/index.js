import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Leaderboard from "../components/Leaderboard";
import checkSession from "../hooks/checkSession";
import getPlayers from "../hooks/getPlayers";
import Cookies from "cookies";
import Landing from "../components/Landing";

export default function Home() {
  return <Landing />;
}
