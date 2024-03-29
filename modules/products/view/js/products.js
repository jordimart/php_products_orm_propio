// Plugin
jQuery.fn.fill_or_clean = function() {
  this.each(function() {

    if ($("#serial_number").attr("value") == "") {
      $("#serial_number").attr("value", "Input serial number");
      $("#serial_number")
        .focus(function() {
          if ($("#serial_number").attr("value") ==
            "Input serial number") {
            $("#serial_number").attr("value", "");
          }
        });
    }
    $("#serial_number")
      .blur(function() { // Onblur se activa cuando el usuario retira el foco
        if ($("#serial_number").attr("value") == "") {
          $("#serial_number").attr("value", "Input serial number");
        }
      });

    if ($("#date_entry").attr("value") == "") {
      $("#date_entry").attr("value", "Input date entry");
      $("#date_entry")
        .focus(function() {
          if ($("#date_entry").attr("value") == "Input date entry") {
            $("#date_entry").attr("value", "");
          }
        });
    }
    $("#date_entry")
      .blur(function() {
        if ($("#date_entry").attr("value") == "") {
          $("#date_entry").attr("value", "Input date entry");
        }
      });
    if ($("#date_exit").attr("value") == "") {
      $("#date_exit").attr("value", "Input date exit");
      $("#date_exit")
        .focus(function() {
          if ($("#date_exit").attr("value") == "Input date exit") {
            $("#date_exit").attr("value", "");
          }
        });
    }
    $("#date_exit")
      .blur(function() {
        if ($("#date_exit").attr("value") == "") {
          $("#date_exit").attr("value", "Input date exit");
        }
      });
    if ($("#purchase_price").attr("value") == "") {
      $("#purchase_price").attr("value", "Input purchase price");
      $("#purchase_price")
        .focus(function() {
          if ($("#purchase_price").attr("value") ==
            "Input purchase price") {
            $("#purchase_price").attr("value", "");
          }
        });
    }
    $("#purchase_price")
      .blur(function() {
        if ($("#purchase_price").attr("value") == "") {
          $("#purchase_price").attr("value", "Input purchase price");
        }
      });
    if ($("#sale_price").attr("value") == "") {
      $("#sale_price").attr("value", "Input sale price");
      $("#sale_price")
        .focus(function() {
          if ($("#sale_price").attr("value") == "Input sale price") {
            $("#sale_price").attr("value", "");
          }
        });
    }
    $("#sale_price")
      .blur(function() {
        if ($("#sale_price").attr("value") == "") {
          $("#sale_price").attr("value", "Input sale price");
        }
      });
    if ($("#provider").attr("value") == "") {
      $("#provider").attr("value", "Input provider");
      $("#provider")
        .focus(function() {
          if ($("#provider").attr("value") == "Input provider") {
            $("#provider").attr("value", "");
          }
        });
    }
    $("#provider")
      .blur(function() {
        if ($("#provider").attr("value") == "") {
          $("#provider").attr("value", "Input provider");
        }
      });
    if ($("#weight").attr("value") == "") {
      $("#weight").attr("value", "Input weight");
      $("#weight")
        .focus(function() {
          if ($("#weight").attr("value") == "Input weight") {
            $("#weight").attr("value", "");
          }
        });
    }
    $("#weight")
      .blur(function() {
        if ($("#weight").attr("value") == "") {
          $("#weight").attr("value", "Input weight");
        }
      });
    if ($("#height").attr("value") == "") {
      $("#height").attr("value", "Input height");
      $("#height")
        .focus(function() {
          if ($("#height").attr("value") == "Input height") {
            $("#height").attr("value", "");
          }
        });
    }
    $("#height")
      .blur(function() {
        if ($("#height").attr("value") == "") {
          $("#height").attr("value", "Input height");
        }
      });
    if ($("#width").attr("value") == "") {
      $("#width").attr("value", "Input width");
      $("#width")
        .focus(function() {
          if ($("#width").attr("value") == "Input width") {
            $("#width").attr("value", "");
          }
        });
    }
    $("#width")
      .blur(function() {
        if ($("#width").attr("value") == "") {
          $("#width").attr("value", "Input width");
        }
      });
    if ($("#description").attr("value") == "") {
      $("#description").attr("value", "Input description");
      $("#description")
        .focus(function() {
          if ($("#description").attr("value") == "Input description") {
            $("#description").attr("value", "");
          }
        });
    }
    $("#description")
      .blur(function() {
        if ($("#description").attr("value") == "") {
          $("#description").attr("value", "Input description");
        }
      });

  }); // each
  return this;

}; // function

