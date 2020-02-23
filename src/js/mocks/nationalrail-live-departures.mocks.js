const data = `{
    "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.ItineraryResult, Tfl.Api.Presentation.Entities",
    "journeys": [
    {
        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Journey, Tfl.Api.Presentation.Entities",
        "startDateTime": "2020-02-23T08:34:00",
        "duration": 56,
        "arrivalDateTime": "2020-02-23T09:30:00",
        "legs": [
        {
            "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration": 16,
            "instruction":
            {
                "$type": "Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
                "summary": "Central line to Newbury Park",
                "detailed": "Central line towards Hainault",
                "steps": []
            },
            "obstacles": [
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                "type": "STAIRS",
                "incline": "UP",
                "stopId": 1000154,
                "position": "AFTER"
            },
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                "type": "WALKWAY",
                "incline": "LEVEL",
                "stopId": 1000154,
                "position": "AFTER"
            },
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                "type": "WALKWAY",
                "incline": "LEVEL",
                "stopId": 1000154,
                "position": "AFTER"
            }],
            "departureTime": "2020-02-23T08:34:00",
            "arrivalTime": "2020-02-23T08:50:00",
            "departurePoint":
            {
                "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                "naptanId": "940GZZLUSTD",
                "platformName": "",
                "icsCode": "1000226",
                "commonName": "Stratford Underground Station",
                "placeType": "StopPoint",
                "additionalProperties": [],
                "lat": 51.54173162788,
                "lon": -0.0034038207000000003
            },
            "arrivalPoint":
            {
                "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                "naptanId": "940GZZLUNBP",
                "platformName": "",
                "icsCode": "1000154",
                "commonName": "Newbury Park Underground Station",
                "placeType": "StopPoint",
                "additionalProperties": [],
                "lat": 51.575526071999995,
                "lon": 0.090052651960000007
            },
            "path":
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
                "lineString": "[[51.54171292019, -0.00336137569],[51.54209824351, -0.00275323062],[51.54365968653, -0.00044945995],[51.54428947313, 0.00058769858],[51.54477214495, 0.00128671742],[51.5450917036, 0.00153149769],[51.54548683747, 0.00156326108],[51.54598352099, 0.00144083274],[51.54711757611, 0.00085598975],[51.54779211848, 0.00032307932],[51.54830982546, -0.00050519199],[51.54881323792, -0.00155046156],[51.55023895399, -0.00500743323],[51.55059144724, -0.005641096],[51.55117928613, -0.00636544824],[51.55205834338, -0.00729345897],[51.55257813091, -0.00771790893],[51.55303134429, -0.0079289037],[51.5535272844, -0.00800821072],[51.5539666166, -0.00793131562],[51.55461818438, -0.00764319017],[51.55569953274, -0.00671596598],[51.55605235678, -0.00631104255],[51.55644839384, -0.00580324091],[51.55693886188, -0.00503162853],[51.55693886188, -0.00503162853],[51.55768304938, -0.00384495413],[51.56027560299, 0.00022162162],[51.56079200383, 0.00105221328],[51.56189815061, 0.00263011033],[51.5625855113, 0.00345384639],[51.56375969872, 0.00473186474],[51.56551425361, 0.0062519283],[51.56760348344, 0.00765699071],[51.56834042465, 0.00820892883],[51.56834042465, 0.00820892883],[51.56880201125, 0.00856115837],[51.56965931704, 0.00943589699],[51.57017614296, 0.01023792641],[51.57054267566, 0.01088903661],[51.5708715309, 0.01163950804],[51.5710777948, 0.01219697804],[51.57129732755, 0.01302922253],[51.57148692692, 0.01403332126],[51.57157866444, 0.01497537751],[51.57171576192, 0.01746354407],[51.57183294075, 0.0184933247],[51.5720087403, 0.01925152129],[51.57231683872, 0.02015989958],[51.57367869143, 0.02358281586],[51.57515277166, 0.02727070807],[51.57535796289, 0.02788598339],[51.57568846165, 0.02905526439],[51.57568846165, 0.02905526439],[51.57593458046, 0.02990329384],[51.57608534434, 0.03054503051],[51.5762952565, 0.03192545693],[51.57636561875, 0.03357388237],[51.57615071225, 0.04645232369],[51.57615071225, 0.04645232369],[51.57613335385, 0.04744737249],[51.57615134705, 0.04899243795],[51.57628980261, 0.05239026887],[51.57629647312, 0.05406472346],[51.57656324581, 0.06090330379],[51.57655388566, 0.06501613266],[51.57655388566, 0.06501613266],[51.57655754114, 0.06531938023],[51.57639152438, 0.06708704118],[51.5736464423, 0.08298153159],[51.57344392291, 0.08375157453],[51.57298186517, 0.08495710876],[51.57270488658, 0.08586803622],[51.57254265934, 0.08689965853],[51.57252290616, 0.08800995901],[51.57261738488, 0.08876471486],[51.57279683543, 0.0892924697],[51.57307794759, 0.08966614633],[51.57331875476, 0.08977821175],[51.57420522379, 0.08999205554],[51.57552658572, 0.09002381114]]",
                "stopPoints": [
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "940GZZLULYN",
                    "name": "Leyton Underground Station",
                    "uri": "/StopPoint/940GZZLULYN",
                    "type": "StopPoint",
                    "routeType": "Unknown",
                    "status": "Unknown"
                },
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "940GZZLULYS",
                    "name": "Leytonstone Underground Station",
                    "uri": "/StopPoint/940GZZLULYS",
                    "type": "StopPoint",
                    "routeType": "Unknown",
                    "status": "Unknown"
                },
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "940GZZLUWSD",
                    "name": "Wanstead Underground Station",
                    "uri": "/StopPoint/940GZZLUWSD",
                    "type": "StopPoint",
                    "routeType": "Unknown",
                    "status": "Unknown"
                },
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "940GZZLURBG",
                    "name": "Redbridge Underground Station",
                    "uri": "/StopPoint/940GZZLURBG",
                    "type": "StopPoint",
                    "routeType": "Unknown",
                    "status": "Unknown"
                },
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "940GZZLUGTH",
                    "name": "Gants Hill Underground Station",
                    "uri": "/StopPoint/940GZZLUGTH",
                    "type": "StopPoint",
                    "routeType": "Unknown",
                    "status": "Unknown"
                },
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "940GZZLUNBP",
                    "name": "Newbury Park Underground Station",
                    "uri": "/StopPoint/940GZZLUNBP",
                    "type": "StopPoint",
                    "routeType": "Unknown",
                    "status": "Unknown"
                }],
                "elevation": []
            },
            "routeOptions": [
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                "name": "Central",
                "directions": [
                    "Hainault Underground Station"
                ],
                "lineIdentifier":
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "central",
                    "name": "Central",
                    "uri": "/Line/central",
                    "type": "Line",
                    "crowding":
                    {
                        "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
                    },
                    "routeType": "Unknown",
                    "status": "Unknown"
                }
            }],
            "mode":
            {
                "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                "id": "tube",
                "name": "tube",
                "type": "Mode",
                "routeType": "Unknown",
                "status": "Unknown"
            },
            "disruptions": [
            {
                "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                "category": "PlannedWork",
                "type": "routeBlocking",
                "categoryDescription": "PlannedWork",
                "description": "Mock1 TFL RAIL: Saturday 22 and Sunday 23 February, no service between Liverpool Street and Shenfield. Use London Underground connections between Liverpool Street and Stratford / Newbury Park. Replacement buses operate.",
                "summary": "",
                "additionalInfo": "Replacement buses operate<br /><br />Service C: Stratford (Stratford City Bus Station, for Maryland) - Forest Gate (Romford Road) - Manor Park (Romford Road) - Ilford - Seven Kings - Goodmayes - Chadwell Heath (Wagney Road) - Romford<br /><br />Service D: Newbury Park (For Central line) - Chadwell Heath (Wagney Road) - Romford - Gidea Park - Harold Wood - Brentwood - Shenfield",
                "created": "2019-12-06T13:06:00",
                "lastUpdate": "2020-02-18T09:41:00"
            },
            {
                "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                "category": "Information",
                "type": "stopInfo",
                "categoryDescription": "Information",
                "description": "The upper station car park at Newbury Park will be closed on the following dates. From 05:00 Saturday 15 until 23:00 Sunday 16 February, from 05:00 Saturday 22 until 23:00 Sunday 23 February and from 05:00 Saturday 29 February until 23:00 Sunday 1 March",
                "summary": "Newbury Park - Upper Station Car Park Closed",
                "additionalInfo": "",
                "created": "2020-01-07T10:49:00",
                "lastUpdate": "2020-01-29T09:58:00"
            }],
            "plannedWorks": [],
            "isDisrupted": true,
            "hasFixedLocations": true
        },
        {
            "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration": 30,
            "instruction":
            {
                "$type": "Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
                "summary": "Greater Anglia to Shenfield",
                "detailed": "Greater Anglia towards Southend Victoria",
                "steps": []
            },
            "obstacles": [],
            "departureTime": "2020-02-23T09:00:00",
            "arrivalTime": "2020-02-23T09:30:00",
            "departurePoint":
            {
                "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                "platformName": "",
                "icsCode": "1000154",
                "commonName": "Newbury Park Station",
                "placeType": "StopPoint",
                "additionalProperties": [],
                "lat": 51.57524701208,
                "lon": 0.09006871338
            },
            "arrivalPoint":
            {
                "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                "naptanId": "910GSHENFLD",
                "platformName": "",
                "icsCode": "1006448",
                "commonName": "Shenfield Rail Station",
                "placeType": "StopPoint",
                "additionalProperties": [],
                "lat": 51.63087565397,
                "lon": 0.32985122204
            },
            "path":
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
                "stopPoints": [
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "910GSHENFLD",
                    "name": "Shenfield Rail Station",
                    "uri": "/StopPoint/910GSHENFLD",
                    "type": "StopPoint",
                    "routeType": "Unknown",
                    "status": "Unknown"
                }],
                "elevation": []
            },
            "routeOptions": [
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                "name": "Greater Anglia",
                "directions": [
                    "Southend Victoria Rail Station"
                ],
                "lineIdentifier":
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "greater-anglia",
                    "name": "Greater Anglia",
                    "uri": "/Line/greater-anglia",
                    "type": "Line",
                    "crowding":
                    {
                        "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
                    },
                    "routeType": "Unknown",
                    "status": "Unknown"
                }
            }],
            "mode":
            {
                "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                "id": "replacement-bus",
                "name": "replacement-bus",
                "type": "Mode",
                "routeType": "Unknown",
                "status": "Unknown"
            },
            "disruptions": [
            {
                "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                "category": "PlannedWork",
                "type": "routeBlocking",
                "categoryDescription": "PlannedWork",
                "description": "Mock 2 TFL RAIL: Saturday 22 and Sunday 23 February, no service between Liverpool Street and Shenfield. Use London Underground connections between Liverpool Street and Stratford / Newbury Park. Replacement buses operate.",
                "summary": "",
                "additionalInfo": "Replacement buses operate<br /><br />Service C: Stratford (Stratford City Bus Station, for Maryland) - Forest Gate (Romford Road) - Manor Park (Romford Road) - Ilford - Seven Kings - Goodmayes - Chadwell Heath (Wagney Road) - Romford<br /><br />Service D: Newbury Park (For Central line) - Chadwell Heath (Wagney Road) - Romford - Gidea Park - Harold Wood - Brentwood - Shenfield",
                "created": "2019-12-06T13:06:00",
                "lastUpdate": "2020-02-18T09:41:00"
            }],
            "plannedWorks": [],
            "isDisrupted": true,
            "hasFixedLocations": true
        }]
    },
    {
        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Journey, Tfl.Api.Presentation.Entities",
        "startDateTime": "2020-02-23T09:06:00",
        "duration": 54,
        "arrivalDateTime": "2020-02-23T10:00:00",
        "legs": [
        {
            "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration": 14,
            "instruction":
            {
                "$type": "Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
                "summary": "Central line to Newbury Park",
                "detailed": "Central line towards Hainault",
                "steps": []
            },
            "obstacles": [
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                "type": "STAIRS",
                "incline": "UP",
                "stopId": 1000154,
                "position": "AFTER"
            },
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                "type": "WALKWAY",
                "incline": "LEVEL",
                "stopId": 1000154,
                "position": "AFTER"
            },
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                "type": "WALKWAY",
                "incline": "LEVEL",
                "stopId": 1000154,
                "position": "AFTER"
            }],
            "departureTime": "2020-02-23T09:06:00",
            "arrivalTime": "2020-02-23T09:20:00",
            "departurePoint":
            {
                "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                "naptanId": "940GZZLUSTD",
                "platformName": "",
                "icsCode": "1000226",
                "commonName": "Stratford Underground Station",
                "placeType": "StopPoint",
                "additionalProperties": [],
                "lat": 51.54173162788,
                "lon": -0.0034038207000000003
            },
            "arrivalPoint":
            {
                "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                "naptanId": "940GZZLUNBP",
                "platformName": "",
                "icsCode": "1000154",
                "commonName": "Newbury Park Underground Station",
                "placeType": "StopPoint",
                "additionalProperties": [],
                "lat": 51.575526071999995,
                "lon": 0.090052651960000007
            },
            "path":
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
                "lineString": "[[51.54171292019, -0.00336137569],[51.54209824351, -0.00275323062],[51.54365968653, -0.00044945995],[51.54428947313, 0.00058769858],[51.54477214495, 0.00128671742],[51.5450917036, 0.00153149769],[51.54548683747, 0.00156326108],[51.54598352099, 0.00144083274],[51.54711757611, 0.00085598975],[51.54779211848, 0.00032307932],[51.54830982546, -0.00050519199],[51.54881323792, -0.00155046156],[51.55023895399, -0.00500743323],[51.55059144724, -0.005641096],[51.55117928613, -0.00636544824],[51.55205834338, -0.00729345897],[51.55257813091, -0.00771790893],[51.55303134429, -0.0079289037],[51.5535272844, -0.00800821072],[51.5539666166, -0.00793131562],[51.55461818438, -0.00764319017],[51.55569953274, -0.00671596598],[51.55605235678, -0.00631104255],[51.55644839384, -0.00580324091],[51.55693886188, -0.00503162853],[51.55693886188, -0.00503162853],[51.55768304938, -0.00384495413],[51.56027560299, 0.00022162162],[51.56079200383, 0.00105221328],[51.56189815061, 0.00263011033],[51.5625855113, 0.00345384639],[51.56375969872, 0.00473186474],[51.56551425361, 0.0062519283],[51.56760348344, 0.00765699071],[51.56834042465, 0.00820892883],[51.56834042465, 0.00820892883],[51.56880201125, 0.00856115837],[51.56965931704, 0.00943589699],[51.57017614296, 0.01023792641],[51.57054267566, 0.01088903661],[51.5708715309, 0.01163950804],[51.5710777948, 0.01219697804],[51.57129732755, 0.01302922253],[51.57148692692, 0.01403332126],[51.57157866444, 0.01497537751],[51.57171576192, 0.01746354407],[51.57183294075, 0.0184933247],[51.5720087403, 0.01925152129],[51.57231683872, 0.02015989958],[51.57367869143, 0.02358281586],[51.57515277166, 0.02727070807],[51.57535796289, 0.02788598339],[51.57568846165, 0.02905526439],[51.57568846165, 0.02905526439],[51.57593458046, 0.02990329384],[51.57608534434, 0.03054503051],[51.5762952565, 0.03192545693],[51.57636561875, 0.03357388237],[51.57615071225, 0.04645232369],[51.57615071225, 0.04645232369],[51.57613335385, 0.04744737249],[51.57615134705, 0.04899243795],[51.57628980261, 0.05239026887],[51.57629647312, 0.05406472346],[51.57656324581, 0.06090330379],[51.57655388566, 0.06501613266],[51.57655388566, 0.06501613266],[51.57655754114, 0.06531938023],[51.57639152438, 0.06708704118],[51.5736464423, 0.08298153159],[51.57344392291, 0.08375157453],[51.57298186517, 0.08495710876],[51.57270488658, 0.08586803622],[51.57254265934, 0.08689965853],[51.57252290616, 0.08800995901],[51.57261738488, 0.08876471486],[51.57279683543, 0.0892924697],[51.57307794759, 0.08966614633],[51.57331875476, 0.08977821175],[51.57420522379, 0.08999205554],[51.57552658572, 0.09002381114]]",
                "stopPoints": [
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "940GZZLULYN",
                    "name": "Leyton Underground Station",
                    "uri": "/StopPoint/940GZZLULYN",
                    "type": "StopPoint",
                    "routeType": "Unknown",
                    "status": "Unknown"
                },
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "940GZZLULYS",
                    "name": "Leytonstone Underground Station",
                    "uri": "/StopPoint/940GZZLULYS",
                    "type": "StopPoint",
                    "routeType": "Unknown",
                    "status": "Unknown"
                },
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "940GZZLUWSD",
                    "name": "Wanstead Underground Station",
                    "uri": "/StopPoint/940GZZLUWSD",
                    "type": "StopPoint",
                    "routeType": "Unknown",
                    "status": "Unknown"
                },
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "940GZZLURBG",
                    "name": "Redbridge Underground Station",
                    "uri": "/StopPoint/940GZZLURBG",
                    "type": "StopPoint",
                    "routeType": "Unknown",
                    "status": "Unknown"
                },
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "940GZZLUGTH",
                    "name": "Gants Hill Underground Station",
                    "uri": "/StopPoint/940GZZLUGTH",
                    "type": "StopPoint",
                    "routeType": "Unknown",
                    "status": "Unknown"
                },
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "940GZZLUNBP",
                    "name": "Newbury Park Underground Station",
                    "uri": "/StopPoint/940GZZLUNBP",
                    "type": "StopPoint",
                    "routeType": "Unknown",
                    "status": "Unknown"
                }],
                "elevation": []
            },
            "routeOptions": [
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                "name": "Central",
                "directions": [
                    "Hainault Underground Station"
                ],
                "lineIdentifier":
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "central",
                    "name": "Central",
                    "uri": "/Line/central",
                    "type": "Line",
                    "crowding":
                    {
                        "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
                    },
                    "routeType": "Unknown",
                    "status": "Unknown"
                }
            }],
            "mode":
            {
                "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                "id": "tube",
                "name": "tube",
                "type": "Mode",
                "routeType": "Unknown",
                "status": "Unknown"
            },
            "disruptions": [
            {
                "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                "category": "PlannedWork",
                "type": "routeBlocking",
                "categoryDescription": "PlannedWork",
                "description": "mock 3 TFL RAIL: Saturday 22 and Sunday 23 February, no service between Liverpool Street and Shenfield. Use London Underground connections between Liverpool Street and Stratford / Newbury Park. Replacement buses operate.",
                "summary": "",
                "additionalInfo": "Replacement buses operate<br /><br />Service C: Stratford (Stratford City Bus Station, for Maryland) - Forest Gate (Romford Road) - Manor Park (Romford Road) - Ilford - Seven Kings - Goodmayes - Chadwell Heath (Wagney Road) - Romford<br /><br />Service D: Newbury Park (For Central line) - Chadwell Heath (Wagney Road) - Romford - Gidea Park - Harold Wood - Brentwood - Shenfield",
                "created": "2019-12-06T13:06:00",
                "lastUpdate": "2020-02-18T09:41:00"
            },
            {
                "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                "category": "Information",
                "type": "stopInfo",
                "categoryDescription": "Information",
                "description": "The upper station car park at Newbury Park will be closed on the following dates. From 05:00 Saturday 15 until 23:00 Sunday 16 February, from 05:00 Saturday 22 until 23:00 Sunday 23 February and from 05:00 Saturday 29 February until 23:00 Sunday 1 March",
                "summary": "Newbury Park - Upper Station Car Park Closed",
                "additionalInfo": "",
                "created": "2020-01-07T10:49:00",
                "lastUpdate": "2020-01-29T09:58:00"
            }],
            "plannedWorks": [],
            "isDisrupted": true,
            "hasFixedLocations": true
        },
        {
            "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration": 30,
            "instruction":
            {
                "$type": "Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
                "summary": "Greater Anglia to Shenfield",
                "detailed": "Greater Anglia towards Southend Victoria",
                "steps": []
            },
            "obstacles": [],
            "departureTime": "2020-02-23T09:30:00",
            "arrivalTime": "2020-02-23T10:00:00",
            "departurePoint":
            {
                "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                "platformName": "",
                "icsCode": "1000154",
                "commonName": "Newbury Park Station",
                "placeType": "StopPoint",
                "additionalProperties": [],
                "lat": 51.57524701208,
                "lon": 0.09006871338
            },
            "arrivalPoint":
            {
                "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                "naptanId": "910GSHENFLD",
                "platformName": "",
                "icsCode": "1006448",
                "commonName": "Shenfield Rail Station",
                "placeType": "StopPoint",
                "additionalProperties": [],
                "lat": 51.63087565397,
                "lon": 0.32985122204
            },
            "path":
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
                "stopPoints": [
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "910GSHENFLD",
                    "name": "Shenfield Rail Station",
                    "uri": "/StopPoint/910GSHENFLD",
                    "type": "StopPoint",
                    "routeType": "Unknown",
                    "status": "Unknown"
                }],
                "elevation": []
            },
            "routeOptions": [
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                "name": "Greater Anglia",
                "directions": [
                    "Southend Victoria Rail Station"
                ],
                "lineIdentifier":
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "greater-anglia",
                    "name": "Greater Anglia",
                    "uri": "/Line/greater-anglia",
                    "type": "Line",
                    "crowding":
                    {
                        "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
                    },
                    "routeType": "Unknown",
                    "status": "Unknown"
                }
            }],
            "mode":
            {
                "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                "id": "replacement-bus",
                "name": "replacement-bus",
                "type": "Mode",
                "routeType": "Unknown",
                "status": "Unknown"
            },
            "disruptions": [
            {
                "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                "category": "PlannedWork",
                "type": "routeBlocking",
                "categoryDescription": "PlannedWork",
                "description": "Mock 4 TFL RAIL: Saturday 22 and Sunday 23 February, no service between Liverpool Street and Shenfield. Use London Underground connections between Liverpool Street and Stratford / Newbury Park. Replacement buses operate.",
                "summary": "",
                "additionalInfo": "Replacement buses operate<br /><br />Service C: Stratford (Stratford City Bus Station, for Maryland) - Forest Gate (Romford Road) - Manor Park (Romford Road) - Ilford - Seven Kings - Goodmayes - Chadwell Heath (Wagney Road) - Romford<br /><br />Service D: Newbury Park (For Central line) - Chadwell Heath (Wagney Road) - Romford - Gidea Park - Harold Wood - Brentwood - Shenfield",
                "created": "2019-12-06T13:06:00",
                "lastUpdate": "2020-02-18T09:41:00"
            }],
            "plannedWorks": [],
            "isDisrupted": true,
            "hasFixedLocations": true
        }]
    },
    {
        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Journey, Tfl.Api.Presentation.Entities",
        "startDateTime": "2020-02-23T09:33:00",
        "duration": 57,
        "arrivalDateTime": "2020-02-23T10:30:00",
        "legs": [
        {
            "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration": 14,
            "instruction":
            {
                "$type": "Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
                "summary": "Central line to Newbury Park",
                "detailed": "Central line towards Hainault",
                "steps": []
            },
            "obstacles": [
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                "type": "STAIRS",
                "incline": "UP",
                "stopId": 1000154,
                "position": "AFTER"
            },
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                "type": "WALKWAY",
                "incline": "LEVEL",
                "stopId": 1000154,
                "position": "AFTER"
            },
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
                "type": "WALKWAY",
                "incline": "LEVEL",
                "stopId": 1000154,
                "position": "AFTER"
            }],
            "departureTime": "2020-02-23T09:33:00",
            "arrivalTime": "2020-02-23T09:47:00",
            "departurePoint":
            {
                "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                "naptanId": "940GZZLUSTD",
                "platformName": "",
                "icsCode": "1000226",
                "commonName": "Stratford Underground Station",
                "placeType": "StopPoint",
                "additionalProperties": [],
                "lat": 51.54173162788,
                "lon": -0.0034038207000000003
            },
            "arrivalPoint":
            {
                "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                "naptanId": "940GZZLUNBP",
                "platformName": "",
                "icsCode": "1000154",
                "commonName": "Newbury Park Underground Station",
                "placeType": "StopPoint",
                "additionalProperties": [],
                "lat": 51.575526071999995,
                "lon": 0.090052651960000007
            },
            "path":
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
                "lineString": "[[51.54171292019, -0.00336137569],[51.54209824351, -0.00275323062],[51.54365968653, -0.00044945995],[51.54428947313, 0.00058769858],[51.54477214495, 0.00128671742],[51.5450917036, 0.00153149769],[51.54548683747, 0.00156326108],[51.54598352099, 0.00144083274],[51.54711757611, 0.00085598975],[51.54779211848, 0.00032307932],[51.54830982546, -0.00050519199],[51.54881323792, -0.00155046156],[51.55023895399, -0.00500743323],[51.55059144724, -0.005641096],[51.55117928613, -0.00636544824],[51.55205834338, -0.00729345897],[51.55257813091, -0.00771790893],[51.55303134429, -0.0079289037],[51.5535272844, -0.00800821072],[51.5539666166, -0.00793131562],[51.55461818438, -0.00764319017],[51.55569953274, -0.00671596598],[51.55605235678, -0.00631104255],[51.55644839384, -0.00580324091],[51.55693886188, -0.00503162853],[51.55693886188, -0.00503162853],[51.55768304938, -0.00384495413],[51.56027560299, 0.00022162162],[51.56079200383, 0.00105221328],[51.56189815061, 0.00263011033],[51.5625855113, 0.00345384639],[51.56375969872, 0.00473186474],[51.56551425361, 0.0062519283],[51.56760348344, 0.00765699071],[51.56834042465, 0.00820892883],[51.56834042465, 0.00820892883],[51.56880201125, 0.00856115837],[51.56965931704, 0.00943589699],[51.57017614296, 0.01023792641],[51.57054267566, 0.01088903661],[51.5708715309, 0.01163950804],[51.5710777948, 0.01219697804],[51.57129732755, 0.01302922253],[51.57148692692, 0.01403332126],[51.57157866444, 0.01497537751],[51.57171576192, 0.01746354407],[51.57183294075, 0.0184933247],[51.5720087403, 0.01925152129],[51.57231683872, 0.02015989958],[51.57367869143, 0.02358281586],[51.57515277166, 0.02727070807],[51.57535796289, 0.02788598339],[51.57568846165, 0.02905526439],[51.57568846165, 0.02905526439],[51.57593458046, 0.02990329384],[51.57608534434, 0.03054503051],[51.5762952565, 0.03192545693],[51.57636561875, 0.03357388237],[51.57615071225, 0.04645232369],[51.57615071225, 0.04645232369],[51.57613335385, 0.04744737249],[51.57615134705, 0.04899243795],[51.57628980261, 0.05239026887],[51.57629647312, 0.05406472346],[51.57656324581, 0.06090330379],[51.57655388566, 0.06501613266],[51.57655388566, 0.06501613266],[51.57655754114, 0.06531938023],[51.57639152438, 0.06708704118],[51.5736464423, 0.08298153159],[51.57344392291, 0.08375157453],[51.57298186517, 0.08495710876],[51.57270488658, 0.08586803622],[51.57254265934, 0.08689965853],[51.57252290616, 0.08800995901],[51.57261738488, 0.08876471486],[51.57279683543, 0.0892924697],[51.57307794759, 0.08966614633],[51.57331875476, 0.08977821175],[51.57420522379, 0.08999205554],[51.57552658572, 0.09002381114]]",
                "stopPoints": [
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "940GZZLULYN",
                    "name": "Leyton Underground Station",
                    "uri": "/StopPoint/940GZZLULYN",
                    "type": "StopPoint",
                    "routeType": "Unknown",
                    "status": "Unknown"
                },
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "940GZZLULYS",
                    "name": "Leytonstone Underground Station",
                    "uri": "/StopPoint/940GZZLULYS",
                    "type": "StopPoint",
                    "routeType": "Unknown",
                    "status": "Unknown"
                },
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "940GZZLUWSD",
                    "name": "Wanstead Underground Station",
                    "uri": "/StopPoint/940GZZLUWSD",
                    "type": "StopPoint",
                    "routeType": "Unknown",
                    "status": "Unknown"
                },
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "940GZZLURBG",
                    "name": "Redbridge Underground Station",
                    "uri": "/StopPoint/940GZZLURBG",
                    "type": "StopPoint",
                    "routeType": "Unknown",
                    "status": "Unknown"
                },
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "940GZZLUGTH",
                    "name": "Gants Hill Underground Station",
                    "uri": "/StopPoint/940GZZLUGTH",
                    "type": "StopPoint",
                    "routeType": "Unknown",
                    "status": "Unknown"
                },
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "940GZZLUNBP",
                    "name": "Newbury Park Underground Station",
                    "uri": "/StopPoint/940GZZLUNBP",
                    "type": "StopPoint",
                    "routeType": "Unknown",
                    "status": "Unknown"
                }],
                "elevation": []
            },
            "routeOptions": [
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                "name": "Central",
                "directions": [
                    "Hainault Underground Station"
                ],
                "lineIdentifier":
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "central",
                    "name": "Central",
                    "uri": "/Line/central",
                    "type": "Line",
                    "crowding":
                    {
                        "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
                    },
                    "routeType": "Unknown",
                    "status": "Unknown"
                }
            }],
            "mode":
            {
                "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                "id": "tube",
                "name": "tube",
                "type": "Mode",
                "routeType": "Unknown",
                "status": "Unknown"
            },
            "disruptions": [
            {
                "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                "category": "PlannedWork",
                "type": "routeBlocking",
                "categoryDescription": "PlannedWork",
                "description": "Mock 5 TFL RAIL: Saturday 22 and Sunday 23 February, no service between Liverpool Street and Shenfield. Use London Underground connections between Liverpool Street and Stratford / Newbury Park. Replacement buses operate.",
                "summary": "",
                "additionalInfo": "Replacement buses operate<br /><br />Service C: Stratford (Stratford City Bus Station, for Maryland) - Forest Gate (Romford Road) - Manor Park (Romford Road) - Ilford - Seven Kings - Goodmayes - Chadwell Heath (Wagney Road) - Romford<br /><br />Service D: Newbury Park (For Central line) - Chadwell Heath (Wagney Road) - Romford - Gidea Park - Harold Wood - Brentwood - Shenfield",
                "created": "2019-12-06T13:06:00",
                "lastUpdate": "2020-02-18T09:41:00"
            },
            {
                "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                "category": "Information",
                "type": "stopInfo",
                "categoryDescription": "Information",
                "description": "The upper station car park at Newbury Park will be closed on the following dates. From 05:00 Saturday 15 until 23:00 Sunday 16 February, from 05:00 Saturday 22 until 23:00 Sunday 23 February and from 05:00 Saturday 29 February until 23:00 Sunday 1 March",
                "summary": "Newbury Park - Upper Station Car Park Closed",
                "additionalInfo": "",
                "created": "2020-01-07T10:49:00",
                "lastUpdate": "2020-01-29T09:58:00"
            }],
            "plannedWorks": [],
            "isDisrupted": true,
            "hasFixedLocations": true
        },
        {
            "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
            "duration": 30,
            "instruction":
            {
                "$type": "Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
                "summary": "Greater Anglia to Shenfield",
                "detailed": "Greater Anglia towards Southend Victoria",
                "steps": []
            },
            "obstacles": [],
            "departureTime": "2020-02-23T10:00:00",
            "arrivalTime": "2020-02-23T10:30:00",
            "departurePoint":
            {
                "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                "platformName": "",
                "icsCode": "1000154",
                "commonName": "Newbury Park Station",
                "placeType": "StopPoint",
                "additionalProperties": [],
                "lat": 51.57524701208,
                "lon": 0.09006871338
            },
            "arrivalPoint":
            {
                "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                "naptanId": "910GSHENFLD",
                "platformName": "",
                "icsCode": "1006448",
                "commonName": "Shenfield Rail Station",
                "placeType": "StopPoint",
                "additionalProperties": [],
                "lat": 51.63087565397,
                "lon": 0.32985122204
            },
            "path":
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
                "stopPoints": [
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "910GSHENFLD",
                    "name": "Shenfield Rail Station",
                    "uri": "/StopPoint/910GSHENFLD",
                    "type": "StopPoint",
                    "routeType": "Unknown",
                    "status": "Unknown"
                }],
                "elevation": []
            },
            "routeOptions": [
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                "name": "Greater Anglia",
                "directions": [
                    "Southend Victoria Rail Station"
                ],
                "lineIdentifier":
                {
                    "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                    "id": "greater-anglia",
                    "name": "Greater Anglia",
                    "uri": "/Line/greater-anglia",
                    "type": "Line",
                    "crowding":
                    {
                        "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
                    },
                    "routeType": "Unknown",
                    "status": "Unknown"
                }
            }],
            "mode":
            {
                "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                "id": "replacement-bus",
                "name": "replacement-bus",
                "type": "Mode",
                "routeType": "Unknown",
                "status": "Unknown"
            },
            "disruptions": [
            {
                "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                "category": "PlannedWork",
                "type": "routeBlocking",
                "categoryDescription": "PlannedWork",
                "description": "Mock 6 TFL RAIL: Saturday 22 and Sunday 23 February, no service between Liverpool Street and Shenfield. Use London Underground connections between Liverpool Street and Stratford / Newbury Park. Replacement buses operate.",
                "summary": "",
                "additionalInfo": "Replacement buses operate<br /><br />Service C: Stratford (Stratford City Bus Station, for Maryland) - Forest Gate (Romford Road) - Manor Park (Romford Road) - Ilford - Seven Kings - Goodmayes - Chadwell Heath (Wagney Road) - Romford<br /><br />Service D: Newbury Park (For Central line) - Chadwell Heath (Wagney Road) - Romford - Gidea Park - Harold Wood - Brentwood - Shenfield",
                "created": "2019-12-06T13:06:00",
                "lastUpdate": "2020-02-18T09:41:00"
            }],
            "plannedWorks": [],
            "isDisrupted": true,
            "hasFixedLocations": true
        }]
    }],
    "lines": [
    {
        "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
        "id": "central",
        "name": "Central",
        "modeName": "tube",
        "disruptions": [],
        "created": "2020-02-13T12:12:29.05Z",
        "modified": "2020-02-13T12:12:29.05Z",
        "lineStatuses": [
        {
            "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
            "id": 0,
            "statusSeverity": 10,
            "statusSeverityDescription": "Good Service",
            "created": "0001-01-01T00:00:00",
            "validityPeriods": []
        }],
        "routeSections": [],
        "serviceTypes": [
        {
            "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
            "name": "Regular",
            "uri": "/Line/Route?ids=Central&serviceTypes=Regular"
        },
        {
            "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
            "name": "Night",
            "uri": "/Line/Route?ids=Central&serviceTypes=Night"
        }],
        "crowding":
        {
            "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
        }
    }],
    "stopMessages": [
        "TFL RAIL: Saturday 22 and Sunday 23 February, no service between Liverpool Street and Shenfield. Use London Underground connections between Liverpool Street and Stratford / Newbury Park. Replacement buses operate."
    ],
    "recommendedMaxAgeMinutes": 5,
    "searchCriteria":
    {
        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.SearchCriteria, Tfl.Api.Presentation.Entities",
        "dateTime": "2020-02-23T08:45:00",
        "dateTimeType": "Departing",
        "timeAdjustments":
        {
            "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustments, Tfl.Api.Presentation.Entities",
            "earliest":
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment, Tfl.Api.Presentation.Entities",
                "date": "20200223",
                "time": "0300",
                "timeIs": "departing",
                "uri": "/journey/journeyresults/1000226/to/1006448?time=0300&date=20200223&timeIs=departing"
            },
            "earlier":
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment, Tfl.Api.Presentation.Entities",
                "date": "20200223",
                "time": "0834",
                "timeIs": "departing",
                "uri": "/journey/journeyresults/1000226/to/1006448?time=0834&date=20200223&timeIs=departing"
            },
            "later":
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment, Tfl.Api.Presentation.Entities",
                "date": "20200223",
                "time": "0933",
                "timeIs": "departing",
                "uri": "/journey/journeyresults/1000226/to/1006448?time=0933&date=20200223&timeIs=departing"
            },
            "latest":
            {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment, Tfl.Api.Presentation.Entities",
                "date": "20200224",
                "time": "0300",
                "timeIs": "departing",
                "uri": "/journey/journeyresults/1000226/to/1006448?time=0300&date=20200224&timeIs=departing"
            }
        }
    },
    "journeyVector":
    {
        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyVector, Tfl.Api.Presentation.Entities",
        "from": "1000226",
        "to": "1006448",
        "via": "",
        "uri": "/journey/journeyresults/1000226/to/1006448?time=0845&date=20200223&timeis=departing"
    }
}`;
export function getMockData() {
    if (process.env.NODE_ENV == 'development') {
        return JSON.parse(data);
        }
    else {
        // No need to load mock data in prod
        return null;
    }
}