//
// isotope.js
// Theme module
//

import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

const toggles = document.querySelectorAll('[data-isotope]');
const filters = document.querySelectorAll('[data-filter]');

toggles.forEach(function(toggle) {
  imagesLoaded(toggle, function() {
    const options = JSON.parse(toggle.dataset.isotope);

    new Isotope(toggle, options);
  });
});

filters.forEach(function(filter) {
  filter.addEventListener('click', function(e) {
    e.preventDefault();

    const cat = filter.dataset.filter;
    const target = filter.dataset.target;
    const instance = Isotope.data(target);

    instance.arrange({
      filter: cat
    });
  });
});
