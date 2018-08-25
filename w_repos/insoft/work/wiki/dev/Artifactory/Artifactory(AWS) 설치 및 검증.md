
Artifactory(AWS) 설치 및 검증
===
Artifactory (서버_AWS) 설치
---
- __AWS 8081 포트 추가__
 - 상황에 따라 Public IP도 추가

### 다운로드

- [JFrog_Artifactory Open-Source](https://www.jfrog.com/open-source/)

- __RPM__ file Download

![jfrog home2.jpg](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/OCMMfDOTIW8BPeNGjYe2_jfrog%20home2.jpg)

- __서버로 rpm file 전송__(scp)
```
scp -i CI.pem /c/repos/jfrog-artifactory-oss-4.7.6.rpm ec2-user@52.192.196.32:/usr/local
```

#### 환경변수 설정(JAVA_HOME)

- SSH접속
```
ssh -i CI.pem ec2-user@52.192.196.32
```

- __JAVA_HOME__ / __Path__ 설정

- java 경로 검색
```
$ sudo find / -name 'java' -type d
```
![java 경로검색.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/ZusVrf7GRKOZFySgxH7V_java%20%EA%B2%BD%EB%A1%9C%EA%B2%80%EC%83%89.JPG)

- __/etc/profile__ 수정
```
$ sudo vi /etc/profile
```

- __환경 변수__ 추가
```
export JAVA_HOME=/usr/java/jdk1.8.0_77	//JAVA_HOME 변수 설정
export PATH=$JAVA_HOME/bin:$PATH	//Path에 추가
```

- 환경 변수 적용(source 이용 or 재 로그인)
```
$ source /etc/profile
```

---
### Artifactory 설치

- 전송한 디렉토리로 이동하여 __rpm file 실행__
```
$  cd /usr/local
$  sudo rpm -Uvh jfrog-artifactory-oss-4.7.6.rpm
```

- 설치된 폴더로 이동하여 확인
```
 $ cd /opt/jfrog/artifactory/
```

- __artifactory.sh__ 실행
```
$ cd /opt/jfrog/artifactory/bin
$ sudo sh artifactory.sh
```

- __installService.sh__ 실행 
```
$ sudo sh installService.sh
```

#### 환경변수 설정(ARTIFACTORY_HOME)

- __/etc/profile__ 수정
```
$ sudo vi /etc/profile
```

- 환경 변수 추가
```
export ARTIFACTORY_HOME=/opt/jfrog/artifactory
export PATH=$ARTIFACTORY_HOME/bin:$PATH

export ARTIFACTORY_USER=/etc/opt/jfrog/artifactory/default	//선택사항
export PATH=$ARTIFACTORY_HOME/etc:$PATH						//선택사항
```

- 환경 변수 적용(source 이용 or 재 로그인)
```
$ source /etc/profile
```
![환경변수.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/t3bwAr6aT1uKlx0GEG2k_%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98.JPG)


- __/etc/opt/jfrog/artifactory/default__ 수정
```
$ sudo vi /etc/opt/jfrog/artifactory/default
```

- 환경 변수 수정
```
#Default values
export ARTIFACTORY_HOME=/opt/jfrog/artifactory
```

- 환경 변수 적용(source 이용 or 재 로그인)
```
$ source /etc/opt/jfrog/artifactory/default
```
![환경변수_default.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/XfDX7txQnaSwPFze85Po_%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98_default.JPG)

---
## Artifactory 설치 확인

- __설치 디렉토리 권한 변경__ (/opt)
```
$ sudo chmod -R 777 /opt		//-R. 하위 디렉토리,파일 모두 권한 변경
```

- __명령어__ 입력하여 서비스 실행 확인
```
$ sudo service artifactory start | stop | check
```

- ```http://52.192.196.32:8081/artifactory``` 들어가서 확인
 - artifactory는 __8081__ port 사용.

- default ID,PW 입력 후 로그인
```
ID : admin
PW : password
```

---
## Artifactory repository에 파일 deploy

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

- Deploy 클릭
- Generate Default POM / Deploy jar's Internal POM 체크박스 클릭시 자동으로 pom이 생성됩니다. 

- __Deploy 설정 캡처__
![deploy1.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/JlcEfVoUTEed9D9nsqWB_deploy1.JPG)

- 생성 확인 


- __성공__ ```반드시 이러한 구조로 생성되어야 한다.```
![deploy 확인.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/nR5oAaGQTGnJKwQu4G9b_deploy%20%ED%99%95%EC%9D%B8.JPG)

- __실패__ (빨강-실패, 파랑-성공)
![deploy 실패.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/zgxBbwioRsWWl8KdznmR_deploy%20%EC%8B%A4%ED%8C%A8.JPG)

---
## Settings file, Maven Deployment element

### Settings file

- 왼쪽 바에  Artifacts 클릭 

- __Set Me Up__ 클릭
![settings file.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/LMq1oQiiQNi6K76iAz1C_settings%20file.JPG)

- __Generate Maven Settings__ 클릭
![generate settings.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/HdoNcikuT1KjUTcDXo0S_generate%20settings.JPG)

- Generate Settings 클릭 후 확인. __Download Snippet__ 눌러 다운로드
![settings download.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/8xW1u5YTQ9qnaBBeu4l6_settings%20download.JPG)

- 다운로드 된 __settings.xml__을 ```~/.m2```으로 옮기거나 .m2 안에 있는 settings.xml 수정


- __settings.xml 수정__ (설정한 username, password)
```
<username> : admin
<password> : password
---
<snapshots> <enabled> : true 로 바꾸기
```

### Maven Deployment element
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
            <url>http://52.192.196.32:8081/artifactory/libs-snapshot-local</url>
            <snapshots>
                <enabled>true</enabled>
            </snapshots>
  </repository>
```
![pom.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/J3SjWV35Qy6K4zmzBBus_pom.JPG)

---
## POM.xml 수정 

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
## Artifactory 저장소 사용 확인

### 로컬 maven 저장소에서 jar 파일 삭제 후 검증

- ~/.m2/repository/clouddriver/clouddriver/clouddriver-*.jar __삭제__ (그전에 사용했던 파일 삭제)

- 삭제 후 POM.xml __Reimport__
 - pom.xml 오른쪽 마우스 클릭 > Maven > Reimport

- ~/.m2/repository/clouddriver/clouddriver/안에 __jar파일 생성 확인__.

### 실행시켜 빌드 확인
- 성공

---
## Anonymous 접근 권한 변경

- Artifactory 메인화면 왼쪽 바에서 __Admin__
![admin.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/l5XYKUzpTK2bDGctydBt_admin.JPG)

- Admin > Security > __General__ > __Allow Anonymous Access 체크 해제__ > SAVE
![admin_anonymous.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/83CriMVqQaYg7WOyWJ8g_admin_anonymous.JPG)

---
## User Password 변경

- Artifactory 메인화면 왼쪽 바에서 __Admin__
![admin.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/l5XYKUzpTK2bDGctydBt_admin.JPG)

- Admin > Security > __User__ > __password 변경__ > SAVE
![password.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/k0oavfIRFSzpVd0hvptU_password.JPG)




