// import axios from 'axios';
// const VITE_API_FOOTBALL = import.meta.env.VITE_API_FOOTBALL;
// const VITE_FOOTBALL_TOKEN = import.meta.env.VITE_FOOTBALL_TOKEN;

// export default async() => {
//     const headers = {
//         'Authorization': `Bearer ${VITE_FOOTBALL_TOKEN}` ,
//         "Content-Type": "application/json",
//     }
//     const response = await axios({
//         method: 'get',
//         url: VITE_API_FOOTBALL ,

//     });
//     console.log(response)
//     return response

// }

import teams from '../data'


export default () => teams
