import React from "react";
import DevicesTab from "./devices";
import DragDropArea from "./dragdrop";

const LandingPage = () => {
    return (
        <div className={"row"}>
            <div className={"col"}>
                <DevicesTab/>
            </div>
            <div className={"col-8"}>
                <DragDropArea/>
            </div>
        </div>
    )
}

export default LandingPage;
