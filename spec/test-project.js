define(['src/project'], function (project) {
    'use strict';
    describe('project', function () {
        it('should not export a module interface', function() {
            expect(undefined === project).toEqual(true);
        });
    });
});
