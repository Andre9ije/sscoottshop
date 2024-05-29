let openShopping = document.querySelector('.shopping'); // Кнопка відкриття кошика
let closeShopping = document.querySelector('.closeShopping'); // Кнопка закриття кошика
let listCard = document.querySelector('.listCard'); // Контейнер для переліку товарів у кошику
let body = document.querySelector('body'); // Основний тег сторінки
let total = document.querySelector('.total'); // Елемент для відображення загальної вартості товарів
let quantity = document.querySelector('.quantity'); // Елемент для відображення кількості товарів у кошику

// Додавання обробників подій для кнопок відкриття та закриття кошика
openShopping.addEventListener('click', () => {
    body.classList.add('active'); // Додає клас для відображення кошика
});

closeShopping.addEventListener('click', () => {
    body.classList.remove('active'); // Видаляє клас, щоб сховати кошик
});

function filterMice(category) {
    // Отримуємо всі картки
    let cards = document.getElementsByClassName('card');

    // Перебираємо всі картки
    for (let i = 0; i < cards.length; i++) {
        // Перевіряємо, чи містить картка потрібний клас (категорію)
        if (cards[i].classList.contains(category)) {
            cards[i].style.display = ''; // Якщо так, показуємо картку
        } else {
            cards[i].style.display = 'none'; // Якщо ні, приховуємо картку
        }
    }
}
let products = [
    {
        id: 1,
        name: 'hipe-h5',
        image: '1.JPG',
        price: 2345
    },
    {
        id: 1,
        name: 'Ethic erawan',
        image: 'ethic.JPG',
        price: 2345
    },
    {
        id: 1,
        name: 'Blunt s8',
        image: 'blunt s8.JPG',
        price: 2345
    },
];
let listCards = [];
function addToCard(index) {
    let product = products[index];
    if (!listCards[index]) {
        listCards[index] = { ...product, quantity: 1 };
    } else {
        listCards[index].quantity += 1;
    }
    let item = document.createElement('li');
    item.innerHTML = `
    <div><img src="images/${product.image}"/></div>
    <div>${product.name}</div>
    <div>${(product.price * product.quantity).toLocaleString()}</div>
    <div>
    <button onclick ="changeQuantity(${index}, ${product.quantity - 1})">-</button>
    <div class= "count">${product.quantity}</div>
    <button onclick="changeQuantity(${index}, ${product.quantity + 1})">-</button>
    </div> `;
    listCard.appendChild(item);
}


function showAllMice() {
    var cards = document.getElementsByClassName('card');

    for (var i = 0; i < cards.length; i++) {
        cards[i].style.display = ''; // Відображення кожної картки
    }
}

// Отримуємо модальне вікно
let modal = document.getElementById("myModal");





function addToCard(index) {
    let product = products[index]
    if (!listCards[index]) {
        listCards[index] = { ...product, quantity: 1 };
    } else {
        listCards[index].quantity += 1;
    }
    reloadCard();
}
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((product, index) => {
        if (product) {
            totalPrice += product.price * product.quantity;
            count += product.quantity;

            let item = document.createElement('li');
            item.innerHTML = `
            <div><img src="images/${product.image}"/></div>
            <div>${product.name}</div>
            <div>${(product.price * product.quantity).toLocaleString()}</div>
            <div>
            <button onclick ="changeQuantity(${index}, ${product.quantity - 1})">-</button>
            <div class= "count">${product.quantity}</div>
            <button onclick="changeQuantity(${index}, ${product.quantity + 1})">-</button>
            </div> `;
            listCard.appendChild(item);
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}


function changeQuantity(index, newQuantity) {
    if (newQuantity <= 0) {
        delete listCards[index];
    } else {
        listCards[index].quantity = newQuantity;
    }
    reloadCard();
}
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}