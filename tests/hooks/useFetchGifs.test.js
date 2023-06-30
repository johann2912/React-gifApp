import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Test in Hook useFetchGifs', () => { 
    test('should to reset the initial state of the hook', () => { 
        
        const  { result } = renderHook(() => useFetchGifs('Rick and Morty'));
        const { images, isLoading } = result.current;
        
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    })

    test('should returned images array and isLoading with value false', async () => { 
        const  { result } = renderHook(() => useFetchGifs('Rick and Morty'));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {
                timeout: 1000
            }
        );

        const { images, isLoading } = result.current;
        
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

     })
 })