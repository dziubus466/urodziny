const button = document.querySelector('button');
const answer = document.querySelector('.answer');
const getcontent = () => {
	let number = Math.floor(Math.random() * 38);
	answer.innerHTML = `<img src="img/${number}.jpg">`;
};

button.addEventListener('click', getcontent());
