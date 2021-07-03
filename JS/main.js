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
    map: {},
    elements: {
        input: input,
        output: output,
        confirmfile: confirmfile,
        storefile: storefile,
        loadafile: loadafile,
        swap: swap,
        mode: mode,
        clean: clean,
        copy: copy,
        store: store
    },
    call: {
        begin_coder: begin_coder,
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
        begin_coder(mode.selectedOptions[0].getAttribute("name"), 1);
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
        begin_coder(mode.selectedOptions[0].getAttribute("name"), 2);
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
        begin_coder(mode.selectedOptions[0].getAttribute("name"), manager.cmode);
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
//Github Button

git.addEventListener("click",()=>{
    window.open("https://github.com/eliasfaisal/zEncoder");
});

//
////////////////////////////////////////
function begin_coder(mode, cmode) {
    //cmode [1:encode 2:decode]
    //mode [1:zEncoding 2:Attbash 3:Binary 4:URI Component 5:Yolious Gaisar]

    data = input.value;

        console.log(mode,cmode)
        if(mode == "ATTBASH"){
            output.value = zEncoder.ATTBASH.encode(data);
        }else if(cmode == 1){
            output.value = zEncoder[mode].encode(data);
        }else if(cmode == 2){
            output.value = zEncoder[mode].decode(data);
        }
}

