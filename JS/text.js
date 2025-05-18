const pets = [
    {
        "petId": 1,
        "breed": "Golden Retriever",
        "category": "Dog",
        "date_of_birth": "2023-01-15",
        "price": 1200,
        "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
        "gender": "Male",
        "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
        "vaccinated_status": "Fully",
        "pet_name": "Sunny"
    },
    {
        "petId": 2,
        "breed": "Siamese",
        "category": "Cat",
        "date_of_birth": "2022-09-05",
        "price": 800,
        "image": "https://i.ibb.co.com/3Wzz41D/pet-2.jpg",
        "gender": "Female",
        "pet_details": "This affectionate female Siamese cat is known for her vocal nature and love for attention. Born on September 5, 2022, she enjoys interactive play and snuggles. Fully vaccinated and priced at $800, she's the perfect fit for cat lovers who appreciate an intelligent, engaging, and sociable feline companion.",
        "vaccinated_status": "Fully",
        "pet_name": "Mia"
    },
    {
        "petId": 3,
        "category": "Rabbit",
        "date_of_birth": "2022-04-20",
        "price": 1500,
        "image": "https://i.ibb.co.com/s3PXSwD/pet-3.jpg",
        "gender": "Male",
        "pet_details": "This male African Grey rabbit is a small, friendly companion born on April 20, 2022. He prefers a calm environment and enjoys gentle handling. Partially vaccinated, he's a great choice for rabbit lovers who want a peaceful, easygoing pet. Priced at $1500, he's perfect for a quiet home environment.",
        "vaccinated_status": "Partially",
        "pet_name": "Coco"
    },
    {
        "petId": 4,
        "breed": "Holland Lop",
        "category": "Rabbit",
        "date_of_birth": "2023-06-30",
        "price": 200,
        "image": "https://i.ibb.co.com/4g3Jrjf/pet-4.jpg",
        "gender": "Female",
        "pet_details": "This adorable female Holland Lop rabbit, born on June 30, 2023, is known for her calm and gentle nature. She thrives in quiet environments and enjoys being handled with care. Priced at $200, she is an ideal pet for those looking for a low-maintenance, friendly rabbit. Note that she is not vaccinated.",
        "vaccinated_status": "Not",
        "pet_name": "Nibbles"
    },
    {
        "petId": 5,
        "breed": "Beagle",
        "category": "Dog",
        "date_of_birth": null,
        "price": 900,
        "image": "https://i.ibb.co.com/BwnvDMY/pet-5.jpg",
        "gender": "Female",
        "pet_details": "This curious female Beagle was born on March 22, 2023, and loves to explore and play. She is great with kids and enjoys outdoor adventures. Fully vaccinated and priced at $900, she's perfect for an active family looking for a loyal, energetic companion.",
        "vaccinated_status": "Fully",
        "pet_name": "Bella"
    }
]

// let a = [2, 5, 7, 9, 2, 1, 3, 10];
// a.sort(function (a, b) { return a - b });
// console.log(a)

console.log(pets);
let ab = [...pets];
ab.sort(function (a, b) {
    return a.price - b.price;
})
console.log(ab);