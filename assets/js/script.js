function iniciarProjetos() {
    var containerProjetos = document.getElementById('projetos');
    itens.map((valor) => {
        containerProjetos.innerHTML += `
<div class="box">
        <div class="accordion-item ">
        <h2 class="accordion-header" id="flush-heading`+valor.id+`">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapse`+valor.id+`" aria-expanded="false"
                aria-controls="flush-collapse`+valor.id+`">
                <h4 class="grid-title">`+ valor.nome +`</h4>
            </button>
        </h2>
        <div id="flush-collapse`+valor.id+`" class="accordion-collapse collapse"
            aria-labelledby="flush-heading`+valor.id+`" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
    
                <p class="grid-description">`+ valor.descricao +`</p>
    
                <a class="button" target="_blank"
                    href="`+valor.link+`"><span>Projeto</span></a>
            </div>
        </div>
    </div>
</div>
            `;
    })
}
iniciarProjetos();


             



{/* <div class="accordion-item  ">
    <h2 class="accordion-header" id="flush-headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo" aria-expanded="false"
            aria-controls="flush-collapseTwo">
            <h4 class="grid-title">Supermercado</h4>
        </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse"
        aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">

            <p class="grid-description">Este projeto foi solicitado por um de meus professores na
                faculdade, no
                início, ele foi criado na linguagem Java, porém eu recriei ele em JavaScript. É um
                sistema de
                compras de produtos.</p>

            <a class="button" target="_blank"
                href="https://github.com/igorcesar-dev/supermarket"><span>Acessar</span></a>

        </div>
    </div>
</div>

<div class="accordion-item ">
    <h2 class="accordion-header" id="flush-headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree" aria-expanded="false"
            aria-controls="flush-collapseThree">
            <h4 class="grid-title">Helicopter Game</h4>
        </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse"
        aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
            <p class="grid-description">Este projeto foi elaborado na bootcamp Take Blip Web
                Developer,
                pertecente à platoforma da Digital Innovation One.</p>

            <a class="button" target="_blank"
                href="https://github.com/igorcesar-dev/helicopter-game"><span>Acessar</span></a>

        </div>
    </div>
</div>

<div class="accordion-item ">
    <h2 class="accordion-header" id="flush-headingFour">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour" aria-expanded="false"
            aria-controls="flush-collapseFour">
            <h4 class="grid-title">Menu de restaurante</h4>
        </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse"
        aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
            <p class="grid-description">Este projeto é uma página de menu de restaurante, que filtra
                os
                diferentes menus de comida disponíveis. Foi possível atribuir aprendizados sobre
                funções
                de
                ordem superior, como map, reduce e filter.</p>

            <a class="button" target="_blank"
                href="https://github.com/igorcesar-dev/restaurantMenu"><span>Acessar</span></a>

        </div>
    </div>
</div>

<div class="accordion-item ">
    <h2 class="accordion-header" id="flush-headingFive">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFive" aria-expanded="false"
            aria-controls="flush-collapseFive">
            <h4 class="grid-title">Urna Eletrônica</h4>
        </button>
    </h2>
    <div id="flush-collapseFive" class="accordion-collapse collapse"
        aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
            <p class="grid-description">Criado com HTML, CSS e JavaScript, este projeto se trata
                de uma urna eletrônica onde o
                usuário pode realizar a sua votação de acordo com a escolha para eleição.</p>

            <a class="button" target="_blank"
                href="https://github.com/igorcesar-dev/urnaEletronica"><span>Acessar</span></a>
        </div>
    </div>
</div>

<div class="accordion-item ">
    <h2 class="accordion-header" id="flush-headingSix">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseSix" aria-expanded="false"
            aria-controls="flush-collapseSix">
            <h4 class="grid-title">Menu de restaurante</h4>
        </button>
    </h2>
    <div id="flush-collapseSix" class="accordion-collapse collapse"
        aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
            <p class="grid-description">Este projeto é uma página de menu de restaurante, que filtra
                os
                diferentes menus de comida disponíveis. Foi possível atribuir aprendizados sobre
                funções
                de
                ordem superior, como map, reduce e filter.</p>

            <a class="button" target="_blank"
                href="https://github.com/igorcesar-dev/restaurantMenu"><span>Acessar</span></a>

        </div>
    </div>
</div>
</div> */}