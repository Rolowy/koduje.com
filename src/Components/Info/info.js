import React, { useEffect } from 'react';
import axios from 'axios';

export const Info = () => {
    const url = 'https://api.steampowered.com/ISteamNews/GetNewsForApp/v2?appid=440';
    //const [data, Setdata] = useState([]);
    const FetchData = () => {
        axios.get(url, {
            headers: { 'Access-Control-Allow-Origin' : 'http://localhost:3000',
            'Access-Control-Allow-Methods':'GET',
        }
        })
        .then(response => console.log(response));
    }

    useEffect(async () => {
        await FetchData();
    }, []);



    return(
        <>
            <h1>Work</h1>
        </>
    )
}

export default Info