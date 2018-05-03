import request from 'superagent';

export default class SoundCloudTracks {

  fetch() {
    return new Promise((resolve, reject) => {
      request
        .get('https://api.soundcloud.com/users/462773/tracks?client_id=xxxx')
        .end((err, res) => {
          if (err) {
            reject(err);
          } else {
            if (Array.isArray(res.body)) {
              resolve(res.body.map((d) => ({
                id: d.id,
                cover: d.artwork_url ? d.artwork_url.replace('-large.', '-t300x300.') : 'images/sc_square_480.png',
                link: d.permalink_url,
                title: d.title,
                time: new Date(d.created_at),
                source: 'soundcloud',
                width: d.artwork_url ? 2 : 1,
                height: d.artwork_url ? 1 : 1
              })));
            } else {
              console.warn('Soundcloud responded with unexpected body:', res.body);
            }
          }
        });
    });
  }

}
