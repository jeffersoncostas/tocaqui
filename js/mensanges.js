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
	localStorage.removeItem('ideiaRecemParticipada')

	window.location.assign("perfil.html");

}
//



//ABRIR POSTAR NOVA IDEIA 

let buttonPostarNovaIdeia = document.querySelector('#button-li-postar-nova-ideia');

buttonPostarNovaIdeia.addEventListener('click', abrirPostarNovaIdeia)

function abrirPostarNovaIdeia() {
	localStorage.removeItem('ideiaRecemParticipada')

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
	localStorage.removeItem('ideiaRecemParticipada')

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



// ABRIR EXPLORAR 

let buttonExplorarIdeias = document.querySelector("#explorar-ideias");


buttonExplorarIdeias.addEventListener('click', abrirExplorar)

function abrirExplorar() {
	localStorage.removeItem('ideiaRecemParticipada')

	window.location.replace("explorar.html")


}



/////// RESGATAR DADOS LOCALSTORAGE

let userDataExplorar = null;
//


let lStorageUser = null;


let l2StorageUser = null;

console.log(localStorage.userData)

if (localStorage.userData != undefined) {


	userDataExplorar = JSON.parse(localStorage.userData);
	//


	lStorageUser = localStorage.userData = JSON.stringify(userDataExplorar)


	l2StorageUser = JSON.parse(lStorageUser)

	console.log('entrei')
	console.log(l2StorageUser)

	alterarPaginaUserName()

} else {

	window.location.replace("index.html")


}



function alterarPaginaUserName() {

	let spanUserNameMenu = document.createElement('span')
	let userNameMenu = document.querySelector('.user-name-menu')
	let spanText = document.createTextNode(l2StorageUser.name)
	spanUserNameMenu.appendChild(spanText)
	userNameMenu.appendChild(spanUserNameMenu)

}







//MOSTRAR TITULO DA IDEIA

$.ajax({
	data: '{"some":"json"}',
	dataType: 'json',
	type: 'GET',
	url: 'http://rest.learncode.academy/api/tocaqui/teste-ideias7/',
	success: function (data) {
		for (let i = 0; i < data.length; i++) {

			if (data[i].idIdeia == localStorage.ideiaRecemParticipada) {

				let tituloBpMensagem = document.querySelector("#titulo-bp-mensagem");
				let textTitulo = document.createTextNode(data[i].nomeIdeia)

				tituloBpMensagem.appendChild(textTitulo);




			}

		}

	}
})
