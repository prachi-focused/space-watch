import {NeoResponse} from "../types/nasa";
import {formatNeoData} from "./neoUtils";

describe('neoUtils', () => {

    it('handle no near earth objects correctly', () => {
        const mockNeoResponse: NeoResponse = {
            "element_count": 0,
            "near_earth_objects": {}
        };
        const response = formatNeoData(mockNeoResponse)

        expect(response).toEqual([])
    })
    it('formats neoResponse and displays it correctly', () => {
        const mockNeoResponse: NeoResponse = {
            "element_count": 4,
            "near_earth_objects": {
                "2025-05-01": [
                    {
                        "links": {"self": "http://api.nasa.gov/neo/rest/v1/neo/3373919?api_key=Rv6y7Cs0jUPg5dTCjntaJdHwa9lBDgYC8zY6Qcr3"},
                        "id": "3373919",
                        "neo_reference_id": "3373919",
                        "name": "(2007 GW4)",
                        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3373919",
                        "absolute_magnitude_h": 20.6,
                        "estimated_diameter": {
                            "kilometers": {
                                "estimated_diameter_min": 0.2016299194,
                                "estimated_diameter_max": 0.4508582062
                            },
                            "meters": {
                                "estimated_diameter_min": 201.6299194428,
                                "estimated_diameter_max": 450.8582061718
                            },
                            "miles": {"estimated_diameter_min": 0.1252869847, "estimated_diameter_max": 0.2801502144},
                            "feet": {
                                "estimated_diameter_min": 661.5155049046,
                                "estimated_diameter_max": 1479.1936371367
                            }
                        },
                        "is_potentially_hazardous_asteroid": true,
                        "close_approach_data": [{
                            "close_approach_date": "2025-05-01",
                            "close_approach_date_full": "2025-May-01 10:27",
                            "epoch_date_close_approach": 1746095220000,
                            "relative_velocity": {
                                "kilometers_per_second": "17.0188222379",
                                "kilometers_per_hour": "61267.7600566132",
                                "miles_per_hour": "38069.4034640661"
                            },
                            "miss_distance": {
                                "astronomical": "0.4709109922",
                                "lunar": "183.1843759658",
                                "kilometers": "70447281.392706614",
                                "miles": "43773910.8342107132"
                            },
                            "orbiting_body": "Earth"
                        }],
                        "is_sentry_object": false
                    },
                    {
                        "links": {"self": "http://api.nasa.gov/neo/rest/v1/neo/54110077?api_key=Rv6y7Cs0jUPg5dTCjntaJdHwa9lBDgYC8zY6Qcr3"},
                        "id": "54110077",
                        "neo_reference_id": "54110077",
                        "name": "(2021 CR1)",
                        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54110077",
                        "absolute_magnitude_h": 25.1,
                        "estimated_diameter": {
                            "kilometers": {
                                "estimated_diameter_min": 0.0253837029,
                                "estimated_diameter_max": 0.0567596853
                            },
                            "meters": {
                                "estimated_diameter_min": 25.3837029364,
                                "estimated_diameter_max": 56.7596852866
                            },
                            "miles": {"estimated_diameter_min": 0.0157726969, "estimated_diameter_max": 0.0352688224},
                            "feet": {"estimated_diameter_min": 83.279867942, "estimated_diameter_max": 186.2194458756}
                        },
                        "is_potentially_hazardous_asteroid": false,
                        "close_approach_data": [{
                            "close_approach_date": "2025-05-01",
                            "close_approach_date_full": "2025-May-01 11:14",
                            "epoch_date_close_approach": 1746098040000,
                            "relative_velocity": {
                                "kilometers_per_second": "13.4878899214",
                                "kilometers_per_hour": "48556.4037169165",
                                "miles_per_hour": "30171.0609651029"
                            },
                            "miss_distance": {
                                "astronomical": "0.4618970048",
                                "lunar": "179.6779348672",
                                "kilometers": "69098808.077459776",
                                "miles": "42936008.3701698688"
                            },
                            "orbiting_body": "Earth"
                        }],
                        "is_sentry_object": false
                    },
                ],
                "2025-05-02": [
                    {
                        "links": {"self": "http://api.nasa.gov/neo/rest/v1/neo/3180147?api_key=Rv6y7Cs0jUPg5dTCjntaJdHwa9lBDgYC8zY6Qcr3"},
                        "id": "3180147",
                        "neo_reference_id": "3180147",
                        "name": "(2004 HQ1)",
                        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3180147",
                        "absolute_magnitude_h": 23.47,
                        "estimated_diameter": {
                            "kilometers": {
                                "estimated_diameter_min": 0.0537718498,
                                "estimated_diameter_max": 0.1202375114
                            },
                            "meters": {"estimated_diameter_min": 53.7718497693, "estimated_diameter_max": 120.23751136},
                            "miles": {"estimated_diameter_min": 0.0334122681, "estimated_diameter_max": 0.0747121027},
                            "feet": {"estimated_diameter_min": 176.416835597, "estimated_diameter_max": 394.4800367703}
                        },
                        "is_potentially_hazardous_asteroid": false,
                        "close_approach_data": [{
                            "close_approach_date": "2025-05-02",
                            "close_approach_date_full": "2025-May-02 04:07",
                            "epoch_date_close_approach": 1746158820000,
                            "relative_velocity": {
                                "kilometers_per_second": "15.2742817",
                                "kilometers_per_hour": "54987.4141198657",
                                "miles_per_hour": "34167.0407346466"
                            },
                            "miss_distance": {
                                "astronomical": "0.2579661404",
                                "lunar": "100.3488286156",
                                "kilometers": "38591185.135960948",
                                "miles": "23979450.5015911624"
                            },
                            "orbiting_body": "Earth"
                        }],
                        "is_sentry_object": false
                    },
                    {
                        "links": {"self": "http://api.nasa.gov/neo/rest/v1/neo/54527736?api_key=Rv6y7Cs0jUPg5dTCjntaJdHwa9lBDgYC8zY6Qcr3"},
                        "id": "54527736",
                        "neo_reference_id": "54527736",
                        "name": "(2025 HJ5)",
                        "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54527736",
                        "absolute_magnitude_h": 26.824,
                        "estimated_diameter": {
                            "kilometers": {
                                "estimated_diameter_min": 0.0114750603,
                                "estimated_diameter_max": 0.0256590149
                            },
                            "meters": {"estimated_diameter_min": 11.475060306, "estimated_diameter_max": 25.6590148902},
                            "miles": {"estimated_diameter_min": 0.0071302697, "estimated_diameter_max": 0.0159437677},
                            "feet": {"estimated_diameter_min": 37.6478368545, "estimated_diameter_max": 84.1831224124}
                        },
                        "is_potentially_hazardous_asteroid": false,
                        "close_approach_data": [{
                            "close_approach_date": "2025-05-02",
                            "close_approach_date_full": "2025-May-02 06:51",
                            "epoch_date_close_approach": 1746168660000,
                            "relative_velocity": {
                                "kilometers_per_second": "7.7737297395",
                                "kilometers_per_hour": "27985.4270620784",
                                "miles_per_hour": "17389.056054212"
                            },
                            "miss_distance": {
                                "astronomical": "0.027811851",
                                "lunar": "10.818810039",
                                "kilometers": "4160593.67035737",
                                "miles": "2585273.026056906"
                            },
                            "orbiting_body": "Earth"
                        }],
                        "is_sentry_object": true,
                        "sentry_data": "http://api.nasa.gov/neo/rest/v1/neo/sentry/54527736?api_key=Rv6y7Cs0jUPg5dTCjntaJdHwa9lBDgYC8zY6Qcr3"
                    }
                ],
            }
        };
        const expectedFormattedNeoData = [
            {
                "date": "May 1, 2025",
                "name": "(2007 GW4)",
                "neo_reference_id": "3373919",
                "orbiting_body_is_earth": true,
                "estimated_diameter_km": {
                    "min": 0.2016299194,
                    "max": 0.4508582062
                },
                "is_potentially_hazardous_asteroid": true,
                "relative_velocity_kph": "61267.7600566132",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3373919",
                "close_approach_date_full": "2025-May-01 10:27"
            },
            {
                "date": "May 1, 2025",
                "name": "(2021 CR1)",
                "neo_reference_id": "54110077",
                "orbiting_body_is_earth": true,
                "estimated_diameter_km": {
                    "min": 0.0253837029,
                    "max": 0.0567596853
                },
                "is_potentially_hazardous_asteroid": false,
                "relative_velocity_kph": "48556.4037169165",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54110077",
                "close_approach_date_full": "2025-May-01 11:14"
            },
            {
                "date": "May 2, 2025",
                "name": "(2004 HQ1)",
                "neo_reference_id": "3180147",
                "orbiting_body_is_earth": true,
                "estimated_diameter_km": {
                    "min": 0.0537718498,
                    "max": 0.1202375114
                },
                "is_potentially_hazardous_asteroid": false,
                "relative_velocity_kph": "54987.4141198657",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3180147",
                "close_approach_date_full": "2025-May-02 04:07"
            },
            {
                "date": "May 2, 2025",
                "name": "(2025 HJ5)",
                "neo_reference_id": "54527736",
                "orbiting_body_is_earth": true,
                "estimated_diameter_km": {
                    "min": 0.0114750603,
                    "max": 0.0256590149
                },
                "is_potentially_hazardous_asteroid": false,
                "relative_velocity_kph": "27985.4270620784",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54527736",
                "close_approach_date_full": "2025-May-02 06:51"
            }
        ]

        const response = formatNeoData(mockNeoResponse)

        expect(response).toStrictEqual(expectedFormattedNeoData)
    })

})