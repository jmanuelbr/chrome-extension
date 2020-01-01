const data = `
{
    "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.ItineraryResult, Tfl.Api.Presentation.Entities",
    "journeys": [
        {
            "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Journey, Tfl.Api.Presentation.Entities",
            "startDateTime": "2019-08-13T10:41:00",
            "duration": 17,
            "arrivalDateTime": "2019-08-13T10:58:00",
            "legs": [
                {
                    "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
                    "duration": 17,
                    "instruction": {
                        "$type": "Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
                        "summary": "Greater Anglia to Shenfield",
                        "detailed": "Greater Anglia towards Colchester Town",
                        "steps": []
                    },
                    "obstacles": [],
                    "departureTime": "2019-08-13T10:41:00",
                    "arrivalTime": "2019-08-13T10:58:00",
                    "departurePoint": {
                        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                        "naptanId": "910GSTFD",
                        "platformName": "",
                        "icsCode": "1000226",
                        "commonName": "Stratford (London) Rail Station",
                        "placeType": "StopPoint",
                        "additionalProperties": [],
                        "lat": 51.54189337473,
                        "lon": -0.00339674068
                    },
                    "arrivalPoint": {
                        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                        "naptanId": "910GSHENFLD",
                        "platformName": "",
                        "icsCode": "1006448",
                        "commonName": "Shenfield Rail Station",
                        "placeType": "StopPoint",
                        "additionalProperties": [],
                        "lat": 51.63085739978,
                        "lon": 0.3298647368
                    },
                    "path": {
                        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
                        "lineString": "[[51.54187491231, -0.00336870613],[51.54223401388, -0.00280497148],[51.54374277046, -0.00057561504],[51.54438831815, 0.0005920343],[51.54483739345, 0.00167898246],[51.54531526615, 0.00318546791],[51.54567925778, 0.00451390885],[51.5458896191, 0.00535966748],[51.54623744991, 0.00710569166],[51.54731079407, 0.01269139872],[51.54919303148, 0.02298645741],[51.55013331673, 0.02842275545],[51.55040816609, 0.0302091478],[51.55061160147, 0.03196353141],[51.55094400649, 0.0356132658],[51.55096596142, 0.03590273198],[51.55123587836, 0.03900160347],[51.551704103, 0.04258540473],[51.5520743118, 0.04456374428],[51.55216536608, 0.04501499301],[51.55329314957, 0.0499556737],[51.55370673737, 0.05150334079],[51.55407244414, 0.0527026726],[51.5551675773, 0.05589677677],[51.55539932469, 0.05652753467],[51.55607303397, 0.0586208387],[51.55632818071, 0.05945464502],[51.55651649941, 0.05999691841],[51.55708701248, 0.06130663874],[51.55733442101, 0.06206799723],[51.55765635737, 0.06319339851],[51.55785831853, 0.06398157245],[51.55820287897, 0.06535327865],[51.55857422221, 0.06724558415],[51.55889823109, 0.06876067358],[51.55889823109, 0.06876067358],[51.55924714155, 0.07039233188],[51.56048611802, 0.07610414667],[51.56088551864, 0.0779257796],[51.56092712655, 0.07811523449],[51.56223273989, 0.08410465575],[51.56278916018, 0.08720329483],[51.56315064727, 0.0896293703],[51.56343352895, 0.09192202171],[51.56359547856, 0.09343001078],[51.5638423151, 0.09622604969],[51.5638423151, 0.09622604969],[51.56420064391, 0.10032583135],[51.56448609906, 0.10296501387],[51.56484208304, 0.10567963337],[51.56546954769, 0.11029706173],[51.56625313668, 0.11622050417],[51.5673402906, 0.12423616546],[51.56787358245, 0.12805607505],[51.56808661982, 0.12969660492],[51.56834261961, 0.13243584051],[51.56855605451, 0.13553386556],[51.56921062344, 0.14402069785],[51.56934654557, 0.14593189999],[51.56940444692, 0.1466994367],[51.56969017619, 0.14975772709],[51.57011901685, 0.15432360311],[51.57112687061, 0.16503572805],[51.57154635984, 0.16812948531],[51.57194236597, 0.17054391419],[51.57329165658, 0.17731892279],[51.5736319298, 0.17885052253],[51.57410159575, 0.18067697719],[51.57443954365, 0.18184771769],[51.57443954365, 0.18184771769],[51.57493826343, 0.18356017179],[51.57596914667, 0.18711669289],[51.57676288231, 0.18988260156],[51.57744810255, 0.19219596101],[51.57972438147, 0.19982550293],[51.58084894156, 0.20315636449],[51.58141348865, 0.20469927609],[51.58207630394, 0.20627585603],[51.58207630394, 0.20627585603],[51.5838832784, 0.210607317],[51.58807846159, 0.22132071964],[51.59943094509, 0.24993184052],[51.60001393652, 0.25141913258],[51.60133326405, 0.25483465115],[51.60238646712, 0.25758731634],[51.60540666577, 0.2655936318],[51.60567180576, 0.26630005611],[51.60706708147, 0.2699513148],[51.60990922803, 0.27735820215],[51.61166549578, 0.28185156413],[51.61228456892, 0.28377481788],[51.61279775778, 0.28605391602],[51.61316799998, 0.28828254208],[51.61337456777, 0.28967961902],[51.61359204371, 0.29143837638],[51.61374438714, 0.29284719309],[51.61380062097, 0.29503119106],[51.61374872295, 0.29722417924],[51.61363785377, 0.29921195572],[51.61334944495, 0.30337188659],[51.61321029826, 0.30587820624],[51.61317768117, 0.30753768453],[51.61322163728, 0.30941771764],[51.61331002404, 0.31086667221],[51.61355555482, 0.31255473692],[51.61397618691, 0.3144828471],[51.61454109944, 0.31638945096],[51.61504180489, 0.31790280905],[51.61561835428, 0.31921783253],[51.61637114236, 0.3207152294],[51.61753088711, 0.32255126787],[51.61844350084, 0.32369579347],[51.61914065304, 0.3243670618],[51.61983167616, 0.32489356999],[51.62064120263, 0.32533947192],[51.62440721976, 0.32680350341],[51.6280039521, 0.32818687203],[51.62971252432, 0.32909801615],[51.6303527712, 0.32946317095],[51.6307162374, 0.32972744985]]",
                        "stopPoints": [
                            {
                                "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                                "id": "910GROMFORD",
                                "name": "Romford Rail Station",
                                "uri": "/StopPoint/910GROMFORD",
                                "type": "StopPoint",
                                "routeType": "Unknown",
                                "status": "Unknown"
                            },
                            {
                                "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                                "id": "910GSHENFLD",
                                "name": "Shenfield Rail Station",
                                "uri": "/StopPoint/910GSHENFLD",
                                "type": "StopPoint",
                                "routeType": "Unknown",
                                "status": "Unknown"
                            }
                        ],
                        "elevation": []
                    },
                    "routeOptions": [
                        {
                            "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                            "name": "Greater Anglia",
                            "directions": [
                                "Colchester Town Rail Station"
                            ],
                            "lineIdentifier": {
                                "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                                "id": "greater-anglia",
                                "name": "Greater Anglia",
                                "uri": "/Line/greater-anglia",
                                "type": "Line",
                                "crowding": {
                                    "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
                                },
                                "routeType": "Unknown",
                                "status": "Unknown"
                            }
                        }
                    ],
                    "mode": {
                        "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                        "id": "national-rail",
                        "name": "national-rail",
                        "type": "Mode",
                        "routeType": "Unknown",
                        "status": "Unknown"
                    },
                    "disruptions": [
                        {
                            "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                            "category": "PlannedWork",
                            "type": "stopInfo",
                            "categoryDescription": "PlannedWork",
                            "description": "Your safety is important to us so when carrying large or multiple items of luggage please use lifts where available, should you wish to use the escalators please ensure your luggage is secure on a step and you hold onto both your luggage and the hand rail at all times",
                            "summary": "Safety is Important.",
                            "additionalInfo": "",
                            "created": "2014-11-07T10:34:00",
                            "lastUpdate": "2018-03-05T16:03:00"
                        },
                        {
                            "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                            "category": "PlannedWork",
                            "type": "stopInfo",
                            "categoryDescription": "PlannedWork",
                            "description": "LONDON BRIDGE STATION: Please note that step free interchange between the Jubilee and Northern lines is partly at street level, in both directions. Lifts are available between Northern line and Borough High Street entrance then via Borough High Street, St Thomas Street and Joiner Street to the main Underground ticket hall from where lifts are available to/from the Jubilee line.",
                            "summary": "",
                            "additionalInfo": "",
                            "created": "2018-01-22T11:40:00",
                            "lastUpdate": "2018-03-05T15:29:00"
                        }
                    ],
                    "plannedWorks": [],
                    "isDisrupted": true,
                    "hasFixedLocations": true
                }
            ],
            "fare": {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyFare, Tfl.Api.Presentation.Entities",
                "totalCost": 470,
                "fares": [
                    {
                        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Fare, Tfl.Api.Presentation.Entities",
                        "lowZone": 3,
                        "highZone": 12,
                        "cost": 470,
                        "chargeProfileName": "Standard peak/off peak",
                        "isHopperFare": false,
                        "chargeLevel": "Off Peak",
                        "peak": 710,
                        "offPeak": 470,
                        "taps": [
                            {
                                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap, Tfl.Api.Presentation.Entities",
                                "atcoCode": "910GSTFD",
                                "tapDetails": {
                                    "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails, Tfl.Api.Presentation.Entities",
                                    "modeType": "Rail",
                                    "validationType": "None",
                                    "hostDeviceType": "Gate",
                                    "nationalLocationCode": 719,
                                    "tapTimestamp": "2019-08-13T10:41:00"
                                }
                            },
                            {
                                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap, Tfl.Api.Presentation.Entities",
                                "atcoCode": "910GSHENFLD",
                                "tapDetails": {
                                    "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails, Tfl.Api.Presentation.Entities",
                                    "modeType": "Rail",
                                    "validationType": "None",
                                    "hostDeviceType": "Gate",
                                    "nationalLocationCode": 6888,
                                    "tapTimestamp": "2019-08-13T10:58:00"
                                }
                            }
                        ]
                    }
                ],
                "caveats": [
                    {
                        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.FareCaveat, Tfl.Api.Presentation.Entities",
                        "text": "<p>Fares between two stations may vary depending on the direction of travel, time of day and day of the week.</p><p>We charge higher fares at the busiest times of the day (usually between 06:30 and 09:30, and between 16:00 and 19:00, Monday to Friday).</p><p>When you pay as you go, you must touch your contactless or Oyster card on a yellow reader at the start and end of your journey.</p><p>Some journeys are charged via Zone 1 regardless of the route taken.</p><p>If your journey avoids Zone 1 and you see a pink card reader when changing trains, touch your contactless or Oyster card on it to pay the right fare.</p>",
                        "type": "allRailModes"
                    },
                    {
                        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.FareCaveat, Tfl.Api.Presentation.Entities",
                        "text": "The price shown is a single adult pay as you go fare.",
                        "type": "generic"
                    }
                ]
            }
        },
        {
            "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Journey, Tfl.Api.Presentation.Entities",
            "startDateTime": "2019-08-13T10:45:00",
            "duration": 15,
            "arrivalDateTime": "2019-08-13T11:00:00",
            "legs": [
                {
                    "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
                    "duration": 15,
                    "instruction": {
                        "$type": "Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
                        "summary": "Greater Anglia to Shenfield",
                        "detailed": "Greater Anglia towards Southend Victoria",
                        "steps": []
                    },
                    "obstacles": [],
                    "departureTime": "2019-08-13T10:45:00",
                    "arrivalTime": "2019-08-13T11:00:00",
                    "departurePoint": {
                        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                        "naptanId": "910GSTFD",
                        "platformName": "",
                        "icsCode": "1000226",
                        "commonName": "Stratford (London) Rail Station",
                        "placeType": "StopPoint",
                        "additionalProperties": [],
                        "lat": 51.542234259219995,
                        "lon": -0.0028193822
                    },
                    "arrivalPoint": {
                        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                        "naptanId": "910GSHENFLD",
                        "platformName": "",
                        "icsCode": "1006448",
                        "commonName": "Shenfield Rail Station",
                        "placeType": "StopPoint",
                        "additionalProperties": [],
                        "lat": 51.63085739978,
                        "lon": 0.3298647368
                    },
                    "path": {
                        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
                        "lineString": "[[51.54223401388, -0.00280497148],[51.54374277046, -0.00057561504],[51.54438831815, 0.0005920343],[51.54483739345, 0.00167898246],[51.54531526615, 0.00318546791],[51.54567925778, 0.00451390885],[51.5458896191, 0.00535966748],[51.54623744991, 0.00710569166],[51.54731079407, 0.01269139872],[51.54919303148, 0.02298645741],[51.55013331673, 0.02842275545],[51.55040816609, 0.0302091478],[51.55061160147, 0.03196353141],[51.55094400649, 0.0356132658],[51.55096596142, 0.03590273198],[51.55123587836, 0.03900160347],[51.551704103, 0.04258540473],[51.5520743118, 0.04456374428],[51.55216536608, 0.04501499301],[51.55219879609, 0.04516073951],[51.55219879609, 0.04516073951],[51.55329314957, 0.0499556737],[51.55370673737, 0.05150334079],[51.55407244414, 0.0527026726],[51.5551675773, 0.05589677677],[51.55539932469, 0.05652753467],[51.55607303397, 0.0586208387],[51.55632818071, 0.05945464502],[51.55651649941, 0.05999691841],[51.55708701248, 0.06130663874],[51.55733442101, 0.06206799723],[51.55765635737, 0.06319339851],[51.55785831853, 0.06398157245],[51.55820287897, 0.06535327865],[51.55857422221, 0.06724558415],[51.5588979769, 0.06877508892],[51.5588979769, 0.06877508892],[51.55924714155, 0.07039233188],[51.56048611802, 0.07610414667],[51.56088551864, 0.0779257796],[51.56092712655, 0.07811523449],[51.56223273989, 0.08410465575],[51.56278916018, 0.08720329483],[51.56315064727, 0.0896293703],[51.56343352895, 0.09192202171],[51.56359547856, 0.09343001078],[51.5638423151, 0.09622604969],[51.5638423151, 0.09622604969],[51.56420064391, 0.10032583135],[51.56448609906, 0.10296501387],[51.56484208304, 0.10567963337],[51.56546954769, 0.11029706173],[51.56562003546, 0.11142950005],[51.56562003546, 0.11142950005],[51.56625313668, 0.11622050417],[51.5673402906, 0.12423616546],[51.56787358245, 0.12805607505],[51.56804692791, 0.12940615168],[51.56804692791, 0.12940615168],[51.56808661982, 0.12969660492],[51.56834261961, 0.13243584051],[51.56855605451, 0.13553386556],[51.56921062344, 0.14402069785],[51.56934654557, 0.14593189999],[51.56940444692, 0.1466994367],[51.56969017619, 0.14975772709],[51.57011901685, 0.15432360311],[51.57112687061, 0.16503572805],[51.57154635984, 0.16812948531],[51.57194236597, 0.17054391419],[51.57329165658, 0.17731892279],[51.5736319298, 0.17885052253],[51.57410159575, 0.18067697719],[51.57444826034, 0.18186256721],[51.57444826034, 0.18186256721],[51.57493826343, 0.18356017179],[51.57596914667, 0.18711669289],[51.57676288231, 0.18988260156],[51.57744810255, 0.19219596101],[51.57972438147, 0.19982550293],[51.58084894156, 0.20315636449],[51.58141348865, 0.20469927609],[51.58205887694, 0.20624614277],[51.58205887694, 0.20624614277],[51.5838832784, 0.210607317],[51.58807846159, 0.22132071964],[51.59312504741, 0.23402701343],[51.59312504741, 0.23402701343],[51.59943094509, 0.24993184052],[51.60001393652, 0.25141913258],[51.60133326405, 0.25483465115],[51.60238646712, 0.25758731634],[51.60540666577, 0.2655936318],[51.60567180576, 0.26630005611],[51.60706708147, 0.2699513148],[51.60990922803, 0.27735820215],[51.61166549578, 0.28185156413],[51.61228456892, 0.28377481788],[51.61279775778, 0.28605391602],[51.61316799998, 0.28828254208],[51.61337456777, 0.28967961902],[51.61359204371, 0.29143837638],[51.61374438714, 0.29284719309],[51.61380062097, 0.29503119106],[51.61374872295, 0.29722417924],[51.61363785377, 0.29921195572],[51.61361281746, 0.29957180888],[51.61361281746, 0.29957180888],[51.61334944495, 0.30337188659],[51.61321029826, 0.30587820624],[51.61317768117, 0.30753768453],[51.61322163728, 0.30941771764],[51.61331002404, 0.31086667221],[51.61355555482, 0.31255473692],[51.61397618691, 0.3144828471],[51.61454109944, 0.31638945096],[51.61504180489, 0.31790280905],[51.61561835428, 0.31921783253],[51.61637114236, 0.3207152294],[51.61753088711, 0.32255126787],[51.61844350084, 0.32369579347],[51.61914065304, 0.3243670618],[51.61983167616, 0.32489356999],[51.62064120263, 0.32533947192],[51.62440721976, 0.32680350341],[51.6280039521, 0.32818687203],[51.62971252432, 0.32909801615],[51.6303527712, 0.32946317095],[51.6307162374, 0.32972744985]]",
                        "stopPoints": [
                            {
                                "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                                "id": "910GSHENFLD",
                                "name": "Shenfield Rail Station",
                                "uri": "/StopPoint/910GSHENFLD",
                                "type": "StopPoint",
                                "routeType": "Unknown",
                                "status": "Unknown"
                            }
                        ],
                        "elevation": []
                    },
                    "routeOptions": [
                        {
                            "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                            "name": "Greater Anglia",
                            "directions": [
                                "Southend Victoria Rail Station"
                            ],
                            "lineIdentifier": {
                                "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                                "id": "greater-anglia",
                                "name": "Greater Anglia",
                                "uri": "/Line/greater-anglia",
                                "type": "Line",
                                "crowding": {
                                    "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
                                },
                                "routeType": "Unknown",
                                "status": "Unknown"
                            }
                        }
                    ],
                    "mode": {
                        "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                        "id": "national-rail",
                        "name": "national-rail",
                        "type": "Mode",
                        "routeType": "Unknown",
                        "status": "Unknown"
                    },
                    "disruptions": [],
                    "plannedWorks": [],
                    "isDisrupted": false,
                    "hasFixedLocations": true
                }
            ],
            "fare": {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyFare, Tfl.Api.Presentation.Entities",
                "totalCost": 470,
                "fares": [
                    {
                        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Fare, Tfl.Api.Presentation.Entities",
                        "lowZone": 3,
                        "highZone": 12,
                        "cost": 470,
                        "chargeProfileName": "Standard peak/off peak",
                        "isHopperFare": false,
                        "chargeLevel": "Off Peak",
                        "peak": 710,
                        "offPeak": 470,
                        "taps": [
                            {
                                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap, Tfl.Api.Presentation.Entities",
                                "atcoCode": "910GSTFD",
                                "tapDetails": {
                                    "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails, Tfl.Api.Presentation.Entities",
                                    "modeType": "Rail",
                                    "validationType": "None",
                                    "hostDeviceType": "Gate",
                                    "nationalLocationCode": 719,
                                    "tapTimestamp": "2019-08-13T10:45:00"
                                }
                            },
                            {
                                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap, Tfl.Api.Presentation.Entities",
                                "atcoCode": "910GSHENFLD",
                                "tapDetails": {
                                    "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails, Tfl.Api.Presentation.Entities",
                                    "modeType": "Rail",
                                    "validationType": "None",
                                    "hostDeviceType": "Gate",
                                    "nationalLocationCode": 6888,
                                    "tapTimestamp": "2019-08-13T11:00:00"
                                }
                            }
                        ]
                    }
                ],
                "caveats": [
                    {
                        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.FareCaveat, Tfl.Api.Presentation.Entities",
                        "text": "<p>Fares between two stations may vary depending on the direction of travel, time of day and day of the week.</p><p>We charge higher fares at the busiest times of the day (usually between 06:30 and 09:30, and between 16:00 and 19:00, Monday to Friday).</p><p>When you pay as you go, you must touch your contactless or Oyster card on a yellow reader at the start and end of your journey.</p><p>Some journeys are charged via Zone 1 regardless of the route taken.</p><p>If your journey avoids Zone 1 and you see a pink card reader when changing trains, touch your contactless or Oyster card on it to pay the right fare.</p>",
                        "type": "allRailModes"
                    },
                    {
                        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.FareCaveat, Tfl.Api.Presentation.Entities",
                        "text": "The price shown is a single adult pay as you go fare.",
                        "type": "generic"
                    }
                ]
            }
        },
        {
            "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Journey, Tfl.Api.Presentation.Entities",
            "startDateTime": "2019-08-13T10:53:00",
            "duration": 15,
            "arrivalDateTime": "2019-08-13T11:08:00",
            "legs": [
                {
                    "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
                    "duration": 15,
                    "instruction": {
                        "$type": "Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
                        "summary": "Greater Anglia to Shenfield",
                        "detailed": "Greater Anglia towards Braintree",
                        "steps": []
                    },
                    "obstacles": [],
                    "departureTime": "2019-08-13T10:53:00",
                    "arrivalTime": "2019-08-13T11:08:00",
                    "departurePoint": {
                        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                        "naptanId": "910GSTFD",
                        "platformName": "",
                        "icsCode": "1000226",
                        "commonName": "Stratford (London) Rail Station",
                        "placeType": "StopPoint",
                        "additionalProperties": [],
                        "lat": 51.542234259219995,
                        "lon": -0.0028193822
                    },
                    "arrivalPoint": {
                        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                        "naptanId": "910GSHENFLD",
                        "platformName": "",
                        "icsCode": "1006448",
                        "commonName": "Shenfield Rail Station",
                        "placeType": "StopPoint",
                        "additionalProperties": [],
                        "lat": 51.63085739978,
                        "lon": 0.3298647368
                    },
                    "path": {
                        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
                        "lineString": "[[51.54223401388, -0.00280497148],[51.54374277046, -0.00057561504],[51.54438831815, 0.0005920343],[51.54483739345, 0.00167898246],[51.54531526615, 0.00318546791],[51.54567925778, 0.00451390885],[51.5458896191, 0.00535966748],[51.54623744991, 0.00710569166],[51.54731079407, 0.01269139872],[51.54919303148, 0.02298645741],[51.55013331673, 0.02842275545],[51.55040816609, 0.0302091478],[51.55061160147, 0.03196353141],[51.55094400649, 0.0356132658],[51.55096596142, 0.03590273198],[51.55123587836, 0.03900160347],[51.551704103, 0.04258540473],[51.5520743118, 0.04456374428],[51.55216536608, 0.04501499301],[51.55329314957, 0.0499556737],[51.55370673737, 0.05150334079],[51.55407244414, 0.0527026726],[51.5551675773, 0.05589677677],[51.55539932469, 0.05652753467],[51.55607303397, 0.0586208387],[51.55632818071, 0.05945464502],[51.55651649941, 0.05999691841],[51.55708701248, 0.06130663874],[51.55733442101, 0.06206799723],[51.55765635737, 0.06319339851],[51.55785831853, 0.06398157245],[51.55820287897, 0.06535327865],[51.55857422221, 0.06724558415],[51.55924714155, 0.07039233188],[51.56048611802, 0.07610414667],[51.56088551864, 0.0779257796],[51.56092712655, 0.07811523449],[51.56223273989, 0.08410465575],[51.56278916018, 0.08720329483],[51.56315064727, 0.0896293703],[51.56343352895, 0.09192202171],[51.56359547856, 0.09343001078],[51.56420064391, 0.10032583135],[51.56448609906, 0.10296501387],[51.56484208304, 0.10567963337],[51.56546954769, 0.11029706173],[51.56625313668, 0.11622050417],[51.5673402906, 0.12423616546],[51.56787358245, 0.12805607505],[51.56808661982, 0.12969660492],[51.56834261961, 0.13243584051],[51.56855605451, 0.13553386556],[51.56921062344, 0.14402069785],[51.56934654557, 0.14593189999],[51.56940444692, 0.1466994367],[51.56969017619, 0.14975772709],[51.57011901685, 0.15432360311],[51.57112687061, 0.16503572805],[51.57154635984, 0.16812948531],[51.57194236597, 0.17054391419],[51.57329165658, 0.17731892279],[51.5736319298, 0.17885052253],[51.57410159575, 0.18067697719],[51.57493826343, 0.18356017179],[51.57596914667, 0.18711669289],[51.57676288231, 0.18988260156],[51.57744810255, 0.19219596101],[51.57972438147, 0.19982550293],[51.58084894156, 0.20315636449],[51.58141348865, 0.20469927609],[51.5838832784, 0.210607317],[51.58807846159, 0.22132071964],[51.59943094509, 0.24993184052],[51.60001393652, 0.25141913258],[51.60133326405, 0.25483465115],[51.60238646712, 0.25758731634],[51.60540666577, 0.2655936318],[51.60567180576, 0.26630005611],[51.60706708147, 0.2699513148],[51.60990922803, 0.27735820215],[51.61166549578, 0.28185156413],[51.61228456892, 0.28377481788],[51.61279775778, 0.28605391602],[51.61316799998, 0.28828254208],[51.61337456777, 0.28967961902],[51.61359204371, 0.29143837638],[51.61374438714, 0.29284719309],[51.61380062097, 0.29503119106],[51.61374872295, 0.29722417924],[51.61363785377, 0.29921195572],[51.61334944495, 0.30337188659],[51.61321029826, 0.30587820624],[51.61317768117, 0.30753768453],[51.61322163728, 0.30941771764],[51.61331002404, 0.31086667221],[51.61355555482, 0.31255473692],[51.61397618691, 0.3144828471],[51.61454109944, 0.31638945096],[51.61504180489, 0.31790280905],[51.61561835428, 0.31921783253],[51.61637114236, 0.3207152294],[51.61753088711, 0.32255126787],[51.61844350084, 0.32369579347],[51.61914065304, 0.3243670618],[51.61983167616, 0.32489356999],[51.62064120263, 0.32533947192],[51.62440721976, 0.32680350341],[51.6280039521, 0.32818687203],[51.62971252432, 0.32909801615],[51.6303527712, 0.32946317095],[51.6307162374, 0.32972744985]]",
                        "stopPoints": [
                            {
                                "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                                "id": "910GSHENFLD",
                                "name": "Shenfield Rail Station",
                                "uri": "/StopPoint/910GSHENFLD",
                                "type": "StopPoint",
                                "routeType": "Unknown",
                                "status": "Unknown"
                            }
                        ],
                        "elevation": []
                    },
                    "routeOptions": [
                        {
                            "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
                            "name": "Greater Anglia",
                            "directions": [
                                "Braintree Rail Station"
                            ],
                            "lineIdentifier": {
                                "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                                "id": "greater-anglia",
                                "name": "Greater Anglia",
                                "uri": "/Line/greater-anglia",
                                "type": "Line",
                                "crowding": {
                                    "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
                                },
                                "routeType": "Unknown",
                                "status": "Unknown"
                            }
                        }
                    ],
                    "mode": {
                        "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
                        "id": "national-rail",
                        "name": "national-rail",
                        "type": "Mode",
                        "routeType": "Unknown",
                        "status": "Unknown"
                    },
                    "disruptions": [],
                    "plannedWorks": [],
                    "isDisrupted": false,
                    "hasFixedLocations": true
                }
            ],
            "fare": {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyFare, Tfl.Api.Presentation.Entities",
                "totalCost": 470,
                "fares": [
                    {
                        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Fare, Tfl.Api.Presentation.Entities",
                        "lowZone": 3,
                        "highZone": 12,
                        "cost": 470,
                        "chargeProfileName": "Standard peak/off peak",
                        "isHopperFare": false,
                        "chargeLevel": "Off Peak",
                        "peak": 710,
                        "offPeak": 470,
                        "taps": [
                            {
                                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap, Tfl.Api.Presentation.Entities",
                                "atcoCode": "910GSTFD",
                                "tapDetails": {
                                    "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails, Tfl.Api.Presentation.Entities",
                                    "modeType": "Rail",
                                    "validationType": "None",
                                    "hostDeviceType": "Gate",
                                    "nationalLocationCode": 719,
                                    "tapTimestamp": "2019-08-13T10:53:00"
                                }
                            },
                            {
                                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.FareTap, Tfl.Api.Presentation.Entities",
                                "atcoCode": "910GSHENFLD",
                                "tapDetails": {
                                    "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.FareTapDetails, Tfl.Api.Presentation.Entities",
                                    "modeType": "Rail",
                                    "validationType": "None",
                                    "hostDeviceType": "Gate",
                                    "nationalLocationCode": 6888,
                                    "tapTimestamp": "2019-08-13T11:08:00"
                                }
                            }
                        ]
                    }
                ],
                "caveats": [
                    {
                        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.FareCaveat, Tfl.Api.Presentation.Entities",
                        "text": "<p>Fares between two stations may vary depending on the direction of travel, time of day and day of the week.</p><p>We charge higher fares at the busiest times of the day (usually between 06:30 and 09:30, and between 16:00 and 19:00, Monday to Friday).</p><p>When you pay as you go, you must touch your contactless or Oyster card on a yellow reader at the start and end of your journey.</p><p>Some journeys are charged via Zone 1 regardless of the route taken.</p><p>If your journey avoids Zone 1 and you see a pink card reader when changing trains, touch your contactless or Oyster card on it to pay the right fare.</p>",
                        "type": "allRailModes"
                    },
                    {
                        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.FareCaveat, Tfl.Api.Presentation.Entities",
                        "text": "The price shown is a single adult pay as you go fare.",
                        "type": "generic"
                    }
                ]
            }
        }
    ],
    "lines": [],
    "stopMessages": [],
    "recommendedMaxAgeMinutes": 2,
    "searchCriteria": {
        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.SearchCriteria, Tfl.Api.Presentation.Entities",
        "dateTime": "2019-08-13T10:42:00",
        "dateTimeType": "Departing",
        "timeAdjustments": {
            "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustments, Tfl.Api.Presentation.Entities",
            "earliest": {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment, Tfl.Api.Presentation.Entities",
                "date": "20190813",
                "time": "0300",
                "timeIs": "departing",
                "uri": "/journey/journeyresults/1000226/to/1006448?time=0300&date=20190813&timeIs=departing"
            },
            "earlier": {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment, Tfl.Api.Presentation.Entities",
                "date": "20190813",
                "time": "1041",
                "timeIs": "departing",
                "uri": "/journey/journeyresults/1000226/to/1006448?time=1041&date=20190813&timeIs=departing"
            },
            "later": {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment, Tfl.Api.Presentation.Entities",
                "date": "20190813",
                "time": "1053",
                "timeIs": "departing",
                "uri": "/journey/journeyresults/1000226/to/1006448?time=1053&date=20190813&timeIs=departing"
            },
            "latest": {
                "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.TimeAdjustment, Tfl.Api.Presentation.Entities",
                "date": "20190814",
                "time": "0300",
                "timeIs": "departing",
                "uri": "/journey/journeyresults/1000226/to/1006448?time=0300&date=20190814&timeIs=departing"
            }
        }
    },
    "journeyVector": {
        "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.JourneyVector, Tfl.Api.Presentation.Entities",
        "from": "1000226",
        "to": "1006448",
        "via": "",
        "uri": "/journey/journeyresults/1000226/to/1006448"
    }
}
`;
export function getMockData() {
    if (process.env.NODE_ENV == 'development') {
        return JSON.parse(data);
        }
    else {
        // No need to load mock data in prod
        return null;
    }
}