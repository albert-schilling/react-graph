import { IReactGraphEdgeMeta } from '@types'
import ReactGraphNode from '@models/ReactGraphNode'
import ReactGraph from '@models/ReactGraph'

export default class ReactGraphEdge {
  a: ReactGraphNode
  b: ReactGraphNode
  meta?: IReactGraphEdgeMeta

  private graph: ReactGraph

  constructor(graph: ReactGraph, a: ReactGraphNode, b: ReactGraphNode) {
    this.a = a
    this.b = b
    this.graph = graph
  }
}
