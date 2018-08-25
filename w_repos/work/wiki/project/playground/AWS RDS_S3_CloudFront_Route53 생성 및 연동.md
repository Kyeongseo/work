
# AWS RDS 생성

## Parameter Group 생성 
![console_rds.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/uxm4GgIQDeH7vhcMde45_console_rds.PNG)

- AWS Web Service 목록 중 RDS를 선택.

![rds_param.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/9uPtUdkeSxOD41eLP1CC_rds_param.PNG)

- 먼저 Mysql UTF-8 설정을 하기 위한 Parameter Group을 생성함.
- RDS는 Console을 통해 Instance에 접근을 할 수 없기 때문에 Mysql Config를 Parameter Group을 통해 설정 해야 함.
- 왼쪽 메뉴에서 Parameter Groups 선택

![rds_create_param.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/Q2bAV15MRQS9iiPkq4MA_rds_create_param.PNG)

- Create Parameter Group 버튼을 클릭하여 Parameter Group 생성.

![rds_create_param2.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/AKfIksKtQlGQGKjJ7QKM_rds_create_param2.PNG)

- Parameter Group Family
	+ `mysql5.6` 선택
- Group Name 
 	+ `playground-mysql56` 입력
- Description
	+ `playground-mysql56` 입력
- Craete 버튼 클릭하여 Prameter Group 생성.

![rds_param_list.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/eJmsrtUvTeuevnvnIYXx_rds_param_list.PNG)

- 생성된 Prameter Group을 선택하여 Edit Parameters 버튼 클릭

![rds_edit_param.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/nNxMqfBBS8eS5xxQRp0c_rds_edit_param.PNG)

- parameter 목록 중 MySQL UTF-8 적용을 위해 위와 같이 선택함.
- 상단에 Save Changes 버튼 클릭하여 해당 Parameter Group 설정 변경.

![rds_main_instances.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/0djzui7uTXawvHoH8rRd_rds_main_instances.PNG)

## RDS 생성

- 왼쪽 메뉴에서 Instances를 선택. 이 메뉴가 RDS DB 인스턴스 목록이며 생성 한 온 디맨드 인스턴스(On Demand Instance)와 예약 인스턴스(Reserved Instance)의 목록이 표시됨.

![rds_launch_db_instance.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/gA49PyhQTAOK1OdsRtWo_rds_launch_db_instance.PNG)

- 위쪽의 Launch DB Instance 버튼을 클릭하여 RDS DB 인스턴스를 생성.

![rds_select_engine.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/UcBlIUKTWydci2Euz5nJ_rds_select_engine.PNG)

- Amazon aurora, MySQL, MariaDB, PostgreSQL, ORACLE, MS SQL Sever 중 하나를 선택 할 수 있음.
- MySQL 선택

![rds_production.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/fqPfARNSqa5XdpP7g5Yk_rds_production.PNG)

- MySQL은 목적에 따라 Production or Dev/Test 를 선택 할 수 있음.
	+ Production용은 Multi-AZ 및 Provisioned IOPS Storage를 사용가능. 
- Production용 MySQL을 선택

![rds_specify_db_details.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/j07ZfT1SlWUpgPGlmBbu_rds_specify_db_details.PNG)

- License Model 
	+ MySQL은 `general-public-license`만 선택.
- DB Engine Version 
	+ 사용 할 MySQL의 Version. 
  + `5.6.27` version 선택
- DB Instance Class
	+ 생성할 DB Instance Class.
  + Region 마다 생성 가능한 Instance Class 종류가 다름. 
  + `db.t2.medium` 선택.
- Multi-AZ Deployment
	+ RDS를 active standby로 구성하여 DB instance 장애 발생 시 대응 가능.
  + Single Region에서 사용가능
  + Zone이 전용선으로 연결되어 있어 동기식 데이터 복제.
  + `Yes`를 선택
