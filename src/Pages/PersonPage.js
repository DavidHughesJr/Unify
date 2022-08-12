import React from "react";
import { Dashboard, BoardLeft, Board, MobileBoard } from "../Components/muiStyles/PageStyles";
import VerticalNav from "../Layout/navigation/VerticalNav";
import PersonInfo from '../Components/person/PersonInfo'
import ResponsiveAppBar from "../Layout/navigation/AppBar";

function PersonPage({ setSearch}) {



    return (
        <Board>
            <MobileBoard>
                <ResponsiveAppBar setSearch={setSearch} />
            </MobileBoard>
            <Dashboard>
                <BoardLeft>
                    <VerticalNav />
                </BoardLeft>
                <PersonInfo />
            </Dashboard>
        </Board>
      
    );
}

export default PersonPage;
