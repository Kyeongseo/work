자바로 코딩해 본 사람이라면 누구나 간단한 객체 하나 만드는데 getter/setter/constuctor/equals/toString 등등을 기계적으로 타이핑하거나 혹은 IDE의 도움으로 자동으로 생성되는 getter/setter 등을 만들어본 경험이 있을 것입니다. 필요한 것은 하나의 클래스와 몇 개의 멤버 변수 정도의 작은 클래스인데 코드는 그에 비해 무척 길게 되죠(마치 배보다 배꼽이 큰 격). 게다가 설사 변수명이라도 바꾸려 하면 변수명 변경 -> getter/setter 함수 이름 변경 -> 매개변수 이름 변경 과 같은 순으로 작업을 하는 경우가 부지기수일 것입니다. 이는 매우 귀찮은 일이라 생각합니다. 원래 프로그래머는 귀찮은 것을 극도로 싫어하는 닝겐 이지 않습니까?

이런 귀찮은 작업을 해결하기 위한 방법을 찾던 중 Lombok 프로젝트를 찾았고 아이디인큐에서는 이런 작업을 빨리 해결하고 문제에 대한 더 좋은 해법을 만드는데 쓸 시간을 늘리기 위해 이를 도입해서 사용하고 있습니다.

# Lombok이란?
Lombok은 간단히 말하면 @Getter, @Setter 같은 annotation 기반으로 이런 작업을 없애주는 프로젝트입니다(Lombok 홈페이지에서는 Spice up your java라고 함). 자세한 설명은 나중에 하고 바로 코드로 얘기해보는 것이 낫겠죠? 아래 코드는 평소에 작성하는 멤버 변수 몇 개를 가지고 있는 클래스입니다.

```
public class Level {

    private Integer levelId;

    private String levelName;

    private long minPoint;

    private long maxPoint;

    public boolean equals(Object o) {
        if (o == this) return true;
        if (!(o instanceof Level)) return false;
        final LevelVO other = (Level) o;
        if (!other.canEqual((Object) this)) return false;
        final Object this$levelId = this.levelId;
        final Object other$levelId = other.levelId;
        if (this$levelId == null ? other$levelId != null : !this$levelId.equals(other$levelId)) return false;
        final Object this$levelName = this.levelName;
        final Object other$levelName = other.levelName;
        if (this$levelName == null ? other$levelName != null : !this$levelName.equals(other$levelName)) return false;
        if (this.minPoint != other.minPoint) return false;
        if (this.maxPoint != other.maxPoint) return false;
        return true;
    }

    public int hashCode() {
        final int PRIME = 59;
        int result = 1;
        final Object $levelId = this.levelId;
        result = result * PRIME + ($levelId == null ? 0 : $levelId.hashCode());
        final Object $levelName = this.levelName;
        result = result * PRIME + ($levelName == null ? 0 : $levelName.hashCode());
        final long $minPoint = this.minPoint;
        result = result * PRIME + (int) ($minPoint &gt;&gt;&gt; 32 ^ $minPoint);
        final long $maxPoint = this.maxPoint;
        result = result * PRIME + (int) ($maxPoint &gt;&gt;&gt; 32 ^ $maxPoint);
        return result;
    }

    public boolean canEqual(Object other) {
        return other instanceof Level;
    }

    public Integer getLevelId() {
        return this.levelId;
    }

    public String getLevelName() {
        return this.levelName;
    }

    public long getMinPoint() {
        return this.minPoint;
    }

    public long getMaxPoint() {
        return this.maxPoint;
    }

    public void setLevelName(String levelName) {
        this.levelName = levelName;
    }

    public void setMinPoint(long minPoint) {
        this.minPoint = minPoint;
    }

    public void setMaxPoint(long maxPoint) {
        this.maxPoint = maxPoint;
    }
}
```

이 코드에 Lombok을 적용하면 아래와 같이 간단하게 바뀝니다.

```
import lombok.Getter;
import lombok.Setter;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode
public class Level {

    @Getter    
    private Integer levelId;

    @Getter @Setter
    private String levelName;

    @Getter @Setter
    private long minPoint;

    @Getter @Setter
    private long maxPoint;   
}
```

위에서 확인할 수 있듯 사용법은 매우 간단합니다. Annotation의 의미는 그야말로 문자 그대로 직관적으로 알 수 있습니다. @Getter 는 각 필드의 getter 함수를, @Setter는 setter 함수를 생성하고 @EqualsAndHashCode 는 equals 함수와 hashCode 함수를 자동으로 생성해주는 역할을 합니다. 가장 많이 사용하는 lombok annotation을 아래에 정리해봤습니다.

