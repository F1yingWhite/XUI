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



const imgUploadButtons = document.querySelectorAll(".file-img");

imgUploadButtons.forEach(function (button) {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";//设置文件类型为图片
    fileInput.style.display = "none";
    document.body.appendChild(fileInput);
    fileInput.addEventListener("change", function () {
        //读取图片并且显示
        const file = fileInput.files[0];
        if (file) {
            const fileName = file.name;
            const li = document.createElement("li");
            li.textContent = fileName;
            li.className = "file-list";
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.createElement("img");
                img.src = e.target.result;
                img.className = "file-img-list";
                li.addEventListener("click", function () {
                    li.remove();
                    img.remove();
                });
                button.parentElement.appendChild(li);
                button.parentElement.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });
    button.addEventListener("click", function () {
        //得到文件
        fileInput.click();
    });
});


