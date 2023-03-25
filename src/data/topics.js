const draftTopics = [
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