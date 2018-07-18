# Garuda-Route-Sederhana

### Cara Install Garuda Route

Untuk dapat menggunakan garuda route pertama, gunakan CDN berikut ini
```
	<script src="https://www.cdn.lamhotsimamora.com/garuda2/"></script>
```
Lalu masukkan CDN yang kedua ini

```
	<script src="https://www.cdn.lamhotsimamora.com/garuda-route/"></script>
```


### Apa itu Garuda Route ?

Garuda Route adalah suatu teknik untuk membuat URL pada browser seperti 
```
  www.example.com/#/home
  www.example.com/#/profile
```

Garuda Route ini berjalan pada CLIENT / Browser user.


### Cara Menggunakan Garuda Route

1. Membuat dan mendaftarkan element 'app' dan Routenya terlebih dahulu (Javascript), lihat code  berikut ini
```
$app = __({
	el : 'app'
});

var AppRoute = new GarudaRoute()
	.to($app)
	.default('home')
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
		}
	]
);
```	

2. Lalu pada bagian HTML, masukkan tag element untuk LINK nya
```
	<garuda-route-link class="" id="" route="Home"></garuda-route-link>
	<garuda-route-link class="" id="" route="Profile"></garuda-route-link>
```

3. Terakhir buat function dengan nama '__GarudaRoute',lalu return object dari Route diatas (AppRoute)
```
function __GarudaRoute(){
	return AppRoute;
}

```
4. Selesai.