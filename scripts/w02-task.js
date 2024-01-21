/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Isai Ruiz Rodriguez';
let currentYear = '2024';
let profilePicture = 'images/me.jpg'

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('profilePicuture');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

let favoriteFood = ['Bonneless', 'Pizza', 'Tacos al Pastor', 'Barbacoa', 'Carne asada'];
const foodList = favoriteFood.join(', ');
foodElement.innerHTML = `<em>${foodList}</em>`;
let anotherFavoriteFood = 'Sushi';
favoriteFood.push(anotherFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;
