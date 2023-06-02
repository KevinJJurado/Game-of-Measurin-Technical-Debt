
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
        title:'Enter the new parameters and Indicate which developer is refactoring',
        text:'Change at least one of these parameters',
        icon:'success',
    });
    // swal({
    //     title:'Indicate which developer is refactoring',
    //     text:'Go to your keyboard and press, a for developer iteration 1, b for developer turn 2, c for developer turn 3, d for developer turn 4, e for developer turn 5, f for developer developer turn 6, JUST PRESS ONCE.',
    //     icon:'success',
    // });
}// Esta funcion me muestra un cuadro de alerta para seleccionar el turno del jugador y para que el valor en la tabla vaya cambiando.
    
var cambiosRealizados = false;
function boton(){
    mostrar();
    var tabla = document.getElementById('tabla');
    var inputs = tabla.querySelectorAll("input");
    inputs.forEach(function(input) {
        input.addEventListener("input", function() {
            cambiosRealizados = true;
        });
    });
    
    
    //Initial data of Module
    var Fan_OutI=3;
    var Fan_InI=8;
    var Num_CoI=8;
    var Num_EdI=3;
    var Num_NodI=6;
    var cyclomatic_complexityMI = Num_EdI - Num_NodI + 2 * Num_CoI;

    //Initial Data of Path
    var Shd_StrucI=8;
    var Shd_DatI=3;
    var Num_CoPI=5;
    var Num_EdPI=7;
    var Num_NodPI=7;
    var cyclomatic_complexityPI = Num_EdPI- Num_NodPI + 2 * Num_CoPI;

    // Calculos de datos iniciales
    var cyclomatic_complexityI = cyclomatic_complexityMI + cyclomatic_complexityPI;
    var ModularityI = Fan_InI+Fan_OutI;
    var Data_CouplingI =  Shd_StrucI+ Shd_DatI;
    var Quality_inicial = cyclomatic_complexityI + Data_CouplingI + ModularityI;
    var valores_Unidad_de_CalidadI=3;
    var EffortI = Quality_inicial/valores_Unidad_de_CalidadI;
    //console.log(Quality_inicial);

    var valores_Unidad_de_Calidad=5;

    document.addEventListener("keydown",function(e){
        switch(e.key){
            case "a": //en este if se selecciona el turno del jugador 1 y cambian sus valores
                if(cambiosRealizados){
                    swal({
                        title: "¡You selected Developer a!"
                    })

                    //MODULE            
                    var Fan_In1 = parseInt(document.getElementById("fanIn1").value);
                    var fanIn1 = document.getElementById("fanIn1");
                    fanIn1.innerHTML = Fan_In1;
                    var Fan_Out1=parseInt(document.getElementById("fanO1").value);
                    var fanO1 = document.getElementById("fanO1");
                    fanO1.innerHTML = Fan_Out1;
                    var Num_Comp1=parseInt(document.getElementById("NumCo1").value);
                    var NumCo1 = document.getElementById("NumCo1");
                    NumCo1.innerHTML = Num_Comp1;
                    var Num_Ed1=parseInt(document.getElementById("NumEd1").value);
                    var NumEd1 = document.getElementById("NumEd1");
                    NumEd1.innerHTML = Num_Ed1;
                    var Num_Nod1=parseInt(document.getElementById("NumNo1").value);
                    var NumNo1 = document.getElementById("NumNo1");
                    NumNo1.innerHTML = Num_Nod1;
                    var cyclomatic_complexityM = Num_Ed1 - Num_Nod1 + 2 * Num_Comp1;

                    //PATH
                    var Shd_Struc1=parseInt(document.getElementById("ShDaStr1").value);
                    var ShDaStr1 =document.getElementById("ShDaStr1");
                    ShDaStr1.innerHTML=Shd_Struc1;
                    var Shd_Pa1=parseInt(document.getElementById("ShDaPa1").value);
                    var ShDaPa1 =document.getElementById("ShDaPa1");
                    ShDaPa1.innerHTML=Shd_Pa1;
                    var Num_CompP1=parseInt(document.getElementById("NumCoP1").value);
                    var NumCoP1 = document.getElementById("NumCoP1");
                    NumCoP1.innerHTML = Num_CompP1;
                    var Num_EdP1=parseInt(document.getElementById("NumEdP1").value);
                    var NumEdP1 = document.getElementById("NumEdP1");
                    NumEdP1.innerHTML = Num_EdP1;
                    var Num_NodP1=parseInt(document.getElementById("NumNoP1").value);
                    var NumNoP1 = document.getElementById("NumNoP1");
                    NumNoP1.innerHTML = Num_NodP1;
                    var cyclomatic_complexityP = Num_EdP1 - Num_NodP1 + 2 * Num_CompP1;

                    var cyclomatic_complexity = cyclomatic_complexityM + cyclomatic_complexityP;
                    var Modularity = Fan_In1 + Fan_Out1;
                    var Data_Coupling =  Shd_Struc1 + Shd_Pa1;
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
                else{
                    swal({
                        title:'Enter the new parameters',
                        text:'Change at least one of these parameters.',
                        icon:'error',
                    });
                }
                break;

            case "b":
                if(cambiosRealizados){
                    swal({
                        title: "¡You selected Developer b!"
                    })

                    //MODULE            
                    var Fan_In2 = parseInt(document.getElementById("fanIn2").value);
                    var fanIn2 = document.getElementById("fanIn2");
                    fanIn2.innerHTML = Fan_In2;
                    var Fan_Out2=parseInt(document.getElementById("fanO2").value);
                    var fanO2 = document.getElementById("fanO2");
                    fanO2.innerHTML = Fan_Out2;
                    var Num_Comp2=parseInt(document.getElementById("NumCo2").value);
                    var NumCo2 = document.getElementById("NumCo2");
                    NumCo2.innerHTML = Num_Comp2;
                    var Num_Ed2=parseInt(document.getElementById("NumEd2").value);
                    var NumEd2 = document.getElementById("NumEd2");
                    NumEd2.innerHTML = Num_Ed2;
                    var Num_Nod2=parseInt(document.getElementById("NumNo2").value);
                    var NumNo2 = document.getElementById("NumNo2");
                    NumNo2.innerHTML = Num_Nod2;
                    var cyclomatic_complexityM2 = Num_Ed1 - Num_Nod1 + 2 * Num_Comp1;

                    //PATH
                    var Shd_Struc2=parseInt(document.getElementById("ShDaStr2").value);
                    var ShDaStr2 =document.getElementById("ShDaStr2");
                    ShDaStr2.innerHTML=Shd_Struc2;
                    var Shd_Pa2=parseInt(document.getElementById("ShDaPa2").value);
                    var ShDaPa2 =document.getElementById("ShDaPa2");
                    ShDaPa2.innerHTML=Shd_Pa2;
                    var Num_CompP2=parseInt(document.getElementById("NumCoP2").value);
                    var NumCoP2 = document.getElementById("NumCoP2");
                    NumCoP2.innerHTML = Num_CompP2;
                    var Num_EdP2=parseInt(document.getElementById("NumEdP2").value);
                    var NumEdP2 = document.getElementById("NumEdP2");
                    NumEdP2.innerHTML = Num_EdP2;
                    var Num_NodP2=parseInt(document.getElementById("NumNoP2").value);
                    var NumNoP2 = document.getElementById("NumNoP2");
                    NumNoP2.innerHTML = Num_NodP2;
                    var cyclomatic_complexityP2 = Num_EdP2 - Num_NodP2 + 2 * Num_CompP2;

                    var cyclomatic_complexity2 = cyclomatic_complexityM2 + cyclomatic_complexityP2;
                    var Modularity2 = Fan_In2 + Fan_Out2;
                    var Data_Coupling2 =  Shd_Struc2 + Shd_Pa2;
                    var Qdeveloper2 = cyclomatic_complexity2 + Data_Coupling2 + Modularity2;
                    var Effort2 = Qdeveloper2/valores_Unidad_de_Calidad;
                    var Ef2=Effort2.toFixed(2);
                    var E2 = document.getElementById("E2");
                    E2.innerHTML=Ef2;
                    var Tech_Debt2 = Quality_inicial - Qdeveloper2;
                    var TD2 = document.getElementById("TD2");
                    TD2.innerHTML = Tech_Debt2;
                    //console.log(Tech_Debt);
                }
                else{
                    swal({
                        title:'Enter the new parameters',
                        text:'Change at least one of these parameters.',
                        icon:'error',
                    });
                }
                break;
            case "c":
                if(cambiosRealizados){
                    swal({
                        title: "¡You selected Developer c!"
                    })
                    //MODULE            
                    var Fan_In3 = parseInt(document.getElementById("fanIn3").value);
                    var fanIn3 = document.getElementById("fanIn3");
                    fanIn3.innerHTML = Fan_In3;
                    var Fan_Out3=parseInt(document.getElementById("fanO3").value);
                    var fanO3 = document.getElementById("fanO3");
                    fanO3.innerHTML = Fan_Out3;
                    var Num_Comp3=parseInt(document.getElementById("NumCo3").value);
                    var NumCo3 = document.getElementById("NumCo3");
                    NumCo3.innerHTML = Num_Comp3;
                    var Num_Ed3=parseInt(document.getElementById("NumEd3").value);
                    var NumEd3 = document.getElementById("NumEd3");
                    NumEd3.innerHTML = Num_Ed3;
                    var Num_Nod3=parseInt(document.getElementById("NumNo3").value);
                    var NumNo3 = document.getElementById("NumNo3");
                    NumNo3.innerHTML = Num_Nod3;
                    var cyclomatic_complexityM3 = Num_Ed3 - Num_Nod3 + 2 * Num_Comp3;

                    //PATH
                    var Shd_Struc3=parseInt(document.getElementById("ShDaStr3").value);
                    var ShDaStr3 =document.getElementById("ShDaStr3");
                    ShDaStr3.innerHTML=Shd_Struc3;
                    var Shd_Pa3=parseInt(document.getElementById("ShDaPa3").value);
                    var ShDaPa3 =document.getElementById("ShDaPa3");
                    ShDaPa3.innerHTML=Shd_Pa3;
                    var Num_CompP3=parseInt(document.getElementById("NumCoP3").value);
                    var NumCoP3 = document.getElementById("NumCoP3");
                    NumCoP3.innerHTML = Num_CompP3;
                    var Num_EdP3=parseInt(document.getElementById("NumEdP3").value);
                    var NumEdP3 = document.getElementById("NumEdP3");
                    NumEdP3.innerHTML = Num_EdP3;
                    var Num_NodP3=parseInt(document.getElementById("NumNoP3").value);
                    var NumNoP3 = document.getElementById("NumNoP3");
                    NumNoP3.innerHTML = Num_NodP3;
                    var cyclomatic_complexityP3 = Num_EdP3 - Num_NodP3 + 2 * Num_CompP3;

                    var cyclomatic_complexity3 = cyclomatic_complexityM3 + cyclomatic_complexityP3;
                    var Modularity3 = Fan_In3 + Fan_Out3;
                    var Data_Coupling3 =  Shd_Struc3 + Shd_Pa3;
                    var Qdeveloper3 = cyclomatic_complexity3 + Data_Coupling3 + Modularity3;
                    var Effort3 = Qdeveloper3/valores_Unidad_de_Calidad;
                    var Ef3=Effort3.toFixed(2);
                    var E3 = document.getElementById("E3");
                    E3.innerHTML=Ef3;
                    var Tech_Debt3 = Quality_inicial - Qdeveloper3;
                    var TD3 = document.getElementById("TD3");
                    TD3.innerHTML = Tech_Debt3;
                    //console.log(Tech_Debt);
                }
                else{
                    swal({
                        title:'Enter the new parameters',
                        text:'Change at least one of these parameters.',
                        icon:'error',
                    });
                }
                break;
            case "d":
                if(cambiosRealizados){
                    swal({
                        title: "¡You selected Developer d!"
                    })
                    //MODULE            
                    var Fan_In4 = parseInt(document.getElementById("fanIn4").value);
                    var fanIn4 = document.getElementById("fanIn4");
                    fanIn4.innerHTML = Fan_In4;
                    var Fan_Out4=parseInt(document.getElementById("fanO4").value);
                    var fanO4 = document.getElementById("fanO4");
                    fanO4.innerHTML = Fan_Out4;
                    var Num_Comp4=parseInt(document.getElementById("NumCo4").value);
                    var NumCo4 = document.getElementById("NumCo4");
                    NumCo4.innerHTML = Num_Comp4;
                    var Num_Ed4=parseInt(document.getElementById("NumEd4").value);
                    var NumEd4 = document.getElementById("NumEd4");
                    NumEd4.innerHTML = Num_Ed4;
                    var Num_Nod4=parseInt(document.getElementById("NumNo4").value);
                    var NumNo4 = document.getElementById("NumNo4");
                    NumNo4.innerHTML = Num_Nod4;
                    var cyclomatic_complexityM4 = Num_Ed4 - Num_Nod4 + 2 * Num_Comp4;

                    //PATH
                    var Shd_Struc4=parseInt(document.getElementById("ShDaStr4").value);
                    var ShDaStr4 =document.getElementById("ShDaStr4");
                    ShDaStr4.innerHTML=Shd_Struc4;
                    var Shd_Pa4=parseInt(document.getElementById("ShDaPa4").value);
                    var ShDaPa4 =document.getElementById("ShDaPa4");
                    ShDaPa4.innerHTML=Shd_Pa4;
                    var Num_CompP4=parseInt(document.getElementById("NumCoP4").value);
                    var NumCoP4 = document.getElementById("NumCoP4");
                    NumCoP4.innerHTML = Num_CompP4;
                    var Num_EdP4=parseInt(document.getElementById("NumEdP4").value);
                    var NumEdP4 = document.getElementById("NumEdP4");
                    NumEdP4.innerHTML = Num_EdP4;
                    var Num_NodP4=parseInt(document.getElementById("NumNoP4").value);
                    var NumNoP4 = document.getElementById("NumNoP4");
                    NumNoP4.innerHTML = Num_NodP4;
                    var cyclomatic_complexityP4 = Num_EdP4 - Num_NodP4 + 2 * Num_CompP4;

                    var cyclomatic_complexity4 = cyclomatic_complexityM4 + cyclomatic_complexityP4;
                    var Modularity4 = Fan_In4 + Fan_Out4;
                    var Data_Coupling4 =  Shd_Struc4 + Shd_Pa4;
                    var Qdeveloper4 = cyclomatic_complexity4 + Data_Coupling4 + Modularity4;
                    var Effort4 = Qdeveloper4/valores_Unidad_de_Calidad;
                    var Ef4=Effort4.toFixed(2);
                    var E4 = document.getElementById("E4");
                    E4.innerHTML=Ef4;
                    var Tech_Debt4 = Quality_inicial - Qdeveloper4;
                    var TD4 = document.getElementById("TD4");
                    TD4.innerHTML = Tech_Debt4;
                    //console.log(Tech_Debt);
                }
                else{
                    swal({
                        title:'Enter the new parameters',
                        text:'Change at least one of these parameters.',
                        icon:'error',
                    });
                }
                break;
            case "e":
                if(cambiosRealizados){
                    swal({
                        title: "¡You selected Developer e!"
                    })
                    //MODULE            
                    var Fan_In5 = parseInt(document.getElementById("fanIn5").value);
                    var fanIn5 = document.getElementById("fanIn5");
                    fanIn5.innerHTML = Fan_In5;
                    var Fan_Out5=parseInt(document.getElementById("fanO5").value);
                    var fanO5 = document.getElementById("fanO5");
                    fanO5.innerHTML = Fan_Out5;
                    var Num_Comp5=parseInt(document.getElementById("NumCo5").value);
                    var NumCo5 = document.getElementById("NumCo5");
                    NumCo5.innerHTML = Num_Comp5;
                    var Num_Ed5=parseInt(document.getElementById("NumEd5").value);
                    var NumEd5 = document.getElementById("NumEd5");
                    NumEd5.innerHTML = Num_Ed5;
                    var Num_Nod5=parseInt(document.getElementById("NumNo5").value);
                    var NumNo5 = document.getElementById("NumNo5");
                    NumNo5.innerHTML = Num_Nod5;
                    var cyclomatic_complexityM5 = Num_Ed5 - Num_Nod5 + 2 * Num_Comp5;

                    //PATH
                    var Shd_Struc5=parseInt(document.getElementById("ShDaStr5").value);
                    var ShDaStr5 =document.getElementById("ShDaStr5");
                    ShDaStr5.innerHTML=Shd_Struc5;
                    var Shd_Pa5=parseInt(document.getElementById("ShDaPa5").value);
                    var ShDaPa5 =document.getElementById("ShDaPa5");
                    ShDaPa5.innerHTML=Shd_Pa5;
                    var Num_CompP5=parseInt(document.getElementById("NumCoP5").value);
                    var NumCoP5 = document.getElementById("NumCoP5");
                    NumCoP5.innerHTML = Num_CompP5;
                    var Num_EdP5=parseInt(document.getElementById("NumEdP5").value);
                    var NumEdP5 = document.getElementById("NumEdP5");
                    NumEdP5.innerHTML = Num_EdP5;
                    var Num_NodP5=parseInt(document.getElementById("NumNoP5").value);
                    var NumNoP5 = document.getElementById("NumNoP5");
                    NumNoP5.innerHTML = Num_NodP5;
                    var cyclomatic_complexityP5 = Num_EdP5 - Num_NodP5 + 2 * Num_CompP5;

                    var cyclomatic_complexity5 = cyclomatic_complexityM5 + cyclomatic_complexityP5;
                    var Modularity5 = Fan_In5 + Fan_Out5;
                    var Data_Coupling5 =  Shd_Struc5 + Shd_Pa5;
                    var Qdeveloper5 = cyclomatic_complexity5 + Data_Coupling5 + Modularity5;
                    var Effort5 = Qdeveloper5/valores_Unidad_de_Calidad;
                    var Ef5=Effort5.toFixed(2);
                    var E5 = document.getElementById("E5");
                    E5.innerHTML=Ef5;
                    var Tech_Debt5 = Quality_inicial - Qdeveloper5;
                    var TD5 = document.getElementById("TD5");
                    TD5.innerHTML = Tech_Debt5;
                    //console.log(Tech_Debt);
                }
                else{
                    swal({
                        title:'Enter the new parameters',
                        text:'Change at least one of these parameters.',
                        icon:'error',
                    });
                }
                break;
            case "f":
                if(cambiosRealizados){
                    swal({
                        title: "¡You selected Developer f!"
                    })
                    //MODULE            
                    var Fan_In6 = parseInt(document.getElementById("fanIn6").value);
                    var fanIn6 = document.getElementById("fanIn6");
                    fanIn6.innerHTML = Fan_In6;
                    var Fan_Out6=parseInt(document.getElementById("fanO6").value);
                    var fanO6 = document.getElementById("fanO6");
                    fanO6.innerHTML = Fan_Out6;
                    var Num_Comp6=parseInt(document.getElementById("NumCo6").value);
                    var NumCo6 = document.getElementById("NumCo6");
                    NumCo6.innerHTML = Num_Comp6;
                    var Num_Ed6=parseInt(document.getElementById("NumEd6").value);
                    var NumEd6 = document.getElementById("NumEd6");
                    NumEd6.innerHTML = Num_Ed6;
                    var Num_Nod6=parseInt(document.getElementById("NumNo6").value);
                    var NumNo6 = document.getElementById("NumNo6");
                    NumNo6.innerHTML = Num_Nod6;
                    var cyclomatic_complexityM6 = Num_Ed6 - Num_Nod6 + 2 * Num_Comp6;

                    //PATH
                    var Shd_Struc6=parseInt(document.getElementById("ShDaStr6").value);
                    var ShDaStr6 =document.getElementById("ShDaStr6");
                    ShDaStr6.innerHTML=Shd_Struc6;
                    var Shd_Pa6=parseInt(document.getElementById("ShDaPa6").value);
                    var ShDaPa6 =document.getElementById("ShDaPa6");
                    ShDaPa6.innerHTML=Shd_Pa6;
                    var Num_CompP6=parseInt(document.getElementById("NumCoP6").value);
                    var NumCoP6 = document.getElementById("NumCoP6");
                    NumCoP6.innerHTML = Num_CompP6;
                    var Num_EdP6=parseInt(document.getElementById("NumEdP6").value);
                    var NumEdP6 = document.getElementById("NumEdP6");
                    NumEdP6.innerHTML = Num_EdP6;
                    var Num_NodP6=parseInt(document.getElementById("NumNoP6").value);
                    var NumNoP6 = document.getElementById("NumNoP6");
                    NumNoP6.innerHTML = Num_NodP6;
                    var cyclomatic_complexityP6 = Num_EdP6 - Num_NodP6 + 2 * Num_CompP6;

                    var cyclomatic_complexity6 = cyclomatic_complexityM6 + cyclomatic_complexityP6;
                    var Modularity6 = Fan_In6 + Fan_Out6;
                    var Data_Coupling6 =  Shd_Struc6 + Shd_Pa6;
                    var Qdeveloper6 = cyclomatic_complexity6 + Data_Coupling6 + Modularity6;
                    var Effort6 = Qdeveloper6/valores_Unidad_de_Calidad;
                    var Ef6=Effort3.toFixed(2);
                    var E6 = document.getElementById("E6");
                    E6.innerHTML=Ef6;
                    var Tech_Debt6 = Quality_inicial - Qdeveloper6;
                    var TD6 = document.getElementById("TD6");
                    TD6.innerHTML = Tech_Debt6;
                    //console.log(Tech_Debt);
                }
                else{
                    swal({
                        title:'Enter the new parameters',
                        text:'Change at least one of these parameters.',
                        icon:'error',
                    });
                }
                break;
        }
    });
    
}

