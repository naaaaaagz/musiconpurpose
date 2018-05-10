import stuff from './stuff'

export default class Stuff {
  process () {
    return stuff.map((item, index) => {
      switch (item.source) {
        case 'instagram': return {
          id: index,
          cover: item.url + '/media/?size=t',
          link: item.url,
          ...item
        }
        case 'soundcloud': return {
          id: index,
          cover: /* TODO */ null,
          link: item.url,
          ...item
          /* TODO embed for modal? */
        }
        case 'youtube': return {
          id: index,
          cover: /* TODO */ null,
          link: item.url,
          /* TODO: For modal */
          // modal
          videoId: /* TODO */ null,
          ...item
        }
        case 'vimeo': return {
          id: index,
          cover: /* TODO */ null,
          link: item.url,
          /* TODO: For modal */
          // modal
          videoId: /* TODO */ null,
          ...item
        }
        case 'custom': return {
          id: index,
          cover: /* TODO */ null,
          link: item.url,
          /* TODO: For modal */
          // modal
          videoId: /* TODO */ null,
          ...item
        }
      }
    })
  }
}
