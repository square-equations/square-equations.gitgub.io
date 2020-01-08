// Створення пустого масиву з коментарями, в якому будуть зберігатись коментарі.
let comments = [];

// Створення функції після завантаження сторінки. 
$(function() {
	// Вибір ID comment-add та створення функції при натиснені на кнопку. 
   document.getElementById('comment-add').onclick=function()
{
	// Фунція, що прибирає оновлення сторінки після відправки форми (натиснення на кнопку).
	event.preventDefault();
	// Створюємо змінну, яка містить у собі форму з ім'ям користувача.
	let commentName = document.getElementById('comment-name');
	// Створюємо змінну, яка містить у собі текст коментаря.
	let commentBody = document.getElementById('comment-body');
	// Створюємо об'єкт, що містить у собі значення попередніх двух змінних та дату написання коментаря.
	let comment = {
		name : commentName.value, 
		body : commentBody.value,
		time : Math.floor(Date.now()/1000)
	}
	// Онуляємо значення.
	commentName.value = '';
	commentBody.value = '';
	comments.push(comment);
	// Функція, що зберігає коментар у локальному сховищі.
	saveComments();
	// Функія, що відображає коментар на сторінці.
	showComments();
}
// Функція, що зберігає коментар у локальному сховищі. Її реалізація.
function saveComments()
{
	// Зберігаємо наші коментарі у локальному сховищі.
	localStorage.setItem('comments', JSON.stringify(comments));
}
// Функія, що відображає коментар на сторінці. Її реалізація.
function showComments () {
	// Створюємо змінну та обираємо id comment-field(поле коментаря)
	let commentField = document.getElementById('comment-field');
	// Створюємо змінну, що буде відображати коментар. Обнуляємо її.
	let out = '';
	// Відображаємо коментар при кожній відправці форми.
	comments.forEach(function(item)
	{
		out += `<p class="text-center small"><em>${timeConverter(item.time)}</em></p>`;
        out += `<p class="alert alert-primary" role="alert">${item.name}</p>`;
        out += `<p class="alert alert-success" role="alert">${item.body}</p>`;
	});
	// Відображення на екран.
	commentField.innerHTML = out;
}
});
// Функція конвертації часу для відображення.
function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Сiчень','Лютий','Березень','Квiтень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }

// Ivan Goloburda