import React from 'react';
import PropTypes from 'prop-types';

const Jokes = ({ setup }) => (
    <>
        <p>{setup}</p>
    </>
);

Jokes.propTypes = {
    setup: PropTypes.string.isRequired,
}

export default Jokes