
var isMob = false;
$(document).ready(function() {
  isMob = isMobile();

  sideBarScroller($("#sidebar"));//sidebar
  sideBarScroller($("sideBarButton"));//sidear button

  $(window).resize(function(){
    isMob = isMobile();
    if(isMob)
    toMob();
    else
    toDesktop();
  });

  sideBarToggler();

});

var toMob = function(){
  var sidebar = $("#sidebar");
  var side = $(".side");

  sidebar.hide();
  side.hide();

};

var toDesktop = function(){
  var sidebar = $("#sidebar");
  var side = $(".side");

  sidebar.show();
  side.show();

};

var sideBarToggler = function() {
  //var btn = document.getElementsByName("SideBarButton")[0];
  if(isMob)
    toMob();
  else
      toDesktop();

  var btn = $("#sideBarButton")
  //console.log(btn);
  var sidebar = $("#sidebar");
  var side = $(".side");
  var content = $("#content");

  btn.click(function() {
    console.log("click");
    sidebar.toggle();
    side.toggle();
    if(isMob)
      content.toggle();
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

  var isMobile = function() {
    var width = $(window).width();
    var height = $(window).height();
    var ratio = width/height;

      console.log("isMobile: ");
    if(ratio < 1)
    {
      console.log("true");
      return true;
    }
    else {
      console.log("false");
      return false;
    }
  };

  var createBlogPostCard = function(blogpost) {
    var content = $("#content");
    //console.log("Creating Card...");
    var intro = "<div class='gen'><div class='card blogpost'><div class='card-body'>";
    var title = "<h4>"+blogpost.Title+"</h4>";
    var post = "<p>"+blogpost.Post+"</p>";
    var footer = "</div><div class='card-footer text-muted'>"+blogpost['Date Modified']+"</div></div></div>";
    
    content.append(intro+title+post+footer);
  };
