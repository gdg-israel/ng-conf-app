angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};
    $scope.speakers = [
        { name: 'Omer', title:"Angular Developer",picture:"http://media.licdn.com/media/p/2/000/00d/35b/2fb11ab.jpg", id: 1 },
        { name: 'Shai',title:"Angular Developer",picture:"http://media.licdn.com/media/p/2/000/00d/35b/2fb11ab.jpg", id: 2 },
        { name: 'Uri', title:"Angular Developer",picture:"http://media.licdn.com/media/p/2/000/00d/35b/2fb11ab.jpg",id: 3 },
        { name: 'Roy', title:"Angular Developer",picture:"http://media.licdn.com/media/p/2/000/00d/35b/2fb11ab.jpg",id: 4 },
        { name: 'Alon',title:"Angular Developer",picture:"http://media.licdn.com/media/p/2/000/00d/35b/2fb11ab.jpg", id: 5 }
    ];

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ScheduleCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
.controller('SpeakersCtrl', function($scope) {

})
.controller('SpeakerCtrl', function($scope, $stateParams) {
        var speakerId = $stateParams.speakerId;
        console.log(speakerId);
        angular.forEach($scope.speakers, function(value,key){
           if (value.id == speakerId){
               $scope.speaker = value;
           }
        });

    })
.controller('ScheduleItemCtrl', function($scope, $stateParams) {

});
