import { useReactFlow } from '@xyflow/react';
import { useChatFlow } from '../contexts/ChatFlowContext';
import { nodeTypes } from '../constants';
import { useMemo } from 'react';
import MessageNodeEdit from './NodesEditView/MessageNodeEdit';

const NodeEditView = () => {
    const reactFlow = useReactFlow();

    const chatFlowProps = useChatFlow();
    if (!chatFlowProps) return;

    const nodeId = chatFlowProps.selectedNodeId;
    if (!nodeId) return;

    const node = reactFlow.getNode(nodeId);

    const NodeEditView = useMemo(() => {
        switch (node?.type) {
            case nodeTypes.MESSAGE.key:
                return <MessageNodeEdit />

            default:
                return <p>Something Went Wrong</p>
        }
    }, [chatFlowProps.selectedNodeId])

    return (
        <>{NodeEditView}</>
    )
}

export default NodeEditView