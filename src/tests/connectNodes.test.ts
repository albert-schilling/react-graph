import ReactGraph from '@models/ReactGraph'

describe('ReactGraph', () => {
  describe('connectNodes', () => {
    it('should connect two nodes', () => {
      // Arrange
      const graph = new ReactGraph()
      const node1 = graph.addNode('Node 1')
      const node2 = graph.addNode('Node 2')

      // Act
      graph.connectNodes(node1, node2)

      // Assert
      expect(graph.getEdges()).toHaveLength(1)
      expect(graph.getEdges()[0].a).toBe(node1)
      expect(graph.getEdges()[0].b).toBe(node2)
    })

    it('should not connect the same node', () => {
      // Arrange
      const graph = new ReactGraph()
      const node1 = graph.addNode('Node 1')

      // Act
      try {
        expect(graph.connectNodes(node1, node1)).toThrow()
        // eslint-disable-next-line no-empty
      } catch (_) {}

      // Assert
      expect(graph.getEdges()).toHaveLength(0)
    })

    it('should not connect nodes that are already connected', () => {
      // Arrange
      const graph = new ReactGraph()
      const node1 = graph.addNode('Node 1')
      const node2 = graph.addNode('Node 2')
      graph.connectNodes(node1, node2)

      expect(graph.getEdges()).toHaveLength(1)

      // Act
      graph.connectNodes(node1, node2)

      // Assert
      expect(graph.getEdges()).toHaveLength(1)
    })
  })
})
