# NFV and SDN

[NFV and SDN: What is the difference?](https://www.sdxcentral.com/articles/contributed/nfv-and-sdn-whats-the-difference/2013/03/)

## SND - Born on the campus, Matured in the Data Center
SDN got its start on campus networks. AS researchers were experimenting with new protocols they were frustrated the need to change the software in the network devices each time they wanted to try a new approach. They came up with the idea of making the behavior of the network devices programmable, and allowing them to be controlled by a central element. This lead to a formalization of the principle elements that defined SDN today:

  - Separation of control and fotwarding functions
  - Centralization of control
  - Ability to program the behavior of the network using well-defined interfaces

The next area of success for SDN was in cloud data centers. As the size and scope of these data centers expanded it became clear that a better way was needed to connect and control the explosion of virtual machines. The principles of SDN soon showed promise in improving how data centers could be controlled.

## OpenFlow - Driving Towards Standards
So, where does OpenFlow come into the picture? As SDN started to gain more prominence it became clear that standardization was needed. The Open Networking Forum(ONF) was oraganized for the purpose of formalizing one approach for controllers talking to network elements, and that approach is OpenFlow. OpenFlow defines both a model for how traffic is organized into flows, and how those flows can be controlled as needed. This was a big step forward in realizing the benefits of SDN. In addition to ONF, the OpenDaylight Project also aims to advance open standards and SDN adoption. Announced in April 2013 by the Linux Foundation, the OpenDaylight Project's goal is to offer a functional SDN platform that gives users directly deployed SDN without the need for other components. In addition to this, contributors and vendors can deliver add-ons and other pieces that will offer more value to OpenDaylight.

## NFV
Whereas SDN was created by researchers and data center architects, NFV was created by a consortium of service providers. Service providers attempted to speed up deployment of new network services in order to advance their revenue and growth plans, and they found that hardware-based appliances limited their ability to achieve these goals. They looked to standard IT virtualization technologies and found NFV helped accelerate service innovation and provisioning. With this, several providers banded together and created the European Telecommunications Standards Institute(ETSI). The creation of ETSI resulted in the foundation of NFV's basic requirements and architecture. The original NFV white paper describes the problems that they are facing, along with their proposed solution:

ETSI continues to address NFV innovation. In September 2014, the Linux Foundation announced another open source reference platform - the Open Platform for NFV project(OPNFV). OPNFV will work closely with ETSI and others to press for consistent implementation of open standards.

## SDN versus NFV
Now, let's turn to the relationship between you SND and NFV. The original NFV white paper gives an overview or the relationship between SND and NFV:

  As show in Figure 1, Network Functions Virtualization is highly complementary to Software Defined networking(SND), but noe dependent on it(or vice-versa). Network Functions Virtualization can be implemented without a SDN being required, although the two concepts and solutions can be combined and potentially greater value accured.
  
![Figure 1: network-functions-virtualisation-relationship-with-sdn.jpg](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/K7j6DclkSRK3fOv9Gbiv_network-functions-virtualisation-relationship-with-sdn.jpg)
  
  Network Functions Virtualization goals can be achieved using non-SDN mechanisms, relying on the techniques currently in use in many datacentres. But approaches relying on the separation of the control and data forwarding planes as proposed by SDN can enhance performance, simplify compatibility with existing deployments, and facilitate operation and maintenance procedures. Network Functions Virtualization is able to support SDN by providing the infrastructure upon which the SDN software can be run. Furthermore, Network Functions Virtualization aligns closely with the SDN objectives to use commodity servers and switches.

## SDN and NFV - Working Together?
Let's look at an example of how SDN and NFV could work together. First, Figure2 shows how a managed router service is implemented today, using a router at the customer site.

![Figure 2: ManagedRouter_Before.png](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/6bmYWvh0RxODPPC08EYw_ManagedRouter_Before.png)

NFV would be applied to this situation by virtualizing the router functions, as shown in Figure 3. All that is left at the customer site is a Network Interface Device(NID) for providing a point of demarcation as well as for measuring performance.

![Figure 3: managed-router-service-using-nfv.jpg](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/qqzaIfAtTRSqdQpmWalR_managed-router-service-using-nfv.jpg)

Finally, SDN is introduced to seperate the control and data, as shown in Figure 4. Now, the data packets are forwarded by an optimized data plane, while the routing(control plane) function is running in a virtual machine running in a rack mount server.

![Figure 4: managed-router-service-using-nfv-and-sdn.jpg](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/SJRaOXwZQWGN4tVGGUAg_managed-router-service-using-nfv-and-sdn.jpg)

The combination of SDN and NFV shown in Figure 4 provides an optimum solution:

  - An expensive and dedicated appliance is replaced by generic hardware and advanced software.
  - The software control plane is moved from an expensive location(in dedicated platform) to an optimized location(server in a data center or POP).
  - The control of the data plane has been abstracted and standardized, allowing for network and application evolution without the need for upgrades of network devices.

## Summary
The table below provides a brief comparision of some of the key points of SDN and NFV.

![SDN and NFV summary.PNG](https://s3-ap-northeast-1.amazonaws.com/torchpad-production/wikis/1595/9GSYjXMqRROLnfwQW6Ek_SDN%20and%20NFV%20summary.PNG)
