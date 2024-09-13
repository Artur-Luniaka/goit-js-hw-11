
import { userQuery } from "../main";
export const fetchImages = (userQuery) => {
    const searchImages = new URLSearchParams({
        key: "45941098-20d6b06978404a6b7356e16b7",
        q: userQuery,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    });

    const urlSearch = `https://pixabay.com/api/?${searchImages}`;

    fetch(urlSearch)
        .then(response => {
            if (!response.ok) {
                throw new Error();
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
}
