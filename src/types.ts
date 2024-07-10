import ReactGraphEdge from '@models/ReactGraphEdge'
import ReactGraphNode from '@models/ReactGraphNode'

/**
 * The interface for the additional metadata associated with a node.
 * This interface can be augmented to include additional metadata fields.
 */
export interface IReactGraphMeta {}

/**
 * The interface for the additional metadata associated with a edge.
 * This interface can be augmented to include additional metadata fields.
 */
export interface IReactGraphEdgeMeta {}

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
  position: ReactGraphNode

  /**
   * The path of edges leading to the location.
   */
  path: ReactGraphEdge[]
}

/**
 * Represents a selection of nodes in the graph.
 */
export type TSelection = ReactGraphNode[]
