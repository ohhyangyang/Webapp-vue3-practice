import axios from 'axios';
const VITE_API_FOOTBALL = import.meta.env.VITE_API_FOOTBALL;
const VITE_FOOTBALL_TOKEN = import.meta.env.VITE_FOOTBALL_TOKEN;

export default () => {
    console.log('get team list', VITE_API_FOOTBALL, VITE_FOOTBALL_TOKEN)
}
