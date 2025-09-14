import { useReactFlow } from "@xyflow/react";
import { useChatFlow } from "../../contexts/ChatFlowContext";
import { nodeTypes } from "../../constants";
import { IoArrowBackOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const MessageNodeEdit = () => {
    const [message, setMessage] = useState("");
    const reactFlow = useReactFlow();
    const chatFlowProps = useChatFlow();

    if (!chatFlowProps?.selectedNodeId) return null;

    let node = reactFlow.getNode(chatFlowProps.selectedNodeId ?? "");
    if (!node) return null;

    // sync state when node changes
    useEffect(() => {
        setMessage(String(node.data.text));
    }, [chatFlowProps.selectedNodeId]);

    const onTextChange = (updatedText: string = "") => {
        setMessage(updatedText);
        reactFlow.updateNode(node.id, (oldNode) => ({
            ...oldNode,
            data: {
                ...oldNode.data,
                text: updatedText,
            },
        }));
    }

    return (
        <div className="flex flex-col *:border-b-2 *:border-gray-200">
            <div className="h-12 flex items-center">
                <IoArrowBackOutline
                    className="box-content h-full px-4 hover:bg-gray-50 active:bg-gray-100"
                    onClick={chatFlowProps.onbackBtnClick}
                />
                <p className="flex-1 font-semibold text-center px-4 py-3">
                    {nodeTypes.MESSAGE.name}
                </p>
            </div>
            <div className="flex flex-col gap-2 px-4 py-6">
                <p className="text-gray-400">Text:</p>
                <textarea
                    className="h-20 p-2 border-2 border-gray-200 outline-none rounded-sm focus:border-gray-300"
                    value={message}
                    onChange={(event) => onTextChange(event.target.value)}
                ></textarea>
            </div>
        </div>
    );
};

export default MessageNodeEdit;
