let scriptsLoaded = {};


export function loadScript(src, onLoad) {
    if (scriptsLoaded[src]) {
        //console.log(`Script ${src} already loaded.`);
        onLoad();
        return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.title = 'jimmy';
    script.onload = () => { 
        scriptsLoaded[src] = true;
        //console.log(`Script ${src} loaded successfully.`);
        onLoad();
    };
    script.onerror = () => console.error(`Failed to load script ${src}`);
    document.body.appendChild(script);
    console.log(script.src);
    console.log("1");
}

export function waitForElement(selectors, callback) {
    const elements = selectors.split(',').map(selector => document.querySelector(selector.trim()));
    if (elements.some(element => element)) {
        callback(); 
    } else {
        console.log("Call Back JSSSSSS")
        setTimeout(() => waitForElement(selectors, callback), 10000);
    }
}

 
export const loadAllScripts = () => {
    waitForElement('.scriptjsinclude', () => {
        const scripts = [
            '/assets/js/vendor/modernizr.min.js',
            '/assets/js/vendor/bootstrap.min.js',
            '/assets/js/vendor/sal.js',
            '/assets/js/vendor/swiper.js',
            '/assets/js/vendor/magnify.min.js',
            '/assets/js/vendor/jquery-appear.js',
            '/assets/js/vendor/backtotop.js',
            '/assets/js/vendor/isotop.js',
            '/assets/js/vendor/imageloaded.js',
            '/assets/js/vendor/wow.js',
            '/assets/js/vendor/waypoint.min.js',
            '/assets/js/vendor/easypie.js',
            '/assets/js/vendor/jquery-one-page-nav.js',
            '/assets/js/vendor/bootstrap-select.min.js',
            '/assets/js/vendor/jquery-ui.js',
            '/assets/js/vendor/magnify-popup.min.js',
            '/assets/js/vendor/paralax.min.js',
            '/assets/js/vendor/paralax-scroll.js',
            '/assets/js/vendor/plyr.js',
            '/assets/js/vendor/text-type.js',
            '/assets/js/vendor/odometer.js',
            '/assets/js/vendor/countdown.js', 
            '/assets/js/main.js'
        ];

        loadScript('/assets/js/vendor/jquery.js', () => {
            console.log('jQuery loaded. Now loading other scripts.');

            const loadScriptsSequentially = (scripts, index = 0) => {
                if (index < scripts.length) { 
                    loadScript(scripts[index], () => {
                        loadScriptsSequentially(scripts, index + 1);
                    });
                }
            };
            loadScriptsSequentially(scripts);
        });
    });
};