Dropzone.autoDiscover = false;
$(document)
  .ready(function() {

    // configuracion datepicker
    $(function() {
      $('#date_entry')
        .datepicker({

          changeMonth: true,
          changeYear: true,
          defaultDate: 'today',
          maxDate: 'today',
          yearRange: '1900:2016',
          dateFormat: 'dd-mm-yy',

        });
    });

    // configuracion datepicker
    $(function() {
      $('#date_exit')
        .datepicker({

          changeMonth: true,
          changeYear: true,
          yearRange: '1900:2016',
          dateFormat: 'dd-mm-yy',

        });
    });

    // validamos productos al pulsar el botón
    $("#submit_products")
      .click(function() {
        validate_products(); // función que utilizamos
      });

    // Control de seguridad para evitar que al volver atrás de la pantalla
    // results a create, no nos imprima los datos
    $.get(
      "modules/products/controller/controller_products.class.php?load_data=true",
      function(response) {

        if (response.product === "") {
          $("#serial_number").val('');
          $("#category").val('Photovoltaic');
          $("#trademark")
            .val('Sunways'); // ojo sedebe cambiar si filtramospor base de
          // datos
          $("#model")
            .val('NT6000'); // ojo sedebe cambiar si filtramospor base
          // de datos
          $("#date_entry").val('');
          $("#date_exit").val('');
          $("#purchase_price").val('');
          $("#sale_price").val('');
          $("#provider").val('');
          $("#weight").val('');
          $("#height").val('');
          $("#width").val('');
          $("#description").val('');

          var inputElements_radio =
            document.getElementsByClassName('status');
          for (var i = 0; i < inputElements_radio.length; i++) {
            if (inputElements_radio[i].checked) {
              inputElements_radio[i].checked = false;
            }
          }

          var inputElements_check =
            document.getElementsByClassName('warranty');
          for (var i = 0; i < inputElements_check.length; i++) {
            if (inputElements_check[i].checked) {
              inputElements_check[i].checked = false;
            }
          }

          // siempre que creemos un plugin debemos llamarlo, sino no
          // funcionará
          $(this).fill_or_clean();
        } else {
          $("#serial_number").val(response.product.serial_number);
          $("#category").val(response.product.category);
          $("#trademark").val(response.product.trademark);
          $("#model").val(response.product.model);
          $("#date_entry").val(response.product.date_entry);
          $("#date_exit").val(response.product.date_exit);
          $("#purchase_price").val(response.product.purchase_price);
          $("#sale_price").val(response.product.sale_price);
          $("#provider").val(response.product.provider);
          $("#weight").val(response.product.weight);
          $("#height").val(response.product.height);
          $("#width").val(response.product.width);
          $("#description").val(response.product.description);

          var status = response.product.status;
          var inputElements_radio =
            document.getElementsByClassName('status');
          for (var i = 0; i < status.length; i++) {
            for (var j = 0; j < inputElements_radio_.length; j++) {
              if (status[i] === inputElements_radio_[j])
                inputElements_radio_[j].checked = true;
            }
          }

          var warranty = response.product.warranty;
          var inputElements_check =
            document.getElementsByClassName('warranty');
          for (var i = 0; i < warranty.length; i++) {
            for (var j = 0; j < inputElements_check.length; j++) {
              if (warranty[i] === inputElements_check[j])
                inputElements_check[j].checked = true;
            }
          }
        }
      },
      "json");

    // Dropzone function //////////////////////////////////
    $("#dropzone")
      .dropzone({
        url: "modules/products/controller/controller_products.class.php?upload=true",
        addRemoveLinks: true,
        maxFileSize: 1000,
        dictResponseError: "Ha ocurrido un error en el server",
        acceptedFiles: 'image/*,.jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF,.rar,application/pdf,.psd',
        init: function() {
          this.on("success", function(file, response) {

            $("#progress").show();
            $("#bar").width('100%');
            $("#percent").html('100%');
            $('.msg').text('').removeClass('msg_error');
            $('.msg')
              .text('Success Upload image!!')
              .addClass('msg_ok')
              .animate({
                'right': '300px'
              }, 300);
          });
        },
        complete: function(file) {
          // if(file.status == "success"){
          // alert("El archivo se ha subido correctamente: " + file.name);
          //}
        },
        error: function(file) {
          // alert("Error subiendo el archivo " + file.name);
        },
        removedfile: function(file, serverFileName) {
          var name = file.name;
          $.ajax({
            type: "POST",
            url: "modules/products/controller/controller_products.class.php?delete=true",
            data: "filename=" + name,
            success: function(data) {
              $("#progress").hide();
              $('.msg').text('').removeClass('msg_ok');
              $('.msg').text('').removeClass('msg_error');
              $("#e_avatar").html("");

              var json = data;
              if (json.res === true) {
                var element;
                if ((element = file.previewElement) != null) {
                  element.parentNode.removeChild(file.previewElement);

                } else {
                  false;
                }
              } else { // json.res == false, elimino la imagen también
                var element;
                if ((element = file.previewElement) != null) {
                  element.parentNode.removeChild(file.previewElement);
                } else {
                  false;
                }
              }
            }
          });
        }
      });
  });

