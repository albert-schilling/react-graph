import { render } from '@testing-library/react'
import ReactGraph from '@components/ReactGraph'

test('renders ReactGraph component without crashing', () => {
  render(<ReactGraph />)
})
