angular.module("myApp" , ["ionic" , "ngCordova" , "myApp.controller"])
  // .run(function($ionicPlatform) {
  //   $ionicPlatform.ready(function() {
  //     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
  //     // for form inputs)
  //     if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
  //       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
  //       cordova.plugins.Keyboard.disableScroll(true);
  //
  //     }
  //     if (window.StatusBar) {
  //       // org.apache.cordova.statusbar required
  //       StatusBar.styleDefault();
  //     }
  //   });
  // })
alert("就是跟你开玩笑");
开什么玩笑
  .config(["$stateProvider" , "$urlRouterProvider", function ($stateProvider , $urlRouterProvider) {
    $stateProvider
      .state('tab', {
        url: '/tab',
        // abstract: true,
        templateUrl: 'template/tabs.html'
      })
      .state('tab.home', {
        url: '/home',
        views:{
          "tab-home":{
            templateUrl:"template/tabs-home.html" ,
            controller:"homeController"
          }
        }
      })
      .state('tab.music', {
        url: '/music',
        views:{
          "tab-music":{
            templateUrl:"template/tabs-music.html" ,
            controller:"musicController"
          }
        }
      })
      .state('tab.email', {
        url: '/email',
        views:{
          "tab-email":{
            templateUrl:"template/tabs-email.html" ,
            controller:"emailController"
          }
        }
      })
      .state('tab.anEpisode', {
        url: '/anEpisode',
        views:{
          "tab-anEpisode":{
            templateUrl:"template/tabs-anEpisode.html" ,
            controller:"anEpisodeController"
          }
        }
      })
      .state('tab.detail', {
        url: '/detail',
        params:{
          name:"" ,
          age:1
        } ,
        views:{
          "tab-anEpisode":{
            templateUrl:"template/tabs-detail.html" ,
            controller:"detailController"
          }
        }
      })
      .state('tab.news', {
        url: '/news',

        views:{
          "tab-news":{
            templateUrl:"template/tabs-news.html" ,
            controller:"newsController" ,
          }
        }
      })
      .state('tab.newsDetail', {
        url: '/newsDetail',
        params:{
          name:""
        } ,
        views:{
          "tab-news":{
            templateUrl:"template/tabs-newsDetail.html" ,
            controller:"newsDetailController" ,

          }
        }
      });
    $urlRouterProvider.otherwise("/tab")
  }]);

