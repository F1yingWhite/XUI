var listItems = document.querySelectorAll('.siderbar_list');

var dict = {
  "Button按钮": "./components/basic/button/index.html",
  "Layout布局组件": "./components/basic/layout/index.html",
  "Color颜色": "./components/basic/color/index.html",

  "input输入": "./components/form/input/index.html",
  "radioGroup单选框": "./components/form/radio/index.html",
  "checkBoxGroup多选框": "./components/form/checkBoxGroup/index.html",
  "select选择": "./components/form/select/index.html",
  "switch开关": "./components/form/switch/index.html",
  "inputNumber数字输入": "./components/form/inputNumber/index.html",
  "colorPicker颜色选择": "./components/form/colorPicker/index.html",

  "Table 表单组件": "./components/data/table/index.html",
  "Tree 树形组件": "./components/data/tree/index.html",
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

//自动选择color
var color = document.querySelector('.siderbar_list');
color.click();