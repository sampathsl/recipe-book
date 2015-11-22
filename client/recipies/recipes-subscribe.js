//in the client side
//this subscription is based on recipes db level
//Meteor.subscribe('recipes');

//template based level subscription
Template.Recipes.onCreated(function(){
	var selfSub = this;
	selfSub.autorun(function(){
		selfSub.subscribe('recipes');
	});
});

Template.Recipes.helpers({
	recipes : () => {
		return Recipes.find({});
	}
});