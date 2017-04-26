
KyeongSeo@DESKTOP-85O0M6R MINGW64 /
$ cd /d/repos/aws/pem/

KyeongSeo@DESKTOP-85O0M6R MINGW64 /d/repos/aws/pem
$ ssh -i c-spider-dev.pem ec2-user@52.79.171.135
Last login: Fri Mar 24 03:05:22 2017 from 129.254.175.170

       __|  __|_  )
       _|  (     /   Amazon Linux AMI
      ___|\___|___|

https://aws.amazon.com/amazon-linux-ami/2016.09-release-notes/
15 package(s) needed for security, out of 26 available
Run "sudo yum update" to apply all updates.
[ec2-user@ip-172-31-23-92 ~]$ rrdtool
RRDtool 1.4.8  Copyright 1997-2013 by Tobias Oetiker <tobi@oetiker.ch>
               Compiled Mar 13 2015 17:13:56

Usage: rrdtool [options] command command_options
Valid commands: create, update, updatev, graph, graphv,  dump, restore,
                last, lastupdate, first, info, fetch, tune,
                resize, xport, flushcached

RRDtool is distributed under the Terms of the GNU General
Public License Version 2. (www.gnu.org/copyleft/gpl.html)

For more information read the RRD manpages

[ec2-user@ip-172-31-23-92 ~]$ ll
total 8148
drwxrwxr-x 3 ec2-user ec2-user    4096 Jan 17 05:02 c-spider
drwxrwxr-x 6 ec2-user ec2-user    4096 Feb 13 04:25 cspider-0.0.1-SNAPSHOT-bundl                                                                e
-rw-rw-r-- 1 ec2-user ec2-user 8314880 Feb 13 03:50 cspider-0.0.1-SNAPSHOT-bundl                                                                e.tar
-rw-rw-r-- 1 ec2-user ec2-user       0 Mar 23 06:07 c-spider.txt
drwxrwxr-x 3 ec2-user ec2-user    4096 Mar 20 09:27 c-spider-wiremock
drwxrwxr-x 2 ec2-user ec2-user    4096 Mar 24 01:11 log
-rwxr-xr-x 1 ec2-user ec2-user     981 Mar 23 06:01 qa-run
-rwxr-xr-x 1 ec2-user ec2-user     981 Mar 23 06:04 qa-run.sh
drwxrwxr-x 3 ec2-user ec2-user    4096 Mar 24 01:11 target
[ec2-user@ip-172-31-23-92 ~]$ mkdir monitoring
[ec2-user@ip-172-31-23-92 ~]$ cd monitoring/
[ec2-user@ip-172-31-23-92 monitoring]$ cd ..
[ec2-user@ip-172-31-23-92 ~]$ l
-bash: l: command not found
[ec2-user@ip-172-31-23-92 ~]$ ll
total 8152
drwxrwxr-x 3 ec2-user ec2-user    4096 Jan 17 05:02 c-spider
drwxrwxr-x 6 ec2-user ec2-user    4096 Feb 13 04:25 cspider-0.0.1-SNAPSHOT-bundl                                                                e
-rw-rw-r-- 1 ec2-user ec2-user 8314880 Feb 13 03:50 cspider-0.0.1-SNAPSHOT-bundl                                                                e.tar
-rw-rw-r-- 1 ec2-user ec2-user       0 Mar 23 06:07 c-spider.txt
drwxrwxr-x 3 ec2-user ec2-user    4096 Mar 20 09:27 c-spider-wiremock
drwxrwxr-x 2 ec2-user ec2-user    4096 Mar 24 01:11 log
drwxrwxr-x 2 ec2-user ec2-user    4096 Mar 29 07:27 monitoring
-rwxr-xr-x 1 ec2-user ec2-user     981 Mar 23 06:01 qa-run
-rwxr-xr-x 1 ec2-user ec2-user     981 Mar 23 06:04 qa-run.sh
drwxrwxr-x 3 ec2-user ec2-user    4096 Mar 24 01:11 target
[ec2-user@ip-172-31-23-92 ~]$ history
    1  java -version
    2  sudo yum update
    3  java -version
    4  yum list "java*openjdk*"
    5  sudo yum install java-1.8.0
    6  sudo /usr/sbin/alternatives --config java
    7  sudo /usr/sbin/alternatives --config java
    8  java -version
    9  javac -version
   10  java -version
   11  javac -version
   12  sudo yum install java-1.8.0-devel
   13  sudo /usr/sbin/alternatives --config java
   14  sudo /usr/sbin/alternatives --config javac
   15  javac -version
   16  sudo yum remove java-1.7.0-openjdk
   17  java version
   18  java -version
   19  javac -version
   20  yum list "mysql*"
   21  yum list all | grep mysql57
   22  sudo yum localinstall platform-and-version-specific-package-name.rpm
   23  yum -y install http://dev.mysql.com/get/mysql57-community-release-el6-7.n                                                                oarch.rpm
   24  yum repolist enabled | grep "mysql.*-community.*"
   25  yum -y install mysql-community-server
   26  sudo
   27  sudo yum -y install http://dev.mysql.com/get/mysql57-community-release-el                                                                6-7.noarch.rpm
   28  sudo yum repolist enabled | grep "mysql.*-community.*"
   29  sudo yum -y install mysql-community-server
   30  mysql --verison
   31  mysql --version
   32  chkconfig mysqld on
   33  sudo chkconfig mysqld on
   34  service mysqld start
   35  sudo service mysqld start
   36  vm /var/log/mysqld.log
   37  cat /var/log/mysqld.log
   38  mysql -uroot -p
   39  sudo vi /etc/my.cnf
   40  service mysqld restart
   41  sudo service mysqld restart
   42  service mysqld restart
   43  sudo service mysqld restart
   44  sudo service mysqld start
   45  cat /var/log/mysqld.log
   46  sudo vi /etc/my.cnf
   47  service mysqld start
   48  sudo service mysqld start
   49  mysql -uroot -p
   50  sudo vi /etc/my.cnf
   51  sudo service mysqld restart
   52  mysql -uroot -p
   53  ls -al
   54  history
   55  date
   56  vi .mysql_history
   57  ll
   58  ls -al
   59  ls -al -h
   60  exit
   61  sudo vi /etc/my.cnf
   62  export $PATH
   63  pwd
   64  mkdir c-spider
   65  sudo chomd 775 c-spider
   66  sudo chmod 775 c-spider
   67  ll
   68  cd c-spider/
   69  pwd
   70  cd /etc/rc.d/init.d/
   71  ll
   72  cd ~/c-spider/
   73  mkdir dev
   74  ll
   75  cd dev/
   76  ll
   77  cd /etc/rc.d/init.d/
   78  vi run-dev
   79  ll
   80  sudo vi run-dev
   81  ll
   82  sudo chmod 755 run-dev
   83  ll
   84  52.79.171.135
   85  ps -eo pid,command | grep ${PROCESS_NAME} | grep -v grep | awk '{print $1                                                                }'
   86  ps -eo pid
   87  ps -eo pid,command | grep c-spider.war
   88  cd ~/
   89  ll
   90  mkdir log
   91  ll
   92  cd lo
   93  cd log/
   94  vi csc-dev.txt
   95  ll
   96  ps -ef | grep java
   97  ll
   98  tail -f csc-dev.txt
   99  mysql -uroot -p
  100  sudo service mysqld restart
  101  ]
  102  tail -f csc-dev.txt
  103  mysql -uroot -p
  104  ll
  105  tail -f csc-dev.txt
  106  ps -ef
  107  csc-dev.txt
  108  vi csc-dev.txt
  109  tail -f csc-dev.txt
  110  sudo iptables -t nat -L
  111  sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-por                                                                ts 8080
  112  ./etc/rc.d/init.d/run-dev restart
  113  sh /etc/rc.d/init.d/run-dev restart
  114  tail -f csc-dev.txt
  115  ls /
  116  ls /dev
  117  ls /var
  118  ls /var/log
  119  ps -ef | grep java
  120  cd c-spider/
  121  ll
  122  ls -al
  123  cd dev
  124  ll
  125  ps -ef | grep mysql
  126  ps -ef | grep java
  127  date
  128  ls -ef
  129  ls -al
  130  date
  131  vi a.txt
  132  ll
  133  rm a.txt
  134  ps -ef | grep java
  135  vi /etc/rc.d/init.d/run-dev
  136  /etc/rc.d/init.d/run-dev
  137  /etc/rc.d/init.d/run-dev stop
  138  ps -ef | grep java
  139  /etc/rc.d/init.d/run-dev start
  140  ps -ef | grep java
  141  date
  142  /etc/rc.d/init.d/run-dev stop
  143  ps -ef | grep java
  144  /etc/rc.d/init.d/run-dev start
  145  vi /etc/rc.d/init.d/run-dev
  146  vi /home/ec2-user/log/csc-dev.txt
  147  tail -f /home/ec2-user/log/csc-dev.txt
  148  vi /home/ec2-user/log/csc-dev.txt
  149  /etc/rc.d/init.d/run-dev stop
  150  /etc/rc.d/init.d/run-dev start
  151  tail -f /home/ec2-user/log/csc-dev.txt
  152  /etc/rc.d/init.d/run-dev stop
  153  /etc/rc.d/init.d/run-dev start
  154  tail -f /home/ec2-user/log/csc-dev.txt
  155  /etc/rc.d/init.d/run-dev stop
  156  /etc/rc.d/init.d/run-dev start
  157  tail -f /home/ec2-user/log/csc-dev.txt
  158  vi /home/ec2-user/log/csc-dev.txt
  159  /etc/rc.d/init.d/run-dev stop
  160  /etc/rc.d/init.d/run-dev start
  161  tail -f /home/ec2-user/log/csc-dev.txt
  162  /etc/rc.d/init.d/run-dev stop
  163  /etc/rc.d/init.d/run-dev start
  164  tail -f /home/ec2-user/log/csc-dev.txt
  165  vi /home/ec2-user/log/csc-dev.txt
  166  /etc/rc.d/init.d/run-dev stop
  167  /etc/rc.d/init.d/run-dev start
  168  tail -f /home/ec2-user/log/csc-dev.txt
  169  /etc/rc.d/init.d/run-dev stop
  170  /etc/rc.d/init.d/run-dev start
  171  tail -f /home/ec2-user/log/csc-dev.txt
  172  /etc/rc.d/init.d/run-dev stop
  173  /etc/rc.d/init.d/run-dev start
  174  tail -f /home/ec2-user/log/csc-dev.txt
  175  ls -al
  176  tail -f /home/ec2-user/log/csc-dev.txt
  177  vi /home/ec2-user/log/csc-dev.txt
  178  ll
  179  cd c-spider/
  180  ll
  181  cd dev
  182  ls -al
  183  date
  184  cd
  185  vi /home/ec2-user/log/csc-dev.txt
  186  tail -f /home/ec2-user/log/csc-dev.txt
  187  vi /home/ec2-user/log/csc-dev.txt
  188  /etc/rc.d/init.d/run-dev stop
  189  /etc/rc.d/init.d/run-dev start
  190  tail -f /home/ec2-user/log/csc-dev.txt
  191  exit
  192  ls -al
  193  cd c-spider/
  194  ll
  195  cd ../log
  196  ll
  197  vi csc-dev.txt
  198  tail -f csc-dev.txt
  199  vi csc-dev.txt
  200  tail -f csc-dev.txt
  201  vi csc-dev.txt
  202  tail -f csc-dev.txt
  203  vi csc-dev.txt
  204  tail -f csc-dev.txt
  205  ps -ef | grep java
  206  history
  207  :q
  208  /etc/rc.d/init.d/run-dev stop
  209  /etc/rc.d/init.d/run-dev start
  210  tail -f csc-dev.txt
  211  ls -al
  212  pwd
  213  ls -al
  214  cd c-spider/
  215  ll
  216  cd dev
  217  ll
  218  cd ../..
  219  ll
  220  cd log
  221  ll
  222  tail -f csc-dev.txt
  223  vi csc-dev.txt
  224  ls /tmp
  225  ls -al /tmp
  226  ls -al /tmp/hsperfdata_ec2-user/
  227  ls -al /tmp/hsperfdata_root/
  228  ls -al /tmp/hsperfdata_root/8094
  229  ls -al /tmp/hsperfdata_ec2-user/6482
  230  ls -al /tmp/spring.log
  231  vi /tmp/spring.log
  232  date
  233  history
  234  /etc/rc.d/init.d/run-dev stop
  235  /etc/rc.d/init.d/run-dev status
  236  /etc/rc.d/init.d/run-dev start
  237  tail -f csc-dev.txt
  238  exit
  239  history
  240  ls
  241  cd log
  242  ll
  243  vi csc-dev.txt
  244  ll
  245  history
  246  /etc/rc.d/init.d/run-dev stop
  247  /etc/rc.d/init.d/run-dev status
  248  /etc/rc.d/init.d/run-dev start
  249  tail -f csc-dev.txt
  250  exit
  251  mysql --version
  252  exit
  253  ls -al
  254  tar -xvf cspider-0.0.1-SNAPSHOT-bundle.tar
  255  ls
  256  mkdir cspider-0.0.1-SNAPSHOT-bundle
  257  mv lib conf resources cspider-0.0.1-SNAPSHOT
  258  ll
  259  mv lib conf resources cspider-0.0.1-SNAPSHOT-bundle
  260  ll
  261  mv cspider-0.0.1-SNAPSHOT.jar cspider-0.0.1-SNAPSHOT-bundle
  262  ll
  263  cd target
  264  ll
  265  cd ..
  266  mv start*.sh cspider-0.0.1-SNAPSHOT-bundle
  267  ll
  268  cd cspider-0.0.1-SNAPSHOT-bundle
  269  ll
  270  export CSPIDER_HOME=/home/ec2-user/cspider-0.0.1-SNAPSHOT-bundle
  271  ll
  272  cd conf
  273  ll
  274  rm cspider.conf
  275  mv ~/cspider.conf .
  276  ll
  277  vi cspider.conf
  278  cd ..
  279  ll
  280  chmod u+x start*.sh
  281  ll
  282  ./startCspider.sh
  283  ps -ef | grep java
  284  ./startCspider.sh
  285  exit
  286  ll
  287  cd cspider-0.0.1-SNAPSHOT-bundle
  288  ll
  289  ./startClient.sh
  290  export CSPIDER_HOME=/home/ec2-user/cspider-0.0.1-SNAPSHOT-bundle
  291  ./startClient.sh
  292  mysqladmin -u root -p variables
  293  ls -al /etc
  294  vi /etc/my.cnf
  295  sudo vi /etc/my.cnf
  296  ls -al
  297  mysqladmin -uroot -p restart
  298  mysqladmin -uroot -p help
  299  mysqladmin -uroot -p --help
  300  mysqladmin -uroot -p status
  301  ls /etc/rc/d
  302  ls /etc/rc.d
  303  ls /etc/rc.d/init.d/
  304  sudo /etc/rc.d/init.d/
  305  sudo service mysqld status
  306  sudo service mysqld restart
  307  mysqladmin -uroot -p status
  308  sudo service mysqld status
  309  cd ~
  310  ll
  311  cd c-spider/
  312  ll
  313  cd dev
  314  ll
  315  ls -al /etc/rc.d/init.d/
  316  sudo /etc/rc.d/init.d/run-dev restart
  317  cd ..
  318  ll
  319  cd ..
  320  cd log/
  321  ll
  322  tail -f csc-dev.txt
  323  vi /etc/my.cnf
  324  sudo /etc/rc.d/init.d/run-dev stop
  325  sudo /etc/rc.d/init.d/run-dev restart
  326  tail -f csc-dev.txt
  327  sudo /etc/rc.d/init.d/run-dev restart
  328  tail -f csc-dev.txt
  329  sudo /etc/rc.d/init.d/run-dev stop
  330  sudo /etc/rc.d/init.d/run-dev status
  331  sudo /etc/rc.d/init.d/run-dev start
  332  tail -f csc-dev.txt
  333  cd ..
  334  ll
  335  cd cspider-0.0.1-SNAPSHOT-bundle
  336  ll
  337  ./startClient.sh
  338  sudo /etc/rc.d/init.d/run-dev stop
  339  sudo vi /etc/my.cnf
  340  history
  341  sudo service mysqld restart
  342  sudo mysqld status
  343  sudo service mysqld status
  344  ps -ef | grep mysql
  345  sudo /etc/rc.d/init.d/run-dev stop
  346  sudo /etc/rc.d/init.d/run-dev start
  347  ps -ef | grep java
  348  cd ..
  349  tail -f log/csc-dev.txt
  350  vi log/csc-dev.txt
  351  sudo /etc/rc.d/init.d/run-dev stop
  352  sudo /etc/rc.d/init.d/run-dev start
  353  tail -f log/csc-dev.txt
  354  cd cspider-0.0.1-SNAPSHOT-bundle
  355  ./startClient.sh
  356  cd ..
  357  wget localhost:8182
  358  ll
  359  cd cspider-0.0.1-SNAPSHOT-bundle
  360  ./startClient.sh
  361  exit
  362  ls
  363  ps -ef
  364  ps -ef | grep java
  365  cd /etc/rc.d
  366  ls
  367  cd init.d/
  368  ls
  369  ll
  370  run-dev restart
  371  ./run-dev restart
  372  ps -ef | grep java
  373  sudo kill -9 17051
  374  ./run-dev restart
  375  ps -ef | grep java
  376  ll
  377  ls
  378  cd
  379  ls
  380  cd log
  381  ls
  382  /etc/rc.d/init.d/run-dev restart
  383  tail -f csc-dev.txt
  384  history
  385  tail -f log/csc-dev.txt
  386  clear
  387  tail -f log/csc-dev.txt
  388  cd c-spider/
  389  ll
  390  tail -f log/csc-dev.txt
  391  cd ~
  392  tail -f log/csc-dev.txt
  393  ps -ef | grep java
  394  cd log
  395  ll
  396  vi csc-dev.txt
  397  tail -f csc-dev.txt
  398  vi csc-dev.txt
  399  ps -ef | grep java
  400  exit
  401  git
  402  ll
  403  sudo yum install git-all
  404  ll
  405  mkdir c-spider-wiremock
  406  ll
  407  cd c-spider-wiremock/
  408  git clone git@gitlab.com:cloud-insoft/csc-wm.git
  409  cd ~/.ssh
  410  ll
  411  ssh -keygen
  412  ll
  413  ssh-keygen
  414  ll
  415  cat id_rsa.pub
  416  cd ~/c-spider-wiremock/
  417  git clone git@gitlab.com:cloud-insoft/csc-wm.git
  418  ll
  419  cd csc-wm/
  420  ll
  421  cd ~/c-spider-wiremock/
  422  ll
  423  vi wiremock.sh
  424  ll
  425  vi wiremock.sh
  426  cd csc-wm/
  427  ll
  428  cd mappings/
  429  ll
  430  cd ..
  431  ll
  432  cd ..
  433  sh wiremock.sh
  434  cd csc-wm/mappings/
  435  ll
  436  q
  437  cd ~/c-spider-wiremock/
  438  ll
  439  sudo chmod 775 wiremock.sh
  440  ll
  441  cd ~/c-spider-wiremock
  442  ll
  443  cd ..
  444  ll
  445  cd ec2-user/
  446  ll
  447  cd c-spider-wiremock/
  448  ll
  449  cd csc-wm/
  450  ll
  451  cd ..
  452  ll
  453  sudo chmod 777 csc-wm/
  454  cd csc-wm/
  455  ls
  456  ls -d
  457  cd /home
  458  ll
  459  cd ec2-user/
  460  ll
  461  cd c-spider-wiremock/
  462  ll
  463  cd csc-wm/
  464  ll
  465  cd ..
  466  sudo chmod 775 csc-wm/
  467  ll
  468  cd csc-wm/
  469  ll
  470  sudo chomd 775 wiremock-standalone-2.5.1.jar
  471  sudo chmod 775 wiremock-standalone-2.5.1.jar
  472  ll
  473  java -jar wiremock-standalone-2.5.1.jar --port 8182
  474  ps -ef
  475  ps -ef | grep server
  476  nohup java -jar wiremock-standalone-2.5.1.jar --httpPort 8182
  477  ps-ef
  478  ps -ef
  479  kill 4732
  480  ps -ef
  481  cd c-spider-wiremock/csc-wm/
  482  l
  483  ll
  484  java -jar wiremock-standalone-2.5.1.jar --httpsPort=8182
  485  java -jar wiremock-standalone-2.5.1.jar --port 8182
  486  netstat -nap | grep 8182
  487  netstat
  488  ps -ef | grep java
  489  kill -9 5265
  490  ll
  491  ps -ef | grep java
  492  java -jar wiremock-standalone-2.5.1.jar --port 8182
  493  ps -ef | grep java
  494  nohup java -jar wiremock-standalone-2.5.1.jar --port 8182 &
  495  ps -ef
  496  ll
  497  cd ..
  498  ll
  499  vi wiremock.sh
  500  curl -X POST --data '' http://localhost:8182/__admin/scenarios/reset
  501  curl -X POST --data '' http://52.79.171.135:8182/__admin/mappings/reset
  502  curl -X POST --data '' http://http://52.79.171.135:8182/__admin/scenarios                                                                /reset
  503  curl -X POST --data '' http://52.79.171.135:8182/__admin/scenarios/reset
  504  curl -X POST --data '' http://52.79.171.135:8182/__admin/scmappings/reset
  505  curl -X POST --data '' http://52.79.171.135:8182/__admin/mappings/reset
  506  curl -X POST --data '' http://52.79.171.135:8182/__admin/scenarios/reset
  507  ll
  508  vi wiremock.sh
  509  ps -ef | grep wire
  510  ps -ef | grep wiremock
  511  ps -ef | grep wiremock-standalone
  512  vi wiremock.sh
  513  sh wiremock.sh
  514  vi wiremock.sh
  515  PID=`ps -ef | grep wiremock-standalone | awk '{print $2}'`
  516  echo PID
  517  echo $PID
  518  PID=`ps -ef | grep wiremock-standalone | awk '{print $1}'`
  519  echo $PID
  520  PID=`ps -ef | grep wiremock-standalone | awk '{print $2}'`
  521  PID=`ps -ef | grep wiremock-standalone | grep -v grep | awk '{print $1}'`
  522  PID=`ps -ef | grep wiremock-standalone | grep -v grep | awk '{print $2}'`
  523  echo $PID
  524  ps -ef
  525  echo $PID
  526  vi wiremock.sh
  527  ll
  528  sh wiremock.sh
  529  vi wiremock.sh
  530  sh wiremock.sh
  531  vi wiremock.sh
  532  ps -ef | grep wiremock
  533  ps -ef
  534  ll
  535  vi wiremock.sh
  536  ll
  537  cd c-spider-wiremock/
  538  ls
  539  cs csc-wm/
  540  ls
  541  cd csc-wm/
  542  ls
  543  cd ..
  544  vi wiremock.sh
  545  ll
  546  cd csc-wm/
  547  ls
  548  java -jar wiremock-standalone-2.5.1.jar --port 8182
  549  ps -ef | grep java
  550  java -jar wiremock-standalone-2.5.1.jar --port 8182 &
  551  ll
  552  cd mappings/
  553  ls
  554  ll
  555  ls
  556  cd log
  557  ls
  558  tail -f csc-dev.txt
  559  lks
  560  ls
  561  cd ..
  562  ls
  563  cd c-spider
  564  ls
  565  cd dev/
  566  ls
  567  cd c-spider.war
  568  cd target/
  569  ls
  570  cd ..
  571  ls
  572  vi c-spider.war
  573  ps -ef | grep java
  574  ll
  575  cd c-spider-wiremock/
  576  ls
  577  vi wiremock.sh
  578  sh wiremock.sh
  579  ps -ef | grep java
  580  vi wiremock.sh
  581  free -m
  582  ll
  583  cd c-spider
  584  ls
  585  cd ..
  586  ls
  587  ping 127.0.0.1
  588  exi
  589  exit
  590  ll
  591  qa-run restart
  592  exit
  593  ll
  594  sh qa-run
  595  sh qa-run restart
  596  sh qa-run stop
  597  sh qa-run start
  598  dev-run start
  599  service dev-run start
  600  service run-dev restart
  601  service qa-run restart
  602  qa-run restart
  603  sh qa-run restart
  604  sh qa-run start
  605  sh qa-run.sh start
  606  service run-dev restart
  607  ps -ef | grep java
  608  service run-dev restart
  609  cd /etc/rc.d/init.d/
  610  vi run-dev
  611  ll
  612  cd /etc/
  613  cd init.d
  614  ls
  615  cd ..
  616  ls
  617  service run-dev restart
  618  cd /etc/rc.d/
  619  cd init.d/
  620  ls
  621  vi run-dev
  622  ls -al
  623  ps -ef | grep java
  624  service run-dev restart
  625  cd
  626  ls
  627  cd log
  628  ls
  629  tail -f csc-dev.txt
  630  ps -ef | grep java
  631  ls
  632  rm -rf target/
  633  ls
  634  cd ..
  635  service run-dev restart
  636  tail -f csc-dev.txt
  637  ll
  638  cd c-spider
  639  ls
  640  cd dev
  641  ls
  642  cd ..
  643  ls
  644  cd ..
  645  cd log
  646  ls
  647  tail -f csc-dev.txt
  648  ls
  649  cd ..
  650  ls
  651  ll
  652  cd ..
  653  ls
  654  cd ec2-user/
  655  ls
  656  cd target/
  657  ls
  658  cd ..
  659  rm -rf target/
  660  service run-dev restart
  661  tail -f csc-dev.txt
  662  cd c-spider
  663  ll
  664  ls
  665  cd dev
  666  ls
  667  tail -f csc-dev.txt
  668  cd ..
  669  ls
  670  cd ..
  671  ls
  672  cd log
  673  ls
  674  tail -f csc-dev.txt
  675  cd ..
  676  ls
  677  cd ..
  678  ls
  679  cd
  680  ls
  681  cd c-spider
  682  ls
  683  cd dev
  684  ls
  685  rm -rf target/
  686  ls
  687  rm -rf target/
  688  sudo rm -rf target/
  689  ls
  690  cd ..
  691  ls
  692  cd ..
  693  ls
  694  service run-dev restart
  695  cd log
  696  ls
  697  tail -f csc-dev.txt
  698  java -version
  699  ps -ef | grep java
  700  ll
  701  cd c-spider
  702  ll
  703  cd dev
  704  ll
  705  cd ~
  706  /etc/rc.d/init.d/run-dev restart
  707  cd log
  708  ll
  709  vi csc-dev.txt
  710  tail -f csc-dev.txt
  711  apt-get install -y rrdtool
  712  yum search apt-get
  713  yum search apt
  714  yum list apt
  715  yum list rrdtool
  716  yum install rrdtool
  717  sudo yum install rrdtool
  718  ll
  719  ps -ef | grep java
  720  df -h
  721  du -h
  722  ll
  723  cd c-spider
  724  ll
  725  cd dev
  726  ll
  727  cd ..
  728  ll
  729  cd ..
  730   cd log
  731  ls -al
  732  vi csc-dev.txt
  733  ls -al
  734  cd ..
  735  ls -al
  736  cat qa-run
  737  sudo service status all
  738  sudo service
  739  sudo service --status-all
  740  ls -al
  741  ls -al /etc
  742  ls -al /
  743  cd /etc/init.d
  744  ll
  745  cd /etc/rc.d/init.d
  746  ll
  747  vi run-dev
  748  rrdtool
  749  ll
  750  mkdir monitoring
  751  cd monitoring/
  752  cd ..
  753  l
  754  ll
  755  history
