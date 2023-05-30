
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

var x = null;
function mostrar(){
    swal({
        title:'¿Indicate which developer is refactoring?',
        text:'Go to your keyboard and press, 1 for developer turn 1, 2 for developer turn 2, 3 for developer turn 3, 4 for developer turn 4, 5 for developer turn 5, 6 for developer developer turn 6, JUST PRESS ONCE.',
        icon:'success',
    });
}// Esta funcion me muestra un cuadro de alerta para seleccionar el turno del jugador y para que el valor en la tabla vaya cambiando.
    

function calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa){
    document.addEventListener("keydown",function(e){
        if(e.key == "1"){ //en este if se selecciona el turno del jugador 1 y cambian sus valores
            var Fan_OutI=3;
            var Fan_InI=8;
            var Num_CoI=5;
            var Num_EdI=7;
            var Num_NodI=7;
            var Shd_StrucI=8;
            var Shd_DatI=3;          
            var cyclomatic_complexityI = Num_EdI - Num_NodI + 2 * Num_CoI;
            var ModularityI = Fan_InI+Fan_OutI;
            var Data_CouplingI =  Shd_StrucI+ Shd_DatI;
            var Quality_inicial = cyclomatic_complexityI + Data_CouplingI + ModularityI;
            var valores_Unidad_de_CalidadI=3;
            var EffortI = Quality_inicial/valores_Unidad_de_CalidadI;

            x = 1;
            console.log(x);            
            var Fan_In1 = Fan_In;
            var fanIn1 = document.getElementById("fanIn1");
            fanIn1.innerHTML = Fan_In1;
            var Fan_Out1=Fan_Out;
            var fanO1 = document.getElementById("fanO1");
            fanO1.innerHTML = Fan_Out1;
            var Num_Comp1=Num_Comp;
            var NumCo1 = document.getElementById("NumCo1");
            NumCo1.innerHTML = Num_Comp1;
            var Num_Ed1=Num_Ed;
            var NumEd1 = document.getElementById("NumEd1");
            NumEd1.innerHTML = Num_Ed1;
            var Num_Nod1=Num_Nod;
            var NumNo1 = document.getElementById("NumNo1");
            NumNo1.innerHTML = Num_Nod1;
            var Shd_Struc1=Shd_Struc;
            var ShDaStr1 =document.getElementById("ShDaStr1");
            ShDaStr1.innerHTML=Shd_Struc1;
            var Shd_Pa1=Shd_Pa;
            var ShDaPa1 =document.getElementById("ShDaPa1");
            ShDaPa1.innerHTML=Shd_Pa1;

            var cyclomatic_complexity = Num_Ed1 - Num_Nod1 + 2 * Num_Comp1;
            var Modularity = Fan_In1 + Fan_Out1;
            var Data_Coupling =  Shd_Struc1 + Shd_Pa1;
            var valores_Unidad_de_Calidad=3;
            var Qdeveloper = cyclomatic_complexity + Data_Coupling + Modularity;
            var Effort = Qdeveloper/valores_Unidad_de_Calidad;
            var Ef=Effort.toFixed(2);
            var E1 = document.getElementById("E1");
            E1.innerHTML=Ef;
            var Tech_Debt = Quality_inicial - Qdeveloper;
            var TD = document.getElementById("TD1");
            TD.innerHTML = Tech_Debt;
            //console.log(Tech_Debt);

        }
        if(e.key == "2"){
            var Fan_OutI2=5;
            var Fan_InI2=2;
            var Num_CoI2=4;
            var Num_EdI2=6;
            var Num_NodI2=8;
            var Shd_StrucI2=7;
            var Shd_DatI2=3;          
            var cyclomatic_complexityI2 = Num_EdI2 - Num_NodI2 + 2 * Num_CoI2;
            var ModularityI2 = Fan_InI2+Fan_OutI2;
            var Data_CouplingI2 =  Shd_StrucI2+ Shd_DatI2;
            var Quality_inicial2 = cyclomatic_complexityI2 + Data_CouplingI2 + ModularityI2;
            var valores_Unidad_de_CalidadI=3;
            var EffortI2 = Quality_inicial2/valores_Unidad_de_CalidadI;
            console.log(EffortI2);

            x=2;
            console.log(x);            
            var Fan_In2 = Fan_In;
            var fanIn2 = document.getElementById("fanIn2");
            fanIn2.innerHTML = Fan_In2;
            var Fan_Out2=Fan_Out;
            var fanO2 = document.getElementById("fanO2");
            fanO2.innerHTML = Fan_Out2;
            var Num_Comp2=Num_Comp;
            var NumCo2 = document.getElementById("NumCo2");
            NumCo2.innerHTML = Num_Comp2;
            var Num_Ed2=Num_Ed;
            var NumEd2 = document.getElementById("NumEd2");
            NumEd2.innerHTML = Num_Ed2;
            var Num_Nod2=Num_Nod;
            var NumNo2 = document.getElementById("NumNo2");
            NumNo2.innerHTML = Num_Nod2;
            var Shd_Struc2=Shd_Struc;
            var ShDaStr2=document.getElementById("ShDaStr2");
            ShDaStr2.innerHTML=Shd_Struc2;
            var Shd_Pa2=Shd_Pa;
            var ShDaPa2=document.getElementById("ShDaPa2");
            ShDaPa2.innerHTML=Shd_Pa2;

            var cyclomatic_complexity2 = Num_Ed2 - Num_Nod2 + 2 * Num_Comp2;
            var Modularity2 = Fan_In2 + Fan_Out2;
            var Data_Coupling2 =  Shd_Struc2 + Shd_Pa2;
            var valores_Unidad_de_Calidad2=3;
            var Qdeveloper2 = cyclomatic_complexity2 + Data_Coupling2 + Modularity2;
            var Effort2 = Qdeveloper2/valores_Unidad_de_Calidad2;
            var Ef2=Effort2.toFixed(2);
            var E2 = document.getElementById("E2");
            E2.innerHTML=Ef2;
            var Tech_Debt2 = Quality_inicial2 - Qdeveloper2;
            var TD2 = document.getElementById("TD2");
            TD2.innerHTML = Tech_Debt2;
        }
        if(e.key === "3"){
            var Fan_OutI3=7;
            var Fan_InI3=7;
            var Num_CoI3=2;
            var Num_EdI3=9;
            var Num_NodI3=3;
            var Shd_StrucI3=2;
            var Shd_DatI3=7;          
            var cyclomatic_complexityI3 = Num_EdI3 - Num_NodI3 + 2 * Num_CoI3;
            var ModularityI3 = Fan_InI3+Fan_OutI3;
            var Data_CouplingI3 =  Shd_StrucI3+ Shd_DatI3;
            var Quality_inicial3 = cyclomatic_complexityI3 + Data_CouplingI3 + ModularityI3;
            var valores_Unidad_de_CalidadI3=3;
            var EffortI3 = Quality_inicial3/valores_Unidad_de_CalidadI3;
            console.log(EffortI3);

            x = 3;
            console.log(x);
            var Fan_In3 = Fan_In;
            var fanIn3 = document.getElementById("fanIn3");
            fanIn3.innerHTML = Fan_In3;
            var Fan_Out3=Fan_Out;
            var fanO3 = document.getElementById("fanO3");
            fanO3.innerHTML = Fan_Out3;
            var Num_Comp3=Num_Comp;
            var NumCo3 = document.getElementById("NumCo3");
            NumCo3.innerHTML = Num_Comp3;
            var Num_Ed3=Num_Ed;
            var NumEd3 = document.getElementById("NumEd3");
            NumEd3.innerHTML = Num_Ed3;
            var Num_Nod3=Num_Nod;
            var NumNo3 = document.getElementById("NumNo3");
            NumNo3.innerHTML = Num_Nod3;
            var Shd_Struc3=Shd_Struc;
            var ShDaStr3=document.getElementById("ShDaStr3");
            ShDaStr3.innerHTML=Shd_Struc3;
            var Shd_Pa3=Shd_Pa;
            var ShDaPa3=document.getElementById("ShDaPa3");
            ShDaPa3.innerHTML=Shd_Pa3;

            var cyclomatic_complexity3 = Num_Ed3 - Num_Nod3 + 2 * Num_Comp3;
            var Modularity3 = Fan_In3 + Fan_Out3;
            var Data_Coupling3 =  Shd_Struc3 + Shd_Pa3;
            var valores_Unidad_de_Calidad3=3;
            var Qdeveloper3 = cyclomatic_complexity3 + Data_Coupling3 + Modularity3;
            var Effort3 = Qdeveloper3/valores_Unidad_de_Calidad3;
            var Ef3=Effort3.toFixed(2);
            var E3 = document.getElementById("E3");
            E3.innerHTML=Ef3;
            var Tech_Debt3 = Quality_inicial3 - Qdeveloper3;
            var TD3 = document.getElementById("TD3");
            TD3.innerHTML = Tech_Debt3;
        }
        if(e.key === "4"){
            var Fan_OutI4=1;
            var Fan_InI4=8;
            var Num_CoI4=1;
            var Num_EdI4=3;
            var Num_NodI4=6;
            var Shd_StrucI4=3;
            var Shd_DatI4=3;          
            var cyclomatic_complexityI4 = Num_EdI4 - Num_NodI4 + 2 * Num_CoI4;
            var ModularityI4 = Fan_InI4+Fan_OutI4;
            var Data_CouplingI4 =  Shd_StrucI4+ Shd_DatI4;
            var Quality_inicial4 = cyclomatic_complexityI4 + Data_CouplingI4 + ModularityI4;
            var valores_Unidad_de_CalidadI4=3;
            var EffortI4 = Quality_inicial4/valores_Unidad_de_CalidadI4;
            console.log(EffortI4);

            x=4;
            console.log(x);
            var Fan_In4 = Fan_In;
            var fanIn4 = document.getElementById("fanIn4");
            fanIn4.innerHTML = Fan_In4;
            var Fan_Out4=Fan_Out;
            var fanO4 = document.getElementById("fanO4");
            fanO4.innerHTML = Fan_Out4;
            var Num_Comp4=Num_Comp;
            var NumCo4 = document.getElementById("NumCo4");
            NumCo4.innerHTML = Num_Comp4;
            var Num_Ed4=Num_Ed;
            var NumEd4 = document.getElementById("NumEd4");
            NumEd4.innerHTML = Num_Ed4;
            var Num_Nod4=Num_Nod;
            var NumNo4 = document.getElementById("NumNo4");
            NumNo4.innerHTML = Num_Nod4;
            var Shd_Struc4=Shd_Struc;
            var ShDaStr4=document.getElementById("ShDaStr4");
            ShDaStr4.innerHTML=Shd_Struc4;
            var Shd_Pa4=Shd_Pa;
            var ShDaPa4=document.getElementById("ShDaPa4");
            ShDaPa4.innerHTML=Shd_Pa4;

            var cyclomatic_complexity4 = Num_Ed4 - Num_Nod4 + 2 * Num_Comp4;
            var Modularity4 = Fan_In4 + Fan_Out4;
            var Data_Coupling4 =  Shd_Struc4 + Shd_Pa4;
            var valores_Unidad_de_Calidad4=3;
            var Qdeveloper4 = cyclomatic_complexity4 + Data_Coupling4 + Modularity4;
            var Effort4 = Qdeveloper4/valores_Unidad_de_Calidad4;
            var Ef4=Effort4.toFixed(2);
            var E4 = document.getElementById("E4");
            E4.innerHTML=Ef4;
            var Tech_Debt4 = Quality_inicial4 - Qdeveloper4;
            var TD4 = document.getElementById("TD4");
            TD4.innerHTML = Tech_Debt4;
            //console.log(Tech_Debt4);
        }
        if(e.key==="5"){
            var Fan_OutI5=9;
            var Fan_InI5=3;
            var Num_CoI5=5;
            var Num_EdI5=8;
            var Num_NodI5=7;
            var Shd_StrucI5=1;
            var Shd_DatI5=8;          
            var cyclomatic_complexityI5 = Num_EdI5 - Num_NodI5 + 2 * Num_CoI5;
            var ModularityI5 = Fan_InI5+Fan_OutI5;
            var Data_CouplingI5 =  Shd_StrucI5+ Shd_DatI5;
            var Quality_inicial5 = cyclomatic_complexityI5 + Data_CouplingI5 + ModularityI5;
            var valores_Unidad_de_CalidadI5=3;
            var EffortI5 = Quality_inicial5/valores_Unidad_de_CalidadI5;
            console.log(EffortI5);
            
            x=5;
            console.log(x);
            var Fan_In5 = Fan_In;
            var fanIn5 = document.getElementById("fanIn5");
            fanIn5.innerHTML = Fan_In5;
            var Fan_Out5=Fan_Out;
            var fanO5 = document.getElementById("fanO5");
            fanO5.innerHTML = Fan_Out5;
            var Num_Comp5=Num_Comp;
            var NumCo5 = document.getElementById("NumCo5");
            NumCo5.innerHTML = Num_Comp5;
            var Num_Ed5=Num_Ed;
            var NumEd5 = document.getElementById("NumEd5");
            NumEd5.innerHTML = Num_Ed5;
            var Num_Nod5=Num_Nod;
            var NumNo5 = document.getElementById("NumNo5");
            NumNo5.innerHTML = Num_Nod5;
            var Shd_Struc5=Shd_Struc;
            var ShDaStr5=document.getElementById("ShDaStr5");
            ShDaStr5.innerHTML=Shd_Struc5;
            var Shd_Pa5=Shd_Pa;
            var ShDaPa5=document.getElementById("ShDaPa5");
            ShDaPa5.innerHTML=Shd_Pa5;

            var cyclomatic_complexity5 = Num_Ed5 - Num_Nod5 + 2 * Num_Comp5;
            var Modularity5 = Fan_In5 + Fan_Out5;
            var Data_Coupling5 =  Shd_Struc5 + Shd_Pa5;
            var valores_Unidad_de_Calidad5=3;
            var Qdeveloper5 = cyclomatic_complexity5 + Data_Coupling5 + Modularity5;
            var Effort5 = Qdeveloper5/valores_Unidad_de_Calidad5;
            var Ef5=Effort5.toFixed(2);
            var E5 = document.getElementById("E5");
            E5.innerHTML=Ef5;
            var Tech_Debt5 = Quality_inicial5 - Qdeveloper5;
            var TD5 = document.getElementById("TD5");
            TD5.innerHTML = Tech_Debt5;
            //console.log(Tech_Debt5);
        }
        if(e.key==="6"){
            var Fan_OutI6=5;
            var Fan_InI6=5;
            var Num_CoI6=8;
            var Num_EdI6=4;
            var Num_NodI6=2;
            var Shd_StrucI6=8;
            var Shd_DatI6=2;          
            var cyclomatic_complexityI6 = Num_EdI6 - Num_NodI6 + 2 * Num_CoI6;
            var ModularityI6 = Fan_InI6+Fan_OutI6;
            var Data_CouplingI6 =  Shd_StrucI6+ Shd_DatI6;
            var Quality_inicial6 = cyclomatic_complexityI6 + Data_CouplingI6 + ModularityI6;
            var valores_Unidad_de_CalidadI6=3;
            var EffortI6 = Quality_inicial6/valores_Unidad_de_CalidadI6;
            console.log(EffortI6);

            x=6;
            console.log(x);
            var Fan_In6 = Fan_In;
            var fanIn6 = document.getElementById("fanIn6");
            fanIn6.innerHTML = Fan_In6;
            var Fan_Out6=Fan_Out;
            var fanO6 = document.getElementById("fanO6");
            fanO6.innerHTML = Fan_Out6;
            var Num_Comp6=Num_Comp;
            var NumCo6 = document.getElementById("NumCo6");
            NumCo6.innerHTML = Num_Comp6;
            var Num_Ed6=Num_Ed;
            var NumEd6 = document.getElementById("NumEd6");
            NumEd6.innerHTML = Num_Ed6;
            var Num_Nod6=Num_Nod;
            var NumNo6 = document.getElementById("NumNo6");
            NumNo6.innerHTML = Num_Nod6;
            var Shd_Struc6=Shd_Struc;
            var ShDaStr6=document.getElementById("ShDaStr6");
            ShDaStr6.innerHTML=Shd_Struc6;
            var Shd_Pa6=Shd_Pa;
            var ShDaPa6=document.getElementById("ShDaPa6");
            ShDaPa6.innerHTML=Shd_Pa6;
            
            var cyclomatic_complexity6 = Num_Ed6 - Num_Nod6 + 2 * Num_Comp6;
            var Modularity6 = Fan_In6 + Fan_Out6;
            var Data_Coupling6 =  Shd_Struc6 + Shd_Pa6;
            var valores_Unidad_de_Calidad6=3;
            var Qdeveloper6 = cyclomatic_complexity6 + Data_Coupling6 + Modularity6;
            var Effort6 = Qdeveloper6/valores_Unidad_de_Calidad6;
            var Ef6=Effort6.toFixed(2);
            var E6 = document.getElementById("E6");
            E6.innerHTML=Ef6;
            var Tech_Debt6 = Quality_inicial6 - Qdeveloper6;
            var TD6 = document.getElementById("TD6");
            TD6.innerHTML = Tech_Debt6;
            //console.log(Tech_Debt6);
        }
    });
}

