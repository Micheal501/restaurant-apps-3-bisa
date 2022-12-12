import RestaurantDbSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const homePage = {
  async render() {
    return `
        <section class="restaurant">
          <h1 class="restaurant-title" id="maincontent" tabindex="0">Explore Restaurant</h1>
          <div class="restaurant-list"></div>
        </section>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurants();
    const itemsContainer = document.querySelector('.restaurant-list');
    restaurants.forEach((restaurant) => {
      itemsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default homePage;
