$(document).ready(function() {
  sideBarScroller($("#sidebar"));//sidebar
  sideBarScroller($(".btn.flush"));//sidear button
  sideBarToggler();
});

var sideBarToggler = function() {
  //var btn = document.getElementsByName("SideBarButton")[0];
  var btn = $(".btn.flush")
  //console.log(btn);
  var sidebar = $("#sidebar");
  var side = $(".side");
  btn.click(function() {
    sidebar.toggle();
    side.toggle();
    //console.log("toggle");
  });
};

var sideBarScroller = function(sidebar) {
  $(document).scroll(function() {
    var doc = $(document);
    var win = $(window);

    var nav = $(".navbar");
    var top = $(".top");
    var topHeight = top.outerHeight();
    var navHeight = nav.outerHeight();

    var limit = doc.height() - navHeight - win.height();
    var scroll = doc.scrollTop();

    //console.log(scroll+" "+ topHeight);
    if (scroll > topHeight) {
      sidebar.addClass("fixed");
      sidebar.removeClass("relative");
      sidebar.css("top", (navHeight) + "px");
      //console.log("fix");
    }
    if (scroll <= topHeight) {
      sidebar.addClass("relative");
      sidebar.removeClass("fixed");
      sidebar.css("top", "inherit");
      //console.log("rel");
    }
  });
};
