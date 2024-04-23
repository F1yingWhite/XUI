// 查找class有dialog的元素,并且添加点击事件,然后展示一个对话框,展示button子元素div的内容
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
        dialog.style.borderRadius = '5px';
        dialog.style.position = 'fixed';
        dialog.style.top = '50%';
        dialog.style.left = '50%';
        dialog.style.transform = 'translate(-50%,-50%)';
        dialog.style.backgroundColor = '#fff';
        dialog.style.padding = '20px';
        dialog.style.zIndex = '1000';
        dialog.textContent = content;
        
        //dialog底下添加一个按钮
        var button = document.createElement('button');
        button.textContent = '关闭';
        button.style.display = 'block';
        button.style.margin = '0 auto';
        button.style.padding = '5px 10px';
        button.style.backgroundColor = '#f00';
        button.style.color = '#fff';
        button.style.border = 'none';
        button.style.cursor = 'pointer';
        button.style.outline = 'none';

        button.addEventListener('click', function () {
            parent.document.body.removeChild(dialog);
            parent.document.body.removeChild(mask);
        });
        dialog.appendChild(button);
        parent.document.body.appendChild(dialog);

    });
});


