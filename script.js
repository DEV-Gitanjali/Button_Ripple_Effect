const buttons=document.querySelectorAll('.ripple')
// when you click on the button it will be ripple effect
buttons.forEach(button=>{
    button.addEventListener('click',(e)=>{

        const x = e.clientX
        const y = e.clintY

        const buttonTop=e.target.offsetTop
        const buttonLeft = e.target.offsetLeft


        const xInside = x-buttonLeft
        const yInside = y-buttonTop

        const circle = document.createElement('span')
        circle.classList.add('.circle')
        circle.style.top=yInside + 'px'
        circle.style.left=xInside + 'px'



        this.appendChild(circle)

        setTimeout(()=>circle.remove(),500)

    })
})