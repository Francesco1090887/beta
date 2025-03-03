document.addEventListener("DOMContentLoaded", function () {
    let menuItems = document.querySelectorAll(".menu-item > a");

    menuItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            let submenu = this.nextElementSibling;
            
            if (submenu && submenu.classList.contains("submenu")) {
                if (submenu.style.display === "block") {
                    submenu.style.display = "none";
                } else {
                    cerrarSubmenus();
                    submenu.style.display = "block";
                }
            }
        });
    });

    let submenuItems = document.querySelectorAll(".submenu-item > a");

    submenuItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            let subsubmenu = this.nextElementSibling;
            
            if (subsubmenu && subsubmenu.classList.contains("sub-submenu")) {
                if (subsubmenu.style.display === "block") {
                    subsubmenu.style.display = "none";
                } else {
                    cerrarSubSubmenus();
                    subsubmenu.style.display = "block";
                }
            }
        });
    });

    function cerrarSubmenus() {
        document.querySelectorAll(".submenu").forEach(sub => sub.style.display = "none");
    }

    function cerrarSubSubmenus() {
        document.querySelectorAll(".sub-submenu").forEach(sub => sub.style.display = "none");
    }
});

// Función para mostrar detalles del plato
function mostrarPlato(plato) {
    console.log("Plato seleccionado:", plato);

    const detalle = document.getElementById("detalle-plato");

    const platos = {
        // Platos a la carta
        plato1: { nombre: "Bistec a la Parrilla", img: "imagenes/bistec.jpg", precio: "110000", descripcion: "El bistec a la parrilla es un plato clásico y delicioso que combina la ternura de la carne de res con el sabor intenso de la parrilla. Se prepara con un filete de carne de res, aceite de oliva, sal y pimienta, y opcionalmente se pueden agregar hierbas y especias como ajo, perejil y tomillo. El resultado es un filete cocinado a la parrilla con una crusta crujiente y dorada en el exterior y un interior suave y jugoso, con un sabor intenso y carnoso que recuerda la parrilla." },
        plato2: { nombre: "Pescado a la Mediterránea", img: "imagenes/pescado.jpg", precio: "125000", descripcion: "El pescado a la mediterránea es un plato delicioso y saludable que combina la frescura del pescado con los sabores y aromas típicos de la cocina mediterránea. Se prepara con un filete de pescado blanco, como la merluza o el lenguado, que se cocina en una salsa hecha con aceite de oliva, ajo, limón, tomate, alcaparras y orégano. El resultado es un plato ligero y sabroso, con un sabor intenso y aromático que recuerda la costa mediterránea." },
        plato3: { nombre: "Salmón al Limón", img: "imagenes/salmon.jpg", precio: "100000", descripcion: "El salmón al limón es un plato delicioso y refrescante que combina la riqueza del salmón con la acidez y el aroma del limón. Se prepara con un filete de salmón fresco que se cocina en una salsa hecha con jugo de limón, mantequilla, ajo y hierbas como el perejil y el eneldo. El resultado es un plato ligero y sabroso, con un sabor intenso y aromático que resalta la calidad del salmón. La acidez del limón ayuda a cortar la riqueza del pescado, creando un equilibrio perfecto de sabores." },
        plato4: { nombre: "Ternera a la Bourguignonne", img: "imagenes/ternera.jpg", precio: "112000", descripcion: "Un plato clásico francés que combina la ternura de la carne con la riqueza de una salsa de vino tinto. La ternera, cocinada a la perfección, se presenta en un estofado de vino tinto con cebolla, zanahoria y champiñones, que han sido cocinados lentamente para extraer todos sus sabores y texturas. La salsa, espesa y sabrosa, envuelve la carne en un abrazo cálido y reconfortante." },
        plato5: { nombre: "Pollo al Ajillo", img: "imagenes/pollo.jpg", precio: "83000", descripcion: "Un plato sencillo pero intenso, que combina la suavidad del pollo con el sabor pungente del ajo. El pollo, cocinado a la perfección, se presenta con una piel crujiente y dorada, mientras que la carne interior es jugosa y tierna. El ajo, picado y cocinado con aceite de oliva y perejil, agrega un sabor profundo y aromático al plato." },

         // Sopas
         sopa_pollo: { nombre: "Sopa de Pollo", img: "imagenes/sopa_pollo.jpg", precio: "15000", descripcion: "Nuestra sopa de pollo es una receta tradicional hecha con amor, con trozos de pollo cocidos a la perfección y verduras frescas en un caldo claro y sabroso. Una opción reconfortante y deliciosa para cualquier momento del día." },
         sopa_res: { nombre: "Sopa de Res", img: "imagenes/sopa_res.jpg", precio: "18000", descripcion: "Un clásico de la abuela. Nuestra sopa de res es una receta tradicional hecha con trozos de carne de res tierna, verduras frescas y especias selectas, todo en un caldo rico y sabroso. Un plato reconfortante y nutritivo que te hará sentir como en casa." },
         sopa_pescado: { nombre: "Sopa de Pescado", img: "imagenes/sopa_pescado.jpg", precio: "20000", descripcion: "Un plato reconfortante y saludable. Nuestra sopa de pescado es una receta tradicional hecha con pescado fresco y verduras frescas, cocidas a la perfección en un caldo rico y sabroso. Un plato que te hará sentir bien y te proporcionará un buen equilibrio de nutrientes." },

         //  Principios
        arroz: { nombre: "Arroz Blanco", img: "imagenes/arroz.jpg", precio: "5000", descripcion: "Un acompañante perfecto. Nuestro arroz blanco es cocinado a la perfección para ofrecerte una textura suave y un sabor ligero. Es el acompañante ideal para cualquier plato, ya sea carne, pescado o verduras." },
        pasta: { nombre: "Pasta al Pesto", img: "imagenes/pasta.jpg", precio: "12000", descripcion: "Un clásico italiano. Nuestra pasta al pesto es una delicia fresca y sabrosa, hecha con fettuccine frescas, cubiertas con una salsa de pesto casera hecha con albahaca fresca, ajo, piñones y queso parmesano. Un plato ligero y reconfortante que te transportará a la Toscana." },
        pure: { nombre: "Puré de Papa", img: "imagenes/pure.jpg", precio: "10000", descripcion: "Un plato casero. Nuestro puré de papa es una delicia cremosa y suave, hecha con papas frescas cocidas a la perfección y mezcladas con mantequilla y leche. Un acompañante perfecto para cualquier plato, que te hará sentir como en casa." },

          // Carnes
          pollo: { nombre: "Pollo Asado", img: "imagenes/pollo_asado.jpg", precio: "48000", descripcion: "Un plato reconfortante. Nuestro pollo asado es una receta tradicional hecha con amor y dedicación. El pollo es marinado en una mezcla de aceite de oliva, jugo de limón, ajo, orégano, pimienta y sal, y luego asado a la perfección con cebolla, pimiento y tomate, resultando en un plato reconfortante y delicioso que te hará sentir como en casa." },
          res: { nombre: "Carne de Res al Vino", img: "imagenes/res_vino.jpg", precio: "64000", descripcion: "Un plato para los sentidos. Nuestra carne de res al vino es una experiencia culinaria que combina la riqueza de la carne de res con la elegancia del vino. La carne es cocinada a fuego lento en un caldo de vino tinto, con verduras frescas y hierbas aromáticas, creando un plato que es tanto un deleite para el paladar como para la vista." },
          cerdo: { nombre: "Chuleta de Cerdo", img: "imagenes/chuleta.jpg", precio: "49000", descripcion: "Un sabor intenso. Nuestra chuleta de cerdo es una delicia hecha con carne de cerdo fresca y de alta calidad, cocinada a la perfección para ofrecerte un sabor intenso y una textura jugosa. La chuleta es marinada en una mezcla de especias y hierbas, y luego asada a la perfección para crear un plato que es tanto reconfortante como delicioso." },

          // Bebidas
        jugo_naranja: { nombre: "Jugo de Naranja", img: "imagenes/jugo_naranja.jpg", precio: "8000", descripcion: "Un clásico revitalizante. Nuestro jugo de naranja es fresco y natural, exprimido de naranjas selectas para ofrecerte un sabor intenso y una dosis de vitamina C para empezar el día con energía." },
        jugo_mango: { nombre: "Jugo de Mango", img: "imagenes/jugo_mango.jpg", precio: "9000", descripcion: "Un sabor tropical. Nuestro jugo de mango es una deliciosa mezcla de mango fresco y jugoso, perfecto para transportarte a un paraíso tropical. Disfruta de su sabor dulce y su textura suave." },
        jugo_fresa: { nombre: "Jugo de Fresa", img: "imagenes/jugo_fresa.jpg", precio: "9000", descripcion: "Un sabor dulce y fresco. Nuestro jugo de fresa es una deliciosa mezcla de fresas frescas y jugosas, perfecto para satisfacer tu antojo de algo dulce y refrescante. Disfruta de su sabor intenso y su textura suave." },

        coca_cola: { nombre: "Coca Cola", img: "imagenes/coca_cola.jpg", precio: "6000", descripcion: "Bebida gaseosa clásica y refrescante." },
        pepsi: { nombre: "Pepsi", img: "imagenes/pepsi.jpg", precio: "6000", descripcion: "Refresco de cola con sabor único." },
        sprite: { nombre: "Sprite", img: "imagenes/sprite.jpg", precio: "6000", descripcion: "Refresco de limón y lima." },

        cafe: { nombre: "Café", img: "imagenes/cafe.jpg", precio: "5000", descripcion: "Un momento de tranquilidad. Nuestro café es una selección de los mejores granos, tostados con cuidado para ofrecerte un sabor intenso y una textura suave. Disfruta de un momento de tranquilidad con una taza de nuestro café, perfecto para acompañar tu desayuno o para tomar un descanso en cualquier momento del día." },
        te: { nombre: "Té", img: "imagenes/te.jpg", precio: "5000", descripcion: "Nuestro té es una selección de las mejores hojas, elegidas por su sabor y aroma únicos. Disfruta de un momento de relajación con una taza de té, perfecto para calmar tu mente y rejuvenecer tu cuerpo." },
        chocolate: { nombre: "Chocolate Caliente", img: "imagenes/chocolate.jpg", precio: "7000", descripcion: "Un abrazo en una taza. Nuestro chocolate caliente es una rica y cremosa mezcla de chocolate de alta calidad, leche fresca y azúcar, perfecta para calentar tu corazón y tu alma en cualquier momento del día." }
        // Agrega más platos si es necesario
    };

    if (platos[plato]) {
        detalle.innerHTML = `
            <h2>${platos[plato].nombre}</h2>
            <img src="${platos[plato].img}" alt="${platos[plato].nombre}">
            <p>${platos[plato].descripcion}</p>
            <p><strong>Precio:</strong> ${platos[plato].precio} COP</p>
            <button id="buy-btn">Comprar</button>
        `;
    
        // Agregar el evento al botón después de insertarlo en el DOM
        document.getElementById("buy-btn").addEventListener("click", function() {
            addToCart(platos[plato].nombre, platos[plato].precio);
        });
    
    } else {
        console.error("Plato no encontrado:", plato);
    }
}
    
