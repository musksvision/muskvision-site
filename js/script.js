$(".navbar-nav li a").click(function(){
    $(".navbar-nav li a").removeClass("active");
    $(this).addClass("active");
  });

function copyToClipboard() {

    var copyText = document.getElementById("mv-contract-address");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
    console.log("COPIED " + copyText.value);
}


function copyText() {
    var $temp = $("<input>");
    var $url = $("#mv-contract-address").text().replace("                       ", "");
    $("body").append($temp);
    $temp.val($url).select();
    document.execCommand("copy");
    $temp.remove();
    $('#mv-copy-button').text('Copied');
} 
