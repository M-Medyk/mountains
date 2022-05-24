const btn_prev = document.querySelector('div.buttons .prev')
const btn_next = document.querySelector('div.buttons .next')

const quotes = document.querySelectorAll('div.quotes div.quote')
let i = 0

btn_prev.onclick = function () {
	quotes[i].className = ''
	i = i - 1 /* i-- */

	if (i < 0) {
		i = quotes.length - 1
	}

	quotes[i].className = 'show'
}

btn_next.onclick = function () {
	quotes[i].className = ''
	i = i + 1 /* i++ */

	if (i >= quotes.length) {
		i = 0
	}

	quotes[i].className = 'show'
}
