//template based level subscription
Template.ShoppingList.onCreated(function(){
	var selfSub = this;
	selfSub.autorun(function(){
		selfSub.subscribe('recipes');
	});
});

Template.ShoppingList.helpers({
	shoppingList : () => {
		return Recipes.find({ inMenu : true });
	}
});