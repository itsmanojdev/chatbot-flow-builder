import { Handle, Position, useNodeConnections, useNodeId } from '@xyflow/react'
import { BiMessageRoundedDetail } from 'react-icons/bi'
import { IoLogoWhatsapp } from 'react-icons/io'
import { useChatFlow } from '../../contexts/ChatFlowContext'
import type { MessageNodeDataType } from '../../types'
import { SOURCE_CONNECTION_LIMIT } from '../../constants'

type MessageNodeParamsType = { data: MessageNodeDataType }

const Message = ({ data }: MessageNodeParamsType) => {
    const nodeId = useNodeId();
    const chatFlowProps = useChatFlow();
    const connections = useNodeConnections({
        handleType: 'source'
    })

    if (!chatFlowProps) return <></>;

    return (
        <div tabIndex={0}
            className={`w-70 flex flex-col shadow-lg/25 rounded-md overflow-hidden outline-none ${chatFlowProps.selectedNodeId == nodeId ? 'border border-gray-500' : ''}`}
            onFocus={() => chatFlowProps.onNodeClick(nodeId!)}
        >
            <div className='bg-cyan-200/85 py-1 px-4 flex justify-between items-center' >
                <div className='flex items-center gap-2'>
                    <BiMessageRoundedDetail className='relative top-[1px]' />
                    <p className='font-semibold'>Send Message</p>
                </div>
                <div className='bg-white size-4 flex items-center justify-center rounded-full'>
                    <IoLogoWhatsapp color='green' size={"10px"} />
                </div>
            </div>
            <div className='bg-white p-4 max-h-30 overflow-auto'>
                <p>{data.text}</p>
            </div>
            <Handle type="source" position={Position.Right} isConnectable={connections.length < SOURCE_CONNECTION_LIMIT} />
            <Handle type="target" position={Position.Left} />
        </div >
    )
}

export default Message