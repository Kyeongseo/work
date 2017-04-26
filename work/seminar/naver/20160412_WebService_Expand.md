웹 서비스 확장 전략
==================
>###naver d2_2016.04.12.7:30pm_강대명


서비스 초창기 구조
<pre><code>Client <-> Business Logic(Web) <-> Storage(DB)</code></pre>

변화된 구조
<pre><code>Client <-->  Web#1 <--> DB(Master)
        |->  Web#2 <-|      |
        |->  web#3 <-|  DB(Slave)</code></pre>
>서비스 확장에 Client, Web, Storage 중 문제되는건 어떤 서비스냐에 따라 다르다.


####_서비스의 확장 == 데이터 확장._
-------------------------------------------------------------

###서비스에 따라 다른 확장

1.CPU 작업이 많으면? __WEB__ 확장.

2.Web이 늘어나면? Client는 __DNS__ 이용.
  - DNS Round Robin
  - DNS RR은 서버 장애시 전파 시간의 단점이 존재.
    -> __Load Balancer__ 이용.

<pre><code>client <-> Load Balancer <--> web#1
                          |-> web#2
                          |-> web#3</code></pre>

3.매번 DB 작업이 많은 서비스라면? __DB__ 확장.
  - 확장이 쉽지않다
  - __Scale Up & Scale Out__

>확장의 필요성은 메모리 사용량, CPU사용량, CPU Load, (Web,DB) 서버 로그를 참조하자.
>요즘  WEB은 Cache 많이 쓴다. DB로 많이 가지 않도록
  (API local cache, remote cache , DB)

----------------------------------------------------------------------


###읽기 8 : 쓰기 2
####**Read가 많으면 Read 분산 // DB Slave 에서 읽기를 수행.**

일반적인 DB 구성
모든 요청을 __Master__ 가 처리, __Slave__ 는 장애 대비

<pre><code>Write <-> DB(Master)
       |      | Replication Failover(장애 대비)
Read  <-    DB(Slave)</code></pre>


Read 분산 DB 구성
__Master__ 은 쓰기만 처리, 읽기는 전부 __Slave__

<pre><code>Write <-> DB(Master)
          | Replication Failover
Read  <-> DB(Slave)</code></pre>
>Slave 만 계속 추가시 Write가 늘어날수록 성능 떨어짐.(I/O 한정)


####**Write 비율이 높거나 데이터양이 많으면 Write 분산.***

- 클러스터링
  - 데이터 이동, 분배를 자동으로 해줌.
  - 자동으로 해당 정보 저장, 찾아줌.
- 샤딩
  - 데이터를 다른 데이터 서버로 분배.
  - user 1 -> 1 , user 2 -> 2 , user 3 ->1 ...
  - 룰에 의해 데이터를 찾을 수 있다.


__샤딩 방법__

1. Range
    - Range 크면 서버별 사용 리소스 크게 차이 (노는 서버, 바쁜 서버 생김)
    - 서버 추가시 Range 조절 없으면 데이터 이동 X
2. Modular
    - id % 서버 대수 = k
    - 서버 대수에 따라서 데이터 이동이 많아짐 (가능하면 2배씩 증가)
    - Logical Shard, Physical Shard로 Modular 방식 개선
3. Indexed
    - 해당 데이터가 어디 존재하는지 Index 서버가 따로 존재.
    - Index 변경으로 데이터 이동 자유로움
    - but Index 서버 관리 추가로 필요.
>Range 작게 하며 Indexed와 연결이 유리함.

__데이터를 어떻게 찾을 것 인가__
__Key__ 이용하자
- Instagram ID (64bit)
  - Timestamp(41) + Logical ShardID(13) + Auto Increment(10)


----------------------------------------------------------------------

###클라우드

__배포 자동화 플랫폼__
capistrano , chef , ansible , puppet (스크립트와 비슷)
>실수를 줄여주며 생산성을 높여준다. 단 배포도 쉽게 __롤백__ 도 쉽게.


----------------------------------------------------------------------

###모니터링

__로그__

무엇을 어떻게 남겼는지.
어떤 형식으로 로그를 남길지 고민해야 함.


----------------------------------------------------------------------

###TEST

__Unit Test + API Test__



###Q&A

1. Flag 만들어 서버에서 클라이언트 제한
2. DB Join 못하니 Application에서 Join
3. session, cookie 보다 token.

__Link:__ [PPT SlideShare](http://www.slideshare.net/charsyam2/elastic-webservice?qid=92ce0bba-abac-466d-a511-ad62d090ae9b&v=&b=&from_search=3)