- Storage Type
```
- Magnetic(표준)
	I/O 요구 사항이 보통 수준이거나 가끔씩 집중적으로 발생하는 application에 적합한 비용 효율적인 스토리지
- General Purpose(SSD)
	디스크 기반 스토리지보다 액세스 속도가 더욱 빠름
	사용 가능 볼륨 크기는 5GB ~ 6TB
	중소규모의 데이터베이스에 이상적.
- Provisioned IOPS
	사용 가능 볼륨 크기는 MySQL 기준 100GB ~ 6TB
	I/O 집약적이면서 일관적인 성능이 필요한 application에 적합한 스토리지
```
  + `Provisioned IOPS(SSD)` 선택
- Allocated Storage
	+ `100` GB 입력
- Provisioned IOPS
	+ `1000` 입력
- DB Instance Identifier
	+ DB Instance의 이름
  + `원하는 DB Instance Name` 입력
- Master Username
	+ MySQL DB 관리자 계정.
  + `원하는 관리자 계정명` 입력
- Master Password, Confirm Password
	+ MySQL DB 관리자 계정의 비밀번호.
  + `원하는 Password` 입력
 
![rds_configure_advanced_setting.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/MmFIV6eTyqYlsGy2Dd1B_rds_configure_advanced_setting.PNG)
![rds_configure_advanced_setting2.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/HHjXo5RaOwal0J4w2awz_rds_configure_advanced_setting2.PNG)

- VPC 
	+ DB 인스턴스가 위치할 네트워크(VPC).
  + Web, Was Server가 위치한 VPC를 선택.
  + RDS와 connection 하기 위해 Was Server가 위치한 VPC `seoul.qa.playground(vpc-ac0d84c5)` 선택
- Subnet Group
	+ DB 인스턴스가 위치할 Subnet. 
  + VPC `seoul.qa.playground(vpc-ac0d84c5)`에 subnet group이 `default-vpc-ac0d84c5` 밖에 없기 때문에 해당 subnet 선택
- Publicly Accessible
	+ DB를 외부에서 접근할 수 있게 하는 옵션. 
  		* Yes로 설정하면 VPC 외부에서 접근 가능.	
  		* No로 설정하면 VPC 내부에서만 접근할 수 있음.
  + `Yes` 선택
- Availability Zone
	+ DB 인스턴스가 생성될 가용 영역(Availability Zone)
  + 전 단계에서 Multi-AZ Deployment를 Yes로 선택 했다면 선택할 수 없음.
- VPC Security Group
	+ 방화벽 설정인 Security Group
  + Inbound 3306 port를 허용한 Security Group을 미리 생성 해 놓았다면 선택, 그렇지 않다면 Create new Security Group 선택(DB Instance가 생성 될 때 Mysql 기본 Security Group을 자동 생성함)
  + 미리 생성해 놓은 `seoul.qa.rds-mysql(VPC)` 선택
- Database Name
	+ 생성할 DB 이름. 
  + 아무것도 입력하지 않으면 DB 인스턴스에서 MySQL 서버만 실행되고 DB는 생성되지 않음.
  + `playdb` 입력
- Database Port
	+ DB 접속 포트 번호.
  + Mysql 기본 port인 `3306` 사용.
- Parameter Group
	+ MySQL을 실행할 때 필요한 파라미터 집합.
	+ my.cnf 파일을 생성하는 것과 동일.
  + 위에서 생성한 Parameter Group이 목록에 표시 됨. `playground-mysql56` 선택.
- Option Group
	+ DB 옵션
  + `default:mysql-5-6` 선택
- Backup Retention Period
	+ 백업 데이터 유지 기간. 
  + 최대 35일까지 설정 가능.
  + `7` days 선택.
- Backup Window
	+ 백업 시간. 
  + Select Window를 선택 
	+ Start Time을 `00:00`, Duration을 `0.5`로 설정. UTC 기준으로 00시 00분에 백업을 시작하며 백업 시간은 0.5시간
  + 데이터의 용량이 크면 설정한 백업 시간을 넘길 수도 있음.
- Auto Minor Version Upgrade
	+ 자동으로 마이너 버전을 업데이트하는 옵션. 
  + 보안 패치나 버그가 수정된 버전을 자동으로 업데이트.
