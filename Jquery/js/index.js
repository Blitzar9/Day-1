//$(document).ready(function() {
//	$('p').addClass('add-color');
// });

$(()=> {
    $('button').click(()=> {
        $('p').addClass('add-color');
    });
    $('#hide').click(()=> {
        $('p').hide();
    });
    $('#show').click(()=> {
        $('p').show();
    });
    $('#toggle').click(()=> {
        $('p').toggle();
    });
    
});