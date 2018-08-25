# 아마존 Jenkins설치 및 GitLab연동
## Jenkinse 설치
- SSH접속.
- 명령어는 아래와 같다.
``` 
ssh -i 'pemkey' ec2-user@'domain'
```
- SSH접속
``` ssh

최순@SOON-HP ~
$ ssh -i /g/3dp.pem ec2-user@52.68.4.27
Last login: Mon Jun  8 00:47:58 2015 from 123.212.42.41

       __|  __|_  )
       _|  (     /   Amazon Linux AMI
      ___|\___|___|

https://aws.amazon.com/amazon-linux-ami/2015.03-release-notes/
18 package(s) needed for security, out of 46 available
Run "sudo yum update" to apply all updates.
[ec2-user@ip-172-31-3-29 ~]$
```

- yum update
``` 
$ sudo yum update 
```
- yum package installer 에서 install 가능한 Jenkins 목록을 검색한다.
```
$ yum list jenkins*
Error: No matching Packages to list
```
- 위와 같이 install 할 수 있는 Jenkins package가 없다고 나오는 경우 발생하면 jenkins package를 yum repository에 import 해준다.
```
$ sudo wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/redhat/jenkins.repo
$ sudo rpm --import http://pkg.jenkins-ci.org/redhat/jenkins-ci.org.key
```
- jenkins를 설치한다.
``` 
$ sudo yum install -y jenkins
```
- 설치가 완료되면 jenkins 서비스를 활성화 시켜준다.
``` 
$ sudo chkconfig jenkins on
```
- 서비스를 사용해 jenkins를 시작한다.
``` 
$ sudo service jenkins start
```

## Java 설치
- 설치 가능한 java목록을 검색한다.
``` 
$ yum list "java*openjdk*"

Available Packages
java-1.6.0-openjdk.x86_64                     1:1.6.0.35-1.13.7.1.70.amzn1             amzn-updates

java-1.6.0-openjdk-demo.x86_64                1:1.6.0.35-1.13.7.1.70.amzn1             amzn-updates

java-1.6.0-openjdk-devel.x86_64               1:1.6.0.35-1.13.7.1.70.amzn1             amzn-updates

java-1.6.0-openjdk-javadoc.x86_64             1:1.6.0.35-1.13.7.1.70.amzn1             amzn-updates

java-1.6.0-openjdk-src.x86_64                 1:1.6.0.35-1.13.7.1.70.amzn1             amzn-updates

java-1.7.0-openjdk-demo.x86_64                1:1.7.0.79-2.5.5.1.59.amzn1              amzn-updates

java-1.7.0-openjdk-devel.x86_64               1:1.7.0.79-2.5.5.1.59.amzn1              amzn-updates

java-1.7.0-openjdk-javadoc.noarch             1:1.7.0.79-2.5.5.1.59.amzn1              amzn-updates

java-1.7.0-openjdk-src.x86_64                 1:1.7.0.79-2.5.5.1.59.amzn1              amzn-updates

java-1.8.0-openjdk-demo.x86_64                1:1.8.0.45-30.b13.5.amzn1                amzn-updates

java-1.8.0-openjdk-javadoc.noarch             1:1.8.0.45-30.b13.5.amzn1                amzn-updates

java-1.8.0-openjdk-src.x86_64                 1:1.8.0.45-30.b13.5.amzn1                amzn-updates
```

- 설치하려는 java 버전을 선택하여 java를 설치한다.(필자는 1.8 버전 설치)
``` 
$ sudo yum install -y java-1.8.0-openjdk-devel
```
- 기존에 설치되어 있는 java 버전이 있고 새로운 java 버전으로 업데이트 하고 싶다면 다음이 명령어를 실행한다.
```
$ sudo alternatives --config java
```
- 설치된 java 목록이 나오며 그 중에 사용하려는 java 버전을 선택한다.
```
  Selection    Command
-----------------------------------------------
*+ 1           /usr/lib/jvm/jre-1.7.0-openjdk.x86_64/bin/java
   2           /usr/lib/jvm/jre-1.8.0-openjdk.x86_64/bin/java

Enter to keep the current selection[+], or type selection number: 2
```
- 현재 java 버전을 확인해 보면 위에서 선택된 java 버전을 확인 할 수 있다.
```
$ java -version
openjdk version "1.8.0_45"
OpenJDK Runtime Environment (build 1.8.0_45-b13)
OpenJDK 64-Bit Server VM (build 25.45-b02, mixed mode)
```

## Maven 설치 

