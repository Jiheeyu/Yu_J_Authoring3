//import your packages here
import Team from "./modules/DataModule.js";

(() => {
    // stub * just a place for non - component - specific stuff
    let userSection = document.querySelector(".user-section"),
        usertemplate = document.querySelector("#profs-template").content;
    
    function handleDateSt(data) {
        
        
        for (let user in Team) {
            //make a copy of our template here and then
            //populate the children (text elements) with
            //the static data from the Team object
            
            let currentUser = usertemplate.cloneNode(true),
                currentUserText = currentUser.querySelector(".user").children;

            currentUserText[1].textContent = data[user].name;
            currentUserText[2].textContent = data[user].role;
            currentUserText[3].textContent = data[user].nickname;

            userSection.appendChild(currentUser);
        }


        // userSection[1].textContent = Team["Justin"].name;
        // userSection[2].textContent = Team["Justin"].role;
        // userSection[3].textContent = Team["Justin"].nickname;
    }
   
    debugger;
    // select our user elements and load the content
    handleDateSt(Team);

    // userSection[1].textContent = Team["Justin"].name;
    // userSection[2].textContent = Team["Justin"].role;
    // userSection[3].textContent = Team["Justin"].nickname;
})();