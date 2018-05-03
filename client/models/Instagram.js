import request from 'superagent';
import jsonp from 'superagent-jsonp';

export default class Instagram {

  fetch() {
    return new Promise((resolve, reject) => {
      request
        .get('https://api.instagram.com/v1/users/self/media/recent/?access_token=xxxx&callback=jsonp')
        .use(jsonp)
        .end((err, res) => {
          if (err) {
            reject(err);
          } else {
            if (Array.isArray(res.body.data)) {
              resolve(res.body.data.map((d) => ({
                id: d.created_time,
                cover: d.images.thumbnail.url,
                link: d.link,
                time: new Date(parseInt(d.created_time) * 1000),
                source: 'instagram',

                // For modal:
                highresImage: d.images.standard_resolution.url,
                caption: d.caption.text
              })));
            } else {
              console.warn('Instagram responded with unexpected body:', res.body);
            }
          }
        });
    });
  }

}
