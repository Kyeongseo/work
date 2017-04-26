Separate Environment
====================
서버 환경
--------------
>참조. 조대협의 서버 사이드/소프트웨어 개발과 테스트.


####Local. 로컬 개발 환경
- 개발자마다 설치된 로컬 환경
- 모든 개발자가 같은 개발환경을 사용해야한다.

####Dev. 서버 개발 환경
- 개발자들이 만든 코드를 합쳐서 서버 환경에서 테스트 해볼 수 있는 환경.
- 소스코드를 형상관리 시스템에 커밋하면 서버 개발환경으로 자동으로 배포되고 이 환경에서 테스트.

####Integration. 통합 개발 환경
- 여러 개의 컴포넌트를 동시에 개발하는 프로젝트가 있고 각 컴포넌트가 다른 컴포넌트에 대해 의존성(Dependency)이 있을 때 컴포넌트를 통합 및 테스트하는 환경으로 사용. (ex. 단말기와 서버)

####QA. 테스팅 환경
- 짧은 릴리즈 주기에 따라서 개발 환경에서 QA환경으로 배포되고 테스트 수행.

####Staging. 스테이징 환경
- 운영 환경과 거의 동일한 환경을 만들어 놓고 운영환경으로 이전하기 전에 여러가지 비기능적인 부분(보안,성능,장애 등)을 검증하는 환경.

####Production. 제품 운영 환경
- 실제 서비스를 위한 운영 환경.


환경별로 빌드하기
----------------
다중 환경을 지원하기 위한 같은 소스코드로 어떻게 다르게 패키딩을 할 것인가.
- __MAVEN Profile__


------------------------
##설정 정보를 WEB-INF/config/config.properties에 정의하는 예제.
> local, dev, qa 환경으로 war 파일이 생성될 수 있도록 maven 설정을 조정.


###1. 폴더 생성.
```
${basedir}/resources-local	|
${basedir}/resources-dev	|	WEB-INF/config/config.properties
${basedir}/resources-qa		|
```

>resources 안에도 WEB-INF/... 넣어주기.



###2. WEB-INF/config/config.properties에 설정정보 넣기.
<pre><code>driver=com.mysql.jdbc.Driver</code></pre>

###3. POM.xml 에 Profiles 추가. (환경에 맞게 지정한 파일을 포함하여 패키징 해야함.)

- profile 환경변수 선언시 인식 못할경우 <properties>안에 변수선언.
- environment 환경변수 지정.

```
 <!--  profile definition -->
    <profiles>
        <profile>
            <id>local</id>
            <properties>
                <environment>local</environment>
            </properties>
            <activation>
                <activeByDefault>true</activeByDefault>
                //profile을 지정 안했을 경우 local profile이 동작하도록 설정 추가.
            </activation>
        </profile>
        <profile>
            <id>dev</id>
            <properties>
                <environment>dev</environment>
            </properties>
        </profile>
        <profile>
            <id>qa</id>
            <properties>
                <environment>qa</environment>
            </properties>
        </profile>
    </profiles>
```

###4. 빌드시 ${basedir}/resource-{environment} 디렉터리를 빌드 대상에 맞게 선택되도록 지정.


```
 <build>
        <finalName>console</finalName>
        <plugins>
            <plugin>
                <groupId>org.apache.tomcat.maven</groupId>
                <artifactId>tomcat7-maven-plugin</artifactId>
                <version>2.2</version>
            </plugin>
        </plugins>
        <resources>
            <resource>
                <directory>${basedir}/src/main/resources-${environment}</directory>
            </resource>
            <resource>
                <directory>${basedir}/src/main/resources</directory>
            </resource>
        </resources>
   </build>
```

- maven-war-plugins 사용시는 조금 다르다.
	- configuration
		- warSoruceDirectory
		- webResources webResource directory

###5. config.properties 이용해 설정 정보 변경.

- properties 사용을 위해 propertyPlaceholder 추가. (외부에 저장된 properties로 부터 bean definition으로 값을 가져올 수 있다.)

```
	<bean id="propertyPlaceholderConfigurer"
		  class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer">
		<property name="locations">
			<value>classpath:WEB-INF/config/config.properties</value>
		</property>
	</bean>
```

- propertyPlaceholder 추가 후 ${} 표기법 사용해 변경하기.

```
 <!-- DB Setting -->
	<bean id="dataSource" class="org.springframework.jdbc.datasource.SimpleDriverDataSource"> 
		<property name="driverClass" value="${driver}" />
		<!-- For use Hangul, Latter of JDBC URI Part is needed(한글) -->
		<property name="url" value="jdbc:mysql://${mysql.dataSource.url}?useUnicode=true&amp;characterEncoding=utf8&amp;jdbcCompliantTruncation=false" />
		<property name="username" value="${username}" />
		<property name="password" value="${password}" />
	</bean>
```

###6. RUN

- __(IntelliJ) Edit configurations__
- __Maven__
- Name 작성
- Command line: tomcat7:run
- dev (run 하고싶은 profile)

>패키징만 할 시에는 Maven Projects-console Maven Webapp-Lifecycle-package


--------------------------------

- git branch feature/separate-environment develop
- git commmit
- git pull
- git push
- gitlab merge request.
