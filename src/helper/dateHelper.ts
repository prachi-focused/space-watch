

export function convertToFormatYYYYMMDD(date: Date): string {
    // Get date in string format YYYY-MM-DD
    return date.toISOString().split('T')[0];
}