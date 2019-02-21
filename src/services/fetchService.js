import axios from 'axios'

export const fetchData = async (name) => {
    let res = await axios.get(`https://api.pokemontcg.io/v1/cards?name=${name}`)
    return res.data
}

export const fetchFilterData = async (type) => {
    let res = await axios.get(`https://api.pokemontcg.io/v1/cards?subtype=${type}`)
    return res.data
}