import React, { useEffect, useState } from 'react';
import JokesList from '../components/jokes/jokesList';
import { useJokes } from '../hooks/hooks';



const JokePresentation = () => {
    
    const { loading, jokes } = useJokes();

    if (loading) return <h1>Loading...</h1>;
    return <JokesList jokes={jokes} />
}

export default JokePresentation