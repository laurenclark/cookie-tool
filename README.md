# pecr-cookie-optin
PECR Cookie Opt-In Tool

# 🍪 RawCookie


Uses:-

- 📦 Parcel
- Babel
- Vanilla JS
- Sass
- Yarn


__Run Development__

`yarn dev`

You can edit the sass and JS here with hot module reloading. Oututs to `development`
Sass gets compiled by Parcel. You need to include the path to the main.sass file in the index.html head

public/index -> `<link rel="stylesheet" href="../src/styles/main.sass" />`

If you want to test the injected styles, you can comment out the above line in the head and remove the `if (process.env.NODE_ENV === 'production')`
in src/rawCookie.js

<br><br>

__Run Clean__

`yarn clean`

 This wipes the Development and Dist folders, and the cache. 

<br><br>

__Compile JS__

`yarn build-js`
 
Compile the JS package using Babel and Babel Core JS
Regenerator package is needed if you want to use promises and imports/exports

⚠️ If you're not supporting IE, it's recommended you change the `browserslist` in `package.json`
to not target it and older browsers, then recompile/rebundle. You can shave off about 40kb of excess JS and CSS.

<br><br>


__Compile Styles__

Runs using dart-sass on the CLI. Autoprefixes and minifies, outputs to `dist` 

<br><br>


__Update Styles To Inject__

`yarn update-styles-to-inject`

Requires a compiled and minified css file to be in `dist` 
Reads the file and converts it to a .js export `src/styles/compiledCSS.js`

<br><br>

__Bundle__

`yarn bundle-for-prod`

Runs `clean` then `build-styles` then `update-styles-to-inject` and finally `build-js`
Compiles the sass, recreates the JS expport for use in rawCookie.js for injection and then bundles the JS again including the changed styles.

If you only changed the JS you only need to run `build-js`

<br><br>

__Nice to Have__
- Add fetch with polyfill to get all the config data + loading styles for disclosures

- <del>✅ Automate the minifying and stringing of the styles.</del>
- <del>✅ Automate renaming the script to output as rawCookie.js on compile (strip the suffix) </del>
- <del>✅ Add all the global config like privacy policy link, bools to show etc. </del>
