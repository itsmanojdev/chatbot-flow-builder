import type { NodeType } from "../types";

const Node = ({ icon: Icon, name }: NodeType) => {

    return (
        <div className='text-indigo-500 h-20 flex flex-col p-1 justify-center items-center border-2 border-indigo-500 rounded-sm'>
            <Icon />
            <p className="mt-1">{name}</p>
        </div>
    )
}

export default Node