http://play.local.com:8070/

---
qa

- web server
	- nginx / 1.8.1
- was
	- tomcat / 7.0.70
- MySQL 5.6.27
- Redis 2.4.10
- Amazon Linux AMI release 2016.03
 - Linux version 4.4.19-29.55.amzn1.x86_64

---

prod  

- web server
	- nginx / 1.10.1
- was
	- tomcat / 7.0.70
- MySQL 5.6.27
- Redis 2.4.10
- Amazon Linux AMI release 2016.09
 - Linux version 4.4.19-29.55.amzn1.x86_64

public, private 인스턴스의 OS는 동일합니다.

---

nginx version check

- nginx -v

Tomcat version check

- 톰캣이 설치된 경로로 이동(lib까지)
 - cd /usr/share/tomcat7/lib
- 다음 명령어로 버전 확인
 - java -cp catalina.jar org.apache.catalina.util.ServerInfo

 redis version check

 - redis-server --version

 OS version check

 - os version check
  - cat /etc/issue
 - os kernel version check
  - cat /proc/version 