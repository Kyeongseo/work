# Style Guide

## 디렉토리 구조

- common - 공통 모듈을 둡니다
  - controllers - 업무 controller가 parent로 두고 사용할 수 있는 공통 controller(s)
  - services - 공용으로 사용 가능한 services
  - directives - 공용으로 사용 가능한 directives
- components - bower로 관리할 수 있는 외부 resources(js, css, font...)를 둡니다
- vendor - bower로 관리가 안되는 외부 resources를 둡니다
  - vendor/metronic - Metronic Site Template에서 제공하는 resources를 둡니다
- domain - 업무 도메인 별 디렉토리를 이 곳 아래에 둡니다
  - domain/regist - 사용자 등록 업무 도메인
  - domain/login - 로그인 업무 도메인
  - 업무 도메인 별 디렉토리에는 controller, directive, service, html, unit test 파일을 모두 둡니다

```
├── static
│     ├── app.js
│     ├── common
│     │     ├── controllers
│     │     │     └── baseCtrl.js
│     │     ├── services
│     │     │     └── messageService.js
│     │     ├── directives
│     │     └── utils.js
│     ├── domain
│     │     ├── login
│     │     │     ├── loginCtrl.js
│     │     │     ├── loginService.js
│     │     │     ├── login.css
│     │     │     └── login.html
│     │     ├── regist
│     │     │     ├── registCtrl.js
│     │     │     ├── registService.js
│     │     │     ├── regist.css
│     │     │     └── regist.html
│     ├── components
│     └── vendor
└── META-INF
```

- 각 업무 domain 디렉토리에는 관련된 모든 파일을 함께 둡니다

```
login
├── loginCtrl.js
├── loginService.js
├── login.css
├── login.less
├── login.html
└── login-spec.js
```

## 컨트롤러
- 애플리케이션 사용자의 입력에 대응하는 event handler 제공하여 모델과의 상호작용을 담당합니다
- 데이터 조작을 위해 service의 메소드를 호출하고 다음 방향은 어디인지 결정 하는 등 프로그램의 흐름을 담당합니다
- DOM은 조작하지 **않습니다**
- 가능한 최소한의 기능만을 가져야 합니다
- 컨트롤러 선언 시의 이름은 대문자로 시작하는 CamelCase + Ctrl을 사용합니다
- 컨트롤러 파일명은 소문자로 시작하는 CamelCase + Ctrl.js를 사용합니다

## 디렉티브
- HTML 구문을 확장하여 새로운 기능을 추가합니다
- DOM 조작은 디렉티브를 통해서만 가능합니다
  - `$('element')` 처럼 DOM과 관계된 코드가 controller나 service에 있다면 그 코드는 directive로 옮겨야 합니다
- 반복적으로 사용하는 HTML 코드가 있다면 이를 directive로 대체합니다
- 값 검증도 directive에서 수행합니다(controller에서 하는 것은 지양합니다)
- camelCase
- link 함수에서는 $scope 대신에 scope를 사용하도록.
- 디렉티브에서는 우리만의 전치사 pacific 을 사용하도록 합니다.

## 서비스
- 애플리케이션에서 제공하는 비즈니스 로직은 모두 서비스에 구현합니다
- 재사용 가능한 코드 라이브러리입니다
- logging, authentication 등의 cross-cutting 기능을 다룹니다
- 외부 서버로 데이터를 요청하거나 저장하는 기능을 가질 수 있습니다
- 외부 서비스 API를 이용하기 위한 wrapper를 구현할 때 사용합니다
- AngujarJS는 **하나의 Service 인스턴스**만 생성합니다. 따라서 이에 유의하여 구현/사용해야 합니다

## 템플릿
- 문서가 반짝이는 현상을 방지하려면 {{}} 대신에 ng-bind / ng-cloak 를 사용하도록~
- 템플릿에서는 복잡한 코드 사용은 가능한 자제
- 동적으로 src 속성을 사용해야한다면, ng-src

## Digest cycle 최적화
- 가장 중요한 변수만 감시, $watch는 가능한한 간단하게 작성하도록 한다.

## 기타
- 전역 변수를 사용하지 않습니다
- 전역 함수/객체 대신 아래의 wrapper를 사용합니다
  - window ==> $window
  - window.setTimeout ==> $timeout
  - window.document ==> $document
  - $.ajax ==> $http
- 테스트 는 Bower를 통해서 자동화 합니다.
- 콜백 대신 promises($q) 를 사용하도록합니다.
- $scope 는 오직 템플릿에서 사용하는 변수와 함수만 추가한다.
- 변수명, 프로퍼티명, 메소드명 앞에는 $를 사용하지 않는다~
- app.js 파일에는 라우트 정의와 설정이 포함되어야 하며, 필요한 경우 초기화 작업을 합니다.
- 각각의 자바스크립트 파일에는 오직 하나의 컴포넌트만 포함하도록 하고, 컴포넌트의 이름과 파일명은 일치해야합니다.

참고URL : https://github.com/mgechev/angularjs-style-guide/blob/master/README-ko-kr.md#%EB%94%94%EB%A0%89%ED%8B%B0%EB%B8%8C
