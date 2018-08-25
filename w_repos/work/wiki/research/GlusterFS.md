# GlusterFS

GlusterFS is a scale-out network-attached storage file system. It has found applications including cloud computing, streaming media services, and content delivery networks. GlusterFS was developed originally by Gluster, Inc., then by Red Hat, Inc., after their purchase of Gluster in 2011.

## Design

GlusterFS aggregates various storage servers over Ethernet or Infiniband RDMA interconnection into one large parallel network file system. It if free software, with some parts licensed under the GNU General Public License (GPL) v3 while others are dual licensed under either GPL v2 or the lesser General Public License (LGPL) v3. GlusterFS is based on a stackable user space design.

GlusterFS has a client and server component. Servers are typically deployed as storage bricks, with each server running a glusterfsd daemon to export a local file system as a volume. The glusterfs client process, which connects to servers with a custom protocol over TCP/IP, InfiniBand or Socket Direct Protocol, creates composite virtual volumes from multiple remote servers using stackable translators. By default, files are store whole, but striping of files across multiple remote volumes is also supported. The final volume may then be mounted by the client host using its own native protocol via the FUSE mechanism, using NFS v3 protocol using a built-in server translator, or accessed via gfapi client library. Native-protocol mounts may then be re-exported  e.g. via the kernel NFSv4 server, SAMBA, or the object-based OpenStack Storage (Swift) protocol using the "UFO" (Unified File and Object) translator.

Most of the functionary of GlusterFS is implemented as translators, including:

    - File-based mirroring and replication
    - File-based striping
    - File-based load balancing
    - Volume failover
    - Scheduling and disk caching
    - Storage quotas
    - Volume shapshots with user serviceability (since GlusterFS version 3.6)

The GlusterFS server is intentionally kept simple: it exports directory as-is, leaving it up to client-side translators to structure the store. The clients themselves are stateless, do not communicate with each other, and are expected to have translator configurations consistent with each other. GlusterFS relies on an elastic hashing algorithm, rather than using either a centralized or districuted metadata model. With version 3.1 and later of GlusterFS, volumes can be added, deleted, or migrated dynamically, helping to avoid configuration coherency problems, and allowing GlusterFS to scale up to several petabytes on commodity hardware by avoiding bottlenecks that normally affect more tightly-coupled distributed file systems.
GlusterFS has been used as the foundation for academic research and a survey article.
Red Hat markets the software for three markets: "on-premises", public cloud and "private cloud"



[from wikipedia ](https://en.wikipedia.org/wiki/GlusterFS)