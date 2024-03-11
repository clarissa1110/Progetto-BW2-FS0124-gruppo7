const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bbfe19d416msh87b8c1b036c0a55p13a0f3jsn8b44a34e9975',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
};


async function getMusic() {
    try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
} catch (error) {
    console.error(error);
}
}

getMusic();