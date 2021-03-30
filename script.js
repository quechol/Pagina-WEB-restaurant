var nombreC;
var direccionC;
var telefonoC;
var totalC = 0;
var subpedido ="";
var p0=0,p1=0,p2=0,p3=0,p4=0,p5=0,p6=0,p7=0,p8=0,p9=0,p10=0,p11=0,p12=0,p13=0,p14=0,p15=0,p16=0,p17=0,p18=0,p19=0,p20=0,p21=0,p22=0,p23=0,p24=0,p25=0,p26=0,p27=0,p28=0,p29=0,p30=0,p31=0,p32=0;
var subcompra = [];
var practica = [];
var pedidos=[];
/*VARIABLES DE PRECIOS*/
var prectio0 = 132; /*Ensaladas*/
var prectio1 = 114;
var prectio2 = 120;
var prectio3 = 180;
var prectio4 = 162;
var prectio5 = 108; /*Entrepanes*/
var prectio6 = 108;
var prectio7 = 150;
var prectio8 = 168; /*Pastas*/
var prectio9 = 114;
var prectio10 = 114;
var prectio11 = 114;
var prectio12 = 90; /*Sopas*/
var prectio13 = 102;
var prectio14 = 90;
var prectio15 = 90;
var prectio16 = 162; /*Hamburguesas*/
var prectio17 = 162;
var prectio18 = 186;
var prectio19 = 198; /*Pizzas*/
var prectio20 = 171;
var prectio21 = 162;
var prectio22 = 180;
var prectio23 = 288;
var prectio24 = 216;
var prectio25 = 66; /*Postres*/
var prectio26 = 84;
var prectio27 = 102;
var prectio28 = 84;
var prectio29 = 49; /*Bebidas*/
var prectio30 = 83;
var prectio31 = 88;
var prectio32 = 50;


/*TAGS DE PRECIO*/
document.getElementById("precio0").innerHTML = "$ "+prectio0;
document.getElementById("precio1").innerHTML = "$ "+prectio1;
document.getElementById("precio2").innerHTML = "$ "+prectio2;
document.getElementById("precio3").innerHTML = "$ "+prectio3;
document.getElementById("precio4").innerHTML = "$ "+prectio4;
document.getElementById("precio5").innerHTML = "$ "+prectio5;
document.getElementById("precio6").innerHTML = "$ "+prectio6;
document.getElementById("precio7").innerHTML = "$ "+prectio7;
document.getElementById("precio8").innerHTML = "$ "+prectio8;
document.getElementById("precio9").innerHTML = "$ "+prectio9;
document.getElementById("precio10").innerHTML = "$ "+prectio10;
document.getElementById("precio11").innerHTML = "$ "+prectio11;
document.getElementById("precio12").innerHTML = "$ "+prectio12;
document.getElementById("precio13").innerHTML = "$ "+prectio13;
document.getElementById("precio14").innerHTML = "$ "+prectio14;
document.getElementById("precio15").innerHTML = "$ "+prectio15;
document.getElementById("precio16").innerHTML = "$ "+prectio16;
document.getElementById("precio17").innerHTML = "$ "+prectio17;
document.getElementById("precio18").innerHTML = "$ "+prectio18;
document.getElementById("precio19").innerHTML = "$ "+prectio19;
document.getElementById("precio20").innerHTML = "$ "+prectio20;
document.getElementById("precio21").innerHTML = "$ "+prectio21;
document.getElementById("precio22").innerHTML = "$ "+prectio22;
document.getElementById("precio23").innerHTML = "$ "+prectio23;
document.getElementById("precio24").innerHTML = "$ "+prectio24;
document.getElementById("precio25").innerHTML = "$ "+prectio25;
document.getElementById("precio26").innerHTML = "$ "+prectio26;
document.getElementById("precio27").innerHTML = "$ "+prectio27;
document.getElementById("precio28").innerHTML = "$ "+prectio28;
document.getElementById("precio29").innerHTML = "$ "+prectio29;
document.getElementById("precio30").innerHTML = "$ "+prectio30;
document.getElementById("precio31").innerHTML = "$ "+prectio31;
document.getElementById("precio32").innerHTML = "$ "+prectio32;
/*CONFIRMAR PEDIDO*/
function confirmar(){
    nombreC = document.getElementById("nombre").value;
    direccionC = document.getElementById("direccion").value;
    telefonoC = document.getElementById("telefono").value;
    totalC = document.getElementById("totalAPagar").value;
    var fin =guardapedido(storedpractica,nombreC, direccionC, telefonoC);
    /*Muestra*/
    muestraPedidos();
    alert(fin);
    return false;
}


