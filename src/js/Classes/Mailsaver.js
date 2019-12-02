import Helper from './Helper';

class Mailsaver {  
  constructor(config = {}){ 
    const {
      mailSelectors
    } = config; 

    this.mailSelectors = document.querySelectorAll(mailSelectors);
    this.mailSelectorsArray = Array.prototype.slice.call(this.mailSelectors);

    if(mailSelectors.length !== 0){
      this.bindEvents();
    }
  }

  bindEvents() {
    this.mailSelectorsArray.forEach( e =>{
      e.addEventListener('click', item => {
        let txt = e.href;
        let changedtxt = txt.replace("[at]", "@");
        changedtxt = changedtxt.replace("...", ".");
        e.setAttribute('href', changedtxt);
      });
    });
  }

} export default Mailsaver;

