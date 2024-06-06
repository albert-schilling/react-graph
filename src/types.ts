export interface Node {
    id: string
    label?: string
    edges: Edge[]
    meta?: Record<string, any>
}

export interface Edge {
    a: Node
    b: Node
    attributes?: IEdgeAttributes
    meta?: Record<string, any>
}

export interface IEdgeAttributes {
    relationship?: TEdgeRelationship
}

export type TEdgeRelationship = 'parent-child' | 'sibling' | 'dependency'
