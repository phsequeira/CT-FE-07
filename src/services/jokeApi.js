const fetchJokes = async () => {
    const res = await fetch("https://dad-jokes.p.rapidapi.com/joke/type/general", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": `${process.env.API_KEY}`,
        }
    })
    .then(response => response.json())
    .then(body => {return body})
    .catch(err => {
        console.error(err);
    });
    return res.body
}

const fetchPunchline = async (id) => {
    const res = await fetch(`https://dad-jokes.p.rapidapi.com/joke/${id}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": `${process.env.API_KEY}`,
        }
    })
    .then(response => response.json())
    .then(body => {return body})
    .catch(err => {
        console.error(err);
    });
    return res.body
}

export { fetchJokes, fetchPunchline };