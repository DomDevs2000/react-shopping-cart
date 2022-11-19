# Notes 

## Issues

had issues installing due to node-sass not building on newer OSX versions. Fix is to use newer version of node-gyp
but could not get it working.

```
npm ERR! code 1
npm ERR! path /Users/aidancarvalhodev/Desktop/Aidan-Carvalho-Tech-Test-Xanda/node_modules/node-sass
npm ERR! command failed
npm ERR! command sh -c -- node scripts/build.js
npm ERR! Building: /Users/aidancarvalhodev/.nvm/versions/node/v18.8.0/bin/node /Users/aidancarvalhodev/Desktop/Aidan-Carvalho-Tech-Test-Xanda/node_modules/node-gyp/bin/node-gyp.js rebuild --verbose --libsass_ext= --libsass_cflags= --libsass_ldflags= --libsass_library=
npm ERR! gyp info it worked if it ends with ok
npm ERR! gyp verb cli [
npm ERR! gyp verb cli   '/Users/aidancarvalhodev/.nvm/versions/node/v18.8.0/bin/node',
npm ERR! gyp verb cli   '/Users/aidancarvalhodev/Desktop/Aidan-Carvalho-Tech-Test-Xanda/node_modules/node-gyp/bin/node-gyp.js',
npm ERR! gyp verb cli   'rebuild',
npm ERR! gyp verb cli   '--verbose',
npm ERR! gyp verb cli   '--libsass_ext=',
npm ERR! gyp verb cli   '--libsass_cflags=',
npm ERR! gyp verb cli   '--libsass_ldflags=',
npm ERR! gyp verb cli   '--libsass_library='
npm ERR! gyp verb cli ]
npm ERR! gyp info using node-gyp@3.6.2
npm ERR! gyp info using node@18.8.0 | darwin | x64
npm ERR! gyp verb command rebuild []
npm ERR! gyp verb command clean []
npm ERR! gyp verb clean removing "build" directory
npm ERR! gyp verb command configure []

```

Since issue is node-sass had to switch to using standard css. Could not work out webpack config to use standard css so used ParcelJS instead