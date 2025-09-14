import { addEdge, Controls, MarkerType, ReactFlow, useEdgesState, useNodesState, type OnConnect } from '@xyflow/react';
import { useCallback } from 'react'
import { initialEdges, initialNodes } from '../data';
import { useChatFlow } from '../contexts/ChatFlowContext';
import { customNodes } from '../constants';

const ChatFlow = () => {
    const [nodes, _, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect: OnConnect = useCallback(
        (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
        [],
    );

    const chatFlowProps = useChatFlow();

    const onPaneClick = () => {
        chatFlowProps?.setSelectedNodeId(null);
    }

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={customNodes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            defaultEdgeOptions={
                {
                    markerEnd: { type: MarkerType.ArrowClosed }
                }
            }
            onConnect={onConnect}
            onPaneClick={onPaneClick}
            fitView
        >
            <Controls />
        </ReactFlow>
    )
}

export default ChatFlow