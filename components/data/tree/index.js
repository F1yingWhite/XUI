document.addEventListener("DOMContentLoaded", function () {
    var expandableNodes = document.querySelectorAll(".tree-collapsed");

    expandableNodes.forEach(function (node) {
        if (!node.closest('code')) {
            node.addEventListener("click", function () {
                var subTree = this.parentElement.nextElementSibling;
                //切换状态
                if (subTree.classList.contains("tree-open")) {
                    subTree.classList.remove("tree-open");
                    this.classList.remove("tree-expanded");
                    this.classList.add("tree-collapsed");
                } else {
                    subTree.classList.add("tree-open");
                    this.classList.remove("tree-collapsed");
                    this.classList.add("tree-expanded");
                }
            });
        }
    });
});



var treeElements = document.querySelectorAll('.tree li, .tree div');
treeElements.forEach(function (element) {
    // 监听鼠标移入事件
    element.addEventListener('mouseenter', function () {
        // 移除之前的高亮
        var highlighted = document.querySelector('.highlight');
        if (highlighted) {
            highlighted.classList.remove('highlight');
        }
        // 添加高亮样式
        this.classList.add('highlight');
    });

    // 监听鼠标移出事件
    element.addEventListener('mouseleave', function () {
        // 移除高亮
        this.classList.remove('highlight');
    });
});