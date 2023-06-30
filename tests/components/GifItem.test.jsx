import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Tests in <GifItem />', () => {

    const title = 'Vegeta';
    const url   = 'https://dbz-vegeta.com/vegeta.jpg';

    test('should match with snapshot', () => {
        const { container } = render(<GifItem title={ title } url={ url } />)
        expect( container ).toMatchSnapshot();
    })

    test('Should image with URL and ALT', () => {
        render(<GifItem title={ title } url={ url } />);

        expect( screen.getByRole('img').src).toBe(url);
        expect( screen.getByRole('img').alt).toBe(title);
    })

    test('Should title in an component', () => {
        render(<GifItem title={ title } url={ url } />);

        expect( screen.getByText(title)).toBeTruthy();        
    })

})