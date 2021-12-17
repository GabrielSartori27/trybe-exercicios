function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  //Exercício 1
  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  function createDays(){
    let list = document.getElementById("days")
    for(let i = 0; i < dezDaysList.length; i += 1){
      let li = document.createElement('li');
      li.innerText = dezDaysList[i];
      li.className = 'day'
      list.appendChild(li);
      if(dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31){
      li.innerText = dezDaysList[i];
      li.classList.add('holiday');
      list.appendChild(li);
      }
      if(dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25){
      li.innerText = dezDaysList[i];
      li.classList.add('friday');
      list.appendChild(li);
        
        }
      }
    };
  createDays();

  //Exercício 2
  function createHoliday(string){
    let buttonName = "";
    for(let i = 0; i < string.length; i += 1){
      buttonName = buttonName + string[i]
    }let button = document.createElement('button')
      button.innerHTML = buttonName;
      button.id = 'btn-holiday';
      document.querySelector(".buttons-container").appendChild(button);
  }
  createHoliday('Feriados');

  //Exercício 3
  let buttonHoliday = document.getElementById("btn-holiday");
  function green(event){
    let h = document.querySelectorAll(".holiday")
    for(let i = 0; i < h.length; i += 1){
      if(h[i].style.backgroundColor === "green"){
        h[i].style.backgroundColor = "rgb(238,238,238)" 
      }else{
      h[i].style.backgroundColor = "green";
      }
    }
  }
  buttonHoliday.addEventListener('click', green);
  
  //Exercício 4
  function createFriday(string){
    let buttonName = "";
    for(let i = 0; i < string.length; i += 1){
      buttonName = buttonName + string[i]
    }let button = document.createElement('button')
      button.innerHTML = buttonName;
      button.id = 'btn-friday';
      document.querySelector(".buttons-container").appendChild(button);
  }
  createFriday('Sexta-feira');

  //Exercício 5
 function sextou(){ 
 let friday = document.getElementsByClassName('friday');
 if(friday[0].innerText === 'sextou!!'){
  friday[0].innerText = 4;
  friday[1].innerText = 11;
  friday[2].innerText = 18;
  friday[3].innerText = 25;
 }else{
 for(let i = 0; i < friday.length; i += 1){
  friday[i].innerText = 'sextou!!'}
    }
  }
 document.getElementById('btn-friday').addEventListener('click', sextou)

 //Exercício 6
 function zoom(event){
  event.target.style.fontSize = '40px';
 }
 document.getElementById('days').addEventListener('mouseover',zoom);

 function undoneZoom(event){
  event.target.style.fontSize = '20px';
 }
 document.getElementById('days').addEventListener('mouseout',undoneZoom);

 //Exercício 7
 function tasks(tasks){
   let task = document.createElement('span');
    task.innerText = tasks;
    document.querySelector('.my-tasks').appendChild(task);
 }
 tasks('Estudar');

 //Exercício 8
 function color(string){
   let cor = document.createElement('div')
   cor.className = 'task'
   cor.style.backgroundColor = string;
   document.querySelector('.my-tasks').appendChild(cor);
 }
 color('green')

//Exercício 9
function selected(event){
  if(event.target.className === 'task selected'){
  event.target.classList.remove('selected')
  }else{
  event.target.className = 'task selected'
    }
  }
document.querySelector('.task').addEventListener('click', selected);

//Exercício 10
function select(event){
  let c = document.querySelector('.selected').style.backgroundColor;
  if(event.target.style.color === c){
    event.target.style.color = 'rgb(119,119,119)'
  }else{
    event.target.style.color = c;
  }
}
document.querySelector('#days').addEventListener('click', select);
  
//Exercício bônus
function commitmentList(){
  let ul = document.createElement('ul');
  ul.innerText = 'MEUS COMPROMISSOS';
  ul.style.marginTop = '10px';
  ul.className = 'commitmentList';
  ul.style.paddingLeft = '200px'
  ul.style.paddingRight = '220px'
  document.querySelector('.input-container').appendChild(ul); 
}
 commitmentList();


function compromisso(event){
  if(document.querySelector('#task-input').value === ''){
    alert('ERRO: NENHUM CARACTERE INSERIDO')}
  else{
  let commitment = document.createElement( 'li');
  commitment.innerText = document.querySelector('#task-input').value;
  document.querySelector('.commitmentList').appendChild(commitment);
    }
  }
  function compromissoEnter(event){
    if(event.key === 'Enter' && document.querySelector('#task-input').value === '' ){
      alert('ERRO: NENHUM CARACTERE INSERIDO')}
    else if(event.key === 'Enter'){
    let commitment = document.createElement( 'li');
    commitment.innerText = document.querySelector('#task-input').value;
    document.querySelector('.commitmentList').appendChild(commitment);
        }   
      }
    
  
document.querySelector('#task-input').addEventListener('keyup', compromissoEnter);
document.querySelector('#btn-add').addEventListener('click', compromisso);
