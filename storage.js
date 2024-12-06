//localstorage
//sessionstorage
//cookies

// console.log(window.localStorage);
// console.log(window.sessionStorage);
// console.log(window.cookiesStorage);

  class localStorageJS{
    saveDataToLocalStorage(){
       window.localStorage.setItem(key,JSON.stringify(value));
    }
    fetchFromLocalStorage(key){
        return JSON.parse(window.localStorage.getItem(key));
  }
  clearLocalStorage(){
    window.localStorage.clear();
  }

  removeFromLocalStorage(key){
    window.localStorage.removeItem(key);
  }
}

const I1=new localStorageJS();
// console.log(I1);
I1.saveDataToLocalStorage("DATE",new Date());
I1.saveDataToLocalStorage("DATE_2",new Date().getTime());
const date=I1.fetchFromLocalStorage("DATE");
const h1=document.querySelector("h1");
h1.innerText = date;
document.querySelector("button").addEventListener("click",function(){
    I1.removeFromLocalStorage("DATE");
});
