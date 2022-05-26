document.getElementById("select-show").onchange=function(){
    for(var i=0;i<document.getElementsByClassName('option-show').length;i++){
        document.getElementsByClassName('option-show')[i].style.display='none';
    }
    document.getElementById(document.getElementById('select-show').value+'-show').style.display='block';
}


class UrlValidate {
  constructor() {
      this.form = document.getElementById("form");
      this.input = document.getElementById("urlfield");
      this.resultText = document.getElementById("resultText");
      this.form.onsubmit = (e) => {
          e.preventDefault();
          this.resultText.innerHTML = "";
          this.validate();
      }
  }
  validate() {
      try {
          let val = this.input.value;
          if (val == "" || val == null || val.replace(/ /g, "").length == 0) {
              this.resultText.innerHTML = "Enter something first..";
              return;
          }
          if (this.isValidUrl(val)) {
              this.resultText.innerHTML = `It's a valid <a href="${val}" target="_blanc">url</a>`;
              return;
          }
          this.resultText.innerHTML = `Invalid url`;
      } catch (err) {
          console.log(err);
          this.resultText.innerHTML = `Invalid url `;
          return false;
      }
  }
  isValidUrl(input) {
      try {
          let validUrl = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.​\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[​6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1​,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00​a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u​00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
          return validUrl.test(input);
      } catch (e) {
          return false;
      }
  }
}
var urlValidate = new UrlValidate();