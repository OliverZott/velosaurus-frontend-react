// import axios from "axios";
// import { SyntheticEvent, useEffect, useRef, useState } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import ImageUpload from "../../components/ImageUpload";
// import Wrapper from "../../components/Wrapper"
import { useParams } from "react-router-dom";
import { Tour } from "../entity/Tour";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TourDetails() {

    const { id } = useParams();
    const [tour, setTour] = useState<Tour | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`https://localhost:7019/api/activity/${id}`);
                setTour(data);
            } catch (error) {
                console.debug(error);
            }
        })();
    }, [id]);

    console.log("Tour", tour);




    // TODO: make api request for the tours/{id} endpoint instead hand over the tours object (which has no description)
    if (tour != null) {
        return (
            <div>
                <h1>{tour!.Name}</h1>
                <p>{tour!.Description}</p>
            </div>
        )
    };
}