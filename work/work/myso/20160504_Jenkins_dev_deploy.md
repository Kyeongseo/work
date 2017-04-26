#Jenkins연동 소스 자동 deploy 설정

__Dev서버에서 Jenkins와 연동하여 업데이트된 소스코드를 자동으로 Deploy 할 수 있도록 한다.__

[Wiki Link. 사진 포함](https://insoft-cloud.torchpad.com/dev/Jenkins/Jenkins%EC%97%B0%EB%8F%99+%EC%9E%90%EB%8F%99+deploy+%EC%84%A4%EC%A0%95)

##Tomcat 설치.
- SSH접속 명령어(ubuntu).
```
$ ssh -i '---.pem' ubuntu@'domain'
```

- __SSH접속__.
```
KyeongSeo@DESKTOP /c/repos
$ ssh -i .pem ubuntu@domain
Welcome to Ubuntu 14.04.3 LTS (GNU/Linux 3.13.0-74-generic x86_64)

 * Documentation:  https://help.ubuntu.com/

  System information as of Sat May  7 01:25:54 UTC 2016

  System load:  0.0               Processes:           69
  Usage of /:   35.1% of 7.75GB   Users logged in:     0
  Memory usage: 12%               IP address for eth0: 172.31.16.111
  Swap usage:   0%

  Graph this data and manage this system at:
    https://landscape.canonical.com/

  Get cloud support with Ubuntu Advantage Cloud Guest:
    http://www.ubuntu.com/business/services/cloud

76 packages can be updated.
48 updates are security updates.


Last login: Fri May  6 16:11:47 2016 from 220.87.213.56
ubuntu@ip-172-31-16-111:~$
```

- 원하는 다렉토리로 이동.
```
$ cd /usr/local
```

- __Tomcat__ 다운로드.(v 7.0.54)
```
$ wget http://archive.apache.org/dist/tomcat/tomcat-7/v7.0.54/bin/apache-tomcat-7.0.54.tar.gz
```

- 압축풀기.
```
$ tar -xvf apache-tomcat-7.0.54.tar.gz
```

##Java 설치
- OpenJDK 제거.
```
$ sudo apt-get purge openjdk*
```

- repository 추가.
```
$ sudo add-apt-repository ppa:webupd8team/java
```

- apt-get 업데이트.
```
$ sudo apt-get update
```

- __Java 설치__.(v 1.8)
```
$ sudo apt-get install oracle-java8-installer
```

- 설치 확인.
```
ubuntu@ip-172-31-16-111:/$ java -version
java version "1.8.0_91"
Java(TM) SE Runtime Environment (build 1.8.0_91-b14)
Java HotSpot(TM) 64-Bit Server VM (build 25.91-b14, mixed mode)
```

 __Java 환경 설정__
 
- __Java HOME__ 경로 확인.
```
$ cd /usr/lib/jvm/하위 디렉토리
```

- Java HOME 경로 확인.
```
ubuntu@ip-172-31-16-111:~$ cd /usr/lib/jvm
ubuntu@ip-172-31-16-111:/usr/lib/jvm$ ls
java-8-oracle
```

- __bash.bashrc__ 파일 오픈. (시스템 설정에 관련한 파일)
```
vi /etc/bash.bashrc
```

- 맨 밑에 추가.
```
export JAVA_HOME=/usr/lib/jvm/java-8-oracle/
```

- 환경변수 재설정.
```
source /etc/bash.bashrc 
```

##Tomcat에 '---.war' deploy 하여 실행 확인
- __war__ file 생성 위한 run __configuration__ 추가. __IntelliJ__ (Maven.profile-dev로 설정)
![war파일 생성.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/5MyfYndZRZ2Nd8Novjqr_war%ED%8C%8C%EC%9D%BC%20%EC%83%9D%EC%84%B1.JPG)

- 설정한 조건으로 __실행__.
![실행.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/6VubNuuaS2y22f3ROQrP_%EC%8B%A4%ED%96%89.JPG)

- 실행 코드의 폴더 아래에 생성된 __target__ 폴더에서 __console.war__ 확인.
![war 생성 확인.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/L9Yc1nsfToq32lSnSC28_war%20%EC%83%9D%EC%84%B1%20%ED%99%95%EC%9D%B8.JPG)

- DEV서버로 __console.war 파일 전송__.(__scp__ 이용)
```
- 전송할 디렉토리 생성
$ cd /
$ sudo mkdir workspace
$ sudo chmod 777 workspace (권한 변경)
```
```
- 로그아웃
$ logout
```
```
- 전송
$ scp -i .pem /c/repos/myso-cloud/target/console.war ubuntu@domain:/workspace
```
![scp 전송.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/Nz4B95H3T7CxXMiOc9nd_scp%20%EC%A0%84%EC%86%A1.JPG)

- 전송 후 재접속 해 console.war 파일을 __/usr/local/apache-tomcat-7.0.54/webapps__ 으로 이동.
```
- 접속
$ ssh -i .pem ubuntu@domain
```
```
- 파일 이동
$ mv /workspace/console.war /usr/local/apache-tomcat-7.0.54/webapps/
```
```
- 이동 확인
$ cd /usr/local/apache-tomcat-7.0.54/webapps
$ ls
```
![console.war mv.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/t4mfg34RTYaksqZUm0g2_console.war%20mv.JPG)

- __Tomcat 실행__ 시켜 __deploy 확인__.
```
- bin 디렉토리로 이동
$ cd /usr/local/apache-tomcat-7.0.54/bin

- startup.sh 실행
$ sudo sh startup.sh
```
![tomcat start.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/GQYZmpwzRIecOQ5dm7FT_tomcat%20start.JPG)

- __log__ 파일 보고 실행 확인 or __페이지__ 들어가서 확인.
```
- logs 디렉토리로 이동
$ cd /usr/local/apache-tomcat-7.0.54/logs

- log 확인 (vi 사용 가능)
$ cat catalina.out 
```
```
- 페이지로 확인. 8080 port
http://domain:8080/console/
```

##Jenkins over SSH 설정
- Jenkins 로그인 > 왼쪽 바에 __Jenkins 관리__ > __시스템 설정__
![jenkins 시스템 설정.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/hKsDt0QhSoYkSzicD6ET_jenkins%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EC%84%A4%EC%A0%95.JPG)

- Publish __over SSH__ 설정. (고급눌러 키 추가)
```
Name: 이름 설정
Hostname: domain	(SSH hostname or IP)
Username: ubuntu			(username to connect. ex> ec2-user, root ..)
Remote Directory: /workspace  (base directory)
```

- ```Remote Directory 없으면 생성해줘야 한다.```
```
$ cd /
$ sudo mkdir workspace
$ sudo chmod 777 workspace  (권한 변경)
```
![overSSH.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/pgJIlYQ3Sgm6Wkhhj1R0_overSSH.JPG)

-----------------------------------------------------

- __Jenkins 메인화면__ > 설정하고자 하는 __프로젝트 선택__
![myso overssh.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/9eOoFllbTwuBUIbyFltH_myso%20overssh.JPG)

- 왼쪽 바에 __'구성'__ 선택.
![Jenkins myso 구성.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/w1fQLc5OQh2UCZJgT54C_Jenkins%20myso%20%EA%B5%AC%EC%84%B1.JPG)

- __빌드 후 조치__ > __Send build artifacts over SSH__ 선택.
```
Name: 위에서 설정한 SSH Server 선택
Source files: target/console.war		(copy 할 파일)
Remove prefix: target/				(target/console.war에서 target/삭제)
Remote directory: /dev				(/dev 디렉토리에 copy. </workspace/dev>)
Exec command: sh /workspace/myso_dep_dev.sh  (copy 후 실행할 command) > 밑에서 자세히
```
- ```Remote Directory 없으면 생성해줘야 한다.```
```
$ cd /workspace
$ sudo mkdir dev
$ sudo chmod 777 dev (권한 변경)
```
![빌드후 조치.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/zzZUvxOiQ1yp60TJM1eD_%EB%B9%8C%EB%93%9C%ED%9B%84%20%EC%A1%B0%EC%B9%98.JPG)


##GitLap Push 이벤트 발생 시 war 파일 copy 확인
- __프로젝트 선택__ > 왼쪽 바에 __'Build Now'__
![BuildNow.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/3hnhqAQgSMrJt1DLRZlB_BuildNow.JPG)

- __#Number__ 선택 > __Console Output__ > __콘솔 출력__을 볼 수 있다.
![console출력.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/TdfppAxCTSKZCqE3kWrc_console%EC%B6%9C%EB%A0%A5.JPG)

- __console 출력 확인. (서버 접속 확인)__
![console.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/lYeiTip3TeCnE0IGIAYm_console.JPG)

- __/dev__ 디렉토리에 __copy__ 확인. (/workspace/dev)
![copy 확인.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/fc4keSXeTUGjwBpoGH26_copy%20%ED%99%95%EC%9D%B8.JPG)

##Tomcat에 자동 Deploy
- 위 __over SSH__에서 설정한 ```Exec command: sh /workspace/myso_dep_dev.sh``` 대로  __myso_dep_dev.sh 생성__
```
$ cd workspace
$ vi myso_dep_dev.sh
```
- __myso_dep_dev.sh 스크립트__
<pre><code>#!/bin/bash
#tomcat process kill
pid= `ps aux | grep catalina | grep -v color | grep -v grep | awk '{print $2}'`
if [ -n "$pid" ]; then
    echo "Killing process ID: $pid"
    sudo kill -9 $pid
    echo "Done"
else
    echo "Tomcat is not running"
fi
#move webapps and remove files , directories
cd /usr/local/apache-tomcat-7.0.54/webapps/
echo "move into webapps"
sudo rm -rf *.*
sudo rm -rf *
echo "remove everything"
#move console.war file
mv /workspace/dev/console.war /usr/local/apache-tomcat-7.0.54/webapps/
echo "console.war move from dev to webapps"
#restart tomcat
cd /usr/local/apache-tomcat-7.0.54/bin
sudo sh startup.sh
exit</code></pre>

- 다시 __빌드(Build Now)__ 후 __자동 디플로이__ 되는지 확인. (__Console Out__ 확인 or __페이지__로 확인)
![deploy 성공.JPG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/gzkIFnXTRHywO9a3HF92_deploy%20%EC%84%B1%EA%B3%B5.JPG)
```
- 페이지로 확인. 8080 port
http://domain:8080/console/
```
