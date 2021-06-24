document.title = "zEncoder - zEncoding (Default)";
buffer = {
    file: null,
    data: null,
    returner: null,
    clean: function() {
        buffer.file = null;
        buffer.data = null;
        buffer.returner = null;
    }
};

loadafile = document.createElement("input");
loadafile.id = "loadafile";
loadafile.type = "file";

manager = {
    confirm_stat: null,
    cmode: null /* 1:input 2:loadfile */
    ,
    version: 0.2,
    developer: "AlyaSs Faisal [ComputerMan]",
    IDE: "Win8.1, Chromium v69 Dev Tools,Graphical Assets Designed with (Microsoft PowerPoint 2013)",
    project: "zEncoder",
    map: {
        zEncoding: {
            a: "#@#",
            b: "#@@#",
            c: "$@@$",
            d: "$@@@$",
            e: "%###%",
            f: "%####%",
            g: "[-]",
            h: "[/-*-/]",
            i: "&%%%%&",
            j: "&%%%&",
            k: "*^^^^*",
            l: "*^^^*",
            m: "(&&&&(",
            n: "(&&&(",
            o: ")****)",
            p: ")***)",
            q: "_((((_",
            r: "_(((_",
            s: "/-*-/))))/-*-/",
            t: "/-*-/)))/-*-/",
            u: "|____|",
            v: "|___|",
            w: "!====!",
            x: "!===!",
            y: "@\\\\@",
            z: "@\\\@",
            A: "/-*-/#@#",
            B: "/-*-/#@@#",
            C: "/-*-/$@@$",
            D: "/-*-/$@@@$",
            E: "/-*-/%###%",
            F: "/-*-/%####%",
            G: "/-*-/[-]",
            H: "/-*-/[/-*-/]",
            I: "/-*-/&%%%%&",
            J: "/-*-/&%%%&",
            K: "/-*-/*^^^^*",
            L: "/-*-/*^^^*",
            M: "/-*-/(&&&&(",
            N: "/-*-/(&&&(",
            O: "/-*-/)****)",
            P: "/-*-/)***)",
            Q: "/-*-/_((((_",
            R: "/-*-/_(((_",
            S: "/-*-//-*-/))))/-*-/",
            T: "/-*-//-*-/)))/-*-/",
            U: "/-*-/|____|",
            V: "/-*-/|___|",
            W: "/-*-/!====!",
            X: "/-*-/!===!",
            Y: "/-*-/@\\\\@",
            Z: "/-*-/@\\\@",
            n0: '/*/*/',
            n1: '-/-*-/-/-*-/-',
            n2: '|||||',
            n3: '~~~~~',
            n4: '>?>?>',
            n5: '<:<:<',
            n6: ',;,;,',
            n7: ']/[/]',
            n8: '{#;}',
            n9: '<;?">'
        },

        atbash: {
            a: "z",
            b: "y",
            c: "x",
            d: "w",
            e: "v",
            f: "u",
            g: "t",
            h: "s",
            i: "r",
            j: "q",
            k: "p",
            l: "o",
            m: "n",
            n: "m",
            o: "l",
            p: "k",
            q: "j",
            r: "i",
            s: "h",
            t: "g",
            u: "f",
            v: "e",
            w: "d",
            x: "c",
            y: "b",
            z: "a",
            A: "Z",
            B: "Y",
            C: "X",
            D: "W",
            E: "V",
            F: "U",
            G: "T",
            H: "S",
            I: "R",
            J: "Q",
            K: "P",
            L: "O",
            M: "N",
            N: "M",
            O: "L",
            P: "K",
            Q: "J",
            R: "I",
            S: "H",
            T: "G",
            U: "F",
            V: "E",
            W: "D",
            X: "C",
            Y: "B",
            Z: "A"
        },

        yoliousgaiser: {
            a: "d",
            b: "e",
            c: "f",
            d: "g",
            e: "h",
            f: "i",
            g: "j",
            h: "k",
            i: "l",
            j: "m",
            k: "n",
            l: "o",
            m: "p",
            n: "q",
            o: "r",
            p: "s",
            q: "t",
            r: "u",
            s: "v",
            t: "w",
            u: "x",
            v: "y",
            w: "z",
            x: "a",
            y: "b",
            z: "c",
            A: "D",
            B: "E",
            C: "F",
            D: "G",
            E: "H",
            F: "I",
            G: "J",
            H: "K",
            I: "L",
            J: "M",
            K: "N",
            L: "O",
            M: "P",
            N: "Q",
            O: "R",
            P: "S",
            Q: "T",
            R: "U",
            S: "V",
            T: "W",
            U: "X",
            V: "Y",
            W: "Z",
            X: "A",
            Y: "B",
            Z: "C",

            reverse: {
                a: "x",
                b: "y",
                c: "z",
                d: "a",
                e: "b",
                f: "c",
                g: "d",
                h: "e",
                i: "f",
                j: "g",
                k: "h",
                l: "i",
                m: "j",
                n: "k",
                o: "l",
                p: "m",
                q: "n",
                r: "o",
                s: "p",
                t: "q",
                u: "r",
                v: "s",
                w: "t",
                x: "u",
                y: "v",
                z: "w",
                A: "X",
                B: "Y",
                C: "Z",
                D: "A",
                E: "B",
                F: "C",
                G: "D",
                H: "E",
                I: "F",
                J: "G",
                K: "H",
                L: "I",
                M: "J",
                N: "K",
                O: "L",
                P: "M",
                Q: "N",
                R: "O",
                S: "P",
                T: "Q",
                U: "R",
                V: "S",
                W: "T",
                X: "U",
                Y: "V",
                Z: "W"
            }
        },

        hex: {
            a: "61",
            b: "62",
            c: "63",
            d: "64",
            e: "65",
            f: "66",
            g: "67",
            h: "68",
            i: "69",
            j: "6A",
            k: "6B",
            l: "6C",
            m: "6D",
            n: "6E",
            o: "6F",
            p: "70",
            q: "71",
            r: "72",
            s: "73",
            t: "74",
            u: "75",
            v: "76",
            w: "77",
            x: "78",
            y: "79",
            z: "7A",
            A: "41",
            B: "42",
            C: "43",
            D: "44",
            E: "45",
            F: "46",
            G: "47",
            H: "48",
            I: "49",
            J: "4A",
            K: "4B",
            L: "4C",
            M: "4D",
            N: "4E",
            O: "4F",
            P: "50",
            Q: "51",
            R: "52",
            S: "53",
            T: "54",
            U: "55",
            V: "56",
            W: "57",
            X: "58",
            Y: "59",
            Z: "5A",
            "~": "7E",
            "!": "21",
            "@": "40",
            "#": "23",
            "$": "24",
            "%": "25",
            "^": "5E",
            "&": "26",
            "*": "2A",
            "(": "28",
            ")": "29",
            "_": "5F",
            "|": "7C",
            "0": "30",
            "1": "31",
            "2": "32",
            "3": "33",
            "4": "34",
            "5": "35",
            "6": "36",
            "7": "37",
            "8": "38",
            "9": "39",
            "\\": "5C",
            "/": "2F",
            "+": "2B",
            "-": "2D",
            ".": "2E",
            "?": "3F",
            ">": "3E",
            "<": "3C",
            ":": "3A",
            '"': "22",
            "'": "27",
            "}": "7D",
            "{": "7B",
            "`": "60",
            "×": "C397",
            "÷": "C3B7",
            ",": "2C",
            " ": "20",
            "\n": "0D0A",
            "ى": "D989",
            "آ": "D8A2",
            "أ": "D8A3",
            "ا": "D8A7",
            "ب": "D8A8",
            "ت": "D8AA",
            "ث": "D8AB",
            "ج": "D8AC",
            "ح": "D8AD",
            "خ": "D8AE",
            "د": "D8AF",
            "ذ": "D8B0",
            "ر": "D8B1",
            "ز": "D8B2",
            "س": "D8B3",
            "ش": "D8B4",
            "ص": "D8B5",
            "ض": "D8B6",
            "ط": "D8B7",
            "ظ": "D8B8",
            "ع": "D8B9",
            "غ": "D8BA",
            "ف": "D981",
            "ق": "D982",
            "ل": "D984",
            "ك": "D983",
            "م": "D985",
            "ن": "D986",
            "ه": "D987",
            "و": "D988",
            "ي": "D98A",
            reverse: {
                "61": "a",
                "62": "b",
                "63": "c",
                "64": "d",
                "65": "e",
                "66": "f",
                "67": "g",
                "68": "h",
                "69": "i",
                "6A": "j",
                "6B": "k",
                "6C": "l",
                "6D": "m",
                "6E": "n",
                "6F": "o",
                "70": "p",
                "71": "q",
                "72": "r",
                "73": "s",
                "74": "t",
                "75": "u",
                "76": "v",
                "77": "w",
                "78": "x",
                "79": "y",
                "7A": "z",
                "41": "A",
                "42": "B",
                "43": "C",
                "44": "D",
                "45": "E",
                "46": "F",
                "47": "G",
                "48": "H",
                "49": "I",
                "4A": "J",
                "4B": "K",
                "4C": "L",
                "4D": "M",
                "4E": "N",
                "4F": "O",
                "50": "P",
                "51": "Q",
                "52": "R",
                "53": "S",
                "54": "T",
                "55": "U",
                "56": "V",
                "57": "W",
                "58": "X",
                "59": "Y",
                "5A": "Z",
                "7E": "~",
                "21": "!",
                "40": "@",
                "23": "#",
                "24": "$",
                "25": "%",
                "5E": "^",
                "26": "&",
                "2A": "*",
                "28": "(",
                "29": ")",
                "5F": "_",
                "7C": "|",
                "30": "0",
                "31": "1",
                "32": "2",
                "33": "3",
                "34": "4",
                "35": "5",
                "36": "6",
                "37": "7",
                "38": "8",
                "39": "9",
                "5C": "\\",
                "2F": "/",
                "2B": "+",
                "2D": "-",
                "2E": ".",
                "3F": "?",
                "3E": ">",
                "3C": "<",
                "3A": ":",
                "22": '"',
                "27": "'",
                "7D": "}",
                "7B": "{",
                "60": "`",
                "C397": "×",
                "C3B7": "÷",
                "2C": ",",
                "20": " ",
                "0D0A": "\n",
                D989: "ى",
                D8A2: "آ",
                D8A3: "أ",
                D8A7: "ا",
                D8A8: "ب",
                D8AA: "ت",
                D8AB: "ث",
                D8AC: "ج",
                D8AD: "ح",
                D8AE: "خ",
                D8AF: "د",
                D8B0: "ذ",
                D8B1: "ر",
                D8B2: "ز",
                D8B3: "س",
                D8B4: "ش",
                D8B5: "ص",
                D8B6: "ض",
                D8B7: "ط",
                D8B8: "ظ",
                D8B9: "ع",
                D8BA: "غ",
                D981: "ف",
                D982: "ق",
                D984: "ل",
                D983: "ك",
                D985: "م",
                D986: "ن",
                D987: "ه",
                D988: "و",
                D98A: "ي"
            }
        }

    },
    elements: {
        input: input,
        output: output,
        confirmfile: confirmfile,
        storefile: storefile,
        loadafile: loadafile,
        encode: encode,
        decode: decode,
        swap: swap,
        mode: mode,
        clean: clean,
        copy: copy,
        store: store
    },
    call: {
        begin_coder: begin_coder,
        zEncode: zEncode,
        atbash: atbash,
        binary: binary,
        URI: URI,
        yoliousgaiser: yoliousgaiser,
        hex: hex,
        detectSize: function(time) {
            if (manager.elements.input.textLength / 1024 < 1024) {
                manager.elements.input.title = (manager.elements.input.textLength / 1024).toFixed() + "KB";
            } else if (manager.elements.input.textLength / 1024 / 1024 > 1024) {
                manager.elements.input.title = (manager.elements.input.textLength / 1024 / 1024).toFixed() + "MB";
            } else if (manager.elements.input.textLength / 1024 / 1024 / 1024) {
                manager.elements.input.title = (manager.elements.input.textLength / 1024 / 1024 / 1024).toFixed() + "GB";
            }
            if (manager.elements.output.textLength / 1024 < 1024) {
                manager.elements.output.title = (manager.elements.output.textLength / 1024).toFixed() + "KB";
            } else if (manager.elements.output.textLength / 1024 / 1024 > 1024) {
                manager.elements.output.title = (manager.elements.output.textLength / 1024 / 1024).toFixed() + "MB";
            } else if (manager.elements.output.textLength / 1024 / 1024 / 1024) {
                manager.elements.output.title = (manager.elements.output.textLength / 1024 / 1024 / 1024).toFixed() + "GB";
            }
            if (time) {
                setTimeout("manager.call.detectSize(" + time + ")", time)
            }
            document.title = "zEncoder - " + mode.selectedOptions[0].getAttribute("txt") + " | " + manager.elements.input.title + " - " + manager.elements.output.title;
            return manager.elements.input.title + " - " + manager.elements.output.title;
        }
    }
};
manager.call.detectSize(1000);
(onresize = function() {
    holder.style.height = window.innerHeight - 40;
}
)();
/////////////////////////////////////////////
addEventListener("keydown", (e)=>{
    if (e.keyCode == 27 /*Escape*/
    ) {
        if (!(manager.elements.storefile.hidden)) {
            childwndbtn_cancel_store.click();
        } else if (!(manager.elements.confirmfile.hidden)) {
            childwndbtn_cancel.click();
        }
    } else if (e.keyCode == 13 /*Enter*/
    ) {
        if (!(manager.elements.storefile.hidden)) {
            childwndbtn_done.click();
        } else if (!(manager.elements.confirmfile.hidden)) {
            childwndbtn_continue.click();
        }
    }
}
)
mode.addEventListener("change", ()=>{
    document.title = "zEncoder - " + mode.selectedOptions[0].getAttribute("txt");
}
)
uppercase.addEventListener("click", ()=>{
    manager.elements.input.value = manager.elements.input.value.toUpperCase();
}
)
lowercase.addEventListener('click', ()=>{
    manager.elements.input.value = manager.elements.input.value.toLowerCase();
}
)
copy.addEventListener("click", ()=>{
    manager.elements.output.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}
)
clean.addEventListener('click', ()=>{
    input.value = "";
    output.value = "";
}
)
swap.addEventListener("click", ()=>{
    if (input.textLength > output.textLength) {
        manager.temptxt = output.value;
        output.value = input.value;
        input.value = manager.temptxt;
        delete (manager.temptxt);
    } else {
        manager.temptxt = input.value;
        input.value = output.value;
        output.value = manager.temptxt;
        delete (manager.temptxt);
    }
}
);
encode.addEventListener("click", ()=>{
    if (input.textLength >= 12288) {
        if (input.textLength / 1024 < 1024) {
            document.querySelectorAll(".childwndtxtholder")[0].lastElementChild.innerHTML = "File Size is " + (input.textLength / 1204).toFixed() + "KB (Max 12KB)";
        } else if (buffer.file.size / 1024 / 1024 < 1024) {
            document.querySelectorAll(".childwndtxtholder")[0].lastElementChild.innerHTML = "File Size is " + (input.textLength / 1024 / 1204).toFixed() + "MB (Max 12KB)";
        } else if (buffer.file.size / 1024 / 1024 / 1024 < 1024) {
            document.querySelectorAll(".childwndtxtholder")[0].lastElementChild.innerHTML = "File Size is " + (input.textLength / 1204 / 1204 / 1204).toFixed() + "GB (Max 12KB)";
        }
        manager.confirm_stat = 1;
        confirmfile.hidden = false;
        manager.cmode = 1;
    } else {
        begin_coder(Number(mode.selectedOptions[0].getAttribute("v")), 1);
    }
}
);
decode.addEventListener("click", ()=>{
    if (input.textLength >= 12288) {
        if (input.textLength / 1024 < 1024) {
            document.querySelectorAll(".childwndtxtholder")[0].lastElementChild.innerHTML = "File Size is " + (input.textLength / 1204).toFixed() + "KB (Max 12KB)";
        } else if (buffer.file.size / 1024 < 1024) {
            document.querySelectorAll(".childwndtxtholder")[0].lastElementChild.innerHTML = "File Size is " + (input.textLength / 1024 / 1204).toFixed() + "MB (Max 12KB)";
        } else if (buffer.file.size / 2048 < 1024) {
            document.querySelectorAll(".childwndtxtholder")[0].lastElementChild.innerHTML = "File Size is " + (input.textLength / 1204 / 1204 / 1204).toFixed() + "GB (Max 12KB)";
        }
        manager.cmode = 2;
        manager.confirm_stat = 1;
        confirmfile.hidden = false;
    } else {
        begin_coder(Number(mode.selectedOptions[0].getAttribute("v")), 2);
    }
}
);
loadfile.addEventListener("click", ()=>{
    loadafile.onchange = function() {
        buffer.file = loadafile.files[0];
        if (!(buffer.file == undefined)) {
            if (buffer.file.size > 12288) {
                manager.confirm_stat = 2;
                if (buffer.file.size / 1024 < 1024) {
                    document.querySelectorAll(".childwndtxtholder")[0].lastElementChild.innerHTML = "File Size is " + (buffer.file.size / 1024).toFixed() + "KB (Max 12KB)";
                } else if (buffer.file.size / 1024 / 1024 < 1024) {
                    document.querySelectorAll(".childwndtxtholder")[0].lastElementChild.innerHTML = "File Size is " + (buffer.file.size / 1024 / 1024).toFixed() + "MB (Max 12KB)";
                } else if (buffer.file.size / 1024 / 1024 / 1024 < 1024) {
                    document.querySelectorAll(".childwndtxtholder")[0].lastElementChild.innerHTML = "File Size is " + (buffer.file.size / 1024 / 1024 / 1024).toFixed() + "GB (Max 12KB)";
                }
                return confirmfile.hidden = false;
            }
            buffer.data = new FileReader(buffer.data);
            buffer.data.onload = function() {
                input.value = buffer.data.result;
            }
            buffer.returner = buffer.data.readAsText(buffer.file);
        }

    }
    loadafile.click();
}
);
store.addEventListener("click", ()=>{
    if (manager.elements.output.textLength == 0) {
        return null;
    }
    if (buffer.file) {
        storefilename = buffer.file.name
        storefilename = storefilename.replace(".", ":*:");
        filename_store.value = storefilename.slice(0, storefilename.search(":*:"));
        ext.value = storefilename.slice((storefilename.search(":*:") + 3));
    }
    storefile.hidden = false;
    if (output.textLength / 1024 < 1024) {
        filestore_outputsize.innerHTML = "File Size is " + (output.textLength / 1024).toFixed() + "KB";
    } else if (output.textLength / 1024 / 1024 < 1024) {
        filestore_outputsize.innerHTML = "File Size is " + (output.textLength / 1024 / 1024).toFixed() + "MB";
    } else if (output.textLength / 1024 / 1024 / 1024 < 1024) {
        filestore_outputsize.innerHTML = "File Size is " + (output.textLength / 1024 / 1024 / 1024).toFixed() + "GB";
    }
}
);
//storefile
childwndbtn_cancel_store.addEventListener("click", ()=>{
    storefile.hidden = true;
}
);
childwndbtn_done.addEventListener("click", ()=>{
    storelink = document.createElement("a");
    storelink.href = "data:text/plain;UTF-8," + (encodeURIComponent(output.value));
    storelink.type = "text/plain";
    storelink.download = filename_store.value + "." + ext.value;
    storelink.target = "_blank";
    storelink.click();
}
);
//fileconfirm
childwndbtn_continue.addEventListener("click", ()=>{
    if (manager.confirm_stat == 2) {
        buffer.data = new FileReader(buffer.data);
        buffer.data.onload = function() {
            input.value = buffer.data.result;
        }
        buffer.returner = buffer.data.readAsText(buffer.file);

    } else if (manager.confirm_stat == 1) {
        confirmfile.hidden = true;
        begin_coder(Number(mode.selectedOptions[0].getAttribute("v")), manager.cmode);
    }
    manager.confirm_stat = 0;
    confirmfile.hidden = true;
}
);
childwndbtn_cancel.addEventListener("click", ()=>{
    confirmfile.hidden = true;
    buffer.clean();
}
);
//
////////////////////////////////////////
function begin_coder(mode, cmode) {
    //cmode [1:encode 2:decode]
    //mode [1:zEncoding 2:Attbash 3:Binary 4:URI Component 5:Yolious Gaisar]
    data = input.value;
    if (mode == undefined) {
        return document.write("Unexpected Error");
    }
    if (mode == 1) {
        zEncode(cmode);
    }
    if (mode == 2) {
        atbash();
    }
    if (mode == 3) {
        binary(cmode);
    }
    if (mode == 4) {
        URI(cmode);
    }
    if (mode == 5) {
        yoliousgaiser(cmode);
    }
    if (mode == 6) {
        hex(cmode);
    }
    if (mode == 7) {
        charcode(cmode);
    }
}

