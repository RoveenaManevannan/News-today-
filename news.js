//variables
const homeBtn = document.getElementById("home");
const ukBtn = document.getElementById("uk");
const worldBtn = document.getElementById("world");
const sportsBtn = document.getElementById("sports");
const businessBtn = document.getElementById("business");
const newsType = document.getElementById("newsType");
const newsDetails = document.getElementById("newsDetails");

//array
var newsDataArray;

//APIs
const HOME_NEWS ="https://newsdata.io/api/1/news?apikey=pub_12018d9a92e511b55fa719f6f7946c9c5a8a6&country=gb&category=top"; 
const UK_NEWS = "https://newsdata.io/api/1/news?apikey=pub_12018d9a92e511b55fa719f6f7946c9c5a8a6&country=gb";
const WORLD_NEWS = "https://newsdata.io/api/1/news?apikey=pub_12018d9a92e511b55fa719f6f7946c9c5a8a6&country=us,ca,cn,ru&category=top&language=en";
const SPORTS_NEWS = "https://newsdata.io/api/1/news?apikey=pub_12018d9a92e511b55fa719f6f7946c9c5a8a6&category=sports&language=en";
const BUSINESS_NEWS = "https://newsdata.io/api/1/news?apikey=pub_12018d9a92e511b55fa719f6f7946c9c5a8a6&category=business&language=en";

window.onload = function(){
    fetchHeadlines();
}
//Adding event listeners for eact link click
homeBtn.addEventListener("click",function(){
    fetchGeneralNews();
});

ukBtn.addEventListener("click",function(){
    fetchUkNews();
});

worldBtn.addEventListener("click",function(){
    fetchWorldNews();
});

sportsBtn.addEventListener("click",function(){
    fetchSportsNews();
});

businessBtn.addEventListener("click",function(){
    fetchBusinessNews();
});

const fetchHeadlines = async () => {
    const response = await fetch(HOME_NEWS);
    newsDataArray = [];
    if(response.status >=200 && response.status <300){
        const myJson = await response.json();
        newsDataArray = myJson.results;
        console.log(myJson);
    }else{
        //handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchGeneralNews = async () => {
    const response = await fetch(HOME_NEWS);
    newsDataArray = [];
    if(response.status >=200 && response.status <300){
        const myJson = await response.json();
        newsDataArray = myJson.results;
        console.log(myJson);
    }else{
        //handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchUkNews = async () => {
    const response = await fetch(UK_NEWS);
    newsDataArray = [];
    if(response.status >=200 && response.status <300){
        const myJson = await response.json();
        newsDataArray = myJson.results;
    }else{
        //handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}
const fetchWorldNews = async () => {
    const response = await fetch(WORLD_NEWS);
    newsDataArray = [];
    if(response.status >=200 && response.status <300){
        const myJson = await response.json();
        newsDataArray = myJson.results;
    }else{
        //handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}
const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS);
    newsDataArray = [];
    if(response.status >=200 && response.status <300){
        const myJson = await response.json();
        newsDataArray = myJson.results;
    }else{
        //handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}
const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS);
    newsDataArray = [];
    if(response.status >=200 && response.status <300){
        const myJson = await response.json();
        newsDataArray = myJson.results;
    }else{
        //handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}
function displayNews(){
    newsDetails.innerHTML = "";

    if(newsDataArray.length == 0){
        newsDetails.innerHTML = "<h5>No data found.</h5>";
        return;
    }
    newsDataArray.forEach(news => {
        var date = news.pubDate.split("T")

         var col = document.createElement('div');
         col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

         var card = document.createElement('div');
         card.className = "p-2";

         //var image = document.createElement('img');
         //image.setAttribute("height","matchparent");
         //image.setAttribute("width","100%");
         //image.src = news.urlToImage;

         var cardBody = document.createElement('div');

         var newsHeading = document.createElement('h5');
         newsHeading.className = "card-title";
         newsHeading.innerHTML = news.title;

         var dateHeading = document.createElement('h6');
         dateHeading.className = "text-primary";
         dateHeading.innerHTML = date[0];
         
         var description = document.createElement('p');
         description.className = "text-muted";
         description.innerHTML = news.description;
        
         var link = document.createElement('a');
         link.className="btn btn-dark";
         link.setAttribute("target", "_blank");
         link.href = news.link;
         link.innerHTML = "Read More";

         cardBody.appendChild(newsHeading);
         cardBody.appendChild(dateHeading);
         cardBody.appendChild(description);
         cardBody.appendChild(link);

        // card.appendChild(image);
         card.appendChild(cardBody);

         col.appendChild(card);

        newsDetails.appendChild(col);
    })
}





