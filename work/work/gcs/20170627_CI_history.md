
KyeongSeo@DESKTOP-85O0M6R MINGW64 /
$ ssh -i /d/repos/aws/pem/챠.pem ec2-user@52.192.196.32
Warning: Identity file /d/repos/aws/pem/챠.pem not accessible: No such file or directory.
Permission denied (publickey).

KyeongSeo@DESKTOP-85O0M6R MINGW64 /
$ ssh -i /d/repos/aws/pem/CI.pem ec2-user@52.192.196.32
Last login: Tue Jun 20 05:07:18 2017 from 220.86.29.38

       __|  __|_  )
       _|  (     /   Amazon Linux AMI
      ___|\___|___|

https://aws.amazon.com/amazon-linux-ami/2016.03-release-notes/
63 package(s) needed for security, out of 150 available
Run "sudo yum update" to apply all updates.
Amazon Linux version 2017.03 is available.
[ec2-user@ip-172-31-25-172 ~]$ history
    1  ps -al
    2  ls -al
    3  sudo chmod 400 seoul.qa.playground.pem
    4  ls
    5  ls -al
    6  sudo chmod 777 seoul.qa.playground.pem
    7  ls -al
    8  sudo chmod 400 seoul.qa.playground.pem
    9  ls
   10  cd /
   11  ls
   12  cd home
   13  ls
   14  ls
   15  cd
   16  ls
   17  cd keys
   18  ls
   19  ls
   20  ls -al
   21  sudo mv seoul.qa.playground.pem  /home/jenkins
   22  ls
   23  cd /home
   24  ls
   25  cd jenkins/
   26  ls
   27  ls -al
   28  chown -R jenkins
   29  chown -R seoul.qa.playground.pem jenkins
   30  chown -R jenkins:jenkins seoul.qa.playground.pem
   31  sudo chown -R jenkins:jenkins seoul.qa.playground.pem
   32  ls -al
   33  cd /var/lib/jenkins/
   34  ls
   35  vi credentials.xml
   36  su - jenkins
   37  su jenkins
   38  vi credentials.xml
   39  88Wzna9tfuC2DuMt4YojrA==
   40  su jenkins
   41  su jenkins
   42  su jenkins
   43  ls
   44  cd
   45  ls
   46  cd /home/jenkins/
   47  ls
   48  sudo /home/jenkins/
   49  sudo cd /home/jenkins/
   50  ls
   51  su
   52  sudo su
   53  ls
   54  cd /
   55  ls
   56  sudo su
   57  su - jenkins
   58  sudo su
   59  su ec2-user
   60  ps -ef |grep jenkins
   61  sudo su jenkins
   62  sudo vi /etc/sudoers
   63  su ec2-user
   64  sudo su - jenkins
   65  sudo su -jenkins
   66  sudo su jenkins
   67  sudo su
   68  sudo su jenkins
   69  sudo su Jenkins
   70  sudo su jenkins
   71  ssh ec2-user@52.78.133.144
   72  ssh -A ec2-user@52.78.133.144
   73  pwd
   74  ls
   75  ssh -A ec2-user@52.78.133.144
   76  ssh -A ec2-user@52.78.133.144
   77  ssh ec2-user@52.78.133.144
   78  ps -ef | grep ssh-agent
   79  sudo ssh ec2-user@52.78.133.144
   80  ssh -A ec2-user@52.78.133.144
   81  ssh-add
   82  sudo ssh-add
   83  clear
   84  ps -ef | grep ssh
   85  kill -9 21338
   86  ps -ef | grep ssh
   87  ps -ef | grep ssh
   88  eval `ssh-agent -s`
   89  ls
   90  ssh-add
   91  ssh-add seoul.qa.playground.pem
   92  ls
   93  ssh ec2-user@52.78.133.144
   94  ssh ec2-user@52.78.133.144
   95  ssh ec2-user@52.78.133.144
   96  whoami
   97  ssh ec2-user@52.78.133.144
   98  sudo su jenkins
   99  sudo su -s /bin/bash jenkins
  100  su jenkins
  101  sudo su jenkins
  102  sudo su
  103  sudo su
  104  clear
  105  ls
  106  cd /var/lib/jenkins/
  107  ls
  108  clear
  109  cd jobs
  110  ls
  111  cd ..
  112  ls
  113  clear
  114  ls -al
  115  clear
  116  ll
  117  clear
  118  ls
  119  clear
  120  ls -al
  121  cd .ssh
  122  ls
  123  cd ..
  124  ls
  125  clear
  126  ls -al
  127  rm -rf 1.txt
  128  sudo rm -rf 1.txt
  129  sudo rm -rf a.sh
  130  mkdir scripts
  131  cd script
  132  ls
  133  sudo mkdir scripts
  134  cd scrip[ts
  135  cd scripts
  136  ls
  137  vi qa.playground
  138  sudo vi qa.playground
  139  sudo chown -R jenkins: scripts
  140  cd ..
  141  sudo chown -R jenkins: scripts
  142  cd scripts/
  143  ls -al
  144  cd ..
  145  cd scripts/
  146  ls
  147  sudo mv qa.playground qa.playground.sh
  148  ls
  149  ./qa.playground.sh
  150  sudo ./qa.playground.sh
  151  sudo qa.playground.sh
  152  ls
  153  sudo mv qa.playground qa-playground.sh
  154  sudo mv qa.playground.sh qa-playground.sh
  155  sudo qa-playground.sh
  156  sudo sh qa-playground.sh
  157  sudo vi qa-playground.sh
  158  sudo sh qa-playground.sh
  159  cd
  160  cd /home/jenkins
  161  ls
  162  cd /var/lib/jenkins/
  163  ls
  164  cd scripts
  165  ls
  166  sudo vi qa-playground.sh
  167  ls
  168  sudo vi seoul-public.sh
  169  vi qa-playground.sh
  170  sudo vi seoul-public.sh
  171  clear
  172  sh qa-playground.sh
  173  vi qa-playground.sh
  174  ls -al
  175  chown jenkins: seoul-public.sh
  176  sudo chown jenkins: seoul-public.sh
  177  ls -al
  178  sudo vi seoul-public.sh
  179  sudo sh qa-playground.sh
  180  ls
  181  ssh-add
  182  ps -ef | grep ssh-agent
  183  vi qa-playground.sh
  184  ls
  185  sudo vi qa-playground.sh
  186  ls
  187  ROOT.war  sample-3.1.1.war
  188  ls
  189  seoul-public.sh
  190  vi seoul-public.sh
  191  vi qa-playground.sh
  192  sh qa-playground.sh
  193  pwd
  194  vi qa-playground.sh
  195  sudo vi qa-playground.sh
  196  sudo vi seoul-public.sh
  197  sudo vi qa-playground.sh
  198  sudo vi seoul-public.sh
  199  sudo qa-playground.sh
  200  sudo sh qa-playground.sh
  201  sudo vi qa-playground.sh
  202  sudo sh qa-playground.sh
  203  sudo vi qa-playground.sh
  204  sudo sh qa-playground.sh
  205  ps -ef | grep ssh-agent
  206  ssh
  207  kill -9 21507
  208  ssh-add
  209  ls
  210  sudo vi qa-playground.sh
  211  sudo vi seoul-public.sh
  212  ssh-add
  213  ssh-agent -s
  214  ssh-add
  215  ps -ef | grep ssh-agnet
  216  ps -ef | grep ssh-agent
  217  kill -9 27020
  218  sudo ssh-add
  219  eval `ssh-agent -s`
  220  ssh-add
  221  ssh-add /home/jenkins/seoul.qa.playground.pem
  222  sidp ssh-add /home/jenkins/seoul.qa.playground.pem
  223  sudo ssh-add /home/jenkins/seoul.qa.playground.pem
  224  ssh-add /home/jenkins/seoul.qa.playground.pem
  225  cd /home/jenkins/
  226  ls
  227  ls -al
  228  mv seoul.qa.playground.pem seoul.qa.playground2.pem
  229  ls
  230  ll
  231  mv seoul.qa.playground.pem2 seoul.qa.playground.pem
  232  sudo mv seoul.qa.playground.pem2 seoul.qa.playground.pem
  233  sudo mv seoul.qa.playground2.pem seoul.qa.playground.pem
  234  cp seoul.qa.playground.pem seoul.qa.playground2.pem
  235  sudo cp seoul.qa.playground.pem seoul.qa.playground2.pem
  236  ls
  237  ls -al
  238  cd /var/lib/jenkins/
  239  ls
  240  cd scripts/
  241  ls
  242  clear
  243  ssh-add /home/jenkins/seoul.qa.playground2.pem
  244  sudo chown ec2-user: /home/jenkins/seoul.qa.playground2.pem
  245  ssh-add /home/jenkins/seoul.qa.playground2.pem
  246  vi qa-playground.sh
  247  sh qa-playground.sh
  248  ps -ef | grep ssh-agent
  249  vi seoul-public.sh
  250  sudo vi seoul-public.sh
  251  ls -al
  252  vi test.sh
  253  sudo vi test.sh
  254  sudo sh qa-playground.sh
  255  ssh-add
  256  vi qa-playground.sh
  257  vi seoul-public.sh
  258  sudo vi seoul-public.sh
  259  sh qa-playground.sh
  260  sudo vi seoul-public.sh
  261  sh qa-playground.sh
  262  pwd
  263  ls
  264  sudo vi seoul-public.sh
  265  ls
  266  ll
  267  sudo vi shell.sh
s 268  sh shell.sh
  292  sudo chmod 777 shell.sh
  293  sh shell.sh l.sh
  294  sudo vi shell.sh
  295  ls -ali shell.sh
  296  ps -ef | grep ssh-agent
  297  kill -9 27339.sh
  298  sudo kill -9 27339
  299  sudo kill -9 27325
  300  sudo kill -9 27307
  301  ps -ef | grep ssh-agent
  302  sudo kill -9 27031
  303  ls shell.sh
  304  sudo etc/passwd
  305  sudo vi /etc/passwd
  306  sudo su jenkinsh-agent
  307  sudo vi /etc/passwd
  308  sudo vi /etc/sudoersent
  309  cd /etc/shell.sh
  310  ls -al
  311  sudoedsh
  312  vi sudoers.d
  313  vi sudoersshell.sh
  314  sudo vi sudoers.sh
  315  cd /var/lib/jenkins/scripts/
  316  ls
  317  vi shell.sh
  318  ps ef | grep ssh-agent
  319  ps -ef | grep ssh-agent
  320  kill -9 27385
  321  sudo kill -9 27385
  322  sudo kill -9 27554
  323  sudo vi /etc/passwd
  324  su jenkins
  325  sudo su jenkins
  326  sudo vi /etc/passwd
  327  sudo vi /etc/sudoers
  328  vi shell.sh
  329  cd /var/lib/jenkins/jobs/
  330  ls
  331  cd test/
  332  ls
  333  vi /etc/sysconfig/jenkins
  334  sudo vi /etc/sysconfig/jenkins
  335  cd /etc/sysconfig
  336  ls
  337  ls -al
  338  sudo vi jenkins
  339  sudo chwon -R ec2-user:ec2-user /var/lib/jenkins
  340  sudo chown -R ec2-user:ec2-user /var/lib/jenkins
  341  sudo chown -R ec2-user:ec2-user /var/cache/jenkins
  342  sudo chown -R ec2-user:ec2-user /var/log/jenkins
  343  ps -ef | grep jenkins
  344  cd /var/lib/
  345  ls
  346  ls -al
  347  service jenkins restart
  348  sudo service jenkins restart
  349  ps -ef | grep jenkins
  350  cd jenkins/
  351  ls
  352  cd scripts/
  353  ls
  354  vi shell.sh
  355  ssh-add
  356  eval `ssh-agent -s`
  357  cd /home/jenkins
  358  ls
  359  ll
  360  mv seoul.qa.playground2.pem ~/keys/playground/seoul.qa.playground.pem
  361  sudo mv seoul.qa.playground2.pem ~/keys/playground/seoul.qa.playground.pem
  362  cd
  363  mkdir keys
  364  ls
  365  cd keys/
  366  ls
  367  ll
  368  mkdir playground
  369  cd /var/lib/jenkins/
  370  mv seoul.qa.playground2.pem ~/keys/playground/seoul.qa.playground.pem
  371  ll
  372  ls
  373  clear
  374  cd /home/jenkins/
  375  mv seoul.qa.playground2.pem ~/keys/playground/seoul.qa.playground.pem
  376  cd
  377  ls
  378  cd keys/
  379  ls
  380  cd playground/
  381  ll
  382  ssh-add -k seoul.qa.playground.pem
  383  ssh -A ec2-user@52.78.133.144
  384  cd /var/lib/jenkins/
  385  ls
  386  cd scripts/
  387  vi shell.sh
  388  ssh -A ec2-user@52.78.133.144
  389  ll
  390  sh shell.sh
  391  ps -ef | grep ssh-agent
  392  sh shell.sh
  393  ps -ef | grep ssh-agent
  394  kill -9 5335
  395  kill -9 27881
  396  kill -9 27965
  397  kill -9 27974
  398  vi shell.sh
  399  ssh -A ec2-user@52.78.133.144
  400  eval 'ssh-agent -s'
  401  ssh-add
  402  eval 'ssh-agent -s'
  403  ssh add
  404  ssh-add
  405  clear
  406  ps -ef | grep ssh-agent
  407  kill -9 27996
  408  kill -9 28002
  409  ssh-agent
  410  kill -9 28002
  411  ps -ef | grep ssh-agent
  412  shh-add
  413  ssh-add
  414  eval `ssh-agent -s`
  415  ssh-add
  416  vi shell.sh
  417  exec ssh-agent bash
  418  ssh-add
  419  vi shell.sh
  420  ssh-add
  421  vi shell.sh
  422  cd ~/.ssh/
  423  ls
  424  vi config
  425  pwd
  426  vi config
  427  ls
  428  ll
  429  chmod 777 config
  430  rm -rf config
  431  vi config
  432  ll
  433  vi /var/lib/jenkins/scripts/shell.sh
  434  cd
  435  ls
  436  cd /var/lib/jenkins/scripts/
  437  ls
  438  sh shell.sh
  439  ps -ef | grep ssh-agent
  440  kill -9 28157
  441  kill -9 28066
  442  kill -9 28017
  443  ps -ef | grep ssh-agent
  444  kill -9 28009
  445  kill -9 28173
  446  ssh-add
  447  vi she
  448  vi shell.sh
  449  vi sh
  450  vi shell.sh
  451  ps -ef | grep ssh-agent
  452  vi shell.sh
  453  ps -ef | grep ssh-agent
  454  vi shell.sh
  455  ps -ef | grep ssh-agent
  456  kill -9 28203
  457  vi shell.sh
  458  ssh-add
  459  kill -9 28237
  460  eval $(ssh-agent -s)
  461  ssh-add
  462  ps -ef | grep ssh-agent
  463  ssh-add -k ~/keys/playground/seoul.qa.playground.pem
  464  ssh -A 52.78.133.144
  465  ps -ef | grep ssh-agent
  466  vi shell.sh
  467  ps -ef | grep ssh-agent
  468  vi shell.sh
  469  ssh-agent
  470  ps -ef | grep ssh-agent
  471  ssh-agent
  472  ps -ef | grep ssh-agent
  473  SSH_AGENT_PID
  474  echo $SSH_AGENT_PID
  475  kill -9 28258
  476  echo $SSH_AGENT_PID
  477  ps -ef | grep ssh-agent
  478  echo $SSH_AGENT_PID
  479  kill 28285
  480  echo $SSH_AGENT_PID
  481  echo $SSH_AGENT_PI
  482  echo $SSH_AGENT_PID
  483  eval `ssh-agent-k`
  484  eval `ssh-agent -k`
  485  ps -ef | grep ssh-agent
  486  kill -9 28311
  487  kill -9 28358
  488  kill -9 28362
  489  ps -ef | grep ssh-agent
  490  vi shell.sh
  491  ps -ef | grep ssh-agent
  492  c;ear
  493  clear
  494  cd /home/jenkins
  495  ls
  496  cd ./ssh
  497  cd /var/lib/jenkins
  498  cd ./ssh
  499  cd .ssh
  500  ls
  501  sudo service jenkins restart
  502  pwd
  503  ls -al
  504  pwd
  505  vi id_rsa
  506  vi id_rsa.pub
  507  ls
  508  cd
  509  ls
  510  mkdir scripts
  511  cd scripts/
  512  mkdir playground
  513  cd /var/lib/jenkins/scripts/
  514  ls
  515  vi shell.sh
  516  cd ..
  517  ls
  518  rm -rf scripts
  519  cd
  520  ls
  521  cd scripts
  522  ls
  523  cd playground/
  524  vi seoul-playground
  525  vi seoul-playground.sh
  526  ls
  527  pwd
  528  vi seoul-playground.sh
  529  sh seoul-playground.sh
  530  vi seoul-playground.sh
  531  sh seoul-playground.sh
  532  vi seoul-playground.sh
  533  sh seoul-playground.sh
  534  vi seoul-playground.sh
  535  sh seoul-playground.sh
  536  vi seoul-playground.sh
  537  sh seoul-playground.sh
  538  vi seoul-playground.sh
  539  sh seoul-playground.sh
  540  vi seoul-playground.sh
  541  sh seoul-playground.sh
  542  vi seoul-playground.sh
  543  ssh ec2-user@10.0.3.19
  544  vi seoul-playground.sh
  545  ls
  546  cd
  547  ls
  548  cd scripts/
  549  ls
  550  cd playground/
  551  ls
  552  vi seoul-playground.sh
  553  ls
  554  cd
  555  ls
  556  cd scripts/
  557  ls
  558  cd playground/
  559  ls
  560  vi seoul-playground.sh
  561  sh seoul-playground.sh
  562  vi seoul-playground.sh
  563  sh seoul-playground.sh
  564  vi seoul-playground.sh
  565  sh seoul-playground.sh
  566  cd
  567  cd keys/
  568  ls
  569  cd pls
  570  cd playground/
  571  ls -al
  572  cd .
  573  ls
  574  cd .
  575  ls
  576  cd ~
  577  ls
  578  ssh keygen
  579  clear
  580  ssh -i /d/dev/keys/se
  581  ls
  582  cd scripts/
  583  ls
  584  pwd
  585  cd playground/
  586  ls
  587  vi seoul-playground.sh
  588  sh seoul-playground.sh
  589  vi seoul-playground.sh
  590  ll
  591  pwd
  592  cd
  593  ls
  594  cd keys/
  595  ls
  596  cd playground/
  597  ls
  598  ssh -i seoul.qa.playground.pem ec2-user@52.78.148.182
  599  cd
  600  ls
  601  cd scripts/
  602  ls
  603  cd playground/
  604  ls
  605  vi seoul-playground.sh
  606  sh seoul-playground.sh
  607  ls
  608  cd scripts/
  609  ls
  610  cd playground/
  611  vi seoul-playground.sh
  612  sudo vi seoul-playground.sh
  613  sh seoul-playground.sh
  614  sudo vi seoul-playground.sh
  615  sh seoul-playground.sh
  616  sudo vi seoul-playground.sh
  617  sh seoul-playground.sh
  618  ps -ef | grep ssh-agnet
  619  ps -ef | grep ssh-agent
  620  sudo vi seoul-playground.sh
  621  ps -ef | grep nginx
  622  cd ~/scripts/playground/
  623  ll
  624  vi seoul-playground.sh
  625  cd ~/scripts/playground/
  626  vi seoul-playground.sh
  627  cd ~/scripts/playground/
  628  vi seoul-playground.sh
  629  cd ~/scripts/playground/
  630  ll
  631  vi seoul-playground.sh
  632  cp seoul-playground.sh seoul-playground-prod.sh
  633  ll
  634  vi seoul-playground-prod.sh
  635  cd ~/scripts/playground/
  636  ll
  637  rm .seoul-playground-prod.sh.swp
  638  cd ~/scripts/playground/
  639  ll
  640  cd ~/scripts/playground/
  641  ll
  642  vi seoul-playground
  643  vi seoul-playground.sh
  644  cd ~/scripts/playground/
  645  vi seoul-playground.sh
  646  logout
  647  cd ~/scripts/playground/
  648  vi seoul-playground.sh
  649  vi seoul-playground-prod.sh
  650  cd ~/keys/playground/
  651  ll
  652  cd ~/scripts/playground/
  653  vi seoul-playground-prod.sh
  654  logout
  655  eval `ssh-agent -s`
  656  ssh-add -k ~/keys/playground/seoul.qa.playground.pem
  657  ssh -A ec2-user@52.78.17.118
  658  eval `ssh-agent -k`
  659  logout
  660  ls
  661  cd scripts/
  662  ls
  663  vi playground/
  664  cd playground/
  665  ls
  666  sudo vi seoul-playground.sh
  667  sh seoul-playground.sh
  668  ls
  669  vi seoul-playground-prod.sh
  670  sudo vi seoul-playground.sh
  671  vi scripts/playground/seoul-playground-prod.sh
  672  cd scripts/playground/
  673  ll
  674  vi seoul-playground-prod.sh
  675  cd ~/scripts/playground/
  676  vi seoul-playground-prod.sh
  677  exit
  678  cd ~/scripts/playground/
  679  ll
  680  vi seoul-playground.sh
  681  ls
  682  yum list redis
  683  yum list java
  684  yum list java*
  685  yum list redis*
  686  yum --enablerepo=epel,remi install redis
  687  sudo yum --enablerepo=epel,remi install redis
  688  service redis start
  689  sudo service redis start
  690  redis-cli
  691  netstat  -ln
  692  rpm -qa | grep redis
  693  cd /etc
  694  ll
  695  vi sysctl.conf
  696  redis-cli
  697  vi redis.conf
  698  sudo vi redis.conf
  699  sudo service redis restart
  700  redis_version
  701  redis-server
  702  redis-server --version
  703  vi ~/scripts/playground/seoul-playground.sh
  704  exit
  705  ls a-l
  706  cd /
  707  ls -al
  708  cd ~
  709  cd scripts/
  710  ls playground/
  711  ls -al
  712  cd playground/
  713  ls -al
  714  vi seoul-playground-prod.sh
  715  ps -ef | grep redis
  716  cd /etc/init.d/
  717  ls -al
  718  cd ..
  719  ls -al
  720  cd ~
  721  ls -al
  722  sudo -u
  723  sudo -i
  724  cd ~
  725  cd scripts/
  726  ls -al
  727  cd playground/
  728  ls -al
  729  vi seoul-playground
  730  vi seoul-playground.sh
  731  ps -ef | grep redis
  732  sudo -i
  733  ls
  734  maven home
  735  maven
  736  HAVEN_HOME
  737  java --version
  738  maven --version
  739  ps -ef | grep java
  740  java -version
  741  maven -version
  742  mvn -version
  743  cd /usr/share/apache-maven/
  744  ls
  745  cd conf
  746  ls
  747  vi settings.xml
  748  vm settings.xml _settings.xml
  749  mv settings.xml _settings.xml
  750  sudo mv settings.xml _settings.xml
  751  ls
  752  ps -ef
  753  ps -ef | arti*
  754  ps -ef | grep "arti*"
  755  sudo service artifactory check
  756  sudo service artifactory stop
  757  sudo service artifactory start
  758  history
  759  sudo service artifactory check
  760  ARTIFACTORY_HOME
  761  ll
  762  cd /
  763  ll
  764  cd /var/opt/jfrog/artifactory/
  765  ll
  766  cd logs/
  767  ll
  768  cd catalina
  769  ll
  770  tail -f catalina.out
  771  history
  772  cd /usr/share/apache-maven/conf/
  773  ll
  774  vi _settings.xml
  775  sudo mv _settings.xml settings.sml
  776  ll
  777  sudo mv settings.sml settings.xml
  778  ll
  779  sudo mv settings.xml _settings.xml
  780  ll
  781  history
  782  cd /usr/share/apache-maven/conf/
  783  sudo mv _settings.xml settings.xml
  784  ll
  785  mvn -version
  786  yum installed tomcat?
  787  tomcat7
  788  chkconfig --list | grep tomcat
  789  ps -ef
  790  cd ~/scripts/
  791  ls -al
  792  cd playground/
  793  ls -al
  794  vi seoul-playground
  795  vi seoul-playground.sh
  796  exit
  797  cd scripts/playground/
  798  ll
  799  vi seoul-playground-prod.sh
  800  ps -ef | grep redis
  801  cd /etc/init.d/
  802  ls -al
  803  sudo service redis stop
  804  ls -al
  805  cd /
  806  ls -al
  807  cd /home/ec2-user/
  808  ls -al
  809  cd .aws/
  810  ls -al
  811  cd ..
  812  ls -al
  813  cd /work
  814  cd .he
  815  cd .jenkins/
  816  ls -al
  817  cd ..
  818  l s-al
  819  cd /
  820  ls -al
  821  sudo service artifactory check
  822  sudo service artifactory stop
  823  sudo service artifactory start
  824  ls -al
  825  su -
  826  sudo -i
  827  ls -al /var/lib/
  828  ls -al /var/lib/jenkins/
  829  ls -al /var/lib/jenkins/.jenkins/
  830  vi /var/lib/jenkins/config.xml
  831  echo $JENKINS_HOME
  832  ls -al /home/jenkins/
  833  ps -ef | grep java
  834  ls -al /var/lib/jenkins/cd ~
  835  tar cvf jenkins-home_20170517 /var/lib/jenkins
  836  ls -al
  837  rm -rf jenkins-home_20170517
  838  du -h
  839  df -h
  840  ls -al
  841  ls -al /var/lib/jenkins/
  842  rm /var/lib/jenkins/collage-dev.war
  843  ls -al
  844  rm jdk-8u77-linux-x64.rpm
  845  ls -al
  846  vi sonarqube_20160715_1.sql
  847  du -h
  848  df -h
  849  tar zcvf jenkins-home_20170517.tar.gz /var/lib/jenkins
  850  du -h
  851  ls -al /var/lib/jenkins/
  852  ls -al
  853  df -h
  854  tar zcvf jenkins-home_20170517.tar.gz /var/lib/jenkins --exclude /var/lib/jenkins/.m2/ --exclude /var/lib/jenkins/workspace/
  855  tar zcvf jenkins-home_20170517.tar.gz --exclude /var/lib/jenkins/.m2/ --exclude /var/lib/jenkins/workspace/ /var/lib/jenkins/
  856  tar zcvf jenkins-home_20170517.tar.gz --exclude /var/lib/jenkins/workspace/ /var/lib/jenkins/
  857  tar zcvf jenkins-home_20170517.tar.gz --exclude /var/lib/jenkins/.m2/ /var/lib/jenkins/
  858  tar zcvf jenkins-home_20170517.tar.gz --exclude /var/lib/jenkins/workspace/ /var/lib/jenkins/
  859  tar zcvf jenkins-home_20170517.tar.gz /var/lib/jenkins/ --exclude /var/lib/jenkins/workspace/
  860  tar zcvf jenkins-home_20170517.tar.gz /var/lib/jenkins/ --exclude /var/lib/jenkins/workspace/ --exclude /var/lib/jenkins/.m2/
  861  tar zcvf jenkins-home_20170517.tar.gz /var/lib/jenkins/ --exclude=/var/lib/jenkins/workspace/ --exclude=/var/lib/jenkins/.m2/
  862  tar zcvf jenkins-home_20170517.tar.gz --exclude=/var/lib/jenkins/workspace/ --exclude=/var/lib/jenkins/.m2/ /var/lib/jenkins/
  863  tar zcvf jenkins-home_20170517.tar.gz --exclude=/var/lib/jenkins/workspace --exclude=/var/lib/jenkins/.m2 /var/lib/jenkins
  864  ls -al
  865  tar zcvf jenkins-workspace_20170517.tar.gz /var/lib/jenkins/workspace/
  866  cd /var/lib/jenkins/
  867  ll
  868  cd workspace/
  869  ll
  870  rm -rf Playground/
  871  cd lg_play_web@localhost
  872  cd lg_play_web@tmp
  873  ls -al
  874  cat ssh4226438484430801647
  875  cd ssh4226438484430801647
  876  ls -al
  877  cd ..
  878  ls -al
  879  rm -rf lg_play_web@tmp
  880  ls -al
  881  tar zcvf jenkins-workspace-collage_20170517.tar.gz /var/lib/jenkins/workspace/Collage_*
  882  ls -al
  883  mv jenkins-workspace-collage_20170517.tar.gz ~/
  884  tar zcvf jenkins-workspace-collage_20170517.tar.gz /var/lib/jenkins/workspace/MysoCloud_*
  885  ll
  886  mv jenkins-workspace-collage_20170517.tar.gz ~
  887  ll
  888  tar zcvf ~/jenkins-workspace-playground_20170517.tar.gz /var/lib/jenkins/workspace/PlayGround_*
  889  ll
  890  tar zcvf ~/jenkins-workspace-lg_play_web_20170517.tar.gz /var/lib/jenkins/workspace/lg_play_web*
  891  tar zcvf ~/jenkins-workspace-lg_play_cms_20170517.tar.gz /var/lib/jenkins/workspace/lg_play_cms*
  892  ll
  893  tar zcvf ~/jenkins-workspace-c-spider_20170517.tar.gz /var/lib/jenkins/workspace/c-spider\(dev\)/*
  894  ll
  895  tar zcvf ~/jenkins-workspace-c-spider-wiremock_20170517.tar.gz /var/lib/jenkins/workspace/C-Spider\(wm\)/
  896  exit
  897  ls -al
  898  df -h
  899  ls -al
  900  df -h
  901  ls -al
  902  df -h
  903  ls -al
  904  df -h
  905  ls -al
  906  rm jenkins-home_20170517.tar.gz
  907  tar --help
  908  df -h
  909  ls -al
  910  df -h
  911  ll
  912  rm jenkins-home_20170517.tar.gz
  913  df -h
  914  ll
  915  ls -al
  916  rm jenkins-home_20170517.tar.gz
  917  ll
  918  df -h
  919  ll
  920  rm jenkins-home_20170517.tar.gz
  921  ll
  922  df -h
  923  ls -al
  924  rm jenkins-home_20170517.tar.gz
  925  df -h
  926  ls -al
  927  df -h
  928  rm jenkins-home_20170517.tar.gz
  929  df -h
  930  ls -al
  931  df -h
  932  ls -al
  933  df -h
  934  ls -al
  935  rm jenkins-home_20170517.tar.gz
  936  df -h
  937  ls -al
  938  rm jenkins-home_20170517.tar.gz
  939  ls -al
  940  rm jenkins-home_20170517.tar.gz
  941  ls -al
  942  df -h
  943  ls -al /var/lib/jenkins/
  944  df -h
  945  ll
  946  rm jenkins-home_20170517.tar.gz
  947  ls -al
  948  df -h
  949  ls -al
  950  rm jenkins-workspace_20170517.tar.gz
  951  ls -al
  952  df -h
  953  ls -al
  954  df -h
  955  ll
  956  rm jenkins-workspace-collage_20170517.tar.gz
  957  ll
  958  rm jenkins-workspace-playground_20170517.tar.gz
  959  ll
  960  rm jenkins-workspace-lg_play_web_20170517.tar.gz
  961  ll
  962  df -h
  963  ll
  964  ls -al
  965  rm jenkins-workspace-c-spider*
  966  ll
  967  rm jenkins-workspace-lg_play_cms_20170517.tar.gz
  968  ll
  969  rm jenkins_home_initial.tar.gz
  970  ll
  971  ls -al
  972  vi install_chrome.sh
  973  ll
  974  ls -al
  975  exit
  976  ls -al
  977  find . -name simple*
  978  cd /var/lib
  979  ll
  980  find . -name simple*
  981  cd jenkins/
  982  ll
  983  sudo -i
  984  exit
  985  `gen-hosts-list $env`
  986  $env
  987  echo $env
  988  env
  989  set
  990  set +x
  991  set --help
  992  man set
  993  exit
  994  history
  995  sudo service artifactory check
  996  sudo service artifactory stop
  997  sudo service artifactory check
  998  sudo service artifactory start
  999  exit
 1000  history
[ec2-user@ip-172-31-25-172 ~]$
