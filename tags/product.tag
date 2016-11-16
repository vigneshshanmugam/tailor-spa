<product>
	<div class="productinfo" if={productDesc}>
		<div class="productpic">
			<img class="pic" src='https://shop.polymer-project.org{productDesc.image}'></img>
		</div>
		<div class="info">
			<div class="name">
				<span class="label">Name: </span>
				<span class="desc">{productDesc.title}</span>
			</div>
			<div class="price">
				<span class="label">Price: </span>
				<span class="desc">{productDesc.price}</span>
			</div>
		</div>
	</div>
	<script>
		this.productDesc=null;
		this.on('mount',function(){
			var plist = window.products[opts.cat];
			for(var i=0; i<plist.length; i++){
				if (plist[i].name === opts.name){
					this.update({
						productDesc: plist[i]
					});
					break;
				}
			}
		})
	</script>
</product>
