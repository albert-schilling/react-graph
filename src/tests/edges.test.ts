import ReactGraph from '@models/ReactGraph'

describe('ReactGraph – Edges', () => {
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
        graph.connectNodes(node1, node1)
      } catch (error) {
        expect(error).toBeInstanceOf(Error)
      }

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

  describe('isConnected', () => {
    it('should return true if two nodes are connected', () => {
      // Arrange
      const graph = new ReactGraph()
      const node1 = graph.addNode('Node 1')
      const node2 = graph.addNode('Node 2')
      graph.connectNodes(node1, node2)

      // Act
      const isConnected = graph.isConnected(node1, node2)

      // Assert
      expect(isConnected).toBe(true)
    })

    it('should return false if two nodes are not connected', () => {
      // Arrange
      const graph = new ReactGraph()
      const node1 = graph.addNode('Node 1')
      const node2 = graph.addNode('Node 2')

      // Act
      const isConnected = graph.isConnected(node1, node2)

      // Assert
      expect(isConnected).toBe(false)
    })

    it('should return false if the same node is passed', () => {
      // Arrange
      const graph = new ReactGraph()
      const node1 = graph.addNode('Node 1')

      // Act
      const isConnected = graph.isConnected(node1, node1)

      // Assert
      expect(isConnected).toBe(false)
    })
  })

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
