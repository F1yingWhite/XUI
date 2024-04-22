document.addEventListener("DOMContentLoaded", function () {
    var containers = document.querySelectorAll(".container");

    containers.forEach(function (container) {
        var codeArea = container.nextElementSibling;
        var arrowContainer = document.createElement("div"); // 创建一个容器用于放置箭头
        arrowContainer.classList.add("arrow-container");
        var arrow = document.createElement("span");
        arrow.innerHTML = "&#9660;";
        arrowContainer.appendChild(arrow); // 将箭头添加到容器中
        container.appendChild(arrowContainer); // 将容器添加到 container 中
        codeArea.classList.remove("expanded");
        codeArea.style.maxHeight = "0";

        // 箭头点击事件
        arrow.addEventListener("click", function () {
            if (codeArea.classList.contains("expanded")) {
                codeArea.style.maxHeight = "0";
                codeArea.classList.remove("expanded");
                arrow.innerHTML = "&#9660;";
            } else {
                var expandedHeight = codeArea.scrollHeight + 100;
                codeArea.style.maxHeight = expandedHeight + "px";
                codeArea.classList.add("expanded");
                arrow.innerHTML = "&#9650;";
            }
        });
    });
});
