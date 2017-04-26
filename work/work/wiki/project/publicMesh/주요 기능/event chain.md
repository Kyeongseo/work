# Event Chain
Event Chain은 Script의 연속된 구성이다.

Event는 기본적으로 다음과 같은 Type을 가진다.

- Internal
- External
- External Reverse

주요 로직은 다음과 같다

```
Internal Event를 만날때 까지 모든 Event를 수행한다. Internal Event를 만나면 응답이 올때까지 대기한다.
```

Agent에게 빠른 응답을 주기위해서 thread를 사용한다.
