import { AboutComponent } from "../components/AboutComponent"
import { Person } from "../entity/Person";

export function About() {


    const personData: Person = {
        name: 'Olli',
        age: 40,
        profession: 'Software Developer',
    };

    return (
        <div>
            <AboutComponent person={personData} />
        </div>
    )
}
