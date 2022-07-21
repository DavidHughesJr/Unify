import { Dashboard, BoardCenter, BoardLeft, BoardRight } from "../Components/MaterialStyles";
import TopCategoryTabs from "../Components/TopCategoryTabs.js";
import VerticalNav from "../Components/VerticalNav";


function Homepage() {
  return (
    <Dashboard>
      <BoardLeft>
        <VerticalNav />
      </BoardLeft>
      <BoardCenter>
       <TopCategoryTabs />
      </BoardCenter>
      <BoardRight>
        
      </BoardRight>
    </Dashboard>
  );
}

export default Homepage;
