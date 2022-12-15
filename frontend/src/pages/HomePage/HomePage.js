import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import SearchBar from "../../components/SearchBar/SearchBar";
import key from "../../API_Key.json";

import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

import Image from "../../images/library-lectrix.jpg";
import "./HomePage.css"

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);
  const [resultsFromSearch, setResultsFromSearch] = useState([]);
  const [searchTerm, setSearchTerm] = useState("lower decks ");
  let navigate = useNavigate(); 

  async function getBookResults(searchTerm) {
    console.log("searchTerm in getBookResults in HomePage:", searchTerm)
    setSearchTerm(searchTerm)
    try{
        console.log("calling googlebooks API")
        let response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${key.googleAPIKey}`)
        console.log("response.data.items in getBookResults", response.data.items); 
        setResultsFromSearch(response.data.items)
    } catch (error){
        console.log(error.response.data)
    }
    }


    useEffect(()=>{
        if(resultsFromSearch.length > 0){
            navigate(`/book/${resultsFromSearch[0].id}/`)
        }
    }, [resultsFromSearch])

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         });  
//         setCars(response.data);
//       } catch (error) {
//         console.log(error.response.data);
//       }
//     };
//     fetchCars();
//   }, [token]);
  return (
    <div className="container">
      <h1>Welcome {user.first_name}!</h1>
      {/* {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.model} {car.make}
          </p>
        ))} */}
        <SearchBar getBookResultsforSearchBar={getBookResults}/>
        <img className="background_image_library" src={Image}/>
    </div>
  );
};

export default HomePage;
