$(function () {
    $('#riders-quotes')
                    .after('<div id="nav">')
                    .cycle({
                        fx: 'fade',
                        timeout: 4000,
                        pause: 1,
                        speed: 500,
                        pager: '.nav'
                    });

    /**
    Assuming we're travelling 1.4 million kilometers per month, that's 46,666 a day.
    Get the days date, times that by 46,666 to get the total so far that month.
    The first day of the month will start with 46,666 and increment from there.
    The last day will be 1.4 million and increment from there.
    **/
    var myDate = new Date();
    var startValue = (myDate.getDate() * 46666);

    // Initialize a new counter
    var myCounter = new flipCounter('flip-counter', {value:startValue, inc:1, pace:10000, auto:true});
});
