import { createContext, useContext, useState } from "react";

type chatFlowPropsType = {
    selectedNodeId: string | null,
    setSelectedNodeId: React.Dispatch<React.SetStateAction<string | null>>
    onNodeClick: (nodeId: string) => void
    onbackBtnClick: () => void
}
const ChatFlowContext = createContext<chatFlowPropsType | null>(null);

const useChatFlow = () => useContext(ChatFlowContext);

const ChatFlowProvider = ({ ...props }) => {
    const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

    const onbackBtnClick = () => {
        setSelectedNodeId(null);
    }

    const onNodeClick = (nodeId: string) => {
        chatFlowProps?.setSelectedNodeId(nodeId);
    }

    const chatFlowProps: chatFlowPropsType = {
        selectedNodeId,
        setSelectedNodeId,
        onNodeClick,
        onbackBtnClick
    }


    return (
        <ChatFlowContext.Provider value={chatFlowProps} {...props} />
    )
}

export {
    useChatFlow,
    ChatFlowProvider
}