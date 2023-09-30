import { CoordinateType } from "../../../types/CoordinateType";

function useBlock() {

    const getCoordinates = (
        element: HTMLElement | null,
        offsetX: number,
        offsetY: number
    ): CoordinateType => {
        const top = element?.offsetTop;
        const left = element?.offsetLeft;
        if (top && left) return { x: left + offsetX, y: top + offsetY };
        return { x: 0, y: 0 };
    };

    return {
        getCoordinates,
    };
}
export default useBlock;
