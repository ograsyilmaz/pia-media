


function showAlert(divid,icdivid,mesaj) {
    if($('#'+divid).find('div'+'#'+icdivid).length==0){
        $('#'+divid).append('<div class="alert" id="'+icdivid+'" ><a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a><img src="img/commed.png" alt="">'+mesaj+'</div>');

}
$(divid).css("display", "");
}