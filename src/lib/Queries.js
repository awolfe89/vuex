export default {
    queryAndFilter(db) {
        // [START create_query]
        // Create a reference to the cities collection
        let citiesRef = db.collection('Solder Tips');
      
        // Create a query against the collection
        let queryRef = citiesRef.where('brand.name', '==', 'Pace Worldwide');
}
}