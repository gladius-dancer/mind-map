import { CoordinateType } from "../../../types/CoordinateType";

function useBlock() {
    const offsetX=180;
    const offsetY=30;
    const getParentCoordinates = (
        element: HTMLElement | null,
    ): CoordinateType => {
        const top = element?.offsetTop;
        const left = element?.offsetLeft;
        if (top && left) return { x: left + offsetX, y: top + offsetY };
        return { x: 0, y: 0 };
    };

    const getChildCoordinates = (element: HTMLElement | null): CoordinateType => {
        const top = element?.offsetTop;
        const left = element?.offsetLeft;
        if (top && left ) return { x: left, y: top + offsetY };
        return { x: 0, y: 0 };
    };

    return {
        getParentCoordinates,
        getChildCoordinates,
    };
}

export default useBlock;
