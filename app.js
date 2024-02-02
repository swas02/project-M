document.querySelector("#main-menu").addEventListener('click', () => {
	document.querySelector("#header-nav").classList.toggle('show')
})

Array.from(document.querySelectorAll('.navbar-toggler')).forEach(e => e.addEventListener('click', function () {
	e.classList.toggle('show');
}))


document.querySelector('#sidebarCollapse').addEventListener('click', function () {
	document.querySelector('#sidebarCollapse span:nth-child(3)').classList.toggle('w-50');
	document.querySelector('.document-navigation').classList.toggle('active');
});

document.querySelectorAll('a').forEach(e => {
	// console.log(e.href)
	let url;
	if (e.href != '') {
		url = new URL(e.href)


		if ((url.origin + url.pathname == location.origin + location.pathname) && window.location.hash != '') {
			e.addEventListener('click', (g) => {
				document.querySelector('#title').innerText = e.innerText;
				g.preventDefault();
				let container = document.querySelector('.container');
				document.querySelector("#ShowAllClauses").style.display = 'block';

				container.querySelectorAll('div').forEach(f => {

					if (e.getAttribute('href').substring(1)) {
						if (f.getAttribute('id').includes(e.getAttribute('href').substring(1))) {
							f.classList.add('div-in-animation')
							f.style.display = 'block';
						}
						else {
							f.classList.remove('div-in-animation')
							f.style.display = 'none';
						}
					}


				}, 0);


			})
		}
	}
})


//Show all clauses button
document.querySelector('#ShowAllClauses').addEventListener('click', (e) => {
	document.querySelector('.container').querySelectorAll('div').forEach((f) => {
		f.style.display = 'block';
	})
	document.querySelector("#ShowAllClauses").style.display = 'none';
	document.querySelector('#title').innerText = document.querySelector('title').innerText;
})


document.querySelector('#title').innerText = document.querySelector('title').innerText;