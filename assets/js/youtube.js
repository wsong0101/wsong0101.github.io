$(function() {
  $('.youtube').each(function(){
    width = 560
    height = 315
    $(this).append("<div style=\"position: relative; height:0; padding-bottom: 56.25%; margin: 40px 0px;\"><iframe width=\""+width+"\" height=\""+height+"\" src=\"https://www.youtube.com/embed/"+$(this).attr('id')+"?rel=0\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen style=\"position: absolute; width:100%; height:100%;\"></iframe></div>");
  });
});