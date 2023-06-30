import { getGifs } from '../../src/helpers/getGifs';

describe('Test in getGifs()', () => {

    test('should returned array gifs', async () => { 
        const elementStructure = {
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        }
        const gifs = await getGifs('Rick and Morty');
        
        expect( gifs.length).toBeGreaterThan(0);
        expect( gifs[0]).toEqual(elementStructure);
     })
})