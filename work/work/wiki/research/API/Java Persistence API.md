# Java Persistence API

from Wikipedia, the free encyclopedia

The **Java Persistence API(JPA)** is a Java programming language application programming interface specification  that describes the management of relational data in applications using Java Platform, Standard Edition and Java Platform, Enterprise Edition.

The Java Persistence API originated as part of the work of the JSR 220 Expert Group of the Java Community Process. JAP 2.0 was the work of the JSR 317 Expert Group.

Persistence in this context covers three areas:
  - the API inself, defined in the javax.persistence package
  - the Java Persistence Query Language (JPQL)
  - object/relational metadata


## JPA 2.0

Development of a new version of JPA 2.0 was started in 2007 in the Java Community Process as JSR 317. JPA 2.0 was approved as final on 10 December 2009. The focus of JPA 2.0 was to address features that were present in some of the popular ORM vendors but could not gain consensus approval for JPA 1.0.

Main features included were:
  - Expanded object-relational mapping functionality
    - support for collections of embedded objects, linked in the ORM with a many-to-one relationship
    - ordered lists
    - combinations of access types
  - A criteria query API
  - standardization of query 'hints'
  - standardization of additional metadata to support DDL generation
  - support for validation
  - Shared object cache support


## JPA 2.1

Development of a new version of JPA 2.1 was started in July 2011 as JSR 338. JPA 2.1 was approved as final on 22 May 2013.

Main features included were:
  - Converters - allowing custom code conversions between database and object types.
  - Criteria Update/Delete - allows bulks updates and deletes through the Criteria API.
  - Stored Procedures - allows queries to be defined for database stored procedures.
  - Schema Generation
  - Entity Graphs - allow partial or specified fetching or merging of objects.
  - JPQL/Criteria enhancements - arithmetic sub-queries, generic database functions, join ON clause, TREAT option.
