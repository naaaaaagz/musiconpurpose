import request from 'superagent';

export default class Vimeo {
  
  fetch() {
    return new Promise((resolve, reject) => {
      request
        .get('https://vimeo.com/api/oembed.json?url={video_url}')
        .end((err, res) => {
          if (err) {
            reject(err);
          } else {
            if (Array.isArray(res.body.items)) {
              resolve(res.body.items.map((d) => ({
                id: d.video_id,
                cover: d.thumbnail_url,
                link: 'https://vimeo.com/' + d.video_id,
                title: d.title,
                time: new Date(d.upload_date),
                source: 'vimeo',
                width: 2,
                height: 2,
                
                // For modal
                videoId: d.video_id
              })));
            } else {
              console.warn('Vimeo responded with unexpected body:', res.body);
            }
          }
        });
    });
  }
  
}