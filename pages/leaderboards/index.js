import React from "react";
import Leaderboard from "../../components/Leaderboard";
import checkSession from "../../hooks/checkSession";
import getPlayers from "../../hooks/getPlayers";
import Cookies from "cookies";
export async function getServerSideProps({ req, res }) {
  const cookie = new Cookies(req, res);
  const session = await checkSession(req, res);

  cookie.set("session", session);
  const playerArray = await getPlayers(session);

  return {
    props: {
      data: playerArray,
      session: session,
    },
  };
}
function index({ data, session }) {
  return <Leaderboard playerArray={data} session={session} />;
}

export default index;
