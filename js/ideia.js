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



		setTimeout(display, 10)


	}


}

function fecharBarraPesquisa() {

	barraPesquisa.classList.remove('barra-pesquisa-active')

	bgBarraPesquisa.style.display = 'none'


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

// voltar

$(".content-voltar").click(voltarAnterior)

function voltarAnterior() {

	window.location.replace("explorar.html")



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


				carregarDadosIdeia(data[i].nomeIdeia, data[i].nomeCriador, data[i].participantes, data[i].descricaoDaIdeia, data[i].oqPrecisa, data[i].imagemDaIdeia, data[i].idIdeia)



			}

		}
		$(".loadings")
			.css("display", "flex")
			.fadeOut();
	}
})


function carregarDadosIdeia(titulo, criador, participantes, descricao, oqprecisa, imgIdeia, idIdeia) {

	//titulo
	let tituloPaginaIdeia = document.querySelector("#id-titulo-pagina-ideia");
	let tituloText = document.createTextNode(titulo);
	tituloPaginaIdeia.appendChild(tituloText);

	//criador
	let criadorPaginaIdeia = document.querySelector("#criador-id");
	let TextCriador = document.createTextNode(criador);
	criadorPaginaIdeia.appendChild(TextCriador);

	//localização
	let localizacaoIdeia = document.querySelector("#localizacao-ideia");
	let textLocalizacao = document.createTextNode("nao definido");
	localizacaoIdeia.appendChild(textLocalizacao);

	//participantes
	let participantesIdeia = document.querySelector("#participantes-ideia-id");
	let textParticipantes = document.createTextNode(participantes);
	participantesIdeia.appendChild(textParticipantes);

	//descricao
	let descricaoIdeia = document.querySelector("#id-descricao-text-pagina-ideia");
	let textDescricao = document.createTextNode(descricao)

	descricaoIdeia.appendChild(textDescricao);

	// oq precisa

	let oqPrecisaIdeia = document.querySelector(".id-qprecisa-pagina-ideia");
	let textOqPrecisa = document.createTextNode(oqprecisa);
	oqPrecisaIdeia.appendChild(textOqPrecisa);


	// imagem ideia

	let imagemIdeia = document.querySelector("#id-imagem-pagina-ideia");

	imagemIdeia.src = imgIdeia;




	$(".botao-participar-pagina-ideia").click(participarIdeia)

	function participarIdeia() {







		// click para entrar na ideia 

		let buttonEntrarIdeia = document.querySelector(".botao-participar-pagina-ideia")
		buttonEntrarIdeia.addEventListener("click", participarDeIdeia)

		function participarDeIdeia() {
			let closeModalParticipar = document.querySelector(".close-modal-participar");

			$(".modal-participar-ideia")
				.css("display", "flex")
				.fadeIn();

			let titulo2IdeiaPopup = document.querySelector("#titulo2-ideia-popup")
			let TexTitulo2 = document.createTextNode(titulo);
			titulo2IdeiaPopup.appendChild(TexTitulo2)

			closeModalParticipar.addEventListener("click", fecharmodalParticipar)


			function fecharmodalParticipar() {

				$("#titulo2-ideia-popup").empty();


				$(".modal-participar-ideia")
					.css("display", "flex")
					.fadeOut();


			}




		}


		let buttonConfirmarParticipacao = document.querySelector("#button-confirmar-participacao")

		buttonConfirmarParticipacao.addEventListener('click', abrirPagMensagens)

		function abrirPagMensagens() {

			$(".loadings")
				.css("display", "flex")
				.fadeIn();



			$.ajax({
				data: '{"some":"json"}',
				dataType: 'json',
				type: 'GET',
				url: 'http://rest.learncode.academy/api/tocaqui/usuarios6/',
				success: function (data) {
					for (let i = 0; i < data.length; i++) {
						let saberseEntrouif = null
						if (data[i].idUser == l2StorageUser.idUser) {
							let id1 = data[i].id;
							saberseEntrouif = 1
							if (data[i].ideiasParticipo == undefined) {
								let arrayIdeiasParticipo = []
								arrayIdeiasParticipo.push(idIdeia)

								requisPut(arrayIdeiasParticipo)
							} else {
								data[i].ideiasParticipo.push(idIdeia);

								let id23 = data[i].ideiasParticipo
								requisPut(id23)
							}
							console.log(data[i].minhasIdeias)

							function requisPut(arrayIdeiasPart) {
								let stringMinhasIdeias = JSON.stringify(data[i].minhasIdeias)

								$.ajax({
									data: '{"some":"json"}',
									dataType: 'json',
									type: 'PUT',
									data: {
										'idUser': data[i].idUser,
										'name': data[i].name,
										'email': data[i].email,
										'senha': data[i].senha,
										'habilidades': data[i].habilidades,
										'sobre': data[i].sobre,
										'conquistas': data[i].conquistas,
										'minhasIdeias': stringMinhasIdeias,
										'ideiasParticipo': arrayIdeiasPart
									},
									url: 'http://rest.learncode.academy/api/tocaqui/usuarios6/' + id1,
									success: enviarpLocalStorage(data[i])


								});


							}





						} else if (saberseEntrouif == 1) {
							break



						}
					}
				}
			})

			function enviarpLocalStorage(data) {

				l2StorageUser = data
				localStorage.userData = JSON.stringify(l2StorageUser);
				localStorage.ideiaRecemParticipada = idIdeia;
				console.log(l2StorageUser)


				function mensagem() {
					$(".loadings")
						.css("display", "flex")
						.fadeOut();

					window.location.assign("mensagens.html")

				}
				setTimeout(mensagem, 200)


			}









		}









	}
}
