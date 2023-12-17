const body = document.querySelector('body')
const input = document.querySelector('#input')
const firstTeamScore = document.querySelector('#first')
const questions = [
  {
    id: 1,
    point: 100,
    context: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, eum.\n'
  },
  {
    id: 2,
    point: 200,
    context: '2'
  },
  {
    id: 3,
    point: 300,
    context: '3'
  },
  {
    id: 4,
    point: 100,
    context: '3'
  },
  {
    id: 5,
    point: 200,
    context: '3'
  },
  {
    id: 6,
    point: 300,
    context: '3'
  },
  {
    id: 7,
    point: 100,
    context: '3'
  },
  {
    id: 8,
    point: 200,
    context: '3'
  },
  {
    id: 9,
    point: 300,
    context: '3'
  },
  {
    id: 10,
    point: 100,
    context: '3'
  },
  {
    id: 11,
    point: 200,
    context: '3'
  },
  {
    id: 12,
    point: 300,
    context: '3'
  },
  {
    id: 13,
    point: 100,
    context: '3'
  },
  {
    id: 14,
    point: 200,
    context: '3'
  },
  {
    id: 15,
    point: 300,
    context: '3'
  },
]


const cards = document.querySelector('.cards')

cards.addEventListener('click', (e) => {
  e.preventDefault()
  const id = Number(e.target.id) - 1


  input.value = +input.value + questions[id].point
  console.log(typeof +input.value)
  console.log(firstTeamScore.value)

  e.target.classList.add('checked')
  body.appendChild(createFullscreen(questions[id]))
})

function createFullscreen(card) {
  const fullscreen = document.createElement('div')
  fullscreen.classList.add('fs')
  fullscreen.textContent = card.context
  fullscreen.addEventListener('click', e => {
    console.log(e.target)
    if(e.target.classList.contains('fs')) {
      fullscreen.classList.toggle('hidden')
    }

  })

  const timer = document.createElement('button')
  timer.innerText = '15'
  timer.classList.add('timer')
  timer.addEventListener('click', (e) => {
    e.preventDefault()
    let i = 15
    const timedId = setInterval(() => {
      timer.innerText = --i
      if(i === 0) {
        timer.innerText = 'Время закончилось!'
        clearInterval(timedId)
      }
    }, 200)

  })
  fullscreen.appendChild(timer)

  return fullscreen
}