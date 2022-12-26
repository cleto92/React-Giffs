export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=e7p6aPEUbBTcGyJtbdnf4PXzOwQf1oaG&q=${category}&limit=1000`
    const resp = await fetch (url)
    const {data} = await resp.json()
    const Gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.log(data)

    return Gifs;
    
    
}