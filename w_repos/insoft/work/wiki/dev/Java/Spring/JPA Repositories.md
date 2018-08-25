**JpaRepository : http://docs.spring.io/spring-data/jpa/docs/1.3.0.RELEASE/reference/html/repositories.html**
**QueryDsl : http://www.querydsl.com/static/querydsl/3.6.0/reference/ko-KR/html/index.html**

# Jpa Repositories
Jpa(Java Persistance API)는 관계형 데이터베이스에 접근하기 위한 표준 ORM 기술을 제공한다.

# Why?
- 많은 데이터베이스를 다 알아야할 필요성이 있을까?
- 테이블과 객체간에 직렬화?
- 객체간의 관계와 테이블의 관계?
- 내가 저장한 데이터의 무결성은 얼마나 보장할까?
- 데이터베이스마다 스키마는 어떻게 관리하나? 과연 지속적으로 업데이트가 될까?

# Entity
Entity는 Table 과 1 대 1로 매핑되는 객체 모델을 말한다. 

# Entity Example
```
@Entity
@Table(name = "directory")
public class Directory {

    @Column(name = "directory_id", scale = 50)
    @Id
    @GenericGenerator(name = "directory_id", strategy = "uuid")
    private String id;

    @Column(name = "directory_parent_id", columnDefinition = "BIGINT DEFAULT '0'", nullable = false)
    private long parentId;

    @Column(name = "directory_name")
    private String directoryName;

    @CreatedDate
    private Date created;

    @ManyToOne
    @CreatedBy
    private User createdBy;

    @Column(name = "description")
    private String description;
    
    getter/setter...
 }
```

# Jpa Repositories using config
- xml config
```
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:jpa="http://www.springframework.org/schema/data/jpa"
  xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans.xsd
    http://www.springframework.org/schema/data/jpa
    http://www.springframework.org/schema/data/jpa/spring-jpa.xsd">

  <jpa:repositories base-package="com.acme.repositories" />

</beans>
```

- java config
```
@Configuration
@EnableJpaRepositories
@EnableTransactionManagement
class ApplicationConfig {

  @Bean
  public DataSource dataSource() {

    EmbeddedDatabaseBuilder builder = new EmbeddedDatabaseBuilder();
    return builder.setType(EmbeddedDatabaseType.HSQL).build();
  }

  @Bean
  public EntityManagerFactory entityManagerFactory() {

    HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
    vendorAdapter.setGenerateDdl(true);

    LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean();
    factory.setJpaVendorAdapter(vendorAdapter);
    factory.setPackagesToScan("kr.co.insoft");
    factory.setDataSource(dataSource());
    factory.afterPropertiesSet();

    return factory.getObject();
  }

  @Bean
  public PlatformTransactionManager transactionManager() {

    JpaTransactionManager txManager = new JpaTransactionManager();
    txManager.setEntityManagerFactory(entityManagerFactory());
    return txManager;
  }
}
```

# Jpa Repositories Directions
- Supported keywords inside method names
![supported_keywords.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/GrpxXKFRLOnk3iAdW43T_supported_keywords.png)

- Query method declaration in Repository
```
public interface UserRepository extends JpaRepository<User, Long> {
	List<User> findByUsername(String username);
  User findByEmailAndUsername(String email, String username);
}
```

# Commonly used Repositories
- CrudRepository<T, ID>
주로 CRUD 기능을 제공하는 Repository

- PagingAndSortingRepository<T, ID>
CrudRepository를 상속 받아 페이징 및 정렬을 제공하는 Repository

- JpaRepository<T, ID>
PagingAndSortingRepository 를 상속 받아 Entity 전체에 대해서 기본적인 Crud 및 페이징, 정렬을 제공합니다.
추가적으로 일괄 삭제 / 일괄 입력 등의 기능이 더 존재합니다.


# Spring Data Jpa 단점
- 정형화된 쿼리 이외에는 복잡한 쿼리를 작성하기 어렵다.

# QueryDSL
**type-safe, 타입 안정성**를 보장하며, 도메인 모델, 즉 Entity 객체가 변경할때도 쿼리까지 검증하므로 빠른 개발과 오류를 줄일 수 있도록 도와준다.
**consistency 일관성** 기반 기술에 상관없이 쿼리 경로와 오퍼레이션이 동일하고, 모든 쿼리 인스턴스는 재사용이 가능하다.

## QueryDSL 설정하기
- pom.xml
```
		<dependency>
			<groupId>com.mysema.querydsl</groupId>
			<artifactId>querydsl-jpa</artifactId>
			<version>3.6.0</version>
		</dependency>
		<dependency>
			<groupId>com.mysema.querydsl</groupId>
			<artifactId>querydsl-apt</artifactId>
			<scope>provided</scope>
			<version>3.6.0</version>
		</dependency>
    ...
			<plugin>
				<groupId>com.mysema.maven</groupId>
				<artifactId>apt-maven-plugin</artifactId>
				<version>1.1.3</version>
				<executions>
					<execution>
						<goals>
							<goal>process</goal>
						</goals>
						<configuration>
							<outputDirectory>target/generated-sources/java</outputDirectory>
							<processor>com.mysema.query.apt.jpa.JPAAnnotationProcessor</processor>
						</configuration>
					</execution>
				</executions>
			</plugin>
```

eclipse에서는 다음과 같이 설정을 추가한다. 위 outputDirectory에 설정된 **target/generated-sources/java** 를 아래와 같이 추가한다.

![apt설정.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/6byURfXQeuZBKXlf5MtO_apt%EC%84%A4%EC%A0%95.png)

자동으로 target/generated-sources/java 하위에 Entity 모델에 대하여 Qxxx.java 파일이 생성된다.

## 예제
- CloudConnectionPredicate.java
```
public class CloudConnectionPredicate {

    public static Predicate createdByAndIdEqulas(final User user, String id) {
        QCloudConnection qCloudConnection = QCloudConnection.cloudConnection;
        return qCloudConnection.createdBy.eq(user).and(idEqulas(id));
    }

    public static Predicate idEqulas(String id) {
        QCloudConnection qCloudConnection = QCloudConnection.cloudConnection;
        return qCloudConnection.connectionId.eq(id);
    }
}
```

- ConnectionServiceImpl.java
```
import static com.insoft.pacific.connection.predicate.CloudConnectionPredicate.createdByAndIdEqulas;
...
@Service
@Transactional
public class ConnectionServiceImpl implements ConnectionService {

...
@Override
    public JXResponseMessage<PacificTagConnection> select(String id) throws UnauthorizedException {
        return new JXResponseMessage<PacificTagConnection>(new PacificTagConnection(connectionRepository.findOne(createdByAndIdEqulas(
                AuthenticationUtil.getLogginedUser(), id))));
    }
...

}
```

# 추가적인 설정사항

꼭~ 적용하세요!

![버그수정.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/iDQ8vu0jTlLN7cScH6j7_%EB%B2%84%EA%B7%B8%EC%88%98%EC%A0%95.png)

