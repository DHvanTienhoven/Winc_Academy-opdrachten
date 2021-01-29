var movie = {
    title: 'title',
    duration: 'duration',
    stars: [1,2,3,4,5]
}

const movieInformation = function(title, duration, stars){
    console.log(title+ "lasts for"+duration+"minutes. Stars:" + stars)
}

movieInformation("Moonrise Kingdom", 93, ["Jared Gilman", "Kara Hayward", "Bruce Willis"])
movieInformation("Das Leben der Anderen", 137, ["Ulrich Mühe", "Martina Gedeck", "Sebastian Koch"])