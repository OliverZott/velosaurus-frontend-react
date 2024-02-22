import axios from "axios";
import { useEffect, useState } from "react";
import { Tour, TourType } from "../entity/Tour";
import { Link, Route } from "react-router-dom";


const Tours = () => {
    const url = "https://localhost:7019/api/tour";  // local dev
    // const url = "http://localhost:8000/api/tour";  // docker dev
    // const url = "https://velosaurus-api.azurewebsites.net/api/tour";

    const [tours, setTours] = useState<Tour[]>([]);


    useEffect(() => {
        (
            async () => {
                const { data } = await axios.get(url);
                setTours(data);
            }
        )()
    }, []);

    const renderTour = () => {
        return tours.map((tour: Tour) => {
            return (
                <tr key={tour.id}>
                    <td>{tour.tourName}</td>
                    <td>{tour.date}</td>
                    <td>{tour.length}</td>
                    <td>{tour.altitudeGain}</td>
                    <td>{TourType[tour.tourType]}</td>
                    <td>
                        <div>
                            <Link to={`/tourdetails/${tour.id}`} state={{ data: tour }} className="btn btn-sm btn-outline-secondary">Show</Link>
                        </div>
                    </td>
                </tr>
            )
        })
    }


    return (
        <div>
            <h1>Tours</h1>

            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Length</th>
                            <th scope="col">Altitude</th>
                            <th scope="col">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTour()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Tours;