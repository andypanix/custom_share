(function($, Drupal) {
    // Use strict mode to reduce development errors.
    // @link http://www.nczonline.net/blog/2012/03/13/its-time-to-start-using-javascript-strict-mode/
    "use strict";
    
    Drupal.behaviors.customShare = {
        attach: function(context, settings) {

            var $body = $('body');
            
            /* ----------------------------------
             * IMPLEMENTING SOCIAL SHARE BUTTON INTERACTION
             * ---------------------------------- */
            if ($('.custom_share').size()) {
                
                // Implements share button interaction
                $('.social-share-link').once().click( function(e) {
                    e.preventDefault();
                    if ( !$(this).hasClass('is-clicked') ) {
                        $body.trigger('click');
                    }
                    $(this).toggleClass('is-clicked');
                    
                    var $addthis_toolbox = $( $(this).attr('href') );
                    $addthis_toolbox.toggleClass('is-open');
                    $addthis_toolbox.once().append( Drupal.settings.socialShare[$addthis_toolbox.data('share')] );
                    if ( typeof addthis === 'object' ) {
                        addthis.toolbox( '#' + $addthis_toolbox.attr('id') )
                    }
                    return false;
                })
                
                // Implements click everywhere but on the button to close the button
                $body.once().click( function() {
                    $('.social-share-link.is-clicked').removeClass('is-clicked');
                    $('.addthis_toolbox.is-open').removeClass('is-open');
                })
            }
            
        }
    };
    
})(jQuery, Drupal);
