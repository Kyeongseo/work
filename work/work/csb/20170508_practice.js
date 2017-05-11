(function(){
	'use strict';

	angular
		.module('c-spider')
		.factory('UserServiceRetriever', UserServiceRetriever);

	UserServiceRetriever.$inject = ['$rootScope', '$q', '$interval', 'Principal', 'UserServiceInfo', 'Authorities'];

	function UserServiceRetriever($rootScope, $q, $interval, Principal, UserServiceInfo, Authorities){
		var UserServiceInfos = {userService: []};
		return{
			initialize: initialize,
			get: get
		};

		function initialize(){
			setInterval();
			get();
		}

		function get(){
			return userServiceInfos
		}

		function setInterval(){
			$interval(function (){
				findAll();
			}, 1000 * 5);
		}

		function createApiArgs(workspace, login){
			if (angular.isUndefined(login)){
				return {workspace: workspace};
			} else {
				return {workspace: workspace, login: login};
			}
		}

		function publishUserServices(apiArgs, login){
			var promises;

			UserServiceInfo.get(apiArgs, function(data){
				promises = _.map(data.userService, function(userService){
					apiArgs.id = userService.userServiceID;
					return UserServiceInfo.get(apiArgs).$promise;
				});

				$q.all(promises).then(
					function (results) {
						_.forEach(data.userService, function (userService) {
							var vms = results.shift().vm,
								status = findStatusByVms(vms),
								color = findColorByStatus(status);

							userService['login'] = login;
							userService['vms'] = vms;
							userService['status'] = status;
							userService['color'] = color;
						});

						userServiceInfos = data;
						$rootScope.$broadCast('UserServiceRetriever', userServiceInfos);
					}, function (data) {
						userServiceInfos = {userService: []};
						$rootScope.$broadcast('UserSErviceRetriever', {userService: []});
					}
				);
			})
		}

		function findAll() {
			var login;

			if (Principal.hasAnyAuthority([Authorities.ROLE.MANAGER])){
				publishUserServices(createApiArgs('csb'));
			} else if (Principal.hasAnyAuthority([Authorities.ROLE.CONSUMER])){
				login = Principal.getLogin();
				publishUserServices(createApiArgs('csc', login), login)
			}
		}

		function findStatusByVms(vms) {
			var statusPriorityMap = {
				'Failed': 990,
				'Running': 190
			};

			var status = _.map(vms, 'status'),
				intersected = _.intersection(statuses),
				status = 'Failed';

			switch (intersected.length) {
				case 0:
					status = 'Failed';
					break;
				default:
					stauts = intersected.sort(statusComparator).shift();
			}

			function statuscomparator(a, b) {
				return statusPriorityMap[b] - statusPriorityMap[a]
			}

			return status;
		}

		function findColorByStatus(status)	{

		}


	}
})();

(function () {
	'use strict';

	angular.module('c-spider',[
		'ngMaterial',
		'ngAnimate',
		'ngMessages',
		'ngStorage',
		'ngResource',
		'ui.router',
		'adf'
		]).run(run);

	run.$inject = ['stateHandler', 'translationHandler', 'UserServiceHandler'];

	function run(stateHandler, translationHandler, UserServiceHandler) {
		stateHandler.initialize();
		translationHandler.initialize();
		UserServiceHandler.initialize();
	}

})();