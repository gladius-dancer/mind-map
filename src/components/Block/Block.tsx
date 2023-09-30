import React, { useEffect } from "react";
import "./Block.css";
import useBlock from "./hooks/useBlock";
import { Icons } from "../../assets/Icons";
import { TreeType } from "../../types/TreeType";
import { CoordinateType } from "../../types/CoordinateType";

type Props = {
  treeItem: TreeType;
  addChild: (a: string) => void;
  addCords: (val: CoordinateType[][]) => void;
};

function Block({ treeItem, addChild, addCords }: Props) {
    const { version, label, childs } = treeItem;

    const { getCoordinates} = useBlock();

    useEffect(() => {
        const cords: CoordinateType[][] = [];
        const offsetX=180;
        const offsetY=30;
        const calcCoordinates = (branch: TreeType[]) => {
            branch.map((item: TreeType) => {
                item.childs.map((child) => {
                    cords.push([
                        getCoordinates(document.getElementById(item.version), offsetX, offsetY),
                        getCoordinates(document.getElementById(child.version), 0, offsetY),
                    ]);
                });
                calcCoordinates(item?.childs);
            });

            return cords;
        };
        calcCoordinates([treeItem]);
        addCords(cords);
    }, [treeItem]);

    return (
        <div className="block-layer">
            <div className="block-container-column">
                <div className="block" id={treeItem.version}>
                    <p>
                        {label} {version}
                    </p>
                    <span className="add" onClick={() => addChild(version)}>
                        <img src={Icons.Plus} className="plus" alt="plus" />
                    </span>
                </div>
                <div className="block-container-row">
                    {childs?.map((item: TreeType) => (
                        <Block
                            key={item.version}
                            treeItem={item}
                            addChild={addChild}
                            addCords={addCords}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Block;
