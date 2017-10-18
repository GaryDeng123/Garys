<template>
	<div class="header">
      <div class="content-wrapper">
      	<div class="avatar">
      		<img width="64" height="64" :src="seller.avatar">
      	</div>
      	<div class="content">
      		<div class="title">
      			<span class="brand"></span>
      			<span class="name">{{seller.name}}</span>
      		</div>
      		<div class="description">
      			{{seller.description}}/{{seller.deliveryTime}}分钟送达
      		</div>
      		<div v-if="seller.supports" class="supports">
      			<span class="icon" :class="classMap[seller.supports[0].type]"></span>
      			<span class="text">{{seller.supports[0].description}}</span>
      		</div>
      	</div>
      	<div class="support-count" v-if="seller.supports" @click="showDetail">
      		<span class="count">{{seller.supports.length}}个</span>
      		<span class="icon-keyboard_arrow_right"></span>
      	</div>
      </div>
      <div class="bulletin-wrapper" @click="showDetail">
      	<span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      	<span class="icon-keyboard_arrow_right" ></span>
      </div>
      <div class="background">
      	<img :src="seller.avatar">
      </div>
      <div class="detail" v-show="detailShow">
      	
      </div>
    </div>

</template>

<script type="text/ecmascript-6">
	export default{
		props: {
			seller: {
				type: Object
			}
		},
		data() {
			return {
				detailShow: false
			};
		},
		methods: {
			showDetail() {
				this.detailShow = true;
			}
		},
		created() {
			this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
		}
	};
</script>

<style type="text/css">

.header{
	color: #FFF;
	background-color: rgba(7,17,27,0.5);
	position: relative;
}
.content-wrapper{
	position: relative;
	padding: 24px 12px 18px 24px;
	font-size: 0;

}
.avatar{
	display: inline-block;
}
.avatar>img{
	border-radius: 2px;
}
.content{
	margin-left: 16px;
	display: inline-block;
	vertical-align: top;

}
.title{
	margin: 2px 0 8px 0;

}
.brand{
	display: inline-block;
	vertical-align: top;
	width: 30px;
	height: 18px;
	background-image: url(brand@2x.png);
	background-size: 30px 18px;
	background-repeat:no-repeat;
}
@media (-webkit-min-device-pixel-ratio: 3){
	.brand{
		background-image:url(brand@3x.png);
	}
}
.name{
	margin-left: 6px;
	font-size: 16px;
	line-height: 18px;
	font-weight: bold;
}
.description{
	margin-bottom: 10px;
	line-height: 12px;
	font-size: 12px;
}
.supports{

}
.icon{
	display: inline-block;
	height: 12px;
	width: 12px;
	margin-right: 4px;
	background-size: 12px 12px;
	background-repeat: no-repeat;
}
.decrease{
	background-image: url(decrease_1@2x.png);
}
@media (-webkit-min-device-pixel-ratio: 3){
	.decrease{
		background-image:url(decrease_1@3x.png);
	}
}
.discount{
	background-image: url(discount_1@2x.png);
}
@media (-webkit-min-device-pixel-ratio: 3){
	.discount{
		background-image:url(discount_1@3x.png);
	}
}
.guarantee{
	background-image: url(guarantee_1@2x.png);
}
@media (-webkit-min-device-pixel-ratio: 3){
	.guarantee{
		background-image:url(guarantee_1@3x.png);
	}
}
.invoice{
	background-image: url(invoice_1@2x.png);
}
@media (-webkit-min-device-pixel-ratio: 3){
	.invoice{
		background-image:url(invoice_1@3x.png);
	}
}
.special{
	background-image: url(special_1@2x.png);
}
@media (-webkit-min-device-pixel-ratio: 3){
	.special{
		background-image:url(special_1@3x.png);
	}
}

.text{
	vertical-align: top;
	line-height: 12px;
	font-size: 10px;
	color: #FFF;
	font-weight: 200;
}
.support-count{
	position: absolute;
	right: 12px;
	bottom: 18px;
	font-size: 10px;
	color: #FFF;
	font-weight: 200px;
	height: 24px;
	line-height: 24px;
	padding: 0 8px;
	background-color: rgba(0,0,0,0.2);
	text-align: center;
	border-radius: 14px;
}
.count{
	font-size: 10px;
	vertical-align: top;
}
.support-count>.icon-keyboard_arrow_right{
	margin-left: 2px;
	font-size: 10px;
	line-height: 24px;
}
.bulletin-wrapper{
	position: relative;
	height: 28px;
	padding: 0 22px 0 12px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	background-color: rgba(7,17,27,0.1)

}
.bulletin-title{
	display: inline-block;
	vertical-align: top;
	height: 12px;
	width: 22px;
	background-image: url(bulletin@2x.png);
	background-size: 22px 12px;
	background-repeat: no-repeat;
	margin-top: 7px;
}
@media (-webkit-min-device-pixel-ratio: 3) {
	.bulletin-title{
	background-image: url(bulletin@3x.png)
	}
}
.bulletin-text{
	vertical-align: top;
	font-size: 10px;
	color: #FFF;
	font-weight: 200;
	line-height: 28px;
	margin:  0 4px;
}
.bulletin-wrapper>.icon-keyboard_arrow_right{
	position: absolute !important;
	font-size: 10px;
	right: 12px;
	top: 50%;
	transform: translateY(-50%);

}
.background{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	filter: blur(10px);
}
.background>img{
	width: 100%;
	height: auto;
	position: absolute;
	clip:rect(0px 375px 120px 0px)
}
.detail{
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(7,17,27,0.8);
}
</style>