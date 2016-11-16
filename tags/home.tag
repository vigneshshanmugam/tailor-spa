<home>
	<div class="homelinks">
		<div class="homelink men" onclick={gotomens}>
			<div class="title">Shop for Men</div>
			<div class="pic"></div>
		</div>
		<div class="homelink women" onclick={gotowomens}>
			<div class="title">Shop for Women</div>
			<div class="pic"></div>
		</div>
	</div>
	<script>
		this.gotomens=function(){
			this.gotobrowse('men');
		}
		this.gotowomens=function(){
			this.gotobrowse('women');
		}
		this.gotobrowse=function(category){
			riot.route('/browse/'+category);
		}
	</script>
</home>