/******************* MENU *******************/
/*ENSALADAS*/
function agregaMenu(){
    var n;
    n = document.getElementById("en1").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Ensalada 1: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p0 = n;
      muestra();
    }
    return false;
  }

  function agregaMenu2(){
    var n;
    n = document.getElementById("en2").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Ensalada 2: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p1 = n;
      muestra();
    }
    return false;
  }
  function agregaMenu3(){
    var n;
    n = document.getElementById("en3").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Ensalada 3: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p2 = n;
      muestra();
    }
    return false;
  }

  function agregaMenu4(){
    var n;
    n = document.getElementById("en4").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Ensalada 4: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p3 = n;
      muestra();
    }
    return false;
  }
  function agregaMenu5(){
    var n;
    n = document.getElementById("en5").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Ensalada 5: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p4 = n;
      muestra();
    }
    return false;
  }

  /*ENTREPANES*/
  function agregaMenu6(){
    var n;
    n = document.getElementById("en6").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Enstrepan 1: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p5 = n;
      muestra();
    }
    return false;
  }
  
  function agregaMenu7(){
    var n;
    n = document.getElementById("en7").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Enstrepan 2: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p6 = n;
      muestra();
    }
    return false;
  }
  
  function agregaMenu8(){
    var n;
    n = document.getElementById("en8").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Enstrepan 3: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p7 = n;
      muestra();
    }
    return false;
  }

  /*PASTAS*/
  function agregaMenu9(){
    var n;
    n = document.getElementById("en9").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Pastas 1: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p8 = n;
      muestra();
    }
    return false;
  }

  function agregaMenu10(){
    var n;
    n = document.getElementById("en10").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Pastas 2: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p9 = n;
      muestra();
    }
    return false;
  }

  function agregaMenu11(){
    var n;
    n = document.getElementById("en11").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Pastas 3: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p10 = n;
      muestra();
    }
    return false;
  }

  function agregaMenu12(){
    var n;
    n = document.getElementById("en12").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Pastas 4: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p11 = n;
      muestra();
    }
    return false;
  }

  /*SOPAS*/
  function agregaMenu13(){
    var n;
    n = document.getElementById("en13").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Sopas 1: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p12 = n;
      muestra();
    }
    return false;
  }

  function agregaMenu14(){
    var n;
    n = document.getElementById("en14").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Sopas 2: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p13 = n;
      muestra();
    }
    return false;
  }

  function agregaMenu15(){
    var n;
    n = document.getElementById("en15").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Sopas 3: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p14 = n;
      muestra();
    }
    return false;
  }

  function agregaMenu16(){
    var n;
    n = document.getElementById("en16").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Sopas 4: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p15 = n;
      muestra();
    }
    return false;
  }

  /*HAMBURGUESAS*/
  function agregaMenu17(){
    var n;
    n = document.getElementById("en17").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Hamburguesas 1: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p16 = n;
      muestra();
    }
    return false;
  }

  function agregaMenu18(){
    var n;
    n = document.getElementById("en18").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Hamburguesas 2: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p17 = n;
      muestra();
    }
    return false;
  }

  function agregaMenu19(){
    var n;
    n = document.getElementById("en19").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Hamburguesas 3: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p18 = n;
      muestra();
    }
    return false;
  }

  /*PIZZAS*/
  function agregaMenu20(){
    var n;
    n = document.getElementById("en20").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Pizzas 1: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p19 = n;
      muestra();
    }
    return false;
  }

  function agregaMenu21(){
    var n;
    n = document.getElementById("en21").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Pizzas 2: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p20 = n;
      muestra();
    }
    return false;
  }

  function agregaMenu22(){
    var n;
    n = document.getElementById("en22").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Pizzas 3: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p21 = n;
      muestra();
    }
    return false;
  }

  function agregaMenu23(){
    var n;
    n = document.getElementById("en23").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Pizzas 4: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p22 = n;
      muestra();
    }
    return false;
  }

  function agregaMenu24(){
    var n;
    n = document.getElementById("en24").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Pizzas 5: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p23 = n;
      muestra();
    }
    return false;
  }

  function agregaMenu25(){
    var n;
    n = document.getElementById("en25").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Pizzas 6: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p24 = n;
      muestra();
    }
    return false;
  }

  /*POSTRES*/
  function agregaMenu26(){
    var n;
    n = document.getElementById("en26").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Postres 1: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p25 = n;
      muestra();
    }
    return false;
  }

  function agregaMenu27(){
    var n;
    n = document.getElementById("en27").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Postres 2: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p26 = n;
      muestra();
    }
    return false;
  }

  function agregaMenu28(){
    var n;
    n = document.getElementById("en28").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Postres 3: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p27 = n;
      muestra();
    }
    return false;
  }

  function agregaMenu29(){
    var n;
    n = document.getElementById("en29").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Postres 4: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p28 = n;
      muestra();
    }
    return false;
  }

  /*BEBIDAS*/
  function agregaMenu30(){
    var n;
    n = document.getElementById("en30").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Bebidas 1: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p29 = n;
      muestra();
    }
    return false;
  }

  function agregaMenu31(){
    var n;
    n = document.getElementById("en31").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Bebidas 2: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p30 = n;
      muestra();
    }
    return false;
  }

  function agregaMenu32(){
    var n;
    n = document.getElementById("en32").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Bebidas 3: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = txt;
      p31 = n;
      muestra();
    }
    return false;
  }

  function agregaMenu33(){
    var n;
    n = document.getElementById("en33").value;
    if (n<0) {
      //txt = "Value too small";
      alert("Cantidad incorrecta");
    } else {
      //txt = "Input OK";
      var txt = "Bebidas 4: " + n;
      alert("Articulos agregados: "+n);
      //document.getElementById("muestraCarrito").innerHTML = muestra();
      p32 = n;
      muestra();
    }
    return false;
  }
