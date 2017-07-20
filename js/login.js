(function () {
    $("#login-btn").click(function(){
        var id = $("#id").val();
        var pw = $("#password").val();

        if (id == "admin" && pw == "admin"){
            window.location.href = "index.html";
        } else{
            $("#err").html("Incorrect credentials");
        }
    });
}());