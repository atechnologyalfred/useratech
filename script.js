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
 counter = 0;
 counterContent.textContent = counter;
}


//functions for fetch
async function  fetchApi () {
  const spinner = document.querySelector(".spin");
  spinner.style.display = "block";

  try {
    usersContainer.innerHTML = ''
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data)
  
  data.forEach((user)=> {
    
    
    
    const showUser = `

    <div class="user">
        <h2 >${user.name}</h2>
        <p class="email">Email: ${user.email}</p>
        <p class="phone">Phone: ${user.phone}</p>
        <p class="company">Company: ${user.company}</p>
    </div>
    `
    usersContainer.innerHTML += showUser;
  })
  }catch (err) {
    console.error(err)
  } finally {
  spinner.style.display = "none";
  }
}


themeSwitch.addEventListener("click", ()=>{
  body.classList.toggle("darkmode")
})