# 🍪 RawCookie

PECR Cookie Opt-In Tool

Uses:

-   📦 Parcel
-   💬 Babel
-   🍦 Vanilla JS
-   💄 Sass
-   🧶 Yarn

<br>
<hr>


## How to Use

__Basic Use:__

Include `rawCookie.js` from dist in your script tag.

`<script src="./myproject/rawCookie.js" />`

Note: If placing in the head you need to add the `defer` attribute.

__Custom Colors:__

You can include any or all of the following data-attributes to set colours for the initial dialog, and info dialog background(bg) and foreground(fg), as well as the button background and foreground, and also the color of the link.

```html
data-color-primarybg="#f0f333"
data-color-primaryfg="#f5f"
data-color-secondarybg="#f5f"
data-color-secondaryfg="#f0f333"
data-color-buttonbg="#FF0000"
data-color-buttonfg="#e1e1e1"
data-color-link="#579a60"
```

Example:

```html
<script defer src="../src/rawCookie.js" data-color-primarybg="#f0f333" data-color-primaryfg="#f5f" data-color-secondarybg="#f5f" data-color-secondaryfg="#f0f333" data-color-buttonbg="#FF0000" data-color-buttonfg="#e1e1e1" data-color-link="#579a60"></script>
```


**Run Development**

`yarn dev`

You can edit the sass and JS here with hot module reloading. Oututs to `development`
Sass gets compiled by Parcel. You need to include the path to the main.sass file in the index.html head

public/index -> `<link rel="stylesheet" href="../src/styles/main.sass" />`

If you want to test the injected styles, you can comment out the above line in the head and remove the `if (process.env.NODE_ENV === 'production')`
in src/rawCookie.js

<br>

**Run Clean**

`yarn clean`

This wipes the Development and Dist folders, and the cache.

<br>

**Compile JS**

`yarn build-js`

Compile the JS package using Babel and Babel Core JS
Regenerator package is needed if you want to use promises and imports/exports

⚠️ If you're not supporting IE, it's recommended you change the `browserslist` in `package.json`
to not target it and older browsers, then recompile/rebundle. You can shave off about 40kb of excess JS and CSS.

<br>

**Compile Styles**

Runs using dart-sass on the CLI. Autoprefixes and minifies, outputs to `dist`

<br>

**Update Styles To Inject**

`yarn update-styles-to-inject`

Requires a compiled and minified css file to be in `dist`
Reads the file and converts it to a .js export `src/styles/compiledCSS.js`

<br>

**Bundle**

`yarn bundle-for-prod`

Runs `clean` then `build-styles` then `update-styles-to-inject` and finally `build-js`
Compiles the sass, recreates the JS expport for use in rawCookie.js for injection and then bundles the JS again including the changed styles.

If you only changed the JS you only need to run `build-js`

<br>

**Nice to Have**

-   Convert the data js files to JSON
-   Add fetch with polyfill to get all the config data + loading styles for disclosures
-   Add unit testing

-   <del>✅ Automate the minifying and stringing of the styles.</del>
-   <del>✅ Automate renaming the script to output as rawCookie.js on compile (strip the suffix) </del>
-   <del>✅ Add all the global config like privacy policy link, bools to show etc. </del>
