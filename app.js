// function logname(name,age){
//     console.log(name+" Your age is "+ age)
// }

// logname('PARTH',18)

// const add=(a=0,b=0) => {
    
//     return a+b;
// }

// const result=add(10,20)
// console.log(result)


const rock = document.querySelector('#rock')
const paper =document.querySelector('#paper')
const scissor=document.querySelector('#scissor')
const board =document.querySelector('#board')

const handler=(e) => {
    const action = e.target.id

    switch(action){
        case "rock":
            board.innerHTML="Rock crushes scissor"
            break
        case "paper":
            board.innerHTML="Paper traps rock"
            break
        case "scissor":
            board.innerHTML="scissor cuts paper"
            break
        default:
            board.innerHTML="Click something"
    }
} 

rock.addEventListener('click',handler)
paper.addEventListener('click',handler)
scissor.addEventListener('click',handler)

