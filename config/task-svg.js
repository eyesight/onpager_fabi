import debug from 'gulp-debug';
import rename from 'gulp-rename';
import svgmin from 'gulp-svgmin';
import destinations from 'gulp-multi-dest';

module.exports = function(config, gulp, logger) {
	return function() {
		return gulp.src(config.src)
			// debug
			// .pipe(debug({title: 'svg:'}))
			.pipe(svgmin())
			.pipe(rename({
				suffix: '.min'
			}))
			.on('error', logger)
			.pipe(destinations(config.dest));
	};
};
