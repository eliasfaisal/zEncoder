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

#### Codecs

- Attbash
<br/>A one direction encoding method, means that iteration loops inside the length<br/>
and every cahracter is replace with the one the reversed direction and same index.<br/>
here's an example:


|A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|
|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|
|Z|Y|X|W|V|U|T|S|R|Q|P|O|N|M|L|K|J|I|H|G|F|E|D|C|B|A|

- Base64 & URI Component
<br/>It's already built-in inside the VM, just going to check if the <br/>
given text is either encodable or decodable.

- YOLIOUS GAISAR
<br/>Simply it's the char that's three blocks ahead.<br/>
here's an examples:

|A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|
|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|
|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|A|B|C|


- Char Code
<br/>Replacing every char with it's own string numbric code.<br/>
here's an examples:

|Letter|Code|
|:--:|:--:|
| A | 65 |
| B | 66 |
| C | 67 |
| D | 68 |
  
- HEXADECIMAL (Base16)
  <br/>Works with numbers, for 0 - 9 is same, from 10 - 15 is A - F<br/>
  and the alghorithem loops this way.<br/>
  </br>
  here's an example:<br/>
  *Generally until (F) there is a hidden zero as first digit:</br>
  F => 0F</br>
  6 => 06</br>
  * Code Sample : 17</br>
  * Map:</br>
  
        +---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
        | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | A | B | C | D | E | F |
        +---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
                                                  B                   A
                                                  |                   |
                                                [1 1]                 +--------------[1 5] 
                                                The left numbers continue,           We filled the first round,
                                                continue the next round and          and there's 11 numbers left
                                                secound digit is [A]                 the first digit 0 is now 1 
        * In the end A & B and joined
        so we get the result HEX(1A) for the int(26)


- Binary
</br>Wroks with Numbers, and only outputs 0 and 1 format,<br/>

  - Encoding:
  </br>Divides the number on 2 until it's value becomes 0;<br/>
  every deviding procces number rest and the divided number are kept<br/>
  every rest is going to be 0 or 1, and this is the binary data,<br/>
  to full view it will be joined together every rest.<br/>
  <br/>Example:
  
            Number = 11;
            11 / 2 = 5 ; 1 (left)
             5 / 2 = 2 ; 1 (left)
             2 / 2 = 1 ; 0 (left)
             1 / 2 = 0 ; 1 (left)

            Final Binary Number is 1011 for integer 11.

  - Decoding:
  <br/>For every digit of the given binary number,<br/>
  2 will be powered by the index of that number and<br/>
  multplied with it's value (0 or 1) and finally <br/>
  every digit is joined together to give the decimal <br/>
  or integer number.<br/>
  <br/>Example:
  
            String Number = "1001";
            2^0 * 1 = 1
            2^1 * 0 = 0
            2^2 * 0 = 0
            2^3 * 1 = 8 
            -----------
            +         9

            Final Integer number is 9 for binary 1001


#### Coming Upgrades & Versions
- Python `3.9` alternative version (coming soon)
