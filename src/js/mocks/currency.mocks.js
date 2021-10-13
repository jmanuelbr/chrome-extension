const data = `{"GBP_EUR":1.179151}`;
 
export function getMockData() {
    if (process.env.NODE_ENV == 'development') {
        return JSON.parse(data);
        }
    else {
        // No need to load mock data in prod
        return null;
    }
}