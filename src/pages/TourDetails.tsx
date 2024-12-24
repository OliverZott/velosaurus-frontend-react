// import axios from "axios";
// import { SyntheticEvent, useEffect, useRef, useState } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import ImageUpload from "../../components/ImageUpload";
// import Wrapper from "../../components/Wrapper"
import { useLocation } from "react-router-dom";
import { Tour } from "../entity/Tour";

export default function TourDetails() {

    const location = useLocation();
    let tour: Tour = location.state.data
    console.log("Location", location);
    console.log("Tour", tour);


    // TODO: make api request for the tours/{id} endpoint instead hand over the tours object (which has no description)

    return (
        <div>
            <h1>{tour.Name}</h1>
            <p>{tour.Description}</p>
        </div>
    )
}