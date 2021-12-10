import axios from "axios";


export const baseUrl = 'https://bayut.p.rapidapi.com'




export const fetchApi = async(url) =>{
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '90e2d7e683msh84a26e646671193p1b6482jsnad311aced36a'
          }
    })
    return data;
}