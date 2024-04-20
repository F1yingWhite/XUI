var listItems = document.querySelectorAll('.siderbar_list');

var dict = {
    "Button按钮": "./components/button/index.html",
    "Layout布局组件": "./components/layout/index.html",
    "Color颜色": "./components/color/index.html",
}

for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', (event) => {
        for (var j = 0; j < listItems.length; j++) {
            listItems[j].classList.remove('siderbar_list_selected');
        }
        event.target.classList.add('siderbar_list_selected');
        var path = dict[event.target.innerText];
        var main = document.querySelector('main');
        main.innerHTML = '';
        var iframe = document.createElement('iframe');
        iframe.src = path;
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        main.appendChild(iframe);
    });
}