- Maintenance Window
	+ DB 점검 시간. 
	+ Select Window를 선택.
  + Start Day를 Monday, Start Time을 `03:00`, Duration을 `0.5` 로 설정. UTC 기준으로 03시 00분에 점검이 시작.
  + 점검은 Duration에 설정한 시간보다 일찍 끝날 수 있음. 
- 모든 설정이 끝났으면 Launch DB Instance 버튼을 클릭하여 DB Instance 생성

![2016-08-24 17;02;45.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/XlkQaZYiSciMmHRkDuyX_2016-08-24%2017;02;45.PNG)

- DB Instance의 생성 시간은 대략 10분 정도 걸리며 완료 되었을 때 Status가 `available` 상태가 됨.


# AWS CloudFront S3 연동
## - S3 Bucket생성

![console_s3.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/9DNITPWfQlKCmWsf3A3i_console_s3.PNG)

- AWS Web Service 목록 중 RDS를 선택.

![s3_createbucket.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/JsUONvzQhydhYhLXowTi_s3_createbucket.PNG)

- Create Bucket 버튼을 클륵하여 새로운 Bucket 생성

![s3_create.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/Yi5LyHcTQFKXM26oaXpT_s3_create.PNG)

- Bucket Name
  + `origin.icloudyou.org` 생성 (원본 image 저장 용도)
 	+ `contents.icloudyou.org` 생성 (contents 썸네일 image 저장 용도)
  + `profile.icloudyou.org` 생성 (profile 썸네일 image 저장 용도)
- Region
	+ 3개의 Bucket 모두 `Tokyo` Region에 생성
- 모든 bucket을 생성 후 bucket 목록에서 확인 할 수 있음.

![2016-08-24 17;40;41.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/MyY5tQ4zTlettxQBDsDi_2016-08-24%2017;40;41.PNG)

- bucket 목록에서 `origine.icloudyou.org` bucket을 선택함.
- 우측 상단에 Properties Tab을 클릭.

![2016-08-24 17;42;24.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/LVxe6LYTLmBmh7I9YMJQ_2016-08-24%2017;42;24.PNG)

- Property 설정 메뉴 중 Permissions 메뉴 클릭

![2016-08-24 17;43;15.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/yf2FRvfYSSd2u59etYs7_2016-08-24%2017;43;15.PNG)

- `Add bucket policy` 버튼을 클릭하여 bucket 접근 권한을 부여

![2016-08-24 17;46;28.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/ma7NO3LRQUCdD3yOPnWM_2016-08-24%2017;46;28.PNG)

- 버킷 정책 편집기 Bucket Policy Editor가 표시됨. 
- 이곳에 JSONJavaScript Object Notation 형태의 정책을 입력. 
- AWS에서는 이 정책을 생성해주는 페이지를 제공하고 있습니다.
- AWS Policy Generator 링크를 클릭.

![2016-08-24 18;00;51.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/5qqfv938Tga5n44kSZpf_2016-08-24%2018;00;51.PNG)

- Select Type of Policy
	+ SNS Topic Policy, IAM Policy, SQS Queue Policy, S3 Bucket Policy를 선택할 수 있음. 
  + `S3 Bucket Policy` 를 선택합니다.
- Effect
	+ 허용(Allow), 거부(Deny)를 선택 할 수 있음. 
	+ Allow를 선택.
- Principal: 
	+ 권한을 적용할 사용자.
  + 인터넷에 전체 공개할 것이므로 `*`을 입력.
- AWS Service
	+ 처음 Select Type of Policy를 선택하면 그에 맞는 서비스가 자동으로 선택됨.  
- Actions
	+ S3의 모든 액션이 표시됨. 
  + `GetObject` 선택.
- Amazon Resource Name(ARN)
	+ `arn:aws:s3:::origin.icloudyou.org/*`을 입력.

![2016-08-24 18;05;47.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/zUU6oXQFOvpH7Y0ApQAH_2016-08-24%2018;05;47.PNG)

- Add Statement 버튼을 클릭

![2016-08-24 18;06;15.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/dSF7RNlQ2Kg4cBccDBlY_2016-08-24%2018;06;15.PNG)

- 설정한 내용이 Statements 목록에 추가됨. 
- 아래쪽 Generate Policy 버튼을 클릭.

