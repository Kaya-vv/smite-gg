import axios from "axios";
import React from "react";
import { getFetchUrl } from "../pages/api/requests";
import tiers from "../lib/tiers";

async function getTopFive(players, session) {
  let tempDetail = [];
  const sortedPlayers = [].concat(players).sort((a, b) => {
    if (a.Tier > b.Tier) {
      return -1;
    }
    if (a.Tier < b.Tier) {
      return 1;
    }
    if (a.Tier == b.Tier) {
      if (a.Rank_Stat_Conquest > b.Rank_Stat_Conquest) {
        return -1;
      }
      if (a.Rank_Stat_Conquest < b.Rank_Stat_Conquest) {
        return 1;
      }
    }
    return 1;
  });
  const topFive = sortedPlayers.slice(0, 5);

  for (let i = 0; i < topFive.length; i++) {
    const request = getFetchUrl(
      "getplayer",
      session,
      null,
      topFive[i]?.player_id
    );
    const result = await axios.get(
      "https://api.smitegame.com/smiteapi.svc" + request,
      { crossdomain: true }
    );

    tempDetail.push(result.data[0]);
  }

  return tempDetail;
}

export default getTopFive;
