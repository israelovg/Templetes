/**=========================================================
 * Module: play-animation.js
 * Provides a simple way to run animation with a click
 * Targeted elements must have
 *   [data-animate"]
 *   [data-target="Target element affected by the animation"]
 *   [data-play="Animation name (http://daneden.github.io/animate.css/)"]
 *
 * Requires animo.js
 =========================================================*/

(function(window, document, $, undefined) {
    'use strict';

    Template.animations.onRendered(initPlayAnimation)

    function initPlayAnimation() {

        var Selector = '[data-animate]';

        // Run click triggered animations
        $(document).on('click', Selector, function() {

            var $this = $(this),
                targetSel = $this.data('target'),
                animation = $this.data('play') || 'bounce';

            if (targetSel) {
                $(targetSel).animo({ animation: animation });
            }

        });

    }

})(window, document, window.jQuery);
