const apiKey = ""; //Your Yelp Fusion API key here
const CORSanywhere = 'https://cors-anywhere.herokuapp.com/'; //bypass CORS restriction temporarily

const Yelp = {
    search(term, location, sortBy) {
        const endpoint = `${CORSanywhere}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
        const header = {headers: {
            Authorization: `Bearer ${apiKey}`
        }}

        return fetch(endpoint, header).then(response => {
            if(response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
        }, networkError => console.log(networkError)).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => { 
                    return {
                        id: business.id,
                        name: business.name,
                        imageSrc: business.image_url,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            } else {
                console.log ('Could not retrieve jsonResponse.businesses in Yelp.js');
            }
        });
    }
}

export default Yelp;