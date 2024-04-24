const uploadButtons = document.querySelectorAll(".file");

uploadButtons.forEach(function (button) {
    //按钮点击后打开文件夹   
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.style.display = "none";
    document.body.appendChild(fileInput);
    fileInput.addEventListener("change", function () {
        const file = fileInput.files[0];
        if (file) {
            const fileName = file.name;
            const li = document.createElement("li");
            li.textContent = fileName;
            li.className = "file-list";
            li.addEventListener("click", function () {
                li.remove();
            });
            button.parentElement.appendChild(li);
        }
    });

    button.addEventListener("click", function () {
        //得到文件
        fileInput.click();
    });
});





// const reader = new FileReader();
// reader.onload = function () {
//     //创建一个img标签
//     const img = document.createElement("img");
//     img.src = reader.result;
//     //创建一个a标签
//     const a = document.createElement("a");
//     a.href = reader.result;
//     a.download = file.name;
//     a.textContent = file.name;
//     //将img标签和a标签添加到页面上
//     document.body.appendChild(img);
//     document.body.appendChild(a);
// };
// reader.readAsDataURL(file);
