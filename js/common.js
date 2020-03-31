$(function() {

	/** anchor - about us */
	$(".aboutUsLink").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
		$('body,html').animate({scrollTop: top - 100}, 1000);
		$('.re-header-burgerMenu').removeClass('active');
		$('.re-header-mobileMenu').slideUp(500)
    });

	/** menu hover */
	$('.itemWithDropdown').hover(function() {
		$('.re-header-navigation-menuList-item-dropdown').fadeIn(500)
	}, function() {
		$('.re-header-navigation-menuList-item-dropdown').fadeOut(500)
	})

	/** mobile menu toggle */
	$('.re-header-burgerMenu').click(function() {
		if (!$(this).hasClass('active')) {
			$('.re-header-mobileMenu').slideDown(500)
			$(this).addClass('active')
		} else {
			$('.re-header-mobileMenu').slideUp(500)
			$(this).removeClass('active')
		}
	})

	/** dropdown in mob menu */
	$('.re-header-mobileMenu .itemWithDropdown a').click(function(e) {
		e.preventDefault()
		$('.re-header-mobileMenu-item-dropdown').slideToggle(500)
	})

	/** search select list: toggle */
	$('.selectToggleBtn').click(function() {
		if ($(this).hasClass('top')) {
			$(this).removeClass('top')
			$('.re-sectionOne-searchBar-searchArea-selectList').slideUp(500)
		} else {
			$(this).addClass('top');
			$('.re-sectionOne-searchBar-searchArea-selectList').slideDown(500)
		}
	})

	/** search select list: select item */
	$('.re-sectionOne-searchBar-searchArea-selectList-selectItem').click(function() {
		$('.selectToggleBtn').removeClass('top')
		$('.re-sectionOne-searchBar-searchArea-selectList').slideUp(500)
		$('.re-sectionOne-searchBar-searchArea-selectList-selectItem').removeClass('current')
		$('#searchBarInput').val($(this).data('value'))
		if ($(this).data('value') === $('#searchBarInput').val()) {
			$(this).addClass('current')
		} 
	})   

	/** about us - read_more */

	$('.re-aboutUs .read_more').click(function(e) {
		e.preventDefault()
		$(this).hide()
		$('.re-aboutUs-hiddenText').slideDown()
	})

	/** slider on "What people say" */
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		dots: false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})

	/** go up btn */

	var btn = $('.re-goUp');
	
	$(window).scroll(function() {
		if ($(window).scrollTop() > 600) {
		  btn.addClass('show');
		} else {
		  btn.removeClass('show');
		}
	  });
	
	  btn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '300');
	  });

});
