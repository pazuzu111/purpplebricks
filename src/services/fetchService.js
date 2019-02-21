import axios from 'axios'

export const fetchData = async (name) => {
    let res = await axios.get(`https://api.pokemontcg.io/v1/cards?name=${name}`)
    return res.data
}