/*AGREGA O QUITA AL CARRITO DE COMPRAS PARA MOSTRAR*/
function muestra(){
    if(p0>0){
        subpedido ="Ensalada de la casa:  \n"  + p0;
        document.getElementById("es1").innerHTML = subpedido;
    }else if(p0==0){
        document.getElementById("es1").innerHTML ="";
    }
    if(p1>0){
        subpedido ="Ensalada fresa melocotón: \n"  + p1;
        document.getElementById("es2").innerHTML = subpedido;
    }else if(p1==0){
        document.getElementById("es2").innerHTML ="";
    }
    if(p2>0){
        subpedido ="Ensalada pollo: \n"  + p2;
        document.getElementById("es3").innerHTML = subpedido;
    }else if(p2==0){
        document.getElementById("es3").innerHTML ="";
    }
    if(p3>0){
        subpedido ="Ensalada salmón: \n"  + p3;
        document.getElementById("es4").innerHTML = subpedido;
    }else if(p3==0){
        document.getElementById("es4").innerHTML ="";
    }
    if(p4>0){
        subpedido ="Ensalada camarón: \n"  + p4;
        document.getElementById("es5").innerHTML = subpedido;
    }else if(p4==0){
        document.getElementById("es5").innerHTML ="";
    }
    if(p5>0){
        subpedido ="Entrepan portobello: \n"  + p5;
        document.getElementById("es6").innerHTML = subpedido;
    }else if(p5==0){
        document.getElementById("es6").innerHTML ="";
    }
    if(p6>0){
        subpedido ="Entrepan pibil: \n"  + p6;
        document.getElementById("es7").innerHTML = subpedido;
    }else if(p6==0){
        document.getElementById("es7").innerHTML ="";
    }
    if(p7>0){
        subpedido ="Entrepan europa: \n"  + p7;
        document.getElementById("es8").innerHTML = subpedido;
    }else if(p7==0){
        document.getElementById("es8").innerHTML ="";
    }
    if(p8>0){
        subpedido ="Pasta camarón: \n"  + p8;
        document.getElementById("es9").innerHTML = subpedido;
    }else if(p8==0){
        document.getElementById("es9").innerHTML ="";
    }
    if(p9>0){
        subpedido ="Pasta puttanesca: \n"  + p9;
        document.getElementById("es10").innerHTML = subpedido;
    }else if(p9==0){
        document.getElementById("es10").innerHTML ="";
    }
    if(p10>0){
        subpedido ="Psata alfredo con pollo: \n"  + p10;
        document.getElementById("es11").innerHTML = subpedido;
    }else if(p10==0){
        document.getElementById("es11").innerHTML ="";
    }
    if(p11>0){
        subpedido ="Pasta carbonara: \n"  + p11;
        document.getElementById("es12").innerHTML = subpedido;
    }else if(p11==0){
        document.getElementById("es12").innerHTML ="";
    }
    if(p12>0){
        subpedido ="Sopa mínestrone \n"  + p12;
        document.getElementById("es13").innerHTML = subpedido;
    }else if(p12==0){
        document.getElementById("es13").innerHTML ="";
    }
    if(p13>0){
        subpedido ="Sopa tres quesos: \n"  + p13;
        document.getElementById("es14").innerHTML = subpedido;
    }else if(13==0){
        document.getElementById("es14").innerHTML ="";
    }
    if(p14>0){
        subpedido ="Sopa de cebolla: \n"  + p14;
        document.getElementById("es15").innerHTML = subpedido;
    }else if(p14==0){
        document.getElementById("es15").innerHTML ="";
    }
    if(p15>0){
        subpedido ="Sopa de jitomate: \n"  + p15;
        document.getElementById("es16").innerHTML = subpedido;
    }else if(p15==0){
        document.getElementById("es16").innerHTML ="";
    }
    if(p16>0){
        subpedido ="Hamburguesa arte-sano: \n"  + p16;
        document.getElementById("es17").innerHTML = subpedido;
    }else if(p16==0){
        document.getElementById("es17").innerHTML ="";
    }
    if(p17>0){
        subpedido ="Hamburguesa arte-sano BBQ: \n"  + p17;
        document.getElementById("es18").innerHTML = subpedido;
    }else if(p17==0){
        document.getElementById("es18").innerHTML ="";
    }
    if(p18>0){
        subpedido ="Hamburguesa arrachera: \n"  + p18;
        document.getElementById("es19").innerHTML = subpedido;
    }else if(p18==0){
        document.getElementById("es19").innerHTML ="";
    }
    if(p19>0){
        subpedido ="Pizza arte-sano: \n"  + p19;
        document.getElementById("es20").innerHTML = subpedido;
    }else if(p19==0){
        document.getElementById("es20").innerHTML ="";
    }
    if(p20>0){
        subpedido ="Pizza arte-sano 2: \n"  + p20;
        document.getElementById("es21").innerHTML = subpedido;
    }else if(p20==0){
        document.getElementById("es21").innerHTML ="";
    }
    if(p21>0){
        subpedido ="Pizza peperoni: \n" + p21;
        document.getElementById("es22").innerHTML = subpedido;
    }else if(p21==0){
        document.getElementById("es22").innerHTML ="";
    }
    if(p22>0){
        subpedido ="Pizza tres quesos \n" + p22;
        document.getElementById("es23").innerHTML = subpedido;
    }else if(p22==0){
        document.getElementById("es23").innerHTML ="";
    }
    if(p23>0){
        subpedido ="Pizza mar y tierra: \n" + p23;
        document.getElementById("es24").innerHTML = subpedido;
    }else if(p23==0){
        document.getElementById("es24").innerHTML ="";
    }
    if(p24>0){
        subpedido ="Pizza jamón serrano: \n" + p24;
        document.getElementById("es25").innerHTML = subpedido;
    }else if(p24==0){
        document.getElementById("es25").innerHTML ="";
    }
    if(p25>0){
        subpedido ="Postre de panacotta: \n" + p25;
        document.getElementById("es26").innerHTML = subpedido;
    }else if(p25==0){
        document.getElementById("es26").innerHTML ="";
    }
    if(p26>0){
        subpedido ="Postre apfelstrudel \n" + p26;
        document.getElementById("es27").innerHTML = subpedido;
    }else if(p26==0){
        document.getElementById("es27").innerHTML ="";
    }
    if(p27>0){
        subpedido ="Postre tiramisú: \n" + p27;
        document.getElementById("es28").innerHTML = subpedido;
    }else if(p27==0){
        document.getElementById("es28").innerHTML ="";
    }
    if(p28>0){
        subpedido ="Postre brownie: \n" + p28;
        document.getElementById("es29").innerHTML = subpedido;
    }else if(p28==0){
        document.getElementById("es29").innerHTML ="";
    }
    if(p29>0){
        subpedido ="Bebida café shaker: \n" + p29;
        document.getElementById("es30").innerHTML = subpedido;
    }else if(p29==0){
        document.getElementById("es30").innerHTML ="";
    }
    if(p30>0){
        subpedido ="Bebida congo: \n" + p30;
        document.getElementById("es31").innerHTML = subpedido;
    }else if(p30==0){
        document.getElementById("es31").innerHTML ="";
    }
    if(p31>0){
        subpedido ="Bebida sweet jackie: \n" + p31;
        document.getElementById("es32").innerHTML = subpedido;
    }else if(p31==0){
        document.getElementById("es32").innerHTML ="";
    }
    if(p32>0){
        subpedido ="Bebida refresco natural: \n" + p32;
        document.getElementById("es33").innerHTML = subpedido;
    }else if(p32==0){
        document.getElementById("es33").innerHTML ="";
    }
    //alert("Pedido: "+subcompra);
    //return subpedido;
    //document.getElementById("muestraCarrito").innerHTML = subpedido;
  }
