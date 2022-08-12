import React from "react";
import { Dashboard, BoardLeft, MobileBoard, BoardBottom, DetailsBoard, Board } from "../Components/muiStyles/PageStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import DetailsInfoHero from "../Components/details/DetailsInfoHero";
import DetailsInfo from "../Components/details/DetailsInfo";
import ResponsiveAppBar from "../Layout/navigation/AppBar";

function DetailsPage({ search, saves, setSaves, setSearch,}) {



    return (
        <Board>
            <MobileBoard>
                <ResponsiveAppBar setSearch={setSearch} search={search} />
            </MobileBoard>
            <Dashboard>
                <BoardLeft>
                    <VerticalNav />
                </BoardLeft>
                <DetailsBoard>
                    <BoardBottom>
                        <DetailsInfoHero />
                        <DetailsInfo saves={saves} setSaves={setSaves} />
                    </BoardBottom>
                </DetailsBoard>
            </Dashboard>
        </Board>


    );
}

export default DetailsPage;
