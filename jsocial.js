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
            this.johnsonjake();
            this.thisjustin();
            this.Aldream();
            this.fidian();
            this.tbeseda();
            this.michaelarestad();
            this.petehunt();
            this.igdaloff();
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
        fidian: function fidian(str) {
            // This is a phrase structure rule string generator.
            // Augment rules and modifiers in your code!
            //   var f = JSocial.fidian;
            //   f.rule('newRule', ['options', 'go', 'here']);
            //   f.mod('newModifier', function (input) { return result; });
            //   if (! this.alreadyAddedRules) {
            //       this.alreadyAddedRules = true;
            //       f.rule('existingRule', ['more', 'rules', 'here']);
            //   }
            // This code is ugly to keep it short.
            var f = JSocial.fidian;

            if (!f.rules) {
                f.rules = {};
                f.mods = {};

                // Add an expansion rule
                f.rule = function (n, v) {
                    if (!Array.isArray(v)) {
                        v = v.split('~');
                    }
                    f.rules[n] = (Array.isArray(f.rules[n]) ? f.rules[n] : []).concat(v);
                };

                // Add a modifier
                f.mod = function (n, v) {
                    f.mods[n] = v;
                }

                // Sample data as arrays, which can reference other arrays
                f.rule('contributedTo', 'contributed to~worked upon~enhanced~augrmented');
                f.rule('thankfully', 'gratefully~thankfully~amazingly');
                f.rule('thankfullyMaybe', '~~{{thankfully}}~Very {{thankfully|ucFirst}}~VERY {{thankfully|uc}}');

                // Modifiers
                f.mod('uc', function (s) { return s.toUpperCase(); });
                f.mod('ucFirst', function (s) { return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase(); });

                // Add some text to index.html
                $('#thisjustin').contents().each(function () {
                    if (this.nodeType === 3) {
                        this.data = this.data.replace(/contributed to/, f('{{thankfullyMaybe}} {{contributedTo}}'));
                    }
                });
            }

            // Replace {{rule|modifier|modifier}} with looked up values
            return (''+str).replace(/\{\{(.*?)\}\}/g, function (o, t) {
                var k = t.replace(/\s*g/, '').split('|'),
                    r = f.rules[k[0]],
                    t = r[Math.floor(Math.random() * r.length)];
                return k.slice(1).reduce(function (z, n) {
                    return f.mods[n](z);
                }, f(t));
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
        michaelarestad: function michaelarestad(){

            // There's probably about a gazillion better ways to do this. Oh well. Refactor if you're awesome.
            var space =       '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'
                            + '\n'

            var we =          '  HHHH       HHHH  HHHHHHH\n'
                            + '  HHHH  HHH  HHHH  HHHH   \n'
                            + '  HHHH HHHHH HHHH  HHHHHH \n'
                            + '  HHHHHHH HHHHHHH  HHHH   \n'
                            + '   HHHHH   HHHHH   HHHHHHH\n'

            var are =         '   HHHHHHHH   HHHHHHHHH   HHHHHHH\n'
                            + '  HHHH  HHHH  HHHH   HHH  HHHH   \n'
                            + '  HHHHHHHHHH  HHHHHHHH    HHHHHH \n'
                            + '  HHHH  HHHH  HHHH   HHH  HHHH   \n'
                            + '  HHHH  HHHH  HHHH   HHH  HHHHHHH\n'

            var mother =      '   HHHHH   HHHHH   HHHHHHHHH  HHHHHHHHHH  HHHH  HHHH  HHHHHHH  HHHHHHHHH \n'
                            + '  HHHHHHH HHHHHHH  HHHHHHHHH  HHHHHHHHHH  HHHH  HHHH  HHHH     HHHH   HHH\n'
                            + '  HHHH HHHHH HHHH  HHHH  HHH     HHHH     HHHHHHHHHH  HHHHHH   HHHHHHHH  \n'
                            + '  HHHH  HHH  HHHH  HHHH  HHH     HHHH     HHHH  HHHH  HHHH     HHHH   HHH\n'
                            + '  HHHH       HHHH  HHHHHHHHH     HHHH     HHHH  HHHH  HHHHHHH  HHHH   HHH\n'

            var father =      '  HHHHHHH   HHHHHHHH   HHHHHHHHHH  HHHH  HHHH  HHHHHHH  HHHHHHHHH \n'
                            + '  HHHH     HHHH  HHHH  HHHHHHHHHH  HHHH  HHHH  HHHH     HHHH   HHH\n'
                            + '  HHHHHHH  HHHHHHHHHH     HHHH     HHHHHHHHHH  HHHHHH   HHHHHHHH  \n'
                            + '  HHHH     HHHH  HHHH     HHHH     HHHH  HHHH  HHHH     HHHH   HHH\n'
                            + '  HHHH     HHHH  HHHH     HHHH     HHHH  HHHH  HHHHHHH  HHHH   HHH\n'

            var gentlemen =   '   HHHHHHHH   HHHHHHH  HHHHHH  HHH  HHHHHHHHHH  HHHH     HHHHHHH   HHHHH    HHHH   HHHHHHH  HHHHHH  HHH\n'
                            + '  HHHH        HHHH     HHHHHHH HHH  HHHHHHHHHH  HHHH     HHHH     HHHHHHH HHHHHHH  HHHH     HHHHHHH HHH\n'
                            + '  HHHH  HHHH  HHHHHH   HHHH HHHHHH     HHHH     HHHH     HHHHHH   HHHH HHHHH HHHH  HHHHHH   HHHH HHHHHH\n'
                            + '  HHHH   HHH  HHHH     HHHH  HHHHH     HHHH     HHHH     HHHH     HHHH  HHH  HHHH  HHHH     HHHH  HHHHH\n'
                            + '   HHHHHH  H  HHHHHHH  HHHH   HHHH     HHHH     HHHHHHH  HHHHHHH  HHHH       HHHH  HHHHHHH  HHHH   HHHH\n'

                            // This is my tweaked version of one of these dudes http://textart4u.blogspot.com/2012/12/gangnam-style-ascii-text-art.html
            var frame_one =   '                xXXXXXx                     \n'
                            + '              xXY      Yx                   \n'
                            + '             xX          X                  \n'
                            + '             X (  ) (  ) X                  \n'
                            + '             X           X                  \n'
                            + '              X  xXX    X                   \n'
                            + '             ooX-XXY---x00o                 \n'
                            + '            o000-000----0000o               \n'
                            + '           0000000xxX00000000o              \n'
                            + '            000000YXX00000000               \n'
                            + '              o000-----0000o                \n'
                            + '            o00000oXXXX00000o               \n'
                            + '           o00XXXXXXXXXXXXX00o              \n'
                            + '           xXXXXXXXXXXXXXXXXXXx             \n'
                            + '          XXXXXXXYYYYYYYXXXXXXX             \n'
                            + '          xXXXXXX      xXXXXXXX             \n'
                            + '           XXXXXX     XXXXXXXx              \n'
                            + '            xXXXX     XXXXXx                \n'

            var frame_two =   '                 xXXXXXx                    \n'
                            + '               xXY      Yx                  \n'
                            + '              xX          X                 \n'
                            + '              X  (  ) (  )X                 \n'
                            + '              X           X                 \n'
                            + '               X  xXX    X                  \n'
                            + '              ooX-XXY---x00o                \n'
                            + '             o000-000----0000o              \n'
                            + '            0000000xxX00000000o             \n'
                            + '             000000YXX00000000              \n'
                            + '               o000-----0000o               \n'
                            + '             o00000oXXXX000000o             \n'
                            + '            o00XXXXXXXXXXXXXx00o            \n'
                            + '           xXXXXXXXXXXXXXXXXXXXX            \n'
                            + '           XXXXXXXYYYYYYYXXXXXXX            \n'
                            + '           xXXXXXX      xXXXXXXX            \n'
                            + '            XXXXXX     XXXXXXXx             \n'
                            + '            xXXXX     XXXXXx                \n'

            var frame_three = '                 xXXXXXx                    \n'
                            + '               xXY      Yx                  \n'
                            + '              xX          X                 \n'
                            + '              X  (  ) (  )X                 \n'
                            + '              X           X                 \n'
                            + '               X  xXX    X                  \n'
                            + '              ooX-XXY---x00o                \n'
                            + '             o000-000----0000o              \n'
                            + '            0000000xxX00000000o             \n'
                            + '             000000YXX00000000              \n'
                            + '               o000-----0000o               \n'
                            + '              o00000oXXXXo0000o             \n'
                            + '             o000oXXXXXXXXXo000o            \n'
                            + '             XXXXXXXXXXXXXXXxXXx            \n'
                            + '            xXXXXXXXXXXXXXXXXXXX            \n'
                            + '            XXXXXXYY    YXXXXXXX            \n'
                            + '            XXXXXX      xXXXXXXX            \n'
                            + '            XXXXXX     XXXXXXx              \n'
                            + '            xXXXX     XXXXXx                \n'

            var frame_four =  '                xXXXXXx                     \n'
                            + '              xXY      Yx                   \n'
                            + '             xX          X                  \n'
                            + '             X(  ) (  )  X                  \n'
                            + '             X           X                  \n'
                            + '              X  xXX    X                   \n'
                            + '             ooX-XXY---x00o                  \n'
                            + '            o000-000----0000o                \n'
                            + '           0000000xxX00000000o               \n'
                            + '            000000YXX00000000                \n'
                            + '             o000-----0000o                 \n'
                            + '           o00000oXXXX00000o                \n'
                            + '          o00XXXXXXXXXXXXX00o               \n'
                            + '         xXXXXXXXXXXXXXXXXXXXx              \n'
                            + '         XXXXXXXYYYYYYYXXXXXXX              \n'
                            + '         xXXXXXY      YXXXXXXx              \n'
                            + '          XXXXXX      XXXXXXx               \n'
                            + '            xXXXX     xXXXXx                \n'

            var frame_five =  '                xXXXXXx                     \n'
                            + '              xXY      Yx                   \n'
                            + '             xX          X                  \n'
                            + '             X(  ) (  )  X                  \n'
                            + '             X           X                  \n'
                            + '              X  xXX    X                   \n'
                            + '             ooX-XXY---x00o                  \n'
                            + '            o000-000----0000o                \n'
                            + '           0000000xxX00000000o               \n'
                            + '            000000YXX00000000                \n'
                            + '            o000-----0000o                 \n'
                            + '           o000XXXXXXx0000o                \n'
                            + '          o00xXXXXXXXXXXx00o                \n'
                            + '         xXXXXXXXXXXXXXXXXXXx               \n'
                            + '        XXXXXXXXXXXXXXXXXXXXx              \n'
                            + '        XXXXXXX     YYXXXXXXX              \n'
                            + '        xXXXXXY      YXXXXXXx              \n'
                            + '          XXXXXX      XXXXXx               \n'
                            + '            xXXXX     xXXXXx                \n'

            setTimeout( function() {
                console.log(space + we);

                setTimeout( function() {
                    console.log(space + are);

                    setTimeout( function() {
                        console.log(space + mother);

                        setTimeout( function() {
                            console.log(space + father);

                            setTimeout( function() {
                                console.log(space + gentlemen);

                                setTimeout( function() {
                                    console.log(space + frame_one);

                                    setTimeout( function() {
                                        console.log(space + frame_two);

                                        setTimeout( function() {
                                            console.log(space + frame_three);

                                            setTimeout( function() {
                                                console.log(space + frame_two);

                                                setTimeout( function() {
                                                    console.log(space + frame_one);

                                                    setTimeout( function() {
                                                        console.log(space + frame_four);

                                                        setTimeout( function() {
                                                            console.log(space + frame_five);

                                                            setTimeout( function() {
                                                                console.log(space + frame_four);

                                                                setTimeout( function() {
                                                                    console.log(space + frame_one);

                                                                    setTimeout( function() {
                                                                        console.log(space + frame_two);

                                                                        setTimeout( function() {
                                                                            console.log(space + frame_three);

                                                                            setTimeout( function() {
                                                                                console.log(space + frame_two);

                                                                                setTimeout( function() {
                                                                                    console.log(space + frame_one);

                                                                                    setTimeout( function() {
                                                                                        console.log(space + frame_four);

                                                                                        setTimeout( function() {
                                                                                            console.log(space + frame_five);

                                                                                            setTimeout( function() {
                                                                                                console.log(space + frame_four);

                                                                                            },100);
                                                                                        },100);
                                                                                    },100);
                                                                                },100);
                                                                            },100);
                                                                        },100);
                                                                    },100);
                                                                },100);
                                                            },100);
                                                        },100);
                                                    },100);
                                                },100);
                                            },100);
                                        },100);
                                    },100);
                                },1000);
                            },500);
                        },500);
                    },500);
                },500);
            },500);
        },// End michaelarestad

		    igdaloff: function igdaloff() {

					$('body').append('<a class="rotate" href="#">Woah!</a>').css('position','relative');

						i = -5;

					$('.rotate').click( function(){
					 	$(this).append('!!');
					 	$(this).css('-webkit-transform','rotate(' + -i + 'deg)');

					 	document.body.style.setProperty("-webkit-transform", "rotate(" + i + "deg)", null);
					 	i = i - 5;

					 	event.preventDefault();
					});

					$('.rotate').css({
						'position'					:		'absolute',
						'text-decoration'		:		'none',
						'background'				:		'#d04343',
						'padding'						:		'1em 2em',
						'border-radius'			:		'2px',
						'color'							:		'#fff',
					});


				}, // End igdaloff

        johnsonjake: function johnsonjake() {
          var script = document.getElementsByTagName('script')[0];
          script.src = old.src.replace(/.*?:/g, "");
        } // End johnsonjake

	/*
		This is not
		The greatest comment in the world, no
		This is just a tribute
	 */
    };
}();
