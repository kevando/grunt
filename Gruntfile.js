module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			sass: {
				files: "public/css/scss/*.scss",
				tasks: ['sass:dist']
			},
		// This is current not used, but I am interested in exploring it later, taken from:
		// http://benfrain.com/lightning-fast-sass-compiling-with-libsass-node-sass-and-grunt-sass/
			livereload: {
				files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
				options: {
					livereload: true
				}
			}
		},
		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'compressed'
			},
			dist: {
				files: {
					"public/css/frameri.css" : "public/css/scss/frameri.scss"
				}
			}
		}
	});
	grunt.registerTask('local', ['watch:sass']);			// Run this task locally
	grunt.registerTask('scuba', ['sass:dist']);			// This runs on scuba
	grunt.registerTask('production', ['sass:dist']);			// This runs on prod
	
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
};