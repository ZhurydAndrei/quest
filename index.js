const body = document.querySelector('body')
const input = document.querySelector('#input')
const firstTeamScore = document.querySelector('#first')
const questions = [
  {
    id: 1,
    point: 100,
    context: 'Как называется международная система охраны географических указаний?'
  },
  {
    id: 2,
    point: 200,
    context: 'Назовите два географических указания белорусских правообладателей, которые охраняются в Беларуси.'
  },
  {
    id: 3,
    point: 300,
    context: 'Этот продукт отличает ярко выраженный медово-сливочный вкус, золотистый цвет мякиша и наличие в центре фруктово-ягодной начинки. Вдоль контура расположен затейливый орнамент, в котором отражена присущая предмету грация и изящество.\n' +
      'В отношении этого продукта в Беларуси охраняется географическое указание.\n' +
      'Назовите этот продукт.'
  },
  {
    id: 4,
    point: 100,
    context: 'Назовите три вида товарных знаков, которые охраняются в Беларуси.'
  },
  {
    id: 5,
    point: 200,
    context: 'Под этим товарным знаком производят и продают белорусскую одежду, в частности футболки, толстовки, пижамы и носки.\n' +
      'В 2022 году этот товарный знак признан общеизвестным в Беларуси.\n' +
      'Назовите этот товарный знак.\n'
  },
  {
    id: 6,
    point: 300,
    context: 'Название этого мультфильма является фирменным наименованием фабрики страха, на которой работают главные герои мультфильма.\n' +
      'Назовите этот мультфильм и фирменное наименование.\n'
  },
  {
    id: 7,
    point: 100,
    context: 'В какой момент скульптура переходит в общественное достояние?'
  },
  {
    id: 8,
    point: 200,
    context: 'Этому объекту авторского права посвящен мультфильм 1968 года, в котором звучат строки:\n' +
      '«Профессий много, но\n' +
      'Прекрасней всех ОНО».\n' +
      'О чем идет речь?\n'
  },
  {
    id: 9,
    point: 300,
    context: 'В честь этого персонажа назван закон США, который продлил срок действия авторских прав. Также компанию Дисней часто называют домом этого культового персонажа.\n' +
      'О каком персонаже идет речь?\n'
  },
  {
    id: 10,
    point: 100,
    context: 'Может ли способ нанесения краски на холст охраняться в качестве полезной модели в Беларуси?'
  },
  {
    id: 11,
    point: 200,
    context: 'В каком году заканчивается срок действия личных неимущественных прав на картину Марка Шагала «Над городом», написанную в 1918 году?'
  },
  {
    id: 12,
    point: 300,
    context: 'Фото вопрос.\n' +
      'Какому условию патентоспособности сорта растения явно не соответствует сорт томатов, изображенных на фото? \n'
  },
  {
    id: 13,
    point: 100,
    context: 'В прямом эфире радиопередачи звучит песня «Маленькой елочке холодно зимой». Какие объекты смежных прав имеют место в такой ситуации? '
  },
  {
    id: 14,
    point: 200,
    context: 'Это изобретение содержит корпус, имитирующий ствол со средствами для закрепления естественных или искусственных ветвей, отличающаяся тем, что на корпусе размещены средства для крепления украшений.\n' +
      'Назовите это изобретение.\n'
  },
  {
    id: 15,
    point: 300,
    context: 'Патент на этот строительный материал, представляющий собой тонкие нити расплавленного стекла, был получен в США в 1934 г.\n' +
      'А музыкальная группа с одноименным названием является исполнителем одного из главных новогодних хитов.\n' +
      'Назовите изобретение и название музыкальной группы.\n'
  },
]


const cards = document.querySelector('.cards')

cards.addEventListener('click', (e) => {
  e.preventDefault()
  const id = Number(e.target.id) - 1


  // input.value = +input.value + questions[id].point
  // console.log(typeof +input.value)

  if(e.target.classList.contains('card__questions-item')){
    e.target.classList.add('checked')
  }
  body.appendChild(createFullscreen(questions[id]))
})

function createFullscreen(card) {
  const fullscreen = document.createElement('div')
  fullscreen.classList.add('fs')
  fullscreen.textContent = card.context
  fullscreen.addEventListener('click', e => {
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