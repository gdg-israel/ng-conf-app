// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.about', {
      url: "/about",
      views: {
          'menuContent': {
              templateUrl: "templates/about.html"
          }
      }
  })

  .state('app.map', {
      url: "/map",
      views: {
          'menuContent': {
              templateUrl: "templates/map.html"
          }
      }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
    .state('app.schedule', {
      url: "/schedule",
      views: {
        'menuContent': {
          templateUrl: "templates/schedule.html"
        }
      }
    })

      .state('app.trackTwo', {
          url: "/trackTwo",
          views: {
              'menuContent': {
                  templateUrl: "templates/trackTwo.html"
              }
          }
      })
  .state('app.selectedSchedule', {
      url: "/schedule/:time",
      views: {
          'menuContent': {
              templateUrl: "templates/scheduleItem.html",
              controller : 'ScheduleItemCtrl'
          }
      }
  })
      .state('app.selectedTrackTwo', {
          url: "/trackTwo/:time",
          views: {
              'menuContent': {
                  templateUrl: "templates/scheduleItem.html",
                  controller : 'TrackTwoItemCtrl'
              }
          }
      })
      .state('app.partners', {
          url: "/partners",
          views: {
              'menuContent': {
                  templateUrl: "templates/partners.html"
              }
          }
      })
  .state('app.speakers', {
      url: "/speakers",
      views: {
          'menuContent': {
              templateUrl: "templates/speakers.html",
              controller: 'SpeakersCtrl'
          }
      }
  })
      .state('app.organizers', {
      url: "/organizers",
      views: {
          'menuContent': {
              templateUrl: "templates/organizers.html"
          }
      }
  })
  .state('app.speaker', {
      url: "/speakers/:speakerId",
      views: {
          'menuContent': {
              templateUrl: "templates/speaker.html",
              controller: 'SpeakerCtrl'
          }
      }
  })
  .state('app.single', {
    url: "/schedule/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/scheduleItem.html",
        controller: 'ScheduleItemCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/schedule');
})

.config(function ($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$')]);
})


.filter('speakerImageName', function () {
    return function (name) {
        return name ? name.replace(/\s/g, '') : '';
    };
});
