
$(function () {

    $(window).on('load', function () {
        $('.page-loader').delay('500').fadeOut(1000);
    });

    $(document).ready(function () {

        $(document).on('click', '.icon-menu', function () {
            $('.responsive-sidebar-menu').addClass('active');
        });
        $(document).on('click', '.responsive-sidebar-menu .overlay', function () {
            $('.responsive-sidebar-menu').removeClass('active');
        });

        $(document).on('click', '.menu li .scroll-to', function () {
            $('.responsive-sidebar-menu').removeClass('active');
        })


        $(document).on('click', ".color-boxed a", function () {
            $(".color-boxed a").removeClass("clr-active");
            $(this).addClass("clr-active");
        });

        $(document).on('click', ".global-color .setting-toggle", function () {
            $(".global-color").addClass("active");
        });

        $(document).on('click', ".global-color .inner .overlay, .global-color .inner .global-color-option .close-settings", function () {
            $(".global-color").removeClass("active");
        });

    });

    $(window).scroll(function () {

        var windscroll = $(window).scrollTop();
        if (windscroll >= 0) {
            $('.page-section').each(function (i) {
                if ($(this).position().top <= windscroll - -1) {
                    $('.scroll-nav .scroll-to.active').removeClass('active');
                    $('.scroll-nav .scroll-to').eq(i).addClass('active');
                    $('.scroll-nav-responsive a.active').removeClass('active');
                    $('.scroll-nav-responsive a').eq(i).addClass('active');
                }
            });

        } else {

            $('.scroll-nav .scroll-to.active').removeClass('active');
            $('.scroll-nav .scroll-to:first').addClass('active');
            $('.scroll-nav-responsive a.active').removeClass('active');
            $('.scroll-nav-responsive a:first').addClass('active');
        }

        if (windscroll >= 0) {
            $('.scroll-to-page').each(function (i) {

                var wscrolldecress = windscroll + 1;
                // console.log(wscrolldecress);
                if ($(this).position().top <= wscrolldecress - 0) {
                    $('.scroll-nav .scroll-to.active').removeClass('active');
                    $('.scroll-nav .scroll-to').eq(i).addClass('active');
                    $('.scroll-nav-responsive a.active').removeClass('active');
                    $('.scroll-nav-responsive a').eq(i).addClass('active');
                }
            });

        } else {
            $('.scroll-nav .scroll-to.active').removeClass('active');
            $('.scroll-nav .scroll-to:first').addClass('active');
            $('.scroll-nav-responsive a.active').removeClass('active');
            $('.scroll-nav-responsive a:first').addClass('active');
        }

    }).scroll();


    if ($('.testimonial-slider').length) {
        var testimonial = $('.testimonial-slider').owlCarousel({
            items: 1,
            margin: 30,
            stagePadding: 0,
            smartSpeed: 450,
            autoHeight: true,
            loop: false,
            nav: false,
            dots: false,
            onInitialized: counter, //When the plugin has initialized.
            onTranslated: counter //When the translation of the stage has finished.
        });

        $('.testimonial-nav .next').on('click', function () {
            testimonial.trigger('next.owl.carousel');
        })
        $('.testimonial-nav .prev').on('click', function () {
            testimonial.trigger('prev.owl.carousel', [300]);
        })


        function counter(event) {
            var element = event.target;         // DOM element, in this example .owl-carousel
            var items = event.item.count;     // Number of items
            var item = event.item.index + 1;     // Position of the current item

            // it loop is true then reset counter from 1
            if (item > items) {
                item = item - items
            }
            $('#testimonial-slide-count').html("<span class='left'>" + item + "</span> / " + items)
        }
    }

    // function remove_is_active() {
    //     $(".menu .scroll-to").removeClass("active");
    // }

    // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // var container = document.querySelector("#smooth-content");

    // var height;
    // function setHeight() {
    //     height = container.clientHeight;


    //     document.body.style.height = height + "px";
    // }
    // ScrollTrigger.addEventListener("refreshInit", setHeight);

    // gsap.to(container, {
    //     y: () => -(height - document.documentElement.clientHeight),
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: container,
    //         start: "top top",
    //         end: "bottom bottom",
    //         scrub: 1,
    //         invalidateOnRefresh: true,
    //     }
    // });

    window.addEventListener('scroll', {
        scroll_animations,
    });


    // Array.prototype.slice.call(document.querySelectorAll(".page-section")).forEach(function (e, t) {
    //     ScrollTrigger.create({
    //         trigger: e,
    //         id: t + 1,
    //         start: "top center",
    //         end: function () {
    //             return "+=".concat(e.clientHeight - 30);
    //         },
    //         toggleActions: "play reverse none reverse",
    //         toggleClass: { targets: e, className: "active" },
    //         onToggle: function () {
    //             $(".menu .scroll-to").removeClass("active"), "" != e.id && $('.menu .scroll-to[href*="#' + e.id + '"]').addClass("active");
    //         },
    //     });
    // });

    // document.querySelectorAll('.scroll-to').forEach((e) => {
    //     const target = e.getAttribute('href');
    //     const targetEl = document.querySelector(target);
    //     // const targetRect = targetEl.getBoundingClientRect();


    //     var offset = gsap.getProperty("#smooth-content", "y");
    //     var position = jQuery(target).get(0).getBoundingClientRect().top - offset;


    //     e.addEventListener('click', (e) => {
    //         e.preventDefault();

    //         gsap.to(window, {
    //             scrollTo: position,
    //             ease: "power4",
    //             duration: 0.1,
    //             onToggle: function () {
    //                 console.log('toggle');
    //                 remove_is_active();
    //                 if (targetEl.id != "") $('.menu .scroll-to[href*="#' + targetEl.id + '"]').addClass("active");
    //             },
    //             onLeaveBack: function () {
    //                 console.log('leave back');
    //                 remove_is_active();
    //                 if (targetEl.id != "") $('.menu .scroll-to[href*="#' + targetEl.id + '"]').addClass("active");
    //             },
    //             onLeave: function () {
    //                 console.log('leave');
    //                 remove_is_active();
    //                 if (targetEl.id != "") $('.menu .scroll-to[href*="#' + targetEl.id + '"]').addClass("active");
    //             },
    //             overwrite: !0,
    //         });
    //     });



    // });

});



