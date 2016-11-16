import riot from 'riot';
import tag from './tags/header.tag';

//function to load routes from primary chunk
function loadPrimaryChunk(){
	return new Promise((resolve,reject)=>{
		//this line ensures cart and co tags are bundled into one file
		require.ensure(['./tags/home.tag'], (require) => {
			require('./tags/home.tag');
			resolve();
		});
	});
}

//function to load routes from secondary chunk
function loadSecondChunk(module){
	return new Promise((resolve,reject)=>{
		//this line ensures cart and co tags are bundled into one file
		require.ensure(['./tags/browse.tag','./tags/product.tag'], (require) => {
			switch(module){
				case 'BROWSE':
					//till we do this the tag will not be executed
					require('./tags/browse.tag');
				break;
				case 'PRODUCT':
					require('./tags/product.tag');
				break;
			}
			resolve();
		});
	});
}

//router configuration
var $app=document.querySelector('.app-root');

riot.route('/',()=>{
	loadPrimaryChunk().then(()=>{
		$app.innerHTML="<home></home>";
		riot.mount('home');
	});
})

riot.route('/browse/*',(keyword)=>{
	loadSecondChunk('BROWSE').then(()=>{
		$app.innerHTML="<browse category='"+keyword+"'></browse>";
		riot.mount('browse');
	});
})

riot.route('/product/*/*',(category,name)=>{
	loadSecondChunk('PRODUCT').then(()=>{
		$app.innerHTML="<product cat='"+category+"' name='"+name+"'></product>";
		riot.mount('product');
	});
})
riot.route.start(true);
riot.mount('*');
