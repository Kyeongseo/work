# Material Design Data Table 컴포넌트 가이드

Material Design Data Table 컴포넌트는 Material 디자인의 Data tables 사양에 맞춰 만들어진 컴포넌트입니다.

기본적으로는 md-table-container, md-table-pagination 디렉티브를 사용하여 구성하면 되지만 좀 더 복잡한 기능을 구현하기 위해서는 API 문서를 숙지해야합니다.

이 문서에서는 컴포넌트 홈페이지의 설명을 기반으로 기본 사용법을 설명하고, 실무에서 많이 사용하는 것을 중심으로 API 사용법을 소개합니다.

### API

#### Column Sorting

|Attribute|Element|Type|Description|
|---|---|---|---|
|mdDesc|mdColumn|[expression]|이 속성이 존재하면 해당 컬럼은 내림차순으로 정렬됩니다.|
|mdOnReorder|	mdHead|	function|	정렬 기준이 변경될 때 호출되는 함수입니다. 실행 인자로 새로운 정렬 기준 값이 전달됩니다.|
|mdOrder	|mdHead	|string	|정렬 기준 값을 담는 변수의 이름을 넣어줍니다. 사용자가 컬럼을 클릭하여 정렬 기준을 변경하면 이 변수에 그 값이 담깁니다.|
|mdOrderBy	|mdColumn	|string	|이 속성의 값이 정렬 기준 값으로 사용됩니다.|

사용자가 md-column 요소를 클릭했을 때, md-order-by 속성의 값이 md-order에 정의한 변수의 값으로 설정됩니다. 만약 컬럼이 이미 해당 값으로 정렬된 상태라면 md-order-by 속성의 값 앞에 '-' 캐릭터를 붙여서 내림차순으로 정렬한다고 표시합니다.

#### Numeric Columns
숫자 컬럼을 테이블 셀에 오른쪽 정렬합니다. 

|Attribute	|Element	|Type	|Description|
|---|---|---|---|
|mdNumeric	|mdColumn	|[expression]	|expression이 null 이거나 true로 평가되는 값이라면 해당 컬럼의 모든 셀은 오른쪽 정렬됩니다.|

number 필터를 셀에 적용하면 소수부 자릿수를 지정할 수 있습니다.

```
(function () {
    'use strict';

    angular
        .module('c-spider')
        .controller('UserServiceController', UserServiceController);

    UserServiceController.$inject = ['$scope', '$http', 'WizardDialogService'];

    function UserServiceController($scope, $http, WizardDialogService) {
        var bookmark;

        $scope.selected = [];

        $scope.query = {
            filter: '',
            limit: '10',
            order: 'userServiceId',
            page: 1
        };

        $scope.filter = {
            options: {
                debounce: 500
            }
        };

        $scope.removeFilter = function () {
            $scope.filter.show = false;
            $scope.query.filter = '';

            if ($scope.filter.form.$dirty) {
                $scope.filter.form.$setPristine();
            }
        };

        $scope.$watch('query.filter', function (newValue, oldValue) {
            if (!oldValue) {
                bookmark = $scope.query.page;
            }

            if (newValue !== oldValue) {
                $scope.query.page = 1;
            }

            if (!newValue) {
                $scope.query.page = bookmark;
            }

            $scope.getUserServices();
        });

        $scope.getUserServices = function () {
            var sort = $scope.query.order;

            if (sort.startsWith('-')) { // sort descending
                sort = sort.substring(1) + ',desc';
            }

            $scope.promise = $http.get('/api/_search/user-service-infos', {
                params: {
                    page: $scope.query.page - 1,
                    size: $scope.query.limit,
                    sort: sort,
                    query: $scope.query.filter || '*'
                }
            }).then(function (response) {
                $scope.userServices = response.data;
                $scope.totalCount = response.headers('X-Total-Count');
            });
        };

        $scope.handlerOnReorder = function (order) {
            $scope.getUserServices();
        };

        $scope.handlerOnSelect = function (userService) {
            $scope.data.cloud = userService;
        };

        $scope.handlerOnDeselect = function (userService) {
            $scope.data.cloud = null;
        };

        $scope.options = {
            rowSelection: true,
            multiSelect: false,
            autoSelect: true,
            decapitate: false,
            largeEditDialog: false,
            boundaryLinks: true,
            pageSelect: true
        };

        $scope.getUserServices();
    }
})();
```

위의 Example Controller에 구현된 각 항목은 다음과 같습니다.

