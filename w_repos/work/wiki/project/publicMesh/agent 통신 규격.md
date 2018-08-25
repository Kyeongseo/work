# Agent 통신 규격
기본적으로 JSON 형태로 모든 데이터를 주고 받는다.
형태는 다음과 같다

```
{
	"result": "",
  "state": "",
  "instanceId": "",
  "message": "",
}
```

응답코드는 CallbackCode 에 정의되어 있다.
```
public interface CallbackCode {
	public static final String CREATED 			= "Created";			// Instance 생성 후 Regist가 완료된 상태
	public static final String INITIALIZED 		= "Initialized";		// Instance 생성 후 Regist & Initialize가 완료된 상태
	public static final String RUNNING 			= "Running";			// Instance 생성 후 Regist & Initialize & Install이 완료된 상태
	public static final String REBOOTING		= "Rebooting";			// Instance가 재시동되어 Regist - Initialize가 호출된 상태
	public static final String STOPPED			= "Stopped";			// Instance가 Scale In 작업 중인 상태
	public static final String TERMINATED		= "Terminated";			// Instance Scale In 작업이 완료되어 Instance가 제거된 상태
	
	public static final String RESULT_OK			= "ok";
	public static final String RESULT_FAIL		= "fail";
	
	public static final String MESSAGE_NOT_EXIST_IP		 = "Not exist Instance IP";
	public static final String MESSAGE_NOT_EXIST_ID		 = "Not exist Instance ID";
	public static final String MESSAGE_EMPTY_ID		 = "Do Not Null Instance ID";
	public static final String MESSAGE_UNK_ERROR			 = "Unknown System Error";
}
```


- result : 처리 결과 ( RESULT_OK / RESULT_FAIL )
- instanceId : 해당 Instance의 ID
- state : 해당 instance 상태 ( CREATED / INITIALIZED / RUNNING / REBOOTING / TERMINATED )
- message : MESSAGE_NOT_EXIST_IP / MESSAGE_NOT_EXIST_ID / MESSAGE_EMPTY_ID / MESSAGE_UNK_ERROR / 전체 형상 정보

# 업데이트 예정

차후 해당 부분은 JXResponseModel 로 변경할 예정이며, 다음과 같이 변경 될 것이다.

응답 코드 
```
public enum JXResponseModelResultCode {
	OK, FAIL
}
```

Agent 상태 코드
```
public enum JXResponseModelAgentState {
	CREATED, INITIALIZED, RUNNING, REBOOTING, TERMINATED
}
```

Message 코드
```
public enum JXResponseModelMessage {
	NOT_EXIST_IP, NOT_EXIST_ID, EMPTY_ID, UNK_ERROR
}
```

응답 모델
```
@JsonAutoDetect
@Data
public class JXResponseModel<T> {
	@JsonProperty(value = "result", index = 0)
	JXResponseModelResultCode result;
	
  @JsonProperty(value = "instanceId", index = 1)
	String instanceId;
    
	@JsonProperty(value = "state", index = 2)
	JXResponseModelAgentState state;
	
  @JsonProperty(value = "message", index = 3)
	JXResponseModelMessage message;
    
	@JsonProperty(value = "data", index = 4)
	T t;
}
```
