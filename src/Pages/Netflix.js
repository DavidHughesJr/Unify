import {
  Dashboard,
  BoardCenter,
  BoardLeft,
  BoardRight,
} from "../Components/muiStyles/MaterialStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";

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
