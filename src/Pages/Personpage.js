import React from "react";
import { Dashboard, BoardLeft, BoardHero, BoardBottom, DetailsBoard, BoardCenter, BoardRight, Board } from "../Assets/muiStyles/MaterialStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import DetailsInfoHero from "../Components/details/DetailsInfoHero";
import DetailsInfo from "../Components/details/DetailsInfo";
import DetailsMoreLikeThis from "../Components/details/DetailsInfoMoreLikeThis";
import { useParams } from "react-router-dom";
import PersonInfo from '../Components/person/PersonInfo'


function Personpage({ setHomepageSearch, homepageSearch }) {



    return (
        <Dashboard>
            <BoardLeft>
                <VerticalNav />
            </BoardLeft>
            <PersonInfo /> 
        </Dashboard>
    );
}

export default Personpage;
