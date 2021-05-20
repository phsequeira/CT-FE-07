import { useState, useEffect } from 'react';
import { fetchJokes, fetchPunchline } from '../services/jokeApi';


export const useJokes = () => {
    const [jokes, setJokes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchJokes()
            .then(setJokes)
            .finally(() => setLoading(false));

    }, []);

    return {
        loading,
        jokes
    }
}

export const useJokeId = id => {
    const [joke, setJoke] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchPunchline(id)
            .then(setJoke)
            .finally(() => setLoading(false))
    }, [])

    return {
        loading,
        joke
    }
}

