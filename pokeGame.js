$(document).ready(function () {
  function volumen() {
    var audio = document.getElementById("mp3");
    audio.volume = 0.25;
  }
  volumen();
  //POKEMONS
  $("#p1").hide();
  $("#p2").hide();

  //DIALOGO
  $(".chat").hide();

  //BOTONES
  $("#siguiente").hide();
  $("#pelea").hide();
  $("#evolucionar").hide();
  $("#evolucionar2").hide();
  $("#basico1").hide();
  $("#basico2").hide();
  $("#f5").hide();

  //ATAQUES
  $("#basico").hide();
  $("#recargado").hide(); // este es el ataque de garra
  $("#ultra").hide();

  //LOGO INICIAL
  $("#pokeLogo").fadeIn(150).fadeOut(25).fadeIn(150).fadeOut(25).fadeIn(800);

  //START > EMPIEZA EL JUEGO > SE VA EL LOGO > APARECE EL PRIMER POKEMON > APARECE EL BOTON DE DIALOGO "SIGUIENTE"
  $("#start").on("click", function () {
    $("#pokeLogo").fadeOut(400);
    $("#p1").fadeIn(500);
    $(".chat").fadeIn(500);
    $(this).fadeOut(300);
    $("#siguiente").fadeIn(500);
  });

  $("#siguiente").click(function a() {
    $("#chat").text("Algo se acerca!!");
    $(this).click(function () {
      $("#chat").hide();
      $("#p2").fadeIn(600);
      $("#chat").text("Aparecio un Nidoran salvaje!");
      $("#chat").fadeIn(600).show();
      $("#siguiente").remove();
      $("#pelea").show();
    });
  });

  $("#pelea").click(function () {
    //alert("comienza la pelea!");
    $("#basico").show();
    $("#chat").hide();
    $("#pelea").removeClass("pelea");
    $("#basico").addClass("ataque");
    $("#recargado").addClass("ataque");
    $(".contenedor").append(
      "<input type='number' class='lifePoints1' id='LP1'  readonly>"
    );
    $(".contenedor").append(
      "<input type='number'  class='lifePoints2'id='LP2'  readonly>"
    );
    $("#LP1").val(100);
    $("#LP2").val(100);
    $("#pelea").hide();
  });

  /************************************************************************************************/

  //ATAQUE BASICO 0

  $("#basico").click(function () {
    //ASIGNACION DE DANO
    var danoB = Math.round(Math.random() * 4);
    $("#LP2").val(Number.parseFloat($("#LP2").val() - danoB));

    var danoNidoran = Math.round(Math.random() * 15);
    $("#LP1").val(Number.parseFloat($("#LP1").val() - danoNidoran));
    //TERMINACION DE ASIGNACION DE DANO

    //CONDICIONAL PARA QUE APAREZCA EVOLUCION. ACTO SEGUIDO, SI EVOLUCIONA, SE HABILITA LA ULTRA EVOLUCION.
    if (danoB == 1) {
      //  alert("Llego la hora de demostrar el fruto de nuestro entrenamiento!");
      $("#evolucionar").fadeIn(500);
    } // CERRAMOS EL IF ACA

    // alert("Daño causado: " + danoB + " " + " |  Daño recibido: " + danoNidoran); ///////////////////////////////////
    $("#LP1").addClass("sangrePokemon");
    $("#LP2").addClass("sangrePokemon");

    //DENTRO DE ATAQUE BASICO ANIMAMOS A CHARMANDER PARA SIMULAR EL ATAQUE
    $("#p1").animate(
      {
        marginLeft: "20%",
      },
      40,
      function () {
        $("#p1").animate({
          marginLeft: "0%",
        });
      }
    );
    //ACA TERMINA ANIMACION DE MOVIMIENTO

    //---------------------------------------------------------------
    //ATAQUE NIDORAN ANIMADO Y APLICACION DE DANO A P1
    $("#p2")
      .delay(0)
      .animate(
        {
          marginRight: "35%",
        },
        40,
        function () {
          $("#p2").animate({
            marginRight: "0%",
          });
        }
      );

    //DANO DE NIDORAN
    /* var danoNidoran = Math.round(Math.random() * 25);
      $("#LP1").val(Number.parseFloat($("#LP1").val() - danoNidoran));*/

    //---------------------------------------------------------------

    //NIDORAN Y CHARMANDER RECIBIENDO DANO EN ATAQUE BASICO
    $("#p1").attr("src", "./imagenes/p1Dano.gif"); ////////////PROBLEMAS? No! Bien hecho
    $("#p2").attr("src", "./imagenes/p2danoFuego1.gif");

    //APARECE EL BOTON EVOLUCIONAR Y SUS FUNCIONALIDADES
    $("#evolucionar").click(function () {
      $("#evolucionar").fadeOut(800);
      $("#basico").hide();
      $("#basico1").show();

      $("#recargado").fadeIn(500); // este es el ataque de garra

      //APARECE CHARMELEON! Y LO POSICIONAMOS PARA QUE ESTE LO MAS SIMILAR A CHARMANDER TANTO EN "X" COMO EN "Y"
      $("#p1").attr("src", "./imagenes/charmelionAtaqueGarra.gif");
      $("#p1").height(91).css({ top: 250, left: 20 });

      //SI HACEMOS CLICK EN ULTRA EVOLUCION
      $("#evolucionar2").click(function () {
        $("#p1").attr("src", "./imagenes/charizardReposo0.gif");
        $("#p1").height(200).css({ top: 165, left: 5 });
        $("#recargado").hide();
        $("#ultra").fadeIn(800);
      });
    });
    //} PARA CERRAR IF LO CERRAMOS ARRIBA

    //IF PARA CERRAR EL JUEGO
    var p2 = $("#LP2").val();
    p2 = Number(parseFloat(p2));
    var p1 = $("#LP1").val();
    p1 = Number(parseFloat(p1));

    if (p2 <= 0) {
      // alert("GOLPE FINAL CHARIZARD!");
      $("#p2").attr("src", "./imagenes/p2danoFINAL.gif");
      //aca quiero animacion final de pokemon destruido;
      $("#LP2").fadeOut(1000);
      $("#LP1").fadeOut(1000);
      $("#p2").fadeOut(6000);
    } else if (p1 <= 0) {
      alert("Nidoran es muy fuerte! Ten cuidado!");
      $("#LP2").fadeOut(1000);
      $("#LP1").fadeOut(1000);
      $("#p1").fadeOut(3000);
      $("#basico").hide();

      $("#p2").attr("src", "./imagenes/p2.gif");
      $("#evolucionar").hide();
      $("#evolucionar2").hide();
      $("#f5")
        .delay(2000)
        .fadeIn(150)
        .fadeOut(25)
        .fadeIn(150)
        .fadeOut(25)
        .fadeIn(800);
      $("#f5").on("click", function refreshPage() {
        window.location.reload();
      });

      $("#pokeLogo")
        .delay(2000)
        .fadeIn(500)
        .fadeOut(25)
        .fadeIn(150)
        .fadeOut(25)
        .fadeIn(800);
    }
  });
  /**********************************************************************************************/

  //ATAQUE BASICO II (1)

  $("#basico1").click(function () {
    //ASIGNACION DE DANO
    var danoB = Math.round(Math.random() * 5);
    $("#LP2").val(Number.parseFloat($("#LP2").val() - danoB));

    var danoNidoran = Math.round(Math.random() * 15) + 5;
    $("#LP1").val(Number.parseFloat($("#LP1").val() - danoNidoran));
    //TERMINACION DE ASIGNACION DE DANO

    //DESBLOQUEAR CHARIZAR ULTRA EVOLUCION
    if (danoB == 1) {
      // alert("CHARMELEON LIBERA TU MÁXIMO PODER!");
      $("#evolucionar2").fadeIn(800);
      //SI HACEMOS CLICK EN ULTRA EVOLUCION
      $("#evolucionar2").click(function () {
        $("#p1").attr("src", "./imagenes/charizardReposo0.gif");
        $("#p1").height(200).css({ top: 165, left: 5 });
        $("#recargado").hide();
        $("#ultra").fadeIn(800);
        $("#evolucionar2").fadeOut(800);
        $("#basico1").hide();
      });
    }

    // alert("Daño causado: " + danoB + " " + " |  Daño recibido: " + danoNidoran); ///////////////////////////////////
    $("#LP2").addClass("sangrePokemon");

    //DENTRO DE ATAQUE BASICO ANIMAMOS A CHARMANDER PARA SIMULAR EL ATAQUE
    $("#p1").animate(
      {
        marginLeft: "20%",
      },
      40,
      function () {
        $("#p1").animate({
          marginLeft: "0%",
        });
      }
    );
    //ACA TERMINA ANIMACION DE MOVIMIENTO

    //---------------------------------------------------------------
    //ATAQUE NIDORAN ANIMADO Y APLICACION DE DANO A P1
    $("#p2")
      .delay(0)
      .animate(
        {
          marginRight: "35%",
        },
        40,
        function () {
          $("#p2").animate({
            marginRight: "0%",
          });
        }
      );

    //DANO DE NIDORAN
    /* var danoNidoran = Math.round(Math.random() * 25);
    $("#LP1").val(Number.parseFloat($("#LP1").val() - danoNidoran));*/

    $("#LP1").addClass("sangrePokemon");
    $("#LP2").addClass("sangrePokemon");
    //---------------------------------------------------------------

    //NIDORAN Y CHARMANDER RECIBIENDO DANO EN ATAQUE BASICO II
    $("#p1").attr("src", "./imagenes/charmeleonDano.gif"); ////////////PROBLEMAS CON CHARMELEON??

    $("#p2").attr("src", "./imagenes/p2danoFuego1.gif");

    //CONDICIONAL PARA QUE APAREZCA EVOLUCION. ACTO SEGUIDO, SI EVOLUCIONA, SE HABILITA LA ULTRA EVOLUCION.

    //APARECE EL BOTON EVOLUCIONAR Y SUS FUNCIONALIDADES
    $("#evolucionar").click(function () {
      $("#evolucionar").hide();
      $("#basico").hide();
      $("#basico1").show();
      $("#recargado").fadeIn(500); // este es el ataque de garra

      //APARECE CHARMELEON! Y LO POSICIONAMOS PARA QUE ESTE LO MAS SIMILAR A CHARMANDER TANTO EN "X" COMO EN "Y"
      $("#p1").attr("src", "./imagenes/charmelionAtaqueGarra.gif");
      $("#p1").height(91).css({ top: 250, left: 20 });
    });
    //} PARA CERRAR IF LO CERRAMOS ARRIBA

    //IF PARA CERRAR EL JUEGO
    var p2 = $("#LP2").val();
    p2 = Number(parseFloat(p2));
    var p1 = $("#LP1").val();
    p1 = Number(parseFloat(p1));

    if (p2 <= 0) {
      // alert("GOLPE FINAL!");
      $("#p2").attr("src", "./imagenes/p2danoFINAL.gif");
      //aca quiero animacion final de pokemon destruido;
      $("#LP2").fadeOut(1000);
      $("#LP1").fadeOut(1000);
      $("#p2").fadeOut(6000);
      $("#basico1").hide();
      $("#basico2").hide();
    } else if (p1 <= 0) {
      alert("Nidoran es muy fuerte! Ten cuidado!");

      $("#LP2").fadeOut(1000);
      $("#LP1").fadeOut(1000);
      $("#p1").fadeOut(3000);
      $("#p1").attr("src", "./imagenes/charmeleonDanoFinal.gif");

      $("#basico").hide();
      $("#basico1").hide();
      $("#basico2").hide();
      $("#recargado").hide();

      $("#p2").attr("src", "./imagenes/p2.gif");
      $("#evolucionar").hide();
      $("#evolucionar2").hide();
      $("#f5")
        .delay(2000)
        .fadeIn(150)
        .fadeOut(25)
        .fadeIn(150)
        .fadeOut(25)
        .fadeIn(800);
      $("#f5").on("click", function refreshPage() {
        window.location.reload();
      });

      $("#pokeLogo")
        .delay(2000)
        .fadeIn(500)
        .fadeOut(25)
        .fadeIn(150)
        .fadeOut(25)
        .fadeIn(800);
    }
  });

  /*******************************************************************************************/

  //ATAQUE SORPRESA

  $("#recargado").click(function () {
    var danoR = Math.round(Math.random() * 3);
    $("#LP2").val(Number.parseFloat($("#LP2").val() - danoR));
    // alert("Daño causado: " + danoR + " " + " | Daño recibido: 0");
    $("#LP2").addClass("sangrePokemon");
    $("#p2").attr("src", "./imagenes/p2dano.gif");
    $("#p1").attr("src", "./imagenes/charmelionAtaqueGarra.gif");

    //DENTRO DE ATAQUE RECARGADO ANIMAMOS A CHARMANDER PARA SIMULAR EL ATAQUE
    $("#p1").animate(
      {
        marginLeft: "50%",
      },
      60,
      function () {
        $("#p1").animate({
          marginLeft: "0%",
        });
      }
    );
    //ACA TERMINA ANIMACION DE MOVIMIENTO

    //IF PARA CERRAR EL JUEGO
    var p2 = $("#LP2").val();
    p2 = Number(parseFloat(p2));
    var p1 = $("#LP1").val();
    p1 = Number(parseFloat(p1));

    if (p2 <= 0) {
      //alert("GOLPE FINAL CHARMELEON!");
      $("#p2").attr("src", "./imagenes/p2danoFINAL.gif");
      //aca quiero animacion final de pokemon destruido;
      $("#LP2").fadeOut(1000);
      $("#LP1").fadeOut(1000);
      $("#p2").fadeOut(6000);
      $("#basico").hide();
      $("#basico1").hide();
      $("#recargado").hide();
      $("#evolucionar").hide();
      $("#evolucionar2").hide();
      $("#ultra").hide();

      // ULTRA FALTA LOGO Y RE INTENTAR
      $("#f5")
        .delay(2000)
        .fadeIn(150)
        .fadeOut(25)
        .fadeIn(150)
        .fadeOut(25)
        .fadeIn(800);
      $("#f5").on("click", function refreshPage() {
        window.location.reload();
      });

      $("#pokeLogo")
        .delay(2000)
        .fadeIn(500)
        .fadeOut(25)
        .fadeIn(150)
        .fadeOut(25)
        .fadeIn(800);
    } else if (p1 <= 0) {
      // alert("Nidoran es muy fuerte! Te ha derrotado, intentalo de nuevo!");
      $("#LP2").fadeOut(1000);
      $("#LP1").fadeOut(1000);
      $("#p1").fadeOut(6000);
    }
  });
  /****************************************************************************************************/
  //ATAQUE ULTRA
  $("#ultra").click(function () {
    var danoU = Math.round(Math.random() * 80) + 20;
    $("#LP2").val(Number.parseFloat($("#LP2").val() - danoU));
    var danoNidoran = Math.round(Math.random() * 25);
    $("#LP1").val(Number.parseFloat($("#LP1").val() - danoNidoran));

    $("#LP2").addClass("sangrePokemon");
    $("#p1").attr("src", "./imagenes/charizardAtaque3.gif");
    $("#p1").height(200).css({ top: 165, left: 0 });

    //NIDORAN Y CHARIZARD RECIBIENDO DANO EN ATAQUE ULTRA

    $("#p2").attr("src", "./imagenes/p2dano.gif");
    //MOVIMIENTO NIDORAN
    $("#p2")
      .delay(0)
      .animate(
        {
          marginRight: "35%",
        },
        40,
        function () {
          $("#p2").animate({
            marginRight: "0%",
          });
        }
      );

    //alert("Daño causado: " + danoU + "  " + " | Daño recibido: " + danoNidoran);

    //IF PARA CERRAR EL JUEGO

    var p2 = $("#LP2").val();
    p2 = Number(parseFloat(p2));
    var p1 = $("#LP1").val();
    p1 = Number(parseFloat(p1));

    if (p2 <= 0) {
      // alert("GOLPE FINAL CHARIZARD!");
      $("#p2").attr("src", "./imagenes/p2danoFINAL.gif");
      $("#p2").animate({ marginRight: "0px" });
      //aca quiero animacion final de pokemon destruido;
      $("#LP2").fadeOut(1000);
      $("#LP1").fadeOut(1000);

      $("#p2").fadeOut(4000);
      $("#basico").hide();
      $("#basico1").hide();
      $("#basico2").hide();
      $("#recargado").hide();
      $("#evolucionar").hide();
      $("#evolucionar2").hide();
      $("#ultra").hide();

      // ULTRA FALTA LOGO Y RE INTENTAR
      $("#f5")
        .delay(2000)
        .fadeIn(150)
        .fadeOut(25)
        .fadeIn(150)
        .fadeOut(25)
        .fadeIn(800);
      $("#f5").on("click", function refreshPage() {
        window.location.reload();
      });

      $("#pokeLogo")
        .delay(2000)
        .fadeIn(500)
        .fadeOut(25)
        .fadeIn(150)
        .fadeOut(25)
        .fadeIn(800);
    } else if (p1 <= 0) {
      // alert("Nidoran es muy fuerte! Te ha derrotado, intentalo de nuevo!");
      $("#LP2").fadeOut(1000);
      $("#LP1").fadeOut(1000);
      $("#p1").fadeOut(4000);

      $("#basico").hide();
      $("#basico1").hide();
      $("#basico2").hide();

      $("#recargado").hide();
      $("#evolucionar").hide();
      $("#evolucionar2").hide();
      $("#ultra").hide();

      // ULTRA FALTA LOGO Y RE INTENTAR
      $("#f5")
        .delay(2000)
        .fadeIn(150)
        .fadeOut(25)
        .fadeIn(150)
        .fadeOut(25)
        .fadeIn(800);
      $("#f5").on("click", function refreshPage() {
        window.location.reload();
      });

      $("#pokeLogo")
        .delay(2000)
        .fadeIn(500)
        .fadeOut(25)
        .fadeIn(150)
        .fadeOut(25)
        .fadeIn(800);
    }
  });
});
