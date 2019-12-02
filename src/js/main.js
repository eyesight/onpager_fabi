// Bundle theme module
import Theme from './Theme';
import Helper from './Classes/Helper';
import FocusHandler from './Classes/FocusHandler';
import LazyLoad from './Classes/Lazyload';
import ShowContact from './Classes/ShowContact';

module.exports = Theme;

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    new FocusHandler();
    new LazyLoad();

    new ShowContact({
      linkSelector: '.js-openContact',
      wrapperSelector: 'body',
      btnSelector: '.js-close-btn'
    })
  })
})();
