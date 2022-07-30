import React from "react";
import { Dashboard, BoardLeft, BoardHero, BoardBottom, DetailsBoard, BoardCenter, BoardRight, Board } from "../Assets/muiStyles/MaterialStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import Details from "../Components/details/DetailsInfoHero";
import DetailsInfo from "../Components/details/DetailsInfo";
import DetailsMoreLikeThis from "../Components/details/DetailsInfoMoreLikeThis";
import { useParams } from "react-router-dom";

function Detailspage({ setHomepageSearch, homepageSearch }) {



    return (
        <Dashboard>
            <BoardLeft>
                <VerticalNav />
            </BoardLeft>
            <DetailsBoard>
                <BoardHero>
                    <Details />
                </BoardHero>
                <BoardBottom>
                    <BoardCenter>
                        <DetailsInfo />
                    </BoardCenter>
                    <BoardRight>
                        <DetailsMoreLikeThis />
                    </BoardRight>
                </BoardBottom>
            </DetailsBoard>
        </Dashboard>
    );
}

export default Detailspage;
