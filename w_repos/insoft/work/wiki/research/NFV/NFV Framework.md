# Framework

The NFV framework consists of three main components:

1. **Virtualized Network Functioins(VNF)** are software implementations of network functions that can be deployed on a Network Function Virtualization Infrastructure(NFVI).
2. **NFV Infrastructure(NFVI)** is the totality of all hardware and software components which build up the environment in which VNFs are deployed. The NFV-Infrastructure can span across several locations. The network providing connectivity between these locations is regarded to be part of the NFV-Infrastructure.
3. **Network Functions Virtualization Management and Orchestration Architectural Framework(NFV-MANO Architectural Framework)** is the collection of all functional blocks, data repositories used by these functional blocks, and reference points and interfaces through which these functional blocks exchange information for the purpose of managing and orchestrating NFVI and VNFs.

The building block for both the NFVI and the NFV-MANO is the NFV platform. In the NFVI role, it consists of both virtual and physical compute and storage resources, and virtualization software. In its NFV-MANO role it consists of VNF and NFVI managers and virtualization software operating on a hardware controller. The NFV platform implements carrier-grade features used to manage and monitor the platform components, recover from failures and provide effective security - all required for the public carrier network.
