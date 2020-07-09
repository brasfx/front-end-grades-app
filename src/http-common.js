import axios from 'axios';

//Define a URL base da origem para consumo do servico
//Adicionando variavel ambiente para conectar ao Heroku
export default axios.create({
  baseURL: ` ${process.env.REACT_APP_BASE_URL_HEROKU}`,
  headers: {
    'Content-type': 'application/json',
  },
});
