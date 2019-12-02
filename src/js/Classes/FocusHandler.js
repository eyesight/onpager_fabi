import Helper from './Helper';

class FocusHandler {
  
  constructor(){
    let body = document.querySelector('body');
    body.addEventListener('keyup', this.checkTabPress);    
  }

  checkTabPress(e) {
    "use strict";

    e = e || event;
    if (e.keyCode == 9) {
        Helper.removeClass(document.querySelector('html'), 'no-focus');
    }
  }

} export default FocusHandler;

