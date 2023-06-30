import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Test <GifGrid />', () => { 

    const category = 'Rick and Morty';

    test('should show loading', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render( <GifGrid category={ category } /> )

        expect( screen.getByText('Cargando...'));
        expect( screen.getByText(category));
     })

     test('should show items why load imges by useFetchGifs', () => { 
        const gifs = [
            {
                id: 'ABC',
                title: 'Vegeta',
                url: 'https://localhost/vegeta.jpg',
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg',
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true,
        });

        render( <GifGrid category={ category } /> )

        expect(screen.getAllByRole('img').length).toBe(2);

      })
 })