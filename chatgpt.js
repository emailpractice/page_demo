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


