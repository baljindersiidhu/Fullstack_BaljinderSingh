const userTab =document.querySelector("[data-userweather]")
const searchTab=document.querySelector("[data-search-weather]")
 const userContainer=document.querySelector(".weather-container")

 const grantAccessContainer= document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]")
const loadingContainer=document.querySelector(".loading-container");
const userInfoContainer=document.querySelector(".user-info-container")
const errorhandle=document.querySelector(".error-img");
// initailly needed varialble;

let currentTab=userTab;
const API_KEY="a2a0f4e9bc3c929df7048916f67cd17b";
currentTab.classList.add("current-tab")

getfromsessionStorage();

function switchTab(clickedTab){
    if(clickedTab!=currentTab){
        currentTab.classList.remove("current-tab");
        currentTab=clickedTab;
        currentTab.classList.add("current-tab");

        if (!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{
            //main pehle seach wale tab pe tha
            searchForm.classList.remove("active");
             userInfoContainer.classList.remove("active");
            //  abb wha pr agya hu toh check kro stored coordinates  jo hmaari location k hai
             getfromsessionStorage();
        }

    }
}

userTab.addEventListener("click",()=>{
    // pass clicked tab as input parameter
    errorhandle.classList.remove("active")
    switchTab(userTab);
});

searchTab.addEventListener("click",()=>{
    // pass clicked tab as input parameter
    switchTab(searchTab);
})


// check if coordinates are already presnt in session storage
function getfromsessionStorage(){
    const localCoordinates = sessionStorage.getItem("user-coordinates");

    if(!localCoordinates){
        grantAccessContainer.classList.add("active");
    }
    else{
        const coordinates=JSON.parse(localCoordinates);
        fetchuserWeatherInfo(coordinates);
    }
}

async function fetchuserWeatherInfo(coordinates){
    const {lat,lon}=coordinates;
    //make grantaccesscontainer invisible
    grantAccessContainer.classList.remove("active");
    // make laoder visible
    loadingContainer.classList.add("active");
    // API CALL
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
       

        if(!response.ok){
            throw new Error("City is Invalid");
        }
          errorhandle.classList.remove("active");
 const data= await response.json();
        loadingContainer.classList.remove("active")
        userInfoContainer.classList.add("active")
        renderWeatherInfo(data);
    } catch (error) {
       errorhandle.classList.add("active");
        loadingContainer.classList.remove("active");
        userInfoContainer.classList.remove("active")
    }
}

function renderWeatherInfo(weatherInfo){
        // firstlt fetch the elements
        const cityName =document.querySelector("[data-cityName]");
        const countryIcon=document.querySelector("[data-countryIcon]");
        const desc=document.querySelector("[data-weatherDesc]");
        const weatherIcon=document.querySelector("[data-weatherIcon]");
        const temp=document.querySelector("[data-temp]");
        const windspeed=document.querySelector("[data-windspeed]")
        const humidity=document.querySelector("[data-humidity]")
        const cloundiness=document.querySelector("[data-cloudiness]")

        //fetch value form weatherINFO and put into the 
        cityName.innerText=weatherInfo?.name;
        countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
        desc.innerText=weatherInfo?.weather?.[0]?.description;
        weatherIcon.src= `https://openweathermap.org/img/wn/${weatherInfo?.weather?.[0]?.icon}@2x.png`;
        temp.innerText=`${weatherInfo?.main?.temp} °C `;
        windspeed.innerText=`${weatherInfo?.wind?.speed} Kmp`;
        humidity.innerText=`${weatherInfo?.main?.humidity} %`;
        cloundiness.innerText=`${weatherInfo?.clouds?.all} %`;

 }  


 const grantAccessBtn=document.querySelector("[data-grantAccess]");
 grantAccessBtn.addEventListener("click",getlocation);

 function getlocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        alert("give the access to the location")
    }
 }

 function showPosition(position){
    const userCoordinates={
          lat:position.coords.latitude,
     lon:position.coords.longitude
    }
    sessionStorage.setItem("user-coordinates",JSON.stringify(userCoordinates))
fetchuserWeatherInfo(userCoordinates)
 }

 const searchInput=document.querySelector("[data-search-input]")

 searchForm.addEventListener("submit",(e)=>{
e.preventDefault();
 let cityName=searchInput.value
 if(cityName===""){
    return
 }
 else{
    fetchSearchWeatherInfo(cityName);
 }

 })


  async function fetchSearchWeatherInfo(city){
    loadingContainer.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");
     try {
         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
         errorhandle.classList.remove("active");
         if(!response.ok){
            throw new Error("city is invalid ")
         }
         
         const data =await response.json();
          loadingContainer.classList.remove("active");
          userInfoContainer.classList.add("active");
          renderWeatherInfo(data);

        
     } catch (error) {
        
        userInfoContainer.classList.remove("active");
        loadingContainer.classList.remove("active");
      errorhandle.classList.add("active");
     }
  }