
const addNewInfo = (json) => {
    $('.input[name="first-name"]').attr('placeholder', json['results'][0]['name']['first']);
    $('.input[name="last-name"]').attr('placeholder', json['results'][0]['name']['last']);
    $('.input[name="email"]').attr('placeholder', json['results'][0]['email']);
    $('.input[name="address"]').attr('placeholder', json['results'][0]['location']['street']['number'] + ', ' + json['results'][0]['location']['street']['name']);
    $('.input[name="city"]').attr('placeholder', json['results'][0]['location']['city']);
    $('.input[name="country"]').attr('placeholder', json['results'][0]['location']['country']);
    $('.input[name="zip-code"]').attr('placeholder', json['results'][0]['location']['postcode']);
    $('.input[name="tel"]').attr('placeholder', json['results'][0]['phone']);
    $('.form-group img').attr('src', json['results'][0]['picture']['medium']);
    $('.caption p').html('Info from the site https://randomuser.me/api/?nat=us&randomapi');
}

const getFetchData = () => {
    fetch('https://randomuser.me/api/?nat=us&randomapi')
  .then((response) => response.json())
  .then((json) => addNewInfo(json))
  .catch(error => {
    console.log(error);
  });
};

$('.info-submit-btn').click(function(event){
    event.preventDefault();
    getFetchData();
});


