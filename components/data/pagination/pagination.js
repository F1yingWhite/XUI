const perPage = 10;
let currentPage = 1;

function createPaginationButtons() {
    const paginationUl = document.getElementsByClassName('pagination')[0];
    paginationUl.innerHTML = '';

    function createOnePage(name) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = name;
        a.href = '#';
        a.addEventListener('click', function (event) {
            event.preventDefault();
            if (!isNaN(name)) {
                handlePageClick(name);
            }
        });
        if (name === currentPage) {
            a.classList.add('active');
        }
        li.appendChild(a);
        paginationUl.appendChild(li);
    }

    const totalPages = 1000;
    if (totalPages <= 9) {
        for (let i = 1; i <= totalPages; i++) {
            createOnePage(i);
        }
    } else {
        //展示current page前后的3个页码, 其他页码用...代替
        if (currentPage < 5) {
            for (let i = 1; i <= 8; i++) {
                createOnePage(i);
            }
            createOnePage("...");
            // 再创建最后一个页码
            createOnePage(totalPages);
        }
        else if (currentPage > totalPages - 3) {
            //创建第一个页码
            createOnePage(1);
            createOnePage("...");
            for (let i = totalPages - 8; i <= totalPages; i++) {
                createOnePage(i);
            }
        } else {
            //创建第一个页码
            createOnePage(1);
            createOnePage("...");
            for (let i = currentPage - 3; i <= currentPage + 2; i++) {
                createOnePage(i);
            }
            createOnePage("...");
            // 再创建最后一个页码
            createOnePage(totalPages);
        }
    }
}

function handlePageClick(page) {
    currentPage = page;
    createPaginationButtons();
    const paginationLinks = document.querySelectorAll('.pagination li a');
    paginationLinks.forEach(link => {
        link.classList.remove('active');
    });
    for (let i = 0; i < paginationLinks.length; i++) {
        if (paginationLinks[i].textContent == page) {
            paginationLinks[i].classList.add('active');
        }
    }
}

createPaginationButtons();