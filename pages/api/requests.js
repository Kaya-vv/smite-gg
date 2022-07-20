import md5 from "md5";

const developerId = "3693";
const AUTH_KEY = "152CD114931245FBA675EBA6D7FA254B";
const date = new Date();

const utc_timestamp =
  date.getFullYear() +
  ("0" + (date.getUTCMonth() + 1)).slice(-2) +
  ("0" + date.getUTCDate()).slice(-2) +
  ("0" + date.getUTCHours()).slice(-2) +
  ("0" + date.getUTCMinutes()).slice(-2) +
  ("0" + date.getUTCSeconds()).slice(-2);
const signature = (method) => {
  return md5(developerId + method + AUTH_KEY + utc_timestamp);
};

export const getFetchUrl = (method, session, tier, playerId) => {
  switch (method) {
    case "createsession":
      return `/createsessionJson/${developerId}/${signature(
        method
      )}/${utc_timestamp}`;
    case "getleagueleaderboard":
      return `/getleagueleaderboardJson/${developerId}/${signature(
        method
      )}/${session}/${utc_timestamp}/451/${tier}/1`;
    case "testsession":
      return `/testsessionJson/${developerId}/${signature(
        method
      )}/${session}/${utc_timestamp}
`;
    case "getleagueseasons":
      return `/getleagueseasonsJson/${developerId}/${signature(
        method
      )}/${session}/${utc_timestamp}/426`;
    case "getplayer":
      return `/getplayerJson/${developerId}/${signature(
        method
      )}/${session}/${utc_timestamp}/${playerId}`;
    case "getmatchhistory":
      return `/getmatchhistoryJson/${developerId}/${signature(
        method
      )}/${session}/${utc_timestamp}/4119370`;
    default:
      return "no url";
  }
};
const requests = {
  createSession: {
    fetch: `/createsessionJson/${developerId}/${signature(
      "createsession"
    )}/${utc_timestamp}`,
  },
  getLeaderboard: {
    fetch: `/getleagueleaderboardJson/${developerId}/${signature}/{session}/{timestamp}/{queue}/{tier}/{round}`,
  },
};

export default requests;
