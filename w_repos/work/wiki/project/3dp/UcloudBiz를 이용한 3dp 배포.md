# UcloudBiz를 이용한 3dp 배포
## ucloud 서버생성
- 상품 신청  
![1.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/3onHgT47RrS7NDJjly5D_1.png)

- 상품 선택
![2.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/ijWnUlFQVGsKNpGHRuXl_2.png)

- ucloud server 메뉴 선택
![3.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/H5IKhN8Q9CogZkGKJSqA_3.png)

- 서버 생성 버튼 클릭
![4.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/Cmv0qqbSDCI2q0PmzFaw_4.png)

- 생성할 서버 정보 입력
![5.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/uXlvVnQT7edoIh1zbVYL_5.png)
 - 서버명: ucloud-3dp
 - 호스트명: ucloud-3dp
 - 그룹명: 미적용
 - 위치: KOR-Seoul M
 - 운영체제: Centos 7.0 64bit
 - 생성할 서버수: 1
 - 서버사양: 2vCore X 4GB | 100GB

- 신청하기 버튼 클릭 후 생성 정보 확인
![6.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/04Z45U2rQGPNGPfGUOMZ_6.png)
 - 서버 생성이 완료되면 비밀번호를 발급해 준다.

## 서버 네트워크 설정
- 네트워크 메뉴 선택
![7.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/WptF23uxTIK83lEM7vL3_7.png)

- 포트포워딩 설정
![8.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/R4kwpJYLRSOev8VtYFno_8.png)
 - 위에서 생성한 서버에 해당하는 네트워크를 선택한다.
 - 네트워크 정보 화면에서 포트포워딩 탭을 선택한다.
 - 추가할 포트포워딩 정보를 입력한다.   
  Port 22: SSH접속   
  Port 80: WebServer   
  Port 5432: DB(Postsql)   
  Port 587: MailServer(Google)   
  
## SSH를 이용하여 서버 접속
- [putty를 사용](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)
- 서버 정보 입력
![9.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/ZFvECeMaRoeEKnFHxHZd_9.png)
  
- 비밀번호 입력
 - ID: ROOT
 - PASSWORD: 서버 생성시 발급받은 비밀번호를 입력한다.
 
## 비밀번호 변경 및 YUM업데이트
- 비밀번호 변경
``` 
[root@ucloud-3dp ~]# passwd
Changing password for user root.
New password:
Retype new password:
passwd: all authentication tokens updated successfully. 
```
root계정에서 passwd 명령어를 입력 -> 새로운 패스워드 입력 -> 패스워드 재입력  
비밀번호가 짧은 경우 BAD PASSWORD 에러가 출력된다.
앞으로 변경한 비밀번호로 접속 가능.

- YUM 업데이트  
 - ``` [root@ucloud-3dp ~]# yum update  ```   
 - yum을 최신버젼으로 업데이트한다.  
 업데이트 중 y/n선택문이 나오면 y를 입력 후 엔터버튼을 클릭한다.
 