![2016-08-24 18;07;36.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/0uKhYeEIQXGJuaMwSSfp_2016-08-24%2018;07;36.PNG)

- 이 JSON 텍스트를 전체 선택 한 뒤 복사.

![2016-08-24 18;08;30.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/MiOV0G8CQc6AojGGobDP_2016-08-24%2018;08;30.PNG)

- 다시 버킷 정책 편집기 Bucket Policy Editor에 방금 AWS Policy Generator에서 복사한 JSON 텍스트를 붙여넣기.
- 붙여넣기가 완료되었다면 아래쪽 Save 버튼을 클릭.
- 해당 과정을 `profile.icloudyou.org`, `contents.icloudyou.org` bucket에서도 동일하게 설정

## CloudFront 생성 및 S3와 CloudFront 연동

### - CloudFront 생성
![console_cf.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/iNoB34DMSDizjt9CVSmc_console_cf.PNG)

- AWS Web Service 목록 중 Cloud Front 선택.

![2016-08-25 09;54;04.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/1zBKM4pkSnCgAnVzVmp6_2016-08-25%2009;54;04.PNG)

- CloudFront 메인 페이지에서 위쪽 Create Distribution 버튼을 클릭.

![2016-08-25 09;54;48.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/0JsfjtG1Syhz9ofFHVlC_2016-08-25%2009;54;48.PNG)

- 전송 방식을 선택
	+ Web: 일반적인 웹 서버 방식.
	+ RTMP: 동영상 실시간 스트리밍 프로토콜.
- Web의 Get Started 버튼을 클릭.

![2016-08-25 10;29;50.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/BNnuis8lRyaVtXRPNNHg_2016-08-25%2010;29;50.PNG)

- Origin Domain Name
	+ 오리진의 도메인 이름을 설정. 
  + Origin Domain Name 부분을 클릭하면 현재 사용할 수 있는 S3 버킷과 ELB의 목록이 표시 됨.
  + 위에서 생성했던 s3 bucket을 origin으로 선택함.
  + 'origin.icloudyou.org.s3.amazonaws.com' 선택
- Origin ID
	+ 오리진을 구분하는 ID. 
  + Origin Domain Name에서 S3 버킷을 선택하면 자동으로 설정됨.
- Restrict Bucket Access
	+ S3 버킷에 CloudFront 만 접근할 수 있도록 설정하는 옵션.
  + `No`를 선택. CloudFront 통해서 접근 뿐만 아니라 lambda function도 접근 가능해야 하기 때문
- Origin Access Identity
	+ 오리진에 접근할 식별자. 새로 생성할 수도 있고 이미 있는 것을 사용할 수도 있습니다. 
  + `Restrict Bucket Access` `No` 선택 시 해당 설정 hidden
- Comment 
	+ 새로 생성할 식별자 이름.
	+ `Restrict Bucket Access` `No` 선택 시 해당 설정 hidden
- Grant Read Permissions on Bucket
	+ CloudFront가 S3에서 파일을 읽을 수 있는 권한을 버킷의 Bucket Policy에 설정. 
  + Yes로 설정하면 다른 모든 접속은 제한되고 CloudFront만 접근할 수 있도록 버킷에 Bucket Policy가 설정됨. 
  + `Restrict Bucket Access` `No` 선택 시 해당 설정 hidden
- Origin Custom Headers
	+ 오리진에 요청을 전달할 때마다 사용자 지정 헤더를 포함하도록 CloudFront를 구성 가능.
  + 공백으로 둠.

![2016-08-25 10;30;59.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/w62zVrnMQDmxmiqx4hXh_2016-08-25%2010;30;59.PNG)

- Path Pattern
	+ CloudFront로 파일을 가져올 규칙.
  + 기본 값은 `*` 로 설정되어 있어서 모든 파일을 가져오게 됨.
- Viewer Protocol Policy
	+ CloudFront로 보여질 프로토콜 정책.
		* HTTP and HTTPS: HTTP와 HTTPS를 둘 다 사용합니다.
		* Redirect HTTP to HTTPS: 모든 HTTP 접속을 HTTPS로 리다이렉트 합니다.
		* HTTPS Only: HTTPS만 사용합니다.
  + `HTTP and HTTPS` 선택
