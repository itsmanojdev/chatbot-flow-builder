import { IconContext } from "react-icons";
import { nodeTypes } from "../constants";
import Node from "./Node";
import { useChatFlow } from "../contexts/ChatFlowContext";
import NodeEditView from "./NodeEditView";


const Sidebar = () => {
    const chatFlowProps = useChatFlow();

    return (
        <>
            {chatFlowProps?.selectedNodeId
                ? <NodeEditView />
                : (<IconContext.Provider value={{ size: '24px' }}>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        {Object.keys(nodeTypes).map((node, idx) => <Node key={idx} type={node} />)}
                    </div>
                </IconContext.Provider>)
            }
        </>
    )
}

export default Sidebar