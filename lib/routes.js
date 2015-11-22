if(Meteor.isClient){
	//avalible in client side 
	Accounts.onLogin(function(){
		FlowRouter.go('recipe-book');
	});
	//avalible in client side 
	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}

FlowRouter.triggers.enter([function(context,redirect){
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name : 'home',
	action(){
		if(Meteor.userId()){
			FlowRouter.go('recipe-book')
		}
		BlazeLayout.render('HomeLayout')
	}
});

FlowRouter.route('/recipe-book', {
	name : 'recipe-book',
	action(){
		BlazeLayout.render('MainLayout', { main : 'Recipes' })
	}
});

FlowRouter.route('/recipe/:id', {
	name : 'recipe-single-recipe',
	action(){
		BlazeLayout.render('MainLayout', { main : 'SingleRecipe' })
	}
});

FlowRouter.route('/menu', {
	name : 'menu',
	action(){
		BlazeLayout.render('MainLayout', { main : 'Menu' })
	}
});