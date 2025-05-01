

// convert date in string format YYYY-MM-DD
export function convertToFormatYYYYMMDD(date: Date): string {
    return date.toISOString().split('T')[0];
}

const monthNames: { [key: number]: string} = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sept',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec'
};

// convert date string YYYY-MM-DD to string Month,DD,YYYY
export function convertToReadableFormat(date: string): string {
    const [year, month, dayOfMonth] = date.split('-').map(Number);
    const monthName = monthNames[month];

    return `${monthName} ${dayOfMonth}, ${year}`
}