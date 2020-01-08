// Система оцiнювання тестів.

calc.onclick = function (){

	var myform = this.form;
	var sum=0;
	// Перевірка відповідей від користувача. Підсумовування балів та виведення їх у input.
	if (myform.answ.value == "test, test1")
		{
			sum++;
		}
		if (myform.answ1.value == "Test!")
		{
			sum++;
		}
		if (myform.answ2.value == "TEST")
		{
			sum++;
		}
		if (myform.answ3.value == "test")
		{
			sum++;
		}
		if (myform.answ4.value == "test2")
		{
			sum++;
		}
		if (myform.answ5.value == "test1")
		{
			sum++;
		}
			if (myform.answ6.value == "test3")
		{
			sum++;
		}
	// Саме виведення на екран.
	myform.result.value=sum;
};
// Система складання квадратичного рівняння за коефіцієнтами.
draw.onclick = function() {
	var form = this.form;
	var a = form.oldest.value;
	var b = form.old.value;
	var c = form.free.value;
	// Перевірка умов під час створення формули. Перевірка коефіцієнтів та запис їх у input.
	if (a > 0 && b > 0 && c > 0)
		{
			form.ok.value = a + "x²" + "+"  + b + "x" + "+" + c + " = 0;";
		}
		if (a == 1 && b > 0 && c > 0)
		{
			form.ok.value = "x²" + "+"  + b + "x" + "+" + c + " = 0;";
		}
		if (a == 1 && b < 0 && c > 0)
		{
			form.ok.value = "x²"  + b + "x" + "+" + c + " = 0;";
		}
		if (a == -1 && b > 0 && c > 0)
		{
			form.ok.value = "-x²" + "+"  + b + "x" + "+" + c + " = 0;";
		}
		if (a == 1 && b  > 0 && c < 0)
		{
			form.ok.value = "x²" + "+"  + b + "x" + c + " = 0;";
		}
		if (a == -1 && b > 0 && c < 0)
		{
			form.ok.value = "-x²" + "+"  + b + "x" + c + " = 0;";
		}
		if (a < -1 && b < 0 && c < 0)
		{
			form.ok.value = a + "x²"  + b + "x" + c + " = 0;";
		}
		if (a == -1 && a < 0 && b < 0)
		{
			form.ok.value = "-x²"  + b + "x" + c + " = 0;";
		}
		if (a < 0 && b > 0 && c > 0)
		{
			form.ok.value = a + "x²" + "+" + b + "x" + "+" + c + " = 0;";
		}
		if (a < 0 && b > 0 && c < 0)
		{
			form.ok.value = a + "x²" + "+" + b + c + " = 0;";
		}
// Обчислювання формул.
		if (a < 0 && b )
		var D;
		var x1;
		var x2;
		D = (b*b-4*a*c);
		x1 = (-b+Math.sqrt(D))/(2*a);
		x2 = (-b-Math.sqrt(D))/(2*a);
		if (D < 0)
		{
			form.roots.value = "Коренi вiдстунi!";
		} else {
			form.roots.value = Math.floor(x1) + "; " + Math.floor(x2);
		}
}