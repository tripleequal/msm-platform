import { render } from '@testing-library/react'

import Students from './Students'

describe('Students', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Students />)
    expect(baseElement).toBeTruthy()
  })
})
