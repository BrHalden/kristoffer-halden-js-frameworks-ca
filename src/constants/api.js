export const API_URL = "https://api.rawg.io/api/games";

export function apiTest() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}
export function apiTest2 () {
    fetch(API_URL + '/' + '4200')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}