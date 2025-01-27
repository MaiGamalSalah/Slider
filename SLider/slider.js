var popup_container = document.getElementById("popup_container");
var popup_item = document.getElementById("popup-item");
var popup_img = document.getElementById("popup-img");

var img_list = document.querySelectorAll(".slider img");
var img_array = [];

var current_index = 0;
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var close = document.getElementById("close");

for (var i = 0; i < img_list.length; i++) {
    img_array.push(img_list[i]);

    img_list[i].addEventListener("click", function(event) {
        current_index = img_array.indexOf(event.target);
        var img_src = event.target.getAttribute("src");
        popup_container.style.display = "flex";
        popup_img.setAttribute("src", img_src);
    });
}

next.addEventListener("click", next_slide);
prev.addEventListener("click", prev_slide);
close.addEventListener("click", close_slide);

function next_slide() {
    current_index++;
    if (current_index == img_array.length) {
        current_index = 0;
    }
    var img_src = img_array[current_index].getAttribute("src");
    popup_img.setAttribute("src", img_src);
}

function prev_slide() {
    current_index--;
    if (current_index < 0) {
        current_index = img_array.length - 1;
    }
    var img_src = img_array[current_index].getAttribute("src");
    popup_img.setAttribute("src", img_src);
}

function close_slide() {
    popup_container.style.display = "none";
}

popup_container.addEventListener("click", function(event) {
    if (event.target == next || event.target == prev || event.target == close) {
        return;
    }
    close_slide();
});

document.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) {
        close_slide();
    } else if (event.keyCode == 37) {
        prev_slide();
    } else if (event.keyCode == 39) {
        next_slide();
    }
});
