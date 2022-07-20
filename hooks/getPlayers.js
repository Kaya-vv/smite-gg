import axios from "axios";
import React from "react";
import { getFetchUrl } from "../pages/api/requests";
import tiers from "../lib/tiers";

async function getPlayers(session) {
  const playerArray = [];
  const tier = Object.keys(tiers);

  const lastTier = [Object.keys(tiers)[Object.keys(tiers).length - 1]];

  for (let i = tier[0]; i <= lastTier; i++) {
    const request = getFetchUrl("getleagueleaderboard", session, i);
    const result = await axios
      .get("https://api.smitegame.com/smiteapi.svc" + request)
      .then(({ data }) => {
        return data;
      });

    for (let i = 0; i < result.length; i++) {
      if (result[i].Name === "") continue;
      playerArray.push(result[i]);
    }
  }

  return playerArray;
}

export default getPlayers;
