document
  .getElementById("form-submit")
  .addEventListener("click", function (event) {
    var url = "http://localhost:5001/kennedy-static/us-central1/emailDaddy?";
    var contact = document.getElementById("contact");
    var elements = document.getElementById("contact").elements;
    for (var i = 0; i < elements.length - 1; i++) {
      var item = elements.item(i);
      let strang = item.name + "=" + item.value + "&";
      url += strang;
      console.log(url);
    }
    const Http = new XMLHttpRequest();

    Http.open("POST", url, true);
    Http.send();

    // Http.onreadystatechange = (e) => {
    //   console.log(Http.responseText);
    // };
  });
