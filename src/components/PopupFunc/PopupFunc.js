import menuData from "../../data/MenuData"

const fade = (target, io) => {
    var level = io;
    var timer = null;
    if(io == 0) target.style.display = "block";
    timer = setInterval( function() {
      level = fadeaction(target, level, io, timer);
    }, 50);
}

const fadeaction = (target, level, io, timer) => {
    if(io == 0) level += 0.1;
    else level -= 0.1;
    changeOpacity(target, level);
    if((io == 0 && level > 1) ||(io == 1 && level < 0)) clearInterval(timer);
    return level;
}

const changeOpacity = (target, level) => {
    var obj = target;
    obj.style.opacity = level;
    obj.style.MozOpacity = level;
    obj.style.KhtmlOpacity = level;
    obj.style.MsFilter = "'progid: DXImageTransform.Microsoft.Alpha(Opacity=" + (level * 100) + ")'";
    obj.style.filter = "alpha(opacity=" + (level * 100) + ");";
}

const qmbtn = (e) => {
    var l2 = document.getElementById("layer2");
    var dl = document.getElementsByClassName("dim-layer")[0];
    var im = document.getElementsByClassName("info-picture")[0];
    var fs = document.getElementsByClassName("font-size-scale")[0];
    var info = document.getElementsByClassName("ctxt")[0];
    var name = e.target.parentElement.innerHTML.split(" <")[0];

    name = name.replace("&amp;", "&");

    menuData.keys.map((key) => {
        if(menuData.menus[key].menuName == name) {
            im.src = menuData.menus[key].infoImg;
            info.innerHTML = menuData.menus[key].info;
            info.style.fontSize = fs.style.fontSize;
        }
    });

    fade(dl, 0);
    l2.style.position = "absolute";
    l2.style.top = "50%";
    l2.style.bottom = "50%";
    l2.style.marginLeft = "-210px";
    l2.style.marginTop = "-210px";
}

const clbtn = () => {
    var dl = document.getElementsByClassName("dim-layer")[0];
    fade(dl, 1);
    dl.style.display = "none"
}

export {qmbtn, clbtn};