## Java 8 설치
- ``` [root@ucloud-3dp ~]# yum list java* ```   
yum을 이용하여 자바목록 검색
```
java-1.6.0-openjdk.x86_64                                 1:1.6.0.36-1.13.8.1.el7_1                   updates
java-1.6.0-openjdk-demo.x86_64                            1:1.6.0.36-1.13.8.1.el7_1                   updates
java-1.6.0-openjdk-devel.x86_64                           1:1.6.0.36-1.13.8.1.el7_1                   updates
java-1.6.0-openjdk-javadoc.x86_64                         1:1.6.0.36-1.13.8.1.el7_1                   updates
java-1.6.0-openjdk-src.x86_64                             1:1.6.0.36-1.13.8.1.el7_1                   updates
java-1.7.0-openjdk.x86_64                                 1:1.7.0.85-2.6.1.2.el7_1                    updates
java-1.7.0-openjdk-accessibility.x86_64                   1:1.7.0.85-2.6.1.2.el7_1                    updates
java-1.7.0-openjdk-demo.x86_64                            1:1.7.0.85-2.6.1.2.el7_1                    updates
java-1.7.0-openjdk-devel.x86_64                           1:1.7.0.85-2.6.1.2.el7_1                    updates
java-1.7.0-openjdk-headless.x86_64                        1:1.7.0.85-2.6.1.2.el7_1                    updates
java-1.7.0-openjdk-javadoc.noarch                         1:1.7.0.85-2.6.1.2.el7_1                    updates
java-1.7.0-openjdk-src.x86_64                             1:1.7.0.85-2.6.1.2.el7_1                    updates
java-1.8.0-openjdk.x86_64                                 1:1.8.0.60-2.b27.el7_1                      updates
java-1.8.0-openjdk-accessibility.x86_64                   1:1.8.0.60-2.b27.el7_1                      updates
java-1.8.0-openjdk-demo.x86_64                            1:1.8.0.60-2.b27.el7_1                      updates
java-1.8.0-openjdk-devel.x86_64                           1:1.8.0.60-2.b27.el7_1                      updates
java-1.8.0-openjdk-headless.x86_64                        1:1.8.0.60-2.b27.el7_1                      updates
java-1.8.0-openjdk-javadoc.noarch                         1:1.8.0.60-2.b27.el7_1                      updates
java-1.8.0-openjdk-src.x86_64                             1:1.8.0.60-2.b27.el7_1                      updates
java-atk-wrapper.i686                                     0.30.4-5.el7                                base
java-atk-wrapper.x86_64                                   0.30.4-5.el7                                base
java_cup.noarch                                           1:0.11a-16.el7                              base
java_cup-javadoc.noarch                                   1:0.11a-16.el7                              base
java_cup-manual.noarch                                    1:0.11a-16.el7                              base
javacc.noarch                                             5.0-10.el7                                  base
javacc-demo.noarch                                        5.0-10.el7                                  base
javacc-javadoc.noarch                                     5.0-10.el7                                  base
javacc-manual.noarch                                      5.0-10.el7                                  base
javacc-maven-plugin.noarch                                2.6-17.el7                                  base
javacc-maven-plugin-javadoc.noarch                        2.6-17.el7                                  base
javamail.noarch                                           1.4.6-8.el7                                 base
javamail-javadoc.noarch                                   1.4.6-8.el7                                 base
javapackages-tools.noarch                                 3.4.1-6.el7_0                               base
javassist.noarch                                          3.16.1-10.el7                               base
javassist-javadoc.noarch                                  3.16.1-10.el7                               base
```

- java-1.8.0-openjdk-devel.x86_64 버젼을 설치하도록 한다.

``` 
[root@ucloud-3dp ~]# yum install java-1.8.0-openjdk-devel.x86_64 
```
- 설치 확인   
아래와 같이 버젼확인이 된다면 OK
```
[root@ucloud-3dp ~]# java -version
openjdk version "1.8.0_60"
OpenJDK Runtime Environment (build 1.8.0_60-b27)
OpenJDK 64-Bit Server VM (build 25.60-b23, mixed mode)
[root@ucloud-3dp ~]# javac -version
javac 1.8.0_60
```


## postgresql 설치
- http://yum.postgresql.org/repopackages.php Postgresql레퍼지토리 홈페이지에 접속해 서버 OS에 맞는 repository package를 받아서 설치한다. (Centos7.0)
![10.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/JEVs5YKRguOfgocsOFFA_10.png)

- 
```
[root@ucloud-3dp ~]# yum install http://yum.postgresql.org/9.4/redhat/rhel-7-x86_64/pgdg-centos94-9.4-1.noarch.rpm
```
 - yum install + '복사한 url'을 입력하여 레파지토리에 추가해준다.

- 
``` 
yum list postgres* 
```
 - 위에서 postgresql 9.4버젼을 추가해주었기에 리스트에서 확인할 수 있다.   
