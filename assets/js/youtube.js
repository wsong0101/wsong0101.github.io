$(function() {
  $('.youtube').each(function(){
    console.log("aaa")
    width = 560
    height = 315
    $(this).append("<iframe width=\""+width+"\" height=\""+height+"\" src=\"https://www.youtube.com/embed/"+$(this).attr('id')+"\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>");
  });
});