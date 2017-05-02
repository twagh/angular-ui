angular.module('phoneDetail').component('phoneDetail', {
	bindings: { phone : '<' },
	templateUrl: 'phone-detail/phone-detail.template.html',
	controller: function() {
		this.changeImg = function(img) {
			this.mainImage = img;
		}

		this.$onInit = function () {
			this.mainImage = this.phone.images[0];
			// console.log(this.phone);
		}
	}
});