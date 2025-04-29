export interface Nasa {

}
export interface PODResponse  {
    title: string;
    explanation: string;
    url: string;
    hdurl: string;
    date: string;
    copyright: string;
    media_type: string;
}

export interface NeoResponse {
    near_earth_objects: NearEarthObjects;
    element_count: number;
}

interface NearEarthObjects {
    [date: string]: NearEarthObject[];
}

// Near Earth Object details
interface NearEarthObject {
    links: NeoLinks;
    id: string;
    neo_reference_id: string;
    name: string;
    nasa_jpl_url: string;
    absolute_magnitude_h: number;
    estimated_diameter: EstimatedDiameter;
    is_potentially_hazardous_asteroid: boolean;
    close_approach_data: CloseApproachData[];
    is_sentry_object: boolean;
}

// Links specific to a NEO
interface NeoLinks {
    self: string;
}

// Estimated diameter in various units
interface EstimatedDiameter {
    kilometers: DiameterMinMax;
    meters: DiameterMinMax;
    miles: DiameterMinMax;
    feet: DiameterMinMax;
}

// Min/max diameter values
interface DiameterMinMax {
    estimated_diameter_min: number;
    estimated_diameter_max: number;
}

// Close approach data for an object
interface CloseApproachData {
    close_approach_date: string;
    close_approach_date_full: string;
    epoch_date_close_approach: number;
    relative_velocity: RelativeVelocity;
    miss_distance: MissDistance;
    orbiting_body: string;
}

// Velocity in different units
interface RelativeVelocity {
    kilometers_per_second: string;
    kilometers_per_hour: string;
    miles_per_hour: string;
}

// Miss distance in different units
interface MissDistance {
    astronomical: string;
    lunar: string;
    kilometers: string;
    miles: string;
}