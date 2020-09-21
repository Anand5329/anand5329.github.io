$(document).ready(function(){
  $(document).scroll(function(){
    var doc = $(document);
    var win = $(window);

    var sidebar = $("#sidebar");
    var nav = $(".navbar");
    var top = $(".top");
    var topHeight = top.outerHeight();
    var navHeight = nav.outerHeight();

    var limit = doc.height() - navHeight - win.height();
    var scroll = doc.scrollTop();

    //console.log(scroll+" "+ topHeight);
    if(scroll > topHeight)
    {
      sidebar.addClass("fixed");
      sidebar.removeClass("relative");
      sidebar.css("top", (navHeight)+"px");
      console.log("fix");
    }
    if(scroll <= topHeight)
    {
      sidebar.addClass("relative");
      sidebar.removeClass("fixed");
      sidebar.css("top", "inherit");
      console.log("rel");
    }
  });

});
