/**
 * Created by Sascha on 13.11.15.
 */
(function () {

    var OFFSET_THRESHOLD = 100;
    var intervalId;

    resetInterval();

    function resetInterval() {
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(apply, 250);
    }

    function apply() {

        var messageContainers = $('.log_screen .messages');

        messageContainers.each(registerScrollEvent);
        messageContainers.each(autoScroll);
    }

    function autoScroll() {

        var container = $(this);

        var autoScroll = !(container.data('logio.prettifier.autoscroll') === false); // Auto-scroll on undefined and true

        if (!autoScroll) return;

        console.log('Auto-scroll');

        var scrollHeight = container[0].scrollHeight;

        container.scrollTop(scrollHeight);
    }

    function registerScrollEvent() {

        var container = $(this);

        container.off('scroll.autoscroll');
        container.on('scroll.autoscroll', handleScroll);
    }

    function handleScroll() {

        var container = $(this);

        var scrollHeight = container[0].scrollHeight;
        var scrollOffset = container.scrollTop();
        var height = container.height();

        var autoScroll = (scrollHeight - scrollOffset - height < OFFSET_THRESHOLD);

        container.data('logio.prettifier.autoscroll', autoScroll);

        // Reset interval so user does not get interrupted by auto scroll
        resetInterval();
    }

})();