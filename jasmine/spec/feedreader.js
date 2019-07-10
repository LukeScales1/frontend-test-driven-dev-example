/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

$(function() {

    describe('RSS Feeds', function() {
        /* Test to make sure that the allFeeds variable has been
         * defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed in the allFeeds object
         * and ensures it has a URL defined and that the URL is not
         * empty.
         */
         it('URL of each feed is defined and not empty', function() {
            for (const feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            };
         });


        /* Test that loops through each feed in the allFeeds object
         * and ensures it has a name defined and that the name is
         * not empty.
         */
        it('name of each feed is defined and not empty', function() {
            for (const feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            };
         });
    });


    describe('The menu', function() {

        const initialClassList = document.body.classList;
        const menuIcon = document.getElementsByClassName('icon-list')[0];

        /* Test that ensures the menu element is hidden by default. */
         it('is hidden by default', function() {
            expect(initialClassList.contains('menu-hidden')).toBe(true);
         });


         /* Test that ensures the menu changes visibility when the menu icon is clicked. */
          it('toggles menu-hidden class on click of menu icon', function() {

            const event = {
                type: 'click',
                clickTest: function(){}
            }
            const spy = spyOn(event, 'clickTest');
            $(menuIcon).trigger(event);
            expect(document.body.classList.contains('menu-hidden')).toBe(false);
            $(menuIcon).trigger(event);
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });
    });


    describe('Initial Entries', function() {

        /* Test that ensures when the loadFeed function is called and
         * completes its work, there is at least a single .entry element
         * within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('has at least one entry', function() {
            expect($('.feed .entry').length).not.toBe(0);
        });
    });


    describe('New Feed Selection', function() {

        /* Test that ensures when a new feed is loaded by the
         * loadFeed function that the content actually changes.
         */
        let intialFeed;
        let newFeed;


        beforeEach(function(done) {
            loadFeed(0, done);
            intialFeed = $('.feed');
        });

        beforeEach(function(done) {
            loadFeed(1, done);
            newFeed = $('.feed');
        });

        it('updates the feed when new feed is loaded', function() {
            expect(newFeed).not.toBe(intialFeed);
        });

    });
    
}());
