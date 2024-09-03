import React from 'react'

const CarCard = ({ image, title, description, seat,price }) => (
  <div className="card card-compact bg-base-100 shadow-xl">
    <figure className="relative w-full aspect-w-16 aspect-h-9">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{description}</p>
      <p>{seat}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Per/Day {price}</button>
      </div>
    </div>
  </div>
)

const CarlistPage = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <CarCard 
        image="https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Alto-800/10327/1687348176706/front-left-side-47.jpg" 
        title="Alto-800" 
        description="Petrol" 
        seat="SeatingCapacity-5"
        price="800" 
      />
      <CarCard 
        image="https://imgd.aeplcdn.com/310x174/n/cw/ec/26742/swift-exterior-right-front-three-quarter-2.jpeg?q=80" 
        title="Swift" 
        description="Petrol/Disel" 
        seat="SeatingCapacity-5"
        price="1100" 
      />
      <CarCard 
        image="https://gomechanic.in/blog/wp-content/uploads/2020/04/Maruti-Suzuki-Ritz-1280x720-1-1000x563.jpg" 
        title="Ritz" 
        description="Petrol/Disel" 
        seat="SeatingCapacity-5"
        price="1100" 
      />
      
      <CarCard 
        image="https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg?compress=true&quality=80&w=1200&dpr=2.6" 
        title="Creta" 
         description="Petrol/Disel"
         seat="SeatingCapacity-5"
        price="1500" 
      />
      <CarCard 
        image="https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/KWID/10076/1717586320303/front-left-side-47.jpg?impolicy=resize&imwidth=480" 
        title="Tigger" 
        description="Petrol/Disel"
        seat="SeatingCapacity-5"
        price="1600" 
      />
      <CarCard 
        image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202202/Tata_Nexon_3_lakh_units.jpg?size=690:388" 
        title="Nexon" 
        description="Disel" 
        price="1600" 
      />
      
    </div>
  )
}

export default CarlistPage
