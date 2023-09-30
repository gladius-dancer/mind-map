import React, {useEffect, useRef, useState} from "react";
import "./BlocksContainer.css";
import { Block } from "../Block";
import useAddChild from "./hooks/useAddChild";
import useDraw from "./hooks/useDraw";
import { TreeLines } from "../TreeLines/TreeLines";

function BlocksContainer() {
    const { tree, addChild } = useAddChild();
    const {
        coords,
        layerWidth,
        setLayerWidth,
        setCoords,
        calculatePath
    } = useDraw();


    return (
        <div className="block-container">
            <TreeLines
                coords={coords}
                calculatePath={calculatePath}
                width={layerWidth}
            />
            <Block
                treeItem={tree[0]}
                addChild={addChild}
                addCords={setCoords}
                setLayerWith={setLayerWidth}
            />
        </div>
    );
}

export default BlocksContainer;
