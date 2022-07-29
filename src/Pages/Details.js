import React from "react";
import  ResponsiveAppBar  from "../Layout/navigation/AppBar"
import { Dashboard, DetailsContainer } from "../Assets/muiStyles/MaterialStyles";
import Details from "../Components/common/Details";


function Homepage({ setHomepageSearch, homepageSearch }) {

    return (
        <Dashboard>
            <DetailsContainer>
                <ResponsiveAppBar />
                <Details />
            </DetailsContainer>
        </Dashboard>
    );
}

export default Homepage;
