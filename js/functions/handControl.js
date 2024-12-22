export function handControl(el) {

  console.log('inside handControl')
  let startX 
  let endX 

  el.addEventListener('mousedown', (e) => {
    startX = e.pageX
    console.log('dragging start is here')
  })
  el.addEventListener('mouseup', (e) => {
    endX = e.pageX
    console.log('dragging end is here')
  })
  
}