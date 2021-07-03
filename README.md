<img src="Assets/icon.png" align="left" /> zEncoder 
======
Simple text converting tool, created with javascript.
<br/>
<br/>
This Lib was just created for fun 😉 & under MIT License ([License](https://raw.githubusercontent.com/eliasfaisal/zEncoder/main/LICENSE))<br/>
The lastest library file is located at `Lib/zEncoder-2.0.js` and compatible with `nodejs`.

#### Supported Codecs

zEncode was removed due to perforamnce and memory issues, bug can be found here [9351e15](https://github.com/eliasfaisal/zEncoder/commit/9351e154ccd530b6b44693eec6be440af0bbacf8) <br/>

R : `Ready`<br/>
B : `Built-n`

|Codec|Stat|Encoder|Decoder|
|--|--|--|--|
|zEncode|`Removed`|
|CharCode|B|B|B|
|Attbash|R|R|R|
|Binary|R|R|R|
|URI Component|B|B|B|
|Yolious Gaiser|R|R|R|
|Hex|R|R|B|
|Base64|B|B|B|

#### Sample

```javascript
var text = "Hello World";
var result = zEncoder.HEX.encode("Text"); // 48 65 6C 6C 6F 20 57 6F 72 6C 64
```

#### Numbers Part
Hex & Binary Only Works with Numbers, and in strings they treat every letter <br/>
by replacing it with it's own **`character code`**.<br/>
more details and exaplaining are inside `Lib/zEncoder-2.0.js` as comments for every function.

```javascript
var num    = 8080;
var result = zEncoder.HEX.encodeNumber(num) //1F09

//Numbers Functions

zEncoder.BINARY.encodeNumber;
zEncoder.BINARY.decodeNumber;

zEncoder.HEX.encodeNumber;
zEncoder.HEX.decodeNumber;

```



#### Coming Upgrades & Versions
- Python `3.9` alternative version (coming soon)