const eventos = {
    banquetes: {
        nombre: "Banquetes",
        img: "imagenes/banquete.jpg",
        descripcion: "Experiencia culinaria y servicio excepcional. Nuestro servicio de banquetes ofrece una experiencia culinaria única y personalizada para tus eventos. Nuestros chefs preparan platos deliciosos y nuestros meseros proporcionan un servicio atento y profesional. ¡Déjanos ayudarte a crear un evento inolvidable!",
        precioBase: 150000, // Precio por persona
        elementos: ["Menú gourmet", "Decoración personalizada", "Música en vivo"]
    },
    bufetes: {
        nombre: "Bufetes",
        img: "imagenes/bufete.jpg",
        descripcion: "Una experiencia gastronómica sin límites. Nuestro bufé ofrece una amplia variedad de opciones gastronómicas para satisfacer todos los gustos y preferencias. Desde platos clásicos hasta creaciones innovadoras, nuestro equipo de chefs se esfuerza por ofrecerte una experiencia culinaria inolvidable.",
        precioBase: 50000, // Precio por persona
        elementos: ["Menú buffet", "Bebidas incluidas", "Postres"]
    },
    eventos_familiares: {
        nombre: "Eventos Familiares",
        img: "imagenes/evento_familiar.jpg",
        descripcion: "Tradición y amor. Nuestro espacio es el lugar perfecto para celebrar las tradiciones y la unión familiar. Con un ambiente cálido y acogedor, y opciones de menú deliciosas, nosotros nos encargamos de crear un evento familiar inolvidable que refleje el amor y la unión de tu familia.",
        precioBase: 30000,
        elementos: ["Almuerzo/cena", "Decoración", "Juegos para niños"]
    },
    eventos_empresariales: {
        nombre: "Eventos Empresariales",
        img: "imagenes/evento_empresa.jpg",
        descripcion: "Conecta, innova y crece. Nuestro espacio es diseñado para acoger eventos empresariales que fomenten la conexión, la innovación y el crecimiento. Con un ambiente dinámico y un equipo de expertos en eventos, nosotros nos encargamos de crear un evento empresarial inolvidable que te ayude a alcanzar tus objetivos.",
        precioBase: 80000,
        elementos: ["Salón privado", "Equipo audiovisual", "Catering especializado"]
    },
    fiestas_privadas: {
        nombre: "Fiestas Privadas",
        img: "imagenes/evento_fiesta.jpg",
        descripcion: "Un espacio para celebrar contigo. Nuestro espacio es el lugar perfecto para celebrar tus fiestas privadas de manera exclusiva y personalizada. Con un ambiente cálido y acogedor, y un equipo de expertos en eventos, nosotros nos encargamos de crear un evento inolvidable que refleje tu personalidad y estilo.",
        precioBase: 70000,
        elementos: ["Salón privado", "Música en Vivo", "Catering especializado"]
    },


};

