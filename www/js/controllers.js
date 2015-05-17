angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$window,$cordovaAppRate) {
  // Form data for the login modal
  $scope.loginData = {};
    $scope.speakers = [
        { name: "Adam Klein" , github: "adamkleingit"},
            { name: "Asaf David" , github: "asafdav" , twitter: "asafdav"},
            { name: "Avi Haiat" , github: "thaiat"},
            { name: "Benjamin Gruenbaum" , github: "benjamingr"},
            { name: "Boris Dinkevich" , github: "borisd"},
            { name: "Doron Zavelevsky" , github: "zavelevsky"},
            { name: "Elior Boukhobza" , github: "mallowigi"},
            { name: "Ran Wahle" , github: "ranwahle"},
            { name: "Roy Peled" , github: "roypeled"},
            { name: "Michael Haberman" , github: "habmic"},
            { name: "Moshe Jacobs" , github: "micromoses"},
            { name: "Netanel Gilad" , github: "netanelgilad"},
            { name: "Nikas Praninskas" , github: "nikaspran"},
            { name: "Nir Kaufman" , github: "nirkaufman" , twitter: "nirkaufman"},
            { name: "Shai Reznik" , github: "shairez" ,  twitter: "shai_reznik"},
            { name: "Uri Shaked" , github: "urish" , twitter:"UriShaked"}
    ];

        $scope.team = [
            { name: "Uri Shaked" , github: "urish" , twitter:"UriShaked",linkdin:'http://www.linkedin.com/in/urishaked'},
            { name: "Shai Reznik" , github: "shairez" ,  twitter: "shai_reznik",linkdin:'https://www.linkedin.com/in/shaireznik'},
            { name: "Olga Kogan" ,  twitter: "OlgaOlgit",linkdin:'http://www.linkedin.com/in/olgako'},
            { name: "Asaf David" , github: "asafdav" , twitter: "asafdav",linkdin:'http://il.linkedin.com/in/davidasaf'},
            { name: "Adam Klein" , github: "adamkleingit",linkdin:'https://il.linkedin.com/in/adamklein500'},
            { name: "Boris Dinkevich" , github: "borisd",linkdin:'https://il.linkedin.com/in/borisdinkevich'},
            { name: "Nir Kaufman" , github: "nirkaufman" , twitter: "nirkaufman",linkdin:'https://il.linkedin.com/in/nirkaufman'},
            { name: "Lee Grain" ,linkdin:'https://il.linkedin.com/pub/lee-grain/42/782/413'},
            { name: "Gil Fink" ,linkdin:'https://www.linkedin.com/in/gilfink'},
            { name: "Pavel Kaminsky", link:'http://pavel-kaminsky.com'},
            { name: "Alon Heller",linkdin:'https://www.linkedin.com/profile/view?id=12433413'},
            { name: "Gil Meir", link:'http://www.spectory.com/'},
            { name: "Noam Kfir",linkdin:'https://www.linkedin.com/in/noamkfir'}

        ];

        $scope.trackOne=[
            {name : 'Check-in', speaker: "checkin", time : '13:00 - 13:40',title : 'Check-in',abstract : ""},
            {name : 'ng-wat - Behind The Scenes', speaker: 'Shai Reznik', time : '13:40 - 14:00',title : 'ng-wat - Behind The Scenes',abstract : 'At the official ng-conf 2015, Shai Reznik gave a super crazy talk named: ng-wat. Which made fun of some of the confusing parts of Angular and soon became viral amongst Angular developers. In this ng-conf Israel talk, Shai will share his personal story behind the ng-wat. Having the opportunity to sit down with the Angular core team and discuss the future plans of Angular, Shai will also share his impressions regarding the next versions and how we can help make it better, with less WATs :)'},
            {name : 'Extensible architecture - how to extend an Angular application', time : '14:00 - 14:30',speaker: 'Asaf David',title : 'Extensible architecture - how to extend an AngularJS application.',abstract : "Working in a product company, you wake up one day and your manager asks you to install your app on one of your clients' servers but the client wants to see his logo instead of yours. Then you realize that the flow needs to be a bit different because the client wants to use his own authentication layer and wants to integrate his system. If you ever encountered a similar situation, this lecture is just for you. In this lecture I'll go over some of the practices that you can use in order to white label your app or inherit it and extend your logic using some real world examples."},
            {name : 'Observables and data flows in Angular 2.0', time : '14:30 - 15:00',speaker: 'BENJAMIN GRUENBAUM',title : 'Observables and data flows in Angular 2.0',abstract : "In this talk we'll explore Observables through their data flows in the proposed Angular 2.0 HTTP API. We'll discuss the power of using observables and how you can integrate them in your project today and be ready for Angular 2.0. We'll cover how data flows in Angular 2.0, what observables are conceptually, the available options and how ES7 and Angular 2.0 will make complex data flows easy and fun."},
            {name : 'Leverage Angular applications with ECMAScript 6', time : '15:00 - 15:15',speaker: 'ELIOR BOUKHOBZA',title : "Leverage Angular.JS applications with ECMAScript 6!",abstract : "In this session we will learn how to embrace the arrival of ECMAScript 6 features with Angular.JS (1.x) applications. We will learn which tools exist to make the migration as smooth as possible (Babel, Browserify, Gulp) and how ES6 could be integrated into Angular, what implications it has in terms of development patterns and how to prepare ourselves for the year to come."},
            {name : 'Directives in Angular 2.0', time : '15:15 - 15:30',speaker: 'URI SHAKED',title : "Directives in Angular 2.0",abstract : "Angular2 brings a new Class based directive model to replace the old Directive Definition Object. In this talk, we will learn about the 4 different directive types in Angular2: Components, Dynamic Components, Decorators and View-port Directives, and see real life code examples showing how to create all those directive types."},
            {name : 'Snack Break', time : '15:30 - 16:00',speaker: "Snack",title : "",abstract : ""},
            {name : 'Data Models in Angular 1 & 2', time : '16:00 - 16:45',speaker: 'ADAM KLEIN',title : "Data Models in Angular 1 & 2",abstract : "Angular 1.0 never offered a robust solution for server connection & data handling. The Angular 2.0 team is doing major efforts to supply a generic solution that fits all. In this talk, we will: Go over some existing Angular 1.0 libraries for data handling Summarize the current status of the design doc for Angular 2.0, Guide you on how to roll your own infrastructure, considering aspects such as: caching, prototyping the response, offline editing, validations,realtime updates,etc."},
            {name : 'Break', time : '16:45 - 17:00',speaker: "Break",title : "",abstract : ""},
            {name : 'The New Angular Router in Practice', time : '17:00 - 17:45',speaker: 'NIKAS PRANINSKAS',title : "angular/router: The New Angular Router in Practice",abstract : "This talk explores the new Angular router, slated to be released in the near future for both Angular 1.x and 2.x. Starting with the overview of the design and the ideas behind it, we will then explore both the current state and the future direction of the new router. Finally, we will see what migrating an existing real-world application might look like by refactoring it to use the new router instead of ui-router."},
            {name : 'Break', time : '17:45 - 18:00',speaker: "Break",title : "",abstract : ""},
            {name : 'Getting ready for Angular 2', time : '18:00 - 18:30',speaker: 'NIR KAUFMAN',title : "Getting ready for Angular 2",abstract : "The next version of Angular drops most of Angular 1.x concepts like: scope, controllers, modules and directives definition. So, how can we get ready today for the framework of tomorrow?On this session we will talk about how can we prepare to V2, which technologies we should get familiar with and how to prepare our code base to the migration."},
            {name : "Angular, Meteor and what's in between", time : '18:30 - 19:00',speaker: 'NETANEL GILAD',title : "Angular, Meteor and what's in between.",abstract : "Two of the ten most starred projects on Github, angular and meteor, can be a perfect match for developing awesome AngularJS applications with ease and speed. angular-meteor is the project to connect these two technologies and to create a full stack experience that is stronger than each of the technologies alone. These talk we cover briefly on Meteor and it's features, and will focus on the possibilities available to AngularJS developers in the Meteor universe. Angular as a full stack framework is one of those possibilities that will be focused on and investigated with examples."},
            {name : 'Angular Expert Panel', time : '19:00 - 19:30',speaker: "Experts",title : "Angular Expert Panel",abstract : ""}
        ];

        $scope.trackTwo=[
            {name : 'Check-in', speaker: "Checkin", time : '13:00 - 13:40',title : 'Check-in',abstract : ""},
            {name : 'ng-wat - Behind The Scenes', speaker: 'Shai Reznik', time : '13:40 - 14:00',title : 'ng-wat - Behind The Scenes',abstract : 'At the official ng-conf 2015, Shai Reznik gave a super crazy talk named: ng-wat. Which made fun of some of the confusing parts of Angular and soon became viral amongst Angular developers. In this ng-conf Israel talk, Shai will share his personal story behind the ng-wat. Having the opportunity to sit down with the Angular core team and discuss the future plans of Angular, Shai will also share his impressions regarding the next versions and how we can help make it better, with less WATs :)'},
            {name : 'Pushing data to the client and using it with Angular', time : '14:00 - 14:30',speaker: 'RAN WAHLE',title : 'Pushing data to the client and using it with Angular',abstract : "This talk is about data pushing mechanism and how to handle it with angularJs. In this talk you will hear about pushing data to the client through socket.io and go through various ways to implement data-push mechanism in your angular code and what is the best practices there are to do so."},
            {name : 'Hacking and Demystifying Protractor', time : '14:30 - 15:00',speaker: 'DORON ZAVELEVSKY',title : 'Hacking and Demystifying Protractor',abstract : "n this talk we will dive into Protractor and Selenium WebDriverJS source code and architecture. You will learn how the magic happens and what additional gems await you. We will go over their usage of Promises and task schedulers to provide synchronous-like API - and how to tap into it. You will learn how you can extend Protractor to improve your test code and better meet your needs. As a case study I will demonstrate how I adapted Protractor to serve for visual test automation. The talk will end with a quick overview of the emerging field of Visual Test Automation."},
            {name : 'Unit Testing in Angular Applications', time : '15:00 - 15:30',speaker: 'MICHAEL HABERMAN',title: 'Unit Testing in Angular Applicationsq',abstract : "Unit-testing is the tool to enforce stability on applications, it create an environment that ensures our code does what it was designed to do. Recently web application developers are also seeking for testing option as their applications are increasing and getting more complex. In this session we will review how to test Angular application in Karma and Jsamine."},
            {name : 'Snack Break', time : '15:30 - 16:00',speaker: "Snack",title : "",abstract : ""},
            {name : 'Isomorphic Hybrid Mobile Dev with Loopback.io', time : '16:00 - 16:45',speaker: 'AVI HAIAT',title : "Isomorphic Hybrid Mobile Dev with Loopback.io",abstract : "After this talk you will know all there is to know about developping an hybrid application. I will show you how easily you can build an Instagram like application. We will start with the awesome backend Loopback.io (built on top of express) with no more than 5 lines of code. Then you will see how you can generate isomorphic code on the client side as angular services, as we develop a simple but powerful mobile app that adds geolocation address on pictures as you upload them to the backend.Last, we will deploy the backend to Heroku and the mobile app to TestFairy so we can invite beta testers and see how they use it."},
            {name : 'Break', time : '16:45 - 17:00',speaker: "Break",title : "",abstract : ""},
            {name : 'Bringing ReactJS into Angular. Flux, Immutable and Performance', time : '17:00 - 17:45',speaker: 'BORIS DINKEVICH',title : "Bringing ReactJS into Angular. Flux, Immutable and Performance",abstract : "During the session we will learn what ReactJS is, learn how it can be used in a real AngularJS project and talk extensively about supporting architectures like Flux and Immutable trees. After the talk you will have a much clearer picture of when and why to use ReactJS and how to easily bring it into your project."},
            {name : 'Break', time : '17:45 - 18:00',speaker: "Break",title : "",abstract : ""},
            {name : '10 Tips for Large Scale Apps', time : '18:00 - 18:30',speaker: 'ROY PELED',title : "10 Tips for Large Scale Apps",abstract : "What you should keep in mind when moving from small apps to the big league. Tips on how to maintain large apps, use Angular's best features and best practices. This session is based on John Papa's and Todd Moto's styleguides, where I will explain the main points that can help you greatly when developing large apps."},
            {name : "Understanding GIT", time : '18:30 - 19:00',speaker: 'MOSHE JACOBS',title : "Understanding GIT",abstract : "This talk will be divided into three parts, after which, hopefully, you'd feel a bit more intelligent using git;Part I: A presentation of git's basic concepts as a distributed SCM, and how using it will change your life. Part II: An overview of git's basic building blocks. After this section you'll have a better understanding of important git mechanics, such as what is a commit, what is a branch, what is a remote and what happens when you rebase. Part III : In this section we'll briefly cover some of git's less-known features, gotchas and pitfalls."},
            {name : 'Angular Expert Panel', time : '19:00 - 19:30',speaker: "Experts",title : "Angular Expert Panel",abstract : ""}
        ]


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

    $scope.openExtLink = function(url,twitter){
        $window.open(url+twitter, '_system', 'location=yes');
    }

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
        $scope.item = $scope.$parent.$parent.trackOne.filter(function (item) { return item.time == $stateParams.time });

})

.controller('TrackTwoItemCtrl', function($scope, $stateParams) {
    $scope.item = $scope.$parent.$parent.trackTwo.filter(function (item) { return item.time == $stateParams.time });

});
