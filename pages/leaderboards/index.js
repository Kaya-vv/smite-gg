import React from "react";
import Leaderboard from "../../components/Leaderboard";
import checkSession from "../../hooks/checkSession";
import getPlayers from "../../hooks/getPlayers";
import Cookies from "cookies";
import getTopFive from "../../hooks/getTopFive";
export async function getServerSideProps({ req, res }) {
  const cookie = new Cookies(req, res);
  const session = await checkSession(req, res);

  cookie.set("session", session);
  const playerArray = await getPlayers(session);
  const topFive = await getTopFive(playerArray, session);

  return {
    props: {
      data: playerArray,
      session: session,
      topFive: topFive,
    },
  };
}
function index({ data, session, topFive }) {
  return <Leaderboard playerArray={data} session={session} topFive={topFive} />;
}

export default index;
