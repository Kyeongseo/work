# 인프라 아키텍쳐 세미나

## VPC
Virtual Private Cloud
aws의 vpc서비스는 인터넷과 격리된 프라이빗 네트워크를 구축할 수 있게 해준다.
사용자마다 default vpc가 제공되며, 아무런 설정을 하지 않고 인스턴스를 생성하면 default vpc안에 생성된다.

- vpc의 장점
    + 보안성: 격리된 네트워크 구성
    + 네트워크 트래픽 제어: 라우팅 테이블을 설정하고 구성하여 트래픽 흐음을 제어할 수 있다.
    + 관리의 효율성: vpc 내부에 있는 인스턴스의 사설 ip를 자유롭게 설정할 수 있다.
    + 통합: 여러 aws자원을 독립적인 네트워크로 구성할 수 있다.

vpc wizard
- VPC with a Single Public Subnet
- VPC with Public and Private Subnets
- VPC with Public and Private Subnets and Hardware VPN Access
- VPC with a Private Subnet Only and Hardware VPN Access

vpc create
- cidr block
    + 인터넷 주소로 구성되는 네트워크를 나눠서 관리하기 위한 표기법
    + 한블럭당 가능한 ip주소 범위는 0 ~ 255 8bit다
    + /뒤의 숫자는 고정된 네트워크 비트 크기
    + | cidr format | first host | last host | number of hosts |
        | --- | --- | --- | --- |
        | 10.0.0.0/32 | 10.0.0.0 | 10.0.0.0 | 1개 |
        | 10.0.0.0/24 | 10.0.0.0 | 10.0.0.254 | 255개 | 
        | 10.0.0.0/16 | 10.0.0.0 | 10.0.255.255 | 6,5000개 | 
        | 10.0.0.0/8 | 10.0.0.0 | 10.255.255.255 | 1,600만개 | 
        | 10.0.0.0/25 | 10.0.0.0 | 10.0.0.126 | 127 | 

- tenancy
    + default: 여러유저가 물리적인 컴퓨터를 공유
    + dedicated: 독립적인 전용 하드웨어를 사용

- default route table 생성된것 확인



## Subnet
하나의 네트워크에서 모든 인스턴스를 관리할 수 없으니 이를 더 작은 네트워크로 나누어서 관리 합니다. 이 작은 네트워크를 서브넷이라고 합니다.
우리는 인터넷과 통신이 가능한 public subnet과 인터넷과 통신을 단절하여 보안을 높인 private subnet으로 구성 합니다.
서브넷은 zone별로 생성할 수 있으니 a,c 두개의 존에 2개씩 총 4개의 서브넷을 생성 합니다.

- 2개의 존에 subnet을 구성하는 것은 가용성 확보를 위해서 입니다.
    + 가용성이란 중단없이 서비스를 운용하는 능력
    + 하나의 존에 문제가 생기더라도 다른 존을 이용해서 서비스를 지속


subnet create
- name tag, vpc, aze, cidr 선택
    + cidr은 vpc cidr범위 내에서 적용

- default network ACL 생성 된것 확인  


## Route Tables
네트워크에서 발생하는 패킷의 경로를 설정

- Route Tables 메뉴에 들어가보면 방금 생성한 4개의 서브넷이 하나의 라우트 테이블을 공유 하고 있는 것을 확인 할 수 있습니다.

- public, private용으로 사용할 route table을 생성 합니다.
    + private용 route table은 2개 생성 합니다.
        * 그 이유는 nat gateway때문입니다.

- subnet 할당

## network acl(network access control list)
- 서브넷의 방화벽 이라고 생각하면 된다.
- 서브넷의 역할에 맞게 public, private를 생성하고 할당
- 각 서브넷의 공통적으로 사용해야 하는 시큐리티만 적용하여 러프하게 작성
    + 100부터 시작하는게 좋음
    + 번호가 낮은 규칙부터 적용된다.
