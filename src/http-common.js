import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: `https://back-end-grades-api.herokuapp.com`,
  headers: {
    'Content-type': 'application/json',
  },
});

console.log(process.env.REACT_APP_BASE_URL);
