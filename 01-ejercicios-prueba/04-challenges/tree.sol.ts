// ALTERNATIVA A. Forma sencilla usando Recursividad.
interface TreeNode<T = any> {
  value: T;
  children?: Array<TreeNode<T>>;
}

const myTree: TreeNode<number> = {
  value: 1,
  children: [{ value: 2 }, { value: 3, children: [{ value: 4 }] }],
};

// ALTERNATIVA B. Distinguiendo entre hojas y nodos.
interface TreeLeaf<T> {
  value: T;
}

interface TreeNode<T> extends TreeLeaf<T> {
  children: Array<TreeNode<T> | TreeLeaf<T>>;
}

type Tree<T> = TreeLeaf<T> | TreeNode<T>;

const myTree: Tree<number> = {
  value: 1,
  children: [{ value: 2 }, { value: 3, children: [{ value: 4 }] }],
};

// ALTERNATIVA C. Forma compacta con recursividad pero evitando
// las referencias cirulares en los alias. NOTA: A partir
// de TS 3.7 (en beta todavía) si se puede aplicar
// recursividad en los alias.
// El inconveniente de esta forma es que solo los nodos
// finales contienen valor.
interface TreeNodeArray<T> extends Array<TreeNode<T>> { }
type TreeNode<T> = T | TreeNodeArray<T>;

const myTree: TreeNode<string> = ["hello", [["world"], "!"]];

// ALTERNATIVA D. Otra alternativa usando tuplas. Todos los nodos
// tienen valor.
interface TreeNodeArray<T> extends Array<TreeNode<T>> { }
type TreeNode<T> = [T] | [T, TreeNodeArray<T>];

const myTree: TreeNode<string> = ["root", [["L1NodeA", [["L2NodeA"]]], ["L1NodeB", [["L2NodeB"], ["L2NodeC"]]]]];

