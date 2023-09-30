import { CoordinateType } from "../../types/CoordinateType";
import React, {useEffect, useRef, useState} from "react";
import "./TreeLines.css";

type Props = {
  coords: CoordinateType[][];
  calculatePath: (start: CoordinateType, end: CoordinateType) => string;
  width: number | undefined;
};

export function TreeLines({ coords, calculatePath, width }: Props) {

    return (
        <svg className="block-image" style={{width}}>
            {coords.map((itemCords: CoordinateType[], item: number) => (
                <path
                    key={item}
                    d={calculatePath(itemCords[0], itemCords[1])}
                    fill="transparent"
                    stroke="red"
                    strokeWidth="2"
                ></path>
            ))}
        </svg>
    );
}