- 13행: selected 변수는 선택한 행의 목록을 보관합니다
- 15행: query 변수는 페이징, 검색과 관련한 변수를 보관하며 사용자의 액션에 의해 값이 자동으로 변경됩니다
- 28행: removeFilter 함수는 검색어를 삭제합니다
- 37행: 검색어를 감시하다가 변경이 발생하면 서버에 질의를 보냅니다
- 53행: 서버에서 데이터 집합을 가져오는 함수입니다
- 56행: 정렬 기준 컬럼이 '-' 문자로 시작하면 descending을 뜻합니다. 서버측 구현에서는 descending의 경우 컬럼명의 뒤에 ',desc'을 붙인 형태의 전달인자를 요구하므로 이를 처리합니다
- 60행: 검색 REST API에 호출을 보냅니다. 서버에서는 page를 처리할 때, 첫번째 페이지 번호를 0으로 사용하므로 1을 빼주고 있습니다. query 매개변수에는 사용자가 입력한 값이 없을 경우 '*'을 넣어서 전체 목록을 가져옵니다
- 69행: 검색 결과의 총 수는 http header 'X-Total-Count'에서 얻을 수 있습니다
- 73행: 사용자가 테이블 헤더를 클릭하여 정렬 기준을 변경했을 때 이를 처리하는 함수입니다. getUserServices() 함수에서 정렬 기준을 알아서 처리하므로 이 함수를 호출하고 있습니다
- 85행: 컴포넌트의 형태나 기능을 조정하기 위한 옵션 객체입니다. 디렉티브에서 사용합니다


컨트롤러에서 정의한 $scope 변수와 함수는 각 디렉티브의 속성과 바인딩되어서 사용자의 액션에 따라 그 값을 변경하거나 컴포넌트를 동작하게 합니다. 각 변수, 함수가 디렉티브에 바인딩되는 방식은 템플릿측에서 설명하겠습니다.

위의 예제에서 특히 주의 깊게 봐야할 곳은 query 변수입니다. 이 변수는 현재 컴포넌트의 네이밍에 맞춰서 선언되어 있는데, 서버측(Spring Data REST)에 보낼 때는 다른 이름으로 변경하고 있습니다. limit는 size, filter는 query로 변경하고 있으며 특히 order는 이름을 sort로 변경할 뿐만 아니라 서버측에서 요구하는 방식에 맞춰서 값 또한 변경하고 있습니다.

```
<md-content layout="column" flex="100" flex-sm="100" flex-xs="100" layout-padding>
    <md-card ng-controller="UserServiceController">
        <md-toolbar class="md-table-toolbar md-default">
            <div class="md-toolbar-tools">
                <md-icon>search</md-icon>
                <span flex name="filter.form">
                        <input type="text" ng-model="query.filter" ng-model-options="filter.options" placeholder="search">
                    </span>
                <md-button class="md-icon-button" ng-click="removeFilter()">
                    <md-icon>close</md-icon>
                </md-button>
            </div>
        </md-toolbar>
        <md-table-container>
            <table md-table md-row-select="options.rowSelection" multiple="options.multiSelect" md-progress="promise" ng-model="selected">
                <thead ng-if="!options.decapitate" md-head md-order="query.order" md-on-reorder="handlerOnReorder">
                <tr md-row>
                    <th md-column md-order-by="userServiceId"><span>ID</span></th>
                    <th md-column md-order-by="userServiceName"><span>Name</span></th>
                    <th md-column md-order-by="userId"><span>Owner</span></th>
                    <th md-column md-order-by="svcType.description"><span>Type</span></th>
                    <th md-column md-order-by="description"><span>Description</span></th>
                </tr>
                </thead>
                <tbody md-body>
                <tr md-row md-select="userService" md-select-id="id" md-on-select="handlerOnSelect" md-on-deselect="handlerOnDeselect" x-md-auto-select="options.autoSelect" ng-repeat="userService in userServices">
                    <td md-cell>{{userService.userServiceId}}</td>
                    <td md-cell>{{userService.userServiceName}}</td>
                    <td md-cell>{{userService.userId}}</td>
                    <td md-cell>{{userService.svcType.description}}</td>
                    <td md-cell>{{userService.description}}</td>
                </tr>
                </tbody>
            </table>
        </md-table-container>

        <md-table-pagination md-limit="query.limit" md-limit-options="[5, 10, 15, 20]" md-page="query.page" md-total="{{totalCount}}" md-on-paginate="getUserServices" md-page-select="options.pageSelect" md-boundary-links="options.boundaryLinks"></md-table-pagination>
    </md-card>
</md-content>
```

