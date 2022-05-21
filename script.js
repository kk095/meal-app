let reviewcarousel =  document.querySelector(".review_carousel");
let prevReview = document.querySelector(".prev_review");
let nextReview = document.querySelector(".next_review");
let breakfastParent = document.querySelector(".show_category");
let carouselItem = document.querySelector(".carousel_item");

prevReview.addEventListener("click",function(e){
    console.log(carouselItem.getBoundingClientRect());
    reviewcarousel.scrollBy(-100,0);
})
nextReview.addEventListener("click",function(e){
    reviewcarousel.scrollBy(100,0);
})

let xhrRequest = new XMLHttpRequest();

    xhrRequest.onload=function(){
        let response = xhrRequest.response;
        let resJson = JSON.parse(response);
        console.log(resJson.meals);
        bf= resJson.meals;
        bf.forEach(ele => {
            console.log(ele);
            let breakfastDom = ` <div class="category_dish">
            <div class="dish_img_div" >
            <img src="${ele.strMealThumb}">
            </div>
            <div class="dish_info">
                ${ele.strMeal}
            </div>
            </div>`
            console.log(breakfastDom);
            breakfastParent.innerHTML+=breakfastDom;
        });
    }
    xhrRequest.onerror=function(err){
        console.log(err);
    }
    
    xhrRequest.open("get","https://www.themealdb.com/api/json/v1/1/filter.php?c=BreakFast",true);
    xhrRequest.send();



// for(let x in BreakFast){
//     console.log(x);
// }