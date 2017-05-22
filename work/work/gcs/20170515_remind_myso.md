separated environment
---

src > main > resource-dev > WEB-INF > config > config.properties
```
name=dev
driver=com.mysql.jdbc.Driver
dataSource.url=54.249.40.158:3306/mysocloud
username=root
password=indivi10

mysql.dataSource.url=127.0.0.1:3306/mysocloud
rds.dataSource.url=mysocloud.crnl0rvxbads.ap-northeast-1.rds.amazonaws.com:3306/mysocloud
```

src > main > webapp > WEB-INF > config > dispatcher-servlet.xml
```
	<bean id="propertyPlaceholderConfigurer"
		  class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer">
		<property name="locations">
			<value>classpath:WEB-INF/config/config.properties</value>
		</property>
	</bean>

	<bean class="org.apache.commons.dbcp.BasicDataSource" id="dataSourceSpied">
		<property name="driverClassName" value="${driver}"/>
		<property name="url" value="jdbc:mysql://${dataSource.url}?useUnicode=yes&amp;characterEncoding=UTF-8"/>
		<property name="username" value="${username}"/>
		<property name="password" value="${password}"/>
		<property name="defaultAutoCommit" value="false" />
	</bean>
```

src > main > webapp > WEB-INF > config > mybatis-context.xml
```
	<bean id="propertyPlaceholderConfigurer"
		  class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer">
		<property name="locations">
			<value>classpath:WEB-INF/config/config.properties</value>
		</property>
	</bean>
     
    <!-- DB Setting -->
	<bean id="dataSource" class="org.springframework.jdbc.datasource.SimpleDriverDataSource"> 
		<property name="driverClass" value="${driver}" />
		<!-- For use Hangul, Latter of JDBC URI Part is needed(한글) -->
		<property name="url" value="jdbc:mysql://${mysql.dataSource.url}?useUnicode=true&amp;characterEncoding=utf8&amp;jdbcCompliantTruncation=false" />
		<property name="username" value="${username}" />
		<property name="password" value="${password}" />
	</bean>
	
	<bean id="remoteDataSource" class="org.springframework.jdbc.datasource.SimpleDriverDataSource"> 
		<property name="driverClass" value="${driver}" />
		<!-- For use Hangul, Latter of JDBC URI Part is needed(한글) -->
		<property name="url" value="jdbc:mysql://${rds.dataSource.url}?useUnicode=true&amp;characterEncoding=utf8&amp;jdbcCompliantTruncation=false" />
		<property name="username" value="${username}" />
		<property name="password" value="${password}" />
	</bean>
```

pom.xml
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

maven 패키징시 cloud driver 추가
```
    <build>
        <finalName>console</finalName>
        <plugins>
            <plugin>
                <groupId>org.apache.tomcat.maven</groupId>
                <artifactId>tomcat7-maven-plugin</artifactId>
                <version>2.2</version>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-war-plugin</artifactId>
                <version>2.1.1</version>
                <configuration>
                    <webResources>
                        <resource>
                            <directory>${user.home}/libs</directory>
                            <targetPath>WEB-INF/lib</targetPath>
                            <filtering>true</filtering>
                            <includes>
                                <include>*.jar</include>
                            </includes>
                        </resource>
                    </webResources>
                </configuration>
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

	하단 코드로 변경됨

	<build>
        <finalName>console</finalName>
        <plugins>
            <plugin>
                <groupId>org.apache.tomcat.maven</groupId>
                <artifactId>tomcat7-maven-plugin</artifactId>
                <version>2.2</version>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <configuration>
                    <source>1.8</source>
                    <target>1.8</target>
                </configuration>
                <version>3.3</version>
            </plugin>
            <plugin>
                <groupId>org.evosuite.plugins</groupId>
                <artifactId>evosuite-maven-plugin</artifactId>
                <version>${evosuiteVersion}</version>
                <executions>
                    <execution>
                        <goals>
                            <goal>prepare</goal>
                        </goals>
                        <phase>process-test-classes</phase>
                    </execution>
                </executions>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>2.18.1</version>
                <configuration>
                    <properties>
                        <property>
                            <name>listener</name>
                            <value>org.evosuite.runtime.InitializingListener</value>
                        </property>
                    </properties>
                </configuration>
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

logger
```
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

private static final Logger logger = LoggerFactory.getLogger(ServiceVMVolumeServiceImpl.class);

logger.debug("There is no result !!!");
```


