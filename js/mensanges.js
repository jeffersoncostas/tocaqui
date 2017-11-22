//Abrir e fechar o modal do menu

let botaoMenuModal = document.querySelector('.menu-1');
let menuModal = document.querySelector('.menu-modal');
let menuModalBg = document.querySelector('.menu-modal-bg');


botaoMenuModal.addEventListener('click', abrirMenuModal)

menuModalBg.addEventListener('click', fecharMenuModal)

function abrirMenuModal() {


	menuModal.style.display = 'flex';
	menuModalBg.style.display = 'block'


}

function fecharMenuModal() {
	function display() {
		menuModal.style.display = 'none';
		menuModal.style.animationName = '';
	}
	menuModal.style.animationName = 'fechar-menu-modal';
	menuModalBg.style.display = 'none'
	setTimeout(display, 700)
}

//

//Abrir e fechar pesquisa
let ListaIdeias = document.querySelector('.lista-ideias');

let footer = document.querySelector('footer');

let barraPesquisa = document.querySelector('.barra-pesquisa');

let buttonPesquisar = document.querySelector('.pesquisar img');

let bgBarraPesquisa = document.querySelector('.bg-barra-pesquisa')

buttonPesquisar.addEventListener('click', abrirBarraPesquisa)

bgBarraPesquisa.addEventListener('click', fecharBarraPesquisa)

function abrirBarraPesquisa() {

	if (barraPesquisa.classList.contains('barra-pesquisa-active')) {

		function display() {
			barraPesquisa.style.display = ''
		}
		barraPesquisa.classList.remove('barra-pesquisa-active')

		bgBarraPesquisa.style.display = 'none';
		ListaIdeias.style.filter = '';
		footer.style.filter = '';

		setTimeout(display, 700)


	} else {
		function display() {

			barraPesquisa.classList.add('barra-pesquisa-active')
		}

		bgBarraPesquisa.style.display = 'block'
		barraPesquisa.style.display = 'block'
		ListaIdeias.style.filter = 'blur(2px)'
		footer.style.filter = 'blur(2px)'


		setTimeout(display, 10)


	}


}

function fecharBarraPesquisa() {
	function display() {
		barraPesquisa.style.display = ''
	}
	barraPesquisa.classList.remove('barra-pesquisa-active')

	bgBarraPesquisa.style.display = 'none'
	ListaIdeias.style.filter = '';
	footer.style.filter = '';

	setTimeout(display, 700)

}

//

// abrir submenu
let buttonMinhasIdeias = document.querySelector("#button-minhas-ideias")

buttonMinhasIdeias.addEventListener('click', abrirUlMinhasIdeias)

function abrirUlMinhasIdeias() {
	let ulMinhasIdeias = document.querySelector('#ul-minhas-ideias')
	if (ulMinhasIdeias.style.display == 'block') {
		$("#ul-minhas-ideias").slideUp('slow');


	} else {
		$("#ul-minhas-ideias").slideDown('slow');

	}

}

//


// ABRIR MEU PERFIL


let buttonsMeuPerfil = document.querySelectorAll('.meu-perfil');

for (let i = 0; i < buttonsMeuPerfil.length; i++) {

	buttonsMeuPerfil[i].addEventListener("click", abrirMeuPerfil)
}


function abrirMeuPerfil() {

	window.location.assign("perfil.html");

}
//



//ABRIR POSTAR NOVA IDEIA 

let buttonPostarNovaIdeia = document.querySelector('#button-li-postar-nova-ideia');

buttonPostarNovaIdeia.addEventListener('click', abrirPostarNovaIdeia)

function abrirPostarNovaIdeia() {

	window.location.assign("postar-ideia.html");

}



// SAIR 

let buttonSair = document.querySelector("#button-sair");

buttonSair.addEventListener("click", sairLogout)


function sairLogout() {

	fecharMenuModal()

	$(".loadings")
		.css("display", "flex")
		.fadeIn();

	localStorage.removeItem('userData')

	console.log(localStorage.userData)

	function display() {

		$(".loadings")
			.css("display", "flex")
			.fadeOut();

		window.location.replace("index.html")


	}

	setTimeout(display, 1500)

}
//
