import {NearEarthObject, NeoResponse} from "../types/nasa";
import {convertToReadableFormat} from "../helper/dateHelper";

type MinMax = {
    min: number,
    max: number,
}
export type FormattedNeoData = {
    "date": string,
    "name": string,
    "neo_reference_id": string,
    "orbiting_body_is_earth": boolean,
    "estimated_diameter_km": MinMax,
    "is_potentially_hazardous_asteroid": boolean,
    "relative_velocity_kph": string,
    "nasa_jpl_url": string,
    "close_approach_date_full": string
}
// TODO: sort the list by date DESC
export function formatNeoData(data: NeoResponse) {
    const formattedNeoData: FormattedNeoData[] = [];

    const dates = Object.keys(data.near_earth_objects)

    dates.forEach(date => {
        const neoObjects: NearEarthObject[] = data.near_earth_objects[date];

        neoObjects.forEach((neoObject) => {

            const firstCloseApproachData = neoObject.close_approach_data[0];
            const formattedObject: FormattedNeoData = {
                "date": convertToReadableFormat(date),
                "name": neoObject.name,
                "neo_reference_id": neoObject.neo_reference_id,
                "orbiting_body_is_earth": firstCloseApproachData.orbiting_body == "Earth",
                "estimated_diameter_km": {
                    min: neoObject.estimated_diameter.kilometers.estimated_diameter_min,
                    max: neoObject.estimated_diameter.kilometers.estimated_diameter_max
                },
                "is_potentially_hazardous_asteroid": neoObject.is_potentially_hazardous_asteroid,
                "relative_velocity_kph": firstCloseApproachData.relative_velocity.kilometers_per_hour,
                "nasa_jpl_url": neoObject.nasa_jpl_url,
                "close_approach_date_full": firstCloseApproachData.close_approach_date_full
            };
            formattedNeoData.push(formattedObject);
        });
    })

    return formattedNeoData;
}