function charcode(mode) {
    outdata = '';
    if (mode == 1) {
        for (i = 0; i < data.length; i++) {
            if (i < data.length - 1) {
                outdata = outdata + data.charCodeAt(i).toLocaleString() + ',';
            } else {
                outdata = outdata + data.charCodeAt(i).toLocaleString();
            }

        }
        output.value = outdata;
        outdata = '';
    } else if (mode == 2) {
        data = input.value.split(',');
        for (i = 0; i < data.length; i++) {
            outdata = outdata + data[i].constructor.fromCharCode(data[i]);
        }
        output.value = outdata;
    }
}

function zEncode(mode) {
    //1:encode 2:decode
    if (mode == 1) {
        while (data.includes(" ")) {
            data = data.replace(" ", "#-#");
        }
        while (data.includes("+")) {
            data = data.replace("+", "/#-#/");
        }
        while (data.includes(0)) {
            data = data.replace(0, manager.map.zEncoding.n0);
        }
        while (data.includes(1)) {
            data = data.replace(1, manager.map.zEncoding.n1);
        }
        while (data.includes(2)) {
            data = data.replace(2, manager.map.zEncoding.n2);
        }
        while (data.includes(3)) {
            data = data.replace(3, manager.map.zEncoding.n3);
        }
        while (data.includes(4)) {
            data = data.replace(4, manager.map.zEncoding.n4);
        }
        while (data.includes(5)) {
            data = data.replace(5, manager.map.zEncoding.n5);
        }
        while (data.includes(6)) {
            data = data.replace(6, manager.map.zEncoding.n6);
        }
        while (data.includes(7)) {
            data = data.replace(7, manager.map.zEncoding.n7);
        }
        while (data.includes(8)) {
            data = data.replace(8, manager.map.zEncoding.n8);
        }
        while (data.includes(9)) {
            data = data.replace(9, manager.map.zEncoding.n9);
        }
        while (data.includes("a")) {
            data = data.replace("a", manager.map.zEncoding.a);
        }
        while (data.includes("b")) {
            data = data.replace("b", manager.map.zEncoding.b);
        }
        while (data.includes("c")) {
            data = data.replace("c", manager.map.zEncoding.c);
        }
        while (data.includes("d")) {
            data = data.replace("d", manager.map.zEncoding.d);
        }
        while (data.includes("e")) {
            data = data.replace("e", manager.map.zEncoding.e);
        }
        while (data.includes("f")) {
            data = data.replace("f", manager.map.zEncoding.f);
        }
        while (data.includes("g")) {
            data = data.replace("g", manager.map.zEncoding.g);
        }
        while (data.includes("h")) {
            data = data.replace("h", manager.map.zEncoding.h);
        }
        while (data.includes("i")) {
            data = data.replace("i", manager.map.zEncoding.i);
        }
        while (data.includes("j")) {
            data = data.replace("j", manager.map.zEncoding.j);
        }
        while (data.includes("k")) {
            data = data.replace("k", manager.map.zEncoding.k);
        }
        while (data.includes("l")) {
            data = data.replace("l", manager.map.zEncoding.l);
        }
        while (data.includes("m")) {
            data = data.replace("m", manager.map.zEncoding.m);
        }
        while (data.includes("n")) {
            data = data.replace("n", manager.map.zEncoding.n);
        }
        while (data.includes("o")) {
            data = data.replace("o", manager.map.zEncoding.o);
        }
        while (data.includes("p")) {
            data = data.replace("p", manager.map.zEncoding.p);
        }
        while (data.includes("q")) {
            data = data.replace("q", manager.map.zEncoding.q);
        }
        while (data.includes("r")) {
            data = data.replace("r", manager.map.zEncoding.r);
        }
        while (data.includes("s")) {
            data = data.replace("s", manager.map.zEncoding.s);
        }
        while (data.includes("t")) {
            data = data.replace("t", manager.map.zEncoding.t);
        }
        while (data.includes("u")) {
            data = data.replace("u", manager.map.zEncoding.u);
        }
        while (data.includes("v")) {
            data = data.replace("v", manager.map.zEncoding.v);
        }
        while (data.includes("w")) {
            data = data.replace("w", manager.map.zEncoding.w);
        }
        while (data.includes("x")) {
            data = data.replace("x", manager.map.zEncoding.x);
        }
        while (data.includes("y")) {
            data = data.replace("y", manager.map.zEncoding.y);
        }
        while (data.includes("z")) {
            data = data.replace("z", manager.map.zEncoding.z);
        }
        while (data.includes("a".toUpperCase())) {
            data = data.replace("a".toUpperCase(), manager.map.zEncoding.A);
        }
        while (data.includes("b".toUpperCase())) {
            data = data.replace("b".toUpperCase(), manager.map.zEncoding.B);
        }
        while (data.includes("c".toUpperCase())) {
            data = data.replace("c".toUpperCase(), manager.map.zEncoding.C);
        }
        while (data.includes("d".toUpperCase())) {
            data = data.replace("d".toUpperCase(), manager.map.zEncoding.D);
        }
        while (data.includes("e".toUpperCase())) {
            data = data.replace("e".toUpperCase(), manager.map.zEncoding.E);
        }
        while (data.includes("f".toUpperCase())) {
            data = data.replace("f".toUpperCase(), manager.map.zEncoding.F);
        }
        while (data.includes("g".toUpperCase())) {
            data = data.replace("g".toUpperCase(), manager.map.zEncoding.G);
        }
        while (data.includes("h".toUpperCase())) {
            data = data.replace("h".toUpperCase(), manager.map.zEncoding.H);
        }
        while (data.includes("i".toUpperCase())) {
            data = data.replace("i".toUpperCase(), manager.map.zEncoding.I);
        }
        while (data.includes("j".toUpperCase())) {
            data = data.replace("j".toUpperCase(), manager.map.zEncoding.J);
        }
        while (data.includes("k".toUpperCase())) {
            data = data.replace("k".toUpperCase(), manager.map.zEncoding.K);
        }
        while (data.includes("l".toUpperCase())) {
            data = data.replace("l".toUpperCase(), manager.map.zEncoding.L);
        }
        while (data.includes("m".toUpperCase())) {
            data = data.replace("m".toUpperCase(), manager.map.zEncoding.M);
        }
        while (data.includes("n".toUpperCase())) {
            data = data.replace("n".toUpperCase(), manager.map.zEncoding.N);
        }
        while (data.includes("o".toUpperCase())) {
            data = data.replace("o".toUpperCase(), manager.map.zEncoding.O);
        }
        while (data.includes("p".toUpperCase())) {
            data = data.replace("p".toUpperCase(), manager.map.zEncoding.P);
        }
        while (data.includes("q".toUpperCase())) {
            data = data.replace("q".toUpperCase(), manager.map.zEncoding.Q);
        }
        while (data.includes("r".toUpperCase())) {
            data = data.replace("r".toUpperCase(), manager.map.zEncoding.R);
        }
        while (data.includes("s".toUpperCase())) {
            data = data.replace("s".toUpperCase(), manager.map.zEncoding.S);
        }
        while (data.includes("t".toUpperCase())) {
            data = data.replace("t".toUpperCase(), manager.map.zEncoding.T);
        }
        while (data.includes("u".toUpperCase())) {
            data = data.replace("u".toUpperCase(), manager.map.zEncoding.U);
        }
        while (data.includes("v".toUpperCase())) {
            data = data.replace("v".toUpperCase(), manager.map.zEncoding.V);
        }
        while (data.includes("w".toUpperCase())) {
            data = data.replace("w".toUpperCase(), manager.map.zEncoding.W);
        }
        while (data.includes("x".toUpperCase())) {
            data = data.replace("x".toUpperCase(), manager.map.zEncoding.X);
        }
        while (data.includes("y".toUpperCase())) {
            data = data.replace("y".toUpperCase(), manager.map.zEncoding.Y);
        }
        while (data.includes("z".toUpperCase())) {
            data = data.replace("z".toUpperCase(), manager.map.zEncoding.Z);
        }
        output.value = data;
    } else if (mode == 2) {
        data = input.value;
        while (data.includes("#-#")) {
            data = data.replace("#-#", " ");
        }
        while (data.includes("/#-#/")) {
            data = data.replace("/#-#/", "+");
        }
        while (data.includes(manager.map.zEncoding.n0)) {
            data = data.replace(manager.map.zEncoding.n0, 0);
        }
        while (data.includes(manager.map.zEncoding.n1)) {
            data = data.replace(manager.map.zEncoding.n1, 1);
        }
        while (data.includes(manager.map.zEncoding.n2)) {
            data = data.replace(manager.map.zEncoding.n2, 2);
        }
        while (data.includes(manager.map.zEncoding.n3)) {
            data = data.replace(manager.map.zEncoding.n3, 3);
        }
        while (data.includes(manager.map.zEncoding.n4)) {
            data = data.replace(manager.map.zEncoding.n4, 4);
        }
        while (data.includes(manager.map.zEncoding.n5)) {
            data = data.replace(manager.map.zEncoding.n5, 5);
        }
        while (data.includes(manager.map.zEncoding.n6)) {
            data = data.replace(manager.map.zEncoding.n6, 6);
        }
        while (data.includes(manager.map.zEncoding.n7)) {
            data = data.replace(manager.map.zEncoding.n7, 7);
        }
        while (data.includes(manager.map.zEncoding.n8)) {
            data = data.replace(manager.map.zEncoding.n8, 8);
        }
        while (data.includes(manager.map.zEncoding.n9)) {
            data = data.replace(manager.map.zEncoding.n9, 9);
        }
        while (data.includes(manager.map.zEncoding.a)) {
            data = data.replace(manager.map.zEncoding.a, "a");
        }
        while (data.includes(manager.map.zEncoding.b)) {
            data = data.replace(manager.map.zEncoding.b, "b");
        }
        while (data.includes(manager.map.zEncoding.c)) {
            data = data.replace(manager.map.zEncoding.c, "c");
        }
        while (data.includes(manager.map.zEncoding.d)) {
            data = data.replace(manager.map.zEncoding.d, "d");
        }
        while (data.includes(manager.map.zEncoding.e)) {
            data = data.replace(manager.map.zEncoding.e, "e");
        }
        while (data.includes(manager.map.zEncoding.f)) {
            data = data.replace(manager.map.zEncoding.f, "f");
        }
        while (data.includes(manager.map.zEncoding.g)) {
            data = data.replace(manager.map.zEncoding.g, "g");
        }
        while (data.includes(manager.map.zEncoding.h)) {
            data = data.replace(manager.map.zEncoding.h, "h");
        }
        while (data.includes(manager.map.zEncoding.i)) {
            data = data.replace(manager.map.zEncoding.i, "i");
        }
        while (data.includes(manager.map.zEncoding.j)) {
            data = data.replace(manager.map.zEncoding.j, "j");
        }
        while (data.includes(manager.map.zEncoding.k)) {
            data = data.replace(manager.map.zEncoding.k, "k");
        }
        while (data.includes(manager.map.zEncoding.l)) {
            data = data.replace(manager.map.zEncoding.l, "l");
        }
        while (data.includes(manager.map.zEncoding.m)) {
            data = data.replace(manager.map.zEncoding.m, "m");
        }
        while (data.includes(manager.map.zEncoding.n)) {
            data = data.replace(manager.map.zEncoding.n, "n");
        }
        while (data.includes(manager.map.zEncoding.o)) {
            data = data.replace(manager.map.zEncoding.o, "o");
        }
        while (data.includes(manager.map.zEncoding.p)) {
            data = data.replace(manager.map.zEncoding.p, "p");
        }
        while (data.includes(manager.map.zEncoding.q)) {
            data = data.replace(manager.map.zEncoding.q, "q");
        }
        while (data.includes(manager.map.zEncoding.r)) {
            data = data.replace(manager.map.zEncoding.r, "r");
        }
        while (data.includes(manager.map.zEncoding.s)) {
            data = data.replace(manager.map.zEncoding.s, "s");
        }
        while (data.includes(manager.map.zEncoding.t)) {
            data = data.replace(manager.map.zEncoding.t, "t");
        }
        while (data.includes(manager.map.zEncoding.u)) {
            data = data.replace(manager.map.zEncoding.u, "u");
        }
        while (data.includes(manager.map.zEncoding.v)) {
            data = data.replace(manager.map.zEncoding.v, "v");
        }
        while (data.includes(manager.map.zEncoding.w)) {
            data = data.replace(manager.map.zEncoding.w, "w");
        }
        while (data.includes(manager.map.zEncoding.x)) {
            data = data.replace(manager.map.zEncoding.x, "x");
        }
        while (data.includes(manager.map.zEncoding.y)) {
            data = data.replace(manager.map.zEncoding.y, "y");
        }
        while (data.includes(manager.map.zEncoding.z)) {
            data = data.replace(manager.map.zEncoding.z, "z");
        }
        while (data.includes(manager.map.zEncoding.A)) {
            data = data.replace(manager.map.zEncoding.A, "A");
        }
        while (data.includes(manager.map.zEncoding.B)) {
            data = data.replace(manager.map.zEncoding.B, "B");
        }
        while (data.includes(manager.map.zEncoding.C)) {
            data = data.replace(manager.map.zEncoding.C, "C");
        }
        while (data.includes(manager.map.zEncoding.D)) {
            data = data.replace(manager.map.zEncoding.D, "D");
        }
        while (data.includes(manager.map.zEncoding.E)) {
            data = data.replace(manager.map.zEncoding.E, "E");
        }
        while (data.includes(manager.map.zEncoding.F)) {
            data = data.replace(manager.map.zEncoding.F, "F");
        }
        while (data.includes(manager.map.zEncoding.G)) {
            data = data.replace(manager.map.zEncoding.G, "G");
        }
        while (data.includes(manager.map.zEncoding.H)) {
            data = data.replace(manager.map.zEncoding.H, "H");
        }
        while (data.includes(manager.map.zEncoding.I)) {
            data = data.replace(manager.map.zEncoding.I, "I");
        }
        while (data.includes(manager.map.zEncoding.J)) {
            data = data.replace(manager.map.zEncoding.J, "J");
        }
        while (data.includes(manager.map.zEncoding.K)) {
            data = data.replace(manager.map.zEncoding.K, "K");
        }
        while (data.includes(manager.map.zEncoding.L)) {
            data = data.replace(manager.map.zEncoding.L, "L");
        }
        while (data.includes(manager.map.zEncoding.M)) {
            data = data.replace(manager.map.zEncoding.M, "M");
        }
        while (data.includes(manager.map.zEncoding.N)) {
            data = data.replace(manager.map.zEncoding.N, "N");
        }
        while (data.includes(manager.map.zEncoding.O)) {
            data = data.replace(manager.map.zEncoding.O, "O");
        }
        while (data.includes(manager.map.zEncoding.P)) {
            data = data.replace(manager.map.zEncoding.P, "P");
        }
        while (data.includes(manager.map.zEncoding.Q)) {
            data = data.replace(manager.map.zEncoding.Q, "Q");
        }
        while (data.includes(manager.map.zEncoding.R)) {
            data = data.replace(manager.map.zEncoding.R, "R");
        }
        while (data.includes(manager.map.zEncoding.S)) {
            data = data.replace(manager.map.zEncoding.S, "S");
        }
        while (data.includes(manager.map.zEncoding.T)) {
            data = data.replace(manager.map.zEncoding.T, "T");
        }
        while (data.includes(manager.map.zEncoding.U)) {
            data = data.replace(manager.map.zEncoding.U, "U");
        }
        while (data.includes(manager.map.zEncoding.V)) {
            data = data.replace(manager.map.zEncoding.V, "V");
        }
        while (data.includes(manager.map.zEncoding.W)) {
            data = data.replace(manager.map.zEncoding.W, "W");
        }
        while (data.includes(manager.map.zEncoding.X)) {
            data = data.replace(manager.map.zEncoding.X, "X");
        }
        while (data.includes(manager.map.zEncoding.Y)) {
            data = data.replace(manager.map.zEncoding.Y, "Y");
        }
        while (data.includes(manager.map.zEncoding.Z)) {
            data = data.replace(manager.map.zEncoding.Z, "Z");
        }
        while (data.includes("/-*-/a")) {
            data = data.replace("/-*-/a", "A");
        }
        while (data.includes("/-*-/b")) {
            data = data.replace("/-*-/b", "B");
        }
        while (data.includes("/-*-/c")) {
            data = data.replace("/-*-/c", "C");
        }
        while (data.includes("/-*-/d")) {
            data = data.replace("/-*-/d", "D");
        }
        while (data.includes("/-*-/e")) {
            data = data.replace("/-*-/e", "E");
        }
        while (data.includes("/-*-/f")) {
            data = data.replace("/-*-/f", "F");
        }
        while (data.includes("/-*-/g")) {
            data = data.replace("/-*-/g", "G");
        }
        while (data.includes("/-*-/h")) {
            data = data.replace("/-*-/h", "H");
        }
        while (data.includes("/-*-/i")) {
            data = data.replace("/-*-/i", "I");
        }
        while (data.includes("/-*-/j")) {
            data = data.replace("/-*-/j", "J");
        }
        while (data.includes("/-*-/k")) {
            data = data.replace("/-*-/k", "K");
        }
        while (data.includes("/-*-/l")) {
            data = data.replace("/-*-/l", "L");
        }
        while (data.includes("/-*-/m")) {
            data = data.replace("/-*-/m", "M");
        }
        while (data.includes("/-*-/n")) {
            data = data.replace("/-*-/n", "N");
        }
        while (data.includes("/-*-/o")) {
            data = data.replace("/-*-/o", "O");
        }
        while (data.includes("/-*-/p")) {
            data = data.replace("/-*-/p", "P");
        }
        while (data.includes("/-*-/q")) {
            data = data.replace("/-*-/q", "Q");
        }
        while (data.includes("/-*-/r")) {
            data = data.replace("/-*-/r", "R");
        }
        while (data.includes("/-*-/s")) {
            data = data.replace("/-*-/s", "S");
        }
        while (data.includes("/-*-/t")) {
            data = data.replace("/-*-/t", "T");
        }
        while (data.includes("/-*-/u")) {
            data = data.replace("/-*-/u", "U");
        }
        while (data.includes("/-*-/v")) {
            data = data.replace("/-*-/v", "V");
        }
        while (data.includes("/-*-/w")) {
            data = data.replace("/-*-/w", "W");
        }
        while (data.includes("/-*-/x")) {
            data = data.replace("/-*-/x", "X");
        }
        while (data.includes("/-*-/y")) {
            data = data.replace("/-*-/y", "Y");
        }
        while (data.includes("/-*-/z")) {
            data = data.replace("/-*-/z", "Z");
        }
        output.value = data;
    }
}
////////////
function atbash() {
    data = input.value;
    outdata = "";
    seek = 0;
    maxseek = data.length - 1;
    while (seek <= maxseek) {
        if (data.charAt(seek)in manager.map.atbash) {
            outdata = outdata + manager.map.atbash[data.charAt(seek)];
        } else {
            outdata = outdata + data.charAt(seek);
        }
        seek++;
    }
    output.value = outdata;
}
////////////
function yoliousgaiser(mode) {
    data = input.value;
    outdata = "";
    seek = 0;
    maxseek = data.length - 1;
    if (mode == 1) {
        while (seek <= maxseek) {
            if (data.charAt(seek)in manager.map.yoliousgaiser) {
                outdata = outdata + manager.map.yoliousgaiser[data.charAt(seek)];
            } else {
                outdata = outdata + data.charAt(seek);
            }
            seek++;
        }
        output.value = outdata;
    } else if (mode == 2) {
        while (seek <= maxseek) {
            if (data.charAt(seek)in manager.map.yoliousgaiser.reverse) {
                outdata = outdata + manager.map.yoliousgaiser.reverse[data.charAt(seek)];
            } else {
                outdata = outdata + data.charAt(seek);
            }
            seek++;
        }
        output.value = outdata;
    }

}
////////////
function URI(mode) {
    if (mode == 1) {
        data = input.value;
        data = encodeURIComponent(data);
        output.value = data;
    } else if (mode == 2) {
        data = input.value;
        data = decodeURIComponent(data);
        output.value = data;
    }
}
////////////
function hex(mode) {
    if (mode == 1) {
        data = input.value;
        seek = 0;
        maxseek = data.length - 1;
        outdata = "";
        while (seek <= maxseek) {
            if (data.charAt(seek)in manager.map.hex) {
                outdata = outdata + manager.map.hex[data.charAt(seek)];
            } else {
                outdata = outdata + data.charAt(seek);
            }
            seek++;
        }
        output.value = outdata;
    } else if (mode == 2) {
        data = input.value;
        seek = 0;
        maxseek = data.length - 1;
        outdata = "";
        dblc = "";
        points = [];
        while (seek <= maxseek) {
            dblc = data.charAt(seek) + data.charAt(seek + 1);
            if (dblc in manager.map.hex.reverse) {
                outdata = outdata + manager.map.hex.reverse[dblc];
                seek = seek + 2;
            } else {
                dblc = data.charAt(seek) + data.charAt(seek + 1) + data.charAt(seek + 2) + data.charAt(seek + 3);
                if (dblc in manager.map.hex.reverse) {
                    points.push([seek, dblc, manager.map.hex.reverse[dblc]]);
                    seek = seek + 4;
                } else {
                    seek = seek + 2;
                }
            }
        }
        data = outdata;
        outdata = "";
        seek = 0;
        if (points[seek] == undefined) {
            outdata = data;
            data = '';
            output.value = outdata;
        } else {

            while (!(points[seek] == undefined)) {
                if (seek == 0) {
                    outdata = outdata + data.slice(0, points[seek][0]) + points[seek][2];
                    seek++;
                } else {
                    if (!(points[seek + 1] == undefined)) {
                        outdata = outdata + data.slice(points[seek][0], points[seek + 1][0]) + points[seek][2];
                        seek++;
                    } else {
                        outdata = outdata + data.slice(points[seek][0], data.length) + points[seek][2];
                        seek++;
                    }

                }
            }
            output.value = outdata;
        }
    }
}
////////////
function binary(mode) {
    if (mode == 1) {} else if (mode == 2) {}
}
