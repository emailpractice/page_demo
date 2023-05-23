
function add_black_overlay() {

  let elem_bg = document.querySelector('#ele_bg')
  elem_bg.className = 'bground_blur'

  let elem_overlay = document.querySelector('#ele_overlay')
  elem_overlay.className = 'black_overlay'


}
function remove_black_overlay() {

  let elem_bg = document.querySelector('#ele_bg')
  elem_bg.className = 'bground_not_blur'

  let elem_overlay = document.querySelector('#ele_overlay')
  elem_overlay.className = 'black_not_overlay'
}


function not_show_scroll_down() {

  let elem_downwardline = document.querySelector('#ele_downwardline')
  elem_downwardline.className = 'pls_scroll_down_not_showed'


}
function show_scroll_down() {

  let elem_downwardline = document.querySelector('#ele_downwardline')
  elem_downwardline.className = 'pls_scroll_down'

}

function not_show_scroll_text() {

  let elem_scroll_text = document.querySelector('#ele_scroll_text')
  elem_scroll_text.className = 'not_show_scroll_text_vertical'


}
function show_scroll_down_text() {

  let element_scroll_text = document.querySelector('#ele_scroll_text')
  element_scroll_text.className = 'show_scroll_text_vertical'

}

function not_show_logo1() {

  let elem_logo1 = document.querySelector('#ele_logo1')
  elem_logo1.className = 'not_show_logo1'


}
function show_logo1() {

  let elem_logo1 = document.querySelector('#ele_logo1')
  elem_logo1.className = 'show_logo1'

}
function not_show_start_your_order_text() {

  let elem_start_your_order_text = document.querySelector('#ele_start_your_order_text')
  elem_start_your_order_text.className = 'not_show_start_your_order_text'


}
function show_start_your_order_text() {

  let elem_start_your_order_text = document.querySelector('#ele_start_your_order_text')
  elem_start_your_order_text.className = 'show_start_your_order_text'

}


window.addEventListener('scroll', () => {
  if (window.scrollY != 0) {

    add_black_overlay()
    not_show_scroll_down()
    not_show_scroll_text()
    not_show_logo1()
    not_show_start_your_order_text()

  }
  if (window.scrollY == 0) {
    var scrolled = window.scrollY

    remove_black_overlay()
    show_scroll_down()
    show_scroll_down_text()
    show_logo1()
    show_start_your_order_text()
  }
});

