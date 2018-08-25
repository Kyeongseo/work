# [yum](http://yum.baseurl.org/)
The Yellowdog Updater, Modified (yum) is an open-source command-line package-management utility for Linux operating systems using the RPM Package Manager. Though yum has a command-line interface, several other tools provide graphical user interfaces to yum functionality

Yum allows automatic updates, package and dependency management, on RPM-based distributions. Like the Advanced Packaging Tool (APT) from Debian, yum works with software repositories (collections of packages), which can be accessed locally or ever a network connection.

Under the hood, yum depends on RPM, which is a packaging standard for digital distribution of software, which automatically uses hashes and digisigs to verifythe authorship and integrity of said software; unlike some app stores, which server a similart function, neither yum nor RPM provide built-in support for proprietary restrictions on copying of packages by endusers. Yum is implemented as libraries in the Python programming language, with a samll set of programs that proide a command-line interface. GUI-based wrappers such as Yum Extender(yumex) also exist. A rewrite of yum based on libsolv named DNF is currently being developed and expected to replace yum as the default package manager is Fedora 22.

## History
As a full rewrite of its predecessor tool, Yellowdog Updater(YUP), yum evolved primarily in order to update and manage Red Hat Linux systems used at the Duke University Department of Physics. Seth Vidal and Michael Stenner did the original development of yum at Duke, while yup was originally developed and maintained by Dan Burcaw, Bryan Stillwell, Stephen Edie, and Troy Bengegerdes os Yellow Dog Linux. In 2003 Robert G. Brown at Duke published documentation. Subsequent adopters included Red Hat Enterprise Linux, Fedora, CentOS, and many other RPM-based Linux distributions, including Yellow Dog Linux itself, where it replaced the original YUP utility, which had its last update on SourceForge in 2001. By 2005, it was estimated to be available on over half of the Linux market, and by 2007 yum was considered "the tool of choice" for RPM-based Linux distributions.

The GNU General Public License of yum allows the tree and open-source software to be freely distributed and modified without any royalty, if other items of the license are followed. Vidal continued to contribute to yum until he died in Durham, North Carolina bicycle accident on 9 July 2013.

Yum aimed to address both the perceived deficiencies in the old APT-RPM, and restrictions of the Red Hat up2date package management tool. yum superseded up2date in Red Hat Enterprise Linux 5 and later. Some authors refer to it as the Yellowdog Update Manager, or suggest that "Your Update Manager" would be more appropriate. A basic knowledge of yum is often included as a requirement for Linux system-administrator certification.

## Operations
yum can perform operations as:

    - installing packages
    - deleting packages
    - updating existing installed packages
    - listing available packages
    - listing installed packages
    

From Wikipedia, the free encyclopedia