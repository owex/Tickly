
/*
    $('.class').tickly({
                activeClass: 'active',
                loopSpeed: 4000
    });
*/ 

(function( $ ) {
 
$.fn.tickly = function(options) {
			var t, c, p, opts; 
			// Count children
			t = this.children().length;
			// count all iterations
			c = 0;
			//grab passed options
			opts = $.extend({}, $.fn.tickly.Defaults, options);
            
			//setup first child
            this.children().eq(0).addClass(opts.activeClass);
			
			this.intervalRun = setInterval(
				(function(self) {         //Self-executing func which takes 'this' as self
					return function() {   //Return a function in the context of 'self'
						
						// get current position						
						p = self.children('.' + opts.activeClass).index() + 1;
						
						//remove active class from all
						self.children().removeClass(opts.activeClass);
                        
                        if(opts.debug === true){
                            console.log('Posion: ' + p);
                            console.log('Counter: ' + c);
                            console.log('Total: ' + t);
                        }
						
						
						// if the current loop total is equal to the total we've reached the end.
						if(p == t){
                             if(opts.debug === true){
                                console.log('resetting');
                            }
							c = 0;
							self.children().eq(0).addClass(opts.activeClass);
						} else {
							c++;
							self.children().eq(c).addClass(opts.activeClass);
						}
					
					};
				})(this),
				opts.loopSpeed     //normal interval, 'this' scope not impacted here.
			); 
			
			
			
			return this;
		};
		

		$.fn.tickly.Defaults = {
			activeClass: 'active',
			loopSpeed: 4000,
            debug: false
		};

 
})( jQuery );