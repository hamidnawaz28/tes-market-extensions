$("#inlineattribution").on("click", function () {
  contactUsFunction();
})

$(document).on('keydown', function (e) {
  if (e.keyCode == 13) {
    var txt = $('#query_body').val();
    if (txt == '') {
      e.preventDefault();
    } else {
      $(this).parents("form")[0].submit();
    }
  }
})

function contactUsFunction() {
  if (document.getElementById('inlinecontactus').style.display === 'block') {
    document.getElementById('inlinecontactus').style.display = 'none';
  } else {
    document.getElementById('inlinecontactus').style.display = 'block';
  }
}

$(".search-submit-button").on("click", function () {
  var txt = $('#query_body').val();
  //alert(txt);
  if (txt == '') {
  }
  else {
    $(this).parents("form")[0].submit();
  }
})

$(document).on('keydown', function (e) {
  if (e.keyCode == 13) {
    var txt = $('#query_body').val();
    if (txt == '') {
      e.preventDefault();
    } else {
      $(this).parents("form")[0].submit();
    }
  }
})



function displayMessage(evt) {
  if (evt.data == "firstTime") {

    var os = getOperatingSystem();

    var kk = true;
    var tt = 3000;

    if (os == "ios") {
      kk = false;
      tt = 1;
    }

    if (kk) {
      $("#keepIt").show();
    }

    setTimeout(function () {
      $("#keepIt").hide();
    }, tt);
  }
}

if (window.addEventListener) {
  window.addEventListener("message", displayMessage, false);
}
else {
  window.attachEvent("onmessage", displayMessage);
}