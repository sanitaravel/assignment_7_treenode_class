import { describe, it, beforeEach } from "node:test";
import assert from "assert";
import { TreeNode } from "./main";

describe("TreeNode", () => {
  let root: TreeNode;
  let cto: TreeNode;
  let cfo: TreeNode;
  
  beforeEach(() => {
    root = new TreeNode("CEO");
    cto = root.addChild("CTO");
    cfo = root.addChild("CFO");
    cto.addChild("Developer");
    cto.addChild("Designer");
    cfo.addChild("Accountant");
  });

  it("initializes with correct value", () => {
    assert.strictEqual(root.value, "CEO");
  });

  describe("addChild", () => {
    it("creates and returns new node", () => {
      assert.strictEqual(cto.value, "CTO");
    });
  });

  describe("search", () => {
    it("finds exact matches", () => {
      const foundNodes = root.search("CTO");
      assert.strictEqual(foundNodes.length, 1);
      assert.strictEqual(foundNodes[0].value, "CTO");
    });

    it("finds multiple exact matches", () => {
      const foundNodes = root.search("C");
      assert.strictEqual(foundNodes.length, 3);
      assert.strictEqual(foundNodes[0].value, "CEO");
      assert.strictEqual(foundNodes[1].value, "CTO");
      assert.strictEqual(foundNodes[2].value, "CFO");
    });

    it("returns empty array for no matches", () => {
      const foundNodes = root.search("COO");
      assert.strictEqual(foundNodes.length, 0);
    });

    it("handles empty search term", () => {
      const foundNodes = root.search("");
      assert.strictEqual(foundNodes.length, 0);
    });
  });
});
