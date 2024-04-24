var dialog = document.querySelectorAll('.dialog-button');
dialog.forEach(function (item) {
    item.addEventListener('click', function () {
        var content = item.getElementsByClassName('dialog-content')[0].textContent;
        //添加一层蒙版
        var mask = document.createElement('div');
        mask.style.position = 'fixed';
        mask.style.top = '0';
        mask.style.left = '0';
        mask.style.right = '0';
        mask.style.bottom = '0';
        mask.style.backgroundColor = 'rgba(0,0,0,0.5)';
        mask.style.zIndex = '999';
        parent.document.body.appendChild(mask);
        // 创建一个对话框
        var dialog = document.createElement('div');
        dialog.style.position = "relative"
        dialog.style.borderRadius = '5px';
        dialog.style.position = 'fixed';
        dialog.style.top = '50%';
        dialog.style.left = '50%';
        dialog.style.transform = 'translate(-50%,-50%)';
        dialog.style.backgroundColor = '#fff';
        dialog.style.padding = '20px';
        dialog.style.zIndex = '1000';
        dialog.style.height = '200px';
        dialog.style.width = '300px';
        dialog.style.border = '3px solid #ebd5d5';
        dialog.style.color = '#585656';
        dialog.textContent = content;

        //dialog右上角添加一个×
        var close = document.createElement('span');
        close.textContent = '×';
        close.style.position = 'relative';
        close.style.top = '-25px';
        close.style.right = '-170px';
        close.style.cursor = 'pointer';
        close.style.fontSize = '20px';
        close.style.color = '#ebd5d5';
        close.addEventListener('click', function () {
            parent.document.body.removeChild(mask);
            parent.document.body.removeChild(dialog);
        });
        dialog.appendChild(close);
        parent.document.body.appendChild(dialog);
    });
});


