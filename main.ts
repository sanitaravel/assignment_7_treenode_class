export class TreeNode {
  value: string;
  children: TreeNode[] = [];

  constructor(value: string) {
    this.value = value;
  }

  addChild(value: string): TreeNode {
    const child = new TreeNode(value);
    this.children.push(child);
    return child;
  }

  print(prefix:string=''){
    console.log(prefix + this.value);
    for(const child of this.children){
      child.print(prefix + '--');
    }
  }

  search(searchString: string): TreeNode[]  {
    if (searchString === ''){
      return [];
    }

    let result: TreeNode[] = [];

    if (this.value.includes(searchString)) {
      result.push(this);
    }
    this.children.forEach(child => {result.push(...child.search(searchString))});
    
    return result;
  }
}

// const root = new TreeNode("CEO");
  // const cto = root.addChild("CTO");
  // const cfo = root.addChild("CFO");
// cto.addChild("Developer");
// cto.addChild("Designer");
// cfo.addChild("Accountant");
// root.print();

// const foundNodes = root.search("De");
// console.log(foundNodes);
