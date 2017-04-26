#####.yo-rc.json

- __.yo-rc.json__ file is a JSON file where configuration objects from multiple generators are stored.
- managing configuration
	- these configurations can be stored in the __.yo-rc.json__ file through the Yeoman Storage API. this API is accessible through the generator.config object.
- ex)
	- jhipsterVersion, baseName, packageName, serverPort, databaseType ...

#####package.json

- npm's __package.json__
- this file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies.
- ex)
	- name, version, description, devDependencies(bower, bower-sync, eslint-config-angular, gulp, jasmine-core, karma, lodash, map-stream, protractor ...), engines (node: 4.3), scripts ...

#####bower.json

- Packages are defined by a mainfest file __bower.json__. this is similar to Node's package.json.
- interactively create a bower.json with ```$ bower init```
- ex)
	- version, name, adddPath, depencencies(angular: 1.5.8, angular-bootstrap: 1.3.3, ..., bootstrap-sass: 3.3.7, ..., swagger-ui: 2.1.5), overrides(...), resolutions ...

#####pom.xml

- A Project Object Model or POM is the fundamental unit of work in Maven. It is an XML file that contains information about the project and configuration details used by Maven to build the project.

#####app.module.js
- use strict
	- Strict Mode is a new feature in ECMAScript5 that allows you to place a program, or function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions.

#####state.handler.js
- angular.module('c-spider').factory('stateHandler',stateHandler);
	- factory. 서비스를 생성하는 방법.