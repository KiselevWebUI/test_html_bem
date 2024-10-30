const pathSrc = "./src";
const pathDest = "docs"; //"./public";

export default {
    root: pathDest,

    html: {
        src: pathSrc + "/html/*.html",
        watch: pathSrc + "/blocks/**/*.html",
        dest: pathDest,
    },

    pug: {
        src: pathSrc + "/pug/*.pug",
        watch: pathSrc + "/pug/**/*.pug",
        dest: pathDest,
    },

    css: {
        src: pathSrc + "/css/*.css",
        watch: pathSrc + "/css/**/*.css",
        dest: pathDest + '/css',
    },

    scss: {
        src: pathSrc + "/sass/main.scss",
        watch: pathSrc + "/blocks/**/*.{sass,scss}",
        dest: pathDest + '/css',
    },

    js: {
        src: pathSrc + "/js/main.js",
        blocksSrc: pathSrc + "/blocks/**/*.js",
        watch: pathSrc + "/blocks/**/*.js",
        dest: pathDest + '/js',
    },

    img: {
        src: pathSrc + "/img/*.{png,jpg,lpeg,gif,svg}",
        watch: pathSrc + "/img/**/*.{png,jpg,lpeg,gif,svg}",
        dest: pathDest + '/img',
    },

    font: {
        src: pathSrc + "/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        watch: pathSrc + "/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        dest: pathDest + '/font',
    }
}
