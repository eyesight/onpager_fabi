import Helper from './Helper';

class ShowContact {
  constructor(config = {}) {
    const {
      linkSelector,
      wrapperSelector,
      btnSelector
    } = config;

    this.linkSelector = document.querySelector(linkSelector);
    this.wrapperSelector = document.querySelector(wrapperSelector);
    this.btnSelector = document.querySelector(btnSelector);

    if (this.linkSelector) {
      this.bindEvents();
    }
  }

  bindEvents() {  
    this.linkSelector.addEventListener('click', e =>{
      Helper.addClass(this.wrapperSelector, 'showContact');
      setTimeout(() => { Helper.addClass(this.wrapperSelector, 'showContact--animated') }, 100);
    });
    this.btnSelector.addEventListener('click', e =>{ 
      Helper.removeClass(this.wrapperSelector, 'showContact--animated');
      setTimeout(() => { Helper.removeClass(this.wrapperSelector, 'showContact') }, 100);
    });
  }
}

export default ShowContact;
