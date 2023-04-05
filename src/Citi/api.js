import axios from 'axios';


export const getCities = (params={}) => {
  return axios.get(`http://localhost:3000/cities`, {
    params: {
      _page: params.page,
      _limit: params.limit,
      _sort: params.sort,
      _order: params.order
    }
  });
};


export const addcity= (data)=>{
   return axios.post(`http://localhost:3000/cities`,{
    name:data.name,
    population:data.population,
    country:data.country
   });
};
