import React from "react";
import { Dashboard, BoardLeft, BoardCenter, BoardRight, Board, MobileBoard } from "../Components/muiStyles/PageStyles";
import HomepageTabs from "../Layout/tabs/HomeTabs";
import VerticalNav from "../Layout/navigation/VerticalNav";
import TrendingCategory from "../Components/common/Trending";
import SearchInput from "../Components/common/SearchInput";
import ResponsiveAppBar from "../Layout/navigation/AppBar"



function Homepage({ setSearch, search }) {

  return (
    <Board>
      <MobileBoard>
        <ResponsiveAppBar setSearch={setSearch} />
      </MobileBoard>
      <Dashboard>
        <BoardLeft>
          <VerticalNav />
        </BoardLeft>
        <BoardCenter>
          <HomepageTabs />
        </BoardCenter>
        <BoardRight>
          <SearchInput setSearch={setSearch} search={search} />
          <TrendingCategory />
        </BoardRight>
      </Dashboard>
    </Board>

  );
}

export default Homepage;
