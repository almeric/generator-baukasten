const extend = require('deep-extend')

function addSrcPaths(files = {}, context) {
    let pathLocales = '___dist/craft/app/framework/i18n/data/'
    let langFilePath = '___dist/craft/translations/'
    let pathPublic = '___dist/public/'
    if (context.props.projectType === 'craftCMS3') {
        pathLocales = '___dist/vendor/craftcms/cms/src/config/locales/'
        langFilePath = '___dist/translations/'
        pathPublic = '___dist/web/'
    }

    extend(files.pkg, {
        src: {
            base: '___src/',
            assets: '___src/assets/',
            js: '___src/assets/js/',
            vue: '___src/assets/vue/',
            css: '___src/assets/css/',
            fonts: '___src/assets/fonts/',
            images: {
                base: '___src/assets/images/',
                bitmap: {
                    base: '___src/assets/images/bitmap/',
                    favicons: '___src/assets/images/bitmap/favicons/'
                },
                svg: {
                    base: '___src/assets/images/svg/',
                    single: '___src/assets/images/svg/single/',
                    sprite: '___src/assets/images/svg/sprite/'
                }
            },
            templates: '___src/templates/',
            modules: {
                base: '___src/templates/_modules/',
                jsFile: '_main.js',
                cssFile: '_style.scss',
                templateFile: '_template.html',
                configFile: 'config.json',
            },
            languages: {
                source: pathLocales,
                langFilePath: "___dist/craft/translations/",
                base: pathPublic,
                htaccess: '.htaccess',
                humans: 'humans.txt',
                index: 'index.php',
                robots: 'robots.txt'
            },
            system: '___src/_system/',
            dataDir: '___src/_data/',
            dataFile: '___src/_data/global.json'
        }
    })
}

module.exports = addSrcPaths
