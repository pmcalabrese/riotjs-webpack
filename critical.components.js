var critical = require('critical');

const COMPONENTS = ['another', 'app', 'navigation', 'page'];

COMPONENTS.forEach((COMPONENT) => {
    critical.generate({
        css: ['./node_modules/bulma/css/bulma.css'],
        base: 'src/',
        src: `${COMPONENT}/${COMPONENT}.tag.html`,
        dest: `${COMPONENT}/${COMPONENT}.critical.scss`,
        minify: true,
        width: 1300,
        height: 900
    });
});
