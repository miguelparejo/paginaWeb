$(document).ready(function () {
  console.log("listo");
});

$("#formularioBusqueda").submit(function (e) {
  e.preventDefault();
  validarbuscador();
});

$("#formularioContacto").submit(function (e) {
  e.preventDefault();
  validarformulario();
});

$("#formularioBusquedaPiePagina").submit(function (e) {
  e.preventDefault();
  validarBuscadorPiePagina();
});

function validarbuscador() {
  if ($("#buscador").val() == "") {
    $("#buscador").addClass("is-invalid");
  } else {
    $("#buscador").removeClass("is-invalid");
  }
}

function validarBuscadorPiePagina() {
  if ($("#buscador2").val() == "") {
    $("#buscador2").addClass("is-invalid");
  } else {
    $("#buscador2").removeClass("is-invalid");
  }
}

function validarformulario() {
  if ($("#nombre").val() == "") {
    $("#nombre").addClass("is-invalid");
  } else {
    $("#nombre").removeClass("is-invalid");
  }
  if ($("#email").val() == "") {
    $("#email").addClass("is-invalid");
  } else {
    $("#email").removeClass("is-invalid");
  }

  if ($("#telefono").val() == "") {
    $("#telefono").addClass("is-invalid");
  } else {
    $("#telefono").removeClass("is-invalid");
  }

  if ($("#asunto").val() == "") {
    $("#asunto").addClass("is-invalid");
  } else {
    $("#asunto").removeClass("is-invalid");
  }

  if ($("#mensaje").val() == "") {
    $("#mensaje").addClass("is-invalid");
  } else {
    $("#mensaje").removeClass("is-invalid");
  }
}

$.ajax({
  url: "json/usuario.json",
  data: { idUsuario: 480 },
  type: "POST",
  dataType: "json",
  success: function (respuesta) {
    pintarNotificacionesPendientes(respuesta);
  },
  error: function () {
    console.log("Se ha producido un error");
  },
});

function pintarNotificacionesPendientes(jsonUsuario) {
  if (jsonUsuario.notificacionesPendientes > 0) {
    $("#notifications").removeClass("d-none");
    $("#numNotificacionesPendientes").html(
      jsonUsuario.notificacionesPendientes
    );
  } else {
    $("#notifications").addClass("d-none");
    $("#numNotificacionesPendientes").html("");
  }
}