```
[root@ucloud-3dp ~]# yum list postgre*
Loaded plugins: fastestmirror
Repository base is listed more than once in the configuration
Repository updates is listed more than once in the configuration
Repository extras is listed more than once in the configuration
Repository centosplus is listed more than once in the configuration
pgdg94                                                                                | 3.6 kB  00:00:00
(1/2): pgdg94/7/x86_64/group_gz                                                       |  331 B  00:00:00
(2/2): pgdg94/7/x86_64/primary_db                                                     | 126 kB  00:00:01
Loading mirror speeds from cached hostfile
 * base: centos.tt.co.kr
 * extras: centos.tt.co.kr
 * updates: centos.tt.co.kr
Available Packages
postgresql.i686                                           9.2.13-1.el7_1                              updates
postgresql.x86_64                                         9.2.13-1.el7_1                              updates
postgresql-contrib.x86_64                                 9.2.13-1.el7_1                              updates
postgresql-devel.i686                                     9.2.13-1.el7_1                              updates
postgresql-devel.x86_64                                   9.2.13-1.el7_1                              updates
postgresql-docs.x86_64                                    9.2.13-1.el7_1                              updates
postgresql-jdbc.noarch                                    9.2.1002-5.el7                              base
postgresql-jdbc-javadoc.noarch                            9.2.1002-5.el7                              base
postgresql-libs.i686                                      9.2.13-1.el7_1                              updates
postgresql-libs.x86_64                                    9.2.13-1.el7_1                              updates
postgresql-odbc.x86_64                                    09.03.0100-2.el7                            base
postgresql-plperl.x86_64                                  9.2.13-1.el7_1                              updates
postgresql-plpython.x86_64                                9.2.13-1.el7_1                              updates
postgresql-pltcl.x86_64                                   9.2.13-1.el7_1                              updates
postgresql-server.x86_64                                  9.2.13-1.el7_1                              updates
postgresql-test.x86_64                                    9.2.13-1.el7_1                              updates
postgresql-upgrade.x86_64                                 9.2.13-1.el7_1                              updates
postgresql94.x86_64                                       9.4.4-1PGDG.rhel7                           pgdg94
postgresql94-contrib.x86_64                               9.4.4-1PGDG.rhel7                           pgdg94
postgresql94-debuginfo.x86_64                             9.4.4-1PGDG.rhel7                           pgdg94
postgresql94-devel.x86_64                                 9.4.4-1PGDG.rhel7                           pgdg94
postgresql94-docs.x86_64                                  9.4.4-1PGDG.rhel7                           pgdg94
postgresql94-jdbc.noarch                                  9.3.1101-2.rhel7                            pgdg94
postgresql94-jdbc-javadoc.noarch                          9.3.1101-2.rhel7                            pgdg94
postgresql94-libs.x86_64                                  9.4.4-1PGDG.rhel7                           pgdg94
postgresql94-odbc.x86_64                                  09.03.0400-1PGDG.rhel7                      pgdg94
postgresql94-odbc-debuginfo.x86_64                        09.03.0400-1PGDG.rhel7                      pgdg94
postgresql94-plperl.x86_64                                9.4.4-1PGDG.rhel7                           pgdg94
postgresql94-plpython.x86_64                              9.4.4-1PGDG.rhel7                           pgdg94
postgresql94-pltcl.x86_64                                 9.4.4-1PGDG.rhel7                           pgdg94
postgresql94-python.x86_64                                4.1.1-2PGDG.rhel7                           pgdg94
postgresql94-python-debuginfo.x86_64                      4.1.1-2PGDG.rhel7                           pgdg94
postgresql94-server.x86_64                                9.4.4-1PGDG.rhel7                           pgdg94
postgresql94-test.x86_64                                  9.4.4-1PGDG.rhel7                           pgdg94
```
- postgresql94-server.x86_64를 설치하도록 하자.
```
[root@ucloud-3dp ~]# yum install postgresql94-server.x86_64
```
- postgresql DB를 이니셜라이즈하도록 하자.
```
[root@ucloud-3dp /]# /usr/pgsql-9.4/bin/postgresql94-setup initdb
```
- 외부에서 접근할 수 있도록 설정을 변경하자.
 - listen_addresses에 대한 설정값을 변경하고 주석을 제거한다.
```
[root@ucloud-3dp bin]# vi /var/lib/pgsql/9.4/data/postgresql.conf
```
```
#listen_address = 'localhost' => listen_address = '*'
```
 - IPv4에 대한 설정을 변경한다.  
 ADDRESS(127.0.0.0/ => 0.0.0.0/0), METHOD(ident => password)
```
[root@ucloud-3dp bin]# vi /var/lib/pgsql/9.4/data/pg_hba.conf
```
```
# IPv4 local connections:
# TYPE  DATABASE        USER            ADDRESS                 METHOD
host    all             all             0.0.0.0/0              password
```

- Postgres 계정 비밀번호 설정
```
[root@ucloud-3dp bin]# passwd postgres
Changing password for user postgres.
New password:
Retype new password:
passwd: all authentication tokens updated successfully.
```

