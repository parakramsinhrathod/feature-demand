//  const blob = document.getElementById('blob')

//  document.body.onpointermove = event => {
//     const { clientX, clientY } = event
    
//     // !this is before
//     blob.style.left = `${clientX}px`
//     blob.style.top = `${clientY}px`
//     // console.log(blob.style.left)
    
//     blob.animate({
//         left: `${clientX}px`, 
//         top: `${clientY}px`
//     }, { duration: 3000, fill: 'forwards'})
//  }



const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}