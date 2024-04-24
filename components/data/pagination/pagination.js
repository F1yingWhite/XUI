class Pagination {
    constructor(containerSelector, perPage = 10) {
        this.container = document.querySelector(containerSelector);
        if (containerSelector == ".pagination.variable") {
            //在按钮最后创建一个input number用来修改每页显示的数量
            this.changeable = true
        } else {
            this.changeable = false
        }
        this.totalNum = this.container.getAttribute('nums');
        console.log(this.container)
        console.log(this.totalNum)
        this.totalPages = Math.ceil(this.totalNum / perPage);
        this.perPage = perPage;
        this.currentPage = 1;
    }

    createPaginationButtons() {
        this.container.innerHTML = '';

        function createOnePage(name) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = name;
            a.addEventListener('click', event => {
                event.preventDefault();
                if (!isNaN(name)) {
                    this.handlePageClick(name);
                }
            });
            if (name === this.currentPage) {
                a.classList.add('active');
            }
            li.appendChild(a);
            this.container.appendChild(li);
        }

        if (this.totalPages <= 9) {
            for (let i = 1; i <= this.totalPages; i++) {
                createOnePage.call(this, i);
            }
        } else {
            if (this.currentPage < 5) {
                for (let i = 1; i <= 8; i++) {
                    createOnePage.call(this, i);
                }
                createOnePage.call(this, "...");
                createOnePage.call(this, this.totalPages);
            } else if (this.currentPage > this.totalPages - 3) {
                createOnePage.call(this, 1);
                createOnePage.call(this, "...");
                for (let i = this.totalPages - 8; i <= this.totalPages; i++) {
                    createOnePage.call(this, i);
                }
            } else {
                createOnePage.call(this, 1);
                createOnePage.call(this, "...");
                for (let i = this.currentPage - 3; i <= this.currentPage + 2; i++) {
                    createOnePage.call(this, i);
                }
                createOnePage.call(this, "...");
                createOnePage.call(this, this.totalPages);
            }
        }
        //创建一个input number用来修改每页显示的数量
        if (this.changeable) {
            const li = document.createElement('li');
            const input = document.createElement('input');
            input.type = 'number';
            input.value = this.perPage;
            input.className = 'input-number';
            input.addEventListener('change', event => {
                event.preventDefault();
                this.handlePageSizeChange(input.value);
            });
            li.appendChild(input);
            this.container.appendChild(li);
            //创建一个label,写着 条/页(因为用伪类写不出来不知道为什么)
            const li2 = document.createElement('li');
            const label = document.createElement('label');
            label.textContent = '条/页';
            label.className = "page-size-label"
            li2.appendChild(label);
            this.container.appendChild(li2);
        }
    }

    handlePageClick(page) {
        this.currentPage = page;
        this.createPaginationButtons();
        const paginationLinks = this.container.querySelectorAll('li a');
        paginationLinks.forEach(link => {
            link.classList.remove('active');
        });
        for (let i = 0; i < paginationLinks.length; i++) {
            if (paginationLinks[i].textContent == page) {
                paginationLinks[i].classList.add('active');
            }
        }
    }

    handlePageSizeChange(page_size) {
        this.perPage = page_size;
        this.totalPages = Math.ceil(this.totalNum / this.perPage);
        this.createPaginationButtons();
    }
}

const pagination1 = new Pagination('.pagination');
pagination1.createPaginationButtons();

const pagination2 = new Pagination('.pagination.variable');
pagination2.createPaginationButtons();
