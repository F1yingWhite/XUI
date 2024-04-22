document.addEventListener("DOMContentLoaded", function () {
    var containers = document.querySelectorAll(".container");

    containers.forEach(function (container) {
        var codeArea = container.nextElementSibling;
        var arrow = document.createElement("span");
        arrow.innerHTML = "&#9660;";
        container.appendChild(arrow);
        codeArea.classList.remove("expanded");
        codeArea.style.maxHeight = "0";

        // 箭头点击事件
        arrow.addEventListener("click", function () {
            if (codeArea.classList.contains("expanded")) {
                codeArea.style.maxHeight = "0";
                codeArea.classList.remove("expanded");
                arrow.innerHTML = "&#9660;";
            } else {
                var expandedHeight = codeArea.scrollHeight + 200;
                codeArea.style.maxHeight = expandedHeight + "px";
                codeArea.classList.add("expanded");
                arrow.innerHTML = "&#9650;";
            }
        });
    });
});
