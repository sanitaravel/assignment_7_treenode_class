import {describe, it} from 'node:test'
import assert from 'assert'
import {TreeNode} from './main'

describe('TreeNode', ()=>{
    it('initializes with correct value', () => {
        const root = new TreeNode('CEO');
        assert.strictEqual(root.value, 'CEO');
    })
    describe('addChild', ()=>{
        it('creates and returns new node', ()=>{
            const root = new TreeNode('CEO');
            const child = root.addChild('CTO');
            assert.strictEqual(child.value, 'CTO');
        })
    })

    describe('search', ()=>{
        it('finds exact matches', () => {
            const root = new TreeNode('CEO');
            root.addChild('CTO');
            root.addChild('CFO');
            const foundNodes = root.search('CTO');
            assert.strictEqual(foundNodes.length, 1);
            assert.strictEqual(foundNodes[0].value, 'CTO');
        })

        it('finds multiple exact matches', () => {
            const root = new TreeNode('CEO');
            const cto = root.addChild('CTO');
            cto.addChild('Developer');
            cto.addChild('Designer');
            const cfo = root.addChild('CFO');
            cfo.addChild('Accountant');
            const foundNodes = root.search('C');
            assert.strictEqual(foundNodes.length, 3);
            assert.strictEqual(foundNodes[0].value, 'CEO');
            assert.strictEqual(foundNodes[1].value, 'CTO');
            assert.strictEqual(foundNodes[2].value, 'CFO');
        })

        it('returns empty array for no matches', () => {
            const root = new TreeNode('CEO');
            root.addChild('CTO');
            root.addChild('CFO');
            const foundNodes = root.search('COO');
            assert.strictEqual(foundNodes.length, 0);
        })

        it('handles empty search term', ()=>{
            const root = new TreeNode('CEO');
            const cto = root.addChild('CTO');
            cto.addChild('Developer');
            cto.addChild('Designer');
            const cfo = root.addChild('CFO');
            cfo.addChild('Accountant');
            const foundNodes = root.search('');
            assert.strictEqual(foundNodes.length, 0);
        })
    })
})