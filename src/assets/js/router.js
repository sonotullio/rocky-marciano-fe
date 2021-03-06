APP.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    var home = {
        name: 'home',
        url: '/home',
        controller: 'HomepageController',
        templateUrl: 'home.html'
    }

    var login = {
        name: 'login',
        url: '/login',
        controller: 'LoginController',
        templateUrl: 'login.html'
    }

    var addAccount = {
        name: 'addAccount',
        url: '/addAccount',
        controller: 'AddAccountController',
        templateUrl: 'addAccount.html'
    }

    var registration = {
        name: 'registration',
        url: '/registration',
        controller: 'RegistrationController',
        templateUrl: 'registration.html',
    }

    var clientsList = {
        name: 'clientsList',
        url: '/clients',
        controller: 'ClientsListController',
        templateUrl: 'clientsList.html'
    }

    var client = {
        name: 'client',
        url: '/clients/:clientId',
        templateUrl: 'client.html',
        controller: 'ClientController',
        resolve: {
            clientId: ['$stateParams', function ($stateParams) {
                return $stateParams.clientId;
            }]
        },
    }

    var product = {
        name: 'products.edit',
        url: '/:productId',
        templateUrl: 'modals/productaddedit.html',
        controller: 'ProductAddEditController',
        resolve: {
            clientId: ['$stateParams', function ($stateParams) {
                return $stateParams.productId;
            }]
        },
    }

    var products = {
        name: 'products',
        url: '/products',
        templateUrl: 'products.html',
        controller: 'ProductsController',
    }

    var courses = {
        name: 'courses',
        url: '/courses',
        templateUrl: 'courses.html',
        controller: 'CoursesController',
    }

    var coursesPrenotation = {
        name: 'coursesPrenotation',
        url: '/coursesPrenotation',
        templateUrl: 'coursesPrenotation.html',
        controller: 'CoursesPrenotationController',
        params: {
            user: { squash: true, value: null },
        },
    }

    var purchases = {
        name: 'purchases',
        url: '/purchases',
        templateUrl: 'purchases.html',
        controller: 'PurchasesController',
    }

    var statistics = {
        name: 'statistics',
        url: '/statistics',
        templateUrl: 'statistics.html',
        controller: 'StatisticsController',
    }

    $stateProvider.state(home);
    $stateProvider.state(login);
    $stateProvider.state(addAccount);
    $stateProvider.state(registration);
    $stateProvider.state(client);
    $stateProvider.state(clientsList);
    $stateProvider.state(product);
    $stateProvider.state(products);
    $stateProvider.state(courses);
    $stateProvider.state(coursesPrenotation);
    $stateProvider.state(purchases);
    $stateProvider.state(statistics);

    $urlRouterProvider.otherwise('/home');

}]);
