import axios from 'axios';


const getCities = (params={}) => {
  return axios.get(`http://localhost:3000/cities`, {
    params: {
      _page: params.page,
      _limit: params.limit,
      _sort: params.sort,
      _order: params.order
    }
  });
};


export default getCities;
