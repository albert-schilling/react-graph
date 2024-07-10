import ReactGraphNode from '@models/Node'
import { IEdge } from '@types'

export function disconnectNodes(
  edges: IEdge[],
  nodeA: ReactGraphNode,
  nodeB: ReactGraphNode
): IEdge[] {
  const edgeIndex = edges.findIndex((edge) => {
    return (
      (edge.a.id === nodeA.id && edge.b.id === nodeB.id) ||
      (edge.a.id === nodeB.id && edge.b.id === nodeA.id)
    )
  })

  if (edgeIndex === -1) {
    return edges
  }

  edges.splice(edgeIndex, 1)

  return edges
}

export function connectNodes(
  edges: IEdge[],
  nodeA: ReactGraphNode,
  nodeB: ReactGraphNode
): IEdge[] {
  const isConnected = edges.some((edge) => {
    return (
      (edge.a.id === nodeA.id && edge.b.id === nodeB.id) ||
      (edge.a.id === nodeB.id && edge.b.id === nodeA.id)
    )
  })

  if (isConnected) {
    return edges
  }

  edges.push({ a: nodeA, b: nodeB })

  return edges
}