/*AGARRA LOS ELEMENTOS QUE SI SE VAN A COMPRAR, NO CONFUNDIR CON AGREGAR AL CARRITO QUE SOLO CREA UN SUBPEDIDO
ESTE ES EL PEDIDO A CONFIRMAR CON NOMBRE, DIRECCION Y TELEFONO*/
function continuarPedido(){
var tx="";
var cont=0;
if(p0>0){
tx = "1-"+p0;
subcompra.push(tx);
cont++;
}
if(p1>0){
tx = "2-"+p1;
subcompra.push(tx);
cont++;
}
if(p2>0){
tx = "3-"+p2;
subcompra.push(tx);
cont++;
}
if(p3>0){
tx = "4-"+p3;
subcompra.push(tx);
cont++;
}
if(p4>0){
tx = "5-"+p4;
subcompra.push(tx);
cont++;
}
if(p5>0){
tx = "6-"+p5;
subcompra.push(tx);
cont++;
}
if(p6>0){
tx = "7-"+p6;
subcompra.push(tx);
cont++;
}
if(p7>0){
tx = "8-"+p7;
subcompra.push(tx);
cont++;
}
if(p8>0){
tx = "9-"+p8;
subcompra.push(tx);
cont++;
}
if(p9>0){
tx = "10-"+p9;
subcompra.push(tx);
cont++;
}
if(p10>0){
tx = "11-"+p10;
subcompra.push(tx);
cont++;
}
if(p11>0){
tx = "12-"+p11;
subcompra.push(tx);
cont++;
}
if(p12>0){
tx = "13-"+p12;
subcompra.push(tx);
cont++;
}
if(p13>0){
tx = "14-"+p13;
subcompra.push(tx);
cont++;
}
if(p14>0){
tx = "15-"+p14;
subcompra.push(tx);
cont++;
}
if(p15>0){
tx = "16-"+p15;
subcompra.push(tx);
cont++;
}
if(p16>0){
tx = "17-"+p16;
subcompra.push(tx);
cont++;
}
if(p17>0){
tx = "18-"+p17;
subcompra.push(tx);
cont++;
}
if(p18>0){
tx = "19-"+p18;
subcompra.push(tx);
cont++;
}
if(p19>0){
tx = "20-"+p19;
subcompra.push(tx);
cont++;
}
if(p20>0){
tx = "21-"+p20;
subcompra.push(tx);
cont++;
}
if(p21>0){
tx = "22-"+p21;
subcompra.push(tx);
cont++;
}
if(p22>0){
tx = "23-"+p22;
subcompra.push(tx);
cont++;
}
if(p23>0){
tx = "24-"+p23;
subcompra.push(tx);
cont++;
}
if(p24>0){
tx = "25-"+p24;
subcompra.push(tx);
cont++;
}
if(p25>0){
tx = "26-"+p25;
subcompra.push(tx);
cont++;
}
if(p26>0){
tx = "27-"+p26;
subcompra.push(tx);
cont++;
}
if(p27>0){
tx = "28-"+p27;
subcompra.push(tx);
cont++;
}
if(p28>0){
tx = "29-"+p28;
subcompra.push(tx);
cont++;
}
if(p29>0){
tx = "30-"+p29;
subcompra.push(tx);
cont++;
}
if(p30>0){
tx = "31-"+p30;
subcompra.push(tx);
cont++;
}
if(p31>0){
tx = "32-"+p31;
subcompra.push(tx);
cont++;
}
if(p32>0){
tx = "33-"+p32;
subcompra.push(tx);
cont++;
}
if(cont>=1){
var totalApagar = calcularTotal();
alert("Pedido: "+subcompra+"\nTotal a pagar: "+totalApagar);
/*Guarda arreglo de pedido en session storage*/
sessionStorage.setItem("subcompra", totalApagar);
window.location = 'ORDENA.html';
}else{
alert("No has seleccionado ningun producto");
}
return false;
}
/*CALCULAR TOTAL DE CADA PRODUCTO, CUANTOS DE CADA UNO Y PRECIO FINAL*/
function calcularTotal(){
    var auxCT;
    var auxS;
    var id;
    var cant;
    var subtotal;
    var total = 0;
    for(var i = 0; i<subcompra.length; i++){
        auxCT = subcompra[i];
        auxS = auxCT.split("-");
        id = auxS[0];
        cant = auxS[1];
        //subtotal = (Number(id))*(Number(cant));
        if(id == 1){
            subtotal = (Number(prectio0))*(Number(cant));
        }
        if(id == 2){
            subtotal = (Number(prectio1))*(Number(cant));
        }
        if(id == 3){
            subtotal = (Number(prectio2))*(Number(cant));
        }
        if(id == 4){
            subtotal = (Number(prectio3))*(Number(cant));
        }
        if(id == 5){
            subtotal = (Number(prectio4))*(Number(cant));
        }
        if(id == 6){
            subtotal = (Number(prectio5))*(Number(cant));
        }
        if(id == 7){
            subtotal = (Number(prectio6))*(Number(cant));
        }
        if(id == 8){
            subtotal = (Number(prectio7))*(Number(cant));
        }
        if(id == 9){
            subtotal = (Number(prectio8))*(Number(cant));
        }
        if(id == 10){
            subtotal = (Number(prectio9))*(Number(cant));
        }
        if(id == 11){
            subtotal = (Number(prectio10))*(Number(cant));
        }
        if(id == 12){
            subtotal = (Number(prectio11))*(Number(cant));
        }
        if(id == 13){
            subtotal = (Number(prectio12))*(Number(cant));
        }
        if(id == 14){
            subtotal = (Number(prectio13))*(Number(cant));
        }
        if(id == 15){
            subtotal = (Number(prectio14))*(Number(cant));
        }
        if(id == 16){
            subtotal = (Number(prectio15))*(Number(cant));
        }
        if(id == 17){
            subtotal = (Number(prectio16))*(Number(cant));
        }
        if(id == 18){
            subtotal = (Number(prectio17))*(Number(cant));
        }
        if(id == 19){
            subtotal = (Number(prectio18))*(Number(cant));
        }
        if(id == 20){
            subtotal = (Number(prectio19))*(Number(cant));
        }
        if(id == 21){
            subtotal = (Number(prectio20))*(Number(cant));
        }
        if(id == 22){
            subtotal = (Number(prectio21))*(Number(cant));
        }
        if(id == 23){
            subtotal = (Number(prectio22))*(Number(cant));
        }
        if(id == 24){
            subtotal = (Number(prectio23))*(Number(cant));
        }
        if(id == 25){
            subtotal = (Number(prectio24))*(Number(cant));
        }
        if(id == 26){
            subtotal = (Number(prectio25))*(Number(cant));
        }
        if(id == 27){
            subtotal = (Number(prectio26))*(Number(cant));
        }
        if(id == 28){
            subtotal = (Number(prectio27))*(Number(cant));
        }
        if(id == 29){
            subtotal = (Number(prectio28))*(Number(cant));
        }
        if(id == 30){
            subtotal = (Number(prectio29))*(Number(cant));
        }
        if(id == 31){
            subtotal = (Number(prectio30))*(Number(cant));
        }
        if(id == 32){
            subtotal = (Number(prectio31))*(Number(cant));
        }
        if(id == 33){
            subtotal = (Number(prectio32))*(Number(cant));
        }
        total =Number(total)+Number(subtotal);
    }    
    return total;
}

