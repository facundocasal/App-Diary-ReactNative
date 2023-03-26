class Memory {
    constructor(id,userEmail, title, description, date, image , lat , lng , place){
        this.id = id.toString()
        this.userEmail = userEmail
        this.title = title 
        this.description = description,
        this.date = date
        this.image = image
        this.lat = lat 
        this.lng = lng
        this.place = place
    }
}

export default Memory