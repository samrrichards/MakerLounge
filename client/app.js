$(document).ready(function(){
   $('#middle_layer').hide(); 
   $('.fb-login-button').hide(); 
   $('.content').hide(); 
   $('.goodbye').hide(); 
}); 

var googleProfile, googleFirstName, googleName, id_token; 

function onGoogleSignIn(googleUser) {
  googleProfile = googleUser.getBasicProfile();
  googleFirstName = googleProfile.getGivenName(); 
  googleName = googleProfile.getName(); 
  id_token = googleUser.getAuthResponse().id_token;

  $('#signin_a').hide(); 
  $('#messages').append('<p>Why hello there, ' + googleFirstName + '. Nice to see you!</p>'); 
  $('#middle_layer').show(); 
  $('.fb-login-button').show(); 
  $('.goodbye').show(); 
}; 


function googleSignOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      $('#messages').empty(); 
      window.location = '/'; 
    });
  }; 

function fbLogin(){
   $('#middle_layer').hide(); 
   $('.content').hide(); 
   $('#next_level').empty(); 
   FB.getLoginStatus(function(response) {
      fbConnected(response);
    });
}

 function fbConnected(response) {
    if (response.status === 'connected') {
      FB.api('/me', {fields: ['first_name', 'name'] }, 
         function(response) {
            console.log(response); 
            if (googleName === response.name) {
               $('.content').show(); 
            } else {
               $('#messages').empty(); 
               $('#messages').append('<div id="next_level"<p>Sorry, "' + response.first_name + '", but your data doesn\'t check out.</p></div>'); 
            }
      });
    } 
  }