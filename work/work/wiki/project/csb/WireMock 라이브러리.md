# WireMock 라이브러리

WireMock은 빠르고 포괄적인 테스팅을 위한 HTTP 기반 API 시뮬레이터입니다. 

서비스 가상화 도구(service virtualization tool)나 모의 서버(mock server)라고 생각할 수도 있습니다.

#### [Running as a Standalone Process](http://wiremock.org/docs/running-standalone/)

WireMock 서버는 자체 프로세스에서 실행될 수 있으며 Java API, JSON over HTTP or JSON files를 통해 구성됩니다.

## 실행
JAR 파일을 다운로드하면 간단하게 실행시킬 수 있습니다.
```
"java -jar wiremock-standalone-2.5.1.jar"

D:\WireMock>java -jar wiremock-standalone-2.5.1.jar --port 8182
SLF4J: Failed to load class "org.slf4j.impl.StaticLoggerBinder".
SLF4J: Defaulting to no-operation (NOP) logger implementation
SLF4J: See http://www.slf4j.org/codes.html#StaticLoggerBinder for further details.
 /$$      /$$ /$$                     /$$      /$$                     /$$
| $$  /$ | $$|__/                    | $$$    /$$$                    | $$
| $$ /$$$| $$ /$$  /$$$$$$   /$$$$$$ | $$$$  /$$$$  /$$$$$$   /$$$$$$$| $$   /$$
| $$/$$ $$ $$| $$ /$$__  $$ /$$__  $$| $$ $$/$$ $$ /$$__  $$ /$$_____/| $$  /$$/
| $$$$_  $$$$| $$| $$  \__/| $$$$$$$$| $$  $$$| $$| $$  \ $$| $$      | $$$$$$/
| $$$/ \  $$$| $$| $$      | $$_____/| $$\  $ | $$| $$  | $$| $$      | $$_  $$
| $$/   \  $$| $$| $$      |  $$$$$$$| $$ \/  | $$|  $$$$$$/|  $$$$$$$| $$ \  $$
|__/     \__/|__/|__/       \_______/|__/     |__/ \______/  \_______/|__/  \__/

port:                         8182
enable-browser-proxying:      false
no-request-journal:           false
verbose:                      false
```


## 실행 옵션

- -port : HTTP 포트 번호 설정

```java -jar wiremock-standalone-2.5.1.jar --port 8182```

- -proxy-all : 모든 요청을 다른 기본 URL로 프록시합니다. 일반적으로 다른 서비스의 세션을 기록 할 수 있도록 - -record-mappings과 함께 사용됩니다.

```java -jar wiremock-standalone-2.5.1.jar --port 8182 --proxy-all http://129.254.184.88:8182```


- -enable-browser-proxying : 브라우저 프록시로 실행

- -no-request-journal : 나중에 확인하기 위해 들어오는 요청을 기록하는 request journal을 비활성화. 이 설정으로 WireMock은 heap을 소모하지 않고 오랜기간(재설정 없이) 실행(스텁stubs 제공)할 수 있다. 이 옵션을 사용하면 --record-mappings 옵션을 사용할 수 없다.

- -verbose : 표준 출력(stdout)으로 자세한 로깅을 설정

```java -jar wiremock-standalone-2.5.1.jar --port 8182 --verbose true```

- -help : help
- 다른 옵션들은 다음 링크 참고. running-standalone link

## JSON over HTTP를 통한 설정

WireMock HTTP API에 post하여 stub mapping을 만들 수 있습니다.

```
$ curl -X POST --data '{"request" : {"url" : "/get/this", "method":"GET"}, "response" : {"status" : 200, "body" : "Here it is "}}' http://localhost:8182/__admin/mappings/new
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   106    0     0  100   106      0   3312 --:--:-- --:--:-- --:--:--  6625


$ curl -X DELETE http://127.0.0.1:8182/csc/t-etri-CSC-user-tester/userservices/1488521335800/delete
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100    87    0    87    0     0   5800      0 --:--:-- --:--:-- --:--:-- 87000
{"success":"true","respmessage":{"code":"200","message":"The result of request is OK"}}
```

## JSON file configuration

- 파일을 통해 JSON API를 사용할 수 있습니다.

- WireMock 서버가 실행되면 현재 디렉토리 아래에 mappings와 --files 디렉토리가 생깁니다.

- 이 방법으로 위와 같은 스텁(stub)을 만들려면 .json 확장자를 가진 파일을 mappings 디렉토리 하위에 넣습니다.

## Stub 파일 이름 규칙
아래와 같은 규칙으로 파일명을 부여합니다.

```"워크스페이스"_"대상 엔티티 혹은 서비스 이름"_"HTTP Method"[_"ID"][_"시나리오 등의 상태"].json```

- 워크스페이스: csc 혹은 csb
- 대상 엔티티 혹은 서비스 이름: user-service, service-zone 등의 엔티티 이름
- HTTP Method: post, put, delete 등의 http method. 그러나 목록을 반환하는 get 호출의 경우에는 list를 사용
	- csc_user-service_get
	- csb_user-service_list
- ID: http get 호출로 하나의 엔티티 객체를 얻어 오는 경우 사용하는 ID 값. 모든 호출에 대해 동일한 결과를 반환하는 경우에는 생략
	- csb_user-service_get - get 호출이지만 모든 호출에 대해 동일한 결과를 반환하는 경우의 예
- 시나리오 등의 상태: 시나리오 기능을 사용하는 경우, 해당 호출을 구분할 수 있는 상태 값 명시
	- csc_user-service_get_1488521335800_pending-terminating-1
	- csc_user-service_list_1488521335800-deleted - "1488521335800" ID의 엔티티가 삭제된 user-service 목록임을 나타냄
