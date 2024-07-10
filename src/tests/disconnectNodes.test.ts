import ReactGraph from '@models/ReactGraph'

describe('ReactGraph', () => {
  describe('disconnectNodes', () => {
    it('should disconnect two connected nodes', () => {
      // Arrange
      const graph = new ReactGraph()
      const node1 = graph.addNode('Node 1')
      const node2 = graph.addNode('Node 2')
      graph.connectNodes(node1, node2)

      expect(graph.getEdges()).toHaveLength(1)

      // Act
      graph.disconnectNodes(node1, node2)

      // Assert
      expect(graph.getEdges()).toHaveLength(0)
    })

    it('should not disconnect nodes that are not connected', () => {
      // Arrange
      const graph = new ReactGraph()
      const node1 = graph.addNode('Node 1')
      const node2 = graph.addNode('Node 2')

      expect(graph.getEdges()).toHaveLength(0)

      // Act
      graph.disconnectNodes(node1, node2)

      // Assert
      expect(graph.getEdges()).toHaveLength(0)
    })

    it('should not disconnect the same node', () => {
      // Arrange
      const graph = new ReactGraph()
      const node1 = graph.addNode('Node 1')
      const node2 = graph.addNode('Node 2')
      graph.connectNodes(node1, node2)

      expect(graph.getEdges()).toHaveLength(1)

      // Act
      graph.disconnectNodes(node1, node1)

      // Assert
      expect(graph.getEdges()).toHaveLength(1)
    })
  })
})
