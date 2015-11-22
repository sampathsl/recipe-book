//in the client side
//this subscription is based on recipes db level
//Meteor.subscribe('recipes');

//template based level subscription
Template.SingleRecipe.onCreated(function(){
	var selfSub = this;
	selfSub.autorun(function(){
		var currentRecipeId = FlowRouter.getParam('id');
		selfSub.subscribe( 'singleRecipe' , currentRecipeId );
	});
});

Template.SingleRecipe.helpers({
	recipe : () => {
		var currentRecipeId = FlowRouter.getParam('id');
		return Recipes.findOne({ _id : currentRecipeId });
	}
});