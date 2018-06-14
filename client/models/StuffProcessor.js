import stuff from './stuff'

export default class Stuff {
  process () {
    return stuff.filter(item => !item.hidden).map((item, index) => {
      switch (item.source) {
        case 'instagram': return {
          id: index,
          cover: item.url + '/media/?size=t',
          link: item.url,
          ...item
        }
        case 'soundcloud': return {
          id: index,
          cover: item.cover, /* soundcloud api doesn't let new regs for now :( */
          link: item.url,
          ...item
          /* TODO embed for modal? */
        }
        case 'youtube': return {
          id: index,
          cover: `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`,
          link: item.url,
          ...item
        }
        case 'vimeo': return {
          id: index,
          link: item.url,
          ...item
        }
        case 'custom': return {
          id: index,
          cover: `img/${item.img}`,
          link: item.url,
          ...item
        }
      }
    })
  }
}
