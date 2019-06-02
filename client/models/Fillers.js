import fillers from './filler'

export default class Fillers {
  constructor () {
    this.alreadyPicked = [];
    this.fillers = fillers.map((item, i) => {
      item.cover = item.url + '/media/?size=t'
      return item
    })
    this.picked = 0
  }

  pick () {
    this.picked++
    const notFound = true
    while(notFound){
      let item = this.fillers[Math.floor(Math.random() * this.fillers.length)]
      item.id = item.cover
      if (!this.alreadyPicked.includes(item.id)) {
        this.alreadyPicked.push(item.id)
        return item
      }
    }
  }
}