function scroll_animations() {
    // var allow_on_mobile = !0;
    // if (typeof config_scroll_animation_on_mobile !== "undefined") allow_on_mobile = config_scroll_animation_on_mobile;
    // if (allow_on_mobile == !1 && is_mobile_device) return;
    var defaults = {
        duration: 1.2,
        ease: "power4.out",
        animation: "fade_from_bottom",
        once: !1,
    };
    gsap.utils.toArray(".scroll-animation").forEach(function (box) {
        var gsap_obj = {};
        var settings = {
            // ease: box.dataset.animationEase || defaults.ease,
            duration: box.dataset.animationDuration || defaults.duration,
        };
        var animations = {
            fade_from_bottom: {
                y: 180,
                opacity: 0,
            },
            fade_from_top: {
                y: -180,
                opacity: 0,
            },
            fade_from_left: {
                x: -180,
                opacity: 0,
            },
            fade_from_right: {
                x: 180,
                opacity: 0,
            },
            fade_in: {
                opacity: 0,
            },
            rotate_up: {
                y: 180,
                rotation: 10,
                opacity: 0,
            },
        };
        var scroll_trigger = {
            scrollTrigger: {
                trigger: box,
                once: defaults.once,
                start: "top bottom+=20%",
                // start: "top bottom+=5%",
                toggleActions: "play none none reverse",
                markers: !1,
            },
        };
        jQuery.extend(gsap_obj, settings);
        jQuery.extend(gsap_obj, animations[box.dataset.animation || defaults.animation]);
        jQuery.extend(gsap_obj, scroll_trigger);
        gsap.from(box, gsap_obj);
    });
}
scroll_animations();


