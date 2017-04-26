# C-Spider AWS 구축

## Dev 서버 구축 및 Jenkins 연동

dev 서버를 구축하고 Jenkins와 연동해 개발 환경을 구성합니다.

### 1. VM 생성 및 security 설정
VM 생성 및 security 설정
- t2.small type으로 vm 생성 (c-spider-dev)
- pem key 생성 (email 공유)
- elastic IP associated (52.79.171.135)
- security 생성 및 적용 (c-spider-dev)
	- security (Inbound / Outbound : ALL)

|Type	|Protocol	|Port Range	|Source|
|---|---|---|---|
|HTTP|	TCP	|80	| 0.0.0.0/0|
|Custom TCP Rule	|TCP|	8080|	0.0.0.0/0|
|SSH|	|TCP|	22	|0.0.0.0/0|
|MYSQL/Aurora|	TCP|	3306	|0.0.0.0/0|


### 2. java 1.8 upgrade
java version update (1.7 > 1.8)

- 참고
- http://serverfault.com/questions/664643/how-can-i-upgrade-to-java-1-8-on-an-amazon-linux-server

```
[ec2-user@ip-172-31-23-92 ~]$ java -version
java version "1.7.0_121"
[ec2-user@ip-172-31-23-92 ~]$ sudo yum update
[ec2-user@ip-172-31-23-92 ~]$ yum list "java*openjdk*"
[ec2-user@ip-172-31-23-92 ~]$ sudo yum install java-1.8.0-devel
[ec2-user@ip-172-31-23-92 ~]$ sudo /usr/sbin/alternatives --config java
[ec2-user@ip-172-31-23-92 ~]$ sudo /usr/sbin/alternatives --config javac
[ec2-user@ip-172-31-23-92 ~]$ java -version
openjdk version "1.8.0_111"
[ec2-user@ip-172-31-23-92 ~]$ javac -version
javac 1.8.0_111
[ec2-user@ip-172-31-23-92 ~]$ sudo yum remove java-1.7.0-openjdk
```

### 3. mysql install (UTF-8)

MySQL install (5.7.17 MySQL Community Server)

- 설치

```
[ec2-user@ip-172-31-23-92 ~]$ sudo yum -y install http://dev.mysql.com/get/mysql57-community-release-el6-7.noarch.rpm
[ec2-user@ip-172-31-23-92 ~]$ sudo yum repolist enabled | grep "mysql.*-communit 
[ec2-user@ip-172-31-23-92 ~]$ sudo yum -y install mysql-community-server
[ec2-user@ip-172-31-23-92 ~]$ mysql --version
mysql  Ver 14.14 Distrib 5.7.17, for Linux (x86_64) using  EditLine wrapper
[ec2-user@ip-172-31-23-92 ~]$ sudo chkconfig mysqld on
[ec2-user@ip-172-31-23-92 ~]$ sudo service mysqld start
Initializing MySQL database:                               [  OK  ]
Installing validate password plugin:                       [  OK  ]
Starting mysqld:                                           [  OK  ]
[ec2-user@ip-172-31-23-92 ~]$ mysql -uroot -p
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 4
Server version: 5.7.17
```

- password 변경

```
[ec2-user@ip-172-31-23-92 ~]$ mysql -uroot -p
mysql> ALTER USER root@localhost IDENTIFIED BY '*********';
Query OK, 0 rows affected (0.00 sec)
UTF-8 설정
참고
http://stackoverflow.com/questions/34253039/cant-change-charset-in-mysql-5-7-from-latin-to-utf8
http://www.yoheim.net/blog.php?q=20160402
mysql> show variables like '%character%';     //character set 확인
+--------------------------+----------------------------+
| Variable_name            | Value                      |
+--------------------------+----------------------------+
| character_set_client     | utf8                       |
| character_set_connection | utf8                       |
| character_set_database   | latin1                     |
| character_set_filesystem | binary                     |
| character_set_results    | utf8                       |
| character_set_server     | latin1                     |
| character_set_system     | utf8                       |
| character_sets_dir       | /usr/share/mysql/charsets/ |
+--------------------------+----------------------------+
8 rows in set (0.00 sec)
[ec2-user@ip-172-31-23-92 ~]$ sudo vi /etc/my.cnf    //아래 추가
   [mysqld]
   character-set-server=utf8
   collation-server=utf8_general_ci
[ec2-user@ip-172-31-23-92 ~]$ sudo service mysqld restart
[ec2-user@ip-172-31-23-92 ~]$ mysql -uroot -p
mysql> status    //character set 확인
--------------
mysql  Ver 14.14 Distrib 5.7.17, for Linux (x86_64) using  EditLine wrapper

Connection id:          4
Current database:
Current user:           root@localhost
SSL:                    Not in use
Current pager:          stdout
Using outfile:          ''
Using delimiter:        ;
Server version:         5.7.17 MySQL Community Server (GPL)
Protocol version:       10
Connection:             Localhost via UNIX socket
Server characterset:    utf8
Db     characterset:    utf8
Client characterset:    utf8
Conn.  characterset:    utf8
UNIX socket:            /var/lib/mysql/mysql.sock
Uptime:                 21 sec

Threads: 1  Questions: 6  Slow queries: 0  Opens: 105  Flush tables: 1  Open tab les: 98  Queries per second avg: 0.285

```

