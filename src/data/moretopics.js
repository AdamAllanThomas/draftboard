const draftTopics = [
  "Albums of the 80s",
  "Albums of the 90s",
  "Albums of the 2000s",
  "Albums of the 2010s",
  "Books to film adaptations",
  "Breakfast foods",
  "Candy bars",
  "Classic rock albums",
  "Classic rock songs",
  "Colors",
  "Comedy movies",
  "Comic book characters",
  "Countries",
  "Crunchy snacks",
  "Current NBA players",
  "Current NFL players",
  "Current MLB players",
  "Current NHL players",
  "Current PGA players",
  "Current Tennis Players",
  "Current UFC fighters",
  "Disney animated movies",
  "Disney live-action movies",
  "Drinks",
  "Emojis",
  "Fast food restaurants",
  "Female actors",
  "Fictional characters",
  "Fictional places",
  "Fictional creatures",
  "Fictional vehicles",
  "Fish",
  "Football movies",
  "Foreign films",
  "Fruits",
  "Funny Youtube videos",
  "Greatest actors of all time",
  "Greatest athletes of all time",
  "Greatest boxers of all time",
  "Greatest directors of all time",
  "Greatest football players of all time",
  "Greatest guitarists of all time",
  "Greatest movies of all time",
  "Greatest rappers of all time",
  "Greatest rock bands of all time",
  "Greatest singers of all time",
  "Greatest songs of all time",
  "Greatest TV shows of all time",
  "Harry Potter characters",
  "Hip hop albums",
  "Holidays",
  "Horror movies",
  "Ice cream flavors",
  "Insects",
  "Junk food",
  "Kinds of cheese",
  "Kinds of pasta",
  "Kinds of pizza",
  "Kinds of sushi",
  "Kinds of tacos",
  "Kinds of tea",
  "Kinds of wine",
  "Languages",
  "Male actors",
  "Marvel superheroes",
  "Meat",
  "Medical TV shows",
  "MLB teams",
  "Modern rock bands",
  "Movies from the 60s",
  "Movies from the 70s",
  "Movies from the 80s",
  "Movies from the 90s",
  "Movies from the 2000s",
  "Movies from the 2010s",
  "Music genres",
  "Musicians",
  "National parks",
  "NFL teams",
  "Nickelodeon cartoons",
  "Non-fiction books",
  "Olympic sports",
  "On-screen duos",
  "Outdoor activities",
  "PC games",
  "Pets",
  "Pizza toppings",
  "Planets",
  "Podcasts",
  "Political figures",
  "Popular apps",
  "Potato chip flavors",
  "Presidents of the United States",
  "Reality TV shows",
  "Reptiles",
  "Rock guitar solos",
  "Rock songs",
  "Romantic comedies",
  "Sandwiches",
  "Sauces",
  "Sci-fi movies",
  "Seasonings",
  "Shoe brands",
  "Singers",
  "Sitcoms",
  "Smoothie ingredients",
  "Snack foods",
  "Soft drinks",
  "Songs from the 80s",
  "Songs from the 90s",
  "Songs from the 2000s",
  "Songs from the 2010s",
  "Soups",
  "Space movies",
  "Sports movies",
  "Sports teams",
  "Sports video games",
  "Star Wars characters",
  "Star Wars movies",
  "States",
  "Superhero movies",
  "Superheroes",
  "Sushi rolls",
  "Television channels",
  "Television dramas",
  "Television families",
  "Television hosts",
  "Television judges",
  "Television news anchors",
  "Television personalities",
  "Television talk show hosts",
  "Terrible movies",
  "The Beatles songs",
  "The Office characters",
  "The Office episodes",
  "Things that smell good",
  "Things that smell bad",
  "Things you can do",
  "Superheroes",
  "Breakfast Foods",
  "Animals",
  "Board Games",
  "Movies",
  "TV Shows",
  "Sodas",
  "Video Games",
  "Ice Cream Flavors",
  "Pizza Toppings",
  "Candy Bars",
  "Colors",
  "Fruits",
  "Vegetables",
  "Cereals",
  "Cookies",
  "Pasta Dishes",
  "Types of Bread",
  "Types of Cheese",
  "Types of Soup",
  "Types of Pie",
  "Types of Donuts",
  "Types of Salad",
  "Types of Beans",
  "Types of Rice",
  "Types of Nuts",
  "Types of Berries",
  "Types of Apples",
  "Types of Grapes",
  "Types of Pears",
  "Types of Melons",
  "Types of Citrus Fruits",
  "Types of Potatoes",
  "Types of Squash",
  "Types of Carrots",
  "Types of Onions",
  "Types of Peppers",
  "Types of Lettuce",
  "Types of Tomatoes",
  "Types of Mushrooms",
  "Types of Seafood",
  "Types of Chicken",
  "Types of Beef",
  "Types of Pork",
  "Types of Fish",
  "Types of Alcohol",
  "Types of Wine",
  "Types of Beer",
  "Types of Cocktails",
  "Types of Cheeseburgers",
  "Types of Sandwiches",
  "Types of Pizza",
  "Types of Tacos",
  "Types of Burritos",
  "Types of Sushi",
  "Types of Curry",
  "Types of Sausages",
  "Types of Hot Dogs",
  "Types of Burgers",
  "Types of BBQ",
  "Types of Fried Foods",
  "Types of Appetizers",
  "Types of Desserts",
  "Types of Pies",
  "Types of Cakes",
  "Types of Cookies",
  "Types of Brownies",
  "Types of Ice Cream",
  "Types of Donuts",
  "Types of Pancakes",
  "Types of Waffles",
  "Types of French Toast",
  "Types of Bread",
  "Types of Bagels",
  "Types of Rolls",
  "Types of Croissants",
  "Types of Biscuits",
  "Types of Muffins",
  "Types of Cinnamon Rolls",
  "Types of Coffee",
  "Types of Tea",
  "Types of Juice",
  "Types of Smoothies",
  "Types of Milkshakes",
  "Types of Energy Drinks",
  "Types of Iced Tea",
  "Types of Lemonade",
  "Types of Hot Chocolate",
  "Types of Soda",
  "Types of Chips",
  "Types of Crackers",
  "Types of Popcorn",
  "Types of Nuts",
  "Types of Pretzels",
  "Types of Beef Jerky",
  "Types of Candy",
  "Types of Chocolate",
  "Types of Gummies",
  "Types of Hard Candy",
  "Types of Lollipops",
  "Types of Breath Mints",
  "Types of Gum",
  "Types of Snack Cakes",
  "Types of Pudding",
  "Types of Jell-O",
  "Types of Yogurt",
  "Types of Cereal Bars",
  "Types of Granola Bars",
  "Types of Protein Bars",
  "Types of Sports Drinks",
  "Types of Protein Powder",
  "Types of Sports",
  "Best fast food chains",
  "Top ice cream flavors",
  "Best outdoor activities",
  "Movie villains",
  "Greatest inventions of all time",
  "Best TV shows of the 2000s",
  "Marvel villains",
  "Greatest sports moments",
  "Best sitcoms of all time",
  "Classic novels",
  "Best stand-up comedians",
  "Greatest sports rivalries",
  "Movie quotes",
  "Best pizza toppings",
  "Album covers",
  "Greatest game shows",
  "Best mobile apps",
  "Documentaries",
  "Greatest video games of all time",
  "Best romantic comedies",
  "Voxers of all time",
  "Greatest TV theme songs",
  "Best sports movies",
  "Rock Bands",
  "Greatest superheroes of all time",
  "Best Pixar movies",
  "Comedy movies",
  "Greatest TV characters",
  "Best board games",
  "Comedians of all time",
  "Greatest movie soundtracks",
  "Best TV dramas",
  "Football Players",
  "Greatest sci-fi movies",
  "Best SNL sketches",
  "Book-to-movie adaptations",
  "Greatest action movies",
  "Best classic rock songs",
  "Basketball Movies",
  "Greatest rom-coms",
  "Best Christmas movies",
  "Horror movies",
  "Greatest movie quotes",
  "Best TV comedies",
  "Disney movies",
  "Greatest comedies of all time",
  "Best pop songs of all time",
  "Rap albums",
  "Greatest sports movies",
  "Best movie soundtracks",
  "TV Dramas",
  "Greatest SNL cast members",
  "Best sitcoms of the 90s",
  "Movie trilogies",
  "Greatest rock songs of all time",
  "Best romantic movies",
  "NBA teams of all time",
  "Greatest TV shows of all time",
  "Best horror movies",
  "Action movies",
  "Greatest movie villains",
  "Best stand-up specials",
  "TV theme songs",
  "Greatest TV shows of the 2000s",
  "Best science fiction movies",
  "Basketball teams",
  "Greatest horror movies",
  "Best Disney movies",
  "Movie Soundtracks",
  "Greatest TV shows of the 90s",
  "Best indie movies",
  "Best TV comedies of all time",
  "Greatest drama movies",
  "Best comedy movies",
  "Classic rock songs",
  "Greatest Christmas movies",
  "Best movies of the 90s",
  "Country songs",
  "Greatest movie scores",
  "Best movies of the 80s",
  "Romantic comedies",
  "Greatest animated movies",
  "Best sports teams of all time",
  "Thriller movies",
  "Greatest fantasy movies",
  "Best movie franchises",
  "Animated TV shows",
  "Greatest sports documentaries",
  "Best TV shows of the 80s",
  "Horror movie villains",
  "Greatest war movies",
  "Famous Inventions",
  "TV Show Characters",
  "Movie Trilogies",
  "Musical Instruments",
  "Famous Speeches",
  "Movie Villains",
  "Sports Stadiums",
  "National Parks",
  "Artists of the 90s",
  "World Landmarks",
  "Game Shows",
  "Board Games",
  "TV Theme Songs",
  "Famous Comedians",
  "Car Brands",
  "Disney Movies",
  "Movie Soundtracks",
  "Influential Women",
  "Greatest Inventions of All Time",
  "Albums of the 80s",
  "Fast Food Chains",
  "Greatest Athletes of All Time",
  "Presidents of the United States",
  "Types of Cheese",
  "Famous Works of Art",
  "Greatest Rock Bands of All Time",
  "Movie Quotes",
  "Soda Brands",
  "Superheroes",
  "Famous Landmarks in the United States",
  "Rap Artists",
  "Animated Movies",
  "Types of Trees",
  "Famous Explorers",
  "Holiday Traditions",
  "Magicians",
  "Olympic Events",
  "Broadway Shows",
  "Types of Fish",
  "Fastest Animals",
  "Greatest TV Shows of All Time",
  "Cities in Europe",
  "Types of Dogs",
  "Comedy Movies",
  "Famous Speeches in History",
  "Actors of the 70s",
  "Types of Flowers",
  "Classic Rock Songs",
  "Influential Albums",
  "Movie Heroes",
  "Greatest NBA Players of All Time",
  "Types of Pasta",
  "Singers of the 80s",
  "U.S. States",
  "Famous Scientists",
  "Greek Gods and Goddesses",
  "Types of Birds",
  "Famous Athletes",
  "Movie Directors",
  "Famous Writers",
  "Types of Fruit",
  "Famous Documentaries",
  "TV Dramas",
  "Video Games",
  "Movie Plot Twists",
  "Types of Vegetables",
  "Famous Artifacts",
  "Famous TV Moms",
  "U.S. Monuments",
  "Types of Pizza",
  "Types of Tea",
  "Famous Movie Couples",
  "Types of Whiskey",
  "Famous Detectives",
  "Famous Movie Monsters",
  "Movie Sequels",
  "Types of Chocolate",
  "Types of Wine",
  "Famous Movie Vehicles",
  "Famous Pirates",
  "Famous Court Cases",
  "Types of Spices",
  "Famous Archaeological Sites",
  "Types of Beer",
  "Famous Movie Lines",
  "Types of Candy",
  "Famous Historical Events",
  "Types of Nuts",
  "Famous Conspiracy Theories",
  "Famous Movie Endings",
  "Types of Ice Cream",
  "Famous Serial Killers",
  "Types of Soup",
  "Famous Mythical Creatures",
  "Famous Murder Mysteries",
  "Types of Sushi",
  "Famous Sports Plays",
  "Types of Meat",
  "Famous Movie Plots",
  "Types of Cheeseburgers",
  "Famous Unsolved Crimes",
  "Types of Smoothies",
  "Famous Movie Twists",
  "Types of Pasta Sauces",
  "Famous TV Dads",
  "Types of Salads",
  "Famous Ghost Stories",
  "Types of Milkshakes",
  "90s TV Shows",
  "Action Movies",
  "Album Covers",
  "Animal Species",
  "Animated TV Shows",
  "Apps",
  "Athletes",
  "Board Games",
  "Breakfast Foods",
  "Candy Bars",
  "Car Brands",
  "Cartoon Characters",
  "Celebrity Couples",
  "Cities in Europe",
  "Classic Rock Bands",
  "Coffee Drinks",
  "Colors",
  "Comedians",
  "Comic Book Characters",
  "Cooking Shows",
  "Countries",
  "Cover Songs",
  "Crispy Snacks",
  "Dance Songs",
  "Disney Movies",
  "Dog Breeds",
  "Drinking Games",
  "Educational TV Shows",
  "Electronic Devices",
  "Emojis",
  "Famous Landmarks",
  "Fashion Designers",
  "Fast Food Chains",
  "Female Singers",
  "Fictional Characters",
  "Films Directed by Women",
  "Food Documentaries",
  "Football Players",
  "Friends Characters",
  "Fruit",
  "Game of Thrones Characters",
  "Halloween Candy",
  "Hip Hop Songs",
  "Historical Figures",
  "Horror Movies",
  "Ice Cream Flavors",
  "Instagram Accounts",
  "Italian Dishes",
  "Jazz Musicians",
  "Karaoke Songs",
  "Kardashians",
  "Kid's Movies",
  "Kinds of Pie",
  "Kings of Comedy",
  "Kinds of Cheese",
  "Kinds of Pizza",
  "Language Learning Apps",
  "Late Night Talk Show Hosts",
  "Lethal Weapons Movies",
  "Literary Characters",
  "Live Albums",
  "Marvel Movies",
  "Mexican Foods",
  "Muppets Characters",
  "Music Festivals",
  "Musicals",
  "NBA Players",
  "Netflix Original Series",
  "New York City Tourist Spots",
  "Nintendo Games",
  "Office Supplies",
  "Oscar Winners",
  "Painters",
  "Pixar Movies",
  "Pizza Toppings",
  "Places to Travel",
  "Podcasts",
  "Political TV Shows",
  "Pop Songs",
  "Professional Wrestlers",
  "R&B Songs",
  "Reality TV Shows",
  "Rock Songs",
  "Romantic Comedies",
  "Running Shoes",
  "Sci-Fi Movies",
  "Sitcoms",
  "Snack Foods",
  "Social Media Platforms",
  "Song Covers",
  "South Park Characters",
  "Sports Documentaries",
  "Stand-Up Comedians",
  "Superhero Movies",
  "TV Dramas",
  "TV Moms",
  "Video Games of the 90s",
  "Web Browsers",
  "Wine Varietals",
  "Woody Allen Movies",
  "Youtubers",
  "80s Movies",
  "90s Cartoons",
  "Awards Shows",
  "Backyard BBQ Foods",
  "Band Names",
  "Baseball Players",
  "Beers",
  "Boarding Schools",
  "Book Series",
  "Books Turned Into Movies",
  "Boxing Matches",
  "Brands of Clothing",
  "Buddy Cop Movies",
  "Camping Gear",
  "Candy",
  "Car Models",
  "Card Games",
  "Cereals",
  "Children's Books",
  "Chips",
  "Christmas Songs",
  "Classic Books",
  "Classic TV Shows",
  "Coffee Shops",
  "College Football Teams",
  "Comedy Movies",
  "Computer Games",
  "Conspiracy Theories",
  "Cooking Ingredients",
  "Cosmetics Brands",
  "Countries to Visit",
  "Crime TV Shows",
  "Current TV Shows",
  "Dance Movies",
  "Dating Apps",
  "DC Comics Characters",
  "Desserts",
  "Disney Songs",
  "Dog Breeds",
  "Dramatic TV Shows",
  "Drinks",
  "Dystopian Movies",
  "Election Movies",
  "Emoji",
  "English Premier League Teams",
  "Entertainers",
  "Epic Movies",
  "European Countries",
  "Famous Duos",
  "Fast Food Burgers",
  "Fast Food Menu Items",
  "Fictional Planets",
  "Fictional Superheroes",
  "Film Noir Movies",
  "Fitness Apps",
  "Foreign Language Films",
  "Formula One Drivers",
  "Furniture Brands",
  "Game Shows",
  "Gangster Movies",
  "Guitarists",
  "HBO Series",
  "Headphone Brands",
  "Hiking Gear",
  "Historical Movies",
  "History Books",
  "Horror Novels",
  "Ice Cream Brands",
  "Indie Bands",
  "Italian Restaurants",
  "James Bond Movies",
  "Jazz Artists",
  "Jewelry Brands",
  "K-Pop Bands",
  "Karaoke Songs",
  "Kids TV Shows",
  "Kindle Books",
  "Korean Dramas",
  "Las Vegas Shows",
  "Leaders",
  "LGBTQ Movies",
  "Live Concerts",
  "Luxury Cars",
  "Mafia Movies",
  "Magic Tricks",
  "Magicians",
  "Makeup Brands",
  "Martial Arts Movies",
  "Medical Dramas",
  "Memoirs",
  "Metal Bands",
  "Mixed Drinks",
  "Mobile Games",
  "Modern Art Painters",
  "Monopoly Properties",
  "Motivational Speakers",
  "Movies Set in the Future",
  "Movies Set in Space",
  "Movies with Great Soundtracks",
  "Museums",
  "Mystery Novels",
  "National Parks",
  "Netflix Comedy Specials",
  "New York City Neighborhoods",
  "NFL Teams",
  "Nintendo Characters",
  "Nobel Prize Winners",
  "Nonfiction Books",
  "Nursery Rhymes",
  "Office Buildings",
  "Olympic Athletes",
  "Opera Singers",
  "Outdoor Clothing Brands",
  "Parenting Books",
  "Pastries",
  "PC Games",
  "People Named John",
  "Period Dramas",
  "Photographers",
  "Pizza Chains",
  "Playstation Games",
  "Political Scandals",
  "Pop",
  "Pop Punk Bands",
  "Post-Apocalyptic Movies",
  "Psychology Books",
  "Public Parks",
  "Puzzle Games",
  "R&B Singers",
  "Radio Stations",
  "Reality TV Shows",
  "Recipes to Master",
  "Relaxation Techniques",
  "Restaurants",
  "Rock Bands",
  "Rom-Coms",
  "Romantic Getaways",
  "Running Shoes",
  "Scary Movies",
  "Sci-Fi Novels",
  "Science Museums",
  "Self-Help Books",
  "Shoe Brands",
  "Short Story Collections",
  "Ski Resorts",
  "Soccer Players",
  "Soda Brands",
  "Soft Drinks",
  "Soup Recipes",
  "Space Exploration Movies",
  "Sports Documentaries",
  "Spy Movies",
  "Stand-Up Comedians",
  "Stationery Brands",
  "Steakhouse Chains",
  "Streaming Services",
  "Summer Cocktails",
  "Superhero Movies",
  "Survival Gear",
  "Sushi Rolls",
  "Swimwear Brands",
  "Tattoo Artists",
  "Techno DJs",
  "Teen Movies",
  "Television News Anchors",
  "Tennis Players",
  "Thriller Novels",
  "Time Travel Movies",
  "Top Podcasts",
  "Tourist Attractions",
  "Trending TikTok Sounds",
  "Trilogies",
  "TV Dramas",
  "TV Networks",
  "TV Sitcoms",
  "U.S. Presidents",
  "Underrated Films",
  "Urban Legends",
  "Used Cars",
  "Vegan Restaurants",
  "Video Game Franchises",
  "Video Game Soundtracks",
  "Video Streaming Devices",
  "Vintage Clothing Stores",
  "Viral Videos",
  "Virtual Reality Games",
  "Vodka Brands",
  "War Movies",
  "Watches",
  "Water Sports",
  "Weather Apps",
  "Web Browsers",
  "Wedding Songs",
  "Whiskey Brands",
  "Wilderness Survival Skills",
  "Wine Regions",
  "Winter Sports",
  "Women Entrepreneurs",
  "Women's Clothing Brands",
  "Workout Apps",
  "World Music Artists",
  "World Series Champions",
  "Wrestlers",
  "Young Adult Novels",
  "Youtube Channels",
  "Zodiac Signs",
  "Zoos",
  "Acoustic Guitar Songs",
  "Action Movie Franchises",
  "African Countries",
  "Albums of the 21st Century",
  "American Novels",
  "Animal Documentaries",
  "Anime Series",
  "Apocalyptic TV Shows",
  "Art Museums",
  "Asian Cuisine",
  "Athletic Shoe Brands",
  "Autobiographies",
  "Avant-Garde Films",
  "Baking Recipes",
  "Barbecue Restaurants",
  "Baseball Teams",
  "Basketball Players",
  "Beers",
  "Best-Selling Albums",
  "Bible Verses",
  "Biopics",
  "Board Games",
  "Bodyweight Exercises",
  "Books to Read",
  "Breakfast Cereals",
  "Breakfast Foods",
  "Breakout Artists",
  "British Comedies",
  "Broadway Musicals",
  "Burger Chains",
  "Business Books",
  "Camping Spots",
  "Canadian Cities",
  "Car Brands",
  "Card Games",
  "Cereal Brands",
  "Cheese Varieties",
  "Chocolate Brands",
  "Classic Novels",
  "Classical Composers",
  "Coffee Shops",
  "College Sports Programs",
  "Comic Book Movies",
  "Comedy Podcasts",
  "Comfort Foods",
  "Conspiracy Theories",
  "Cooking Techniques",
  "Country Singers",
  "Craft Beer Brands",
  "Crime Dramas",
  "Cruise Lines",
  "Cult Classic Films",
  "Cult TV Shows",
  "Current TV Shows",
  "Dance Movies",
  "Dating Apps",
  "Deep Sea Creatures",
  "Deodorant Brands",
  "Designer Clothing Brands",
  "Desserts",
  "Detective Novels",
  "Dinner Party Recipes",
  "Dinosaur Species",
  "Disney Animated Movies",
  "Distilleries",
  "DIY YouTube Channels",
  "Documentary Films",
  "Dystopian Novels",
  "Electronic Music Artists",
  "Elevated Fast-Food Chains",
  "Entrepreneurs",
  "Epic Fantasy Novels",
  "Essential Oils",
  "European Cities",
  "Exercise Equipment",
  "Experimental Films",
  "Famous Photographers",
  "Fast Food Chains",
  "Fictional Superheroes",
  "Fictional Villains",
  "Film Composers",
  "Financial Podcasts",
  "Fine Dining Restaurants",
  "Fitness Apps",
  "Flower Types",
  "Football Players",
  "French Pastries",
  "Frozen Pizza Brands",
  "Game of Thrones Characters",
  "Gaming Consoles",
  "Gangster Movies",
  "Gardening Tools",
  "German Beers",
  "Gin Brands",
  "Golf Courses",
  "Greek Gods and Goddesses",
  "Greatest Sports Moments",
  "Hair Styling Products",
  "Hallmark Christmas Movies",
  "Halloween Movies",
  "HBO Shows",
  "Healthy Snacks",
  "Hip Hop Artists",
  "Historical Fiction Novels",
  "History Documentaries",
  "Horror Novels",
  "Household Cleaning Brands",
  "Ice Cream Flavors",
  "Indie Films",
  "Indie Rock Bands",
  "Instagram Influencers",
  "Instrumental Songs",
  "Italian Restaurants",
  "Japanese Anime Movies",
  "Jazz Musicians",
  "Job Interview Tips",
  "Journalists",
  "Junk Food",
];

export default draftTopics;
