// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});

$(document).on("touchstart", "#searchfilter", function(){
    console.log("click");
    if (!$("#filter-collapse").hasClass("collapsed")){
        $( "#filter-collapse" ).addClass( "collapsed" );
    }
    else{
        $( "#filter-collapse" ).removeClass( "collapsed" );
    }
});


$( "#search" ).submit(function( event ) {
    console.log( "Handler for .submit() called." );
    ga('send', 'event', 'Search', 'Submit', 'Searchbar submit');
    window.location.href = "searchresults.html";
  });