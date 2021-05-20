import React from 'react';
import PropTypes from 'prop-types';
import Jokes from './jokes';
import { Link } from 'react-router-dom' 

const JokesList = ({ jokes }) => (
    <ul aria-label='jokes'>
        {jokes.map((joke) => (
            <li key={joke._id}>
                    <Link to={`/${joke._id}`}>
                        <Jokes
                            setup={joke.setup}
                        />
                    </Link>
            </li>
        ))}
    </ul>
)

JokesList.propTypes = {
    jokes: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            setup: PropTypes.string.isRequired,
            
        })
    ).isRequired
}

export default JokesList;