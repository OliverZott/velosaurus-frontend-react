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



    return (
        <div>
            <h1>{tour.tourName}</h1>

        </div>
    )
}