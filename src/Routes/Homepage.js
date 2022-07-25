import { Dashboard, BoardCenter, BoardLeft, BoardRight } from "../Components/MaterialStyles";
import CategoryTabs from "../Components/CategoryTabs.js";
import VerticalNav from "../Components/VerticalNav";
import PopularCategory from "../Components/PopularSubcategory";

function Homepage({stream, series}) {
  return (
    <Dashboard>
      <BoardLeft>
        <VerticalNav />
      </BoardLeft>
      <BoardCenter>
       <CategoryTabs stream = {stream} series={series}/>
      </BoardCenter>
      <BoardRight>
      <PopularCategory />
      </BoardRight>
    </Dashboard>
  );
}

export default Homepage;
