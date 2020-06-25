# pecr-cookie-optin
PECR Cookie Opt-In Tool

# 🍪 RawCookie


Uses:-

- 📦 Parcel
- Babel
- Vanilla JS
- Sass
- Yarn


__Run Development output to Development__

`yarn dev`

__Run Clean__

`yarn clean`

__Run Prod Build to Dist__

`yarn build`

-> The main.js file in "dist" is what you want to use. Probably rename to something like "rawcookie.js" to include in a script.

__✏️✏️ To Edit the Styles__

1. Include main.sass in src/main.js at the top 
2. Make and preview your edits
3. Run "Build" 
4. Take the minified styles and add them to the string in src/compiledStyles.js to be injected into the head
5. Comment out main.sass or next time you run there will be conflict between the styles in head and the sass 

__Nice to Have__

Automate the minifying and stringing of the styles.
