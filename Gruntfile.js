module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        babel : {
            options : {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: {
                    'public/assets/js/main.js' : [
                        'public/source/js/modules/**/*.js',
                        'public/source/js/main.js'
                    ]

                }
            }
        },
        sass : {
            main : {
                options : { style : 'compressed' },
                files : {
                    'public/assets/css/style.css' : 'public/source/sass/style.sass'
                }
            }
        },

        imagemin: {

            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'public/source/images',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'public/assets/images'
                }]
            }
        },

        watch : {
            js:  { files: 'public/source/js/**/*.js', tasks: [ 'babel' ] },
            sass:  { files: 'public/source/sass/**/*.sass', tasks: [ 'sass' ] },
            images:  { files: 'public/source/images/**/*.{png,jpg,gif}', tasks: [ 'imagemin' ] }
        },
        browserSync: {
            bsFiles: {
                src : [
                    'public/assets/css/*.css',
                    './*.html'
                ]
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: "./"
                }
            }
        }


    });

    grunt.registerTask( 'default', ['babel', 'sass', 'imagemin'] );
    grunt.registerTask( 'server', [ 'default', 'clean'] );
    grunt.registerTask( 'w', ['default', 'browserSync', 'watch'] );

};
