// NavBars click
let bars = $("#bars");
let navHeader = $("#nav-header");
let Xmark = $("#Xmark");
let Landing = $("#landing");

// aHref
let nowPlaying  = $("#nowPlaying");
let popular     = $("#popular");
let topRated    = $("#top-rated");
let tranding    = $("#trand");
let upComing    = $("#upcoming");
let contact     = $("#contact");
// inputs
let search_bar = document.getElementById("AllMovie");
let word = document.getElementById("word");
let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userPhone = document.getElementById("phone");
let userAge = document.getElementById("age");
let userPassword = document.getElementById("Password");
let userRePassword = document.getElementById("rePassword");
let textArea = document.querySelector("#textarea");
let charSpan = document.querySelector("#charSpan");

// Open Navbar
$(bars).click(() => { 
    $(".nav-top-header").animate({left: "240px"}, 1000, ()=>{
        $(navHeader).css("display", 'block');
        $(".nav-header .item-1").animate({"paddingTop": '2rem', "opacity":"1"},1000);
        $(".nav-header .item-2").animate({"paddingTop": '1.5rem', "opacity":"1"},1050);
        $(".nav-header .item-3").animate({"paddingTop": '1.5rem', "opacity":"1"},1100);
        $(".nav-header .item-4").animate({"paddingTop": '1.5rem', "opacity":"1"},1150);
        $(".nav-header .item-5").animate({"paddingTop": '1.5rem', "opacity":"1"},1200);
        $(".nav-header .item-6").animate({"paddingTop": '1.5rem', "opacity":"1"},1250);
        $(bars).css("display", 'none');
        $(Xmark).css("display", "block");
    })
});

// Close Navbar
$(Xmark).click(() => { 
    $(navHeader).css("display", 'none')
        $(".nav-top-header").animate({'left': "0px"},500);
        $(bars).css("display", 'block');
        $(Xmark).css("display", "none");
});

// Start Landing
$(document).ready(function () {
    $(".loader").fadeOut(3000, () => {
        $(Landing).fadeOut(1000, () => {
            $("body").css("overflow-y",'auto');
        })
    });
});

let arrData = [];
// Function CreateData
async function getData(url){
    let response = await fetch(`${url}`);
    let final = await response.json();
    arrData = final.results;
    apiDate();
}
getData(`https://api.themoviedb.org/3/movie/now_playing?api_key=517bf03e41f4d68784b4d867d7274ef7&language=en-US&page=1`);

