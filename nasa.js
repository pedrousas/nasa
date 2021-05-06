$('#enviar').bind('click', () => { evento() })
$('h3').css("display", "none")
$('h3').css("width", "90%")
$('h3').css("fontSize", "12px")
$('h3').css("margin", "10px 0 0 55px")
$('h1').css("display", "none")



function evento() {
    var inputData = $("#datainput")[0]

    $('input').css("margin", "10px 30px 0 0")
    $('input').css("transition", "2s")




    $.ajax({
        url: ("https://api.nasa.gov/planetary/apod?api_key=w8lyCs61YBB0HJip8HbLU0wnTR1WGQdQZRYNHnT9" + "&date=" + inputData.value),
        success: function(result) {
            getPic(result)
        }
    });
}


function getPic(pic) {
    var img = pic.url
    var media = JSON.stringify(pic.media_type)


    $('h1').css("display", "block")
    $('h1').html(pic.title)

    $('h3').css("display", "block")
    $('h3').html(pic.explanation)

    if (media === "\"image\"") {

        $("iframe").css("display", "none")
        $("img").attr("src", img)
        $("img").css("display", "block")
        $("img").css("margin", "5px")
    } else {

        $("img").css("display", "none")
        $("iframe").attr("src", img);
        $("iframe").css("width", "500px")
        $("iframe").css("height", "350px")
        $("iframe").css("display", "block")
        $("iframe").css("marginTop", "22px")

    }
}