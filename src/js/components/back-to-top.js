$(document).ready(function(){"use strict";
    
    var progressPath = document.querySelector('.progress__circle path');
    var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        var percent = ((pathLength - progress) / pathLength) * 100;
        progressPath.style.strokeDashoffset = progress;
        $('.progress__text span').text(Math.round(percent)+"%");
        if (Math.round(percent) >= 90) {
            $('.progress__text span, .progress__arrow').addClass('active');
        } else {
            $('.progress__text span, .progress__arrow').removeClass('active');
        }
    }
    updateProgress();
    $(window).scroll(updateProgress);	
    var offset = 50;
    var duration = 550;
    $(window).on('scroll', function() {

        
        if ($(this).scrollTop() > offset) {
            $('.progress').addClass('active-progress');
        } else {
            $('.progress').removeClass('active-progress');
        }
    });				
    $('.progress').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
    
    
    
});
