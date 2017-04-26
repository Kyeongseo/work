# Java

## 문서 개요

본 표준은 프로젝트에서 만들어지는 모든 Java 프로그램에 대하여 공통된 구조와 형태를 가짐으로써 작성된 프로그램의 가독성을 높이고 이를 통해 효율적으로 협업하도록 돕기 위해서 작성된 문서입니다.

## 파일 구조

Java 소스 파일의 구조는 다음과 같습니다.

-	Package Statements
-	Import Statements
  - Static Import
  - JDK Import 
  - 3rd Party Import
  - 프로젝트 공통 Import
  - 서브 업무 그룹 공통 Import
- Class/ Interface Comments (JavaDoc)
- Class/ Interface Declaration
- Class/ Interface Comments (Logic) : 선택사항
- Static initializer
- Class Variables
  - 상수 선언 (public->protected->default->private)
  - static 변수 선언 (public->protected->default->private)
  - non-static  변수 선언 (public->protected->default->private)
- Constructors & Methods

**작성예제 - Example.java**
```java
package com.smart.example;

import static org.junit.Assert.assertNotNull;

import java.util.Hashtable;
import java.util.Vector;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com. smart.util.LogPrc;


/**
 * 클래스에 대한 설명
 */
public class Example {

    /**
     * static initializer 설명
     */
    static {
        //statements
    }

    /**
     * classVar1의 설명
     */
    public static int classVar1;

    /**
     * classVar2의 설명
     */
    protected static int classVar2;

    /**
     * classVar3의 설명
     */
    static int classVar3;

    /**
     * classVar5의 설명
     */
    public int classVar5;

    /**
     * classVar6의 설명
     */
    protected String classVar6;

    /**
     * classVar7의 설명
     */
    String classVar7;

    /**
     * classVar8의 설명
     */
    private Object classVar8;

    /**
     * 생성자 설명
     */
    public Example() {
        //statements
    }

    /**
     * doSomething 메소드 설명
     */
    public void doSomething() {
        //statements
    }

    /**
     * doSomethingElse 메소드 설명
     *
     * @param someParam 파라미터 설명
     * @return String 리턴값 설명
     * @exception exceptionClass 예외상황 설명
     */
    public String doSomethingElse(Object someParam) throws ExceptionClass {
        //statement
    }

}
```


## 명명 규칙


### 파일명

Java 파일명 = 업무 그룹명 + 접미어 + .java

-	업무그룹명 - 업무그룹별 명칭을 작성합니다. 대문자로 단어를 구분합니다.
  - 예) TagController
-	접미어 - 파일 속성을 나타내는 영문자 Full Name을 사용한다. 단, 10자 이상이면, 용어표준을 참고하여 약어를 사용합니다
-	각 명칭의 첫 자는 대문자, 이후는 소문자로 작성하여 구별을 용이하게 합니다

| 접미어          | 사용 예            | 설명                                        |
| --------------- | ------------------ | ------------------------------------------- |
| Controller      | XxxController.java | 컨트롤러(MVC 패턴)의 기능을 담당하는 클래스 |
| Service         | XxxService.java    | 업무 로직을 처리하는 클래스                 |


### 기본 규칙

- 대상의 용도 및 목적을 정확하게 기술하는 서술자를 사용합니다
- 가독성 향상을 위해 영문 대/소문자를 혼합하는 낙타 표기법을 사용합니다
  - 낙타 표기법(Camel Casing Notation)은 두 개 이상의 단어로 이루어진 변수 이름에서 각 단어의 첫 글자는 소문자로 표기하고 나머지는 모두 대문자로 시작하는 방식을 말합니다

```java
private String firstName;
private String grandTotal;
private String coporateCustomer;
```

- 필요 이상의 긴 이름 사용을 지양합니다
- 단 가독성이 우선하여 이름을 정합니다
  - 일례로 길이를 줄이기 위한 적절한 약어가 없을 경우에는 억지로 줄이지 않습니다

```java
// 나쁜 예
PhysicalOrVirtualProductOrService
insertAccountNumberToDatabase

// 좋은 예
Offering
insertAccoutNoToDb
```

