var visible = false;
var important = false;
var UI ={}; //INICIALIZADOR DEL OBJETO

var hide="fas fa-eye-slash";
var visi="fas fa-eye";


var taskList = [];

function showDetails(){
    //console.log("btn clicked!!!");
    var vh = "";



    if(!visible){
        vh =  `<i id="eyes" class="${hide}" ></i>`;
        visible=true;
        UI.btnShow.html(vh+" Hide details");
        UI.secForm.removeClass("invisible");

    }
    else{
        vh =  `<i id="eyes" class="${visi}" ></i>`;
        visible=false;
        UI.btnShow.html(vh+" Show details");
        UI.secForm.addClass("invisible");

    }

}

function toogleImportant(){
    if(!important){
        UI.btnImportant.removeClass("far").addClass("fas active");
        //UI.btnImportant.removeClass("btn-light");
        //UI.btnImportant.addClass("btn-danger");       
        important=true;
    }else{
        UI.btnImportant.removeClass("fas active").addClass("far");
        //UI.btnImportant.removeClass("btn-danger");
        //UI.btnImportant.addClass("btn-light").addClass("active");
        important=false;
    }

}

function clearInputs(){
        $(".control").val("");
}

function SaveTask(){
    console.log("sss");
    var Title = UI.txtTitle.val();
    //var Important = UI.btnImportant.val();
    var Date = UI.txtDate.val();
    var Description = UI.txtDescription.val();
    var Alert = UI.txtAlert.val();
    var Location = UI.txtLocation.val();  

    var task = new Task(Title,important, Date, Description, Alert, Location);

    taskList.push(task);

    console.log(taskList);

    clearInputs();

}



function test(a){

    a={}
    console.log("Modifica", a);
}


function init(){
    var Title = "this is a main page!!";
    //console.log(Title);
    

    //Object Literal - Aqui solo trendremos uno y para recrearlo se tiene que repetior el proceso nuevamente.
    UI = {
        btnShow: $("#btnShow"),
        btnImportant: $("#btnImportant"),
        secForm: $("#section-Form"),
        btnSave: $("#btnSave"),
        txtTitle: $("#txtTitle"),
        btnImportant: $("#btnImportant"),
        txtDate: $("#txtDate"),
        txtDescription: $("#txtDescription"),
        txtAlert: $("#txtAlert"),
        txtLocation: $("#txtLocation")  

    }

    //test(UI);

    //console.log("Modifica", UI);

    //get data from servers

    // hook events
    //$("#btnShow").click( showDetails );
    //$("#btnExclam").click(toogleImportant);

    UI.btnShow.click(showDetails);
    UI.btnImportant.click(toogleImportant);

    UI.btnSave.click(SaveTask);

    /*wORK WITH PRESENTATION*/     

    //set the text of an input field
    //$("#txtTitle").val("Jesus Camarena");
}


window.onload = init;


/*
    //Object Literal - Aqui solo trendremos uno y para recrearlo se tiene que repetior el proceso nuevamente.
    dog = {name: 'fido'}
 
    //Object constructor
    function Dog(name){
        this.name = name;
    }

    var lola = new Dog('Lola');
    var rosco = new Dog('Rosco');


    es6
    Create class

    class 



 
 */