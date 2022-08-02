"use strict";(self.webpackChunkpero_travel_webpack=self.webpackChunkpero_travel_webpack||[]).push([[55],{888:(e,t,n)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)}function o(e,t){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},o(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var i=c(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return a(this,n)}}function a(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return s(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,{dU:()=>p,lH:()=>h,ri:()=>g});var g=function(){function e(t){d(this,e),this.gallery=document.querySelector(t),this.galleryItems=Array.from(this.gallery.children),this.galleryScroll=this.galleryScroll.bind(this),this.pointerUp=this.pointerUp.bind(this),this.cancelDraggable(),this.setGalleryScrollable(),this.galleryItems.forEach((function(e){e.classList.contains("clickable")&&e.addEventListener("click",f)}))}return y(e,[{key:"cancelDraggable",value:function(){this.gallery.ondragstart=function(){return!1}}},{key:"setGalleryScrollable",value:function(){var e=this;this.gallery.addEventListener("pointerdown",(function(){e.pageX=0,document.addEventListener("pointermove",e.galleryScroll),document.addEventListener("pointerup",e.pointerUp)}))}},{key:"galleryScroll",value:function(e){if(0!==this.pageX){this.gallery.scrollLeft=this.gallery.scrollLeft+(this.pageX-e.pageX);var t=new Event("moving",{bubbles:!1});this.gallery.dispatchEvent(t),this.galleryItems.forEach((function(e){e.style.pointerEvents="none"}))}this.pageX=e.pageX}},{key:"pointerUp",value:function(e){this.galleryItems.forEach((function(e){e.style.pointerEvents="all"})),document.removeEventListener("pointermove",this.galleryScroll),document.removeEventListener("pointerup",this.pointerUp)}}]),e}(),h=function(e){i(n,e);var t=l(n);function n(e){var r;return d(this,n),(r=t.call(this,e)).galleryItems=Array.from(r.gallery.children),r.bigVideoClickHandler=r.bigVideoClickHandler.bind(s(r)),r.bigVideoPointerHandler=r.bigVideoPointerHandler.bind(s(r)),r.setItemsClickable(),r}return y(n,[{key:"setItemsClickable",value:function(){var e=this;this.galleryItems.forEach((function(t){t.addEventListener("click",(function(t){1==event.which&&e.setBigVideo(t)}))}))}},{key:"setBigVideo",value:function(e){this.bigVideoContainer=document.getElementById("bigVideoContainer").content.cloneNode(!0).firstElementChild,this.bigVideoLayer=this.bigVideoContainer.querySelector(".video__layer");for(var t=this.bigVideoContainer.querySelectorAll(".video__content")[0],n=Array.from(t.children),r=e.currentTarget.dataset.id;t.firstChild;)t.removeChild(t.firstChild);[].forEach.call(n,(function(e){e.src=e.src.replace("/id.","/".concat(r,".")),t.appendChild(e)})),this.bigVideoContainer.addEventListener("click",this.bigVideoClickHandler),document.body.appendChild(this.bigVideoContainer),this.getBigVideoPlay()}},{key:"bigVideoClickHandler",value:function(e){this.bigVideo=this.bigVideoContainer.querySelector(".video__content"),e.target.closest(".video__layer")?this.bigVideoContainer.classList.contains("playing")?(this.bigVideo.pause(),this.bigVideoContainer.classList.remove("playing"),this.bigVideoContainer.classList.add("paused")):(this.bigVideo.play(),this.bigVideoContainer.classList.remove("paused"),this.bigVideoContainer.classList.add("playing")):document.body.removeChild(this.bigVideoContainer)}},{key:"bigVideoPointerHandler",value:function(){var e=this;if(!this.bigVideoContainer.classList.contains("pointerMove")&&!this.bigVideoContainer.classList.contains("paused")){this.bigVideoContainer.classList.add("pointerMove");var t=setTimeout((function(){e.bigVideoContainer.classList.remove("pointerMove"),clearTimeout(t)}),700)}}},{key:"getBigVideoPlay",value:function(){this.bigVideo=this.bigVideoContainer.querySelector(".video__content"),this.bigVideo.play(),this.bigVideoContainer.classList.add("playing"),this.bigVideoLayer.addEventListener("pointermove",this.bigVideoPointerHandler)}}]),n}(g),p=function(e){i(n,e);var t=l(n);function n(e){var r;return d(this,n),(r=t.call(this,e)).galleryItemsLinks=Array.from(r.gallery.querySelectorAll(".popularTrip__link")),r.createControls(e),r.gallery.after(r.controlsContainer),r.btnPrev=r.gallery.parentNode.querySelector(".control__btn--prev"),r.btnNext=r.gallery.parentNode.querySelector(".control__btn--next"),r.progressbarPoiner=r.gallery.parentNode.querySelector(".control__progressbar__pointer"),r.setControlsState(),[r.btnPrev,r.btnNext].forEach((function(e){e.addEventListener("click",(function(e){r.btnsClickHandler(e)}))})),r.gallery.addEventListener("moving",(function(){return r.setControlsState()})),r}return y(n,[{key:"createControls",value:function(e){var t="http://www.w3.org/2000/svg",n="http://www.w3.org/1999/xlink";this.controlsContainer=document.createElement("div"),this.controlsContainer.classList.add("d-flex","align-center","gallery__controls","".concat(e.slice(1),"__controls"));var r=document.createElement("div");r.classList.add("gallery__controls__btns");var i=document.createElementNS(t,"svg");i.classList.add("gallery__controls__btns__btn","control__btn","control__btn--prev");var o=document.createElementNS(t,"use");o.setAttributeNS(n,"href","#prev"),i.append(o);var l=document.createElementNS(t,"svg");l.classList.add("gallery__controls__btns__btn","control__btn","control__btn--next");var a=document.createElementNS(t,"use");a.setAttributeNS(n,"href","#next"),l.append(a),r.append(i,l);var s=document.createElement("div");s.classList.add("gallery__controls__progressbar","control__progressbar");var c=document.createElement("div");c.classList.add("control__progressbar__pointer"),s.append(c),this.controlsContainer.append(r,s)}},{key:"setControlsState",value:function(){0==this.gallery.scrollLeft?(this.btnPrev.classList.remove("control__btn--active"),this.btnNext.classList.add("control__btn--active")):this.gallery.scrollWidth-this.gallery.scrollLeft==this.gallery.offsetWidth?(this.btnPrev.classList.add("control__btn--active"),this.btnNext.classList.remove("control__btn--active")):(this.btnPrev.classList.add("control__btn--active"),this.btnNext.classList.add("control__btn--active")),this.progressbarPoiner.style.width=(this.gallery.offsetWidth+this.gallery.scrollLeft)/this.gallery.scrollWidth*100+"%"}},{key:"btnsClickHandler",value:function(e){if(e.target.classList.contains("control__btn--active")){this.galleryItemWidth=parseFloat(window.getComputedStyle(this.gallery.firstElementChild).width),this.galleryItemMargin=parseFloat(window.getComputedStyle(this.gallery.firstElementChild).marginRight);var t=e.target.classList.contains("control__btn--prev")?-this.galleryItemWidth-this.galleryItemMargin:this.galleryItemWidth+this.galleryItemMargin;this.animateMoving(t)}}},{key:"animateMoving",value:function(e){var t=this,n=this.gallery.scrollLeft,r=performance.now();requestAnimationFrame((function i(o){var l=(o-r)/400;l>1&&(l=1),l<0?requestAnimationFrame(i):(!function(r){t.gallery.scrollLeft=n+e*r,t.setControlsState()}(l),l<1&&requestAnimationFrame(i))}))}}]),n}(g);function f(e){var t=window.scrollY,n=e.target.querySelector("img"),r=n.dataset.name,i=n.cloneNode(),o=n.src.split("/");i.src="img/".concat(o[o.length-2],"/bigImg/").concat(r,".webp"),i.className="bigImg";var l=document.createElement("div");function a(e){if(!e.target.closest(".bigImgWrap")){document.body.removeChild(i),document.body.removeChild(l);var t=document.body.style.top;document.body.style.position="",document.body.style.top="",window.scrollTo(0,-1*parseInt(t||"0")),document.removeEventListener("click",a)}}l.classList.add("layer"),document.body.style.position="fixed",document.body.style.top="-".concat(t,"px"),document.body.appendChild(l),document.body.appendChild(i),setTimeout((function(){return document.addEventListener("click",a)}),10)}}}]);
//# sourceMappingURL=common~gallery.f138cd2178434d61295c.js.map