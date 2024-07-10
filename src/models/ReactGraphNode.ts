import { IReactGraphMeta } from '@types'
import ReactGraph from '@models/ReactGraph'
import ReactGraphEdge from '@models/ReactGraphEdge'

export default class ReactGraphNode {
  id: string
  label?: string
  meta?: IReactGraphMeta

  private graph: ReactGraph

  constructor(
    graph: ReactGraph,
    id: string,
    label?: string,
    meta?: IReactGraphMeta
  ) {
    this.id = id
    this.label = label
    this.meta = meta
    this.graph = graph
  }

  public getEdges(): ReactGraphEdge[] {
    return this.graph
      .getEdges()
      .filter((edge) => edge.a === this || edge.b === this)
  }
}