- Allowed HTTP Methods 
	+ 허용하는 HTTP 메서드 종류.
  + `GET, HEAD, OPTIONS. PUT, POST, PATCH, DELETE` 선택
- Object Caching
	+ 파일의 캐시 유지 시간을 설정. 
  + 유지 시간이 지나면 CloudFront에서 파일이 삭제됨.
	+ Use Origin Cache Headers 
		* 오리진 HTTP 헤더의 캐시 설정(Cache-Control)을 따름. 
		* 캐시 설정이 없으면 기본 캐시 유지 시간은 24시간.
	+ Customize
 		* 기본 캐시 유지 시간을 따로 설정.
		* Minimum TTL: 최소 캐시 유지시간. 초 단위로 설정
		* Maximum TTL: 최대 캐시 유지시간. 초 단위로 설정
		* Maximum TTL: 기본 유지시간. 초 단위로 설정
  + `Use Origin Cache Headers` 선택
- Forward Cookies
	+ 오리진의 쿠키를 CloudFront를 거쳐 사용자에게 전달할지 설정.
	+ None: 쿠키를 전달하지 않음. 캐시 성능이 좀 더 향상됨.
	+ Whitelist: 쿠키를 선별하여 전달합니다.
		* Whitelist Cookies: 전달할 쿠키 이름을 설정.
  + `None(Improves Caching)` 선택
- Forward Query Strings 
	+ CloudFront에서 오리진으로 쿼리 문자열을 전달. 
  + 설정하지 않으면 캐시 성능이 향상 됨. 
  + `No (Improves Caching)` 선택.
- Smooth Streaming 
	+ 실시간 스트리밍 프로토콜인 Microsoft Smooth Streaming을 사용하고 싶을 때 설정.
- Restrict Viewer Access
	+ Signed URL로 CloudFront 사용을 제한하고 싶을 때 설정.
  + `No` 선택
- Compress Objects Automatically
	+ 사용자 요청 헤더에 Accept-Encoding: gzip을 포함하는 경우 특정 유형의 파일을 자동으로 압축하고 압축된 파일을 제공하도록 CloudFront를 구성할 수 있음.
	+ 'No' 선택
  
![2016-08-25 10;31;25.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/tUkQRTbbQA2qBNS2j5CN_2016-08-25%2010;31;25.PNG)

- Price Class
	+ 에지 로케이션 사용 범위를 설정하는데 실제 서비스에서 그다지 필요가 없는 지역을 제외할 때 설정. 
		* Use Only US and Europe: 미국과 유럽의 에지 로케이션만 사용.
		* Use Only US, Europe and Asia: 미국과 유럽, 아시아의 에지 로케이션만 사용.
		* Use All Edge Locations: 모든 에지 로케이션을 사용.
	+ `Use Only US, Europe and Asia` 선택
- Alternate Domain Names
	+ Route 53에서 도메인을 연결하려면 이 부분을 설정 해야 함.
  + `image.icloudyou.org` 입력
- SSL Certificate
	+ HTTPS 프로토콜을 사용하기 위한 인증서 설정.
		* Default CloudFront Certificate: CloudFront의 인증서를 사용.
		* Custom SSL Certificate: 사용자가 구입한 도메인과 인증서를 사용하고 싶을 때 설정.
  + `Default CloudFront Certificate` 선택
- Default Root Object
	+ CloudFront 배포 도메인의 최상위(Root)로 접속했을 때 기본적으로 보여줄 파일 이름.
  + 공백으로 비워둠
- Logging
	+ CloudFront 접속 로그 설정
  + `Off` 선택
- Bucket for Logs
	+ Logging이 `on` 일 때 활성화
	+ CloudFront 로그를 저장할 S3 버킷을 선택.
	+ Log Prefix: S3 버킷에 로그를 저장할 때, 디렉터리 명을 설정.
- Comment
	+ + Logging이 `on` 일 때 활성화
	+ 추가적인 설명을 기록하고 싶을 때 사용.
