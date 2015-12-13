'use strict';

angular.module('simpleApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('news', {
                parent: 'entity',
                url: '/newss',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'simpleApp.news.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/news/newss.html',
                        controller: 'NewsController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('news');
                        $translatePartialLoader.addPart('global');
                        return $translate.refresh();
                    }]
                }
            })
            .state('news.detail', {
                parent: 'entity',
                url: '/news/{id}',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'simpleApp.news.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/news/news-detail.html',
                        controller: 'NewsDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('news');
                        return $translate.refresh();
                    }],
                    entity: ['$stateParams', 'News', function($stateParams, News) {
                        return News.get({id : $stateParams.id});
                    }]
                }
            })
            .state('news.new', {
                parent: 'news',
                url: '/new',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/news/news-dialog.html',
                        controller: 'NewsDialogController',
                        size: 'lg',
                        resolve: {
                            entity: function () {
                                return {
                                    text: null,
                                    date: null,
                                    id: null
                                };
                            }
                        }
                    }).result.then(function(result) {
                        $state.go('news', null, { reload: true });
                    }, function() {
                        $state.go('news');
                    })
                }]
            })
            .state('news.edit', {
                parent: 'news',
                url: '/{id}/edit',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/news/news-dialog.html',
                        controller: 'NewsDialogController',
                        size: 'lg',
                        resolve: {
                            entity: ['News', function(News) {
                                return News.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('news', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            })
            .state('news.delete', {
                parent: 'news',
                url: '/{id}/delete',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/news/news-delete-dialog.html',
                        controller: 'NewsDeleteController',
                        size: 'md',
                        resolve: {
                            entity: ['News', function(News) {
                                return News.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('news', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            });
    });
