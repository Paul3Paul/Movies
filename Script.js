const button = document.getElementById('btn')
const input = document.getElementById('inp')
const movieslist = document.getElementById('movieslist')
button.addEventListener('click',function()
{
const searchtext = input.value;
searchmovies(searchtext)
})

function searchmovies(st)
{
    const apikey = "399a3064"
    const apiurl = `https://www.omdbapi.com/?s=${st}&apikey=${apikey}`
    fetch(apiurl)
    .then(function (res) { return res.json() })
    .then(function (data)
    {
        console.log(data)
        displayMovies(data)
    })
    .catch(function (err)
    {
    console.error(err)
})
}
function displayMovies (data)
{
if (data.Response==='True')
{
    data.Search.forEach(function (movie)
    {
        const movieCard = document.createElement('div')
        movieCard.classList.add('movieCard')
        movieCard.innerHTML = `
    <img src=${movie.Poster} alt=${movie.Title} />
    <h2>${movie.Title}</h2>
    `
        movieslist.appendChild(movieCard)
    })
}
else
{
    movieslist.innerHTML=`<strong id="emoji">Not Found &#128546; <br>Try Again</strong>`
    }
}
function updateClock ()
{
    const cl = document.getElementById("clock")
		const time = new Date().toLocaleTimeString()
    cl.textContent = time;
}
setInterval(updateClock, 1000);