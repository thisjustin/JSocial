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
            this.petehunt();
            /*
                Put a call to your function randomly between the other functions below to avoid merge conflicts
            */
        },
        thisjustin: function thisjustin() {
            var message,
                names = '';

            $.each(this, function() {
                var re = /function\s{1}(\w*)\(/i,
                    results = re.exec(this);
                
                names += ' ' + '<a href="http://github.com/' + results[1] + '">' + results[1] + '</a>';
            });

            message = '<div id="thisjustin">JSocial has been contributed to by: ' + names + '</div>';
            $('body').prepend(message);
        },
        petehunt: function() {
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
        }
    };
}();