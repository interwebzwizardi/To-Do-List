//LISÄTÄÄN TAPAHTUMAKUUNTELIJAT

//Tapahtumakuuntelijat napille (toimii myös enterin painalluksella)
submitNappi.addEventListener('click', addToList);
addTasks.addEventListener('keyup', function(event){
  if(event.keyCode == 13){
    addToList();
  }
});

//FUNKTIOT

//Funktio syötteen validoimiseen ja elementin listaamiseen

//Muuttujat lisättyjen elementtien määrän laskua varten
var taskNroKierros = -1;
var checkboxNroKierros = -1;
var deleteBtnNroKierros = -1;

function newListElement(){

  /*Luodaan luoduille elementeille yksilöivä "rekisterinumero", jolla myöhemmin
  tunnistetaan mikä elementti on kyseessä*/
  taskNroKierros = taskNroKierros + 1;
  var taskNro = taskNroKierros;

  checkboxNroKierros = checkboxNroKierros + 1;
  var checkboxNro = checkboxNroKierros;

  deleteBtnNroKierros = deleteBtnNroKierros +1;
  var deleteBtnNro = deleteBtnNroKierros;

  //Haetaan käyttäjän syöttämä sisältö
  var sisältö = document.getElementById('addTasks').value;

  //Luodaan uusi kohta To-Do -listaan
  var uusiListaus = document.createElement('li');
  uusiListaus.setAttribute('name', taskNro);
  //Määritellään uudelle elementille id, jonka mukaan sen tyyli määräytyy
  uusiListaus.setAttribute("class", "liItem");

  //Lisätään sisältö "li" -elementtiin (checkbox, sisältö ja poistonappi)
  var checkbox = document.createElement('input');
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "checkboxNappi");
  checkbox.setAttribute("name", checkboxNro);
  checkbox.setAttribute("onclick", "checkboxAction()");

  var deleteBtn = document.createElement('button');
  deleteBtn.setAttribute("class", "deleteBtn");
  deleteBtn.setAttribute("name", deleteBtnNro);
  deleteBtn.innerHTML = 'Delete';
  deleteBtn.addEventListener('click', deleteBtnAction);

  uusiListaus.appendChild(checkbox);
  uusiListaus.appendChild(document.createTextNode(sisältö));
  uusiListaus.appendChild(deleteBtn);

  //Haetaan listaelementti, johon uusi listaus lisätään
  var lista = document.getElementById('taskList');
  //Lopuksi lisätään uusi listaus näkyviin
  lista.appendChild(uusiListaus);
}

function addToList(){

  var input = document.getElementById('addTasks').value;

  if (input.length <=0){
    alert("Can't add empty notes.");
    document.getElementById('addTasks').style.border="2px solid red";
  }
else {
  document.getElementById('addTasks').style.border="1px solid black";

  newListElement();

}
}

function checkboxAction(){

  //Haetaan kaikki luodut checkboxit ja listaukset
  var checkboxes = document.getElementsByClassName('checkboxNappi');
  var tasks = document.getElementsByTagName('li');

//Käydään listaukset läpi ja määritetään mikä checkbox klikattiin päälle tai pois
for(var i = 0; i < tasks.length; i++){
  if(checkboxes[i].checked){

      tasks[i].style.backgroundColor="#ffd45e";
      tasks[i].style.textDecoration="line-through";
      tasks[i].style.color="grey";
    }

  else{
    tasks[i].style.backgroundColor="#65a9e6";
    tasks[i].style.textDecoration=null;
    tasks[i].style.color=null;
  }
}
}


function deleteBtnAction(){

  //Haetaan kaikki luodut delete -napit ja listaukset

  var deleteButtons = document.getElementsByClassName('deleteBtn');

  var target = event.target.getAttribute('name');
  var ul = document.getElementById('taskList');


  //Käydään listaukset läpi ja määritetään mikä kohta poistetaan
  for(var i = 0; i < deleteButtons.length; i++){
    console.log("target",target);
    console.log("task",deleteButtons[i].name);

    if(target == deleteButtons[i].name){
      ul.removeChild(deleteButtons[i].parentNode);
      break;
    }

}

}
