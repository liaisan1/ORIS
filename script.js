function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Слайдер
let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Валидация формы
function validateForm() {
    let isValid = true;
    
    // Проверка имени
    const name = document.getElementById('name').value;
    if (name.length < 2) {
        document.getElementById('name-error').textContent = 'Имя должно содержать минимум 2 символа';
        isValid = false;
    } else {
        document.getElementById('name-error').textContent = '';
    }
    
    // Проверка email
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        document.getElementById('email-error').textContent = 'Введите корректный email';
        isValid = false;
    } else {
        document.getElementById('email-error').textContent = '';
    }
    
    // Проверка сообщения
    const message = document.getElementById('message').value;
    if (message.length < 10) {
        document.getElementById('message-error').textContent = 'Сообщение должно содержать минимум 10 символов';
        isValid = false;
    } else {
        document.getElementById('message-error').textContent = '';
    }
    
    if (isValid) {
        alert('Сообщение отправлено!');
        return true;
    }
    return false;
}

// Переключение темы
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Проверяем сохраненную тему
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}
let count = 0;

function addFact() {
    count = count + 1;
    
    var newFact = document.createElement('p');
    newFact.innerHTML = 'Факт ' + count;

    document.getElementById('facts').appendChild(newFact);
}