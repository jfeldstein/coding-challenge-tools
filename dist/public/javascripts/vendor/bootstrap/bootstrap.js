if(!jQuery)throw new Error("Bootstrap requires jQuery");+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var o in e)if(void 0!==t.style[o])return{end:e[o]}}t.fn.emulateTransitionEnd=function(e){var o=!1,i=this;t(this).one(t.support.transition.end,function(){o=!0});var n=function(){o||t(i).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e()})}(window.jQuery),+function(t){"use strict";var e='[data-dismiss="alert"]',o=function(o){t(o).on("click",e,this.close)};o.prototype.close=function(e){function o(){s.trigger("closed.bs.alert").remove()}var i=t(this),n=i.attr("data-target");n||(n=i.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,""));var s=t(n);e&&e.preventDefault(),s.length||(s=i.hasClass("alert")?i:i.parent()),s.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one(t.support.transition.end,o).emulateTransitionEnd(150):o())};var i=t.fn.alert;t.fn.alert=function(e){return this.each(function(){var i=t(this),n=i.data("bs.alert");n||i.data("bs.alert",n=new o(this)),"string"==typeof e&&n[e].call(i)})},t.fn.alert.Constructor=o,t.fn.alert.noConflict=function(){return t.fn.alert=i,this},t(document).on("click.bs.alert.data-api",e,o.prototype.close)}(window.jQuery),+function(t){"use strict";var e=function(o,i){this.$element=t(o),this.options=t.extend({},e.DEFAULTS,i)};e.DEFAULTS={loadingText:"loading..."},e.prototype.setState=function(t){var e="disabled",o=this.$element,i=o.is("input")?"val":"html",n=o.data();t+="Text",n.resetText||o.data("resetText",o[i]()),o[i](n[t]||this.options[t]),setTimeout(function(){"loadingText"==t?o.addClass(e).attr(e,e):o.removeClass(e).removeAttr(e)},0)},e.prototype.toggle=function(){var t=this.$element.closest('[data-toggle="buttons"]');if(t.length){var e=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");"radio"===e.prop("type")&&t.find(".active").removeClass("active")}this.$element.toggleClass("active")};var o=t.fn.button;t.fn.button=function(o){return this.each(function(){var i=t(this),n=i.data("bs.button"),s="object"==typeof o&&o;n||i.data("bs.button",n=new e(this,s)),"toggle"==o?n.toggle():o&&n.setState(o)})},t.fn.button.Constructor=e,t.fn.button.noConflict=function(){return t.fn.button=o,this},t(document).on("click.bs.button.data-api","[data-toggle^=button]",function(e){var o=t(e.target);o.hasClass("btn")||(o=o.closest(".btn")),o.button("toggle"),e.preventDefault()})}(window.jQuery),+function(t){"use strict";var e=function(e,o){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=o,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",t.proxy(this.pause,this)).on("mouseleave",t.proxy(this.cycle,this))};e.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},e.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},e.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},e.prototype.to=function(e){var o=this,i=this.getActiveIndex();return e>this.$items.length-1||0>e?void 0:this.sliding?this.$element.one("slid",function(){o.to(e)}):i==e?this.pause().cycle():this.slide(e>i?"next":"prev",t(this.$items[e]))},e.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition.end&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},e.prototype.next=function(){return this.sliding?void 0:this.slide("next")},e.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},e.prototype.slide=function(e,o){var i=this.$element.find(".item.active"),n=o||i[e](),s=this.interval,r="next"==e?"left":"right",a="next"==e?"first":"last",l=this;if(!n.length){if(!this.options.wrap)return;n=this.$element.find(".item")[a]()}this.sliding=!0,s&&this.pause();var h=t.Event("slide.bs.carousel",{relatedTarget:n[0],direction:r});if(!n.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var e=t(l.$indicators.children()[l.getActiveIndex()]);e&&e.addClass("active")})),t.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(h),h.isDefaultPrevented())return;n.addClass(e),n[0].offsetWidth,i.addClass(r),n.addClass(r),i.one(t.support.transition.end,function(){n.removeClass([e,r].join(" ")).addClass("active"),i.removeClass(["active",r].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(h),h.isDefaultPrevented())return;i.removeClass("active"),n.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}};var o=t.fn.carousel;t.fn.carousel=function(o){return this.each(function(){var i=t(this),n=i.data("bs.carousel"),s=t.extend({},e.DEFAULTS,i.data(),"object"==typeof o&&o),r="string"==typeof o?o:s.slide;n||i.data("bs.carousel",n=new e(this,s)),"number"==typeof o?n.to(o):r?n[r]():s.interval&&n.pause().cycle()})},t.fn.carousel.Constructor=e,t.fn.carousel.noConflict=function(){return t.fn.carousel=o,this},t(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(e){var o,i=t(this),n=t(i.attr("data-target")||(o=i.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,"")),s=t.extend({},n.data(),i.data()),r=i.attr("data-slide-to");r&&(s.interval=!1),n.carousel(s),(r=i.attr("data-slide-to"))&&n.data("bs.carousel").to(r),e.preventDefault()}),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var e=t(this);e.carousel(e.data())})})}(window.jQuery),+function(t){"use strict";var e=function(o,i){this.$element=t(o),this.options=t.extend({},e.DEFAULTS,i),this.transitioning=null,this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()};e.DEFAULTS={toggle:!0},e.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},e.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e=t.Event("show.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var o=this.$parent&&this.$parent.find("> .panel > .in");if(o&&o.length){var i=o.data("bs.collapse");if(i&&i.transitioning)return;o.collapse("hide"),i||o.data("bs.collapse",null)}var n=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[n](0),this.transitioning=1;var s=function(){this.$element.removeClass("collapsing").addClass("in")[n]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return s.call(this);var r=t.camelCase(["scroll",n].join("-"));this.$element.one(t.support.transition.end,t.proxy(s,this)).emulateTransitionEnd(350)[n](this.$element[0][r])}}},e.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var o=this.dimension();this.$element[o](this.$element[o]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return t.support.transition?(this.$element[o](0).one(t.support.transition.end,t.proxy(i,this)).emulateTransitionEnd(350),void 0):i.call(this)}}},e.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var o=t.fn.collapse;t.fn.collapse=function(o){return this.each(function(){var i=t(this),n=i.data("bs.collapse"),s=t.extend({},e.DEFAULTS,i.data(),"object"==typeof o&&o);n||i.data("bs.collapse",n=new e(this,s)),"string"==typeof o&&n[o]()})},t.fn.collapse.Constructor=e,t.fn.collapse.noConflict=function(){return t.fn.collapse=o,this},t(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(e){var o,i=t(this),n=i.attr("data-target")||e.preventDefault()||(o=i.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,""),s=t(n),r=s.data("bs.collapse"),a=r?"toggle":i.data(),l=i.attr("data-parent"),h=l&&t(l);r&&r.transitioning||(h&&h.find('[data-toggle=collapse][data-parent="'+l+'"]').not(i).addClass("collapsed"),i[s.hasClass("in")?"addClass":"removeClass"]("collapsed")),s.collapse(a)})}(window.jQuery),+function(t){"use strict";function e(){t(i).remove(),t(n).each(function(e){var i=o(t(this));i.hasClass("open")&&(i.trigger(e=t.Event("hide.bs.dropdown")),e.isDefaultPrevented()||i.removeClass("open").trigger("hidden.bs.dropdown"))})}function o(e){var o=e.attr("data-target");o||(o=e.attr("href"),o=o&&/#/.test(o)&&o.replace(/.*(?=#[^\s]*$)/,""));var i=o&&t(o);return i&&i.length?i:e.parent()}var i=".dropdown-backdrop",n="[data-toggle=dropdown]",s=function(e){t(e).on("click.bs.dropdown",this.toggle)};s.prototype.toggle=function(i){var n=t(this);if(!n.is(".disabled, :disabled")){var s=o(n),r=s.hasClass("open");if(e(),!r){if("ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e),s.trigger(i=t.Event("show.bs.dropdown")),i.isDefaultPrevented())return;s.toggleClass("open").trigger("shown.bs.dropdown"),n.focus()}return!1}},s.prototype.keydown=function(e){if(/(38|40|27)/.test(e.keyCode)){var i=t(this);if(e.preventDefault(),e.stopPropagation(),!i.is(".disabled, :disabled")){var s=o(i),r=s.hasClass("open");if(!r||r&&27==e.keyCode)return 27==e.which&&s.find(n).focus(),i.click();var a=t("[role=menu] li:not(.divider):visible a",s);if(a.length){var l=a.index(a.filter(":focus"));38==e.keyCode&&l>0&&l--,40==e.keyCode&&l<a.length-1&&l++,~l||(l=0),a.eq(l).focus()}}}};var r=t.fn.dropdown;t.fn.dropdown=function(e){return this.each(function(){var o=t(this),i=o.data("dropdown");i||o.data("dropdown",i=new s(this)),"string"==typeof e&&i[e].call(o)})},t.fn.dropdown.Constructor=s,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",n,s.prototype.toggle).on("keydown.bs.dropdown.data-api",n+", [role=menu]",s.prototype.keydown)}(window.jQuery),+function(t){"use strict";var e=function(e,o){this.options=o,this.$element=t(e),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};e.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},e.prototype.toggle=function(t){return this[this.isShown?"hide":"show"](t)},e.prototype.show=function(e){var o=this,i=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(i),this.isShown||i.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.backdrop(function(){var i=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(document.body),o.$element.show(),i&&o.$element[0].offsetWidth,o.$element.addClass("in").attr("aria-hidden",!1),o.enforceFocus();var n=t.Event("shown.bs.modal",{relatedTarget:e});i?o.$element.find(".modal-dialog").one(t.support.transition.end,function(){o.$element.focus().trigger(n)}).emulateTransitionEnd(300):o.$element.focus().trigger(n)}))},e.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one(t.support.transition.end,t.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},e.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.focus()},this))},e.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},e.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.removeBackdrop(),t.$element.trigger("hidden.bs.modal")})},e.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},e.prototype.backdrop=function(e){var o=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=t.support.transition&&o;if(this.$backdrop=t('<div class="modal-backdrop '+o+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",t.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;i?this.$backdrop.one(t.support.transition.end,e).emulateTransitionEnd(150):e()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(t.support.transition.end,e).emulateTransitionEnd(150):e()):e&&e()};var o=t.fn.modal;t.fn.modal=function(o,i){return this.each(function(){var n=t(this),s=n.data("bs.modal"),r=t.extend({},e.DEFAULTS,n.data(),"object"==typeof o&&o);s||n.data("bs.modal",s=new e(this,r)),"string"==typeof o?s[o](i):r.show&&s.show(i)})},t.fn.modal.Constructor=e,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(e){var o=t(this),i=o.attr("href"),n=t(o.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),s=n.data("modal")?"toggle":t.extend({remote:!/#/.test(i)&&i},n.data(),o.data());e.preventDefault(),n.modal(s,this).one("hide",function(){o.is(":visible")&&o.focus()})}),t(document).on("show.bs.modal",".modal",function(){t(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){t(document.body).removeClass("modal-open")})}(window.jQuery),+function(t){"use strict";var e=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)};e.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.prototype.init=function(e,o,i){this.enabled=!0,this.type=e,this.$element=t(o),this.options=this.getOptions(i);for(var n=this.options.trigger.split(" "),s=n.length;s--;){var r=n[s];if("click"==r)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=r){var a="hover"==r?"mouseenter":"focus",l="hover"==r?"mouseleave":"blur";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},e.prototype.getDelegateOptions=function(){var e={},o=this.getDefaults();return this._options&&t.each(this._options,function(t,i){o[t]!=i&&(e[t]=i)}),e},e.prototype.enter=function(e){var o=e instanceof this.constructor?e:t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(o.timeout),o.hoverState="in",o.options.delay&&o.options.delay.show?(o.timeout=setTimeout(function(){"in"==o.hoverState&&o.show()},o.options.delay.show),void 0):o.show()},e.prototype.leave=function(e){var o=e instanceof this.constructor?e:t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(o.timeout),o.hoverState="out",o.options.delay&&o.options.delay.hide?(o.timeout=setTimeout(function(){"out"==o.hoverState&&o.hide()},o.options.delay.hide),void 0):o.hide()},e.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(e),e.isDefaultPrevented())return;var o=this.tip();this.setContent(),this.options.animation&&o.addClass("fade");var i="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,n=/\s?auto?\s?/i,s=n.test(i);s&&(i=i.replace(n,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(i),this.options.container?o.appendTo(this.options.container):o.insertAfter(this.$element);var r=this.getPosition(),a=o[0].offsetWidth,l=o[0].offsetHeight;if(s){var h=this.$element.parent(),p=i,d=document.documentElement.scrollTop||document.body.scrollTop,c="body"==this.options.container?window.innerWidth:h.outerWidth(),f="body"==this.options.container?window.innerHeight:h.outerHeight(),u="body"==this.options.container?0:h.offset().left;i="bottom"==i&&r.top+r.height+l-d>f?"top":"top"==i&&r.top-d-l<0?"bottom":"right"==i&&r.right+a>c?"left":"left"==i&&r.left-a<u?"right":i,o.removeClass(p).addClass(i)}var v=this.getCalculatedOffset(i,r,a,l);this.applyPlacement(v,i),this.$element.trigger("shown.bs."+this.type)}},e.prototype.applyPlacement=function(t,e){var o,i=this.tip(),n=i[0].offsetWidth,s=i[0].offsetHeight,r=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(r)&&(r=0),isNaN(a)&&(a=0),t.top=t.top+r,t.left=t.left+a,i.offset(t).addClass("in");var l=i[0].offsetWidth,h=i[0].offsetHeight;if("top"==e&&h!=s&&(o=!0,t.top=t.top+s-h),/bottom|top/.test(e)){var p=0;t.left<0&&(p=-2*t.left,t.left=0,i.offset(t),l=i[0].offsetWidth,h=i[0].offsetHeight),this.replaceArrow(p-n+l,l,"left")}else this.replaceArrow(h-s,h,"top");o&&i.offset(t)},e.prototype.replaceArrow=function(t,e,o){this.arrow().css(o,t?50*(1-t/e)+"%":"")},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},e.prototype.hide=function(){function e(){"in"!=o.hoverState&&i.detach()}var o=this,i=this.tip(),n=t.Event("hide.bs."+this.type);return this.$element.trigger(n),n.isDefaultPrevented()?void 0:(i.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?i.one(t.support.transition.end,e).emulateTransitionEnd(150):e(),this.$element.trigger("hidden.bs."+this.type),this)},e.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},e.prototype.hasContent=function(){return this.getTitle()},e.prototype.getPosition=function(){var e=this.$element[0];return t.extend({},"function"==typeof e.getBoundingClientRect?e.getBoundingClientRect():{width:e.offsetWidth,height:e.offsetHeight},this.$element.offset())},e.prototype.getCalculatedOffset=function(t,e,o,i){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-o/2}:"top"==t?{top:e.top-i,left:e.left+e.width/2-o/2}:"left"==t?{top:e.top+e.height/2-i/2,left:e.left-o}:{top:e.top+e.height/2-i/2,left:e.left+e.width}},e.prototype.getTitle=function(){var t,e=this.$element,o=this.options;return t=e.attr("data-original-title")||("function"==typeof o.title?o.title.call(e[0]):o.title)},e.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},e.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},e.prototype.enable=function(){this.enabled=!0},e.prototype.disable=function(){this.enabled=!1},e.prototype.toggleEnabled=function(){this.enabled=!this.enabled},e.prototype.toggle=function(e){var o=e?t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;o.tip().hasClass("in")?o.leave(o):o.enter(o)},e.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var o=t.fn.tooltip;t.fn.tooltip=function(o){return this.each(function(){var i=t(this),n=i.data("bs.tooltip"),s="object"==typeof o&&o;n||i.data("bs.tooltip",n=new e(this,s)),"string"==typeof o&&n[o]()})},t.fn.tooltip.Constructor=e,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(window.jQuery),+function(t){"use strict";var e=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");e.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),e.prototype.constructor=e,e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),o=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content")[this.options.html?"html":"text"](o),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},e.prototype.hasContent=function(){return this.getTitle()||this.getContent()},e.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},e.prototype.tip=function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip};var o=t.fn.popover;t.fn.popover=function(o){return this.each(function(){var i=t(this),n=i.data("bs.popover"),s="object"==typeof o&&o;n||i.data("bs.popover",n=new e(this,s)),"string"==typeof o&&n[o]()})},t.fn.popover.Constructor=e,t.fn.popover.noConflict=function(){return t.fn.popover=o,this}}(window.jQuery),+function(t){"use strict";function e(o,i){var n,s=t.proxy(this.process,this);this.$element=t(o).is("body")?t(window):t(o),this.$body=t("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",s),this.options=t.extend({},e.DEFAULTS,i),this.selector=(this.options.target||(n=t(o).attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=t([]),this.targets=t([]),this.activeTarget=null,this.refresh(),this.process()}e.DEFAULTS={offset:10},e.prototype.refresh=function(){var e=this.$element[0]==window?"offset":"position";this.offsets=t([]),this.targets=t([]);var o=this;this.$body.find(this.selector).map(function(){var i=t(this),n=i.data("target")||i.attr("href"),s=/^#\w/.test(n)&&t(n);return s&&s.length&&[[s[e]().top+(!t.isWindow(o.$scrollElement.get(0))&&o.$scrollElement.scrollTop()),n]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){o.offsets.push(this[0]),o.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,o=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,i=o-this.$scrollElement.height(),n=this.offsets,s=this.targets,r=this.activeTarget;if(e>=i)return r!=(t=s.last()[0])&&this.activate(t);for(t=n.length;t--;)r!=s[t]&&e>=n[t]&&(!n[t+1]||e<=n[t+1])&&this.activate(s[t])},e.prototype.activate=function(e){this.activeTarget=e,t(this.selector).parents(".active").removeClass("active");var o=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',i=t(o).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate")};var o=t.fn.scrollspy;t.fn.scrollspy=function(o){return this.each(function(){var i=t(this),n=i.data("bs.scrollspy"),s="object"==typeof o&&o;n||i.data("bs.scrollspy",n=new e(this,s)),"string"==typeof o&&n[o]()})},t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=o,this},t(window).on("load",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);e.scrollspy(e.data())})})}(window.jQuery),+function(t){"use strict";var e=function(e){this.element=t(e)};e.prototype.show=function(){var e=this.element,o=e.closest("ul:not(.dropdown-menu)"),i=e.attr("data-target");if(i||(i=e.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=o.find(".active:last a")[0],s=t.Event("show.bs.tab",{relatedTarget:n});if(e.trigger(s),!s.isDefaultPrevented()){var r=t(i);this.activate(e.parent("li"),o),this.activate(r,r.parent(),function(){e.trigger({type:"shown.bs.tab",relatedTarget:n})})}}},e.prototype.activate=function(e,o,i){function n(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),i&&i()}var s=o.find("> .active"),r=i&&t.support.transition&&s.hasClass("fade");r?s.one(t.support.transition.end,n).emulateTransitionEnd(150):n(),s.removeClass("in")};var o=t.fn.tab;t.fn.tab=function(o){return this.each(function(){var i=t(this),n=i.data("bs.tab");n||i.data("bs.tab",n=new e(this)),"string"==typeof o&&n[o]()})},t.fn.tab.Constructor=e,t.fn.tab.noConflict=function(){return t.fn.tab=o,this},t(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault(),t(this).tab("show")})}(window.jQuery),+function(t){"use strict";var e=function(o,i){this.options=t.extend({},e.DEFAULTS,i),this.$window=t(window).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(o),this.affixed=this.unpin=null,this.checkPosition()};e.RESET="affix affix-top affix-bottom",e.DEFAULTS={offset:0},e.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var o=t(document).height(),i=this.$window.scrollTop(),n=this.$element.offset(),s=this.options.offset,r=s.top,a=s.bottom;"object"!=typeof s&&(a=r=s),"function"==typeof r&&(r=s.top()),"function"==typeof a&&(a=s.bottom());var l=null!=this.unpin&&i+this.unpin<=n.top?!1:null!=a&&n.top+this.$element.height()>=o-a?"bottom":null!=r&&r>=i?"top":!1;this.affixed!==l&&(this.unpin&&this.$element.css("top",""),this.affixed=l,this.unpin="bottom"==l?n.top-i:null,this.$element.removeClass(e.RESET).addClass("affix"+(l?"-"+l:"")),"bottom"==l&&this.$element.offset({top:document.body.offsetHeight-a-this.$element.height()}))}};var o=t.fn.affix;t.fn.affix=function(o){return this.each(function(){var i=t(this),n=i.data("bs.affix"),s="object"==typeof o&&o;n||i.data("bs.affix",n=new e(this,s)),"string"==typeof o&&n[o]()})},t.fn.affix.Constructor=e,t.fn.affix.noConflict=function(){return t.fn.affix=o,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this),o=e.data();o.offset=o.offset||{},o.offsetBottom&&(o.offset.bottom=o.offsetBottom),o.offsetTop&&(o.offset.top=o.offsetTop),e.affix(o)})})}(window.jQuery);