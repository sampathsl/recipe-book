Recipes = new Meteor.Collection('recipes');

Recipes.allow({
	insert : function(userId,doc){
		return !!userId;
	}
});

Ingredients = new SimpleSchema({
	name : {
		type : String,
		label : "Name"
	},
	amount : {
		type : String,
		label : "Amount"
	}
});

RecipeSchema = new SimpleSchema({
	name : {
		type : String ,
		label : "Name"
	},
	desc : {
		type : String ,
		label : "Description"
	},
	ingredients : {
		type : [Ingredients]
	},
	inMenu : {
		type : Boolean ,
		defaultValue : false,
		optional : true,
		autoform : {
			type : "hidden"
		}
	},
	author : {
		type : String ,
		label : "Author",
		autoValue : function(){
			return this.userId
		},
		autoform : {
			type : "hidden"
		}
	},
	createdAt : {
		type : Date ,
		label : "Created At" ,
		autoValue : function(){
			return new Date()
		},
		autoform : {
			type : "hidden"
		}
	}
});

Recipes.attachSchema(RecipeSchema);