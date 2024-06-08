/**
 * Represents a node in the graph.
 */
export interface INode {
  /**
   * The unique identifier of the node.
   */
  id: string

  /**
   * The label associated with the node.
   */
  label?: string

  /**
   * The edges connected to the node.
   */
  edges: IEdge[]

  /**
   * Additional metadata associated with the node.
   */
  meta?: Record<string, any> // eslint-disable-line @typescript-eslint/no-explicit-any
}

/**
 * Represents an edge between two nodes in the graph.
 */
export interface IEdge {
  /**
   * The first node of the edge.
   */
  a: INode

  /**
   * The second node of the edge.
   */
  b: INode

  /**
   * Additional metadata associated with the edge.
   */
  meta?: Record<string, any> // eslint-disable-line @typescript-eslint/no-explicit-any
}

/**
 * Represents a location in the graph.
 */
export interface ILocation {
  /**
   * The unique identifier of the location.
   */
  id: string

  /**
   * The position of the location, represented by a node.
   */
  position: INode

  /**
   * The path of edges leading to the location.
   */
  path: IEdge[]
}

/**
 * Represents a selection of nodes in the graph.
 */
export type TSelection = INode[]
