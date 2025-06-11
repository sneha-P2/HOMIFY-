const sampleListing = [
    {
        title: "Mountain Cottage",
        description: "Cozy cottage with mountain views.",
        price: 3000,
        location: "Manali, Himachal Pradesh",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Beachside Bungalow",
        description: "Relax in a beautiful beachside home.",
        price: 4500,
        location: "Goa",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Urban Apartment",
        description: "Modern apartment in the heart of the city.",
        price: 6000,
        location: "Mumbai, Maharashtra",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Desert Retreat",
        description: "Experience serenity in the desert.",
        price: 3500,
        location: "Jaisalmer, Rajasthan",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Backwater Villa",
        description: "Beautiful villa along the backwaters.",
        price: 5500,
        location: "Alleppey, Kerala",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Forest Cabin",
        description: "Stay close to nature in this forest cabin.",
        price: 3200,
        location: "Coorg, Karnataka",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Hilltop Haven",
        description: "A peaceful hilltop getaway.",
        price: 4000,
        location: "Ooty, Tamil Nadu",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Riverside Homestay",
        description: "Charming homestay by the river.",
        price: 2800,
        location: "Rishikesh, Uttarakhand",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Tea Garden Lodge",
        description: "Lodge surrounded by tea plantations.",
        price: 3700,
        location: "Darjeeling, West Bengal",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Luxury Penthouse",
        description: "Elegant penthouse with panoramic views.",
        price: 12000,
        location: "Delhi",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Coastal Cottage",
        description: "Lovely cottage on the coast.",
        price: 4100,
        location: "Pondicherry",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Eco Dome House",
        description: "Sustainable living in a dome house.",
        price: 3900,
        location: "Auroville, Tamil Nadu",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Snowy Chalet",
        description: "Warm and cozy chalet in the snow.",
        price: 5000,
        location: "Shimla, Himachal Pradesh",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Jungle Treehouse",
        description: "Live among the trees in this jungle treehouse.",
        price: 4500,
        location: "Wayanad, Kerala",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Colonial Mansion",
        description: "Stay in a heritage colonial mansion.",
        price: 8500,
        location: "Kolkata, West Bengal",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Minimalist Studio",
        description: "Clean and compact studio for solo travelers.",
        price: 2500,
        location: "Bangalore, Karnataka",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Luxury Houseboat",
        description: "Sail in style on a luxury houseboat.",
        price: 9500,
        location: "Kumarakom, Kerala",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Farm Stay",
        description: "Get a taste of rural life at a farm stay.",
        price: 3100,
        location: "Nashik, Maharashtra",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Skyline Apartment",
        description: "Apartment with amazing city skyline views.",
        price: 6700,
        location: "Hyderabad, Telangana",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Cliffside Bungalow",
        description: "Bungalow with breathtaking cliff views.",
        price: 5200,
        location: "Varkala, Kerala",
        country: "India",
        image:"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Luxury Tent",
        description: "Glamp in a luxurious tent with full amenities.",
        price: 4800,
        location: "Pushkar, Rajasthan",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Historic Haveli",
        description: "Experience royalty in a traditional haveli.",
        price: 9000,
        location: "Udaipur, Rajasthan",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Island Cottage",
        description: "Private island escape with a beach cottage.",
        price: 11000,
        location: "Andaman Islands",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Modern Villa",
        description: "Contemporary design villa with a pool.",
        price: 7800,
        location: "Chandigarh",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Lakefront Studio",
        description: "Studio with beautiful lake views.",
        price: 4600,
        location: "Udaipur, Rajasthan",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Artist’s Loft",
        description: "Creative space for artists and dreamers.",
        price: 3600,
        location: "Pune, Maharashtra",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Sunset Cottage",
        description: "Watch the sunset from your private deck.",
        price: 4200,
        location: "Gokarna, Karnataka",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Yoga Retreat Villa",
        description: "Perfect for yoga and wellness getaways.",
        price: 6200,
        location: "Rishikesh, Uttarakhand",
        country: "India",
        image:"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Terrace Apartment",
        description: "Apartment with a large open terrace.",
        price: 5000,
        location: "Ahmedabad, Gujarat",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Ferry Apartment",
        description: "Apartment with a large open terrace.",
        price: 5000,
        location: "Ahmedabad, Gujarat",
        country: "India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
];

export default sampleListing;