// Function Print Api in The Row From Html
function apiDate(){
    cartona = ``;
    for(let i = 0; i < arrData.length; i++){
        cartona +=`
        <div class="col-md-4 gy-4">
            <div class="box-title position-relative">
                <img src="https://image.tmdb.org/t/p/w500${arrData[i].backdrop_path}"" class="img-fluid" alt="">
                <div class="boxs d-flex align-items-center">
                    <div class="post-box text-center px-4 py-5 position-absolute">
                        <h2 class="mb-3 fw-bold">${arrData[i].original_title}</h2>
                        <p class='fw-bold text-muted'>${arrData[i].overview}</p>
                        <p class="my-3 info">${arrData[i].vote_average}</p>
                        <p class="my-2 info">${arrData[i].release_date}</p>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    document.getElementById("row").innerHTML = cartona;
}

// Function Search Movie
search_bar.addEventListener('keyup', () => {
    let srcBar = search_bar.value.toLowerCase();
    let current = ``;

    for(let i = 0; i < arrData.length; i++){
        if(arrData[i].original_title.toLowerCase().includes(srcBar)){
            current += `
            <div class="col-md-4 gy-4">
                <div class="box-title position-relative">
                    <img src="https://image.tmdb.org/t/p/w500${arrData[i].backdrop_path}"" class="img-fluid" alt="">
                    <div class="boxs d-flex align-items-center">
                        <div class="post-box text-center px-4 py-5 position-absolute">
                            <h2 class="mb-3 fw-bold"><span class="text-uppercase text-danger">${arrData[i].original_title}</span></h2>
                            <p class='fw-bold text-muted'>${arrData[i].overview}</p>
                            <p class="my-3 info">${arrData[i].vote_average}</p>
                            <p class="my-2 info">${arrData[i].release_date}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        }
    }
    document.getElementById("res").innerHTML = current;
})
word.addEventListener('keyup', () => {
    let srcBar = word.value.toLowerCase();
    let current = ``;

    for(let i = 0; i < arrData.length; i++){
        if(arrData[i].overview.toLowerCase().includes(srcBar)){
            current += `
            <div class="col-md-4 gy-4">
                <div class="box-title position-relative">
                    <img src="https://image.tmdb.org/t/p/w500${arrData[i].backdrop_path}"" class="img-fluid" alt="">
                    <div class="boxs d-flex align-items-center">
                        <div class="post-box text-center px-4 py-5 position-absolute">
                            <h2 class="mb-3 fw-bold">${arrData[i].original_title}</h2>
                            <p class='fw-bold text-muted'><span class="text-primary">${arrData[i].overview}</span></p>
                            <p class="my-3 info">${arrData[i].vote_average}</p>
                            <p class="my-2 info">${arrData[i].release_date}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        }
    }
    document.getElementById("res").innerHTML = current;
});

// Function Char Number
textArea.onkeyup = function(){
    charSpan.textContent = 200 - this.value.length;
    charSpan.textContent < 0 ? charSpan.textContent =  "your available character finished" : "";
}

// Validtion Inputs
function validName(){
    return 1 ==  /^[a-zA-Z]{4,9}[ ][a-zA-Z]{4,8}$/.test(userName.value) ? 
    document.getElementById("alert-name").classList.replace("d-block", 'd-none')
    :
    document.getElementById("alert-name").classList.replace("d-none", 'd-block');
}
function validEmail(){
    return 1 == /^[a-zA-Z]{3,7}[\.\$]?[a-zA-Z]{2,6}?[.]?[0-9]{0,4}?[@][a-zA-Z]{3,6}[\.]{0,1}[a-z]{2,3}$/
    .test(userEmail.value) ?
    document.getElementById("alert-email").classList.replace("d-block", 'd-none')
    :
    document.getElementById("alert-email").classList.replace("d-none", 'd-block');
}
function validPhone(){
    return 1 == /^[0]{1}[1]{1}[0-9]{9}$/.test(userPhone.value) ? 
    document.getElementById("alert-phone").classList.replace("d-block", 'd-none')
    :
    document.getElementById("alert-phone").classList.replace("d-none", 'd-block');
}
function validAge(){
    return 1 == /^[1-9]{0,1}[0-9][80]?$/.test(userAge.value) ? 
    document.getElementById("alert-age").classList.replace("d-block", 'd-none')
    :
    document.getElementById("alert-age").classList.replace("d-none", 'd-block');
}
function validPassword(){
    return 1 == /^[a-zA-z!@#$%^&*0-9]{5,15}$/.test(userPassword.value) ?
    document.getElementById("alert-password").classList.replace("d-block", 'd-none')
    : document.getElementById("alert-password").classList.replace("d-none", 'd-block');
}
function validRePassword(){
    return userPassword.value == userRePassword.value ? 
    document.getElementById("alert-repassword").classList.replace("d-block", 'd-none')
    :
    document.getElementById("alert-repassword").classList.replace("d-none", 'd-block');
}
userName.addEventListener("keyup" , validName);
userEmail.addEventListener("keyup" , validEmail)
userPhone.addEventListener('keyup', validPhone);
userAge.addEventListener("keyup",validAge);

// CallBack Function In The Api
$(nowPlaying).click(() => {
    getData(`https://api.themoviedb.org/3/movie/now_playing?api_key=517bf03e41f4d68784b4d867d7274ef7&language=en-US&page=1`); // true
});
$(popular).click(() => {
    getData(`https://api.themoviedb.org/3/movie/popular?api_key=517bf03e41f4d68784b4d867d7274ef7&language=en-US&page=1`); // true
});
$(topRated).click(() =>{
    getData(`https://api.themoviedb.org/3/movie/top_rated?api_key=517bf03e41f4d68784b4d867d7274ef7&language=en-US&page=1`); // true
})
$(tranding).click(() => {
    getData(`https://api.themoviedb.org/3/trending/movie/day?api_key=517bf03e41f4d68784b4d867d7274ef7`); // true
})
$(upComing).click(() => {
    getData(`https://api.themoviedb.org/3/movie/upcoming?api_key=517bf03e41f4d68784b4d867d7274ef7&language=en-US&page=1`); // true
});
$(contact).click(() => {
    getData(`https://api.themoviedb.org/3/movie/popular?api_key=517bf03e41f4d68784b4d867d7274ef7&language=en-US&page=1`); // true
});