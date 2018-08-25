스프링 부트.
===
> 가장 빨리 만나는 __스프링부트__ (길벗)

####Spring Framework
자바 플랫폼용 오픈 소스 어플리케이션 프레임워크. (__자바 프레임워크__)
- Spring boot
	- 자주 사용하는 프로젝트 조합을 미리 준비해놓고 설정을 자동으로 수행하며 서버를 포함하고있다. 그래서 적은 양의 애플리케이션 코드로도 바로 실행가능하다.
	- 자바 웹 애플리케이션은 war로 패키징해서 애플리케이션 서버에 디플로이 하는 방식이었지만 스프링부트는 빌드한 애플리케이션을 바로 실행할 수 있게 해준다.

---
- @RestController
	- 이 클래스가 웹 애프리케이션에서 요청(request)을 받아들이는 컨트롤러 클래스임을 나타냄.
- @EnableAutoConfiguration
	- 다양한 설정이 자동으로 수행되며 기존 스프링 애플리케이션에 필요했던 설정 파일들이 필요없게됨.
	- ex) 해당 어노테이션을 붙이면 DataSource가 DI 컨테이너에 자동으로 등록.
- @RequestMapping
	- 이 메서드가 HTTP요청을 받아들이는 메서드임을 나타냄.
- 로그
	- 로그시각 로그레벨 PID - [스레드이름] 클래스이름 : 로그메세지
- 애플리케이션 실행
	- mvn spring-boot:run
- 패키징(jar)
	- mvn package
	- java -jar target/...-SNAPSHOT.jar
	- 포트번호 변경시 
		- java -jar target/...-SNAPSHOT.jar --server.port = 포트번호
- IDE
	- Integrated Development Environment 통합 개발 환경.
- Hot Reloading
	- Spring Loaded / JRebel
		- 자바 코드를 수정했을 때 애플리케이션을 실행한 채로 수정한 코드의 내용을 애플리케이션에 반영.

---
####DI
Dependency Injection 의존성 주입.

- DI를 사용하면 클리스 사이 의존 관계를 자동으로 구성할 수 있다.
- DI 컨테이너는 인스턴스를 관리
	- 인스턴스 생성, 인스턴스에 필요한 인스턴스를 설정해 애플리케이션에 반환.
	- 인스턴스 스코프 제어.
	- 인스턴스 라이프 사이클을 이벤트로 제어
	- 공통 처리 포함 가능 (트랜잭션 관리나 로깅 처리)
- 의존 관계가 느슨해지면 유닛테스트 하기가 쉬워진다.

---
- @Configuration
	- 이 클래스가 JavaConfig용 클리스임을 컴파일러에 알림. // Bean 정의
- @Bean
	- DI 컨테이너가 관리할 Bean을 생성.
	- 이 어노테이션을 붙인 메서드가 생성한 인스턴스가 싱글톤이되며 DI 컨테이너별로 인스턴스 한개가 생성.
- @Import(...)
	- JavaConfig를 읽어들이기 위해 @Configuration 어노테이션이 붙은 클래스를 지정
- @Data
	- 컴파일(.class 파일 생성)할 때 각 필드의 setter/getter,toString(),equals(),hashCode() 메서드 생성.
	- final 붙이면 setter 생성 X.
- __@Autowired__
	- Autowired 어노테이션을 붙인 필드는 DI 컨테이너가 주입해야 할 필드를 의미.
- @ComponentScan
	- Bean을 DI 컨테이너에 자동으로 등록하는 기능.
	- 어노테이션을 붙인 클래스의 패키지 내부에 있는 모든 클래스를 검색해 @Component같은 어노테이션이 붙은 자바 클래스를 찾아내 DI 컨테이너에 등록.
	- @Controller, @Service, @Repository, @Configuration 등도 검색.
- @Controller
	- 스프링 MVC 컨트롤러를 나타내는 어노테이션
- @Service
	- 서비스 클래스를 나타내는 어노테이션 (@Component와 기능 비슷)
- @Repository
	- 리포지토리 클래스를 나타내는 어노테이션
	- 이 어노테이션이 붙은 클래스 안에서 발생하는 예외는 특수한 규칙에 의해 스프링이 제공하는 DataAccessException으로 교체됩니다.

---
- Lombok
	- 자바 클래스 쉽게 작성하도록 도와줌.
- @AllArgsConstructor
	- 모든 필드를 인자로 받는 생성자를 만듭니다. 

---
- JDBC
	- 스프링 프레임워크에는 기본 사양으로 스프링 JDBC 모듈 포함되어있음.
	- 스프링 JDBC는 JDBC API를 쉽게 사용하려고 만든 JdbcTemplate 클래스를 포함. (JDBC 복잡한 처리 간결하게)
	- org.springframework.boot/spring-boot-starter-jdbc
- H2
	- h2 데이터베이스는 자바로 구현한 관계형 데이터베이스 시스템(RDBS).
	- 인 메모리 데이터베이스.
	- 내장되어있는 DB로 설치없이 사용가능하다.
	- properties에 url 변경시 파일db 사용가능하다. 
	- com.h2database/h2

---
####Spring JDBC (DB)
- Log4JDBC
	- JDBC 드라이버를 프록시(proxy)로 래핑하여 SQL로그 출력하기.
	- <include resource="org/springframework/boot/logging/logback/base.xml"/>
	- return new Log4jdbcProxyDataSource(this.dataSource); // DataSource 래핑
- @Transactional
	- 이러한 어노테이션이 붙은 클래스를 DI 컨테이너에서 가져오고 해당 클래스에 속한 각 메서드를 다른 클래스에서 호출하면 DB 트랜잭션이 자동으로 수행.
	- 검사예외(checked exception)이 발생한 경우 롤백 X.

---
####JPA (DB)
- JPA
	- Java Persistence API
	- JPA는 자바 표준인 ORM(Object Relational Mapper)에 관한 명세.
	- Hibernate나 EclipseLink같은 라이브러리 사용하여 구현.
- JPA 특징
	- 자바 객체와 데이터베이스에 저장된 데이터를 매핑하는 기능
	- 데이터베이스에서 실행할 CRUD 처리를 캡슐화한 API
	- 자바 객체를 검색하는 데 사용하는 쿼리언어인 JPQL
- 다양한 데이터베이스에 존재하는 차이점을 JPA가 흡수합니다. 
	- spring-boot-starter-data-jpa