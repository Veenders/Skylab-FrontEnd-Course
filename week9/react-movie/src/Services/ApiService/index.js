import axios from 'axios';

const API_KEY = '2a04af5e8058edf2ca88122c974e9a29'
class ApiService {
    static async getResults(page='now_playing',language='en-Us',pageind=1,query=''){
        page = query !== '' ? 'search/movie':'movie/'+page; 
        try{
            const response = await axios.get(`https:api.themoviedb.org/3/${page}?api_key=${API_KEY}&language=${language}&page=${pageind}${query!==''?'&query=' + query:''}`);
            if(response.status===200){
                return response.data;
            }
        }catch(error){
            console.error(error);
        }
    }
    static async getResultId(movie_id,language){
        try{
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=${language}`)
            if(response.status===200){
                return response.data;
            }
        }catch(error){
            console.error(error);
        }
    }
}
export default ApiService;