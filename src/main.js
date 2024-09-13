import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

const userForm = document.querySelector('.form');

let userQuery;

const handleImages = (event) => {
    event.preventDefault();
    const form = event.target;
    userQuery = form.elements.query.value.trim();
    if (userQuery === "") {
        iziToast.show({
            message: 'Fill enter field',
            backgroundColor: 'red',
            color: 'white',
        })
    }
    fetchImages(userQuery)
    form.reset();
};

const fetchImages = (userQuery) => {
    const searchImages = new URLSearchParams({
        key: "45941098-20d6b06978404a6b7356e16b7",
        q: userQuery,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    });

    if (userQuery === '') {
        return;
    }

    const urlSearch = `https://pixabay.com/api/?${searchImages}`;

    fetch(urlSearch)
        .then(response => {
            if (!response.ok) {
                throw new Error();
            }
            return response.json();
        })
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.show({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    backgroundColor: 'red',
                    color: 'white'
                })
            }
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
}

userForm.addEventListener('submit', handleImages);
