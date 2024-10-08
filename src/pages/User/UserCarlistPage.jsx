import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../../config/axiosinstance';
import CarCards from '../../components/ui/Cards';


    const UserCarlistPage = () => {
        const [cars, setCars] = useState([]);
        
        const fetchCar = async () => {
          try {
            const response = await axiosInstance({
              url: "/car/carlist",
              method: "GET",
            });
            setCars(response?.data?.data || []);
          } catch (error) {
            console.log(error);
            toast.error("Failed to fetch cars");
          }
        };
        
        useEffect(() => {
          fetchCar();
        }, []);
      
        return (
          <div className='px-20 py-10'>
            <h1 className='font-bold text-4xl my-4'>List of Cars</h1>
            <div className='grid grid-cols-3 gap-4'>
              {cars.map((car) => (
                <CarCards key={car._id} car={car} />
              ))}
            </div>
          </div>
        );
      };
      
      export default UserCarlistPage;
      