- public 
    + inbound
        * 80, 443, 22, 1024-65535(서브넷에서 보낸 요청의 인바운드 반환 트래픽)
    + outbound
        * all

- private
    + inbound
        * all tcp - 10.0.0.0/16
        * 1024 - 65535(NAT 디바이스로부터의 반환 트래픽)
    + outbound
        * all

## Internet Gateway
VPC의 인스턴스와 인터넷 간에 통신할 수 있게 해줍니다.

create internet gateway
- vpc에 attach
- public route에 연결
- subnet에서 제대로 연결된것 확인


## NAT Gateway
NAT(Network Address Translation)란?
- IP패킷의 주소를 변경 해주는 기술
- public 서브넷에서는 인터넷게이트웨이 통해 인터넷 접속이 가능하다. 하지만 private 서브넷은 인터넷으로부터 격리된 네트워크라서 yum 레파지토리에 접근해 패키지를 다운 받는 등의 작업을 할 수가 없다.
- 프라이빗 서브넷에 있는 인스턴스 주소가 10.0.0.1이라고 가정하면 이 인스턴스에서 전송하는 패킷의 출발지 ip는 10.0.0.1인데 이 주소를 그대로 보내면 인터넷에서는 프라이빗 주소인 10.0.0.1을 식별할 수 없다. 그러므로 이 출발지 주소를 공인 ip로 변경해서 보내야 한다. 이 과정이 NAT입니다.

NAT 인스턴스와 NAT 게이트웨이
- NAT 게이트웨이가 NAT 인스턴스보다 우수한 가용성 및 대역폭을 제공하므로 NAT 게이트웨이를 사용하는 것이 좋습니다. 또한 NAT 게이트웨이 서비스는 관리 작업이 필요하지 않은 관리형 서비스입니다.

create nat gateway

- 2개 생성
    + 서브넷은 public, eip는 새로 생성
- 생성 후 route table로 이동하여 private route와 연결
 
VPC End point
- 인터넷에 액세스하지 않고도 VPC와 다른 AWS 서비스 간에 프라이빗통신(네트워크 트래픽에대한 대역폭 제약 없이)을 할 수 있게 해줍니다.
- 현재는 s3만 지원

create end point

- vpc선택, s3, full access
- private 라우트테이블 선택

## ELB
수신되는 트래픽을 여러 인스턴스에 자동으로 배포 합니다.

- 사용자의 요청을 가용성 존에 분산된 웹 서버로 골고루 분산
- 문제가 생긴 인스턴스는 서비스에서 제외

create elb

- application load balancing
    + 콘텐츠 기반 라우팅
    + 애플리케이션 로드밸런서는 HTTP 헤더에 접근해서 다른 백엔드 서비스에 따라 다른 요청을 처리할 수 있습니다. 예를 들어, URL에 /api라는 경로를 포함하고 있는 경우, 다른 서버 그룹(일명 target group)으로 요청을 보낼 수 있으며 /mobile은 또 다른 서버 그룹으로 보낼 수 있습니다. 이를 통해 여러 개의 마이크로서비스를 독립적으로 실행하고 확장할 수 있도록 할 수 있습니다.

Classic Load Balancer

- vpc 선택
- http 80 -> 80
- public subnet 선택
- security 설정


## Route53
DNS(도메인 이름 시스템) 웹 서비스입니다. 

create record set

- weighted
    + 가중치 70:30

- latency
    + 지연 시간
    + aws에서는 각 리젼별 서비스 응답시간에 대한 정보를 주기적으로 체크한다.
    + 그 정보를 바탕으로 응답 시간이 빠른 리젼에 연결한다.

- failover
    + primary, secondary

- geolocation
    + 해당 지역 설정

## Cloud Formation
-  "Fn::FindInMap": [
                      "Region2Principal",
                      {
                        "Ref": "AWS::Region"
                      },
                      "EC2Principal"
                    ]