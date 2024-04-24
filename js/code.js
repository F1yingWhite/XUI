var codeBlocks = document.querySelectorAll("code");

codeBlocks.forEach(function (codeBlock) {
    codeBlock.style.color = "#5d6165";

    // 获取代码块的文本内容
    var codeText = codeBlock.innerHTML;

    // 使用正则表达式将所有匹配的 < 后的第一个词、</ 后的第一个词和>替换为蓝色
    var updatedText = codeText.replace(/&lt;(\w+)/g, "<span style='color: #6eb2d0;'>&lt;</span><span style='color: #6eb2d0;'>$1</span>");
    updatedText = updatedText.replace(/&lt;\/(\w+)/g, "<span style='color: #6eb2d0;'>&lt;/</span><span style='color: #6eb2d0;'>$1</span>");

    updatedText = updatedText.replace(/&gt;/g, "<span style='color: #6eb2d0;'>&gt;</span>");
    // 将所有的 class/type/placeholder/disabled/id/value 替换为黄色
    updatedText = updatedText.replace(/class/g, "<span style='color: #e8b15c;'>class</span>");
    updatedText = updatedText.replace(/type/g, "<span style='color: #e8b15c;'>type</span>");
    updatedText = updatedText.replace(/placeholder/g, "<span style='color: #e8b15c;'>placeholder</span>");
    updatedText = updatedText.replace(/disabled/g, "<span style='color: #e8b15c;'>disabled</span>");
    updatedText = updatedText.replace(/id/g, "<span style='color: #e8b15c;'>id</span>");
    updatedText = updatedText.replace(/value/g, "<span style='color: #e8b15c;'>value</span>");
    updatedText = updatedText.replace(/nums/g, "<span style='color: #e8b15c;'>nums</span>");
    // 将双引号括起来的内容变成叶绿色
    updatedText = updatedText.replace(/"(.*?)"/g, "<span style='color: #4caf50;'>&quot;$1&quot;</span>");
    codeBlock.innerHTML = updatedText;
});