var string_reg = /^[A-Za-z0-9- -.]{2,20}$/;
var date_reg =
  /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.](19|20)\d\d$/;
var price_reg = /^[1-9]\d{1,7}(?:\.\d{1,4})?$/;
var measure_reg = /^[0-9]\d{1,4}?$/;
var desc_reg = /^[A-Za-z0-9- -.]{2,80}$/;

$("#seral_number, #provider")
  .keyup(function() {
    if ($(this).val() != "" && string_reg.test($(this).val())) {
      $(".error").fadeOut();
      return false;
    }
  });

$("#date_entry", "#date_exit")
  .keyup(function() {
    if ($(this).val() != "" && date_reg.test($(this).val())) {
      $(".error").fadeOut();
      return false;
    }
  });

$("#purchase_price", "#sale_price")
  .keyup(function() {
    if ($(this).val() != "" && price_reg.test($(this).val())) {
      $(".error").fadeOut();
      return false;
    }
  });
$("#weight", "#height", "#width")
  .keyup(function() {
    if ($(this).val() != "" && measure_reg.test($(this).val())) {
      $(".error").fadeOut();
      return false;
    }
  });
$("#description")
  .keyup(function() {
    if ($(this).val() != "" && desc_reg.test($(this).val())) {
      $(".error").fadeOut();
      return false;
    }
  });