- Distribution State
	+ 배포를 생성한 뒤 배포 상태 설정
		* Enabled: 곧바로 사용할 수 있는 상태 됨.
		* Disabled: 배포만 생성하고 비활성화 상태로 둠.
  + `Enabled` 선택
- 모든 설정을 마쳤으면 `Create Distribution` 버튼 클릭하여 CloudFront 배포

![2016-08-25 10;46;48.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/FcQ6d5ZmRKSHoiN9EQrS_2016-08-25%2010;46;48.PNG)

- 모든 에지 로케이션에 전파가 완료되면 Status가 Deployed로 바뀜.
- Domain Name에 CloudFront 배포의 도메인이 `das37x1dnjbjh.cloudfront.net` 와 같이 표시됨.

### - CloudFront에 복수개의 S3 bucket Origin 추가


![2016-08-25 12;30;29.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/r4MPMn6GSaqhyx7HOvr1_2016-08-25%2012;30;29.PNG)

- CloudFront 목록에서 해당 Distribution 선택 후 `Distribution Settings` 버튼 클릭

![2016-08-25 12;32;00.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/eMums5p0QPCRbxi54c5M_2016-08-25%2012;32;00.PNG)

- Origins Tab 선택 후 `Create Origin` 버튼 클릭하여 Origin 등록

![2016-08-25 13;03;46.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/J28lGr7PRSKNT9mh66Nd_2016-08-25%2013;03;46.PNG)

- Origin Domain Name
	+ 오리진의 도메인 이름을 설정. 
  + Origin Domain Name 부분을 클릭하면 현재 사용할 수 있는 S3 버킷과 ELB의 목록이 표시 됨.
  + 위에서 생성했던 s3 bucket을 origin으로 선택함.
  + 'contents.icloudyou.org.s3.amazonaws.com' 선택
- Origin Path
	+ 해당 Origin의 context Path를 지정 가능.
  + 공백으로 둠
- Origin ID
	+ 오리진을 구분하는 ID. 
  + Origin Domain Name에서 S3 버킷을 선택하면 자동으로 설정됨.
- Restrict Bucket Access
	+ S3 버킷에 CloudFront 만 접근할 수 있도록 설정하는 옵션.
  + `No`를 선택.
- Origin Access Identity
	+ 오리진에 접근할 식별자. 새로 생성할 수도 있고 이미 있는 것을 사용할 수도 있습니다. 
  + `Restrict Bucket Access` `No` 선택 시 해당 설정 hidden
- Comment 
	+ 새로 생성할 식별자 이름.
	+ Origin Access Identity를 `Create a New Identity`로 선택하면 자동으로 생성.
- Grant Read Permissions on Bucket
	+ CloudFront가 S3에서 파일을 읽을 수 있는 권한을 버킷의 Bucket Policy에 설정. 
  + Yes로 설정하면 다른 모든 접속은 제한되고 CloudFront만 접근할 수 있도록 버킷에 Bucket Policy가 설정됨.
  + `Restrict Bucket Access` `No` 선택 시 해당 설정 hidden
- Origin Custom Headers
	+ 오리진에 요청을 전달할 때마다 사용자 지정 헤더를 포함하도록 CloudFront를 구성 가능.
  + 공백으로 둠.
- 모든 설정이 완료 되면 `Create` 버튼 클릭하여 Origin 등록.

![2016-08-25 13;00;42.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/sadEyPqwSeCHND14it3y_2016-08-25%2013;00;42.PNG)

- `contents.icloudyou.org.s3.amazonaws.com` Origin이 등록된 것을 목록에서 확인 가능.
- 마찬가지로 `profile.icloudyou.org` bucket을 origin으로 등록 하기 위해 위 과정을 반복한다.

### - origin behaviors 등록

![2016-08-25 13;25;47.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/UkqYpUcQR9SL0zFLjxrJ_2016-08-25%2013;25;47.PNG)

- CloudFront 배포시 지정한 origin `S3-origin.icloudyou.org` bucket에 대한 behavior가 default로 등록되어 있음.
- 위에서 origin으로 등록한 `S3-contents.icloudyou.org`, `S3-profile..icloudyou.org` bucket에 대한 behaviors 설정이 필요함.
- Distribution Setting에서 behaviors Tab 선택
- Create Behavior 버튼 클릭

