const dezDaysList = [
	29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function createDaysOfTheWeek() {
	const weekDays = [
		"Domingo",
		"Segunda",
		"Terça",
		"Quarta",
		"Quinta",
		"Sexta",
		"Sábado",
	];
	const weekDaysList = document.querySelector(".week-days");

	for (let index = 0; index < weekDays.length; index += 1) {
		const days = weekDays[index];
		const dayListItem = document.createElement("li");
		dayListItem.innerHTML = days;

		weekDaysList.appendChild(dayListItem);
	}
}

function createDaysOfTheMonth() {
	const monthDaysList = document.getElementById ('days');
  
  for (i = 0; i < dezDaysList.length; i += 1) {
    let day = document.createElement("li");
    day.innerText = dezDaysList[i];
    day.classList.add("day");
    
    if(dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31){
      day.classList.add("holiday");
    }
    if(dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25){
      day.classList.add("friday");
    }

    monthDaysList.appendChild (day);
  }
}

function createButton (textButton, idButton){
  let buttonContainer = document.getElementsByClassName ('buttons-container');
  let newButton = document.createElement("button");
  newButton.innerText = textButton;
  newButton.id = idButton;
  console.log(newButton);
  buttonContainer[0].appendChild(newButton);
}

// Escreva seu código abaixo.

createDaysOfTheWeek();
createDaysOfTheMonth();
createButton("Feriados","btn-holiday");
document.getElementById('btn-holiday').addEventListener("click", function(){
	let  holidays = document.getElementsByClassName('holiday');
	if(holidays[0].style.backgroundColor === "yellow"){
		for ( let i = 0; i < holidays.length; i += 1){
			holidays[i].style.backgroundColor = "rgb(238,238,238)";
		}
	}else{
		for ( let i = 0; i < holidays.length; i += 1){
			holidays[i].style.backgroundColor = "yellow";
		}
	}
});



createButton("Sexta-feira","btn-friday");
document.getElementById('btn-friday').addEventListener("click", function(){
	let  fridays = document.getElementsByClassName('friday');
	if(+fridays[0].innerText) {
		for ( let i = 0; i < fridays.length; i += 1){
			fridays[i].innerText = "Sextou!";
		}		
	}else{
		for ( let i = 0; i < fridays.length; i += 1){
			fridays[i].innerText =  parseInt(fridays[i].previousSibling.innerText) + 1;
		}
	}
});

function addDaysListener (){
	let  allDays = document.getElementsByClassName('day');
	for ( let i = 0; i < allDays.length; i += 1){
		allDays[i].addEventListener('mouseover',function(){
			console.log(allDays[i].innerText);
			allDays[i].style.fontSize = "50px";
		});
		allDays[i].addEventListener('mouseout',function(){
			console.log(allDays[i].innerText);
			allDays[i].style.fontSize = "20px";
		});
	}	
}

addDaysListener();


