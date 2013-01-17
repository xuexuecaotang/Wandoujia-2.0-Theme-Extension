( {
	appDir : "../src",
	baseUrl : "javascripts",
	dir : "../build/debug",
	optimize : "none",
	optimizeCss : "standard.keepLines",
	paths : {
		optimize : 'modules/optimize',
		main : 'modules/main',
		nav : 'modules/nav',
		doraemon : 'modules/doraemon',
		task : 'modules/taskmanager',
		message : 'modules/message',
		browser : 'modules/browser',
		app : 'modules/app',
		welcome : 'modules/welcome',
		music : 'modules/music',
		contact : 'modules/contact',
		photo : 'modules/photo',
		video : 'modules/video',
		backuprestore : 'modules/backuprestore',
		social : 'modules/social',
		sync : 'modules/sync'
	},
	modules : [{
		name : "SnapPea"
	}]
})