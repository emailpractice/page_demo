const elem_bg = document.querySelector('#ele_bg')
const elem_overlay = document.querySelector('#ele_overlay')
const elem_downwardline = document.querySelector('#ele_downwardline')
const elem_logo1 = document.querySelector('#ele_logo1')
const elem_start_your_order_text = document.querySelector('#ele_start_your_order_text')
const elem_anchorbutton = document.querySelector('#ele_anchorbutton')
const elem_submit = document.querySelector('#submit')


function add_black_overlay() {

  elem_bg.className = 'bground_blur'
  elem_overlay.className = 'black_overlay'

}
function remove_black_overlay() {

  elem_bg.className = 'bground_not_blur'
  elem_overlay.className = 'black_not_overlay'

}

function not_show_scroll_down() {

  elem_downwardline.className = 'pls_scroll_down_not_showed'

}
function show_scroll_down() {

  elem_downwardline.className = 'pls_scroll_down'

}

function not_show_logo1() {

  elem_logo1.className = 'not_show_logo1'

}
function show_logo1() {

  elem_logo1.className = 'show_logo1'

}
function not_show_start_your_order_text() {

  elem_start_your_order_text.className = 'not_show_start_your_order_text'

}
function show_start_your_order_text() {

  elem_start_your_order_text.className = 'show_start_your_order_text'

}

function topright_anchorbutton() {

  elem_anchorbutton.className = 'anchor_button_order_page_topright'

}
function center_anchorbutton() {

  elem_anchorbutton.className = 'anchor_button_order_page_center'
}

function submit_loading_circle() {

  elem_submit.id = 'loader'
}


var a = true

window.addEventListener('scroll', () => {
  console.log(window.scrollY);
  if (window.scrollY != 0 && a == true) {
    add_black_overlay()  /*變模糊的函數*/
    not_show_scroll_down()
    not_show_logo1()
    not_show_start_your_order_text()
    topright_anchorbutton()
    a = false
  }
  else if (window.scrollY == 0) { /*變清晰的函數*/

    remove_black_overlay()
    show_scroll_down()
    show_logo1()
    show_start_your_order_text()
    center_anchorbutton()
    a = true
  }
})

elem_submit.onclick = function () {

}


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




