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
        }
    };
}();