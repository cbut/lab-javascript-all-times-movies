/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// this is just a helper function
function stringToMinutes(string) {
    var arr = string.split("h");
    if (arr.length < 2) {
        arr.unshift("0");
    }
    var hours = Number(arr[0]);
    var minutes = Number(arr[1].split("min")[0]);

    return hours * 60 + minutes;
}

function turnHoursToMinutes(moviesArray) {
    let result = moviesArray.map((el) => {
        return {
            title: el.title,
            year: el.year,
            director: el.director,
            duration: stringToMinutes(el.duration),
            genre: el.genre,
            rate: el.rate
        }
    })
    return result
}

// Get the average of all rates with 2 decimals


function ratesAverage(moviesArray) {
    let rate = moviesArray.map(movie => {
        return movie.rate
    })
    if (rate.length == 0) { return undefined }
    let sum = rate.reduce((acc, currValue) => {
        return acc + currValue
    })
    let result = sum / moviesArray.length
    result = Math.round(result * 1e2) / 1e2;
    return result
}



// Get the average of Drama Movies
function dramaMoviesRate(moviesArray) {
    let result = ratesAverage(moviesArray.filter(movie => movie.genre.includes('Drama')))

    console.log(result)
    return (result)
}
// Order by time duration, in growing order

function orderByDuration(movieArray) {

    return movieArray.sort((a, b) => {
        if (a.duration > b.duration) { return 1 }

        else if (a.duration < b.duration) { return -1 }
        else { if (a.title < b.title) { return -1 } }
    })

}
// How many movies did STEVEN SPIelBERG

// Order by title and print the first 20 titles

// Best yearly rate average
