const btn = document.getElementsByTagName('button')

let color = document.body.style.backgroundColor

for (let i = 0; i < btn.length; i++){
    btn[i].onclick = (event) => {
        document.body.style.backgroundColor = event.target.innerText
        event.target.style.backgroundColor = event.target.innerText

        setTimeout(() => {
            document.body.style.backgroundColor = color
            event.target.style.backgroundColor = color
        }, 5000)
    }
}