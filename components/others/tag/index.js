var closeableElements = document.querySelectorAll('.closeable');
for (var i = 0; i < closeableElements.length; i++) {
    closeableElements[i].addEventListener('click', function () {
        this.remove();
    });
}

// 查询所有的的variable-tag
var variableTags = document.querySelectorAll('.variable-tag');
for (var i = 0; i < variableTags.length; i++) {
    variableTags[i].addEventListener('keydown', function (event) {
        if (event.keyCode === 13) { // 检查按下的键是否是回车键
            var newTag = document.createElement('div');
            newTag.className = 'tag closeable';
            newTag.textContent = this.value;
            newTag.addEventListener('click', function () {
                this.remove();
            });
            this.value = '';
            // 将新标签添加到该元素的前面
            this.insertAdjacentElement('beforebegin', newTag);
        }
    });
}