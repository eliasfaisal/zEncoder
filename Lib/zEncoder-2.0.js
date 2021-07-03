/*
    zEncoder CLI Library v2.0 
    -----------------------------
    Created : 22 Dec 2020 (Orginal Github Repo)
    Updated : 2 July 2021 | 21:57
    ----------------------------------
    Developed by Elias Faisal 
    [Github] @eliasfaisal
    [Facebk] @eliasfaisal82
    ----------------------------------
    This Lib was just made for Fun :D
    ----------------------------------
    License : MIT Licnese, locate at "LICENCE" file in main dir
    This Project Repo : https://github.com/eliasfaisal/zEncoder
*/

zEncoder = new (function zEncoder() {
    if (this === window) {
        throw ("Please use 'new' operator.");
    }

    const self = this;

    self.chars = {
        normal: "abcdefghijklmnopqrstuvwxyz",
        normal_rev: "zyxwvutsrqponmlkjihgfedcba",
        upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        upper_rev: "ZYXWVUTSRQPONMLKJIHGFEDCBA"
    }

    // assigning configurations, so they still read only.

    Object.defineProperty(self,"chars",{
        writable : 0,
        readonly:1,
        configurable : 0,
        enumerable : 0,
    });

    for(var id of ["normal","normal_rev","upper","upper_rev"]){
        Object.defineProperty(self.chars,id,{
            writable : 0,
            readonly:1,
            configurable : 0,
            enumerable : 0,
        });
    }

    /*
        Attbash
        =======
        A one direction encoding method, means that iteration loops inside the length
        and every cahracter is replace with the one the reversed direction and same index.
        here's an example:
        +---+---+
        | A | Z |
        +---+---+
        | B | Y |
        +---+---+
        | C | X |
        +---+---+
        | D | W |
        +---+---+
    */
    self.ATTBASH = {
        encode : function(text) {
            var out = "";
            for (var i = 0; i < text.length; i++) {
                if (self.chars.normal.indexOf(text[i]) !== -1) {
                    out += self.chars.normal_rev[self.chars.normal.indexOf(text[i])];
                } else if (self.chars.upper.indexOf(text[i]) !== -1) {
                    out += self.chars.upper_rev[self.chars.upper.indexOf(text[i])];
                } else {
                    out += text[i];
                }
            }
            return out;
        }
    }
    

    /*
        Base64
        ======
        It's already built-in inside the JSVM, just going to check if the 
        given text is either encodable or decodable
    */
    self.BASE64 = {
        encode : function(text){
            try{
                return btoa(text);
            }catch{
                throw ("Base64: encoding error, may caused by unsupported chars");
            }
        },
        decode : function(text){
            try{
                return atob(text);
            }catch{
                throw ("Base64: decoding error, may caused by unsupported chars");
            }
        }
    }

    /*
        URI Component
        =============
        It's already built-in inside the JSVM, just going to check if the 
        given text is either encodable or decodable
    */
    self.URI = {
        encode : function(text){
            try{
                return encodeURIComponent(text);
            }catch{
                throw ("URI: encoding error, may caused by unsupported chars");
            }
        },
        decode : function(text){
            try{
                return decodeURIComponent(text);
            }catch{
                throw ("URI: decoding error, may caused by unsupported chars");
            }
        }
    }

    /*
        YOLIOUS GAISAR
        ==============
        Simply it's the char that's three blocks ahead.
        here's an examples:
        #1 
        +---+---+---+---+
        | A | B | C | D |
        +---+---+---+---+
          x           x
          |           |
          +----->-----+
          
        #2
        +---+---+
        | A | D |
        +---+---+
        | B | E |
        +---+---+
        | C | F |
        +---+---+
        | D | G |
        +---+---+
    */
    self.YOLIOUS = {
        encode : function(text){
            var out = "";
            for(var i = 0; i < text.length ; i++){
                if (self.chars.normal.indexOf(text[i]) !== -1) {
                    var index = self.chars.normal.indexOf(text[i]);

                    index > 22 ? index = 25 % index - 3 : index;

                    out += self.chars.normal[index + 3];

                } else if (self.chars.upper.indexOf(text[i]) !== -1) {
                    var index = self.chars.upper.indexOf(text[i]);

                    index > 22 ? index = 25 % index - 3 : index;

                    out += self.chars.upper[index + 3];

                } else {
                    out += text[i];
                }
            }
            return out;
        },

        decode : function(text){
            var out = "";
            for(var i = 0; i < text.length ; i++){
                if (self.chars.normal.indexOf(text[i]) !== -1) {
                    var index = self.chars.normal.indexOf(text[i]);

                    index < 3 ? index = 26 + index : index;

                    out += self.chars.normal[index - 3];

                } else if (self.chars.upper.indexOf(text[i]) !== -1) {
                    var index = self.chars.upper.indexOf(text[i]);

                    index < 3 ? index = 26 + index : index;

                    out += self.chars.upper[index - 3];

                } else {
                    out += text[i];
                }
            }
            return out;
        }
    }

    /*
        CharCode
        ========
        Replacing every char with it's own string numbric code.
        here's an example:
        +---+----+
        | A | 65 |
        +---+----+
        | B | 66 |
        +---+----+
        | C | 67 |
        +---+----+
        | D | 68 |
        +---+----+
    */
    self.CHARCODE = {
        encode : function(text){
            var out = "";

            for(var i = 0 ; i < text.length ; i++){
                if(i !== text.length - 1){
                    out += `${text.charCodeAt(i)},`;
                }else{
                    out += `${text.charCodeAt(i)}`;
                }
            }

            return out;
        },

        decode : function(text){
            var out = "";
            var points = text.split(",");

            for(var point of points){
                try{
                    out += String.fromCharCode(point);
                }catch{
                    throw ("CHARCODE : decoding error, may caused by unsupported chars")
                }
            }

            return out;
        }
    }

    /*
        HEXADECIMAL (Base16)
        ====================
        Works with numbers, for 0 - 9 is same, from 10 - 15 is A - F
        and the alghorithem loops this way.
        here's an example:

        *Generally until (F) there is a hidden zero as first digit:
        F => 0F
        6 => 06
        
        * Code Sample : 17
        * Map:
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



    */
    self.HEX = {
        encodeNumber : function(number){
            // https://en.wikipedia.org/wiki/Hexadecimal
            return toHex(number);
            function toHex(d) {
                var r = d % 16;
                if (d - r == 0) {
                    return toChar(r);
                }
                return toHex((d - r) / 16) + toChar(r);
            }

            function toChar(n) {
                const alpha = "0123456789ABCDEF";
                return alpha.charAt(n);
            }
        },

        decodeNumber : function(hex){

            try{
                return Function(`return 0x${hex}`)();
            }catch{
                throw("HEX : decoding error, may caused by unsupported chars")
            }

        },

        decodeString : function(hex){

            try{
                return Function(`return "\\x${hex}"`)();
            }catch{
                throw("HEX : decoding error, may caused by unsupported chars")
            }

        },

        encode : function(text){
            var out = "";
            for(var i = 0 ; i < text.length ; i++){
                if(i !== text.length - 1){
                    out += `${ this.encodeNumber( text.charCodeAt(i) ) } `;
                }else{
                    out += `${ this.encodeNumber( text.charCodeAt(i) ) }`;
                }
                
            }
            return out;
        },

        decode : function(text){
            var dataArray = text.split(" ");
            var out = "";

            for(var i = 0 ; i < dataArray.length ; i++){
                var input = dataArray[i];
                out += Function(`return '${("\\x" + input)}'`)();
            }
            return out;
        }
    }

    /*
        Binary
        ======
        Wroks with Numbers, and only outputs 0 and 1 format,

        Encoding:
            Divides the number on 2 until it's value becomes 0;
            every deviding procces number rest and the divided number are kept
            every rest is going to be 0 or 1, and this is the binary data,
            to full view it will be joined together every rest.

            Example:

            Number = 11;
            11 / 2 = 5 ; 1 (left)
             5 / 2 = 2 ; 1 (left)
             2 / 2 = 1 ; 0 (left)
             1 / 2 = 0 ; 1 (left)

            Final Binary Number is 1011 for integer 11.

        Decoding:
            For every digit of the given binary number,
            2 will be powered by the index of that number and
            multplied with it's value (0 or 1) and finally 
            every digit is joined together to give the decimal 
            or integer number.

            Example:

            String Number = "1001";
            2^0 * 1 = 1
            2^1 * 0 = 0
            2^2 * 0 = 0
            2^3 * 1 = 8 
            -----------
            +         9

            Final Integer number is 9 for binary 1001

    */
    self.BINARY = {

        encodeNumber : function (number){

            var bin = [];
            var xint;

            for(;;){

                xint = (number%2);
                bin.push( xint )

                number = parseInt(number/2)
                if( number < 1 ){
                    break;
                }
            }

            return bin.join("");
        },

        decodeNumber : function(stringedNumber){
            int = 0;

            for(var i = 0; i < stringedNumber.length ; i++){
                int += (2**i * stringedNumber[i])
            }

            return int;
        },

        encode : function(text){
            var out = [];

            for(var i = 0 ; i < text.length ; i++){
                out.push( this.encodeNumber( text.charCodeAt(i) ) );
            }

            return out.join(" ");
            
        },

        decode : function(text){
            var out = "";
            var dataArray = text.split(" ");

            for(var i = 0 ; i < dataArray.length ; i++){
                out += String.fromCharCode( this.decodeNumber( dataArray[i] ) );
            }

            return out;

        }
    }
}
);  
