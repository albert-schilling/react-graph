import { createContext, useContext, useRef } from 'react'
import ReactGraphNode from '@models/ReactGraphNode'
import ReactGraph from '@models/ReactGraph'
import { IReactGraphMeta } from '@types'

interface IReactGraphContextValue {
  graph: ReactGraph
  addNode: (
    id: string,
    label?: string,
    meta?: IReactGraphMeta
  ) => ReactGraphNode
  removeNode: (id: string) => void
  hasNode: (id: string) => boolean
  connectNodes: (a: ReactGraphNode, b: ReactGraphNode) => void
  disconnectNodes: (a: ReactGraphNode, b: ReactGraphNode) => void
  isConnected: (a: ReactGraphNode, b: ReactGraphNode) => boolean
}

const ReactGraphContext = createContext<IReactGraphContextValue>(
  {} as IReactGraphContextValue
)

export default ReactGraphContext

export function useReactGraph() {
  return useContext(ReactGraphContext)
}

export function ReactGraphProvider({
  children
}: {
  children?: React.ReactNode
}) {
  const graph = useRef<ReactGraph>(new ReactGraph())

  return (
    <ReactGraphContext.Provider
      value={{
        graph: graph.current,
        addNode: graph.current.addNode,
        removeNode: graph.current.removeNode,
        hasNode: graph.current.hasNode,
        connectNodes: graph.current.connectNodes,
        disconnectNodes: graph.current.disconnectNodes,
        isConnected: graph.current.isConnected
      }}
    >
      {children}
    </ReactGraphContext.Provider>
  )
}
