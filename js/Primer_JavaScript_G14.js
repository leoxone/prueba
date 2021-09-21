alert("Primer javascript pero en el .js");

var nombre="Pepito Perez";
var edad=15;
var peso=74.5;
var masculino=true;
var materias;

alert("nombre "+nombre);
alert("peso "+peso);
alert("materias "+materias);


var nombre1="María García";
/*alert("nombre originalmente "+nombre);
alert("nombre a mayusculas "+nombre.toUpperCase());
alert("nombre a minusculas "+nombre.toLowerCase());
alert("letra en posicion 8 "+nombre.charAt(8));*/
//alert("letra i que posicion esta "+nombre.indexOf(" "));
//var espacio_nombre = nombre.indexOf(" ");
/*alert("espacio esta en posicion "+nombre.indexOf(" "));
alert("espacio_nombre "+espacio_nombre);
alert("substring "+nombre.substring(0, 6));*/
/*alert("apellido "+nombre.substring(espacio_nombre));

alert("nombre "+nombre.substring(0, espacio_nombre));*/

var elementos_tipo_parrafo = document.getElementsByTagName("p");
//alert("mostrar etiqueta 0 "+elementos_tipo_parrafo[7].innerHTML);

var parrafo1 = document.getElementById("parrafo_pruebas1");
parrafo1.innerHTML ="cambiar parrafo";



var numero1 = prompt("Ingresar número 1");
var numero2 = prompt("Ingresar número 2");
var resultado = parseInt(numero1) + parseInt(numero2);
alert("El resultado de la suma es "+resultado);


document.write("<h6>El resultado de la suma es "+ resultado +"</h6>");
document.write("<h1>Ejemplo Arreglos</h1>");
document.write("<br />");

var materias = ["Inglés", "francés", "matemáticas", 77458, false];
document.write(materias.join("<br />"));
document.write("<br />");
document.write("<br />");

materias[materias.length]= "Física";

document.write("<br />");
document.write("La materia en la posición 6 es "+materias[5]);
document.write("<br />");
document.write("pop borra del arreglo la ultima");
materias.pop();
document.write("<br />");
document.write("La materia en la posición 6 es "+materias[5]);
document.write("<br />");document.write("<br />");document.write("<br />");

document.write("<h1>Ciclo</h1>");


for(i=1; i<=10; i+=3)
{
    document.write("<br /> La i va en el valor de "+i);
}

document.write("<h1>while</h1>");
var j=4;
while(j<=10)
{
    document.write("<br /> La j va en el valor de "+j);
    j++;   
}

document.write("<h1>do - while </h1>")
do{
    document.write("<br />La k va en el valor de "+k);
    k++;
}while(k<10);

document.write("<br />");
document.write("<br />");
document.write("<br />");document.write("<br />");

function sumar(){
    alert("Ingreso a función");
    var numero_1_formulario = document.getElementById("numero1").value;
    var numero_2_formulario = document.getElementById("numero2").value;
    var sumatoria = parseInt(numero_1_formulario) + parseInt(numero_2_formulario);
    alert("sumatoria "+sumatoria);
}

function sumar1(numero_1, numero_2){
    var sumatoria = parseInt(numero_1) + parseInt(numero_2);
    return sumatoria;
}

var sumatoria_global = sumar1(54, 98);
alert("sumatoria_global"+sumatoria_global);

alert("resultado_resta")

operaciones_matematicas();

//Funciones Globales
function operaciones_matematicas(){
    suma1();
    resta();
    multiplicacion();

    var boton_sumar = document.getElementById("boton_sumar");
    var numero_1_formulario = document.getElementById("numero1").value;
    var numero_2_formulario = document.getElementById("numero2").value;
    var formulario = document.getElementById("formulario-suma");
    var datos_ingresados_correctamente=  true; 
    if(formulario.numero1.value=="")
    {
        formulario.numero1.setAttribute("class", "form-control is-invalid");
        var parrafo_numero1 = document.getElementById("parrafo_validar_numero1");
        parrafo_numero1.innerHTML ="Error - Debe ingresar numero 1";
        parrafo_numero1.setAttribute("class", "text-danger");
        datos_ingresados_correctamente = false;

    }
    else
    {
        formulario.numero1.setAttribute("class", "form-control is-valid");
        var parrafo_numero1 = document.getElementById("parrafo_validar_numero1");
        parrafo_numero1.innerHTML ="Numero 1 se ingreso correctamente";
        parrafo_numero1.setAttribute("class", "text-success");

    }

    if(formulario.numero2.value=="")
    {
        
        formulario.numero2.setAttribute("class", "form-control is-invalid");
        var parrafo_numero2 = document.getElementById("parrafo_validar_numero2");
        parrafo_numero2.innerHTML ="Error - Debe ingresar numero 2";
        parrafo_numero2.setAttribute("class", "text-danger");
        datos_ingresados_correctamente= false;
    }
    else
    {
        formulario.numero2.setAttribute("class", "form-control is-valid");
        var parrafo_numero2 = document.getElementById("parrafo_validar_numero2");
        parrafo_numero2.innerHTML ="Numero 2 se ingreso correctamente";
        parrafo_numero2.setAttribute("class", "text-success");
    }
    if(datos_ingresados_correctamente== true){
        suma1();
        resta();
        multiplicacion();
        boton_sumar.setAttribute("class", "btn btn-success");

        
    }

    //Funciones locales
    sumar1();
    function suma1()
    {
        var sumatoria = parseInt(numero_1_formulario) + parseInt(numero_2_formulario);
        var div_suma = document.getElementById("resultado_suma");
        div_suma.innerHTML ="el resultado de la Suma es "+sumatoria;
    }
    function resta()
    {
        var sumatoria = parseInt(numero_1_formulario) - parseInt(numero_2_formulario);
        var div_resta = document.getElementById("resultado_resta");
        div_resta.innerHTML ="el resultado de la Suma es "+sumatoria;
    }
    function multiplicacion()
    {
        var sumatoria = parseInt(numero_1_formulario) * parseInt(numero_2_formulario);
        var div_multiplicacion = document.getElementById("resultado_multiplicacion");
        div_multiplicacion.innerHTML ="el resultado de la multiplicacion es "+sumatoria;
    }
}

var etiqueta_nueva = document.createElement("h1");
var contenido = document.createTextNode("Título Dinámico");
etiqueta_nueva.appendChild(contenido_titulo_nuevo);
document.getElementById("caja_dinámica").appendChild(etiqueta_nueva);