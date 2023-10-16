import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import Schedule from "../components/schedule/Schedule";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Schedule">
                <Schedule/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;