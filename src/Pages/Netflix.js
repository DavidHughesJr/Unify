import {
  Dashboard,
  BoardCenter,
  BoardLeft,
  BoardRight,
} from "../Assets/muiStyles/MaterialStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import StreamingService from "../Components/stream/StreamingService"

function Netflix() {
  return (
    <Dashboard>
      <BoardLeft>
        <VerticalNav />
      </BoardLeft>
      <BoardCenter>
        <StreamingService />
      </BoardCenter>
      <BoardRight></BoardRight>
    </Dashboard>
  );
}

export default Netflix;
