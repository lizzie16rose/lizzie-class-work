// This is a comment

// think of a 'class' as a template
class Post {

	// the order of the items in the constructor is the order
	// in which data will be assigned

	constructor(
				title,
				link,
				author,
				img,
				body){
					this.title = title;
					this.link = link;
					this.author = author;
					this.img = img;
					this.body = body;
	}
}

const app = new Vue({

	// this is the HTML element that the app will operate from
	el: '#root',

	// this is the data elements that feed the app
	data: {

		// this is what the search is looking for
		// the default value is an empty string
		keyword: '',

		// this is an array of items that will be
		// interpreted by the Post class
		postlist: [
			// constructed Post item
			new Post(
				'Kittens! Yay!', 		// this is the TITLE place in the class
				'https://www.google.com/#q=kitten',	// this is the LINK place in the class
				'Kittens!',			// this is the AUTHOR place in the class
				'kitten1.jpg',	// this is the IMAGE place in the class
				'kitten definition: /kitn/ noun 1) a young cat.' // this is the BODY place in the class
				),

			new Post(
				'Duh Cool kitten',
				'https://s-media-cache-ak0.pinimg.com/originals/78/e5/b2/78e5b2167e2330018caa3d4028598cf3.jpg',
				'Duh Cool Cat',
				'Duh cool kitten.jpg', // this is a local image in the same folder as the js script
				'Duh cool kitten loves to wear his cool glasses. He also loves to eat ntolmades . '
				),

			new Post(
				
				"Duh cool kitten's favorite food: ntolmades",
				'https://www.sintagespareas.gr/sintages/laxanontolmades-paradosiakoi.html',
				'Lizzie',
				'https://media-cdn.tripadvisor.com/media/photo-s/02/a0/c6/07/filename-dsc-8602-jpg.jpg',
				'"they are very yummy."'
				),

			new Post(
				"The kitten's favorite place",
				'https://vuejs.org',
				'Lizzie',
				'https://unsplash.it/200',
				'fun, fun, fun..'
				),

			new Post(
				'Friends',
				'http://www.adoptapet.com/adoption_rescue/82579.html',
				'Lizzie',
				'https://fthmb.tqn.com/INZEtkWYEpsZaksoewT_mA4DREo=/960x0/filters:no_upscale()/about/Two-kittens-GettyImages-559292093-58822e4f3df78c2ccd8b318c.jpg',
				'Adopt these cute little guys.'
				)
		]
	},

	// computed properties are functions
	// that work on the data they receive
	computed: {

		// this defines the search function
		filterlist(){

			// filterlist object
			// returns a filter funtion over the constructed post
			return this.postlist.filter((post)=>{

				// of an inculded array of title-toLowerCase matching any keyword-toLowerCase returned
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});



