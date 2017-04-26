Artifactory(Local) 설치 및 검증
===
Artifactory (Local) 설치
---
[Artifactory(Local) 설치 및 검증](https://insoft-cloud.torchpad.com/dev/Artifactory/Artifactory%28Local%29+%EC%84%A4%EC%B9%98+%EB%B0%8F+%EA%B2%80%EC%A6%9D)

###다운로드

- [JFrog_Artifactory Open-Source](https://www.jfrog.com/open-source/)

- rpm file Download

- 원하는 폴더로 이동 후 압축 풀기 (이 문서에서는 /c/repos)

![jfrog home1.jpg](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/5lRmqMkeRFqYAjaLHbfQ_jfrog%20home1.jpg)

###환경변수 설정

- __JAVA_HOME__ / __ARTIFACTORY_HOME__ / __Path__ 설정

- ```시스템 - 고급 시스템 설정 - 고급 탭 - 환경 변수 - 시스템 변수 새로 만들기```
```
변수 이름 : JAVA_HOME
변수 값 : C:\Program Files\Java\jdk1.8.0_74 (본인 폴더)
```
```
변수 이름 : ARTIFACTORY_HOME
변수 값 : C:\repos\artifactory-oss-4.7.6 (본인 폴더)
```

- __Path__ 환경 변수 편집 - __path 추가__
```
%JAVA_HOME%\bin
```
```
%ARTIFACTORY_HOME%\bin
```



###Artifactory 설치

- C:\repos\artifactory-oss-4.7.6\bin

- __artifactory.bat__ 실행
![artifactory 설치확인.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/40sI5gcCRruGMxluYvbm_artifactory%20%EC%84%A4%EC%B9%98%ED%99%95%EC%9D%B8.JPG)

- 실행 완료 후 installService.bat 실행 (2가지 방법)
 1. 마우스 오른쪽 클릭후 관리자 권한으로 실행
 2. cmd 관리자 권한으로 실행 후 폴더로 이동하여 installService.bat 실행
 
---
##Artifactory 설치 확인

- __cmd 관리자 권한__으로 실행 후 명령어 입력
```
sc start|stop artifactory
```
![artifactory 실행 확인.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/sWb7VTTmSl6GqPzf3bPH_artifactory%20%EC%8B%A4%ED%96%89%20%ED%99%95%EC%9D%B8.JPG)

- ```http://localhost:8081/artifactory``` 들어가서 확인
 - artifactory는 __8081__ port 사용.

- default ID,PW 입력 후 로그인
```
ID : admin
PW : password
```
![로그인 화면.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/esmtryZgSteXJHKuLHe1_%EB%A1%9C%EA%B7%B8%EC%9D%B8%20%ED%99%94%EB%A9%B4.JPG)

---
##Artifactory repository에 파일 deploy

- 로그인 후 왼쪽 바에  __Artifacts__ 클릭
![artifacts.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/bAv1zVqBTfSbki6hX1eZ_artifacts.JPG)

- libs-snapshot-local 선택 후 __Deploy__ 클릭 (원하는 저장소 선택, 예제에서는 libs-snapshot-local)
![click libs-snapshot-local.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/doUhFxwJQ8SVR9PVIf5o_click%20libs-snapshot-local.JPG)

- ```Type: Single```로 파일 업로드 (Drop file here or Select file)
 - 파일 마다 설정 화면이 다르다.
 - 이 예제는 jar 파일 업로드. (clouddirver.jar)

- __밑에 캡처화면 참고__
 
- __Deploy as Maven Artifact__ 체크

- 설정할 Group ID, Artifact ID, Version 작성
```
--ex--
Group ID : clouddriver
Artifact ID : clouddirver
Version : 0.0.1-SNAPSHOT
```

- Generate Default POM / Deploy Jar's Internal POM 체크시 POM.xml 에 작성해야할 코드를 볼 수 있다.

- Deploy 클릭

- __Deploy 설정 캡처__
![deploy1.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/JlcEfVoUTEed9D9nsqWB_deploy1.JPG)

- 생성 확인 

- __성공__ ```반드시 이러한 구조로 생성되어야 한다.```
![deploy 확인.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/nR5oAaGQTGnJKwQu4G9b_deploy%20%ED%99%95%EC%9D%B8.JPG)

- __실패__ (빨강-실패, 파랑-성공)
![deploy 실패.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/zgxBbwioRsWWl8KdznmR_deploy%20%EC%8B%A4%ED%8C%A8.JPG)

---
##Settings file, Maven Deployment element

###Settings file

- 왼쪽 바에  Artifacts 클릭 

- __Set Me Up__ 클릭
![settings file.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/LMq1oQiiQNi6K76iAz1C_settings%20file.JPG)

- __Generate Maven Settings__ 클릭
![generate settings.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/HdoNcikuT1KjUTcDXo0S_generate%20settings.JPG)

- Generate Settings 클릭 후 확인. __Download Snippet__ 눌러 다운로드
![settings download.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/8xW1u5YTQ9qnaBBeu4l6_settings%20download.JPG)

- 다운로드 된 __settings.xml__을 ```~/.m2```으로 옮기거나 .m2 안에 있는 settings.xml 수정
![m2.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/5G8Hl4HQuyKUOsIRb9Zg_m2.JPG)

- __settings.xml 수정__ (설정한 username, password)
```
<username> : admin
<password> : password
---
<snapshots> <enabled> : true 로 바꾸기
```
![settings.xml 수정.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/8DNYyBcaRseBv2FAHm2Q_settings.xml%20%EC%88%98%EC%A0%95.JPG)

###Maven Deployment element
- 다시 artifactory로 돌아가서 왼쪽 바에  Artifacts 클릭 > Set Me Up 클릭

- Repository / libs-snapshot-local 선택 (deploy한 저장소 선택)

- __Deploy 안의 소스코드 복사.__
![deploy element_local.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/WZMnCza6Ti2Quud95C3q_deploy%20element_local.JPG)

- 프로젝트 __POM.xml__ 들어가서 복사한 소스코드 ```<project>```안에  붙여넣기
![pom_xml.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/sTedLaFxQMuKgObz5tpm_pom_xml.JPG)

- __복사한 소스코드 수정__
 - ```<distributionManagement>``` 삭제
 - ```<snapshotRepository>``` -> ```<repository>``` 변경
 - ``<name>`` 프로젝트에 어울리는 이름으로 변경.
 - ```<snapshots> <enable> true``` 추가
- 수정한 소스코드
```
 <repository>
            <id>snapshots</id>
            <name>cloud.repository</name>
            <url>http://localhost:8081/artifactory/libs-snapshot-local</url>
            <snapshots>
                <enabled>true</enabled>
            </snapshots>
  </repository>
```
![pom.xml 수정.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/803hSERWSlaKZ5Zx8zoh_pom.xml%20%EC%88%98%EC%A0%95.JPG)

---
##POM.xml 수정 

- ex) Local dependency. 저장소에서 가져와야하는 설정 수정
- 수정 전
```
 <!-- Local dependencies -->
        <dependency>
            <groupId>clouddriver</groupId>
            <artifactId>clouddriver</artifactId>
            <version>0.0.1-SNAPSHOT</version>
            <scope>system</scope>
            <systemPath>${user.home}/libs/clouddriver.jar</systemPath>
        </dependency>
```

- 수정 후
```
<!-- Local dependencies -->
        <dependency>
            <groupId>clouddriver</groupId>
            <artifactId>clouddriver</artifactId>
            <version>0.0.1-SNAPSHOT</version>
        </dependency>
```

---
##Artifactory 저장소 사용 확인

###로컬 maven 저장소에서 jar 파일 삭제 후 검증

- ~/.m2/repository/clouddirver/clouddriver/clouddriver-*.jar __삭제__ (그 전에 사용했던 파일 삭제)


- 삭제 후 POM.xml Reimport
 - pom.xml 오른쪽 마우스 클릭 > Maven > __Reimport__

- ~/.m2/repository/clouddirver/clouddriver/안에 __jar파일 생성 확인__.

##실행시켜 빌드 확인
- 성공

---
##Anonymous 접근 권한 변경

- Artifactory 메인화면 왼쪽 바에서 __Admin__
![admin.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/l5XYKUzpTK2bDGctydBt_admin.JPG)

- Admin > Security > __General__ > __Allow Anonymous Access 체크 해제__ > SAVE
![admin_anonymous.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/83CriMVqQaYg7WOyWJ8g_admin_anonymous.JPG)

---
##User Password 변경

- Artifactory 메인화면 왼쪽 바에서 __Admin__
![admin.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/l5XYKUzpTK2bDGctydBt_admin.JPG)

- Admin > Security > __User__ > __password 변경__ > SAVE
![password.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/k0oavfIRFSzpVd0hvptU_password.JPG)

---

- Repository <libs-repease-local> 선택(위에서 디플로이 한 저장소)

```
<distributionManagement>
        <repository>
            <id>central</id>
            <name>DESKTOP-85O0M6R-releases</name>
            <url>http://localhost:8081/artifactory/libs-release-local</url>
        </repository>
    </distributionManagement>
```
```
 <!-- Local dependencies -->
        <dependency>
            <groupId>clouddriver</groupId>
            <artifactId>clouddriver</artifactId>
            <version>0.0.1-SNAPSHOT</version>
            <scope>system</scope>
            <systemPath>${user.home}/libs/clouddriver.jar</systemPath>
        </dependency>
        <dependency>
            <groupId>clouddriver.ucloud</groupId>
            <artifactId>clouddriver.ucloud</artifactId>
            <version>0.0.1-SNAPSHOT</version>
            <scope>system</scope>
            <systemPath>${user.home}/libs/clouddriver-ucloud.jar</systemPath>
        </dependency>
```
```
<!-- Local dependencies -->
        <dependency>
            <groupId>clouddriver</groupId>
            <artifactId>clouddriver</artifactId>
            <version>0.0.1</version>
        </dependency>
        <dependency>
            <groupId>clouddriver-ucloud</groupId>
            <artifactId>clouddriver-ucloud</artifactId>
            <version>0.0.1</version>
        </dependency>
```


```
Artifactory를 노트북에 설치한 후

- clouddriver.jar
- cloudclouddriver-ucloud.jar

두 개의 파일을 설치한 artifactory 저장소에 디플로이 한 후, myso-cloud 프로젝트에서 새 저장소를 통해 위의 jar 파일을 사용하도록 설정해서 문제가 없는지 검증합니다.

저장소 사용에 문제가 없으면 저장소를 인증한 사용자만 사용할 수 있도록 설정을 변경하고 위의 jar 파일을 사용할 수 있는지 검증합니다.

아래 기술한 내용에 유의하세요.

- 로컬 maven 저장소에서 jar 파일 삭제 후 검증해야 함
  - ~/.m2/repository/clouddriver/clouddriver-*.jar
  - ~/.m2/repository/clouddriver/ucloud/clouddriver.ucloud-*.jar
- ~/.m2/settings.xml 파일에 인증 정보를 저장하도록 설정
  - 인증 정보를 pom.xml에 넣으면 외부 노출 위험이 크기 때문입니다
  - settings.xml 파일은 아래 문서를 참고하거나 검색을 통해서 파악하세요
    - http://books.sonatype.com/mvnref-book/reference/appendix-settings.html
```