import { ReactFlowProvider, useReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './App.css';
import Sidebar from './components/Sidebar';
import Button from './components/Button';
import { DnDProvider } from "./hooks/useDnD";
import { ChatFlowProvider } from './contexts/ChatFlowContext';
import ChatFlow from './components/ChatFlow';
import { Bounce, ToastContainer } from 'react-toastify';
import { toast } from './utils';


function ChatFlowBuilder() {
  const reactFlow = useReactFlow();

  const saveChanges = () => {
    let nodes = reactFlow.getNodes().map((node) => node.id);
    const edges = reactFlow.getEdges();

    const nodeCount = nodes.length;

    for (const edge of edges) {
      if (!nodes.length) toast('success', "Flow Saved Successfully");

      nodes = nodes.filter((node) => node !== edge.target);
    }

    if (nodeCount > 1 && nodes.length >= 2) {
      toast('error', "Cannot Save Flow");
      return;
    }
    toast('success', "Flow Saved Successfully");
  }

  return (
    <ChatFlowProvider>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        theme="colored"
        transition={Bounce}
        icon={false}
        closeButton={false}
      />
      <div className='flex flex-col h-screen'>
        <nav className='py-2 px-32 bg-gray-100'>
          <div className='flex justify-end'>
            <Button text='Save Changes' onClick={saveChanges} />
          </div>
        </nav>
        <div className='flex flex-1 min-h-0'>
          <div className='w-3/4'>
            <ChatFlow />
          </div>

          <div className="w-1/4 border-l-2 border-gray-200 flex flex-col">
            <div className="flex-1 overflow-y-auto">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </ChatFlowProvider>
  )
}

export default function App() {
  return (
    <ReactFlowProvider>
      <DnDProvider>
        <ChatFlowBuilder />
      </DnDProvider>
    </ReactFlowProvider>
  )
}
