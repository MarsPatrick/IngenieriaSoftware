hora();
function hora(){
	let d = new Date();
	let hora = darformato(d.getHours());
	let minuto = darformato(d.getMinutes());
	let segundo = darformato(d.getSeconds());
	let dia = devolverdia(d.getDay());
	let dianumero = darformato(d.getDate());
	let mes = devolvermes(d.getMonth());
	let ano = d.getFullYear();
	
	document.getElementById("reloj").innerHTML = hora + ":" + minuto + ":" + segundo;
	document.getElementById("fecha").innerHTML = dia + " " + dianumero + " de " + mes + " del " + ano;
}

function devolverdia(dia){
	switch(dia){
		case 1:
			dia = "Lunes";
			break;
		case 2:
			dia = "Martes";
			break;
		case 3:
			dia = "Miercoles";
			break;
		case 4:
			dia = "Jueves";
			break;
		case 5:
			dia = "Viernes";
			break;
		case 6:
			dia = "Sabado";
			break;
		case 0:
			dia = "Domingo";
			break;
	}
	return dia;
}
function devolvermes(mes){
	switch (mes) {
        case 0:
            mes = "Enero";
            break;
        case 1:
            mes = "Febrero";
            break;
        case 2:
            mes = "Marzo";
            break;
        case 3:
            mes = "Abril";
            break;
        case 4:
            mes = "Mayo";
            break;
        case 5:
            mes = "Junio";
            break;
        case 6:
            mes = "Julio";
            break;
        case 7:
            mes = "Agosto";
            break;
        case 8:
            mes = "Septiembre";
            break;
        case 9:
            mes = "Octubre";
            break;
        case 10:
            mes = "Noviembre";
            break;
        case 11:
            mes = "Diciembre";
            break;
    }
	return mes;
}

function darformato(aformato){
	var yaformato
	yaformato = aformato.toString().length < 2 ? "0" + aformato : aformato
	return yaformato;
}

setInterval(() => {
	hora();
}, 1000);