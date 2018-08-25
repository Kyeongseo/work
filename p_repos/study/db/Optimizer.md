##1 

- [bysql.net 규칙기반 옵티마이저](http://bysql.net//index.php?mid=w201101&entry=1._%EC%98%B5%ED%8B%B0%EB%A7%88%EC%9D%B4%EC%A0%80)

- 규칙기반 옵티마이저

 - 액세스 경로별 우선순위(사이트 참고)

 - 장점
  - OLTP 환경의 중소형 데이터 시스템에서는 어느정도 보편 타당성을 가짐
  - 예측 가능하고 일관성 있는 실행 계획을 수립하여 사용자가 원하는 처리경로로 유도하기가 쉬움
  - ( CBO는 같은 SQL이라도 데이터 특성에 따라 실행계획이 바뀜)

 - 단점
  - 데이터 특성을 고려하지 않음(데이터량, 값의수(Number of Distinct Value),컬럼값 분포, 인덱스 높이, 클러스터링 팩터)
  - 조건절 컬럼에 인덱스가 있을 시 무조건 인덱스를 사용, 항상 인덱스를 신뢰하며 Full Table Scan과 순익을따지지 않고 무조건 Index를 신뢰
   - "select /*+ rule */ * from emp order by empno"  의 경우 emp테이블에 인덱스가 있을경우 인텍스를 이용해 sort order by 연산을 대체 
  - 부분처리가 불가능하면 Full Table scan후 정렬이 유리

---   
##2 

- 동적 샘플링 (Dynamic Sampling)
 - 테이블과 인덱스에 대한 통계정보가 없거나 오래되어 신뢰할수 없을때 수행할수 있음
 - optimizer_dynamic_sampling 파라미터로 동적 샘플링 레벨을 조정 
 - 레벨 설정은 10까지 가능, 레벨이 높을수록 적극적으로 샘플링을 하며 표본 블록개수 증가
 
---
##3

- 옵티마이저 모드(사이트 참고)
 - RULE, ALL_ROWS, FIRST_ROWS, FIRST_ROWS_N, CHOOSE
 - RULE
		- RBO 모드 선택 시, 사용
 - ALL_ROWS
		- 쿼리 최종 결과 집합을 끝까지 Fetch 전제로 시스템 리소스를 가장 적게 사용하는 실행계획 선택
 - FIRST_ROWS
	 - 전체 결과집합 중 일부 로우만 Fetch하다가 멈추는 것을 전제로, 가장 빠른 응답 속도를 낼 수 있는 실행계획 선택
  - (단, 끝까지 Fetch 시, 더 많은 리소스 사용으로 전체 수행속도가 느려질 수 있음)
  - 비용과 규칙을 혼합한 형태의 옵티마이저 모드 (∵ 통계정보를 활용하여 RBO 규칙 적용)  
  
 - FIRST_ROWS_N 
	 -처음 n개 로우만 Fetch 하는 것을 전제로, 가장 빠른 응답 속도를 낼 수 있는 실행계획 선택

 - CHOOSE
  - 엑세스 테이블 중 적어도 하나의 통계정보가 있다면 CBO All_rows 모드 선택, 없을 시 RBO 선택
 
- 옵티마이저 모드 선택
 - 일반적으로 OLTP 환경에서는 first_rows, DW나 배치 프로그램 등에서는 all_rows 옵티마이저 모드 사용이 적합
 - 웹 애플리케이션 환경에서는 OLTP도 all_rows가 올바른 선택 (∵ 애플리케이션서 수행되는 쿼리 자체가 전체범위처리 요함)
 - 애플리케이션 특성을 고려하여 모드를 선택해야 함	
 - Tip 	어떤 모드를 사용할 지 명확하지 않을 경우, all_rows를 기본모드로 선택하고  필요 쿼리 또는 세션레벨에서 first_rows 모드로 전환하는 방법을 권고
 
---
##4

- [bysql.net 옵티마이저 행동에 영향을 미치는 요소 study1](http://bysql.net//index.php?mid=w201101B&entry=2._%EC%98%B5%ED%8B%B0%EB%A7%88%EC%9D%B4%EC%A0%80_%ED%96%89%EB%8F%99%EC%97%90_%EC%98%81%ED%96%A5%EC%9D%84_%EB%AF%B8%EC%B9%98%EB%8A%94_%EC%9A%94%EC%86%8C)
- [bysql.net 옵티마이저 행동에 영향을 미치는 요소 study2](http://bysql.net//index.php?mid=w201101&entry=2._%EC%98%B5%ED%8B%B0%EB%A7%88%EC%9D%B4%EC%A0%80_%ED%96%89%EB%8F%99%EC%97%90_%EC%98%81%ED%96%A5%EC%9D%84_%EB%AF%B8%EC%B9%98%EB%8A%94_%EC%9A%94%EC%86%8C)


---
##5 

- [bysql.net 통계정보](http://bysql.net//index.php?mid=w201101B&entry=4._%ED%86%B5%EA%B3%84%EC%A0%95%EB%B3%B4_%E2%85%A0)

- 3.4.1 테이블 통계

 - ANALYZE 와 DBMS_STATS 패키지

 - 오라클 공식입장 : 'ANALYZE' 명령어는 사용하지 말라
 - 교재의 공식입장 : 테이블 및 인덱스, 컬럼 통계를 따로따로 수집함으로써 통계수집개념 이해도를 높이기 위함.

- 3.4.2 인덱스 통계

 - COMPUTE STATISTICS 옵션 : 
  - 인덱스 최초생성 및 재생성시 자동으로 인덱스 통계까지 수집한다.
  - 10G부터는 사용자가 명시하지 않아도 자동으로 인덱스 통계를 수집한다.
  - (기능방지하고자 했을시에는 _optimizer_compute_index_stats 파라메터를 false로 설정)

- 3.4.3 컬럼 통계
 - 테이블 및 인덱스 통계를 제외하고 컬럼 통계만 수집
 - dbms_stats 패키지를 이용한 컬럼만 통계수집하는 방법은 없다. 테이블 통계와 항상 같이 수집된다.

- 3.4.4 시스템 통계
 - I/O, CPU 성능 같은 하드웨어적 특성을 측정. 
 - 오라클 9i 부터 제품이 설치된 하드웨어 및 애플리케이션 특성에 맞는 시스템 통계를 수집하고 이를 활용함으로써 옵티마이져가 합리적으로 선택할 수 있다.

- 3.4.4.1. Workload
 - 실제 애플리케이션으로부터 일정시간 동안 발생한 시스템 부하를 측정 및 보관 함으로써 그 특성을 최적화 하는 과정에 반영할 수 있도록 활용한다.

---
##6 
- [bysql.net 히스토그램](http://bysql.net//index.php?mid=w201101&entry=6._%ED%9E%88%EC%8A%A4%ED%86%A0%EA%B7%B8%EB%9E%A8)
 - 히스토그램 생성조건 : 컬럼 통계 수집 시 버킷 개수를 2 이상으로 지정 (ex. for columns SIZE 10, col1, col2, col3)
 - 히스토그램 정보 : dba_histograms, dba_tab_histograms 뷰


---
##7
- 결합 선택도
 - 히스토그램을 많이 만들어도 두 개 이상 컬럼에 대한 결합 선택도를 구할 시 정확성 ↓
 - 동적 샘플링(Dynamic Sampling)
 - 다중 컬럼 통계(Multi-column Statistics)
 

--- 
##8
 
- [bysql.net 비용 study1](http://bysql.net//index.php?mid=w201101B&entry=7._%EB%B9%84%EC%9A%A9)
 

- [bysql.net 비용 study1](http://bysql.net//index.php?mid=w201101&entry=7._%EB%B9%84%EC%9A%A9)


---
##9

- 통계정보 Ⅱ

1. 전략적인 통계수집 정책의 중요성
  1. CBO 능력을 최대한 끌어 올리는 핵심 요소
  2. DB 관리자의 핵심 역할은 통계정보 관리
  3. 통계정보 수집시 고려사항
  4. 주기적으로 통계정보 수집하면서 안정적이어야 최선
  5. 통계정보 수집 정책 수립은 필수

2. DBMS_STATS

3. 컬럼 히스토그램 수집

4. 데이터 샘플링

5. 파티션 테이블 통계수집
  1. NDV(the Number of Distinct Value)를 제외한 Incremental Global 통계 - 10.2.0.4
  2. NDV를 포함한 완벽한 Incremental Global 통계 - 11g

6. 인덱스 통계정보 수집

7. 캐싱된 컬럼 Invalidation

8. 자동 통계정보 수집
  1. 통계정보 갱신 대상 식별
  2. 자동통계 수집기능 활용 가이드

9. Statistics Preference

---
##10

- 쿼리변환 종류

- [bysql.net 쿼리변환이란?](http://bysql.net//index.php?mid=w201101&entry=1._%EC%BF%BC%EB%A6%AC_%EB%B3%80%ED%99%98%EC%9D%B4%EB%9E%80%3F)


---
##11
- [bysql.net 서브쿼리 Unnesting](http://bysql.net//index.php?mid=w201101&entry=2._%EC%84%9C%EB%B8%8C%EC%BF%BC%EB%A6%AC_Unnesting)

1. 인라인뷰       : from 절에 기술되는 서브쿼리

2. 중첩된 서브쿼리 : where 절에 기술되는 서브쿼리

3. 스칼라 서브쿼리 : 주로 select-list 절에 기술되는 서브쿼리


- 쿼리 블록 
  - 서브쿼리 및 메인쿼리 각각 쿼리블록으로 나뉜다.
  - 옵티마이져가 최적화를 수행하는 단위로 최적의 액세스 경로와 조인순서, 조인방식을 선택하는것

- 해결방법
  - 서브쿼리 Unnesting : 중첩된 서브쿼리(Nested Subquery)
  - 뷰 Merging : 인라인 뷰, 저장된 뷰


- nest   : '상자 등을 차곡차곡 포개넣다' 즉 중첩의 의미. No-Unnesting (큰 단위의 정보 속에 작은 단위의 정보를) 끼워 넣다

- unnest : '중첩된 상태를 풀어내다' 즉 중첩된 서브쿼리를 풀어낸다. Unnesting

- 해결점

1. 서브쿼리 Unnesting
 - 동일한 결과를 보장하는 조인문으로 변환하고 나서 최적화
 - 메인과 서브 간의 계층구조를 풀어 서로 같은 레벨로 만들어주므로 다향한 기법을 사용가능.

2. Filter Operation
 - 원래대로 둔 상태에서 각각의 쿼리블록단위별로 최적화(서브쿼리 No-Unnesting)
 - 최적화시 고려 대상으로 삼을 만한 다양한 실행계획을 생성해내는 작업이 매우 제한적인 범위를 가지고 있다.

3. 또다른 기법
 - 메인쿼리와 상관관계가 없고, 단일 로우를 리턴하는 경우. 
 - Subquery의 결과값을 메인 쿼리에 상수로 제공하는 방식
 - Stopkey조건(rownum <= 1) 이나 집계함수(max, min, avg)등을 사용해서 
 - 단일 로우 리턴으로 인한 'in'이 아닌 '='로 비교한다.


---
##12

- 필터 오퍼레이션
 - 전체적인 시각에서 더 나은 실행계획을 수립할 가능성을 높이는데에 있다. 
 - 필터 최적화 기법 : 서브쿼리 수행 결과를 버리지 않고 내부 캐시에 저장하고 있다가 같은 값이 입력되면 저장된 값을 출력 

- Anti 조인
 - not exists, not in(부정형) 서브쿼리도 Unnesting 하지않으면 필터 방식으로 처리  
 - 집계 서브쿼리 제거
 - 집계 함수를 포함하는 서브쿼리를 Unnesting 하고 이를 다시 분석함수로 대체하는 쿼리변환
 
- Pushing 서브쿼리
 - 조건 : 서브쿼리 Unnesting 되지않고 필터 오퍼레이션으로서 필터방식이 대개 실행계획상 맨 마지막 단계에서 처리된다.
 - 실행계획 상 가능한 앞 단계에서 서브쿼리 필터링이 처리 되도록 강제 지정하는 방식
















