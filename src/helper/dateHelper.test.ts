import {convertToReadableFormat, convertToFormatYYYYMMDD} from "./dateHelper";


describe('DateHelper', () => {

    it.each`
    testDate                        | expectedDateFormat
    ${"2024-12-01T00:00:00-05:00"}  | ${"2024-12-01"}
    ${"2024-01-01T00:00:00-05:00"}  | ${"2024-01-01"}
    ${"2023-12-12T10:00:00-05:00"}  | ${"2023-12-12"}
    `('Should convert $testDate to YYYY-MM-DD: $expectedDateFormat', ({testDate, expectedDateFormat}) => {
        const expectedDate = new Date(testDate);

        const formattedDate = convertToFormatYYYYMMDD(expectedDate)

        expect(formattedDate).toBe(expectedDateFormat);
    })

    it.each`
    testDate         | expectedDateFormat
    ${"2024-12-01"}  | ${"Dec 1, 2024"}
    ${"2024-01-31"}  | ${"Jan 31, 2024"}
    ${"2023-12-12"}  | ${"Dec 12, 2023"}
    `('Should convert $testDate to readable format $expectedDateFormat', ({testDate, expectedDateFormat}) => {

        const formattedDate = convertToReadableFormat(testDate)

        expect(formattedDate).toBe(expectedDateFormat);
    })
})