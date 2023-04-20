
function dado(){
    //var d = document.getElementById("divale");
    var num = parseInt(Math.random()*6)+1;
    //var num2 = parseInt(Math.random()*6)+1;
    var fuente1 = "img/"+num+".svg";
    //var fuente2 = "img/"+num2+".svg";
    //var r= num+num2;
    //d.innerHTML = num;
    document.querySelector('.img1').setAttribute('src',fuente1);
}

function mostrar(){
    swal({
        title:'¿Indicate which developer is refactoring?',
        text:'Go to your keyboard and press, 1 for developer turn 1, 2 for developer turn 2, 3 for developer turn 3, 4 for developer turn 4, 5 for developer turn 5, 6 for developer developer turn 6.',
        icon:'success',
    });
}

function boton(){
    mostrar();
    var x = null;
    var Fan_Out = null;
    var Fan_In = null;
    var Num_comp = null;
    var Num_Ed = null;
    var Num_Nod = null;
    var Iden = null;
    var Shd_Struc = null;
    var Shd_Dat = null;
    Tech_Debt = null;
    document.addEventListener("keydown",function(e){
        if(e.key === "1"){
            x = 1;
            console.log(x);
            var fanO1 = document.getElementById("fanO1");
            fanO1.innerHTML = 2;
        }
        if(e.key === "2"){
            x=2;
            console.log(x);
        }
        if(e.key === "3"){
            x = 3;
            console.log(x);
        }
        if(e.key === "4"){
            x=4;
            console.log(x);
        }
        if(e.key==="5"){
            x=5;
            console.log(x);
        }
        if(e.key==="6"){
            x=6;
            console.log(x);
        }
    });
}