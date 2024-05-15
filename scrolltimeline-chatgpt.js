const elem_bg = document.querySelector('#ele_bg');
const elem_overlay = document.querySelector('#ele_overlay');
const elem_downwardline = document.querySelector('#ele_downwardline');
const elem_logo1 = document.querySelector('#ele_logo1');
const elem_start_your_order_text = document.querySelector('#ele_start_your_order_text');
const elem_anchorbutton = document.querySelector('#ele_anchorbutton');
const elem_submit = document.querySelector('#submit');


function add_black_overlay() {
    elem_bg.classList.add('bground_blur');
    elem_overlay.classList.add('black_overlay');
    elem_downwardline.classList.add('pls_scroll_down_not_showed');
    elem_logo1.classList.add('not_show_logo1');
    elem_start_your_order_text.classList.add('not_show_start_your_order_text');
    elem_anchorbutton.classList.add('anchor_button_order_page_topright');
}

function remove_black_overlay() {
    elem_bg.classList.remove('bground_blur');
    elem_overlay.classList.remove('black_overlay');
    elem_downwardline.classList.remove('pls_scroll_down_not_showed');
    elem_logo1.classList.remove('not_show_logo1');
    elem_start_your_order_text.classList.remove('not_show_start_your_order_text');
    elem_anchorbutton.classList.remove('anchor_button_order_page_topright');
}



var a = true

window.addEventListener('scroll', () => {

    if (window.scrollY != 0 && a == true) {
        add_black_overlay()  /*變模糊的函數*/

        a = false
    }
    else if (window.scrollY == 0) { /*變清晰的函數*/

        remove_black_overlay()
        a = true
    }
})




const scriptURL = 'https://script.google.com/macros/s/AKfycbwpQ_mRRbIlBo8O9oOp7pAgi4tSUKw8_LuajqZSCqVnMyBGYWTRxPDIgBCL2qqmdS2f/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    elem_submit.id = 'loader' /*送出按鈕變成轉圈圈*/
    elem_submit.value = '';  /*'送出'兩字變成空白*/
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("收到您的訂餐訊息了，餐點送到時會以電話通知"))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})



let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let products = [];
let cart = [];



iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

const addDataToHTML = () => {
    // remove datas default from HTML

    // add new datas
    if (products.length > 0) // if has data
    {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.dataset.id = product.id;
            newProduct.classList.add('item');
            newProduct.innerHTML =
                `<img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button class="addCart">Add To Cart</button>`;
            listProductHTML.appendChild(newProduct);
        });
    }
}
listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('addCart')) {
        let id_product = positionClick.parentElement.dataset.id;
        addToCart(id_product);
    }
})
const addToCart = (product_id) => {
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if (cart.length <= 0) {
        cart = [{
            product_id: product_id,
            quantity: 1
        }];
    } else if (positionThisProductInCart < 0) {
        cart.push({
            product_id: product_id,
            quantity: 1
        });
    } else {
        cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
    addCartToMemory();
}
const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}
const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if (cart.length > 0) {
        cart.forEach(item => {
            totalQuantity = totalQuantity + item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;

            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
            listCartHTML.appendChild(newItem);
            newItem.innerHTML = `
            <div class="image">
                    <img src="${info.image}">
                </div>
                <div class="name">
                ${info.name}
                </div>
                <div class="totalPrice">$${info.price * item.quantity}</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${item.quantity}</span>
                    <span class="plus">></span>
                </div>
            `;
        })
    }
    iconCartSpan.innerText = totalQuantity;
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if (positionClick.classList.contains('plus')) {
            type = 'plus';
        }
        changeQuantityCart(product_id, type);
    }
})
const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    if (positionItemInCart >= 0) {
        let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
                break;

            default:
                let changeQuantity = cart[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity;
                } else {
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
    addCartToMemory();
}

const initApp = () => {
    // get data product
    fetch('products.json') //這個product.json好像就是所謂指定的url了 fetch會找伺服器要求同目錄下的這個檔案。 
        .then(response => response.json())
        .then(data => {
            products = data;
            addDataToHTML();

            // get data cart from memory
            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'));
                addCartToHTML();
            }
        })
}
initApp();