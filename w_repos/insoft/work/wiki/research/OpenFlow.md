# OpenFlow 란

최근 네트워크 가상화를 실현하는 새로운 기술로 OpenFlow가 주목받고 있다. OpenFlow는 네트워크상의 장비를 소프트웨어로 일괄 제어하는 SDN(Software-Defined Network)을 기반으로 한 기술이다.

최근에는 기업 네트워크가 단일 벤더로 구성된 경우가 거의 없으며 복수 벤더의 제품을 조합한 멀티 벤더로 구성되어 있다. 또한 대부분의 네트워크 장비는 서버상에서 동작하는 OS 설정과는 달리 벤더별로 설정 방법이 다르다. 그렇기 때문에 네트워크 장비의 운영담당자는 벤더별로 설정 방법 등의 기술을 익혀야 하며, 이와 같이 높은 기술 레벨을 가진 인재를 확보하는 것이 큰 과제로 떠오르고 있다.

네트워크 가상화를 실현시키는 기술 중의 하나로 VLAN이 있으나, 이 기술은 다음과 같은 문제를 갖고 있다.
- 각 VLAN에 할당되는 VLAN ID 관리가 필요함
- 각 LAN 스위치에 VLAN 설정이 필요함
- 가상환경의 라이브 마이그레이션 대응이 어려움

OpenFlow는 이러한 문제를 해결할 수 있는 기술로서 기대를 모으고 있다. 현재 많은 네트워크 장비는 데이터 전송 기능과 목적지까지의 네트워크 경로를 계산하는 기능을 한 대의 장비로 구현하고 있다. 이이 비하여 OpenFlow에서는 이러한 두 가지 기능을 분할하여 데이터 전송 기능(Data Plane)은 스위치에 그대로 두고, 경로 계산 기능(Control Plane)은 외부 서버에 **OpenFlow Controller**로 집약하여 스위치를 집중 관리하는 형태로 운영한다.

OpenFlow에 대응하는 스위치인 **OpenFlow 스위치**는 OpenFlow Controller가 작성한 플로우 테이블에 따라 데이터를 전송하는 기능을 담당한다. OpenFlow 스위치에 플로우 테이블이 없는 트래픽에 대해서는 OpenFlow Controller 에 질의하고, OpenFlow Controller는 그에 맞는 플로우 테이블을 배포한다. 또한 OpenFlow Controller와 OpenFlow 스위치 사이의 통신은 **OpenFlow Protocol**로 이루어진다.

![500px-OpenFlowSwitch.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/KYkjFUSTCKFQrjpQJK5Q_500px-OpenFlowSwitch.png)


# OpenFlow와 클라우드

OpenFlow에서는 모든 트래픽을 플로우 테이블에 설정된 "플로우 단위"로 제어한다.

OpenFlow Controller가 작성한 플로우 테이블에서는 플로우를 식별하기 위한 스위치 물리 포트와 MAC 주소, IP 주소, 포트 번호 등의 정보와 각 플로우의 전송/파기 등과 관련된 액션을 설정한다.

최근 기업에서 클라우드 서비스를 활용하는 움직임이 점점 활발해지고 있다. 그 중에서도 여러 사용자가 동일한 하드웨어를 공유하고 사용하는 "퍼블릭 클라우드" 형태가 주목받고 있다. 이 환경에서는 각 사용자의 보안정책에 맞는 서로 다른 하드웨어 구성 제공은 불가능하나 여기에 OpenFlow를 적용하면 유연한 네트워크를 구성할 수 있게 된다.

OpenFlow에 대응하는 장비는 아직 많지 않으나 앞으로 스위치와 가상 Appliance등 OpenFlow 장비가 점차 늘어날 것으로 보인다. 스위치뿐만이 아닌 가상 Appliance 등 다른 장비로도 OpenFlow에 대응 가능한 범위가 넓어지면서 별도의 시스템 환경을 사용하는 프라이빗 클라우드에 가까운 환경을 제공할 수 있게 된다. 즉 가상 Appliance의 방화벽과 부하분산 장치를 사용하느냐 등 사용자별로 다른 요구사항을 적용할 수 있게 되어 하드웨어 구성에 제약이 없는 유연한 시스템 구축이 가능해진다.