- yum package installer 에서 install 가능한 Maven 목록을 검색한다.
```
$ yum list *maven*
Error: No matching Packages to list
```
- 위와 같이 install 할 수 있는 maven package가 없다고 나오는 경우 발생하면 maven package를 yum repository에 import 해준다.
```
& sudo wget http://repos.fedorapeople.org/repos/dchen/apache-maven/epel-apache-maven.repo -O /etc/yum.repos.d/epel-apache-maven.repo
$ sudo sed -i s/\\$releasever/6/g /etc/yum.repos.d/epel-apache-maven.repo
```
- Maven을 설치한다.
```
$ sudo yum install -y apache-maven
```

- Maven이 잘 설치 됬는지 확인해 본다.(Maven home, Java home까지 확인 가능, jenkins config 설정 할 때 필요함.)
```
$ mvn --version
Apache Maven 3.2.5 (12a6b3acb947671f09b81f49094c53f426d8cea1; 2014-12-14T17:29:23+00:00)
Maven home: /usr/share/apache-maven
Java version: 1.8.0_45, vendor: Oracle Corporation
Java home: /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.45-30.b13.5.amzn1.x86_64/jre
Default locale: en_US, platform encoding: UTF-8
OS name: "linux", version: "3.14.35-28.38.amzn1.x86_64", arch: "amd64", family: "unix"
```

## Jenkins PlugIn 설치

- {jenkins_server_ip}:8080으로 접속을 하면 jenkins CI 화면을 확인 할 수 있다.
- Left 메뉴에서 Jenkins 관리 > 플러그인 관리로 이동한다.
- 설치 가능 탭으로 이동하면 아래와 같은 목록들을 확인 할 수 있다.
- 검색창에 gitlab을 입력하면 설치가능한 gitlab 플러그인 목록이 나온다.

![2015-06-19 17;50;31.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/A69ReibmTI6ajxwBurR3_2015-06-19%2017;50;31.PNG)

- 목록중에 GitLab Plugin, Gitlab Hook Plugin을 설치한다.
- 설치가 완료되면 서버 재시작을 체크하고 서버가 재시작하고 나면 설치된 목록에서 다음과 같이 확인 할 수 있다.
![2015-06-19 17;56;18.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/Y5PZG3iVQXCpLK4pzoRA_2015-06-19%2017;56;18.PNG)

## Jenkins config 설정
- 다시 Left 메뉴에서 Jenkins 관리 > 시스템 설정으로 이동한다.


- 시스템 설정에서 위에서 설치한 Java Home 경로를 지정해 준다. 
![2015-06-19 18;00;25.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/1Duy6JgSIiJcR2SvqUFR_2015-06-19%2018;00;25.PNG)


- 마찬가지로 Maven 의 Home 경로를 지정해 주고 저장한다.
![2015-06-19 18;00;38.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/OfoHTCuQjiOjqpfaaq9g_2015-06-19%2018;00;38.PNG)

## Credential 생성
- Left 메뉴에서 Jenkins 관리 > Manage Credentials로 이동한다.
- Add Credentials > SSH Username with private key를 선택한다.
- username을 jenkins로 하고 Pirvate Key를 From the Jenkins master~/.ssh 로 선택하고 Credential을 생성
![2015-06-23 11;43;52.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/gdiEA4rQdCRfJ7gN1Is4_2015-06-23%2011;43;52.PNG)

## Jenkins GitLab 연동
- Jenkins 관리 > 시스템 설정에서 CVS 경로를 확인 할 수 있다.
![2015-06-23 11;20;30.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/eNxiMvzsTLEaw1tWyu7Q_2015-06-23%2011;20;30.PNG)

