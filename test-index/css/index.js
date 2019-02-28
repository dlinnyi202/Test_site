//відкриття попапа при клике
$(document).ready(function() {
	$('.button-joinUs').click(function () {
		$('.popup , .popup_fon').css('display' , 'block');
	});
	$('.close').click(function () {
		$('.popup, .popup_fon').css('display' , 'none');
	});


});

//функція валідації
function validate(){
	//витягуємо поля, які необхідно провалідувати
	var phone = document.getElementById("phone");
	var email =  document.getElementById("email");
	var comment = document.getElementById("comment");

	var isValidForm = true;//ознака валідності форми
		
	//перевірка на правильність
	//за допомогою регулярних виразів
	if(!phone.value.match(/^[0-9]{10,12}/i)){
		phone.style.border = '2px solid orange';
		phone.style.borderRadius = '5px';
		isValidForm = false;
	} else{
		phone.style.border = 'initial';
	}
	
	if(!email.value.match(/\S+@\S+\.\S+/i)){
		email.style.border = '2px solid orange';
		email.style.borderRadius = '5px';
		isValidForm = false;
	} else{
		phone.style.border = 'initial';
	}

		
	if(!comment.value.match(/\S{3,1000}/i)){
		comment.style.border = '2px solid orange';
		comment.style.borderRadius = '5px';
		isValidForm = false;
	} else{
		phone.style.border = 'initial';
	}

	return isValidForm;//повертаємо значення валідності
}
