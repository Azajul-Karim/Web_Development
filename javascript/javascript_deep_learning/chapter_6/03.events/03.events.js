// fish.onclick = function() {
//   alert('I am a fish');
// };
//attchEvent() is not supported in IE9 and below
//jQuery - on() method
/*
types of events
1. Mouse events
2. Keyboard events
3. Form events
4. Document/Window events
5. Custom events

timestamp
type
target
currentTarget
eventPhase
cancelable
defaultPrevented
stopPropagation()
stopImmediatePropagation()
preventDefault()
initEvent()

 altKey
 ctrlKey
 shiftKey
 metaKey

 clintX
 clientY
 screenX
 screenY
*/

const fish = document.querySelector("#fish");
const images = document.querySelector("#images");
const google = document.querySelector("#google");

// images.addEventListener("click", function (e) {
//    console.log("clicked inside images");
// });

// fish.addEventListener("click", function (e) {
//   console.log("clicked inside fish");
//   e.stopPropagation();
// });
 
// google.addEventListener("click", function (e) {
//  e.preventDefault();
//  e.stopPropagation();
//   console.log(google.href);
// });

images.addEventListener("click", function (e) {
 console.log(e.target.parentNode);
 if(e.target.tagName === "IMG"){
  console.log(e.target.id);
  let remove = e.target.parentNode;
  remove.remove();
 }

// remove.parentNode.removeChild(remove);

});