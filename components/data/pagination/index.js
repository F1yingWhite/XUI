const items = [];
const perPage = 10; // 默认一页10条
let currentPage = 1;

// 生成一些示例数据
for (let i = 1; i <= 100; i++) {
    items.push(`Item ${i}`);
}

function displayItems(page) {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const displayedItems = items.slice(startIndex, endIndex);

    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    displayedItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = item;
        contentDiv.appendChild(itemDiv);
    });
}

function createPaginationButtons() {
    const paginationUl = document.getElementById('pagination');
    paginationUl.innerHTML = '';

    const totalPages = Math.ceil(items.length / perPage);
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = i;
        a.href = '#';
        a.addEventListener('click', function () {
            handlePageClick(i);
        });
        if (i === currentPage) {
            a.classList.add('active');
        }
        li.appendChild(a);
        paginationUl.appendChild(li);
    }
}

function handlePageClick(page) {
    currentPage = page;
    displayItems(page);
    const paginationLinks = document.querySelectorAll('.pagination li a');
    paginationLinks.forEach(link => {
        link.classList.remove('active');
    });
    paginationLinks[page - 1].classList.add('active');
}

displayItems(currentPage);
createPaginationButtons();