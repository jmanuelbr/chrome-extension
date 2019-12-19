export function getMockData() {
    const data = `
    [
{
    "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    "id": "london-overground",
    "name": "London Overground",
    "modeName": "overground",
    "disruptions": [],
    "created": "2019-07-23T12:19:31.533Z",
    "modified": "2019-07-23T12:19:31.533Z",
    "lineStatuses": [
    {
        "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        "id": 0,
        "lineId": "london-overground",
        "statusSeverity": 7,
        "statusSeverityDescription": "Reduced Service",
        "reason": "A reduced service will operate on TfL Rail services between Liverpool Street and Shenfield and all London Overground services. Network Rail have introduced temporary speed restrictions because of the high temperatures forecast for Thursday 25 July. Please allow extra time for your journey",
        "created": "0001-01-01T00:00:00",
        "validityPeriods": [
        {
            "$type": "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
            "fromDate": "2019-07-25T08:30:00Z",
            "toDate": "2019-07-26T01:29:00Z",
            "isNow": false
        }],
        "disruption":
        {
            "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
            "category": "Information",
            "categoryDescription": "Information",
            "description": "A reduced service will operate on TfL Rail services between Liverpool Street and Shenfield and all London Overground services. Network Rail have introduced temporary speed restrictions because of the high temperatures forecast for Thursday 25 July. Please allow extra time for your journey",
            "created": "2019-07-25T08:30:00Z",
            "affectedRoutes": [],
            "affectedStops": [],
            "closureText": "reducedService"
        }
    },
    {
        "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        "id": 0,
        "lineId": "london-overground",
        "statusSeverity": 9,
        "statusSeverityDescription": "Minor Delays",
        "reason": "No service between Edmonton Green and Cheshunt. MINOR DELAYS Liverpool Street to Chingford / Enfield Town and Stratford to Richmond / Clapham Junction due to heat related temporary speed restrictions. Tickets will be accepted on London Underground services via any reasonable route. GOOD SERVICE on all other routes. ",
        "created": "0001-01-01T00:00:00",
        "validityPeriods": [
        {
            "$type": "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
            "fromDate": "2019-07-25T07:59:14Z",
            "toDate": "2019-07-26T01:29:00Z",
            "isNow": true
        }],
        "disruption":
        {
            "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
            "category": "RealTime",
            "categoryDescription": "RealTime",
            "description": "No service between Edmonton Green and Cheshunt. MINOR DELAYS Liverpool Street to Chingford / Enfield Town and Stratford to Richmond / Clapham Junction due to heat related temporary speed restrictions. Tickets will be accepted on London Underground services via any reasonable route. GOOD SERVICE on all other routes. ",
            "affectedRoutes": [],
            "affectedStops": [],
            "closureText": "minorDelays"
        }
    },
    {
        "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        "id": 0,
        "lineId": "london-overground",
        "statusSeverity": 3,
        "statusSeverityDescription": "Part Suspended",
        "reason": "No service between Edmonton Green and Cheshunt. MINOR DELAYS Liverpool Street to Chingford / Enfield Town and Stratford to Richmond / Clapham Junction due to heat related temporary speed restrictions. Tickets will be accepted on London Underground services via any reasonable route. GOOD SERVICE on all other routes.",
        "created": "0001-01-01T00:00:00",
        "validityPeriods": [
        {
            "$type": "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
            "fromDate": "2019-07-25T07:59:00Z",
            "toDate": "2019-07-25T13:59:00Z",
            "isNow": true
        }],
        "disruption":
        {
            "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
            "category": "RealTime",
            "categoryDescription": "RealTime",
            "description": "No service between Edmonton Green and Cheshunt. MINOR DELAYS Liverpool Street to Chingford / Enfield Town and Stratford to Richmond / Clapham Junction due to heat related temporary speed restrictions. Tickets will be accepted on London Underground services via any reasonable route. GOOD SERVICE on all other routes.",
            "created": "2019-07-25T10:45:00Z",
            "affectedRoutes": [],
            "affectedStops": [],
            "closureText": "partSuspended"
        }
    },
    {
        "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        "id": 0,
        "lineId": "london-overground",
        "statusSeverity": 9,
        "statusSeverityDescription": "Minor Delays",
        "reason": "London Overground: No service between Edmonton Green and Cheshunt. MINOR DELAYS Liverpool Street to Chingford / Enfield Town and Stratford to Richmond / Clapham Junction due to heat related temporary speed restrictions. Tickets will be accepted on London Underground services via any reasonable route. GOOD SERVICE on all other routes. ",
        "created": "0001-01-01T00:00:00",
        "validityPeriods": [
        {
            "$type": "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
            "fromDate": "2019-07-25T05:09:56Z",
            "toDate": "2019-07-26T01:29:00Z",
            "isNow": true
        }],
        "disruption":
        {
            "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
            "category": "RealTime",
            "categoryDescription": "RealTime",
            "description": "London Overground: No service between Edmonton Green and Cheshunt. MINOR DELAYS Liverpool Street to Chingford / Enfield Town and Stratford to Richmond / Clapham Junction due to heat related temporary speed restrictions. Tickets will be accepted on London Underground services via any reasonable route. GOOD SERVICE on all other routes. ",
            "affectedRoutes": [],
            "affectedStops": [],
            "closureText": "minorDelays"
        }
    }],
    "routeSections": [],
    "serviceTypes": [
    {
        "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        "name": "Regular",
        "uri": "/Line/Route?ids=London Overground&serviceTypes=Regular"
    },
    {
        "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        "name": "Night",
        "uri": "/Line/Route?ids=London Overground&serviceTypes=Night"
    }],
    "crowding":
    {
        "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
}]
    `;
    return JSON.parse(data);
}

