import React from "react";
import { Dashboard, BoardCenter, BoardLeft, BoardRight } from "../Components/MaterialStyles";
import CategoryTabs from "../Components/CategoryTabs.js";
import VerticalNav from "../Components/VerticalNav";
import PopularCategory from "../Components/PopularSubcategory";
import SearchInput from "../Components/SearchInput";
import { useState } from "react";

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
