//Variable
let allContainerCart = document.querySelector('.products__container');
let containerBuyCart = document.querySelector('.cart')
let buyThings = []


//Functions
loadEventListeners();
function loadEventListeners (){
    allContainerCart.addEventListener('click',addProduct);
}

function addProduct(e){
    e.preventDefault();
    if (e.target.classList.contains('products__button')){
        const selectProduct= e.target.parentElement;
        readTheContent(selectProduct);
    }
}

function readTheContent(product){
    const infoProduct = {
        title: product.querySelector('div h2').textContent,
        price: product.querySelector('div h4').textContent,
        id: product.querySelector('button').getAttribute('data-id'),
        amount: 1,
    }
}

//Funcion para recorrer el arreglo de buyThings y recuperar los atributos del producto y declararlos como vbls a ellos mismos

function loadHtml(){
    clearHtml();
    buyThings.forEach(product => {
        const {title, price, amount, id} = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
        <div class="products__data">
        <h2 class="products__name">${title}</h2>
        <h4 class="products__price">${price}</h4>
        <h4><span class="products__quantity">${amount}</span></h4>
    </div>
    <span class="delete-product" data-id="${id}"><i class='bx bxs-trash' style='color:#ec0e0e'  ></i></span>
        `;

        containerBuyCart.appendChild(row);

        priceTotal.innerHTML = totalCard;

        amountProduct.innerHTML = countProduct;
    });
}