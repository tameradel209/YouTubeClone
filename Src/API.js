export const fetchData = async (searchWord) =>{
    try{
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchWord}&type=video&key=AIzaSyAu6voOneUabcyITQWrpqcIL2Zzbpfbrfg`)
        const data = await response.json()
        const items = data.items
        return items
        }
        catch(err){throw new Error(err)}
}

export const autoComplete =async (query) =>{
    try{
        const response = await fetch(`http://suggestqueries.google.com/complete/search?client=chrome&q=${query}`)
        const data = await response.json()
        return data[1]
    }
    catch(err){throw new Error(err)}
}