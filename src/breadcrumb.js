/**
 * Braedcrumb By <b><a href="mailto: me@maghrooni.ir">Maghrooni</a></b>
 * 
 * Build Dynamic BreadCrumb Based on Current URL
 * 
 * <li>Set the Options or use default options</li>
 * <li>Example of overriding option: <code>breadcrumb.element = 'ul';</code></li>
 * <li>set write to document option to false if you just want the output string <code>breadcrumb.write = false;</code></li>
 * <li>call the build function <code>breadcrumb.build();</code></li>
 * 
 * @author Maghrooni <me@maghrooni.ir>
 * 
 */
var breadcrumb = {
    /**
     * Main Bread 
     * 
     * Main Braed will be the first Bread and always will be there !
     * 
     * Example of overriding this option:  <code>breadcrumb.main = [{"text": 'Main', "link": '/', 'class': 'active'}]</code>
     * 
     * @type Array Main Bread
     */
    main: [{"text": 'Main', "link": '/', 'class': 'active'}],
    /**
     * Parent Element
     * 
     * You can use UL or OL as Standard Elements , as they will contain <li> elements
     * 
     * Example of overriding this option: <code>breadcrumb.element = 'ol'</code>
     * 
     * @type String Parent Element
     */
    element: 'ol',
    /**
     * Parent Element Class or Classes
     * 
     * Example of overriding this option: <code>breadcrumb.class = 'breadcrumb custom class'</code>
     * 
     * @type String Parent Element Class or Classes
     */
    class: 'breadcrumb',
    /**
     * Last Bread Class
     * 
     * if you want to change the CSS of the Last Bread , You can use this option for defining a different class for it
     * 
     * Example of overriding this option: <code>breadcrumb.lastClass = 'current-bread'</code>
     * 
     * @type String last Bread Class or Classes
     */
    lastClass: 'current-bread',
    /**
     * Exclude from Breadcrumbs
     * 
     * with this Property You can Exclude Parts of URL to show in BreadCrumbs
     * 
     * By Default We will Exclude Hashtag and Empty string
     * 
     * @type Array Exclusion Array
     */
    exclude: ['#', ''],
    /**
     * Write to Document
     * 
     * if you want breadcrumb to write output to document or only return the output string 
     * 
     * Example of overriding this option: <code>breadcrumb.write = false</code>
     * 
     * @type Boolean
     */
    write: true,
    /**
     * Build the BreadCrumb 
     * 
     * @returns {String}
     */
    build: function () {
        /**
         * Get the Current URL
         */
        var currentUrl = location.href.split('/').slice(3);
        /**
         * initialize Breads Array
         * 
         * @type Array
         */
        var breads = [];
        /**
         * Define Output String
         * 
         * @type String
         */
        var output = '';
        /**
         * Load Main Bread to Breads Array
         */
        for (var i = 0; i < this.main.length; i++) {
            var text = this.main[i].text;
            var link = this.main[i].link;
            var cls = this.main[i].class;
            breads.push({"text": text, "link": link, 'class': cls});
        }
        /**
         * Push each Segment of Current URL into Breads Array
         */
        for (var i = 0; i < currentUrl.length; i++) {
            var text = currentUrl[i];
            text = text[0].toUpperCase() + text.substring(1);
            var link = '/' + currentUrl.slice(0, i + 1).join('/');
            breads.push({"text": text, "link": link, 'class': ' '});
        }
        /**
         * Open Breads Parent Element Tag
         */
        output += '<' + this.element + ' class="' + this.class + '">';
        /**
         * Breads Length
         * @type integer Containing Breads Length
         */
        var breadLen = breads.length;
        /**
         * Build Breads 
         */
        for (var j = 0; j < breadLen - 1; j++) {
            if (this.exclude.indexOf(breads[j].text) == -1) {
                output += '<li class="' + breads[j].class + '"><a href="' + breads[j].link + '">' + breads[j].text + '</a></li>';
            }
        }
        /**
         * Add the Last Bread Containing Current Page Link with Last Class
         */
        output += '<li class="' + this.lastClass + '"><a href="' + breads[breadLen - 1 ].link + '">' + breads[breadLen - 1].text + '</a></li>';
        /**
         * Close Parent Element Tag
         */
        output += '</' + this.element + '>';
        /**
         * if Write option is set to true Write output to Document
         */
        if (this.write == true) {
            document.write(output);
        }
        /**
         * return the output string
         */
        return output;
    }
};