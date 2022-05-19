    
let row=document.querySelector(".row")
let choice=document.querySelectorAll(".choice")
choice.forEach(el => {
    el.onclick=function(){
        alert("Duzgun secim etdiyinizden eminsiniz?");
        if(this.appendChild().innerText=="Germany"){
            console.log("duzdu");
        }
        
    }
});
async function getDataAcync(country){
    let data=await fetch("https://restcountries.com/v3.1/all");
    let countries=await data.json();
    countries.forEach(el => {
        if(el.name.common==country){
            
        }
    });
}