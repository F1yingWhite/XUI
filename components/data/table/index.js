document.addEventListener("DOMContentLoaded", function () {
    var headers = document.querySelectorAll(".table th");
    headers.forEach(function (header, index) {
        header.dataset.order = 'asc';
        header.addEventListener("click", function () {
            sortTable(index, header.dataset.order);
            header.dataset.order = (header.dataset.order === 'asc' ? 'desc' : 'asc');
            updateArrow(header, header.dataset.order);
        });
    });

    // 添加全选框
    var table = document.querySelector(".table");
    var allCheckbox = document.createElement('input');
    allCheckbox.type = 'checkbox';
    allCheckbox.addEventListener('change', function () {
        var checkboxes = table.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = allCheckbox.checked;
        });
    });
    var th = document.createElement('th');
    th.appendChild(allCheckbox);
    table.rows[0].insertBefore(th, table.rows[0].firstChild);

    // 为每一行添加选择框
    for (var i = 1; i < table.rows.length; i++) {
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        var td = document.createElement('td');
        td.appendChild(checkbox);
        table.rows[i].insertBefore(td, table.rows[i].firstChild);
    }
});

function sortTable(columnIndex, order) {
    var table, rows, i, j, x, y;
    table = document.querySelector(".table");
    rows = table.rows;
    columnIndex += 1;//新加了一列所以要+1
    for (i = 1; i < rows.length; i++) {
        for (j = 1; j < rows.length - i; j++) {
            x = rows[j].getElementsByTagName("td")[columnIndex];
            y = rows[j + 1].getElementsByTagName("td")[columnIndex];
            if (isNaN(x.innerHTML)) {
                if (order === 'asc' ? x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase() : x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    rows[j].parentNode.insertBefore(rows[j + 1], rows[j]);
                }
            } else {
                if (order === 'asc' ? Number(x.innerHTML) > Number(y.innerHTML) : Number(x.innerHTML) < Number(y.innerHTML)) {
                    rows[j].parentNode.insertBefore(rows[j + 1], rows[j]);
                }
            }
        }
    }
}
function updateArrow(header, order) {
    header.parentNode.querySelectorAll('span.arrow').forEach(function (arrow) {
        arrow.parentNode.removeChild(arrow);
    });
    var arrow = document.createElement('span');
    arrow.style.marginLeft = '5px';
    arrow.style.color = "#F2D8D7";
    arrow.className = 'arrow';
    arrow.textContent = order === 'asc' ? '↑' : '↓';
    header.appendChild(arrow);
}

