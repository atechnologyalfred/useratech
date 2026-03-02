const allButtons = document.querySelector('main');
const counterContent = document.querySelector('.counter-content');
const usersContainer = document.querySelector('.users');
const themeSwitch =document.querySelector(".theme-switch");
const body = document.querySelector("body")

let counter = 0;

allButtons.addEventListener('click', (e)=> {
  const counterPlus = e.target.classList.contains('counter-plus');
  if(counterPlus) {
    countingPlus()
  }

  const counterMinus = e.target.classList.contains('counter-minus');
  if(counterMinus) {
    countingMinus()
  }
  const counterReset = e.target.classList.contains('counter-reset');
  if(counterReset) {
    countingReset()
  }

  const userBtn = e.target.classList.contains('userBtn');
  if(userBtn) {
    fetchApi()
  }
  
})



//function for counting
function countingPlus (){
  counter+=1
  counterContent.textContent = counter;
}
function countingMinus (){
  if(counter < 1) return
  counter-=1
  counterContent.textContent = counter;
}
function countingReset (){
  counterContent.textContent = 0
}


//functions for fetch
async function  fetchApi () {
  usersContainer.innerHTML = ''
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  
data.forEach((user)=> {
    const showUser = `
    <div class="user">
        <h2 >${user.name}</h2>
        <p class="email">Email: ${user.email}</p>
        <p class="phone">Phone: ${user.phone}</p>
        <p class="company">Company: ${user.company}</p>
    </div>
    `
usersContainer.insertAdjacentHTML('afterbegin', showUser)
})


}


themeSwitch.addEventListener("click", ()=>{
  body.classList.toggle("darkmode")
  console.log("hello")
})

