dev 서버에 .sql Dump
===
local
---

- DB 삭제
```
>mysql -uroot -p
mysql> drop database abc;
```

- DB 생성
```
>mysql -uroot -p
mysql> create database abc;
```

- import
```
mysql>\q
>mysql -uroot -p abc < abc.sql
```

aws
---

- ssh 접속

- DB 삭제
```
$ mysql -u root -p
mysql> drop databases abc;
```

- DB 생성
```
$ mysql -u root -p
mysql> create databases abc;
```

- import
```
mysql>\q
$ mysql -uroot -p abc < abc.sql
```