( {
	appDir : "../src",
	baseUrl : "js/",
	dir : "../build/",
	optimize : "uglify",
	uglify : {
		toplevel : true,
		ascii_only : false,
		beautify : false
	},
	optimizeCss : "standard",
	modules : [{
		name : "thememanager"
	}]
})