function validate_products() {
  var result = true;
  var serial_number = document.getElementById('serial_number').value;
  var category = document.getElementById('category').value;
  var trademark = document.getElementById('trademark').value;
  var model = document.getElementById('model').value;
  var date_entry = document.getElementById('date_entry').value;
  var date_exit = document.getElementById('date_exit').value;
  var purchase_price = document.getElementById('purchase_price').value;
  var sale_price = document.getElementById('sale_price').value;
  var provider = document.getElementById('provider').value;
  var weight = document.getElementById('weight').value;
  var height = document.getElementById('height').value;
  var width = document.getElementById('width').value;
  var description = document.getElementById('description').value;

  var status = [];
  var inputElements_radio = document.getElementsByClassName('status');
  var p = 0;
  for (var i = 0; i < inputElements_radio.length; i++) {
    if (inputElements_radio[i].checked) {
      status[p] = inputElements_radio[i].value;
      j++;
    }
  }

  var warranty = [];
  var inputElements_check = document.getElementsByClassName('warranty');
  var j = 0;
  for (var i = 0; i < inputElements_check.length; i++) {
    if (inputElements_check[i].checked) {
      warranty[j] = inputElements_check[i].value;
      j++;
    }
  }

  var string_reg = /^[A-Za-z0-9- -.]{2,20}$/;
  var date_reg =
    /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.](19|20)\d\d$/;
  var price_reg = /^[1-9]\d{1,7}(?:\.\d{1,4})?$/;
  var measure_reg = /^[0-9]\d{1,4}?$/;
  var desc_reg = /^[A-Za-z0-9- -.]{2,80}$/;

  $(".error").remove();
  if ($("#serial_number").val() == "" ||
    $("#serial_number").val() == "Entry serial number js") {
    $("#serial_number")
      .focus()
      .after("<span class='error'>Entry serial number js</span>");
    result = false;
    return false;
  } else if (!string_reg.test($("#serial_number").val())) {
    $("#serial_number")
      .focus()
      .after("<span class='error'>Name must be 2 to 20 letters js</span>");
    result = false;
    return false;
  }
  $(".error").remove();
  if ($("#date_entry").val() == "" ||
    $("#date_entry").val() == "Entry date entry js") {
    $("#date_entry")
      .focus()
      .after("<span class='error'>Entry date entry js</span>");
    result = false;
    return false;
  } else if (!date_reg.test($("#date_entry").val())) {
    $("#date_entry")
      .focus()
      .after("<span class='error'>error format date (dd-mm-yyyy) js</span>");
    result = false;
    return false;
  }

  $(".error").remove();
  if ($("#date_exit").val() == "" ||
    $("#date_exit").val() == "Entry date of birth") {
    $("#date_exit")
      .focus()
      .after("<span class='error'>Input date exit js</span>");
    result = false;
    return false;
  } else if (!date_reg.test($("#date_exit").val())) {
    $("#date_exit")
      .focus()
      .after("<span class='error'>error format date (dd-mm-yyyy) js</span>");
    result = false;
    return false;
  } else if ($("#purchase_price").val() == "" ||
    $("#purchase_price").val() == "Input purchase price js") {
    $("#purchase_price")
      .focus()
      .after("<span class='error'>Input purchase price js</span>");
    result = false;
    return false;
  } else if (!price_reg.test($("#purchase_price").val())) {
    $("#purchase_price")
      .focus()
      .after(
        "<span class='error'>The price format is wrong,example 000000.0000 js</span>"
      );
    result = false;
    return false;
  }

  if ($("#sale_price").val() == "" ||
    $("#sale_price").val() == "Input sale price") {
    $("#sale_price")
      .focus()
      .after("<span class='error'>Input sale price js</span>");
    result = false;
    return false;
  } else if (!price_reg.test($("#sale_price").val())) {
    $("#sale_price")
      .focus()
      .after(
        "<span class='error'>The price format is wrong,example 000000.0000 js</span>"
      );
    result = false;
    return false;
  }

  if ($("#provider").val() == "" ||
    $("#provider").val() == "Input provider js") {
    $("#provider")
      .focus()
      .after("<span class='error'>Input provider js</span>");
    result = false;
    return false;
  } else if (!string_reg.test($("#provider").val())) {
    $("#provider")
      .focus()
      .after(
        "<span class='error'>Provider must be 2 to 20 characters,no admit special characters js</span>"
      );
    result = false;
    return false;
  }

  if ($("#weight").val() == "" || $("#weight").val() == "Input weight js") {
    $("#weight").focus().after("<span class='error'>Input weight js</span>");
    result = false;
    return false;
  } else if (!measure_reg.test($("#weight").val())) {
    $("#weight")
      .focus()
      .after(
        "<span class='error'>The weight format is wrong,you can not use more than 4 digits js</span>"
      );
    result = false;
    return false;
  }

  if ($("#height").val() == "" || $("#height").val() == "Input height js") {
    $("#height").focus().after("<span class='error'>Input height js</span>");
    result = false;
    return false;
  } else if (!measure_reg.test($("#height").val())) {
    $("#height")
      .focus()
      .after(
        "<span class='error'>The height format is wrong,you can not use more than 4 digits js</span>"
      );
    result = false;
    return false;
  }

  if ($("#width").val() == "" || $("#width").val() == "Input width js") {
    $("#width").focus().after("<span class='error'>Input width js</span>");
    result = false;
    return false;
  } else if (!measure_reg.test($("#width").val())) {
    $("#width")
      .focus()
      .after(
        "<span class='error'>The width format is wrong,you can not use more than 4 digits js</span>"
      );
    result = false;
    return false;
  }

  if ($("#description").val() == "" ||
    $("#description").val() == "Input description js") {
    $("#description")
      .focus()
      .after("<span class='error'>Input description js</span>");
    result = false;
    return false;
  } else if (!desc_reg.test($("#description").val())) {
    $("#description")
      .focus()
      .after(
        "<span class='error'>The description format is wrong,you can not use spaecial characters js</span>"
      );
    result = false;
    return false;
  }

  if (result) {
    var data = {
      "serial_number": serial_number,
      "category": category,
      "trademark": trademark,
      "model": model,
      "date_entry": date_entry,
      "date_exit": date_exit,
      "purchase_price": purchase_price,
      "sale_price": sale_price,
      "provider": provider,
      "weight": weight,
      "height": height,
      "width": width,
      "description": description,
      "status": status,
      "warranty": warranty

    };

    var data_products_JSON = JSON.stringify(data);

    $.post('modules/products/controller/controller_products.class.php', {
          alta_products_json: data_products_JSON
        },

        function(response) {
          console.log(response);
          console.log(response.products);

          if (response.success) {
            window.location.href = response.redirect;
          }

        },
        "json")
      .fail(function(xhr, textStatus, errorThrown) {
        console.log(xhr);
        if (xhr.status === 0) {
          alert('Not connect: Verify Network.');
        } else if (xhr.status == 404) {
          alert('Requested page not found [404]');
        } else if (xhr.status == 500) {
          alert('Internal Server Error [500].');
        } else if (textStatus === 'parsererror') {
          alert('Requested JSON parse failed.');
        } else if (textStatus === 'timeout') {
          alert('Time out error.');
        } else if (textStatus === 'abort') {
          alert('Ajax request aborted.');
        } else {
          alert('Uncaught Error: ' + xhr.responseText);
        }
        if (xhr.responseJSON == 'undefined' && xhr.responseJSON == null)
          xhr.responseJSON = JSON.parse(xhr.responseText);

        if (xhr.responseJSON.error.serial_number)
          $("#serial_number")
          .focus()
          .after("<span  class='error1'>" +
            xhr.responseJSON.error.serial_number + "</span>");
        if (xhr.responseJSON.error.date_entry)
          $("#date_entry")
          .focus()
          .after("<span  class='error1'>" +
            xhr.responseJSON.error.date_entry + "</span>");
        if (xhr.responseJSON.error.date_exit)
          $("#date_exit")
          .focus()
          .after("<span  class='error1'>" +
            xhr.responseJSON.error.date_exit + "</span>");
        if (xhr.responseJSON.error.purchase_price)
          $("#purchase_price")
          .focus()
          .after("<span  class='error1'>" +
            xhr.responseJSON.error.purchase_price + "</span>");
        if (xhr.responseJSON.error.sale_price)
          $("#sale_price")
          .focus()
          .after("<span  class='error1'>" +
            xhr.responseJSON.error.sale_price + "</span>");
        if (xhr.responseJSON.error.provider)
          $("#provider")
          .focus()
          .after("<span  class='error1'>" +
            xhr.responseJSON.error.provider + "</span>");
        if (xhr.responseJSON.error.date_entry)
          $("#date_entry")
          .focus()
          .after("<span  class='error1'>" +
            xhr.responseJSON.error.date_entry + "</span>");
        if (xhr.responseJSON.error.weight)
          $("#weight")
          .focus()
          .after("<span  class='error1'>" +
            xhr.responseJSON.error.weight + "</span>");
        if (xhr.responseJSON.error.height)
          $("#height")
          .focus()
          .after("<span  class='error1'>" +
            xhr.responseJSON.error.height + "</span>");

        if (xhr.responseJSON.error.width)
          $("#width")
          .focus()
          .after("<span  class='error1'>" + xhr.responseJSON.error.width +
            "</span>");
        if (xhr.responseJSON.error.description)
          $("#description")
          .focus()
          .after("<span  class='error1'>" +
            xhr.responseJSON.error.description + "</span>");
        if (xhr.responseJSON.error.warranty)
          $("#e_warranty")
          .focus()
          .after("<span  class='error1'>" +
            xhr.responseJSON.error.warranty + "</span>");

        // errores imagen
        if (xhr.responseJSON.success1) {
          if (xhr.responseJSON.img_avatar !== "/media/default-avatar.png") {}
        } else {
          $("#progress").hide();
          $('.msg').text('').removeClass('msg_ok');
          $('.msg')
            .text('Error Upload image!!')
            .addClass('msg_error')
            .animate({
              'right': '300px'
            }, 300);
        }
      });
  }
}
