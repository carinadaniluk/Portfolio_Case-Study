$(".themeChange").on("click", function(){
    if ($(this).hasClass("light-mode")) {
        $("#stylesheet").attr("href", "./css/style.css")
    }
    else if ($(this).hasClass("dark-mode")) {
        $("#stylesheet").attr("href", "./css/darkmode.css")
    }
})