//import your packages here
import Team from "./modules/DataModule.js";
import { fetchData } from "./modules/DataMiner.js";

(() => {
   

    //     .then(res => res.json()) // parse the JSON (translate) back to plain JS
    //     .then(data => {
    //         //this is our data (DataSet.json)
    //         //converted to a plain Javascript object
    //         handleDataSet(data);
    //     })
    // .ctach((error) => console.log(error));
    
    // this receives the data payload from our AJAX request, parses it
    function handleDataSet(data) {
        let userSection = document.querySelector('.user-section'),
            userTemplate = document.querySelector('#user-template').content;

        //loop through
        for (let user in data) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;
                debugger;
            currentUserText[1].src = `./images/${data[user].avatar}.jpg`;
            currentUserText[2].textContent = data[user].role;
            currentUserText[3].textContent = data[user].name;
            currentUserText[4].textContent = data[user].nickname;


            // add this new user to the view
            userSection.appendChild(currentUser);
        }
        console.log(data);
    } 
    fetchData("./includes/functions.php").then(data => handleDataSet(data)).catch(err => console.log(err));
    
})();

    