### 4. jenkins 설정

Jenkins 설정

- Jenkins > Jenkins 관리 > 시스템 설정 > SSH Server > c-spider(dev)
	- Hostname 변경 (52.79.171.135)
	- Key 

### 5. 빌드 및 배포 테스트

빌드 및 배포 테스트

- database 외부 접속 권한 추가
- database 추가 (csc_dev)

```
mysql> GRANT ALL PRIVILEGES ON *.* TO root@"%" identified by '*********';
mysql> flush privileges;
mysql> show databases;
mysql> create database csc_dev;
```

- directory 및 shell script 추가
	- /home/ec2-user/c-spider/dev      // c-spider.war 파일 위치 (chmod 775)
	- /home/ec2-user/c-spider/log/csc-dev.txt    // log 위치 (chmod 775)
	- /etc/rc.d/init.d/run-dev (chmod 755)    // jenkins에서 build후 실행할 파일

```
[ec2-user@ip-172-31-23-92 ~]$ pwd
/home/ec2-user
[ec2-user@ip-172-31-23-92 ~]$ mkdir c-spider
[ec2-user@ip-172-31-23-92 ~]$ sudo chmod 775 c-spider
```

```
run-dev

#!/bin/bash
#
# C-Spider Develop Server
#
# desciption: start/stop script for the C-Spider Develop Server
PROCESS_NAME=c-spider.war
RETVAL=0
 case "$1" in
start)
PID=`ps -eo pid,command | grep ${PROCESS_NAME} | grep -v grep | awk '{print $1}'`
if [[("${PID}" != "")]]; then
 logger -s "${PROCESS_NAME}(pid ${PID}) is already running."
 exit;
fi
logger -s "Starting C-Spider Develop Server"
java -jar -Dspring.profiles.active=dev /home/ec2-user/c-spider/dev/${PROCESS_NAME} > /home/ec2-user/log/csc-dev.txt &
PID=`ps -eo pid,command | grep ${PROCESS_NAME} | grep -v grep | awk '{print $1}'`
logger -s "${PROCESS_NAME} (pid ${PID}) is running."
RETVAL=$?
;;
stop)
PID=`ps -eo pid,command | grep ${PROCESS_NAME} | grep -v grep | awk '{print $1}'`
if [[("${PID}" == "")]]; then
 logger -s "${PROCESS_NAME} is not running."
 exit;
fi
logger -s "Stopping C-Spider Develop Server"
kill -9 $PID
RETVAL=$?
;;
restart)
 $0 stop
 $0 start
 ;;
*)
echo "Usage: $0 {start|stop|restart}"
exit 1
esac
exit $RETVAL
```

- 소스코드 application-dev.yml 변경 (database 부분)
- port forwarding

```[ec2-user@ip-172-31-23-92 log]$ sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8080```

- Jenkins run

```
[ec2-user@ip-172-31-23-92 log]$ ps -ef | grep java   //java 실행되고 있는지 확인.
```

### 6. 도메인 연결 (dev.icloud.org)
도메인 연결

- LB생성
	- c-spider-dev
	- classic Load Balancer > default (Security 생성)
		- security : Inbound HTTP TCP 80 0.0.0.0/0 | Outbound : ALL
	- 생성 후
		- Instance 탭 > Connection Draining: Disable
		- Health Check > timeout : 5 / Interval : 10 / threshold : 2
- dev.icloudyou.org (infra_manager 계정)
	- Route53 > Hosted zones > icloudyou.org > LB name입력 (CNAME)