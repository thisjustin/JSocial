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
                Put your function randomly between the other functions below to avoid merge conflicts
            */
            this.thisjustin();
            this.Aldream();
            this.tbeseda();
            this.petehunt();
            this.emzosmizo();
            /*
                Put a call to your function randomly between the other functions above to avoid merge conflicts
            */
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
		},
        petehunt: function petehunt() {
            // all you need is lambda, null and if, bro.
            var NIL = function() {};
            function cons(h, t) {
                return function(x) {
                    if (x === 0) {
                        return h;
                    } else {
                        return t;
                    }
                }
            }
            function car(c) {
                return c(0);
            }
            function cdr(c) {
                return c(1);
            }

            function add(x, y) {
                if (!x) {
                    return y;
                }
                if (!y) {
                    return x;
                }
                return cons(car(x), add(cdr(x), y));
            }

            // todo: other arithmetic

            // hacks to interface with the real world. too lazy to write a base10 parser/formatter right now
            function fromInt(x) {
                if (x === 0) {
                    return NIL;
                }
                return cons(NIL, fromInt(x - 1));
            }
            function toInt(x) {
                if (x === NIL) {
                    return 0;
                }
                return 1 + toInt(cdr(x));
            }

            $('body').append('<p>100 + 200 = ' + toInt(add(fromInt(100), fromInt(200))) +  ', oops.</p>');
        },
        tbeseda: function tbeseda() {
            var div_style = 'position:absolute;right:10px;bottom:10px;text-align:right;'
            var $tbeseda_div = $('<div id=tbeseda style="'+div_style+'">').appendTo('body')

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    $tbeseda_div.append('<pre>'
                            + 'Latitude: '+position.coords.latitude+'\n'
                            + 'Longitude: '+position.coords.longitude
                        + '</pre>'
                    );

                    var map_url = 'http://maps.googleapis.com/maps/api/staticmap?center='
                        + position.coords.latitude+','
                        + position.coords.longitude
                        + '&zoom=18&size=350x200&sensor=false'

                    $tbeseda_div.append('<img src="'+map_url+'" />');
                });
            } else {
                $tbeseda_div.append('<p>Can\'t geolocate you, get a better browser!</p>');
            }
        },
        
        emzosmizo: function emzosmizo(){
	        var things = 
        }
        
        
        
	/*
		This is not
		The greatest comment in the world, no
		This is just a tribute
	 */
    };
}();
