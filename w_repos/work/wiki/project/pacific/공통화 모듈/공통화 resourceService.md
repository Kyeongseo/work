# 공통화 ResourceService

## 목적
  공통적으로 사용하는 모든 http 에 관련하여 로딩 > 처리 > 로딩 삭제 > 후처리 의 로직을 적용하기 위하여 wrapping 한 모듈입니다.

## 메소드의 구분
크게 4가지 메소드로 구분됩니다.
- pushStack : stack에 저장합니다.
- run : 저장된 stack을 모두 실행합니다.
- get / post / put / patch / remove : 로딩을 호출하고 각 액션을 수행 후, 로딩을 닿습니다.
- pendingGet / pengindPost / pendingPut / pendingPatch / pendingRemove : 호출하지만 결과를 가지고 처리를 대기합니다. stack에 저장된 모든 작업이 완료되면 각 결과를 반환합니다. run()으로 수행할 수 있습니다.

## 사용법

```
ResourceService.pushStack(
	ResourceService.pendingGet("/v1.0/connections/0", { offset : 20 },
		function(response) {
			response.data.number = response.data.number + 1;
			$scope.pages = response.data;
		})
);
```
- 다중 call이 가능합니다.
- ResourceService.pendingGet(..)을 호출하면 실행하고 결과를 반영하지 않습니다. stack에만 저장합니다.
- ResourceService.run()을 호출하여야만 실행결과가 적용됩니다.
- ResourceService.get(...) 은 loading 표현하고 get을 수행후, loading을 삭제합니다.

**소스는 아래와 같습니다.**

```
pacificApp.factory('ResourceService', function($rootScope, $http, dialogs, $document, $timeout, $q) {
	var spinnerDomEl = angular.element('<div class="page-spinner-bar"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'),
	spinnerBackgroundDomEl = angular.element('<div class="modal-backdrop fade in"></div>'),
	body = $document.find('body').eq(0);
	
	var callStack = [];
	
	function showLoading() {
		console.log("show loading");
		body.append(spinnerBackgroundDomEl);
		body.append(spinnerDomEl);
	}
	function hideLoading() {
		spinnerDomEl.remove();
		spinnerBackgroundDomEl.remove();
		console.log("hide loading");
	}
	
	function run() {
		showLoading();
		var deferred = $q.defer();
		$q.all(callStack).then(function(results) {
			deferred.resolve(results);
			hideLoading();
			callStack = [];
		}, function(errors) {
			hideLoading();
			callStack = [];
			console.log("errors", errors);
			dialogs.error("Error", errors.message, {size:'sm'});
		}, function(updates) {
			hideLoading();
			callStack = [];
		});
		return deferred.promise;
	}
	
	return {
		pushStack : function(stack) {
			callStack.push(stack);
		},
		run : function() {
			return run();
		},
		get: function(url, parameters, callback) {
			showLoading();
			return $http.get(url, {params: parameters}).success(callback).then(hideLoading);
		},
		post: function(url, parameters, callback) {
			showLoading();
			return $http.post(url, {params: parameters}).success(callback).then(hideLoading);
		},
		put: function(url, parameters, callback) {
			showLoading();
			return $http.put(url, {params: parameters}).success(callback).then(hideLoading);
		},
		patch: function(url, parameters, callback) {
			showLoading();
			return $http.patch(url, {params: parameters}).success(callback).then(hideLoading);
		},
		remove: function(url, parameters, callback) {
			showLoading();
			return $http.delete(url, {params: parameters}).success(callback).then(hideLoading);
		},
		pendingGet: function(url, parameters, callback) {
			callStack.push($http.get(url, {params: parameters}).success(callback));
		},
		pendingPost: function(url, parameters, callback) {
			callStack.push($http.post(url, {params: parameters}).success(callback));
		},
		pendingPut: function(url, parameters, callback) {
			callStack.push($http.put(url, {params: parameters}).success(callback));
		},
		pendingPatch: function(url, parameters, callback) {
			callStack.push($http.patch(url, {params: parameters}).success(callback));
		},
		pendingRemove: function(url, parameters, callback) {
			callStack.push($http.delete(url, {params: parameters}).success(callback));
		}
	}
});
```