-  PostgreSQL service 시작
```
[root@ucloud-3dp /]# systemctl enable postgresql-9.4
[root@ucloud-3dp /]# systemctl start postgresql-9.4
```
 - 부팅시 자동 실행 및 서비스 시작

- DB생성 및 권한 설정
 - postgresql default계정인 postgres계정으로 변경.
 - postgresql console에 접근.
 - 데이터베이스를 만든다.
 - 유저 생성하기
 - 생성한 유저의 해당스키마에 대한 전체 권한을 부여한다.
 - 테이블에 대한 전체 권한을 부여한다.
```
[root@ucloud-3dp /]# su postgres
bash-4.2$ psql
psql (9.4.4)
Type "help" for help.

postgres=# create database demo;
CREATE DATABASE
postgres=# create user _3dp password 'insoft00';
CREATE ROLE
postgres=# grant all on schema public TO _3dp;
GRANT
postgres=# grant all on all tables in schema public TO _3dp;
GRANT
```
*- 방화벽 설정
```
firewall-cmd --permanent --add-port=5432/tcp
firewall-cmd --reload
systemctl restart postgresql-9.4.service
```*

## 80포트 리다이렉트 설정
- Linux(혹은 Unix)에서는 1024번 이하의 포트가 보안상의 이유로 root권한을 가지고 있는 로세스만이 포트를 선점할 있다.  
- 위의 이유로 root권한 사용자는 기본웹포트(80)을 사용할 수 없다.
- 서버 디폴로이를 위해 지속적으로 사용자를 변경하는 것은 귀찮기 때문에 80포트로 들어오는 요청을 8080으로 리다이렉트 시키도록 하자.

```
iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8080
iptables -t nat -I OUTPUT -p tcp --dport 80 -j REDIRECT --to-ports 8080 
iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8080
```

## 3dp 패키징
- src\main\resources\config\application-demo.yml 소스 코드 편집
```
//포트 8080으로 변경
server:
    port: 8080

liquibase:
    context: demo
    enabled: false

spring:
    profiles:
        active: demo
    datasource:
        platform: postgresql
        dataSourceClassName: org.postgresql.ds.PGSimpleDataSource
        databaseName: demo
        // DB서버 주소
        serverName: 211.253.11.26
        portNumber: 5432
        username: _3dp
        password: insoft00

    jpa:
        database-platform: org.hibernate.dialect.PostgreSQL82Dialect
        database: POSTGRESQL
        openInView: false
        show_sql: true
        hibernate:
            ddl-auto: update
            naming-strategy: org.hibernate.cfg.EJB3NamingStrategy
        properties:
            hibernate.cache.use_second_level_cache: false
            hibernate.cache.use_query_cache: false
            hibernate.generate_statistics: false
            hibernate.hbm2ddl.import_files: import-postgresql.sql
    thymeleaf:
        mode: XHTML
        cache: true

metrics:
    jmx.enabled: true
    spark:
        enabled: false
        host: localhost
        port: 9999
    graphite:
        enabled: false
        host: localhost
        port: 2003
        prefix: 3dp

http:
    cache:
        timeToLiveInDays: 31
```

