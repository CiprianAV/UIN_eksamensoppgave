import { useState, useEffect } from 'react';

const API_KEY = process.env.TICKETMASTER_API_KEY;
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';

export default function ticketmaster(path, query ={}) {
    const [data, setData]  = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError]  = useState(null);

useEffect (() => {
    const params = new URLSearchParams({ apikey:API_KEY, ...query});
    const url   = `${BASE_URL}/${path}.json?{params}`;

    setLoading(true);
    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error(`API error ${res.status}`);
            return res.json();
        })
        .then(json => {
            //Ticketmaster setter events under _embedded.events
            setData(json._embedded?.events || []);
        })
        .catch(err => setError(err))
        .finally(() => setLoading(false));
    }, [path, JSON.stringify(query)]);

    return { data, loading, error };
}