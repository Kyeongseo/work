Angular Material
===
> https://egghead.io/courses/angular-material-introduction

For developers using AngularJS, Angular Material is both a __UI Component framework__ and a reference implementation of __Google's Magerial__ Design Specification.
- This project provides a set of reusable, well-tested, and accessible UI components based on Material Design.

---
__Installing with NPM__

```
<head>
	<link rel="stylesheet" href="node_modules/angular-material/angular-material.min.css">
</head>
<body ng-app="MyApp">
	<script src="node_modules/angular/angular.min.js"</script>
									angular-animate.js
									angular-aria.min.js
									angular-material.min.js
	<script>
		angular.module('MyApp',['ngMaterial'])
			.run(function(){ ... });
	</script>
</body>
```

---
__Containers with the Layout API__

```
<body ng-app="MyApp" layout="column">
	<md-toolbar>
		<h1>Angular Material Starter</h1>
	</md-toolbar>
	<div class="container" layout="row" flex>
		<md-sidenav md-is-locked-open="true" class="lightblue"></md-sidenav>
		<md-content id="content" class="lightgreen" flex>Content</md-content>
	</div>
	<style>
		.red{background-color: red;}
		.lightblue{background-color: lightblue;}
		.lightgreen{background-color: lightgreen;}
	</style>
</body>
```
__Intro to UI Components__ (whiteframe)
```
		<md-sidenav md-is-locked-open="true" class="md-whiteframe-4dp">
			<md-list>
				<md-list-item>
					<md-button>
						<md-icon md-svg-src="svg/avatar-1.svg" class="avatar"></md-icon>
						Tomas
					</md-button>
				</md-list-item>
				<md-list-item>
					<md-button>
						<md-icon md-svg-src="svg/avatar-4.svg" class="avatar"></md-icon>
						Aaron
					</md-button>
				</md-list-item>
			</md-list>
		</md-sidenav>
		<md-content id="content" flex>
			<md-icon md-svg-src="svg/avatar-1.svg" class="avatar"></md-icon>
			<h2>Tomas</h2>
			<p>.....</p>
		</md-content>
```

---
__UI Components with Dynamic Data__

```
<body ng-app="MyApp" layout="column" ng-controller="UserController as ul">
	<md-sidenav md-is-locked-open="true" class="md-whiteframe-4dp">
		<md-list>
			<md-list-item ng-repeat="u in ul.users">
				<md-button ng-click="ul.selectUser(u)">
					<md-icon md-svg-src="{{u.avatar}}" class="avatar"></md-icon>
					{{u.name}}
				</md-button>
			</md-list-item>
		</md-list>
	</md-sidenav>
	<md-content id="content" flex>
		<md-icon md-svg-src="{{ul.selected.avatar}}" class="avatar"></md-icon>
		<h2>{{ul.selected.name}}</h2>
		<p>{{ul.selected.content}}</p>
	</md-content>
	<script> src="Users.js"</script>
	<script> src="UserService.js"</script>
	<script> src="UserController.js"</script>
	<script>
		angular.module('MyApp'.['ngMaterial','users'])
			.config(function($mdIconProvider){
				$mdIconProvider.defaultIconSet('./svg/avatars.svg', 128)
			})
	</script>
</body>
```
---
__Using a BottomSheet__

```
<div class="container" layout="row" flex>
	<md-content id="content" flex>
		<md-icon md-svg-src="{{ul.selected.avatar}}" class="avatar"></md-icon>
		<h2>{{ul.selected.name}}</h2>
		<p>{{ul.selected.content}}</p>
		<md-button class="share" md-no-ink aria-lable="Share with {{ul.selected.name}}" ng-click="ul.share(ul.selected)">
			<md-icon md-svg-icon="share"></md-icon>
		</md-button>
	</md-content>
</div>
<script>
	angular.module('MyApp',['ngMaterial','users'])
		.config(function($mdIconProvider){
			$mdIconProvider.defaultIconSet('./svg/avatars.svg', 128);
			$mdIconProvider.icon('share','./svg/share.svg', 24);
		})
</script>
```
```
UserController.js

function share(selectedUser){
	$mdBottonsheet.show({
		controller: UserSheetController,
		controllerAS: 'vm',
		templateUrl:'./bottonsheet.html',
		parent: angular.element(document.querySelector('#content'))
	});
	function UserSheetController(){
		this.user = selectedUser;
		this.item = [
			{ name: 'Phone'		, icon: 'phone'			, icon_url: 'svg/phone.svg' },
			{ name: 'Google+'	, icon: 'google_plus'	, icon_url: 'svg/google_plus.svg' }
		];
		this.performAction = function(action){
			$mdBottonSheet.hide();
		};
	}
}
```
```
bottomsheet.html
<md-botton-sheet>
	<md-subheader>
		Contact: <span class="name">{{vm.user.name}}</span>
	</md-subheader>
	<md-list>
		<md-item ng-repeat="item in vm.items">
			<md-button ng-click="vm.performAction">
				<md-icon md-svg-icon="{{item.icon_url}}"></md-icon>
				{{item.name}}
			</md-button>
		</md-item>
	</md-list>
</md-botton-sheet>
```

---
__Adaptive Layouts__

```
<md-toolbar layout="row">
	<md-button class="menu" ng-click="ul.toggleList();" aria-label="Show User List" hide-gt-sm>
		<md-icon md-svg-icon="menu"></md-icon>
	</md-button>
	<h3>Angular Material Starter</h3>
</md-toolbar>

<div class="container" layout="row" flex>
	<md-sidenav md-is-locked-open="$mdMedia('gt-sm')" class="md-whiteframe-4dp" md-component-id="left">
		<md-list ng-click="ul.toggleList()">
			...
		</md-list>
	</md-sidenav>
</div>
<script>
	angular.module('MyApp',['ngMaterial','users'])
		.config(function($mdIconProvider){
			$mdIconProvider.defaultIconSet('./svg/avatars.svg', 128);
			$mdIconProvider.icon('menu', './svg/menu.svg', 24);
		})
</script>
```
```
function UserController( userService, $mdBottomSheet, $mdSidenav){
	function toggleUserList(){
		$mdSidenav('left').toggle();
	}
}
```

---
__Theming and ARIA__

- Color Intentions
	- primary
	- accent
	- warn

```
<script>
	angular.module('MyApp',['ngMaterial', 'users'])
		.config(function($mdIconProvider, $mdThemingProvider){
			...
			$mdThemingProvider.theme('default')
				.primaryPalette('brown')
				.accentPalette('red');
		})
</script>
```