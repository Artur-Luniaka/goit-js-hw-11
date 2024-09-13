import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { fetchImages } from './js/pixabay-api';

export let userQuery;

const userForm = document.querySelector('.form');

const handleImages = (event) => {
    event.preventDefault();
    const form = event.target;
    userQuery = form.elements.query.value;
    fetchImages(userQuery);
    form.reset();
};

userForm.addEventListener('submit', handleImages);

