import { render } from '@testing-library/react'
import { ReactGraphProvider } from '@contexts/ReactGraphContext'

test('renders ReactGraphProvider without crashing', () => {
  render(<ReactGraphProvider />)
})