[ec2-user@ip-172-31-23-92 ~]$ sudo chmod 777 monitoring/
[ec2-user@ip-172-31-23-92 ~]$ ll
total 8152
drwxrwxr-x 3 ec2-user ec2-user    4096 Jan 17 05:02 c-spider
drwxrwxr-x 6 ec2-user ec2-user    4096 Feb 13 04:25 cspider-0.0.1-SNAPSHOT-bundl                                                                e
-rw-rw-r-- 1 ec2-user ec2-user 8314880 Feb 13 03:50 cspider-0.0.1-SNAPSHOT-bundl                                                                e.tar
-rw-rw-r-- 1 ec2-user ec2-user       0 Mar 23 06:07 c-spider.txt
drwxrwxr-x 3 ec2-user ec2-user    4096 Mar 20 09:27 c-spider-wiremock
drwxrwxr-x 2 ec2-user ec2-user    4096 Mar 24 01:11 log
drwxrwxrwx 2 ec2-user ec2-user    4096 Mar 29 07:27 monitoring
-rwxr-xr-x 1 ec2-user ec2-user     981 Mar 23 06:01 qa-run
-rwxr-xr-x 1 ec2-user ec2-user     981 Mar 23 06:04 qa-run.sh
drwxrwxr-x 3 ec2-user ec2-user    4096 Mar 24 01:11 target
[ec2-user@ip-172-31-23-92 ~]$ ll
total 8152
drwxrwxr-x 3 ec2-user ec2-user    4096 Jan 17 05:02 c-spider
drwxrwxr-x 6 ec2-user ec2-user    4096 Feb 13 04:25 cspider-0.0.1-SNAPSHOT-bundl                                                                e
-rw-rw-r-- 1 ec2-user ec2-user 8314880 Feb 13 03:50 cspider-0.0.1-SNAPSHOT-bundl                                                                e.tar
-rw-rw-r-- 1 ec2-user ec2-user       0 Mar 23 06:07 c-spider.txt
drwxrwxr-x 3 ec2-user ec2-user    4096 Mar 20 09:27 c-spider-wiremock
drwxrwxr-x 2 ec2-user ec2-user    4096 Mar 24 01:11 log
drwxrwxrwx 2 ec2-user ec2-user    4096 Mar 29 07:36 monitoring
-rwxr-xr-x 1 ec2-user ec2-user     981 Mar 23 06:01 qa-run
-rwxr-xr-x 1 ec2-user ec2-user     981 Mar 23 06:04 qa-run.sh
drwxrwxr-x 3 ec2-user ec2-user    4096 Mar 24 01:11 target
[ec2-user@ip-172-31-23-92 ~]$ sudo chmod 755 monitoring/
[ec2-user@ip-172-31-23-92 ~]$ ll
total 8152
drwxrwxr-x 3 ec2-user ec2-user    4096 Jan 17 05:02 c-spider
drwxrwxr-x 6 ec2-user ec2-user    4096 Feb 13 04:25 cspider-0.0.1-SNAPSHOT-bundl                                                                e
-rw-rw-r-- 1 ec2-user ec2-user 8314880 Feb 13 03:50 cspider-0.0.1-SNAPSHOT-bundl                                                                e.tar
-rw-rw-r-- 1 ec2-user ec2-user       0 Mar 23 06:07 c-spider.txt
drwxrwxr-x 3 ec2-user ec2-user    4096 Mar 20 09:27 c-spider-wiremock
drwxrwxr-x 2 ec2-user ec2-user    4096 Mar 24 01:11 log
drwxr-xr-x 2 ec2-user ec2-user    4096 Mar 29 07:36 monitoring
-rwxr-xr-x 1 ec2-user ec2-user     981 Mar 23 06:01 qa-run
-rwxr-xr-x 1 ec2-user ec2-user     981 Mar 23 06:04 qa-run.sh
drwxrwxr-x 3 ec2-user ec2-user    4096 Mar 24 01:11 target
[ec2-user@ip-172-31-23-92 ~]$ cd monitoring/
[ec2-user@ip-172-31-23-92 monitoring]$ ll
total 12444
-rw-r--r-- 1 ec2-user ec2-user 12740096 Mar 29 07:36 cspider-0.0.1-SNAPSHOT-bund                                                                le.tar
[ec2-user@ip-172-31-23-92 monitoring]$
