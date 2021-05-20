import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import JokeDetails from '../components/punchline/jokeDetails';
import { useJokeId } from '../hooks/hooks';


const JokePunchline = () => {
let { id } = useParams();

    const { loading, joke } = useJokeId(id)

    if (loading) return <h1>Loading...</h1>;
    return <JokeDetails joke={joke} />
}

export default JokePunchline
