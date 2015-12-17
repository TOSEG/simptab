
define([ "jquery" ], function( $ ) {

    /* simple topsite example
    <li><a href="#"><span>Site 001</span></a></li>
    */

    var tp,
        topsites = [],
        MAX      = 10,
        topSitesRender = function ( sites ) {
            console.log( "Topsites", sites );
            if ( sites && !$.isEmptyObject( sites ) ) {
                var len   = sites && sites.length > MAX ? MAX : sites.length,
                    item  = "", site;
                for( var i = 0; i < len; i++ ) {

                    site = sites[i];
                    topsites.push( site );
                    tp.SimpleRender( site );
                    item += tp.simple.html;

                }
                $( ".topsites" ).html( item );
            }
            else {
                $( ".topsites" ).hide();
            }
    };

    function Topsites() {}

    Topsites.prototype.simple      = {};
    Topsites.prototype.simple.$item = $( '<li><a href="#"><span>Site 001</span></a></li>' );
    Topsites.prototype.simple.$a    = $( Topsites.prototype.simple.$item.find("a"));
    Topsites.prototype.simple.$span = $( Topsites.prototype.simple.$item.find("span"));

    Topsites.prototype.senior       = {};
    Topsites.prototype.senior.$item  = $('<a><span></span><div></div>');
    Topsites.prototype.senior.$div   = $( Topsites.prototype.senior.$item.find( "div"  ));
    Topsites.prototype.senior.$span  = $( Topsites.prototype.senior.$item.find( "span" ));

    Topsites.prototype.SimpleRender = function( site ) {
        this.simple.$a.attr( "href", site.url );
        this.simple.$span.text( site.title );
        this.simple.html = this.simple.$item[0].outerHTML;
    }

    return {
        Init: function() {
            tp = new Topsites();
            chrome.topSites.get( topSitesRender );
        },
        sites: function() {
            return topsites;
        }
    };

});
