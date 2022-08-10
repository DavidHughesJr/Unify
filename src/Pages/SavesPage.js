import { Dashboard, BoardLeft, BoardHero, BoardBottom, DetailsBoard, BoardCenter, BoardRight, Board } from "../Components/muiStyles/PageStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import TrendingCategory from "../Components/common/Trending";
import SavesList from "../Components/saves/SavesList"

function SavesPage({saves}) {
    return (
        <Dashboard>
            <BoardLeft>
                <VerticalNav />
            </BoardLeft>
            <BoardCenter>
                <SavesList saves={saves} />
            </BoardCenter>
            <BoardRight>
                <TrendingCategory />
            </BoardRight>
        </Dashboard>
    );
}

export default SavesPage;
