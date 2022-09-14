
export default class Eventbrite {  
  static async getEvents(eventInput) {
  return new Promise(function(resolve, reject) {
  var request = new XMLHttpRequest();

  request.open('GET', `https://www.eventbriteapi.com/v3/events/${eventInput}/`);

  request.setRequestHeader('Authorization', 'Bearer ' + `${process.env.BEARER_TOKEN_EB}`);

  request.addEventListener("loadend", function(){
    const response = JSON.parse(this.responseText);
    if(this.status === 200) {
      resolve([response]); 
    } else {
      reject([this, response]);
    }
    })
    request.send(); 
    });
}
}




// console.log('Status:', this.status);
// console.log('Headers:', this.getAllResponseHeaders());
// console.log('Body:', this.responseText);