import ReactGraph from '@models/ReactGraph'

describe('ReactGraph – Nodes', () => {
  describe('addNode', () => {
    it('should add a node to the graph', () => {
      const graph: ReactGraph = new ReactGraph()
      const node = graph.addNode('A')

      expect(graph.hasNode(node.id)).toBe(true)

      const nodes = graph.getNodes()

      expect(nodes[0]).toEqual(node)
      expect(nodes[0].id).toEqual('A')
    })

    it('should add multiple nodes to the graph', () => {
      const graph: ReactGraph = new ReactGraph()

      graph.addNode('A')
      graph.addNode('B')
      graph.addNode('C')

      expect(graph.getNodes().length).toEqual(3)
    })

    it('should not add duplicate nodes to the graph', () => {
      const graph: ReactGraph = new ReactGraph()

      graph.addNode('A')
      graph.addNode('A')

      expect(graph.getNodes().length).toEqual(1)
    })
  })

  describe('removeNode', () => {
    it('should remove a node from the graph', () => {
      const graph = new ReactGraph()

      // Add nodes to the graph
      graph.addNode('A')

      // Remove a node
      graph.removeNode('B')

      // Check if the node is removed
      expect(graph.hasNode('B')).toBe(false)
    })

    it('should remove all edges connected to the removed node', () => {
      const graph = new ReactGraph()

      // Add nodes to the graph
      const nodeA = graph.addNode('A')
      const nodeB = graph.addNode('B')
      const nodeC = graph.addNode('C')

      // Add edges to the graph
      graph.connectNodes(nodeA, nodeB)
      graph.connectNodes(nodeB, nodeC)

      // Remove a node
      graph.removeNode('B')

      // Check if the edges are removed
      expect(graph.getEdges().length).toBe(0)
    })

    it('should not throw an error when removing a non-existing node', () => {
      const graph = new ReactGraph()

      // Add nodes to the graph
      graph.addNode('A')
      graph.addNode('B')

      // Remove a non-existing node
      expect(() => graph.removeNode('C')).not.toThrow()
    })
  })
})
