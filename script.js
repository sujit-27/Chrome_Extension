let myLeads = [];
let oldLeads = [];
const inputbtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
const deletebtn = document.querySelector("#delete-btn");
const tabbtn = document.querySelector("#tab-btn");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("MyLeads"));
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    renderLeads(myLeads);
}

tabbtn.addEventListener("click",function(){
    //Grabbing the URL 
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs) {
        console.log(tabs)
        myLeads.push(tabs[0].url)
        localStorage.setItem("MyLeads",JSON.stringify(myLeads));
        renderLeads(myLeads);
    })
   
})

function renderLeads(leads) {
    let listitems = "";
    for(let i=0 ; i<leads.length ; i++){
        listitems += `
            <li>
                <a href="${leads[i]}" target="_blank">
                ${leads[i]}
                </a>
            </li>
        `
    }

    ulEl.innerHTML = listitems
}

inputbtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    inputEl.value = ""
    localStorage.setItem("MyLeads",JSON.stringify(myLeads))
    renderLeads(myLeads);
})

deletebtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads);
})


