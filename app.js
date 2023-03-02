let heroes = [
  {
    name: 'Slate Slabrock',
    type: 'dwarf',
    damage: 5,
    health: 100,
    gold: 0,
    level: 1
  },
  {
    name: 'Flint Ironstag',
    type: 'elf',
    damage: 10,
    health: 50,
    gold: 0,
    level: 1
  }
]

let boss = {
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 1
}

drawBoss()
drawHeroes()

function attackBoss() {
  let totalAttack = 0
  heroes.forEach(h => {
    totalAttack += h.damage
  })
  if (boss.health >= totalAttack) {
    boss.health -= totalAttack
  } else boss.health = 0
  if (boss.health == 0) {
    bossLevelUp()
  }
  console.log(boss.health);
  drawBoss()
}

function drawBoss() {
  // grab bossHealth element
  // push it through
  document.getElementById("bossHealth").innerText = boss.health.toString()
  document.getElementById("bossLevel").innerText = boss.level.toString()
}

// first, grab the hero element
// grab the query
function drawHeroes() {
  heroes.forEach(h => {
    let template = ``
    let heroElem = document.getElementById(h.name)
    let statsElem = heroElem.querySelector('.stats')
    template +=
      `<h4>${h.health}</h4>
    <h4>${h.gold}</h4>
    <h4>${h.level}</h4>`
    statsElem.innerHTML = template
    console.log(heroElem);
  })
}

function attackHeroes() {
  let bossDamage = Math.floor(Math.random() * boss.damage)
  heroes.forEach(h => {
    if (h.health >= bossDamage) {
      h.health -= bossDamage
    } else h.health = 0
    console.log(h.health);
  })
  drawHeroes()
}

setInterval(attackHeroes, 5000)

function bossLevelUp() {
  boss.level++
  boss.maxHealth *= 1.2
  boss.health = boss.maxHealth
  boss.damage *= 1.2
  drawBoss()
}

function reset() {
  heroes = [
    {
      name: 'Slate Slabrock',
      type: 'dwarf',
      damage: 5,
      health: 100,
      gold: 0,
      level: 1
    },
    {
      name: 'Flint Ironstag',
      type: 'elf',
      damage: 10,
      health: 50,
      gold: 0,
      level: 1
    }
  ];

  boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
  }

  drawBoss()
  drawHeroes()

}

