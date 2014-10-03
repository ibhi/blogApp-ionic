var services=angular.module('blogPosts', []);

services.service('blogPostsService', function($http){
	var posts=[];
	$http.get("https://public-api.wordpress.com/rest/v1/freshly-pressed/")
		.success(function(result){
			console.log(result);
			posts = result.posts;
			// window.localStorage["posts"]=JSON.stringify(posts);
			console.log(posts);
		})
		.error(function(err){
			console.log("Error fecthing data " + err);
			// if(window.localStorage["posts"] !== undefined){
			// 	posts=window.localStorage["posts"];
			// }

		});

	this.getPosts = function(){
		
		console.log(posts);
		return posts;
	}
	this.getPost = function(postId){
		return posts[postId];
	}
});