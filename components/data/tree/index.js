document.addEventListener('DOMContentLoaded', function () {
    var toggles = document.querySelectorAll('.toggle');

    toggles.forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            var nestedList = this.parentNode.querySelector('.nested');
            nestedList.classList.toggle('active');
            this.textContent = (nestedList.classList.contains('active')) ? '-' : '+';
        });
    });
});
