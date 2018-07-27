import fillers from './filler'

export default class Fillers {
  constructor () {
    console.log(fillers)
    this.fillers = fillers.map((item, i) => {
      item.cover = item.url + '/media/?size=t'
      return item
    })
    this.picked = 0
  }

  pick () {
    this.picked++
    let item = this.fillers[Math.floor(Math.random() * this.fillers.length)]
    item.id = this.picked + 10000
    return item
  }
}
