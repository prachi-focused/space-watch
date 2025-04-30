import {NeoResponse, PODResponse} from "../types/nasa";
import {NasaService} from "./NasaService";
import axios from "axios";

jest.mock('axios');

describe('NasaService', () => {

    beforeEach(() => {
        process.env.NASA_PUBLIC_API_KEY = "test-api-key";
        jest.clearAllMocks();
    });

    describe('getPictureOfTheDay', () => {
        const testDateOfPicture = "2020-10-30";
        const mockedPODResponse: PODResponse = {
            title: "test-title",
            explanation: "test-explanation",
            url: "https://example.com/url.jpeg",
            hdurl: "https://example.com/hdurl.jpeg",
            date: testDateOfPicture,
            copyright: "test-copyright",
            media_type: "test-media_type",
        }

        beforeEach(() => {
            (axios.get as jest.Mock).mockResolvedValue({data: mockedPODResponse});
        });

        it('returns a response successfully', async () => {
            const response = await NasaService().getPictureOfTheDay(testDateOfPicture);

            expect(axios.get).toHaveBeenCalledWith(
                "https://api.nasa.gov/planetary/apod",
                {
                    params: {
                        api_key: process.env.NASA_PUBLIC_API_KEY,
                        date: testDateOfPicture
                    }
                }
            )

            expect(response).toEqual(mockedPODResponse)
        });
    });

    describe('getNearEarthObjects', () => {
        const testStartDate = "2020-10-30";
        const  testEndDate = "2020-11-07";
        const mockNeoResponse: NeoResponse = {
            element_count: 1,
            near_earth_objects: {
                '2023-10-15': [
                    {
                        id: '123456',
                        name: 'Test Asteroid',
                        nasa_jpl_url: 'https://example.com/neo1',
                        is_potentially_hazardous_asteroid: true,
                        estimated_diameter: {
                            kilometers: {
                                estimated_diameter_min: 0.1,
                                estimated_diameter_max: 0.2
                            },
                            meters: {
                                estimated_diameter_min: 100,
                                estimated_diameter_max: 200
                            },
                            miles: {
                                estimated_diameter_min: 0.06,
                                estimated_diameter_max: 0.12
                            },
                            feet: {
                                estimated_diameter_min: 328,
                                estimated_diameter_max: 656
                            }
                        },
                        close_approach_data: [
                            {
                                close_approach_date: '2023-10-15',
                                close_approach_date_full: '2023-Oct-15 12:00',
                                epoch_date_close_approach: 123456789,
                                relative_velocity: {
                                    kilometers_per_second: '10',
                                    kilometers_per_hour: '36000',
                                    miles_per_hour: '22000'
                                },
                                miss_distance: {
                                    astronomical: '0.1',
                                    lunar: '38.0',
                                    kilometers: '15000000',
                                    miles: '9000000'
                                },
                                orbiting_body: 'Earth'
                            }
                        ],
                        is_sentry_object: false,
                        links: { self: 'https://example.com/links/123456' },
                        neo_reference_id: 'ref123456',
                        absolute_magnitude_h: 20.5
                    }
                ]
            }
        };

        beforeEach(() => {
            (axios.get as jest.Mock).mockResolvedValue({data: mockNeoResponse});
        })

        it('returns a response successfully with only start date', async () => {
            const response = await NasaService().getNearEarthObjects(testStartDate);

            expect(axios.get).toHaveBeenCalledWith(
                "https://api.nasa.gov/neo/rest/v1/feed",
                {
                    params: {
                        api_key: process.env.NASA_PUBLIC_API_KEY,
                        start_date: testStartDate,
                    }
                }
            )
            expect(response).toEqual(mockNeoResponse);
        })

        it('returns a response successfully with only start date and end date', async () => {
            const response = await NasaService().getNearEarthObjects(testStartDate, testEndDate);

            expect(axios.get).toHaveBeenCalledWith(
                "https://api.nasa.gov/neo/rest/v1/feed",
                {
                    params: {
                        api_key: process.env.NASA_PUBLIC_API_KEY,
                        start_date: testStartDate,
                        end_date: testEndDate
                    }
                }
            )
            expect(response).toEqual(mockNeoResponse);
        })
    })
});