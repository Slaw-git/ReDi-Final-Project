	try {
			// Mobile Nav toggle
			$('.menu-toggle > a').on('click', function (e) {
				e.preventDefault();
				$('#responsive-nav').toggleClass('active');
			})

			// Fix cart dropdown from closing
			$('.cart-dropdown').on('click', function (e) {
				e.stopPropagation();
			});

			/////////////////////////////////////////

			// films Slick
			$('.films-slick').each(function() {
				var $this = $(this),
						$nav = $this.attr('data-nav');

				$this.slick({
					slidesToShow: 5,
					slidesToScroll: 1,
					autoplay: true,
					infinite: true,
					speed: 400,
					dots: false,
					arrows: true,
					appendArrows: $nav ? $nav : false,
					responsive: [{
					breakpoint: 991,
					settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					}
				},
				{
					breakpoint: 480,
					settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					}
				},
				]
				});
			});

			// films Widget Slick
			$('.films-widget-slick').each(function() {
				var $this = $(this),
						$nav = $this.attr('data-nav');

				$this.slick({
					infinite: true,
					autoplay: true,
					speed: 300,
					dots: false,
					arrows: true,
					appendArrows: $nav ? $nav : false,
				});
			});

			/////////////////////////////////////////

			// film Main img Slick
			$('#film-main-img').slick({
			infinite: true,
			speed: 300,
			dots: false,
			arrows: true,
			fade: true,
			asNavFor: '#film-imgs',
		});

			// film imgs Slick
		$('#film-imgs').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			centerMode: true,
			focusOnSelect: true,
				centerPadding: 0,
				vertical: true,
			asNavFor: '#film-main-img',
				responsive: [{
				breakpoint: 991,
				settings: {
							vertical: false,
							arrows: false,
							dots: true,
				}
			},
			]
		});

		//  Checking the input!!!

		const allowedLetters = /^[A-Za-z0-9_]*$/;
		const startLetter = /^[A-Za-z]*$/;

		const checkInput = () => {
				const myName = document.forms["myForm"]["first_name"].value;

			if(4 > myName.length || myName.length > 25){
				alert("Your name schould be more that 4 und less than 25 charackters!");
				return;
			}

			if(!allowedLetters.test(myName)){
				alert('Invalid Name!');
				return;
			}

			if(!startLetter.test(myName[0])){
				alert('Name must start with a letter!');
				return;
			}

			if(myName[myName.length-1] == "_"){
				alert("Your name schould not have '_' at the end!");
				return;
			}
		}

		let btn = document.getElementById("inptBtn");
		btn.addEventListener("click", checkInput);


		// Get Films info and transfer it to film.html page 

		const filmNames = ["Ammonite", "Secrets", "Nobody", "Venom", "Dune", "Kabullywood", ]

		let imageSrc, langScr, ratingScr, nameScr, descrScr;

			$('.film').click(function(event){
				event.preventDefault();
				let thisItem = this;
				filmNames.forEach(function(item){
					if($(thisItem).hasClass(item)){				
						imageSrc = $("." + item + "-img").attr('src');
						langScr = $("." + item + "-lang")[0].innerHTML;
						ratingScr = $("." + item + "-rating")[0].innerHTML;
						nameScr = $("." + item + "-name")[0].innerHTML;
						descrScr = $("." + item + "-description")[0].innerHTML;
						let cardData = {'imgSrc': imageSrc, 'lang': langScr, 'rating': ratingScr, 'name': nameScr, 'descr': descrScr};
						// Set the variable
						localStorage.setItem("objectToSend",JSON.stringify(cardData));
						window.location.href = 'film.html';
					}
				});
			});
    } catch (err) {
		console.log(err.stack); // ReferenceError: 
	}



