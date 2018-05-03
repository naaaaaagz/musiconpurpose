import request from 'superagent';

export default class Youtube {
  
  fetch() {
    return new Promise((resolve, reject) => {
      request
        .get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUM0qo2PQr86qTVup46b18rA&key=AIzaSyB9LAtbsXipx6sXbCCCNbuGPOBk8pmm2OY')
        .end((err, res) => {
          if (err) {
            reject(err);
          } else {
            if (Array.isArray(res.body.items)) {
              resolve(res.body.items.map((d) => ({
                id: d.id,
                cover: d.snippet.thumbnails.high.url,
                link: 'https://www.youtube.com/watch?v=' + d.snippet.resourceId.videoId,
                title: d.snippet.title,
                time: new Date(d.snippet.publishedAt),
                source: 'youtube',
                width: 2,
                height: 2,
                
                // For modal
                videoId: d.snippet.resourceId.videoId
              })));
            } else {
              console.warn('YouTube responded with unexpected body:', res.body);
            }
          }
        });
    });
  }
  
}