const HomePage = () => {
    return (
        <div>
            <h3>What is C?</h3>
            C is a general-purpose, procedural, high-level programming language used in the development of computer software and applications, system programming, games, web development, and more.
            <ul>
                <li>C language was developed by Dennis M. Ritchie at the Bell Telephone Laboratories in 1972.</li>
                <li>It is a powerful and flexible language which was first developed for the programming of the UNIX operating System.</li>
                <li>C is one of the most widely used programming languages.</li>
                <li>C programming language is known for its simplicity and efficiency. It is the best choice to start with programming as it gives you a foundational understanding of programming.</li>
            </ul>
        </div>
    )
}

export const Tree = () => (
    <h3>
        <ul>
            Basic Terminologies In Tree Data Structure:
            <li>Parent Node: The node which is a predecessor of a node is called the parent node of that node. {'{B}'} is the parent node of {'{D, E}'}.</li>
            <li>Child Node: The node which is the immediate successor of a node is called the child node of that node. Examples: {'{D, E}'} are the child nodes of {'{B}'}.</li>
            <li>Root Node: The topmost node of a tree or the node which does not have any parent node is called the root node. {'{A}'} is the root node of the tree. A non-empty tree must contain exactly one root node and exactly one path from the root to all other nodes of the tree.</li>
            <li>Leaf Node or External Node: The nodes which do not have any child nodes are called leaf nodes. {'{K, L, M, N, O, P, G}'} are the leaf nodes of the tree.</li>
            <li>Ancestor of a Node: Any predecessor nodes on the path of the root to that node are called Ancestors of that node. {'{A, B}'} are the ancestor nodes of the node {'{E}'}</li>
            <li>
                Descendant: Any successor node on the path from the leaf node to that node. {'{E, I}'} are the descendants of the node {'{B}'}.
                Sibling: Children of the same parent node are called siblings. {'{D, E}'} are called siblings.
            </li>
            <li>Level of a node: The count of edges on the path from the root node to that node. The root node has level 0.</li>
            <li>
                Internal node: A node with at least one child is called Internal Node.
                Neighbour of a Node: Parent or child nodes of that node are called neighbors of that node.
            </li>
            <li>Subtree: Any node of the tree along with its descendant.</li>
        </ul>
    </h3>
)

export const GraphData = {
    nodes: [
        { id: 'Node1', label: 'Value 1' },
        { id: 'Node2', label: 'Value 2' },
        { id: 'Node3', label: 'Value 3' },
        { id: 'Node4', label: 'Value 4' },
        { id: 'Node5', label: 'Value 5' },
    ],
    links: [
        { source: 'Node1', target: 'Node2' },
        { source: 'Node1', target: 'Node3' },
        { source: 'Node2', target: 'Node4' },
        { source: 'Node2', target: 'Node5' },
    ],
}

export default HomePage