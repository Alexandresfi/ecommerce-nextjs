import { render, screen } from '@testing-library/react'
import { LinkLogo } from './styles'

describe('<Hearder />', () => {
    it('should render link and children', () => {
        render(<LinkLogo href='/' >Anything</LinkLogo>)

        const children = screen.getByText(/Anything/i)

        expect(children).toBeInTheDocument()
    })

} )