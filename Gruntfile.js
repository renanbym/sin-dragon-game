module.exports = function(grunt) {
    grunt.initConfig({

        uglify : {

            my_target: {
                options : {
                    mangle : false,
                    sourceMap: true,
                    beautify: true,
                    sourceMapName: 'public/assets/js/main.map'
                },
                files: {
                    'public/assets/js/main.js' : [
                        'public/source/js/main.js'
                    ]

                }
            }
        }

        ,sass : {
            dist : {
                options : { style : 'compressed' },
                files : {
                    'public/assets/css/style.css' : 'public/source/sass/style.scss'
                }
            }
        }

        ,imagemin: {

            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'public/source/images',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'public/assets/images'
                }]
            }
        }


        ,clean: {
            server:{
                src: ['public/source/**', 'README.md']
            }
        }


        ,watch : {
            js:  { files: 'public/source/js/**/*.js', tasks: [ 'uglify' ] },
            sass:  { files: 'public/source/sass/**/*.scss', tasks: [ 'sass' ] },
            images:  { files: 'public/source/images/**/*.{png,jpg,gif}', tasks: [ 'imagemin' ] }
        }

        ,connect: {
            server: {
                options: {
                    port: 3000,
                    base: '/Users/renanbym/workspace/game/hello-world'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');


    grunt.registerTask( 'default', ['uglify', 'sass', 'imagemin'] );
    grunt.registerTask( 'server', [ 'default', 'clean'] );
    grunt.registerTask( 'w', ['default', 'watch'] );



};