![2016-08-25 13;29;41.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/CXN84IJxSNybEz0WXbFd_2016-08-25%2013;29;41.PNG)

- Path Pattern
	+ CloudFront로 파일을 가져올 규칙.
  + `/contents/*` 입력. DomainName/contents로 들어오는 모든 요청에 대해 cloudfront는 contents.icloudyou.org bucket에서 파일을 가져오겠다는 의미.
- Origin
	+ `S3-contents.icloudyou.org` 선택
- Viewer Protocol Policy
  + `HTTP and HTTPS` 선택
- Allowed HTTP Methods 
  + `GET, HEAD, OPTIONS. PUT, POST, PATCH, DELETE` 선택
- Object Caching
  + `Use Origin Cache Headers` 선택
- Forward Cookies
  + `None(Improves Caching)` 선택
- Forward Query Strings 
  + `No (Improves Caching)` 선택.
- Smooth Streaming 
  + 'No' 선택
- Restrict Viewer Access
  + `No` 선택
- Compress Objects Automatically
	+ 'No' 선택
-  모든 설정이 됬으면 `Create` 버튼을 클릭하여 behavior를 생성.
- `S3-profile.icloudyou.org` 에 대한 위 과정을 반복.

![2016-08-25 13;44;35.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/Ms9I4TSjSD7gmO4DcqJr_2016-08-25%2013;44;35.PNG)

- 모든 origin에 대한 behavior를 등록하면 목록에서 확인 할 수 있음.

# AWS Route 53 연동
## Route53 Hsted zones 생성

![2016-08-31 12;10;44_0.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/8ofyAGlwQgW7ldSMhBGv_2016-08-31%2012;10;44_0.png)

- AWS Web Service 목록 중 `Route 53`를 선택.

![2016-08-31 12;08;38_0.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/Xv7606jCTJ6IKMlG9Hww_2016-08-31%2012;08;38_0.png)

- 왼쪽 메뉴에서 Hosted zones 선택

![2016-08-31 12;16;14_0.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/SeHgWyvShWGkw01X4w0x_2016-08-31%2012;16;14_0.png)

- 위쪽의 Create Hosted Zone 클릭하여 Hosted Zone 생성

![2016-08-31 12;18;17_0.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/mRVV8CwsSYC6a4hMmtqY_2016-08-31%2012;18;17_0.png)

- Domain Name
	+ 구입한 Domain명을 입력함. 
	+ `icloudyou.org` 입력
- Comment
	+ Domain에 대한 설명을 입력함
  + 필수 사항 아님.
  + `icloudyou.org` 입력
- Type
	+ Public Hosted Zone
		* Public망에서 사용 할 Domain  
  + Private Hosted Zone for Amazon VPC
		* Amazone VPC 내부에서 사용 할 Domain
    * VPC ID: 연동 할 VPC 선택 가능.
	+ `Public Hosted Zone` 선택
- 모든 설정이 완료 되면 `Create` 버튼을 클릭하여 Hosted Zone 생성

![2016-08-31 12;29;27_0.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/85IlzHkrTYWmJikQ3zJu_2016-08-31%2012;29;27_0.png)

- Hosted zones 목록에 icloudyou.org 도메인이 생성됨.
- 해당 Domain Name을 클릭하여 Record Set을 추가.

![2016-08-31 12;46;58_0.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/CCT9eOvXQc2qxqv1zwup_2016-08-31%2012;46;58_0.png)

- Hosted zone 을 생성하면 다음과 같이 기본적으로 두개의 Record Set이 등록되어 있음
	+ NS(Name Server)
  + SOA(Start of authority)
- NS Type의 Record Set을 선택하면 Amazon에서 제공하는 NameServer 4개의 domain을 확인 할 수 있음.
- 도메인 구입한 사이트에 접속한 뒤 NameServer를 설정해주어야 함.

