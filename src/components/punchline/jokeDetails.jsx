import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 

const JokeDetails = ({ joke }) => (
<>
<h1>{joke.setup}</h1>
<br />
<h2>{joke.punchline}</h2>
<br /><br />
<Link to={'/'}>Return to Jokes</Link>
</>
)

JokeDetails.propTypes = {
    joke: PropTypes.objectOf(
        PropTypes.shape({
            setup: PropTypes.string.isRequired,
            punchline: PropTypes.string.isRequired
        })
    )
}

export default JokeDetails;