Separate clouddriver
====================
__clouddriver.jar, clouddriver-ucloud.jar를  class와 source로 분리해 artifactory에 deploy 합니다.__
  (외부에서 source 볼 수 없도록)

1. clouddriver과 clouddriver-ucloud 압축 풀기.

2. clouddriver에서 com 패키지에 속한 클래스만 clouddriver에 포함. source에는 그 외 모두 포함.

3. pom.xml은 source에 포함하고 META-INF는 clouddirver, source 모두 포함.

4. 압축(clouddirver, clouddriver-source).

5. clouddriver-ucloud도 마찬가지로 실행.

6. artifactory에 deploy.

7. test
```
- Artifactory deploy -
clouddriver/clouddriver/0.0.1-SNAPSHOT
clouddriver/clouddriver-sources/0.0.1-SNAPSHOT
clouddriver-ucloud/clouddriver-ucloud/0.0.1-SNAPSHOT
clouddriver-ucloud/clouddriver-ucloud-sources/0.0.1-SNAPSHOT

- pom.xml -(변경X)
clouddriver/clouddriver/0.0.1-SNAPSHOT
clouddriver-ucloud/clouddriver-ucloud/0.0.1-SNAPSHOT
```



