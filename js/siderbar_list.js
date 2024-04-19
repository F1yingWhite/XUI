var listItems = document.querySelectorAll('.siderbar_list');

for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', (event) => {
        for (var j = 0; j < listItems.length; j++) {
            listItems[j].classList.remove('siderbar_list_selected');
        }
        event.target.classList.add('siderbar_list_selected');
    });
}