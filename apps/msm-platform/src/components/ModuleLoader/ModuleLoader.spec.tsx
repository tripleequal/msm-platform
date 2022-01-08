import { render } from '@testing-library/react'

import ModuleLoader from './ModuleLoader'

describe('ModuleLoader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModuleLoader />)
    expect(baseElement).toBeTruthy()
  })
})
