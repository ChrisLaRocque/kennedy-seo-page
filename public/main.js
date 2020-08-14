document
  .getElementById("form-submit")
  .addEventListener("click", function (event) {
    var url =
      "https://us-central1-kennedy-static.cloudfunctions.net/emailDaddy?";
    var contact = document.getElementById("contact");
    var thanks = document.getElementById("thanks-message");
    var elements = contact.elements;
    for (var i = 0; i < elements.length - 1; i++) {
      var item = elements.item(i);
      let strang = item.name + "=" + item.value + "&";
      url += strang;
    }
    const Http = new XMLHttpRequest();

    Http.open("POST", url, true);
    Http.send();

    Http.onreadystatechange = (e) => {
      if (Http.readyState == XMLHttpRequest.DONE) {
        contact.style.display = "none";
        thanks.style.display = "block";
      }
    };
  });
