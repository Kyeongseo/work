
Artifactory 의존관계 설정
===
__Artifactory에서 의존성이 있는 라이브러리들의 의존관계를 설정합니다. (XXX.pom 파일 수정)__

- 문서에 작성된 예시는 Ucloud-driver가 Cloud-driver에 의존성이 있는 예제입니다.
- Ucloud-driver를 pom.xml에 추가시 Cloud-driver까지 download될 수 있도록 하는 예제입니다.

---
### Artifactory 설치 및 검증에 나와있는 것과 같은 방법으로 jar 파일을 Deploy 합니다.

- [Artifactory 설치 및 검증 링크](http://insoft-cloud.torchpad.com/dev/Artifactory/Artifactory%28AWS%29+%EC%84%A4%EC%B9%98+%EB%B0%8F+%EA%B2%80%EC%A6%9D)

1. __jar__ 파일을 drop-down or select file.

2. __Deploy as Maven Artifact__ 체크합니다.

3. Group ID, Artifactory ID, Version, Classfier(선택사항), Type 작성합니다.

4. __Generate Default POM / Deploy jar's Internal POM 체크박스 체크하고 pom파일 내용을 확인합니다.__
 -  __pom파일을 수정__해야 하므로 내용 확인 후 다른 곳에 내용을 복사해둡니다.

5. __```Generate Default POM / Deploy jar's Internal POM 체크박스는 체크하지 않고 Deploy 합니다.```__
 - 그 이유는 __pom__파일에 __의존관계를 추가__해 deploy 해야 하기 때문입니다. 
 
---
### 4번에서 다른 곳에 복사해 둔 pom파일 내용을 수정합니다.
- __pom에 의존성 있는 라이브러리의 dependency를 추가__합니다.

- dependency 추가 전

```
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>clouddriver-ucloud</groupId>
  <artifactId>clouddriver-ucloud</artifactId>
  <version>0.0.3-SNAPSHOT</version>
  <name>ucloudbiz cloud driver</name>
  <description>ucloudbiz cloud driver</description>
	...
</project>
```
- dependency 추가 후 (clouddriver dependency 추가)

```
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>clouddriver-ucloud</groupId>
  <artifactId>clouddriver-ucloud</artifactId>
  <version>0.0.3-SNAPSHOT</version>
  <name>ucloudbiz cloud driver</name>
  <description>ucloudbiz cloud driver</description>
  <dependencies>
    ...
    <dependency>
      <groupId>clouddriver</groupId>
      <artifactId>clouddriver</artifactId>
      <version>0.0.2-SNAPSHOT</version>
    </dependency>
  </dependencies>
</project>
```
- __pom파일 이름은 jar파일 이름과 동일__하게 __pom확장자__로 저장합니다. 

```
jar : clouddriver-ucloud.jar
pom : clouddriver-ucloud.pom
```

---
### pom파일 수정 후 파일을 Deploy 합니다.
1. __pom__ 파일을 drop-down or select file.

2. __Deploy as Maven Artifact__ 체크합니다.

3. Group ID, Artifactory ID, Version, Classfier(선택사항), Type 작성합니다. __(jar 파일과 동일하게 작성)__

4. __```pom 파일이므로``` Generate Default POM / Deploy jar's Internal POM ```체크박스는 체크하지 않고 Deploy 합니다.```__

5. Deploy 후 __pom파일 이름이 jar파일 이름과 동일한지 확인__합니다.

6. Deploy 한 pom파일을 선택 후 __Pom View를 선택해 추가한 dependency를 확인__합니다.

![캡처.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/3s3SCcIsRHa03gKSUedn_%EC%BA%A1%EC%B2%98.JPG)

---
### Artifactory 저장소 사용 확인
- __POM.xml을 수정합니다.__ 
 - clouddriver-ucloud dependency만 남기고 clouddriver dependency는 삭제합니다. 
 - (원래는 clouddriver-ucloud, clouddriver 2개가 설정되어있었다.)

- __로컬 maven 저장소에서 jar 파일 삭제 후 검증__
 - ~/.m2/repository/clouddriver __삭제__ (그전에 사용했던 파일 및 폴더 삭제)
 - ~/.m2/repository/clouddriver-ucloud __삭제__ (그전에 사용했던 파일 및 폴더 삭제)

- 삭제 후 POM.xml __Reimport__
 - pom.xml 오른쪽 마우스 클릭 > Maven > Reimport
 
- __JAR파일 생성을 확인합니다.__
 - ~/.m2/repository/clouddirver-ucloud/clouddriver-ucloud/안에 __jar파일 생성 확인__.
 - ~/.m2/repository/clouddirver/clouddriver/안에 __jar파일 생성 확인__.




