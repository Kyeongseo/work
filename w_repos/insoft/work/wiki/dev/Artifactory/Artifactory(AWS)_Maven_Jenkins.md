
# Artifactory(AWS) & Maven & Jenkins
## Artifactory & Maven
- __Maven 설치된 서버__에 상황에 따라 __Public IP__로 __8081 포트__ 열기

- SSH접속
```
ssh -i CI.pem ec2-user@52.192.196.32
```

- Maven home directory
```
$ mvn -version
```
![mvn.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/BIUF4pvT9KlG4ebzoMfC_mvn.JPG)

- __Maven_HOME 하위 conf__ 디렉토리 안 __settings.xml 수정__
```
$ sudo vi MAVEN_HOME/conf/settings.xml
```
![maven settings.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/xtXwHdr2Twiec8L1VY5W_maven%20settings.JPG)

- settings.xml 내용 참고 링크 (settings file)
 - [Artifactory(AWS) 설치 및 검증](https://insoft-cloud.torchpad.com/dev/Artifactory/Artifactory%28AWS%29+%EC%84%A4%EC%B9%98+%EB%B0%8F+%EA%B2%80%EC%A6%9D)
 
---
## Jenkins
- GitLab develop branch push 후 __Console Output__ 확인
![jenkins.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/3zdEOHGqRrOyxBMkgiVM_jenkins.JPG)

- __Success__ 확인.

