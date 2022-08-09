import React from "react";
import { Dashboard, BoardLeft, BoardHero, BoardBottom, DetailsBoard, BoardCenter, BoardRight, Board } from "../Assets/muiStyles/MaterialStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import DetailsInfoHero from "../Components/details/DetailsInfoHero";
import DetailsInfo from "../Components/details/DetailsInfo";

function DetailsPage({ saves, setSaves }) {



    return (
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
    );
}

export default DetailsPage;