//El boton 1 va a tener los valores iniciales
function boton1(){
    mostrar();
    var Fan_In=4;
    var Fan_Out=8;
    var Num_Comp=4;
    var Num_Ed=3;
    var Num_Nod=2;
    var Shd_Struc=15;
    var Shd_Pa=10;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
}
function boton2(){
    mostrar();
    var Fan_In=6;
    var Fan_Out=9;
    var Num_Comp=2;
    var Num_Ed=11;
    var Num_Nod=20;
    var Shd_Struc=13;
    var Shd_Pa=5;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
    
}
function boton3(){
    mostrar();
    var Fan_In=6;
    var Fan_Out=9;
    var Num_Comp=2;
    var Num_Ed=11;
    var Num_Nod=20;
    var Shd_Struc=13;
    var Shd_Pa=5;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
    
}
function boton4(){
    mostrar();
    var Fan_In=6;
    var Fan_Out=9;
    var Num_Comp=2;
    var Num_Ed=11;
    var Num_Nod=20;
    var Shd_Struc=13;
    var Shd_Pa=5;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
    
}
function boton5(){
    mostrar();
    var Fan_In=6;
    var Fan_Out=9;
    var Num_Comp=2;
    var Num_Ed=11;
    var Num_Nod=20;
    var Shd_Struc=13;
    var Shd_Pa=5;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
    
}
function boton6(){
    mostrar();
    var Fan_In=6;
    var Fan_Out=9;
    var Num_Comp=2;
    var Num_Ed=11;
    var Num_Nod=20;
    var Shd_Struc=13;
    var Shd_Pa=5;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
    
}
function boton7(){
    mostrar();
    var Fan_In=6;
    var Fan_Out=9;
    var Num_Comp=2;
    var Num_Ed=11;
    var Num_Nod=20;
    var Shd_Struc=13;
    var Shd_Pa=5;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
    
}
function boton8(){
    mostrar();
    var Fan_In=6;
    var Fan_Out=9;
    var Num_Comp=2;
    var Num_Ed=11;
    var Num_Nod=20;
    var Shd_Struc=13;
    var Shd_Pa=5;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
    
}
function boton9(){
    mostrar();
    var Fan_In=6;
    var Fan_Out=9;
    var Num_Comp=2;
    var Num_Ed=11;
    var Num_Nod=20;
    var Shd_Struc=13;
    var Shd_Pa=5;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
    
}
function boton10(){
    mostrar();
    var Fan_In=6;
    var Fan_Out=9;
    var Num_Comp=2;
    var Num_Ed=11;
    var Num_Nod=20;
    var Shd_Struc=13;
    var Shd_Pa=5;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
    
}
function boton11(){
    mostrar();
    var Fan_In=6;
    var Fan_Out=9;
    var Num_Comp=2;
    var Num_Ed=11;
    var Num_Nod=20;
    var Shd_Struc=13;
    var Shd_Pa=5;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
    
}
function boton12(){
    mostrar();
    var Fan_In=6;
    var Fan_Out=9;
    var Num_Comp=2;
    var Num_Ed=11;
    var Num_Nod=20;
    var Shd_Struc=13;
    var Shd_Pa=5;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
    
}
function boton13(){
    mostrar();
    var Fan_In=6;
    var Fan_Out=9;
    var Num_Comp=2;
    var Num_Ed=11;
    var Num_Nod=20;
    var Shd_Struc=13;
    var Shd_Pa=5;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
    
}
function boton14(){
    mostrar();
    var Fan_In=6;
    var Fan_Out=9;
    var Num_Comp=2;
    var Num_Ed=11;
    var Num_Nod=20;
    var Shd_Struc=13;
    var Shd_Pa=5;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
    
}
function boton15(){
    mostrar();
    var Fan_In=6;
    var Fan_Out=9;
    var Num_Comp=2;
    var Num_Ed=11;
    var Num_Nod=20;
    var Shd_Struc=13;
    var Shd_Pa=5;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
    
}
function boton16(){
    mostrar();
    var Fan_In=6;
    var Fan_Out=9;
    var Num_Comp=2;
    var Num_Ed=11;
    var Num_Nod=20;
    var Shd_Struc=13;
    var Shd_Pa=5;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
    
}
function boton17(){
    mostrar();
    var Fan_In=6;
    var Fan_Out=9;
    var Num_Comp=2;
    var Num_Ed=11;
    var Num_Nod=20;
    var Shd_Struc=13;
    var Shd_Pa=5;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
    
}
function boton18(){
    mostrar();
    var Fan_In=6;
    var Fan_Out=9;
    var Num_Comp=2;
    var Num_Ed=11;
    var Num_Nod=20;
    var Shd_Struc=13;
    var Shd_Pa=5;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
    
}
function boton19(){
    mostrar();
    var Fan_In=6;
    var Fan_Out=9;
    var Num_Comp=2;
    var Num_Ed=11;
    var Num_Nod=20;
    var Shd_Struc=13;
    var Shd_Pa=5;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
    
}
function boton20(){
    mostrar();
    var Fan_In=6;
    var Fan_Out=9;
    var Num_Comp=2;
    var Num_Ed=11;
    var Num_Nod=20;
    var Shd_Struc=13;
    var Shd_Pa=5;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
    
}
function boton21(){
    mostrar();
    var Fan_In=6;
    var Fan_Out=9;
    var Num_Comp=2;
    var Num_Ed=11;
    var Num_Nod=20;
    var Shd_Struc=13;
    var Shd_Pa=5;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
    
}
function boton22(){
    mostrar();
    var Fan_In=6;
    var Fan_Out=9;
    var Num_Comp=2;
    var Num_Ed=11;
    var Num_Nod=20;
    var Shd_Struc=13;
    var Shd_Pa=5;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
    
}
function boton23(){
    mostrar();
    var Fan_In=6;
    var Fan_Out=9;
    var Num_Comp=2;
    var Num_Ed=11;
    var Num_Nod=20;
    var Shd_Struc=13;
    var Shd_Pa=5;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
    
}
function boton24(){
    mostrar();
    var Fan_In=6;
    var Fan_Out=9;
    var Num_Comp=2;
    var Num_Ed=11;
    var Num_Nod=20;
    var Shd_Struc=13;
    var Shd_Pa=5;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
    
}
function boton25(){
    mostrar();
    var Fan_In=6;
    var Fan_Out=9;
    var Num_Comp=2;
    var Num_Ed=11;
    var Num_Nod=20;
    var Shd_Struc=13;
    var Shd_Pa=5;
    calculo(Fan_In,Fan_Out,Num_Comp,Num_Ed,Num_Nod,Shd_Struc,Shd_Pa); 
    
}
    