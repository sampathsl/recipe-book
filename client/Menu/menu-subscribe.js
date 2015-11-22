//template based level subscription
Template.Menu.onCreated(function(){
	var selfSub = this;
	selfSub.autorun(function(){
		selfSub.subscribe('recipes');
	});
});

Template.Menu.helpers({
	recipes : () => {
		return Recipes.find({ inMenu : true });
	}
});