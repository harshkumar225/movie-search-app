

import React, { useEffect, useState } from "react";
import {FaInstagram,FaLinkedin,FaGithub} from "react-icons/fa"


function App(){

  const[search,setSearch]=useState("")
  const[movie,setMovie]=useState([])
  const [error,setError]=useState("")

  

  async function getMovies() {

    try{
       
    let query=search;
    if(search==""){
      query="avengers"
    }
   
const response= await fetch(`https://www.omdbapi.com/?s=${query}&apikey=f516fb79`)
if(!response.ok){
  throw new Error("Failed to fetch Movies !")
}
const data= await response.json();
console.log(data)
setMovie(data.Search||[])

  }catch(error){
    console.log(error.message)
    setError(error.message)
    
  }
    
  }





  useEffect(()=>{

    
 if(search.trim()!==""){
    getMovies()
 }

});

useEffect(()=>{
  getMovies("Avenger")
},[search])
    

 

    
     
    
    
  


  return(
    <div className="all-content">

    <input type="text" 
    placeholder="Serach movies"
    onChange={(e)=>setSearch(e.target.value)}
    value={search}
    
    
    
    />

    {error && <h2 className="error">{error}</h2>}

    <div className="movie-container">


    {
      movie.map((m)=>{
        return(
          <div className="movie-cards">
            <img src={m.Poster} alt="" />
            <h2>{m.Title}</h2>
            <p>{m.Year}</p>
            <h3>{m.Type}</h3>
            
          </div>
        )
      })
    }

    </div>


 
  

  



 


   <div className="social-media" >
     <FaInstagram/>
     <FaLinkedin onClick={()=>window.location.href="https://www.linkedin.com/in/harsh-kumar-152b18389/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BI5Vsyi27S7iSR72t6lItkw%3D%3D"}/>
     <FaGithub onClick={()=>window.location.href="https://github.com/harshkumar225"}/>

    

   </div>
    
     
    
  
    </div>


  
  )
    
  

}

 






export default App

  