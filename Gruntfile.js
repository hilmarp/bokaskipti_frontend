module.exports = function(grunt) {
	require('jit-grunt')(grunt);

	grunt.initConfig({
		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					"css/main.css": "less/main.less" // destination: source
				}
			}
		},
		watch: {
			styles: {
				files: ['less/**/*.less'],
				tasks: ['less'],
				options: {
					nospawn: true,
					livereload: true
				}
			}
		}
	});

	grunt.registerTask('default', ['less', 'watch']);
};