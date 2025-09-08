import { nodeTypes } from "../data";
import Node from "./Node";

const Sidebar = () => {
    return (
        <div className="grid grid-cols-2 gap-4 p-4">
            {nodeTypes.map((node, index) => <Node key={index} icon={node.icon} name={node.name} />)}
        </div>
    )
}

export default Sidebar