import { useState, useCallback } from 'react'
import {
  ReactFlow, Background, Controls, applyEdgeChanges, applyNodeChanges, addEdge,
  type OnNodesChange, type OnEdgesChange, type OnConnect
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { IconContext } from "react-icons";
import './App.css';
import { initialNodes, initialEdges } from "./data";
import Sidebar from './components/Sidebar';
import Button from './components/Button';


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

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  return (
    <IconContext.Provider value={{ size: '24px' }}>
      <div className='flex flex-col h-screen'>
        <nav className='py-2 px-32 bg-gray-100'>
          <div className='flex justify-end'>
            <Button text='Save Changes' />
          </div>
        </nav>
        <div className='flex flex-1 min-h-0'>
          <div className='w-3/4'>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              fitView
            >
              <Background />
              <Controls />
            </ReactFlow>
          </div>

          <div className="w-1/4 border-l-2 border-gray-100 flex flex-col">
            <div className="flex-1 overflow-y-auto">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default App
