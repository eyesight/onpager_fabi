// Bundle theme module
import FocusHandler from './Classes/FocusHandler';
import LazyLoad from './Classes/Lazyload';
//import ShowContact from './Classes/ShowContact';
import Mailsaver from './Classes/Mailsaver';

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    new FocusHandler();
    new LazyLoad();

    /* new ShowContact({
      linkSelector: '.js-openContact',
      wrapperSelector: 'body',
      btnSelector: '.js-close-btn'
    }); */

    new Mailsaver({
      mailSelectors: '.js-mail'
    });
  })
})();
