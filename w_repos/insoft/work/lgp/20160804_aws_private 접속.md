 eval `ssh-agent -s`
 cd /c/repos/pem/
 ssh-add -k pg.dev.pem
 ssh -A ec2-user@52.197.200.70
  cd PG-TEST/target/
  512  scp monolithic-0.0.1-SNAPSHOT.war ec2-user@52.197.200.70:/pg-test
  513  cd /c/repos/pem/
  514  ssh -A ec2-user@52.197.200.70


 cd ..
  506  cd PG-TEST/target/
  507  scp monolithic-0.0.1-SNAPSHOT.war ec2-user@52.197.200.70:/home/



scp monolithic-0.0.1-SNAPSHOT.war ec2-user@10.0.1.139:~
ssh ec2-user@10.0.1.139
cd ~
sudo java -jar -Dspring.profiles.active='dev,no-liquibase' monolithic-0.0.1-SNAPSHOT.war &



ps -ef | grep java
sudo kill -p 7327

sudo java -jar monolithic-0.0.1-SNAPSHOT.war
sudo java -jar monolithic-0.0.1-SNAPSHOT.war &

