
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
/*
// lo que sucede cuando se arrastra un elemnto
function drag(ev){
    //Guardar el id del elemto arrastrado
    ev.dataTrasnfer.setData("text",ev.target.id);
}

//funcion evita que se abra como enlace cuando se suelta algun elemento
function allowDrop(ev){
    //permitir que se pueda soltar el elemento arrastrado
    ev.preventDefault();   
}


function drop(ev){
    ev.preventDefault();
    //obtener el id del elemento arrastrado
    var data = ev.dataTrasnfer.getData("text");
    //Mover la imagen al contenedor del destino
    ev.target.appendChild(document.getElementById(data));
}*/