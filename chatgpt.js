const elem_bg = document.querySelector('#ele_bg');
const elem_overlay = document.querySelector('#ele_overlay');
const elem_downwardline = document.querySelector('#ele_downwardline');
const elem_logo1 = document.querySelector('#ele_logo1');
const elem_start_your_order_text = document.querySelector('#ele_start_your_order_text');
const elem_anchorbutton = document.querySelector('#ele_anchorbutton');
const elem_submit = document.querySelector('#submit');

function updateElements(blur, showScrollDown, showLogo1, showStartText, position) {
    elem_bg.className = blur ? 'bground_blur' : 'bground_not_blur';
    elem_overlay.className = blur ? 'black_overlay' : 'black_not_overlay';
    elem_downwardline.className = showScrollDown ? 'pls_scroll_down' : 'pls_scroll_down_not_showed';
    elem_logo1.className = showLogo1 ? 'show_logo1' : 'not_show_logo1';
    elem_start_your_order_text.className = showStartText ? 'show_start_your_order_text' : 'not_show_start_your_order_text';
    elem_anchorbutton.className = position === 'topright' ? 'anchor_button_order_page_topright' : 'anchor_button_order_page_center';
}

var a = true;

window.addEventListener('scroll', () => {
    if (window.scrollY !== 0 && a) {
        updateElements(true, false, false, false, 'topright');
        a = false;
    } else if (window.scrollY === 0) {
        updateElements(false, true, true, true, 'center');
        a = true;
    }
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwpQ_mRRbIlBo8O9oOp7pAgi4tSUKw8_LuajqZSCqVnMyBGYWTRxPDIgBCL2qqmdS2f/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    elem_submit.id = 'loader';
    elem_submit.value = '';
    try {
        const response = await fetch(scriptURL, { method: 'POST', body: new FormData(form) });
        if (response.ok) {
            alert('收到您的訂餐訊息了，餐點送到時會以電話通知');
            window.location.reload();
        } else {
            throw new Error('Request failed');
        }
    } catch (error) {
        console.error('Error!', error.message);
    } finally {
        elem_submit.id = '';
    }
});