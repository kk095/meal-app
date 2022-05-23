let reviewcarousel =  document.querySelector(".review_carousel");
let prevReview = document.querySelector(".prev_review");
let nextReview = document.querySelector(".next_review");
let breakfastParent = document.querySelector(".show_category");
let carouselItem = document.querySelector(".carousel_item");

prevReview.addEventListener("click",function(e){
 let item_width= (carouselItem.getBoundingClientRect().width)+20;
 let left=item_width;
 const reviewScroll=setInterval(() => {
    reviewcarousel.scrollBy(-2,0);
    left -=2;
    if(left<=0){
        clearInterval(reviewScroll);
    }
}, 1);
})
nextReview.addEventListener("click",function(e){
    let item_width= (carouselItem.getBoundingClientRect().width)+20;
    let right=0;
    const reviewScroll=setInterval(() => {
        reviewcarousel.scrollBy(2,0);
        right+=2;
        if(right>=item_width){
            right=0;
            clearInterval(reviewScroll);
        }
    }, 1);
})

let xhrRequest = new XMLHttpRequest();

    xhrRequest.onload=function(){
        let response = xhrRequest.response;
        let resJson = JSON.parse(response);
        bf= resJson.meals;
        bf.forEach(ele => {
            let breakfastDom = ` <div class="category_dish">
            <div class="dish_img_div" >
            <img src="${ele.strMealThumb}">
            </div>
            <div class="dish_info">
                ${ele.strMeal}
            </div>
            </div>`
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