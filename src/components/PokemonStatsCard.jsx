import React from "react";

const PokemonStatsCard = ({ stats }) => {
  return (
    <div className="stats-card flex flex-col gap-2 mx-auto">
      {stats.map((stats) => {
        return (
          <div className="flex flex-col" key={stats.stat.name}>
            <div className="flex items-center justify-between font-roboto text-[18px]">
              <p>{stats.stat.name}</p>
              <div>{stats.base_stat}</div>
            </div>
            <div
              className="border-b-[3px] border-[#0496C7] mt-1"
              style={{ width: `${(stats.base_stat / 300) * 100}%` }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonStatsCard;
