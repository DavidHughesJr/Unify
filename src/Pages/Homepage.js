import React from "react";
import { Dashboard, BoardLeft, BoardHero, BoardBottom, DetailsBoard, BoardCenter, BoardRight, Board, MobileBoard } from "../Components/muiStyles/PageStyles";
import HomepageTabs from "../Layout/tabs/HomeTabs";
import VerticalNav from "../Layout/navigation/VerticalNav";
import TrendingCategory from "../Components/common/Trending";
import SearchInput from "../Components/common/SearchInput";
import ResponsiveAppBar from "../Layout/navigation/AppBar"



function Homepage({ setHomepageSearch, homepageSearch }) {

  return (
    <Board>
      <MobileBoard>
    <ResponsiveAppBar />
      </MobileBoard>
      <Dashboard>
        <BoardLeft>
          <VerticalNav />
        </BoardLeft>
        <BoardCenter>
          <HomepageTabs />
        </BoardCenter>
        <BoardRight>
          <SearchInput setHomepageSearch={setHomepageSearch} homepageSearch={homepageSearch} />
          <TrendingCategory />
        </BoardRight>
      </Dashboard>
    </Board>

  );
}

export default Homepage;
