# debugfilelog
Install this globally and use it to debug where console.log can't be used. Replaces console.log writing in a file of your choice.

Works on node 0.10 and iojs too.

## Installation

```
 $ npm i -g debugfilelog
```

## Usage

```javascript
const filelog = require('debugfilelog')('/tmp/log')

filelog('hello world!')  // writes to file
```