// Typewriter Effect
document.addEventListener('DOMContentLoaded', function () {
    const jobTitles = ['Frontend Developer', 'Web Developer'];
    let index = 0;

    function type() {
        const text = jobTitles[index];
        const titleElement = document.getElementById('job-title');
        const textLength = text.length;
        let i = 0;

        function typingEffect() {
            if (i < textLength) {
                titleElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typingEffect, 100); // Adjust typing speed here (milliseconds)
            } else {
                setTimeout(erase, 1000); // Wait before erasing
            }
        }

        function erase() {
            if (i >= 0) {
                const newText = text.substring(0, i);
                titleElement.innerHTML = newText;
                i--;
                setTimeout(erase, 50); // Adjust erasing speed here (milliseconds)
            } else {
                index++;
                if (index >= jobTitles.length) {
                    index = 0; // Loop back to the beginning
                }
                setTimeout(type, 500); // Wait before typing next title
            }
        }

        typingEffect();
    }

    type(); // Start the typing effect
});



// setupCharacterCount to 1000 in Message //
function setupCharacterCount() {
    const messageTextarea = document.getElementById('message');
    const charCountElement = document.getElementById('charCount');

    messageTextarea.addEventListener('input', function (event) {
        const message = this.value;
        const messageLength = message.length;
        const maxCharacters = 1000;

        charCountElement.textContent = messageLength + '/' + maxCharacters;

        // Change color if max characters exceeded
        if (messageLength > maxCharacters) {
            charCountElement.style.color = 'red';
            // Trim the message to 1000 characters
            this.value = message.substring(0, maxCharacters);
        } else {
            charCountElement.style.color = ''; // Reset color
        }

        // Show the character count if it's not visible
        charCountElement.style.display = 'inline';
    });

    messageTextarea.addEventListener('paste', function (event) {
        const pastedData = event.clipboardData.getData('text/plain');
        const message = this.value + pastedData;
        const maxCharacters = 1000;

        if (message.length > maxCharacters) {
            event.preventDefault();
            return false;
        }
    });
}
document.addEventListener('DOMContentLoaded', setupCharacterCount);


// Popup Function //
function setupPopup(popupBtnId, popupCardId, closeBtnId, overlayId) {
    var popupBtn = document.getElementById(popupBtnId);
    var popupCard = document.getElementById(popupCardId);
    var closeBtn = document.getElementById(closeBtnId);
    var overlay = document.getElementById(overlayId);
    var contentWrapper = popupCard.querySelector('.card-content');

    function adjustPopupSize() {
        var contentHeight = contentWrapper.offsetHeight;
        var windowHeight = window.innerHeight;
        var maxPopupHeight = windowHeight * 0.5; // 80% of the window height
        if (contentHeight > maxPopupHeight) {
            popupCard.style.maxHeight = maxPopupHeight + 'px';
        } else {
            popupCard.style.height = 'auto';
            popupCard.style.maxHeight = 'none';
        }
    }

    function closePopup() {
        popupCard.style.display = 'none';
        overlay.style.display = 'none';
    }

    popupBtn.addEventListener('click', function (event) {
        event.preventDefault();
        popupCard.style.display = 'block';
        overlay.style.display = 'block';
        adjustPopupSize();
    });

    closeBtn.addEventListener('click', closePopup);

    overlay.addEventListener('click', closePopup);

    document.body.addEventListener('click', function (event) {
        if (!popupCard.contains(event.target) && event.target !== popupBtn) {
            closePopup();
        }
    });

    window.addEventListener('resize', adjustPopupSize);

    // Close popup on page load
    document.addEventListener('DOMContentLoaded', function () {
        closePopup();
    });
}
setupPopup('popupBtn', 'popupCard', 'closeBtn', 'overlay');
setupPopup('popupBtn2', 'popupCard2', 'closeBtn2', 'overlay2');
setupPopup('popupBtn3', 'popupCard3', 'closeBtn3', 'overlay3');
setupPopup('popupBtn4', 'popupCard4', 'closeBtn4', 'overlay4');
setupPopup('popupBtn5', 'popupCard5', 'closeBtn5', 'overlay5');




    document.getElementById("liveIcon").addEventListener("click", function() {
        window.location.href = "liveprojects.html";
    });






    