function mostrarEvento(evento) {
    const eventoInfo = eventos[evento];

    if (eventoInfo) {
        document.getElementById("detalle-evento").innerHTML = `
            <h2>${eventoInfo.nombre}</h2>
            <img src="${eventoInfo.img}" alt="${eventoInfo.nombre}">
            <p>${eventoInfo.descripcion}</p>
            <h3>Incluye:</h3>
            <ul>
                ${eventoInfo.elementos.map(item => `<li>${item}</li>`).join("")}
            </ul>
            <label for="invitados">Número de invitados:</label>
            <input type="number" id="invitados" min="10" value="10" onchange="calcularCosto('${evento}')">
            <p><strong>Precio Base por Persona:</strong> ${eventoInfo.precioBase.toLocaleString()} COP</p>
            <p><strong>Costo Total:</strong> <span id="costo-total">${(eventoInfo.precioBase * 10).toLocaleString()}</span> COP</p>
            <button class="buy-btn" onclick="comprarEvento('${eventoInfo.nombre}')">Adquirir Servicio</button>
        `;
    } else {
        console.error("Evento no encontrado:", evento);
    }
}

function calcularCosto(evento) {
    const eventoInfo = eventos[evento];
    const invitados = document.getElementById("invitados").value;
    const costoTotal = eventoInfo.precioBase * invitados;
    document.getElementById("costo-total").innerText = costoTotal.toLocaleString() + " COP";
}


