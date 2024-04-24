document.addEventListener("DOMContentLoaded", function () {
    const uploadButtons = document.querySelectorAll(".file");

    uploadButtons.forEach(function (button) {
        //按钮点击后打开文件夹
        button.addEventListener("click", function () {
            //打开文件夹让用户选择文件
            const fileInput = document.createElement("input");
            fileInput.type = "file";
            fileInput.style.display = "none";
            document.body.appendChild(fileInput);
            fileInput.click();
        });
    });
});