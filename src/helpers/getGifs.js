export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=UBknkW5nqnOED6FFjUXXj7xztos8AZDt&q=${category}&limit=5`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((current) => ({
        id: current.id,
        title: current.title,
        url: current.images.downsized_medium.url,
    }))

    return gifs
};