// Función de compra (simulación)
function comprarEvento(nombre) {
    alert(`Has adquirido el servicio de ${nombre}. Nos pondremos en contacto contigo pronto.`);
}



let cart = [];
let cartTotal = 0;

function toggleCart() {
    document.getElementById("cart-container").classList.toggle("active");
}

// Función para agregar productos al carrito
function addToCart(name, price) {
    price = parseFloat(price); // Asegurar que el precio es numérico
    cart.push({ name, price });
    cartTotal += price;
    updateCart();
}

// Función para actualizar el carrito
function updateCart() {
    let cartItemsContainer = document.getElementById("cart-items");
    let cartTotalContainer = document.getElementById("cart-total");
    let cartCount = document.getElementById("cart-count");

    cartItemsContainer.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)} COP`;

        let removeButton = document.createElement("button");
        removeButton.textContent = "❌";
        removeButton.onclick = function () {
            removeFromCart(index);
        };

        li.appendChild(removeButton);
        cartItemsContainer.appendChild(li);

        total += item.price;
    });

    cartTotalContainer.textContent = `$${total.toFixed(2)} COP`;
    cartCount.textContent = cart.length;
}

// Función para eliminar productos del carrito
function removeFromCart(index) {
    cartTotal -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("El carrito está vacío.");
        return;
    }
    alert(`Compra realizada. Total: $${cartTotal.toFixed(2)} COP`);
    cart = [];
    cartTotal = 0;
    updateCart();
}

// Actualizar el total y la cantidad de productos
cartTotalContainer.textContent = `$${total.toFixed(2)}`;
cartCount.textContent = cart.length;




