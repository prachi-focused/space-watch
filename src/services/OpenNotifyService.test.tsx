import axios from "axios";
import {PeopleInSpaceResponse} from "../types/openNotify";
import {OpenNotifyService} from "./OpenNotifyService";

jest.mock('axios');

describe('OpenNotifyService', () => {
    describe('getPeopleInSpace', () => {
        const mockedPeopleInSpaceResponse: PeopleInSpaceResponse = {
            message: "test-message",
            number: 10,
            people: [
                {
                    name: "test-name1",
                    craft: "test-craft1",
                },
                {
                    name: "test-name2",
                    craft: "test-craft2",
                }
            ]
        }

        beforeEach(() => {
            (axios.get as jest.Mock).mockResolvedValue({data: mockedPeopleInSpaceResponse});
        });

        it('returns a response successfully', async () => {
            const response = await OpenNotifyService().getPeopleInSpace();

            expect(axios.get).toHaveBeenCalledWith(
                "http://api.open-notify.org/astros.json",
            )

            expect(response).toEqual(mockedPeopleInSpaceResponse)
        });
    });

    describe('getIssLocation', () => {
        const mockIssLocationResponse = {
            message: "test-message",
            timestamp: 123456,
            iss_position: {
                latitude: "test-latitude",
                longitude: "test-longitude",
            }
        }

        beforeEach(() => {
            (axios.get as jest.Mock).mockResolvedValue({data: mockIssLocationResponse});
        })

        it('returns a response successfully ', async () => {
            const response = await OpenNotifyService().getIssLocation();

            expect(axios.get).toHaveBeenCalledWith(
                "http://api.open-notify.org/iss-now.json",
            )
            expect(response).toEqual(mockIssLocationResponse);
        })
    })
});