/*import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';



/*
const scrollTracker = document.querySelector(".scroll_Tracker");

const scroll_tracking_timeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOffsets: [CSS.percent(0), CSS.percent(100)],
});

scrollTracker.animate(
  {
    transform: ["scaleX(0)", "scaleX(1)"],
  },
  {
    duration: 1,
    timelines: scroll_tracking_timeline,
  }
);
*/
function add_black_overlay() {
    let elem_bg = document.querySelector('#atthetop')
    elem_bg.className = "black_opacity_bg"
}
window.addEventListener('scroll', () => {
    if (window.scrollY == 0) {
        console.log('hey')
        add_black_overlay()
    }
});
