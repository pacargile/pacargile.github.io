/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		breakpoints.on('<=medium', function() {
			$footer.insertAfter($main);
		});

		breakpoints.on('>medium', function() {
			$footer.appendTo($header);
		});

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}

	// // Main Sections: Two.
	// 	// Lightbox gallery.
	// 		$window.on('load', function() {

	// 			$('#two').poptrox({
	// 				overlayColor: '#000000',
	// 				overlayOpacity: 0.8,
	// 				popupWidth: 800, // Set appropriate width for iframe
	// 				popupHeight: 600, // Set appropriate height for iframe
	// 				popupCloserText: '&times;',
	// 				popupLoaderText: 'Loading...',
	// 				usePopupCaption: false,
	// 				usePopupCloser: true,
	// 				usePopupDefaultStyling: false,
	// 				usePopupLoader: true,
	// 				usePopupEasyClose: true,
	// 				popupContent: function (href) {
	// 					// Embed the content in an iframe
	// 					return `<iframe src="${href}" style="width: 100%; height: 100%; border: none;"></iframe>`;
	// 				}
			
	// 			});

	// 		});

})(jQuery);

document.addEventListener("DOMContentLoaded", () => {
    const triggers = document.querySelectorAll('[data-popup="iframe"]');

    // Create Popup Overlay
    const overlay = document.createElement('div');
    overlay.classList.add('popup-overlay');
    document.body.appendChild(overlay);

    // Create Popup Content
    const popup = document.createElement('div');
    popup.classList.add('popup');
    overlay.appendChild(popup);

    // Close Button
    const closeButton = document.createElement('button');
    closeButton.classList.add('popup-close');
    closeButton.innerHTML = '&times;';
    popup.appendChild(closeButton);

    // Close Popup
    function closePopup() {
        overlay.style.display = 'none';
        popup.innerHTML = '';
        popup.appendChild(closeButton); // Re-add close button
    }

    // Open Popup
    function openPopup(href) {
        popup.innerHTML = `<iframe src="${href}" frameborder="0"></iframe>`;
        popup.appendChild(closeButton);
        overlay.style.display = 'flex';
    }

    // Attach Event Listeners
    triggers.forEach(trigger => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault();
            const href = trigger.getAttribute('href');
            openPopup(href);
        });
    });

    // Close on Overlay Click
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay || event.target === closeButton) {
            closePopup();
        }
    });
});