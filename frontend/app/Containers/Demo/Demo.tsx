import React from 'react';
import Graph from '@/Components/Graph/Graph';
import Navbar from '@/Components/Navbar';
import Sidebar from '@/Components/Sidebar';

export const Demo: React.FC = () => {
    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <div className="container" style={{ flex: 1, padding: '20px' }}>
                <Navbar title="Trees in C" />
                <div style={{ display: 'flex' }}>
                    <div className="textBar">
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
                    </div>
                    <Graph />
                </div>
            </div>
        </div>
    );
};
