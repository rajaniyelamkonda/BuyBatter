Prerequisites:
--------------
1. Node
2. Angular cli

Installation
------------
$ npm install

Cordova
-------
We need 'android Sdk' to install cordova

$ npm install -g cordova

Go to project folder then run the following commands.

$ cordova create cordova batter.store "batter store"

$ cd cordova

$ cordova platform add android

$ cordova build android

$ cd..

$ ng build --target=production --environment=prod --output-path cordova/www/ --base-href .

For swipe On Toggle Div
------------------------

We need to get hammer.js, for that 

we need to include CDN in index.html in <head> tag

CDN : 

<script src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.js"></script>

(Or) we can install hammer.js as follows

$ npm install hammerjs --save

// app.module.ts

import 'hammerjs';