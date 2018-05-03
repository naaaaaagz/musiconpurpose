import request from 'superagent';

export default class Bandcamp {
  
  fetch() {
    return new Promise((resolve, reject) => {
      request
        .get('http://jean9.net/bandcamp-scraping/index.php')
        .end((err, res) => {
          if (err) {
            reject(err);
          } else {
            if (Array.isArray(res.body)) {
              resolve(res.body.map((d) => ({
                id: d.id,
                cover: `http://f1.bcbits.com/img/a${d.art_id}_2.jpg`,
                link: 'http://music.jean9.net' + d.page_url,
                title: `${(d.artist || d.band_name)} - ${d.title}`,
                time: new Date(d.release_date),
                source: 'bandcamp',
                width: 2,
                height: 2
              })));
            } else {
              console.warn('The hacky Bandcamp scraper responded with unexpected body:', res.body);
            }
          }
        });
    });
  }
  
}