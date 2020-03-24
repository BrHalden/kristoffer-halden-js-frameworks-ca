export const API_URL = "https://api.rawg.io/api/games";

export function apiTest() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}