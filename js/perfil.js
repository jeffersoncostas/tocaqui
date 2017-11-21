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



//fazendo arcodeon de descrição


let conquistas = document.getElementById("conquistas_nome"); //conquistas

conquistas.addEventListener("click", function () {
	let medalhas = document.getElementById("medalhas");
	medalhas.classList.toggle("active");

	let seta = document.getElementById("seta2");
	seta.classList.toggle("active");

	conquistas.classList.toggle("active");


});

let meus_projetos = document.getElementById("meus_projetos"); //meus projetos

meus_projetos.addEventListener("click", function () {
	let projetos = document.getElementById("projetos");
	projetos.classList.toggle("active");

	let seta = document.getElementById("seta3");
	seta.classList.toggle("active");

	meus_projetos.classList.toggle("active");


});

let projetos_que_to = document.getElementById("projetos_que_to"); //projetos em que eu to

projetos_que_to.addEventListener("click", function () {
	let projetos_to = document.getElementById("projetos_to");
	projetos_to.classList.toggle("active");

	let seta = document.getElementById("seta4");
	seta.classList.toggle("active");

	projetos_que_to.classList.toggle("active");


});

// RESGATAR DADOS LOCALSTORAGE

//$(".loadings")
//.css("display", "flex")
//	.fadeIn();



let userDataExplorar = null;
//

let lStorageUser = null;


let l2StorageUser = null;

if (localStorage.userData != undefined) {


	userDataExplorar = JSON.parse(localStorage.userData);
	//


	lStorageUser = localStorage.userData = JSON.stringify(userDataExplorar)


	l2StorageUser = JSON.parse(lStorageUser)

	console.log('entrei')
	console.log(lStorageUser)

	alterarPaginaUserName()

} else {

	//window.location.replace("index.html")


}


function alterarPaginaUserName() {

	// nome no menu
	let spanUserNameMenu = document.createElement('span')
	let userNameMenu = document.querySelector('.user-name-menu')
	let spanText = document.createTextNode(l2StorageUser.name)
	spanUserNameMenu.appendChild(spanText)
	userNameMenu.appendChild(spanUserNameMenu)


	//nome na pagina

	let nomeNaPagina = document.querySelector('.nome-na-pagina');
	let spanTextNome = document.createTextNode(l2StorageUser.name)

	nomeNaPagina.appendChild(spanTextNome);

	// habilidades da pessoa na pagina

	let habilidadesUsuario = document.querySelector("#habilidades-meu-perfil");

	if (habilidadesUsuario.value == null || habilidadesUsuario.vaue = "") {

		habilidadesUsuario.value = " quais suas habilidades?";
	} else {

		habilidadesUsuario.value = l2StorageUser.habilidades;

	}



	// descrição da pessoa

	let sobreoUsuario = document.querySelector("#sobre-o-usuario");

	console.log(sobreoUsuario.value);

	if (sobreoUsuario.value == "" || sobreoUsuario == null) {

		sobreoUsuario.value = "conte um pouco sobre você..."
	} else {
		sobreoUsuario.value = l2StorageUser.sobre;


	}

	$(".loadings")
		.css("display", "flex")
		.fadeOut();


}




/// Alterar habilidades 

let habilidadesUsuario = document.querySelector("#habilidades-meu-perfil");

habilidadesUsuario.addEventListener('keydown', function (event) {
	enviarHabilidadesEnter(event)
})

function enviarHabilidadesEnter(event) {

	if (event.which == 13 || event.which == 10) {
		$(".loadings")
			.css("display", "flex")
			.fadeIn();
		enviarHabilidadesServ(habilidadesUsuario.value)
		event.stopImmediatePropagation();
		event.preventDefault();
	}

}


function enviarHabilidadesServ(habi) {

	$.ajax({
		data: '{"some":"json"}',
		dataType: 'json',
		type: 'GET',
		url: 'http://rest.learncode.academy/api/tocaqui/usuarios4/',
		success: function (data) {
			for (let i = 0; i < data.length; i++) {


				if (data[i].idUser == l2StorageUser.idUser) {

					data[i].habilidades = habi;
					let id1 = data[i].id;


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
							'minhasIdeias': data[i].minhasIdeias,
							'ideiasParticipo': data[i].ideiasParticipo
						},
						url: 'http://rest.learncode.academy/api/tocaqui/usuarios4/' + id1,
						success: enviarpLocalStorage(data[i])


					});





				}
			}
		}
	})

	function enviarpLocalStorage(data) {

		l2StorageUser = data


		localStorage.userData = JSON.stringify(l2StorageUser);
		$(".loadings")
			.css("display", "flex")
			.fadeOut();

	}
}
