import axios from "axios";
import { useEffect, useState } from "react";
import { Tour } from "../entity/Tour";

const Tours = () => {
    const url = "https://localhost:7019/api/tour";
    const [tours, setTours] = useState<Tour[]>([]);


    useEffect(() => {
        (
            async () => {
                const { data } = await axios.get(url);
                setTours(data);
                console.log(data.data);
                console.log(data);
            }
        )()
    }, []);




    const renderTour = () => {
        return tours.map((tour: Tour) => {
            return (
                <tr key={tour.date}>
                    <td>{tour.tourName}</td>
                    <td>{tour.date}</td>
                    <td>{tour.length}</td>
                    <td>{tour.altitudeGain}</td>
                    <td>
                        {/* <div>
                        <a href="#" className="btn btn-sm btn-outline-secondary" onClick={() => showDetails(tour.id)}>Show</a>
                    </div> */}
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