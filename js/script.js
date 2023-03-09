// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

const app = document.getElementById('app');

const fnameBox = app.querySelector('input[name="fname"]');
const lnameBox = app.querySelector('input[name="lname"]');

const ageBox = app.querySelector('input[name="age"]');
const kmBox = app.querySelector('input[name="km"]');

const buttonCalc = document.getElementById('btnCalc');
console.log(buttonCalc);

const buttonReset = document.getElementById('btnReset');
console.log(buttonReset);

const ticket = document.querySelector('.ticket');

buttonCalc.addEventListener('click', function () {
	let fname = fnameBox.value;
	let lname = lnameBox.value;
	let age = ageBox.value;
	let km = kmBox.value;
	let pricexKm = 0.21;
	let junior = 0.8;
	let senior = 0.6;

	let total = (km * pricexKm).toFixed(2);

	let discountJunior = (km * pricexKm - km * pricexKm * junior).toFixed(2);
	let totalJunior = (km * pricexKm * junior).toFixed(2);

	let discountSenior = (km * pricexKm - km * pricexKm * senior).toFixed(2);
	let totalSenior = (km * pricexKm * senior).toFixed(2);

	if (fnameBox.value && isNaN(fnameBox.value) && lnameBox.value && isNaN(lnameBox.value)) {
		if (ageBox.value < 18) {
			ticket.innerHTML += `<h2>Nome sul biglietto: </h2><h4>${fname} ${lname}</h4><br><h2>Totale: </h2><h4>€ ${total}</h4><br><h2>Sconto Under18: </h2><h4>€ ${discountJunior}</h4><br><h2>Da pagare: </h2><h4>€ ${totalJunior}</h4>`;
			ticket.classList.remove('d-none');
		} else if ((ageBox.value >= 18, ageBox.value < 65)) {
			ticket.innerHTML += `<h2>Nome sul biglietto: </h2><h4>${fname} ${lname}</h4><br><h2>Totale: </h2><h4>€ ${total}</h4>`;
			ticket.classList.remove('d-none');
		} else if (ageBox.value >= 65) {
			ticket.innerHTML += `<h2>Nome sul biglietto: </h2><h4>${fname} ${lname}</h4><br><h2>Totale: </h2><h4>€ ${total}</h4><br><h2>Sconto Under18: </h2><h4>€ ${discountSenior}<h4><br><h2>Da pagare: </h2><h4>€ ${totalSenior}</h4>`;
			ticket.classList.remove('d-none');
		}
	}
});

buttonReset.addEventListener('click', function () {
	fnameBox.value = '';
	lnameBox.value = '';
	ageBox.value = '';
	kmBox.value = '';
	ticket.classList.add('d-none');
});

document.getElementById('app').style =
	'color: black; background-color: lightgreen; width: 70%; padding: 20px; margin: 50px auto; border-radius: 10px; text-align: center;';

document.getElementById('userInfo').style = 'color: white; padding: 10px 0px;';

document.getElementById('userGoal').style = 'color: white; padding: 10px 0px;';

document.getElementById('buttons').style = '; padding: 10px 0px 0px;';

document.getElementById('resultCard').style =
	'color: white; background-color: salmon; width: 70%; padding: 20px; margin: 50px auto; border-radius: 10px; text-align: center; line-height: 1.8;';