## 가장 많이 사용하는 lombok annotation 정리

**@Getter / @Setter**

Getter와 Setter 함수를 생성합니다.
접근제어 : AccessLevel 지정을 통해서 접근레벨을 제한할 수 있습니다. (PUBLIC, PROTECTED, PACKAGE, PRIVATE)
@Getter(AccessLevel.PACKAGE), @Setter(AccessLevel.PRIVATE) getter/setter 관례에 따라서 get 필드명, set 필드명 메소드가 생성됨
**@EqualsAndHashCode**

코드에서 객체의 비교 등의 용도로 사용되는 equals(), hashCode() 메소드의 코드를 생성합니다.
특정 필드를 제외할 수가 있습니다. @EqualsAndHashCode(exclude={“field1”, “field2”})
**@ToString**

객체의 내용을 문자열로 변환해주는 toString() 메소드를 대신할 수 있습니다.
역시 특정 변수를 제외할 수 있습니다. @ToString(exclude=”field1”)
**@Log**

자동으로 logging을 위한 필드인 private static final Logger log 가 추가됩니다. 이후 로그를 출력하려는 곳에서 log.error(), log.warn(), log.debug(), log.info() 형태로 사용하면 됩니다.
**@Data**

모든 필드에 대한 getter, setter와 toString, equals, hashcode, final로 지정됐거나 @NonNull로 명시된 필드에 대한 값을 받는 생성자 메소드 코드를 생성합니다.
**@AllArgsConstructor**

모든 필드에 대한 값을 받는 생성자를 생성합니다.
접근제어 : AccessLevel 지정을 통해서 접근레벨을 제한할 수 있습니다. (PUBLIC, PROTECTED, PACKAGE, PRIVATE)

# Lombok의 간략 동작 원리
이번에는 lombok의 동작 원리를 간단히 설명하겠습니다. java source를 컴파일할 때 annotation processor로 등록된 lombok processor가 parsing 된 AST(Abstract Syntax Tree)를 annotation을 확인하고 그에 적합한 메쏘드를 생성해줘서 parsing된 AST에 적절한 위치에 넣어주어서 byte code로 변환하게 된다.

# 프로젝트의 Lombok 적용 방법
가장 많이 사용하는 IDE인 Eclipse와 요즘 많이 사용하고 있는 IntelliJ에서 lombok을 도입해서 사용할 수 있습니다. 자세한 적용 방법은 아래와 같습니다.

#dependency 추가

```
// pom.xml
<dependencies>
  ...

  <!-- Project lombok -->
  <dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.12.2</version>
  </dependency>
  ...
</dependencies>
```

# Eclipse에서 Lombok을 사용하는 법

1. [Lombok Download](http://www.projectlombok.org/download.html) 에서 lombok.jar 를 다운로드합니다.
2. java -jar lombok.jar 로 Installer를 실행합니다.
3. “Specify Location”을 클릭한 후 플러그인을 설치할 Eclipse의 바이너리를 선택합니다.
4. “Install / Update” 를 클릭합니다.

# Lombok의 장단점

자바는 syntatic sugar가 많지 않은 언어이기에 작성할 코드가 많은 굉장히 힘든 언어이지만 lombok을 사용하면 코드를 획기적으로 줄일 수 있습니다. 하지만 lombok을 사용하여 만들어진 코드를 다른 사람이 컴파일하기 위해서는 다른 사람들도 모두 lombok을 설치하고 IDE에 setting해야 한다는 단점이 있습니다. 물론 IDE에서 delombok/lombok 과 같은 변환 기능을 수행해주긴 하긴 하지만 현재 JDK6/7에서 제공하는 annotation processor 를 위한 공식 API를 사용하는 것이 아니라 private API 를 사용하는 형태이기 때문에 향후 version에서는 lombok을 사용할 수 없을 수도 있습니다. (JDK8을 지원한다고 하는 것 보니 향후 1-2년은 괜찮겠네요.) 따라서 협업을 할때는 lombok을 사용할지 말지 사전에 협의를 해야할 것 같습니다. (당연한 말이지만) 어느정도 불편함을 감수하더라도 기능이 너무 유용하기 때문에 lombok을 사용하는 것을 추천드립니다.