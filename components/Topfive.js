import Cookies from "universal-cookie";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getFetchUrl } from "../pages/api/requests";
import godBackground from "../public/Miss Misery Nike.jpeg";

function Topfive({ players, session, handleLoading }) {
  const [detailed, setDetailed] = useState();
  console.log(session);

  return (
    <div
      id="leaderboard_top-five"
      className="grid grid-flow-col grid-cols-4 gap-3 mb-3 text-sm font-semibold"
    >
      {players?.map((player, id) => (
        <div
          key={player.Id}
          id="top-five"
          className={
            id == 0
              ? "relative flex items-center p-6 row-start-1 col-start-1 overflow-hidden row-end-2 col-end-5 bg-[#191937] rounded-md godBg"
              : "row-start-2 row-end-3 p-3 bg-[#191937] rounded-md overflow-hidden"
          }
        >
          {id == 0 && (
            <div
              id="champion-bg"
              className="absolute w-[400px] h-full right-0 rounded-md overflow-hidden"
            >
              <img src={godBackground.src} />
            </div>
          )}
          <div
            id="ranking-info-container"
            className={
              id == 0 ? "flex items-center flex-1 relative" : "relative"
            }
          >
            {id != 0 && (
              <>
                <div
                  id="ranking-header"
                  className="flex items-center flex-col md:flex-row w-full"
                >
                  <div
                    id="label-2"
                    className="md:mr-3 bg-[#4d86fc42] text-white flex justify-center mb-3 md:mb-0 items-center p-0 w-[25px] h-[30px] md:w-[36px] md:h-[41px] rounded-md text-2xl font-bold"
                  >
                    {id + 1}
                  </div>
                  <div
                    id="ranking-player"
                    className="flex items-center justify-center w-full"
                  >
                    <div
                      id="profile-icon-container"
                      className="mr-2 md:mr-6 w-6 h-6 md:w-[40px] md:h-[40px] basis-6 md:basis-10 grow-0 shrink-0 rounded-md border-2 border-[#fdc266] "
                    >
                      <div
                        id="profile-icon"
                        className="w-full h-full flex items-center justify-center "
                      >
                        <img
                          src={
                            player?.Avatar_URL
                              ? player.Avatar_URL
                              : "https://static.smite.guru/i/avatars/0.png"
                          }
                        />
                      </div>
                    </div>
                    <span
                      id="name"
                      className="text-base flex-1 font-semibold w-full text-white block text-ellipsis overflow-hidden"
                    >
                      {player?.Name}
                    </span>
                  </div>
                </div>
                <div
                  id="ranking-data-row"
                  className="mt-3 flex items-center px-3 h-10 rounded-md bg-[#11112a] justify-center"
                >
                  <div
                    id="rank-display"
                    className="flex items-center text-[12px] text-[#cddcfe]"
                  >
                    <img
                      className="mr-3 w-8 basis-7 shrink-0 grow-0"
                      src="https://static.wikia.nocookie.net/smite_gamepedia/images/c/c7/S4_League_Conquest_GrandMasters.png"
                    />
                    <span className="text-[#86eaf9] hidden lg:inline text-[10px] tracking-wide font-bold ">
                      Grandmaster
                      <span className="text-[#5f5f7b] whitespace-pre"> / </span>
                    </span>
                    <span>{Math.round(player?.Rank_Stat_Conquest)} MMR</span>
                  </div>
                </div>
                <div
                  id="ranking-data-row"
                  className="mt-3 flex items-center text-[12px] px-3 h-[46px] rounded-md bg-[#11112a] justify-center"
                >
                  <div
                    id="winrate"
                    className="ml-6 flex justify-center items-center flex-col flex-1 text-[#cddcfe]"
                  >
                    <div id="winrate-text">
                      <span
                        id="text-winrate"
                        className="text-blue-500 font-bold"
                      >
                        {Math.round(
                          (player?.RankedConquest?.Wins /
                            (player?.RankedConquest?.Losses +
                              player?.RankedConquest?.Wins)) *
                            100
                        )}
                        %
                      </span>
                      <span className="text-[#5f5f7b] whitespace-pre"> / </span>
                      <span id="totalgames-text">
                        {player?.RankedConquest?.Wins +
                          player?.RankedConquest?.Losses}{" "}
                        games
                      </span>
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
                              (player?.RankedConquest?.Wins /
                                (player?.RankedConquest?.Losses +
                                  player?.RankedConquest?.Wins)) *
                                100
                            ) + "%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {id == 0 && (
              <>
                <div
                  id="ranking-label"
                  className="relative flex items-center mr-6 py-3 px-3 w-12 h-[70px] bg-[#3b2c2e] text-[#ff9b00] text-4xl rounded-md justify-center "
                >
                  1
                  <div
                    id="underline"
                    className="absolute left-3 right-3 bottom-3 h-[2px] rounded-sm bg-[#ff9b00] "
                  ></div>
                </div>
                <div
                  id="profile-icon-container"
                  className="mr-6 w-14 h-14 md:w-24 md:h-24 rounded-md border-2 border-[#fdc266] "
                >
                  <div id="profile-icon" className="w-full h-full">
                    <img
                      src={
                        player?.Avatar_URL
                          ? player.Avatar_URL
                          : "https://static.smite.guru/i/avatars/0.png"
                      }
                    />
                  </div>
                </div>
              </>
            )}

            {id == 0 && (
              <div
                id="ranking-info"
                className="flex flex-col items-start flex-1 overflow-hidden"
              >
                <span
                  id="name"
                  className="mb-1 text-3xl w-full text-white block font-semibold text-ellipsis overflow-hidden"
                >
                  {player?.Name}
                </span>
                <div
                  id="ranking-row"
                  className="flex items-center  px-3 text-[12px] h-12 rounded-md bg-[#11112a]"
                >
                  <div
                    id="ranking-display"
                    className="flex items-center text-[12px] text-[#cddcfe]"
                  >
                    <img
                      className="mr-3 w-8"
                      src="https://static.wikia.nocookie.net/smite_gamepedia/images/c/c7/S4_League_Conquest_GrandMasters.png"
                    />
                    <span className="text-[#86eaf9] text-[12px] font-bold tracking-wide">
                      Grandmaster
                      <span className="text-[#5f5f7b] whitespace-pre"> / </span>
                    </span>
                    <span>{Math.round(player?.Rank_Stat_Conquest)} MMR</span>
                  </div>
                  <div
                    id="winrate"
                    className="ml-6 flex justify-center items-center flex-col flex-1 text-[#cddcfe]"
                  >
                    <div id="winrate-text">
                      <span
                        id="text-winrate"
                        className="text-blue-500 font-bold"
                      >
                        {Math.round(
                          (player?.RankedConquest?.Wins /
                            (player?.RankedConquest?.Losses +
                              player?.RankedConquest?.Wins)) *
                            100
                        )}
                        %
                      </span>
                      <span className="text-[#5f5f7b] whitespace-pre"> / </span>
                      <span id="totalgames-text">
                        {player?.RankedConquest?.Wins +
                          player?.RankedConquest?.Losses}{" "}
                        games
                      </span>
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
                              (player?.RankedConquest?.Wins /
                                (player?.RankedConquest?.Losses +
                                  player?.RankedConquest?.Wins)) *
                                100
                            ) + "%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Topfive;