- 시작 -> 실행 -> cmd 입력 -> cmd실행
- 프로젝트 폴더로 이동
- 메이븐 패키징 명령 입력
![13.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/uGSFedcbREmiowD84uhi_13.PNG)
```
C:\git_workspace\3DP_Git>mvn clean package -Dmaven.test.skip=true
[INFO] Scanning for projects...
[INFO]
[INFO] ------------------------------------------------------------------------
[INFO] Building 3dp 0.0.1-SNAPSHOT
[INFO] ------------------------------------------------------------------------
[INFO]
[INFO] --- maven-clean-plugin:2.5:clean (default-clean) @ 3dp ---
[INFO] Deleting C:\git_workspace\3DP_Git\target
[INFO]
[INFO] --- maven-enforcer-plugin:1.3.1:enforce (enforce-versions) @ 3dp ---
[INFO]
[INFO] --- maven-processor-plugin:2.2.4:process (process) @ 3dp ---
error: error reading C:\Users\park\.m2\repository\commons-codec\commons-codec\1.
6\commons-codec-1.6.jar; invalid LOC header (bad signature)
[WARNING] diagnostic: warning: The following options were not recognized by any
processor: '[mapstruct.defaultComponentModel, mapstruct.suppressGeneratorTimesta
mp]'
[INFO]
[INFO] --- maven-resources-plugin:2.6:resources (default-resources) @ 3dp ---
[INFO] Using 'UTF-8' encoding to copy filtered resources.
[INFO] Copying 3 resources
[INFO] Copying 33 resources
[INFO]
[INFO] --- maven-compiler-plugin:3.1:compile (default-compile) @ 3dp ---
[INFO] Changes detected - recompiling the module!
[INFO] Compiling 188 source files to C:\git_workspace\3DP_Git\target\classes
[WARNING] error reading C:\Users\park\.m2\repository\commons-codec\commons-codec
\1.6\commons-codec-1.6.jar; invalid LOC header (bad signature)
[WARNING] /C:/git_workspace/3DP_Git/src/main/java/com/kt/_3dp/web/rest/OrderReso
urce.java: C:\git_workspace\3DP_Git\src\main\java\com\kt\_3dp\web\rest\OrderReso
urce.java uses unchecked or unsafe operations.
[WARNING] /C:/git_workspace/3DP_Git/src/main/java/com/kt/_3dp/web/rest/OrderReso
urce.java: Recompile with -Xlint:unchecked for details.
[INFO]
[INFO] --- maven-resources-plugin:2.6:testResources (default-testResources) @ 3d
p ---
[INFO] Not copying test resources
[INFO]
[INFO] --- maven-compiler-plugin:3.1:testCompile (default-testCompile) @ 3dp ---

[INFO] Not compiling test sources
[INFO]
[INFO] --- maven-surefire-plugin:2.17:test (default-test) @ 3dp ---
[INFO] Tests are skipped.
[INFO]
[INFO] --- maven-war-plugin:2.5:war (default-war) @ 3dp ---
[INFO] Packaging webapp
[INFO] Assembling webapp [3dp] in [C:\git_workspace\3DP_Git\target\3dp-0.0.1-SNA
PSHOT]
[INFO] Processing war project
[INFO] Copying webapp resources [C:\git_workspace\3DP_Git\src\main\webapp]
[INFO] Webapp assembled in [106570 msecs]
[INFO] Building war: C:\git_workspace\3DP_Git\target\3dp-0.0.1-SNAPSHOT.war
[INFO]
[INFO] --- spring-boot-maven-plugin:1.2.5.RELEASE:repackage (default) @ 3dp ---
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 03:08 min
[INFO] Finished at: 2015-09-22T11:31:45+09:00
[INFO] Final Memory: 48M/215M
[INFO] ------------------------------------------------------------------------
```

## ucloud서버에 파일 업로드
- 3dp 소스코드 업로드
 - [winscp 사용](https://winscp.net/eng/download.php)
 ![14.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/9iJECdyvRbexqbtcw7H3_14.PNG)
 - root 디렉토리에 패키징된 3dp 소스코드 업로드
 ![15.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/c3iOXSByLrOb2a5exQQ7_15.png)
 
- attatchment 파일 업로드
 - root 디렉토리에 attatchment.tar 파일 업로드
 ![16.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/tRxxZOOOT0CdZfhQvgvg_16.png)
 - attatchment.tar 압축 풀기
```
[root@ucloud-3dp /]# tar -xvf attachments_20150910.tar
```

## 웹서버 실행
- log 폴더 생성
```
[root@insoft-ucloud-3dp /]# mkdir /home/3dp
```
- demo 프로파일로 웹서버 실행
```
[root@ucloud-3dp /]# java -jar /3dp-0.0.1-SNAPSHOT.war --spring.profiles.active=demo > /home/3dp/log_20150917.txt &
```

## 초기 SQL데이터 Import
- [pgadmin 으로 접속] (http://www.pgadmin.org/)
 - postgresql 정보를 입력하고 로그인
![11.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/d4XnJAkNSmVL3p9LduAF_11.png)  
 - 생성된 DB(demo)를 선택
 - 상단의 SQL버튼 클릭
 - SQL Editor에 src\main\resources\import-postgresql.sql 코드를 복사하여 붙여넣기
 - 실행 버튼 클릭
![12.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/c3wegxPiTviIrsuG0E1U_12.png)