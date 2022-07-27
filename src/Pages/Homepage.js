import React from "react";
import { Dashboard, BoardCenter, BoardLeft, BoardRight } from "../Assets/muiStyles/MaterialStyles";
import CategoryTabs from "../Layout/tabs/HomeTabs";
import VerticalNav from "../Layout/navigation/VerticalNav";
import PopularCategory from "../Components/movieCategories/PopularMoviesContent";
import SearchInput from "../Components/common/SearchInput";

function Homepage({ setHomepageSearch, homepageSearch }) {

  return (
    <Dashboard>
      <BoardLeft>
        <VerticalNav />
      </BoardLeft>
      <BoardCenter>
       <CategoryTabs/>
      </BoardCenter>
      <BoardRight>
        <SearchInput setHomepageSearch={setHomepageSearch} homepageSearch={homepageSearch} /> 
      <PopularCategory />
      </BoardRight>
    </Dashboard>
  );
}

export default Homepage;
