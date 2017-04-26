# RPM Package Manager

RPM Package Manger (RPM) (originally Red Hat Package Manager, now a recursive initialism) is a package management system. The name RPM variously refers to the .rpm file format, files in this format, software packaged in such files, and the package manager itself. RPM was intended primarily for Linux distributions; the file format is the baseline package format of the Linux Standard Base.

Even though it was created for use in Red Hat Linux, RPM is now used in many GNU/Linux distributions. It has also been ported to some other operating systems, such as Novell NetWare (as of version 6.5 SP3) and IBM's AIX (as of version 4).

An RPM package can contain an arbitrary set of files. The larger part of RPM files encountered are "binary RPMs" (or BRPMs) containing the compiled version of some software. RPM files however may also contain the source code, then called "source RPMs" (or SRPMs) used to produce a package. SRPMs have an appropriate tag in the file header that distinguishes them from normal (B)RPMs, causing them to be extracted to /usr/src on installation. SRPMs also customarily carry the file extension ".src.rpm" (.spm on file systems limited to 3 extension characters, i.e. old DOS FAT)

## History

RPM was originally written in 1997 by Erik Troan and Marc Ewing, based on pms, rpp and pm experiences.
pm was written by Rik Faith and Doug Hoffman in May 1995 for Red Hat Software. The design and implementation of pm was influenced greatly by previous experience with pms, a Package Management System designed and implemented by Rik Faith and Kevin Martin in the fall of 1993 for the Bogus Linux Distribution. pm preserves the "pristine sources + patches" paradigm of pms, while adding features and eliminating arbitrary limitations present in the implementation. pm provides greatly enhanced database support for tracking and verifying installed packages.

## Features

For a system administrator performing software installation and maintenance, the use of package management rather than manual building has advantages such as simplicity, consistency and the ability for these processes to be automated and non-interactive.

Features of RPM include:

    - RPM packages can be cryptographically verified with GPG and MD5
    - Original source archive(s) (e.g. .tar.gz, .tar.bz2) are included in SRPMs, making verification easier
    - PatchRPMs and DeltaRPMs, the RPM equivalent of a patch file, can incrementally update RPM-installed software
    - Automatic build-time dependency evaluation
    
## Local operations

Packages may come from within a particular distribution (for example Red Hat Enterprise Linux) or be built for it by other parties (for example RPM Fusion for Fedora). Circular dependencies among mutually dependent RPMs (so-called "dependency hell") can be problematic; in such cases a single installation command needs to specify all the relevant packages.