
function dado(){
    //var d = document.getElementById("divale");
    var num = parseInt(Math.random()*6)+1;
    //var num2 = parseInt(Math.random()*6)+1;
    var fuente1 = "img/"+num+".svg";
    //var fuente2 = "img/"+num2+".svg";
    //var r= num+num2;
    //d.innerHTML = num;
    document.querySelector('.img1').setAttribute('src',fuente1);
    //document.querySelector('.img2').setAttribute('src',fuente2);
}

// lo que sucede cuando se arrastra un elemnto
function drag(event){
    //Guardar el i del elemto arrastrado
    event.dataTrasnfer.setData("text",ev.target.id);
}

//funcion evita que se abra como enlace cuando se suelta algun elemento
function allowDrop(event){
    //permitir que se pueda soltar el elemento arrastrado
    event.preventDefault();   
}


function drop(event){
    //obtener el id del elemento arrastrado
    var data = event.dataTrasnfer.getData("text");
    //Mover la imagen al contenedor del destino
    arreglo[parseInt(ev.target.id)]=data;
    event.target.appendChild(document.getElementById(data));
}