function guardapedido(totalCliente,nombreCliente, direccionCliente, telefonoCliete){
    var pedidoCompleto;
    pedidoCompleto = totalCliente+","+nombreCliente+","+direccionCliente+","+telefonoCliete;
    pedidos.push(pedidoCompleto);
    console.log(pedidos);
    return pedidoCompleto;
}

function muestraPedidos(){
    var totalPedidos="";
    for(var i=0; i<pedidos.length; i++){
        totalPedidos = totalPedidos+pedidos[i];
    }
    localStorage.setItem("pedidos",totalPedidos);
}

/*MODIFICAR PRECIOS*/
function modificaPrecio0(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia0").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio0");
    document.getElementById("precio0").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio1(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia1").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio1");
    document.getElementById("precio1").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio2(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia2").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio2");
    document.getElementById("precio2").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio3(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia3").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio3");
    document.getElementById("precio3").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio4(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia4").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio4");
    document.getElementById("precio4").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio5(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia5").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio5");
    document.getElementById("precio5").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio6(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia6").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio6");
    document.getElementById("precio6").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio7(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia7").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio7");
    document.getElementById("precio7").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio8(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia8").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio8");
    document.getElementById("precio8").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio9(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia9").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio9");
    document.getElementById("precio9").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio10(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia10").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio10");
    document.getElementById("precio10").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio11(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia11").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio11");
    document.getElementById("precio11").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio12(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia12").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio12");
    document.getElementById("precio12").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio13(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia13").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio13");
    document.getElementById("precio13").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio15(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia15").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio15");
    document.getElementById("precio15").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio16(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia16").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio16");
    document.getElementById("precio16").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio17(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia17").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio17");
    document.getElementById("precio17").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio18(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia18").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio18");
    document.getElementById("precio18").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio19(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia19").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio19");
    document.getElementById("precio19").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio20(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia20").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio20");
    document.getElementById("precio20").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio21(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia21").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio21");
    document.getElementById("precio21").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio22(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia22").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio22");
    document.getElementById("precio22").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio23(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia23").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio23");
    document.getElementById("precio23").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio24(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia24").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio24");
    document.getElementById("precio24").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio25(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia25").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio25");
    document.getElementById("precio25").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio26(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia26").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio26");
    document.getElementById("precio26").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio27(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia27").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio27");
    document.getElementById("precio27").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio28(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia28").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio28");
    document.getElementById("precio28").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio29(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia29").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio29");
    document.getElementById("precio29").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio30(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia30").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio30");
    document.getElementById("precio30").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio31(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia31").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio31");
    document.getElementById("precio31").innerHTML = "$ "+prectio0;
    return false;
}
function modificaPrecio32(){
    var precioNuevo = 0;
    precioNuevo = document.getElementById("cambia32").value;
    alert("precio nuevo: "+precioNuevo);
    prectio0 = precioNuevo;
    borraPrecio("precio32");
    document.getElementById("precio32").innerHTML = "$ "+prectio0;
    return false;
}

function borraPrecio(tag){
    document.getElementById(tag).innerHTML = "";
}