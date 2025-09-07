import { useState, useCallback } from 'react'
import { ReactFlow, Background, Controls, applyEdgeChanges, applyNodeChanges, type Node, type Edge, type OnNodesChange, type OnEdgesChange } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './App.css'

const initialNodes: Node[] = [
  {
    id: 'n1',
    position: { x: 0, y: 0 },
    data: { label: 'Node 1' },
    type: 'input',
  },
  {
    id: 'n2',
    position: { x: 100, y: 100 },
    data: { label: 'Node 2' },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'n1-n2',
    source: 'n1',
    target: 'n2',
  },
];

function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => {
      console.log("changes", changes);
      console.log("nodesSnapshot", nodesSnapshot);

      return applyNodeChanges(changes, nodesSnapshot);
    }),
    [],
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );

  return (
    <div className='flex flex-col h-full'>
      <div className='h-13 w-full bg-gray-100'></div>
      <div className='flex-1'>
        <div className='flex h-full'>
          <div className='w-4/5'>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              fitView
            >
              <Background />
              <Controls />
            </ReactFlow>
          </div>
          <div className='w-1/5 border-l-2 border-gray-100'>

          </div>

        </div>

      </div>
    </div>
  )
}

export default App
