var critical = require('critical');
var fs = require('fs');

critical.generate({
    inline: true,
    base: 'public/',
    src: 'index.html',
    dest: 'index-critical.html',
    minify: true,
    width: 1300,
    height: 900
}).then(() => {
    fs.unlink('public/index.html', (err) => {
        if (err)
            throw err;
        fs.rename('public/index-critical.html', 'public/index.html', (err) => {
            if (err)
                throw err;
            console.log("critical generated done");
        });
    });
});