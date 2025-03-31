document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products-container");
    
    let products = /*JSON.parse(localStorage.getItem("products")) || */[
  { id: 1, name: "LAS VIDAS DENTRO DE TU CABEZA", description: "Una profunda exploración de la mente humana y sus múltiples facetas, llevándonos a cuestionar la realidad y la percepción.", price: 100000, img: "./../img/las_vidas_dentro_de_tu_cabeza.png" },
    { id: 2, name: "LA DIVINA COMEDIA", description: "Un viaje épico a través del Infierno, el Purgatorio y el Paraíso, guiado por el poeta Virgilio. Una obra maestra de la literatura universal.", price: 250000, img: "./../img/la_divina_comedia.png" },
    { id: 3, name: "EL LIBRO DE URANTIA", description: "Una obra espiritual y filosófica que presenta una cosmología detallada y una visión de la relación entre Dios y la humanidad.", price: 200000, img: "./../img/urantia.png" },
    { id: 4, name: "EL AMOR EN LOS TIEMPOS DE CÓLERA", description: "Una historia de amor apasionada y persistente que se desarrolla a lo largo de décadas en un contexto de guerra y enfermedad.", price: 200, img: "./../img/el_amor_en_los_tiempos_de_colera.png" },
    { id: 5, name: "LA FAMILIA DE PASCUAL DUARTE", description: "Una novela cruda y realista que retrata la vida de un hombre marcado por la violencia y la fatalidad en la España rural.", price: 200, img: "./../img/la_familia_de_pascual_duarte.png" },
    { id: 6, name: "LA ILIADA", description: "Un poema épico que narra los acontecimientos de la guerra de Troya y la ira del héroe Aquiles.", price: 200, img: "./../img/la_iliada.png" },
    { id: 7, name: "LA ODISEA", description: "Un poema épico que sigue el viaje de regreso del héroe Odiseo a su hogar en Ítaca después de la guerra de Troya.", price: 200, img: "./../img/la_odisea.png" },
    { id: 8, name: "EL LOBO ESTEPARIO", description: "Una novela que explora la dualidad de la naturaleza humana y la lucha entre la civilización y los instintos salvajes.", price: 200, img: "./../img/lobo_estepario.png" },
    { id: 9, name: "EL CABALLERO DE LA ARMADURA OXIDADA", description: "Una fábula sobre un caballero que debe enfrentarse a sus propios miedos y limitaciones para encontrar su verdadera identidad.", price: 200, img: "./../img/caballero_armadura_oxidada.png" },
    { id: 10, name: "DON QUIJOTE DE LA MANCHA", description: "Una obra maestra de la literatura española que narra las aventuras de un hidalgo que se cree caballero andante.", price: 200, img: "./../img/quijote.png" },
    { id: 11, name: "HISTORIA DE DOS CIUDADES", description: "Una novela histórica ambientada en Londres y París durante la Revolución Francesa, que explora temas de amor, sacrificio y redención.", price: 200, img: "./../img/historia_dos_ciudades.png" },
    { id: 12, name: "EL PRINCIPITO", description: "Un cuento filosófico que narra la historia de un pequeño príncipe que viaja por diferentes planetas y aprende valiosas lecciones sobre la vida.", price: 200, img: "./../img/principito.png" },
    { id: 13, name: "EL DIARIO DE ANA FRANK", description: "El testimonio conmovedor de una joven judía que vivió oculta durante la Segunda Guerra Mundial, relatando sus experiencias y reflexiones.", price: 200, img: "./../img/diario_ana_frank.png" },
    { id: 14, name: "SUEÑO EN EL PABELLÓN ROJO", description: "Una de las cuatro grandes novelas clásicas chinas, que narra la decadencia de una familia aristocrática durante la dinastía Qing.", price: 200, img: "./../img/sueño_pabellon_rojo.png" },
    { id: 15, name: "CIEN AÑOS DE SOLEDAD", description: "Una saga familiar épica que narra la historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo.", price: 200, img: "./../img/cien_años_soledad.png" },
    { id: 16, name: "EL CODIGO DA VINCI", description: "Un thriller de misterio que sigue a un simbologista de Harvard mientras investiga un asesinato en el Louvre y descubre secretos ocultos sobre la Iglesia Católica.", price: 200, img: "./../img/codigo_davinci.png" },
    { id: 17, name: "EL ALQUIMISTA", description: "Una fábula sobre un pastor andaluz que emprende un viaje en busca de un tesoro y descubre su propio destino.", price: 200, img: "./../img/alquimista.png" },
    { id: 18, name: "EL CORONEL NO TIENE QUIEN LE ESCRIBA", description: "Una novela corta que narra la historia de un coronel retirado que espera pacientemente la llegada de su pensión.", price: 200, img: "./../img/coronel_no_tiene_quien_escriba.png" },
    { id: 19, name: "VEINTE MIL LEGUAS DE VIAJE SUBMARINO", description: "Una novela de aventuras que sigue al capitán Nemo y su tripulación a bordo del submarino Nautilus en un viaje por los océanos del mundo.", price: 200, img: "./../img/veinte_mil_leguas_de_viaje_submarino.png" },
    { id: 20, name: "ORGULLO Y PREJUICIO", description: "Una novela romántica que explora las relaciones entre la clase alta inglesa y las complejidades del amor y el matrimonio.", price: 200, img: "./../img/orgullo_prejuicio.png" },

    ];
    
    function renderProducts() {
        productsContainer.innerHTML = "";
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("card-item");
            const shortDescription = product.description.substring(0, 50) + "...";
            productCard.innerHTML = `
                <div class="separator-item">
                    <div class="info-item">
                        <div class="left-card">
                            <img src="./images/${product.img}" alt="${product.name}" class="image" />
                        </div>
                        <div class="right-card">
                            <h3 class="name">${product.name}</h3>
                            <p class="description" id="desc-${product.id}">
                                <span class="short-desc">${shortDescription}</span>
                                <a href="#" class="toggle-desc" data-id="${product.id}">Ver más</a>
                            </p>
                            <h4 class="price">$${formatPrice(product.price)}</h4>
                        </div>
                    </div>
                    <div class="button-item">
                        <button class="add" onclick="addToCart(${product.name})">Agregar</button>
                        <button class="buy" onclick="buy(${product.name})">Comprar</button>
                    </div>
                </div>
            `;
            productsContainer.appendChild(productCard);
        });
        localStorage.setItem("products", JSON.stringify(products));
    }

    function openModal(product) {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <img src="./img/${product.img}" alt="${product.name}" class="modal-image" />
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <h4 class="price">$${formatPrice(product.price)}</h4>
            </div>
        `;
        document.body.appendChild(modal);
        
        modal.querySelector(".close-modal").addEventListener("click", function() {
            modal.remove();
        });
    }
    
    function toggleDescription(event) {
        event.preventDefault();
        const id = event.target.getAttribute("data-id");
        const product = products.find(p => p.id == id);
        openModal(product);
    }
    
    
    const formatPrice = (price) =>{
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    window.addToCart = function (productId) {
        alert("Producto " + productId + " agregado al carrito");
    };

    window.buy = function (productId) {
        alert("Producto " + productId + " comprado");
    }

    function attachEventListeners() {
        document.querySelectorAll(".toggle-desc").forEach(button => {
            button.addEventListener("click", toggleDescription);
        });
        document.querySelectorAll(".add").forEach(button => {
            button.addEventListener("click", addToCart);
        });
        document.querySelectorAll(".buy").forEach(button => {
            button.addEventListener("click", buy);
        });
    }
    
    renderProducts();
    attachEventListeners();

    const style = document.createElement("style");
    style.innerHTML = `
        .card-item {
            height: 350px; 
            overflow: hidden;
            transition: height 0.3s ease-in-out;
        }
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .modal-content {
            background: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            width: 50%;
            position: relative;
        }
        .close-modal {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            font-size: 20px;
        }
        .modal-image {
            max-width: 100%;
            height: auto;
        }
    `;
    document.head.appendChild(style);
    
});
