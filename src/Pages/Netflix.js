import {
  Dashboard,
  BoardCenter,
  BoardLeft,
  BoardRight,
} from "../Components/MaterialStyles";
import VerticalNav from "../Components/VerticalNav";

function Netflix() {
  return (
    <Dashboard>
      <BoardLeft>
        <VerticalNav />
      </BoardLeft>
      <BoardCenter> <div> netflix </div></BoardCenter>
      <BoardRight></BoardRight>
    </Dashboard>
  );
}

export default Netflix;
