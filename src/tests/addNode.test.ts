import ReactGraph from '@models/ReactGraph'

describe('addNodes', () => {
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