![2016-08-31 12;53;23_0.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/mJbyfIrlRBmY0p6TZwXz_2016-08-31%2012;53;23_0.png)
![2016-08-31 12;53;50_0.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/Kb7FRv3SS1a5VYtfmmTB_2016-08-31%2012;53;50_0.png)

- 설정 후 http://whois.kisa.or.kr/kor/에 접속하여 구입한 도메인을 조회함. 이 사이트에서 도메인의 네임서버가 완전히 변경되었는지 확인할 수 있음.

## Route 53과 CloudFront 연동하여 A Record 생성

![2016-09-01 10;49;11.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/wrwt5o5YTsmmgkxjK3o2_2016-09-01%2010;49;11.PNG)

- Create Record Set 버튼을 클릭하여 Record Set을 생성한다.

![2016-09-01 10;50;23.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/PxXmESiFRYOo5Bw126DD_2016-09-01%2010;50;23.PNG)

- Name
	+ 생성 할 Sub Domain명을 입력
  + `image` 입력
- Type
	+ A - IPv4 Address
		* IP Mapping을 통한 A Record 생성
  + CNAME - Canonical name
		* Domain명 Mapping을 통한 CNAME 생성
  + `A - IPv4 Address` 선택
- Alias
	+ IP 주소 대신 AWS 리소스를 설정 할 수 있음.
  + `Yes` 선택
- Alias Target
	+ AWS 리소스의 주소를 설정. Alias Target 입력 부분을 클릭하면 사용할 수 있는 AWS 리소스(S3, ELB, CloudFront)의 목록이 표시 됨.
  + 해당 CloudFront Resource 선택
- Routing Policy
	+ 라우팅 정책을 설정.
  + simple
		* 가장 기본적인 라우팅 정책.
  + Latency
		* 현재 위치에서 지연 시간 Latency가 가장 낮은 리전의 IP 주소를 알려줌.
	+ Weighted 
		* 서버 IP 주소 또는, 도메인(ELB) 마다 가중치Weight를 부여하여 트래픽을 조절하는 기능. 
	+ Failover
 		* 장애가 발생한 서버의 IP 주소 또는 도메인(ELB)은 알려주지 않는 기능.
	+ Geolocation
 		* 지역별로 다른 IP 주소를 알려줌.
  + `simple` 선택
  
![2016-09-01 11;23;37.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/4H4xO77WQCSXM572Z08A_2016-09-01%2011;23;37.PNG)

- 도메인의 레코드 목록에 CloudFront A 레코드가 추가 됨.
- `image.icloudyou.org`를 통해 CloudFront 접근 가능.

## Route 53과 RDS(MySQL) 연동하여 CNAME Record 생성

![2016-09-01 12;54;00.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/cntsgDDrSVOf2nC19OQX_2016-09-01%2012;54;00.PNG)

- 위에서 생성한 RDS(`seoul-qa-pg-mysql`)의 Endpoint URL을 확인 후 복사.

![2016-09-01 12;59;56.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/G4AlBvppTpOnRBg6r3NC_2016-09-01%2012;59;56.PNG)

- Record Set 목록에서 `Create Record Set` 버튼을 클릭하여 CNAME Record Set 생성

![2016-09-01 13;05;51.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/8aewDM7GRla1JD7oQD6K_2016-09-01%2013;05;51.PNG)

- Name
  + `rds-master` 입력
- Type
  + `CNAME - Canonical name` 선택
- Alias
	+ Alias는 S3, ELB, CloudFront만 가능 하기 때문에 `No` 선택 목록이 표시 됨.
- Value
	+ Alias를 사용하지 않을 때 직접 Endpoint url을 입력 할 수 있음.
  + 위에서 복사한 `RDS Endpoint URL` 을 붙여넣기 혹은 URL 입력.
- Routing Policy
  + `simple` 선택
- 모든 설정이 완료 되면 하단의 `Create` 버튼 클릭하여 CNAME Record Set 생성

![2016-09-01 13;11;50.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/Bh6F8MzYTiFIwjFeD8Nw_2016-09-01%2013;11;50.PNG)

- 도메인의 레코드 목록에 RDS CNAME 레코드가 추가 됨.
- `rds-master.icloudyou.org`를 통해 RDS 접근 가능.
