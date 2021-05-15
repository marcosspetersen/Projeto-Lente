function calcularTipoDaLente (grauEsferico, grauCilindrico) {
	
	let tipoDaLente = '';

	if (grauEsferico <= -3 && grauEsferico >= -12 && grauCilindrico >= -2) {
			tipoDaLente = 'PRIME';
	}
	else if (grauCilindrico < -2 && grauCilindrico >= -6 && grauEsferico <= -3 
		&& grauEsferico >= -10) {
			tipoDaLente = 'PRIME';
		}
	else if (grauEsferico <= 0 && grauEsferico >= -15 && grauCilindrico >= -5) {
			tipoDaLente = 'VISION';
	}
	return tipoDaLente;
}

document.getElementById('calcular').addEventListener('click', function(e){
	const olhoDireitoEsferico = document.getElementById('odesf').value;
	const olhoDireitoCilindrico = document.getElementById('odcil').value;
	const olhoEsquerdoEsferico = document.getElementById('oeesf').value;
	const olhoEsquerdoCilindrico = document.getElementById('oecil').value;
	const resultado = document.getElementById('resultado');

	if (
		olhoDireitoEsferico !== '' && olhoDireitoCilindrico !== '' && 
		olhoEsquerdoEsferico !== '' && olhoEsquerdoCilindrico !== ''
	){
		const lenteDireita = calcularTipoDaLente(olhoDireitoEsferico, olhoDireitoCilindrico);
		const lenteEsquerda = calcularTipoDaLente(olhoEsquerdoEsferico, olhoEsquerdoCilindrico);
		resultado.textContent =  `A melhor Lente para o seu olho direito é a lente 
		${lenteDireita} e para seu olho esquerdo é a lente ${lenteEsquerda}`;
	}
	else {
		resultado.textContent = 'Por favor, Preencha todos os campos!';
	}
});