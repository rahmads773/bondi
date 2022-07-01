// toggle search
let input =  document.querySelector(".navbar .search input[type='text']")
let search =  document.querySelector(".navbar .search")
let searchIcon = document.querySelector(".navbar .search .search-icon")

search.addEventListener("click",(eo) => {
   search.classList.toggle("active")
})

// filter work
let workLi = document.querySelectorAll(".our-work ul li")
let imgs =  document.querySelectorAll(".our-work .box-container")

workLi.forEach((li) => {
   li.addEventListener("click",handlleActive)
   li.addEventListener("click",filter)
})


// handle active
function handlleActive() {
   workLi.forEach((li) => {
      li.classList.remove("active")
      this.classList.add("active")
   })
}

// filter imgs
function filter() {
   imgs.forEach((img) => {
      img.style.display = "none";
      console.log(this.dataset.choose)
      document.querySelectorAll(this.dataset.choose).forEach((ele) => {
         ele.style.display = "block";
      })
   })
}