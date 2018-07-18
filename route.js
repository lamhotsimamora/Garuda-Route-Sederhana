_dev_ = true;

$app = __({
	el : 'app'
});

var AppRoute = new GarudaRoute()
    // method 'to' untuk mendaftarkan element mana yang akan dituju
	.to($app)
	// method 'default' untuk mendaftarkan route mana yang akan dibuat secara default
	.default('home')
	// method 'nothing' untuk mendaftarkan halaman jika route tidak ditemukan
	.nothing('page/404')
	.register(
	[
		{ 
		    route    : '/home',
		    response : function(){
		    	return "Ini Halaman Home"
		    }
		},
		{
			route 	 : '/profile',
			response : function(){
				return "Ini Halaman Profile"
			}
		},
		{
			route    : '/user',
			response : function(){
				return "Ini Halaman  User"
			}
		},
		{
			route 	 : '/about',
			response : 'page/about'
		}
	]
);

// function ini wajib dibuat
// untuk mengembalikan object AppRoute
function __GarudaRoute(){
	return AppRoute;
}

