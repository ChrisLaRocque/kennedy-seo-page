$("#contact").submit(function (e) {
  e.preventDefault();
  $.ajax({
    url: "https://us-central1-kennedy-static.cloudfunctions.net/emailDaddy",
    type: "get",
    data: $("#contact").serialize(),
    success: function () {
      $("#contact").hide();
      $("#thanks-message").show();
    },
  });
});