- 다시 생성한 아마존 인스턴스에 ssh접속하여 위 경로에 SSH-Key 생성한다.
- Jenkins 서버에서 GitLab 저장소에 접근하기 위한 SSH-Key가 필요하다.
```
$ cd /var/lib/jenkins/.ssh
$ sudo -u jenkins ssh-keygen -t rsa -C "jenkins@selab.co.kr"
```
- 생성한 SSH-Key중 public키를 열어서 확인한다.
```
$ sudo -u jenkins cat ~/.ssh/id_rsa.pub

ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCmx80mdol+................중략
```
- GitLab(https://gitlab.com/)으로 이동하여 Jenkins와 연동하려는 프로젝트로 이동한다.
- Left Menu에서 settings > Deploy Keys 메뉴로 이동한다.
- 앞에서 생성한 Jenkins 의 Public SSH-Key 를 입력하여 생성한다.
![2015-06-23 11;37;27.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/oTVWwm2aSgOut1rOs5pa_2015-06-23%2011;37;27.PNG)

- 다시 GitLab 프로젝트의 Settings / Web Hooks 메뉴에서 URL을 걸어준다. 
- URL : http://JENKINS_HOST/gitlab/build_now
- Trigger 할 옵션들을 선택하여 save한다.
![2015-06-23 12;35;27.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/ZI2vAm4EQny4Eu769A6L_2015-06-23%2012;35;27.PNG)

## Jenkins Build Item 추가
- Jenkins CI로 돌아와 build할 새로운 Item을 추가한다. 
- Maven project 선택하고 Item이름을 만든다. 
![2015-06-23 12;41;12.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/PRxyJ9YGS5mLPHK2afbP_2015-06-23%2012;41;12.PNG)

- 소스 코드 관리에서 Git을 선택한다.
- Repository URL에 해당 프로젝트의 SSH URL을 넣어준다.
- Credentials에 전에 생성하였던 Credentials을 선택한다. 
- Branches to build에 해당 item이 build될 git repository의 branch명을 입력한다.
![2015-06-23 12;43;45.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/O10TVVlRfyJPKSV1vtqM_2015-06-23%2012;43;45.PNG)

- 다음과 같은 error message가 나오면 repository에 연결이 되지 않은 것이다.
- 연결에 잘되면 error message는 없어진다.
![2015-06-23 12;47;17.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/EXODTo56Tma119mfTREw_2015-06-23%2012;47;17.PNG)

- Repository browser를 gitlab으로 선택한다. 
- URL에 해당 프로젝트의 HTTPS URL을 넣어주고 version을 넣어준다.
![2015-06-23 12;52;05.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/VilTgJbsQja5axpr8i3m_2015-06-23%2012;52;05.PNG)

- Goals and options에 clean package -P BUILD_ID -DskipTests=true와 같이 넣어준다.
![2015-06-23 12;58;23.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/Sg0XsHhQEewawNUFXYvA_2015-06-23%2012;58;23.PNG)
- BUILD_ID는 아래와 같이 pom.xml에서 빌드를 위해 설정된 profile의 id값을 넣어준다.
```
		<profile>
			<id>dev</id>
			<properties>
				<!-- log configuration -->
				<logback.loglevel>DEBUG</logback.loglevel>
				<env>dev</env>
				<outputDirectory>/home/3dp_dev</outputDirectory>
			</properties>
			<dependencies>
				<dependency>
					<groupId>org.springframework.boot</groupId>
					<artifactId>spring-boot-starter-tomcat</artifactId>
				</dependency>
			</dependencies>
			<build>
				<plugins>
					<plugin>
						<groupId>org.springframework.boot</groupId>
						<artifactId>spring-boot-maven-plugin</artifactId>
						<configuration>
							<finalName>3dpweb</finalName>
							<outputDirectory>${outputDirectory}</outputDirectory>
							<classifier>${env}</classifier>
							<classesDirectory>/WEB-INF/classes</classesDirectory>
						</configuration>
					</plugin>
				</plugins>
			</build>
		</profile>
```
- 다시 생성한 아마존 인스턴스에 ssh접속한다.
- /ect/init.d 경로 하위에 해당 application을 시작하고 중지하기 위한 shell script를 생성한다.(필자는 3dp-demo로 생성)
```
#!/bin/bash
#
# 3DP Develop Server
#
# chkconfig: - 50 50
# desciption: start/stop script for the 3DP Develop Server
# processname: 3dp-demo

# Source function libray

export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.45-30.b13.5.amzn1.x86_64
export MAVEN_HOME=/usr/share/apache-maven
export MAVEN_OPTS="-Xmx512m -XX:MaxPermSize=128m"
export PATH=$PATH:$JAVA_HOME/bin:$MAVEN_HOME/bin

case "$1" in
start)
echo -n "Starting 3DP Demo Server"
echo
PID=`ps -eaf | grep 3dpweb-demo | grep -v grep | awk '{print $2}'`
if [[ "" !=  "$PID" ]]; then
  echo "killing $PID"
  kill -9 $PID
fi
java -jar -Dspring.profiles.active=demo /home/3dp_demo/3dpweb-demo.war &
;;

stop)
PID=`ps -eaf | grep 3dpweb-demo | grep -v grep | awk '{print $2}'`
if [[ "" !=  "$PID" ]]; then
  echo "killing $PID"
  kill -9 $PID
fi
;;
*)
echo "Usage: $0 {start/stop}"
exit 1
esac
echo
exit 0
```

- Add post-build step을 Execute shell로 선택한다. 
- Command에 빌드가 되고나서 실행 할 shell 명령어를 입력한다.
- 빌드가 된 후 해당 application을 실행하기 위해 service SCRIPT_FILE_NAME start 명령어를 넣어준다.
![2015-06-23 13;08;07.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/hBMVBzivQGuFCdCHj63s_2015-06-23%2013;08;07.PNG)