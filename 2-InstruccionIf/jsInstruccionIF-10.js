function mostrar() {
	var nota;

	nota = Math.round(Math.random() * (10 - 1) + 1);


	if (nota >= 9) {
		alert(nota + " EXELENTE.");

	}
	else {

		if (nota >= 4) {
			alert(nota + " APROBO.")
		}
		else {
			alert(nota + " Vamos, la proxima se puede.");
		}
	}
}//FIN DE LA FUNCIÓN