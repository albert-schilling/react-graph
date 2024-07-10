import ReactGraphEdge from '@models/ReactGraphEdge'
import ReactGraphNode from '@models/ReactGraphNode'
import { IReactGraphMeta } from '@types'

export default class ReactGraph {
  private nodes: ReactGraphNode[]
  private edges: ReactGraphEdge[]

  constructor() {
    this.nodes = []
    this.edges = []
  }

  public getNodes() {
    return this.nodes
  }

  public getEdges() {
    return this.edges
  }

  public addNode(
    id: string,
    label?: string,
    meta?: IReactGraphMeta
  ): ReactGraphNode {
    const existingNode = this.nodes.find((n) => n.id === id)
    if (existingNode) {
      return existingNode
    }

    const newNode = new ReactGraphNode(this, id, label, meta)
    this.nodes.push(newNode)
    return newNode
  }

  public removeNode(id: string): void {
    const node = this.nodes.find((n) => n.id === id)
    if (!node) {
      return
    }

    this.nodes = this.nodes.filter((n) => n.id !== id)
    this.edges = this.edges.filter((e) => e.a !== node && e.b !== node)
  }

  public hasNode(id: string): boolean {
    return this.nodes.some((n) => n.id === id)
  }

  public connectNodes(a: ReactGraphNode, b: ReactGraphNode): ReactGraphEdge {
    if (a === b) {
      throw new Error('Cannot connect a node to itself.')
    }

    const existingEdge = this.edges.find(
      (e) => (e.a === a && e.b === b) || (e.a === b && e.b === a)
    )
    if (existingEdge) {
      return existingEdge
    }

    const newEdge = new ReactGraphEdge(this, a, b)

    this.edges.push(newEdge)

    return newEdge
  }

  public disconnectNodes(a: ReactGraphNode, b: ReactGraphNode): void {
    this.edges = this.edges.filter(
      (e) => (e.a !== a || e.b !== b) && (e.a !== b || e.b !== a)
    )
  }

  public isConnected(a: ReactGraphNode, b: ReactGraphNode): boolean {
    return this.edges.some(
      (e) => (e.a === a && e.b === b) || (e.a === b && e.b === a)
    )
  }
}
