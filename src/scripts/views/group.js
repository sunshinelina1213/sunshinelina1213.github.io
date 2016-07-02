var tplGroup = require('../templates/group.string');

SPA.defineView('group',{
	html:tplGroup,
	
	plugins: ['delegated'],
	
	bindEvents:{
		'show':function(){
			var fixScroll = this.widgets.fixScroll;
			fixScroll.on('scroll',function(){
//				console.log(this.y);
				if(this.y <= -176){
					if($('.m-groupcon').siblings().length > 0){
//						console.log($('.m-groupcon').siblings().length )
						;
					}else {
			            $('.m-groupcon').after($('.m-group-menu').clone(true).addClass('fixed'));
			          }
			       } else { 
			          $('.m-group-menu.fixed').remove();
					}
				});
			}
		}
	});
	