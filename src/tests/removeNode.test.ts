import ReactGraph from '@models/ReactGraph'

describe('ReactGraph - removeNode', () => {
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
