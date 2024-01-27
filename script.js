/* side panel toggle */

/* Make nav bar visible */
function openNav() {
    document.getElementById("side-panel").style.width = "160px";
  }
  
  /* Hide the nav bar */
  function closeNav() {
    document.getElementById("side-panel").style.width = "0";
  }

  /* change text of header */
let headerTitle = document.getElementById("name-header");

function changeText() {
    headerTitle.innerHTML = 'HEllo WOrld';
  }

  /* event handler */
  headerTitle.addEventListener('onclick', changeText);

  /* project card */

let projectCard = document.getElementsByClassName('project-card');
let projectInfo = document.getElementsByClassName('project-overview');

/*projectInfo.hidden = true;*/

function showInfo() {
    projectInfo.style.display = 'block';

    projectCard.style.border = '2px solid green';
}

/* event handler */
projectCard.addEventListener('onmouseenter', showInfo);