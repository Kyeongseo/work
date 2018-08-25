# Tagging 구현 로직

기존 Publicmesh에서는 국사, Subsystem, VMType, VMGroup, HAGroup, Variables, Application, Network 등의 기능이 모두 따로 존재하였습니다.

위에 나열한 항목들은 모두 Instance를 생성하기 위한 기본 정보로서, 이미지나 환경변수 설치되어야하는 script 등을 담고 있습니다.

변경될 publicmesh에서는 tagging 기능으로 구현하도록 정의할 예정입니다.
따라서, 주가되는 객체는 Instance 가 되고, Instance 에 tag를 추가하는 형식으로 기존에 기능을 대체하게 될 것입니다.

이러한 기능들을 구현하기 위해서 다음과 같은 interface를 정의하였습니다.

```
/**
 * Tag 를 구현하기 위한 최상위 구현체
 * 
 * @author Brandon Lee(sylee@in-soft.co.kr)
 *
 */
public interface BrandonTag extends UUIDKeys {
	/**
	 * Tag 명칭 반환
	 * 
	 * @return Tag 명칭 반환
	 */
	public String getTagName();

	/**
	 * Tag 설명 구현
	 * 
	 * @return Tag description
	 */
	public String getDescription();

	/**
	 * Tag description 설정
	 * 
	 * @param description
	 *            tag description
	 */
	public void setDescription(String description);
}
```

추가적으로 각 Tag를 구분하기 위해서 아래와 같은 type으로 분리합니다.

```
/**
 * Tag Type을 구분하기 위한 상수
 * 
 * @author Brandon Lee(sylee@in-soft.co.kr)
 *
 */
public enum TagType {
	/* Application 형식 */
	Application,
	/* Variable */
	Variables,
	/* 기존의 region, subsystem, vmtype, vmgroup, hagroup */
	Directory,
	/* Network */
	Network,
	/* L4 */
	L4,
	/* VIP */
	VIP
}
```

위 Interface를 implements 받아서 아래와 같은 예제 class를 작성할 수 있습니다.

```
import java.util.Date;

import lombok.Data;

import com.brandon.framework.constance.TagType;
import com.brandon.framework.model.BrandonTag;
import com.brandon.framework.mybatis.DataBindingModel;

/**
 * Application 객체 기본적으로는 install에 관련된 script 항목만을 포함하도록 하고, 추가적으로 사용자별로 config를
 * 지정할 수 있는 script를 지정할 수 있도록한다.
 * 
 * @author Brandon Lee(sylee@in-soft.co.kr)
 *
 */
@Data
@DataBindingModel
public class ApplicationTag implements BrandonTag {
	/**
	 * 
	 */
	private static final long serialVersionUID = 8864933623443567100L;
	private String id;
	/**
	 * Application Version
	 */
	private String version;
	private String title;
	private String description;
	private Date created;
	private User createdBy;

	@Override
	public String getTagName() {
		return TagType.Application.name();
	}
}
```

마지막으로 위와 같은 형식을 포함하는 최종 Instance 객체는 아래와 같은 형식으로 생성하면 tag를 구현이 완료되겠습니다.

```
import java.util.List;

import lombok.Data;

import com.brandon.framework.model.BrandonTag;
import com.brandon.framework.model.UUIDKeys;
import com.brandon.framework.mybatis.DataBindingModel;

@Data
@DataBindingModel
public class Instance implements UUIDKeys {
	/**
	 * 
	 */
	private static final long serialVersionUID = -8060405835992789561L;
	private String id;
	private String description;
	private List<BrandonTag> tags;
	private String instanceName;
	private String serverStatus;
	private String agentStatus;
}

```

최종적으로 생성된 Instance 객체에서는 tags 라는 객체로 부터 각 tag들을 가져올 수 있습니다.

물론 100% 모든 정보를 보여주지는 못합니다. 이러한 부분에서는 interface화 되어있는 getId()와 getTagName() 을 이용하여 어느 타입의 어떠한 값인지를 확인할 수 있으므로, 해당 tag의 내용을 가져올 수 있게 되겠습니다.

