# Dashboard
![dashboard.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/WKK5eK4WSyWtadtjzym1_dashboard.PNG)
## Dashboard Flow
- Dashboard View

  - ![dashboard플로우차트.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/KHVJTamR8qfF09xPIeyl_dashboard%ED%94%8C%EB%A1%9C%EC%9A%B0%EC%B0%A8%ED%8A%B8.png)
  
---
- Dashboard Widget List Change

![dashboard플로우차트2.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/gYif5efNReCRYBMbx4nG_dashboard%ED%94%8C%EB%A1%9C%EC%9A%B0%EC%B0%A8%ED%8A%B82.png)

## Dashboard List 추가 방법
**해당 내용은 Admin 기능 구현 후 그에 맞게 수정하겠습니다.**
- wigetDefinitions.json 에 객체 추가
```json resources/static/domain/dashboard/wigetDefinitions.json
{
// *** Widget Title *** 
  "name": "Variables Board",	
// *** Default Value 그대로 사용할 것 ***
  "isShow" : true,	
// *** 사용할 Derective *** 
  "directive": "pacific-variables-list",	
// *** Directive의 Attributes ***
  "attrs": {
    "ng-controller": "VariablesCtrl as variablesCtrl",	
    "data": "variable",
    "datas": "variables",
    "mode": "mode" 
  },
// *** 반응형 UI 적용을 위해 그대로 사용할 것 ***
  "style": {		
    "width": "none"
  }
}
```
- app.js > dashboard state에 필요한 file 및 국제화 json코드 추가
```javascript resources/static/app.js
files: [                
        "bower_components/lodash/dist/lodash.min.js",
        './vendor/metronic/css/tasks.css',

        './domain/dashboard/dashboard.css',
        './domain/dashboard/dashboardService.js',
        './domain/dashboard/dashboardCtrl.js',

        './domain/qna/qnaCtrl.js',
        './domain/qna/qnaDirective.js',
        './domain/qna/qnaService.js',

        './domain/faq/faqCtrl.js',
        './domain/faq/faqService.js',
        './domain/faq/faqDirective.js',

        './domain/connection/ConnectionCtrl.js',
        './domain/orchestration/orchestrationsCtrl.js',
        './domain/orchestration/orchestrationsService.js',
        './domain/connection/connectionService.js',

        './domain/script/scriptCtrl.js',
        './domain/script/scriptService.js',
        './domain/script/scriptDirective.js',

        './domain/variable/variablesCtrl.js',
        './domain/variable/variablesService.js',

        './domain/eventChain/eventChainCtrl.js',
        './domain/eventChain/eventChainService.js'
        ]
        
translatePartialLoader: ["$translate", "$translatePartialLoader", function ($translate, 						   		    $translatePartialLoader) {
                    $translatePartialLoader.addPart("dashboard");
                    $translatePartialLoader.addPart("faq");
                    $translatePartialLoader.addPart("connection");
                    $translatePartialLoader.addPart("orchestrationWizard");
                    $translatePartialLoader.addPart("script");
                    $translatePartialLoader.addPart("variable");
                    $translatePartialLoader.addPart("eventChain");
                    return $translate.refresh();
                }]
```
- 주의할 사항
	- Directive 구현 시 restrict값에 Attribue로 Diretive호출이 가능하도록 속성을 주어야 합니다.
```
  pacificApp.directive("dashboardTogglerDirective", function() {
	return {
		restrict: "EACM", // A는 Dashboard에서 사용하려면 필수
		templateUrl: "../../domain/dashboard/dashboardTogglerDirective.html",
	}
})
```
	- Dashboard는 페이지이동이 없기 때문에 $viewContentLoaded 이벤트가 호출 되지 않습니다.
  	- $ocLazyLoad에서 import시킨 library의 의존성 때문에 library가 loading 된 후 행해야 할 액션이 있는 경우 controller의 $viewContentLoaded 이벤트를 캐치하여 그 후에 동작하도록 code를 작성하고 있습니다.
    허나, Dashboard 목록에서 해당 Directive를 호출 하는 것이기에 $viewContentLoaded가 발생하지 않으니 library 로딩 후에 동작해야 할 메서드가 있다면 해당 library를 mainTemplate에 import시켜 주시기 바랍니다.
```
// dashboard에서 제대로 동작하려면 사용해선 안됩니다.
$scope.$on('$viewContentLoaded', function() {
  Metronic.initAjax();
  $scope.findAll();
  ResourceService.run();
  $scope.roleName = Metronic.getRoleName();  
});
```

## 추후 논의할 사항
- Dashboard Widget에서 read외의 다른 Action들도 가능하도록 할 것인지?
	- read만 지원할 경우 dashboard화면에선 add 및 기타액션 버튼이 보이지 않도록 옵션필요
  - 다른 액션들도 지원할 경우 현재 read Directive와 추가 및 수정 Directive 2개를 사용중인걸로 보이는데 하나로 합쳐야함.
- Dashboard Widget의 resizing기능 적용?
	- 현재 해상도에 따른 Size변화를 위해 적용하지 않음.
  - resizing과 반응형UI는 상충하는 부분이 있어 현재 사용 중인 angular dashboard 모듈을 직접 커스텀해야 가능할 것으로 생각됨.
  - 커스텀 한다면 bower관리가 안된다는 문제가 있음.
- Dashboard 관리 메뉴
	- Admin & 사용자그룹리더

