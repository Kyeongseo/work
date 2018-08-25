# 아마존 PostgreSQL 설치 및 설정 
## PostgreSQL 설치
- SSH접속.
- 명령어는 아래와 같다.
``` 
ssh -i 'pemkey' ec2-user@'domain'
```
- SSH접속
``` ssh

최순@SOON-HP ~
$ ssh -i /g/hkkwon.pem ec2-user@52.69.25.111
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
sudo yum update 
```
- yum package installer 에서 install 가능한 postgresql 목록을 검색한다.
```
yum list postgres*

Available Packages
postgresql-jdbc.noarch                            8.4.701-8.11.amzn1                    amzn-main

postgresql-odbc.x86_64                            08.04.0200-1.6.amzn1                  amzn-main

postgresql8.x86_64                                8.4.20-2.48.amzn1                     amzn-updat

postgresql8-contrib.x86_64                        8.4.20-2.48.amzn1                     amzn-updat

postgresql8-devel.x86_64                          8.4.20-2.48.amzn1                     amzn-updat

postgresql8-docs.x86_64                           8.4.20-2.48.amzn1                     amzn-updat

postgresql8-libs.i686                             8.4.20-2.48.amzn1                     amzn-updat

postgresql8-libs.x86_64                           8.4.20-2.48.amzn1                     amzn-updat

postgresql8-plperl.x86_64                         8.4.20-2.48.amzn1                     amzn-updat

postgresql8-plpython.x86_64                       8.4.20-2.48.amzn1                     amzn-updat

postgresql8-pltcl.x86_64                          8.4.20-2.48.amzn1                     amzn-updat

postgresql8-server.x86_64                         8.4.20-2.48.amzn1                     amzn-updat

postgresql8-test.x86_64                           8.4.20-2.48.amzn1                     amzn-updat

postgresql92.x86_64                               9.2.10-1.53.amzn1                     amzn-main

postgresql92-contrib.x86_64                       9.2.10-1.53.amzn1                     amzn-main

postgresql92-devel.x86_64                         9.2.10-1.53.amzn1                     amzn-main

postgresql92-docs.x86_64                          9.2.10-1.53.amzn1                     amzn-main

postgresql92-libs.i686                            9.2.10-1.53.amzn1                     amzn-main

postgresql92-libs.x86_64                          9.2.10-1.53.amzn1                     amzn-main

postgresql92-plperl.x86_64                        9.2.10-1.53.amzn1                     amzn-main

postgresql92-plpython26.x86_64                    9.2.10-1.53.amzn1                     amzn-main

postgresql92-plpython27.x86_64                    9.2.10-1.53.amzn1                     amzn-main

postgresql92-pltcl.x86_64                         9.2.10-1.53.amzn1                     amzn-main

postgresql92-server.x86_64                        9.2.10-1.53.amzn1                     amzn-main

postgresql92-server-compat.x86_64                 9.2.10-1.53.amzn1                     amzn-main

postgresql92-test.x86_64                          9.2.10-1.53.amzn1                     amzn-main

postgresql93-contrib.x86_64                       9.3.6-1.59.amzn1                      amzn-main

postgresql93-docs.x86_64                          9.3.6-1.59.amzn1                      amzn-main

postgresql93-libs.i686                            9.3.6-1.59.amzn1                      amzn-main

postgresql93-plperl.x86_64                        9.3.6-1.59.amzn1                      amzn-main

postgresql93-plpython26.x86_64                    9.3.6-1.59.amzn1                      amzn-main

postgresql93-plpython27.x86_64                    9.3.6-1.59.amzn1                      amzn-main

postgresql93-pltcl.x86_64                         9.3.6-1.59.amzn1                      amzn-main

postgresql93-test.x86_64                          9.3.6-1.59.amzn1                      amzn-main
```
- 검색한 목록 중에 원하는 postgresql version을 install한다.
```
sudo yum install postgresql93 postgresql93-server postgresql93-devel
```
- PostgreSQL initialization 
- /var/lib/postgreql93/data directory에 data가 생성된다.
```
sudo service postgresql93 initdb
```
- 외부에서 Database에 접근 할 수 있도록 설정을 변경한다.
- /var/lib/pgsql93/data directory로 이동.(pgsql93 directory에 접근권한이 없으면 root로 권한변경.)
```
sudo -i
[root@ip-172-31-3-29 ~]$cd /var/lib/pgsql93/data
```

- /var/lib/pgsql93/data 하위에 pg_hba.conf파일을 연다.
```
vi pg_hba.conf
```
- IPv4에 대한 설정을 변경한다.
- ADDRESS(127.0.0.0/ => 0.0.0.0/0), METHOD(ident => password)
```
# IPv4 local connections:
# TYPE  DATABASE        USER            ADDRESS                 METHOD
host    all             all             0.0.0.0/0              password
```

- 다시 /var/lib/pgsql93/data 하위에 postgresql.conf파일을 연다.
```
vi postgresql.conf
```
- listen_addresses에 대한 설정값을 변경하고 주석을 제거한다.
```
#listen_address = 'localhost' => listen_address = '*'
```
- 설정이 끝났으면 postgresql을 시작한다.(현재 root 권한이기 때문에 sudo명령어를 사용하지 않아도 된다.)
```
service postgresql93 start
```

- postgresql default계정인 postgres계정으로 변경.
```
su - postgres 
```
- postgresql console에 접근.
```
-bash-4.1$ psql
```
- 데이터베이스를 만든다.
```
postgres=# CREATE DATABASE dbname;
```
- dataBaseName에  SchemaName 스키마 만들기
```
 postgres=# CREATE SCHEMA schemaname;
```
- 유저 생성하기
```
postgres=# CREATE USER username PASSWORD 'password';
```
- 생성한 유저의 해당스키마에 대한 전체 권한을 부여한다.
```
 postgres=# GRANT ALL ON SCHEMA schemaname TO username;
```
 
- 테이블에 대한 전체 권한을 부여한다.
```
 postgres=# GRANT ALL ON ALL TABLES IN SCHEMA schemaname TO username;
```
- PostgreSQL의 경우 charecter set이 기본 UTF8로 되어있기 때문에 따로 설정하지 않음.
- charecter set을 변경하고 싶으면 postgresql.conf에서 변경하면 됨.
```
# - Locale and Formatting -

datestyle = 'iso, mdy'
#intervalstyle = 'postgres'
timezone = 'UTC'
#timezone_abbreviations = 'Default'     # Select the set of available time zone
                                        # abbreviations.  Currently, there are
                                        #   Default
                                        #   Australia (historical usage)
                                        #   India
                                        # You can create your own file in
                                        # share/timezonesets/.
#extra_float_digits = 0                 # min -15, max 3
#client_encoding = sql_ascii            # actually, defaults to database
                                        # encoding

# These settings are initialized by initdb, but they can be changed.
lc_messages = 'en_US.UTF-8'                     # locale for system error message
                                        # strings
lc_monetary = 'en_US.UTF-8'                     # locale for monetary formatting
lc_numeric = 'en_US.UTF-8'                      # locale for number formatting
lc_time = 'en_US.UTF-8'                         # locale for time formatting

# default configuration for text search
default_text_search_config = 'pg_catalog.english'
```