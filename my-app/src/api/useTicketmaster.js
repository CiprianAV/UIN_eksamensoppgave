import { useState, useEffect } from 'react';
import { TM_API_KEY as API_KEY } from '../config';

const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';

export default function useTicketmaster(path, query ={}) {
    const [data, setData]  = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError]  = useState(null);

    const serializedQuery = JSON.stringify(query);

useEffect (() => {
    const params = new URLSearchParams({ apikey:API_KEY, ...query});
    const url   = `${BASE_URL}/${path}.json?${params}`;
    //console.log('Fetching Ticketmaster:', url);

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
    }, [path, serializedQuery]);

    return { data, loading, error };
}