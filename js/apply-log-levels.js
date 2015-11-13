/**
 * Created by Sascha on 12.11.15.
 */
(function () {

    setInterval(apply, 250);

    function apply() {

        var messageContainers = $('.log_screen .messages .msg');

        console.log('Apply log level styles to ' + messageContainers.length + ' message containers');

        messageContainers.each(function () {

            var messages = $(this).find('span.message');

            messages.each(styleMessage);
        });
    }

    function styleMessage() {

        var message = $(this);

        addLevelToMessage(message, 'debug');
        addLevelToMessage(message, 'warn');
        addLevelToMessage(message, 'error');
    }

    function addLevelToMessage(message, level) {
        var matches = message.is(":contains('" + level + ":')");

        if (matches) {
            message.addClass(level);
        }
    }
})();