define(['src/project'], function (project) {
    'use strict';
    var promise = false;
    beforeEach(function(done) {
        project.then(function() {
          done()
        });
    });
    describe('project', function () {
        it('should export something', function() {
            expect(undefined === project).toEqual(false);
        });
        it('should export a promise', function() {
          promise = true;
        });
    });
});
