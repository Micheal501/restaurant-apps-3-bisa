import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const favoritePage = {
  async render() {
    return `
    <section>
      <h1 class="restaurant-title" id="maincontent" tabindex="0">Explore Restaurant</h1>
      <div class="restaurant-list"></div>
    </section>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const cardsContainer = document.querySelector('.restaurant-list');
    const restaurantContainer = document.querySelector('.restaurant');
    if (Object.keys(restaurants).length === 0) {
      const createText = document.createElement('h4');
      createText.classList.add('favoriteNull');
      createText.innerHTML = 'Belum ada restoran favorit silahkan tambahkan restoran favorit anda';
      restaurantContainer.appendChild(createText);
    } else {
      restaurants.forEach((restaurant) => {
        cardsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default favoritePage;
