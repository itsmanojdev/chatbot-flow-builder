import { BiMessageRoundedDetail } from "react-icons/bi";
import type { CustomNodeType, NodeType } from './types';
import MessageNode from "./components/Nodes/Message";


const nodeTypes: NodeType = {
    MESSAGE: {
        icon: BiMessageRoundedDetail,
        key: 'message',
        name: 'Message',
        render: MessageNode
    }

}

const customNodes = (() => {
    let customNodes: CustomNodeType = {};
    for (const node of Object.values(nodeTypes)) {
        customNodes[node.key] = node.render!;
    }
    return customNodes;
})();

const SOURCE_CONNECTION_LIMIT = 1;

const toastVariant = {
    DEFAULT: 'default',
    SUCCESS: 'success',
    ERROR: 'error'
} as const;

export {
    nodeTypes,
    customNodes,
    SOURCE_CONNECTION_LIMIT,
    toastVariant
}