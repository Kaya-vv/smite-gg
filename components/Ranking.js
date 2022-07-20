import React from "react";
import tiers from "../lib/tiers";
function Ranking({ players, indexFirst, indexLast }) {
  const index = indexLast <= 50 ? indexFirst + 6 : indexFirst + 1;

  return (
    <>
      <div
        id="header"
        className="items-center py-4 px-6 grid grid-cols-3  md:grid-cols-5 mb-3 bg-[#191937] text-sm text-[#fff]"
      >
        <div className="rt-th ml-4">Rank</div>
        <div className="rt-th">Name</div>
        <div className="rt-th ">Tier</div>
        <div className="rt-th hidden md:inline">Rating</div>
        <div className="rt-th hidden md:inline">Win Rate</div>
      </div>
      <div className="body w-full bg-[#191937] px-6 rounded-md items-center py-2  ">
        {players?.slice(5, players?.length).map((player, id) => (
          <div
            key={id}
            className="row grid py-4 grid-cols-3 odd:bg-[#11112a] even:bg-[#191937] md:grid-cols-5"
          >
            <div className="col ml-6">{index + id}</div>
            <div className="col">{player?.Name}</div>
            <div className="col ">{tiers[player?.Tier]}</div>
            <div className="col hidden md:inline">
              {Math.round(player?.Rank_Stat_Conquest)}
            </div>
            <div className="col hidden md:inline">
              <div className="winrate space-x-4 font-medium text-sm">
                <span>
                  {Math.round(
                    (player?.Wins / (player?.Losses + player?.Wins)) * 100
                  ) + "%"}
                </span>
                <span>{player?.Wins + "W " + player?.Losses + "L"}</span>
              </div>
              <div
                id="wr-bar"
                className="mt-2 w-[100px] h-[4px] rounded-sm bg-[#25254b]"
              >
                <div
                  className="bg-blue-600 h-1"
                  style={{
                    width:
                      Math.round(
                        (player?.Wins / (player?.Losses + player?.Wins)) * 100
                      ) + "%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Ranking;
