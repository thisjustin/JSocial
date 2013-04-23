JSocial = function() {
    /*
        RULES:
        * Add a function with your Github name as its name to the jsocial.js file
        * DO NOT edit the index.html file (if you want to add anything there, use javascript :)
        * Your function can do anything and everything, as long as it finishes in a reasonable amount of time. No infinite loops, please.
        * Once your function is written, you can call it from anywhere else in the already existing execution chain.
        * Never entirely delete anyone else's function. Edit it if needed.
        * jQuery 2.0 is included for your convenience

    */
    return {
        init: function() {
            /*
                Add a call to your function here (it will run after document.ready)
            */
            this.thisjustin();
            this.Aldream();
        },
        thisjustin: function thisjustin() {
            var message,
                names = '';

            $.each(this, function() {
                var re = /function\s{1}(\w*)\(/i,
                    results = re.exec(this);
                
                if (results && results[1]) { // To prevent null results (with "init()" for instance) or errors
    				names += ' ' + '<a href="http://github.com/' + results[1] + '">' + results[1] + '</a>';
				}
            });

            message = '<div id="thisjustin">JSocial has been contributed to by: ' + names + '</div>';
            $('body').prepend(message);
        },
		Aldream: function Aldream() {
			// Uses the users list made by thisjustin() to display a simple gallery of github avatars.
			var style = $('<style>'
				+ 	'#thisjustin img {'
				+	'	filter: grayscale(1); -webkit-filter: grayscale(1); -moz-filter: grayscale(1); -o-filter: grayscale(1); -ms-filter: grayscale(1);'
				+ 	'	transition: all 1s; -webkit-transition: all 1s; -moz-transition: all 1s; -o-transition: all 1s; -ms-transition: all 1s;'
				+	'	border-radius: 40px;'
				+	'}'
				+ 	'#thisjustin img:hover {'
				+	'	filter: grayscale(0); -webkit-filter: grayscale(0); -moz-filter: grayscale(0); -o-filter: grayscale(0); -ms-filter: grayscale(0);'
				+	'	border-radius: 5px;'
				+	'}'
				+ 	'#thisjustin a { display: inline-block; margin: 1em; }'
				+ 	'#thisjustin a > i {position: absolute; margin-left: -55px; margin-top: 80px; font-size: 1em;}'
				+ '</style>');
			$('html > head').append(style);
			
			$('#thisjustin > a').each(function(i) {
				var a = $(this);
				$.ajax( { // If pictures aren't displayed, you may have reached the "API Rate Limit" for your IP address.
					url : 'https://api.github.com/users/'+ a.text(),
					dataType : "jsonp",
					success : function (data) {
						a.html('<img src="'+data.data.avatar_url+'" height=80 title="'+ a.text() +'" /><i>'+ a.text() +'</i>');
						a.css('color', 'hsl('+ (i*17) +', 50%, 50%)');
					}
				});

			});
		}
    };
}();
