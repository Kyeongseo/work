# Event Chain Logging
Event Chain Log 는 instance의 수가 증가할 수록 기록되는 Log의 양이 기하급수적으로 증가된다.
Select보다는 insert / update 기능이 주를 이루고 있다.
따라서 Event Chain의 Logging은 thread를 구성하여 저장하도록 구현하였다.

event chain log table은 아래와 같은 형태를 유지한다.



각 publicmesh 서버는 약 10~20개의 thread pool을 유지한다.

event chain이 실행되면 해당 event chain 정보를 master log에 기록한다.

- event chain id
- event chain 실행 일시
- 실행자
- 전체 event chain 수
- 성공한 event chain 수 (기본 0)
- 실패한 event chian 수 (기본 전체)
- 응답이 없는 event chain



event chain log가 올라오면 해당 데이터를 모두 thread에 처리하도록 등록한다.

