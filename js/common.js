jQuery(document).ready(function ($) {
  var os = (function () {
    var ua = navigator.userAgent,
      isWindowsPhone = /(?:Windows Phone)/.test(ua),
      isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
      isAndroid = /(?:Android)/.test(ua),
      isFireFox = /(?:Firefox)/.test(ua),
      isChrome = /(?:Chrome|CriOS)/.test(ua),
      isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
      isPhone = /(?:iPhone)/.test(ua) && !isTablet,
      isPc = !isPhone && !isAndroid && !isSymbian;
    return {
      isTablet: isTablet,
      isPhone: isPhone,
      isAndroid: isAndroid,
      isPc: isPc,
    };
  })();
  if (os.isAndroid || os.isPhone) {
    $("head").append('<meta name="viewport" content="width=375,user-scalable=no">');
  } else if (os.isTablet) {
    $("head").append('<meta name="viewport" content="width=1200,user-scalable=no">');
  } else if (os.isPc) {
    $("head").append('<meta name="viewport" content="width=device-width,user-scalable=no">');
  }
});

/* !isUA -------------------------------------------------------------------- */
var isUA = (function () {
  var ua = navigator.userAgent.toLowerCase();
  indexOfKey = function (key) {
    return ua.indexOf(key) != -1 ? true : false;
  };
  var o = {};
  o.ie = function () {
    return indexOfKey("msie");
  };
  o.fx = function () {
    return indexOfKey("firefox");
  };
  o.chrome = function () {
    return indexOfKey("chrome");
  };
  o.opera = function () {
    return indexOfKey("opera");
  };
  o.android = function () {
    return indexOfKey("android");
  };
  o.ipad = function () {
    return indexOfKey("ipad");
  };
  o.ipod = function () {
    return indexOfKey("ipod");
  };
  o.iphone = function () {
    return indexOfKey("iphone");
  };
  return o;
})();

/* !pageScroll -------------------------------------------------------------- */
jQuery.easing.easeInOutCubic = function (x, t, b, c, d) {
  if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
  return (c / 2) * ((t -= 2) * t * t + 2) + b;
};

$(window).on("load resize", function () {
  $("a.scroll, .scroll a").each(function () {
    $(this)
      .unbind("click")
      .bind("click keypress", function (e) {
        e.preventDefault();
        var target = $(this).attr("href");
        var targetY = $(target).offset().top;
        var parent = isUA.opera() ? (document.compatMode == "BackCompat" ? "body" : "html") : "html,body";
        $(parent).animate({ scrollTop: targetY }, 400);
        $("#jara_lp_navi").removeClass("open");
        $(".jara_lp_btn_menu").removeClass("active");
        return false;
      });
  });
});

$(function () {
  $(".jara_lp_pageTop a").click(function () {
    $("html,body").animate({ scrollTop: 0 }, "slow", "swing");
    return false;
  });

  $(".biggerlink").biggerlink();

  $(window).on("load", function () {
    $(".jara_lp_btn_menu").click(function () {
      if ($(this).hasClass("active")) {
        $("#jara_lp_navi").removeClass("open");
        $(this).removeClass("active");
      } else {
        $("#jara_lp_navi").addClass("open");
        $(this).addClass("active");
      }
    });
  });
  $(window).resize(function () {
    setTimeout(function () {
      if ($(window).width() > 750) {
        $("#jara_lp_navi").removeClass("open");
        $(".jara_lp_btn_menu").removeClass("active");
      }
    }, 500);

    if ($(window).width() > 767) {
      $(".jara_lp_player").find(".info p .hide").removeAttr("style");
    }
  });

  $('.js-toggle').each(function(){
        var $target = $(this).find('.js-toggle-target'),
            $box = $(this).find('.js-toggle-box');
        $target.click(function(){
            if($(this).hasClass('is-active')){
                $(this).removeClass('is-active');
                $box.stop().slideUp(200);
            }else{
                $(this).addClass('is-active');
                $box.stop().slideDown(200);
            }
        });
    }); 

});
const nameList = document.querySelectorAll(".name");
nameList.forEach(nameList => {
  const paragraphs = nameList.querySelectorAll("p");
  if (paragraphs.length >= 2) {
      const secondToLast = paragraphs[paragraphs.length - 2];
      secondToLast.classList.add("special_p");
}
});