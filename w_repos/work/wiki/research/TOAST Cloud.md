# TOAST Cloud

NHN Entertainment에서 만든 인프라, 플랫폼 클라우드입니다.
게임 앱 제작자 등 인프라와 앱 서비스를 위한 플랫폼을 모두 필요로 하는 고객을 대상으로 서비스를 시작하고 있습니다.

![20150312_160751_HDR.jpg](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/97W4ewyfQdWxo3dxqnBx_20150312_160751_HDR.jpg)

과금, 분석, 인증, 모니터링 등 서비스를 위해 바로 필요한 플랫폼을 모두 무료로 제공합니다.

![20150312_160945_HDR.jpg](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/Fp2OKaBtQiKR8eOyZFE3_20150312_160945_HDR.jpg)

초기에는 openstack에 의존적으로 구현되었지만,

![20150312_161040_HDR.jpg](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/2M3mSQICR6Gxrme2f6vg_20150312_161040_HDR.jpg)

이를 뒤엎고 자체 Iaas, Paas 프레임워크를 구현하여 현재 Hybrid Cloud와 openstack 버전 업그레이드에 안정적으로 대응 가능한 구조입니다.
아직은 openstack 기반의 Iaas만 제공하지만 향후 AWS등 멀티 클라우드를 지원하기 위한 초석으로 보이며, 실제로 내년에는 AWS도 서비스 할 예정이라고 합니다.

![20150312_161325_HDR.jpg](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/vlM9UvauSUHX6y2q8Yzp_20150312_161325_HDR.jpg)

현재 주요 인프라 구성 요소는 openstack을 통해 제공합니다.

![20150312_161339_HDR.jpg](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/exjT2hKyTXylNK4Rp0yK_20150312_161339_HDR.jpg)

네트워크는 Public Cloud와 Private Cloud 망을 분리 및 통합 제공 가능하며, 고객사에 이미 사용 중인 레거시 네트워크와도 연계가 가능하다고 합니다. 즉 기존 인프라와 Cloud와의 통합이 꼭 필요한다고 인지하고 있으며, 이를 위한 네트워크 구성을 지원합니다.

![20150312_161453_HDR.jpg](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/w6sss4RLRW2Fnk5vnYX3_20150312_161453_HDR.jpg)

스토리지는 일반적인 openstack 구조입니다.

![20150312_161528_HDR.jpg](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/CqOdQTRQrq3tMUOHVtsO_20150312_161528_HDR.jpg)

인프라에 배포된 앱이 즉시 서비스 가능하도록 인증, 권한, 모니터링, 미터링 등의 플랫폼을 기본 제공합니다.

![20150312_161649_HDR.jpg](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/M2Li9etHS467uSovMv3Z_20150312_161649_HDR.jpg)

분석(Analytics) 플랫폼은 Hadoop / Kafka / Storm을 이용하여 구현되어 있습니다. 긴주기의 분석은 Hadoop analyzer를 통해서 결과를 추출하며, 실시간 동접 정보 등의 급박한 정보는 Storm을 통해서 바로 확인 가능하다고 합니다.

![20150312_161854_HDR.jpg](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/6gxB5bCRgmep8DQoW9o7_20150312_161854_HDR.jpg)

서비스 릴리즈는 4주 스프린트로 진행합니다. 3주 동안 개발하고 1주 동안 QA기간을 가집니다. 원래 2주로 진행했는데 QA를 제대로 할 수 없는 일정이라서 4주로 변경했다고 합니다.

![20150312_162030_HDR.jpg](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/gyleS9p1QsS0ok0awEXq_20150312_162030_HDR.jpg)

BTS에 이슈(Spec)를 등록하고 구현 및 코드리뷰를 진행한 후, 3번의 QA를 거쳐서 릴리즈합니다.

![20150312_162124_HDR.jpg](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/TGAKsdJwTBaS7mmsqEBu_20150312_162124_HDR.jpg)
