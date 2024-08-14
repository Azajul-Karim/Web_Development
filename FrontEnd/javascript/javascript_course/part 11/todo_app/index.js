let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let input = document.querySelector('input');

btn.addEventListener('click', function () {
    let li = document.createElement('li');
    li.textContent = input.value;
    let delBtn = document.createElement('button');
    delBtn.textContent = 'X';
    li.appendChild(delBtn);
    ul.appendChild(li);
    input.value = '';
});

ul.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('done');
    }
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
});