- 단어 사용시 축약되지 않은 형태로 사용하되, 이름이 너무 길어지는 경우에 한하여 축약된 형태를 사용합니다

```java
// 나쁜 예
insertAccountNumberToDatabase

// 좋은 예
insertAccoutNoToDb

// 나쁜 예
com. smart.projectstandard.technologystandard.languagestandard

// 좋은 예
com. smart.prjstd.techstd.langstd
```

- 약어 사용이 일반적인 경우 약어를 사용합니다

```java
Id, Db
```

- 표준화된 약어는 첫 글자만 대문자를 사용합니다
- 변수/함수명 중간에 약어를 사용할 경우에도 낙타 표기법을 사용합니다

```java
// 나쁜 예
userID, getID, sQLDB, SQLDB, findAWSKey

// 좋은 예
userId, getId, sqlDb, findAwsKey
```

- 약어 사용시 일관성 있게 사용합니다

```java
// 나쁜 예
backNbr, serialNum, productNo; // number 약어 사용시, nbr, num, no의 혼용 지양
```

### 메소드

-	첫 단어는 소문자로 시작하는 동사를 사용하여 변수와 쉽게 구분되도록 하며, 이후 각 단어는 대문자로 시작하는 낙타 표기법을 사용합니다

```java
createUserAccount(), printMailingLabel(), save(), remove();
```

-	단어 조합 시 다음과 같은 형태로 작성합니다
  -	동사 + 명사
  -	동사 + 형용사 + 명사
  -	동사 + 명사 + 전치사 + 명사

```java
addMember()
getLastRow()
insertDataToDb()
```

-	"-", "_", "$" 문자의 사용은 금지합니다

```java
open_Account(), $openAccount()
```

-	getter 메소드는 "get + field name"의 형태로 이름을 부여하며, field name의 첫 단어는 대문자로 시작합니다
-	boolean 값을 반환하는 메소드는 "get" 대신 "is", "has", "can"을 사용합니다

```java
getFirstName(),  getAccountNumber() 

// boolean 값을 반환하는 경우
isPersistent(), isAtEnd(), hasChildren()
```

-	setter 메소드는 "set + field name"의 형태로 이름을 부여하며, field name의 첫 단어는 대문자로 시작합니다

```java
setFirstName(name), 
setAccountNumber(accountNumber)
```


### 변수

-	첫 단어는 소문자로 시작하는 단어를 사용하고 이후 단어는 대문자로 시작하는 낙타 표기법을 사용합니다

```java
firstName, unitPrice
```

-	단어 조합 시 다음과 같은 형태로 작성합니다
  -	명사 + 명사
  -	형용사 + 명사
  -	명사 + 전치사 + 명사

```java
memberId
firstClass
numberOfClass
```

-	"-", "_", "$" 문자의 사용은 금지합니다

```java
// 나쁜 예
first-name, $price, _name

// 좋은 예
firstName, price, name                    
```

-	관습적으로 Loop counter로 사용하는 i, j, k를 변수명으로 사용하는 것을 허용합니다

```java
for (int i = 0 ; i < 10 ; i++) {
    // do something
}
```

-	예외(exception) 인수(argument)명은 ex를 사용합니다
- 예외(exception)가 중첩되는 경우에는, 예외(exception) 클래스 이름에 사용된 대문자만 모아서 사용합니다

```java
try {
    //statements
} catch (ClassNotFoundException cnfe) {
    try {
        //statements
    } catch(IOException ex) {
        ie.printStackTrace();
    }
} catch (FileNotFoundException fnfe) {
    //statements
}
```

-	Collection 객체명은 복수형을 사용합니다

```java
List names;
Vector objects;
```

### 매개변수(parameter)

- 변수의 명명 규칙을 따릅니다


### 상수

- 모든 문자를 대문자를 쓰고, 단어와 단어 사이는 밑줄로 연결합니다

```java
MINIMUM_BALANCE, MAX_VALUE, DEFAULT_START_DATE
```

