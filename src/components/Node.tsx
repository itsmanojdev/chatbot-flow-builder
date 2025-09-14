import { useCallback } from "react";
import { useDnD, useDnDPosition, type OnDropAction } from "../hooks/useDnD";
import { useReactFlow, type XYPosition } from "@xyflow/react";
import { nodeTypes } from "../constants";
import type { nodeDataType } from "../types";
import { getDefaultNodeData } from "../utils";

let id = 1;
const getId = () => `node_${id++}`;

const Node = ({ type: nodeType }: { type: string }) => {
    const { onDragStart, isDragging } = useDnD();
    const { setNodes } = useReactFlow();

    const nodeData: nodeDataType = getDefaultNodeData(nodeType);

    const createAddNewNode = useCallback(
        (nodeType: string): OnDropAction => {
            return ({ position }: { position: XYPosition }) => {
                const id = getId();
                const newNode = {
                    id: id,
                    type: nodeType,
                    position,
                    data: nodeData,
                };

                setNodes((nds) => nds.concat(newNode));
            };
        },
        [setNodes],
    );

    const { icon: Icon, name } = nodeTypes[nodeType];

    return (
        <>
            {isDragging && <DragGhost type={nodeType} />}
            <div
                className='text-indigo-500 h-20 flex flex-col p-1 justify-center items-center border-2 border-indigo-500 rounded-sm'
                onPointerDown={(event) => {
                    onDragStart(event, createAddNewNode(nodeTypes.MESSAGE.key));
                }}
            >
                <Icon />
                <p className="mt-1">{name}</p>
            </div>
        </>
    )
}


export function DragGhost({ type: nodeType }: { type: string }) {
    const { position } = useDnDPosition();
    const { icon: Icon, name } = nodeTypes[nodeType];

    if (!position) return null;

    return (
        <div
            className='fixed pointer-events-none text-indigo-500 h-20 w-40 flex flex-col p-1 justify-center items-center border-2 border-indigo-500 rounded-sm'
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        >
            <Icon />
            <p className="mt-1">{name}</p>
        </div>
    );
}
export default Node