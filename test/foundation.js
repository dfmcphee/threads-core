var expect = require('chai').expect;

describe('Threads foundation', function() {
  it('Sass compiles', function(done) {
    var sass = require('node-sass');
    sass.render({
      file: 'foundation.scss'
    }, function(err, result) {
      if (err) throw err;
      done();
    });
  });
});
