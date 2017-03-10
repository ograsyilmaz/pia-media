

function showAlert(divid,mesaj) {
    var ikincidiv= divid+"2";
    if($('#'+divid).find('div'+'#'+ikincidiv).length==0){
        $('#'+divid).append('<div class="alert" id="'+ikincidiv+'" ><a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a><img src="img/commed.png" alt=""> '+mesaj+'</div>');

    }
    $(divid).css("display", "");
}