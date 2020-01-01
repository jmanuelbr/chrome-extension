export function getMockData() {
    const data = `
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:nyt="http://www.nytimes.com/namespaces/rss/2.0">
    <channel>
        <title>NYT > World News</title>
        <link>https://www.nytimes.com/section/world?emc=rss&amp;partner=rss</link>
        <atom:link href="https://rss.nytimes.com/services/xml/rss/nyt/World.xml" rel="self" type="application/rss+xml" />
        <description />
        <language>en-us</language>
        <copyright>Copyright 2020 The New York Times Company</copyright>
        <lastBuildDate>Wed, 01 Jan 2020 15:08:03 +0000</lastBuildDate>
        <pubDate>Wed, 01 Jan 2020 15:08:03 +0000</pubDate>
        <image>
            <title>NYT > World News</title>
            <url>https://static01.nyt.com/images/misc/NYT_logo_rss_250x40.png</url>
            <link>https://www.nytimes.com/section/world?emc=rss&amp;partner=rss</link>
        </image>
        <item>
            <title>Protesters Attack U.S. Embassy in Iraq, Chanting ‘Death to America’</title>
            <link>https://www.nytimes.com/2019/12/31/world/middleeast/baghdad-protesters-us-embassy.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/31/world/middleeast/baghdad-protesters-us-embassy.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/31/world/middleeast/baghdad-protesters-us-embassy.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>President Trump blamed Iran after demonstrators breached the compound’s outer wall. Tensions are high after American airstrikes killed members of an Iran-backed militia.</description>
            <dc:creator>Falih Hassan, Ben Hubbard and Alissa J. Rubin</dc:creator>
            <pubDate>Wed, 01 Jan 2020 03:39:18 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Diplomatic Service, Embassies and Consulates</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Baghdad (Iraq)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Iraq</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Iran</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Demonstrations, Protests and Riots</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/31/world/31iraq-sub5/31iraq-sub5-moth-v6.jpg" width="151" />
            <media:credit>Wissm Al-Okili/Reuters</media:credit>
            <media:description>A protester holding an emblem from the embassy late in the evening.</media:description>
        </item>
        <item>
            <title>North Korea Is No Longer Bound by Nuclear Test Moratorium, Kim Says</title>
            <link>https://www.nytimes.com/2019/12/31/world/asia/north-korea-kim-speech.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/31/world/asia/north-korea-kim-speech.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/31/world/asia/north-korea-kim-speech.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Kim Jong-un said North Korea was free of a self-imposed pause on testing nuclear weapons and long-range missiles, which President Trump had called a diplomatic victory.</description>
            <dc:creator>Choe Sang-Hun</dc:creator>
            <pubDate>Wed, 01 Jan 2020 02:27:49 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">North Korea</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Kim Jong-un</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States International Relations</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Nuclear Tests</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Embargoes and Sanctions</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Nuclear Weapons</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Arms Control and Limitation and Disarmament</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Missiles and Missile Defense Systems</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/23/world/00nkorea-test-hfo/00nkorea-icbm-hfo-moth.jpg" width="151" />
            <media:credit>Doug Mills/The New York Times</media:credit>
            <media:description>North Korea’s leader, Kim Jong-un, declared a halt to all nuclear and ICBM tests in April 2018.</media:description>
        </item>
        <item>
            <title>Why the Fires in Australia Are So Bad</title>
            <link>https://www.nytimes.com/2020/01/01/world/australia/fires.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/01/01/world/australia/fires.html</guid>
            <atom:link href="https://www.nytimes.com/2020/01/01/world/australia/fires.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Bush fire season is nothing new to Australians, but this summer has been calamitous — and it’s far from over.</description>
            <dc:creator>Andy Parsons, Russell Goldman and Matthew Abbott</dc:creator>
            <pubDate>Wed, 01 Jan 2020 10:21:50 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Australia</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Fires and Firefighters</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Wildfires</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Global Warming</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/01/01/world/01oz-fire-explainer-promo/00oz-fire-explainer-1-moth.jpg" width="151" />
            <media:credit>Matthew Abbott for The New York Times</media:credit>
            <media:description>A man on Tuesday tried to defend a property from a neighboring house already engulfed in flames in Lake Conjola, Australia.</media:description>
        </item>
        <item>
            <title>It’s 50 Below. The Past Is a Horror Show. You’d Dream of Escaping Too.</title>
            <link>https://www.nytimes.com/2019/12/31/world/europe/russia-magadan-siberia.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/31/world/europe/russia-magadan-siberia.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/31/world/europe/russia-magadan-siberia.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Best known as the most feared and frigid outpost of the Soviet gulag, Magadan struggles to keep its residents from fleeing. The ice cream isn’t enough to keep them.</description>
            <dc:creator>Andrew Higgins</dc:creator>
            <pubDate>Tue, 31 Dec 2019 07:19:23 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Russia</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Magadan</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Population</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Gold</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Mines and Mining</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/18/world/xxmagadan/xxmagadan-moth.jpg" width="151" />
            <media:credit>Emile Ducke for The New York Times</media:credit>
            <media:description>An overview of Magadan and the Nagaev Bay, Russia.</media:description>
        </item>
        <item>
            <title>Japan Loves Robots, but Getting Them to Do Human Work Isn’t Easy</title>
            <link>https://www.nytimes.com/2019/12/31/world/asia/japan-robots-automation.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/31/world/asia/japan-robots-automation.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/31/world/asia/japan-robots-automation.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>With a declining population and workers in short supply, Japan has fully embraced robots. But getting them to work to “the standard of humans” is often a challenge.</description>
            <dc:creator>Motoko Rich</dc:creator>
            <pubDate>Wed, 01 Jan 2020 03:59:55 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Robots and Robotics</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Labor and Jobs</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Japan</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Hokkaido (Japan)</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/28/business/00JAPAN-ROBOTS-01/00JAPAN-ROBOTS-01-moth-v2.jpg" width="151" />
            <media:credit>Noriko Hayashi for The New York Times</media:credit>
            <media:description>Scooping eyes from potatoes at the Yamazaki factory in Asahikawa, Japan.</media:description>
        </item>
        <item>
            <title>Inside China’s Push to Turn Muslim Minorities Into an Army of Workers</title>
            <link>https://www.nytimes.com/2019/12/30/world/asia/china-xinjiang-muslims-labor.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/30/world/asia/china-xinjiang-muslims-labor.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/30/world/asia/china-xinjiang-muslims-labor.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>The Communist Party wants to remold Xinjiang’s minorities into loyal blue-collar workers to supply Chinese factories with cheap labor.</description>
            <dc:creator>Chris Buckley and Austin Ramzy</dc:creator>
            <pubDate>Tue, 31 Dec 2019 02:15:47 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">China</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Uighurs (Chinese Ethnic Group)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Kazakhs (Ethnic Group)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Forced Labor</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Xinjiang (China)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Communist Party of China</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Qapqal County (China)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">International Trade and World Market</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Human Rights and Human Rights Violations</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Factories and Manufacturing</category>
        </item>
        <item>
            <title>Merkel’s New Year’s Speech Calls for Action on Climate and Tolerance</title>
            <link>https://www.nytimes.com/2019/12/31/world/europe/merkel-new-year-climate.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/31/world/europe/merkel-new-year-climate.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/31/world/europe/merkel-new-year-climate.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>The German chancellor, in her 15th such address, expressed optimism about the coming decade despite large challenges ahead.</description>
            <dc:creator>Christopher F. Schuetze</dc:creator>
            <pubDate>Tue, 31 Dec 2019 18:02:47 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Merkel, Angela</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Global Warming</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Anti-Semitism</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">New Year</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Germany</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/31/world/31germany-merkel/31germany-merkel-moth.jpg" width="151" />
            <media:credit>Pool photo by Christian Marquardt</media:credit>
            <media:description>Chancellor Angela Merkel of Germany said on Tuesday that future generations would “live with the consequences of what we do or fail to do today.”</media:description>
        </item>
        <item>
            <title>Carlos Ghosn, Fugitive but a Favorite Son, Returns to Beirut</title>
            <link>https://www.nytimes.com/2019/12/31/business/carlos-ghosn-lebanon.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/31/business/carlos-ghosn-lebanon.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/31/business/carlos-ghosn-lebanon.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>For many residents, he represents the Lebanese dream, of leaving the country and becoming a success.</description>
            <dc:creator>Vivian Yee and Hwaida Saad</dc:creator>
            <pubDate>Tue, 31 Dec 2019 15:28:45 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Fugitives</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Nissan Motor Co</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Ghosn, Carlos</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Beirut (Lebanon)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Lebanon</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Japan</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/01/01/world/31lebanon-ghosn1/31lebanon-ghosn1-moth.jpg" width="151" />
            <media:credit>Hassan Ammar/Associated Press</media:credit>
            <media:description>A billboard campaign in Beirut in late 2018 expressed support for the former auto executive Carlos Ghosn, who was then being held in Japan.</media:description>
        </item>
        <item>
            <title>Macron Stands by Contested Pension Plan, Despite Pressure From Marathon Strike</title>
            <link>https://www.nytimes.com/2019/12/31/world/europe/macron-speech-strike.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/31/world/europe/macron-speech-strike.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/31/world/europe/macron-speech-strike.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>In his annual New Year's Eve speech, President Emmanuel Macron of France hinted there could be changes to his plan, though he insisted “fear shouldn’t mean inaction.”</description>
            <dc:creator>Adam Nossiter</dc:creator>
            <pubDate>Tue, 31 Dec 2019 22:14:05 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Strikes</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Organized Labor</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">New Year</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Macron, Emmanuel (1977- )</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">France</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/31/world/31france-macron/31france-macron-moth.jpg" width="151" />
            <media:credit>Martin Bureau/France 2, via Agence France-Presse — Getty Images</media:credit>
            <media:description>President Emmanuel Macron of France during his New Year’s Eve speech on Tuesday.</media:description>
        </item>
        <item>
            <title>French Chef Loses Legal Battle Over a Lost Michelin Star</title>
            <link>https://www.nytimes.com/2019/12/31/world/europe/marc-veyrat-maison-des-bois-michelin-guide.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/31/world/europe/marc-veyrat-maison-des-bois-michelin-guide.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/31/world/europe/marc-veyrat-maison-des-bois-michelin-guide.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Marc Veyrat was outraged when La Maison des Bois, his restaurant in the French Alps, was stripped of the guide’s top rating.</description>
            <dc:creator>Aurelien Breeden and Elian Peltier</dc:creator>
            <pubDate>Tue, 31 Dec 2019 17:25:25 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Chefs</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Michelin Guide</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Restaurants</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">La Maison des Bois (Manigod, France, Restaurant)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Veyrat, Marc</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">France</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/31/world/31france-chef/31france-chef-moth.jpg" width="151" />
            <media:credit>Jacques Demarthon/Agence France-Presse — Getty Images</media:credit>
            <media:description>Marc Veyrat in 2018, when his restaurant was awarded three stars in that year’s Michelin Guide. The 2019 edition downgraded it to two.</media:description>
        </item>
        <item>
            <title>‘A Slow-Motion Chernobyl’: How Lax Laws Turned a River Into a Disaster</title>
            <link>https://www.nytimes.com/2019/12/30/world/americas/mexico-environment-trade.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/30/world/americas/mexico-environment-trade.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/30/world/americas/mexico-environment-trade.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>A look at 15 years of attempts to clean up Mexico’s most polluted waterway revealed that the country has neither the means nor the laws to preserve its environment.</description>
            <dc:creator>Steve Fisher and Elisabeth Malkin</dc:creator>
            <pubDate>Tue, 31 Dec 2019 15:14:25 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Water Pollution</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Rivers</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Regulation and Deregulation of Industry</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Environment</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Guadalajara (Mexico)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Mexico</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Santiago River (Mexico)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Celanese Corporation</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Jalisco (Mexico)</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/05/world/xxmexico-river/xxmexico-river-moth.jpg" width="151" />
            <media:credit>Meghan Dhaliwal for The New York Times</media:credit>
            <media:description>The heavily polluted Santiago River cascades into a waterfall and releases a powerful stench as it cuts through the town of El Salto, in Jalisco, Mexico.</media:description>
        </item>
        <item>
            <title>A Couple Unwittingly Threw Away $20,000. The Dump Gave It Back.</title>
            <link>https://www.nytimes.com/2019/12/31/world/europe/cash-found-garbage-dump.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/31/world/europe/cash-found-garbage-dump.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/31/world/europe/cash-found-garbage-dump.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>The money, hidden in a box of possessions from a deceased relative, was returned thanks to a hawk-eyed (and honest) worker.</description>
            <dc:creator>Anna Schaverien</dc:creator>
            <pubDate>Tue, 31 Dec 2019 11:14:33 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Great Britain</category>
        </item>
        <item>
            <title>Throw a Dish. Don’t Eat Lobster. What Are Your New Year’s Superstitions?</title>
            <link>https://www.nytimes.com/2019/12/31/style/new-years-superstition.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/31/style/new-years-superstition.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/31/style/new-years-superstition.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Across the world, there are many ways to ensure good luck: a kiss at midnight. A bowl of black-eyed peas, rice and pork. And, of course, swinging a flaming ball of fire to ward off evil.</description>
            <dc:creator>Laura M. Holson</dc:creator>
            <pubDate>Tue, 31 Dec 2019 21:05:44 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">New Year</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Cooking and Cookbooks</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Superstitions</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/31/multimedia/31xp-superstitions4/31xp-superstitions4-moth.jpg" width="151" />
            <media:credit>Adam Hunger/Associated Press</media:credit>
            <media:description>A person who kisses their beloved at the stroke of midnight will have 12 months of continued affection, according to one superstition.</media:description>
        </item>
        <item>
            <title>In 2019, We Were There: 12 Favorite Dispatches From the Earth’s 4 Corners</title>
            <link>https://www.nytimes.com/2019/12/30/world/nyt-best-dispatches.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/30/world/nyt-best-dispatches.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/30/world/nyt-best-dispatches.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>This year, we delivered 125 dispatches from 44 countries and six continents, each one offering an immersive experience of one of the world’s most noteworthy places. Here are the highlights.</description>
            <dc:creator>Bryant Rousseau</dc:creator>
            <pubDate>Tue, 31 Dec 2019 04:56:57 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Education (K-12)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Animal Behavior</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Pasta</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Birds</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Women and Girls</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Rural Areas</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Yellow Vests Movement</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Sri Lanka Easter Bombings (April, 2019)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Surveillance of Citizens by Government</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/07/world/07bari-dispatch3/merlin_165512487_6b450054-7f8a-4c01-9b89-1e708bfd757b-moth.jpg" width="151" />
            <media:credit>Gianni Cipriano for The New York Times</media:credit>
            <media:description>Angela Lastella placing her home-made orecchiette outside her home in Bari, Italy.</media:description>
        </item>
        <item>
            <title>Netanyahu Faces Deadline to Seek Immunity in Graft Cases</title>
            <link>https://www.nytimes.com/2020/01/01/world/middleeast/israel-netanyahu-immunity.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/01/01/world/middleeast/israel-netanyahu-immunity.html</guid>
            <atom:link href="https://www.nytimes.com/2020/01/01/world/middleeast/israel-netanyahu-immunity.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Such a request would be a rare and unpopular move heading into a general election, but it could keep the Israeli leader out of court.</description>
            <dc:creator>Isabel Kershner</dc:creator>
            <pubDate>Wed, 01 Jan 2020 14:08:31 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Israel</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Netanyahu, Benjamin</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Corruption (Institutional)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Immunity from Prosecution</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Mandelblit, Avichai</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Lieberman, Avigdor</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Elections</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/01/01/world/01israel-immunity1/01israel-immunity1-moth.jpg" width="151" />
            <media:credit>Menahem Kahana/Agence France-Presse — Getty Images</media:credit>
            <media:description>Supporters of Prime Minister Benjamin Netanyahu of Israel in Jerusalem on Tuesday.</media:description>
        </item>
        <item>
            <title>Mexico Prison Fight Leaves at Least 16 Inmates Dead</title>
            <link>https://www.nytimes.com/2020/01/01/world/americas/mexico-prison-fight.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/01/01/world/americas/mexico-prison-fight.html</guid>
            <atom:link href="https://www.nytimes.com/2020/01/01/world/americas/mexico-prison-fight.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Officials said several guns were found in the penitentiary.</description>
            <dc:creator>Elian Peltier</dc:creator>
            <pubDate>Wed, 01 Jan 2020 13:50:02 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Mexico</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Prisons and Prisoners</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Deaths (Fatalities)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Drug Cartels</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Demonstrations, Protests and Riots</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Cieneguillas penitentiary</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/01/01/world/01mexico-prison/merlin_166544802_694c7bb0-61bc-4005-aa1d-f02c03e804cd-moth.jpg" width="151" />
            <media:credit>El Universal, via Associated Press</media:credit>
            <media:description>The men’s penitentiary of Cieneguillas, in the state of Zacatecas, Mexico.</media:description>
        </item>
        <item>
            <title>What Kim Jong-un’s Latest Threats Say About His Trump Strategy</title>
            <link>https://www.nytimes.com/2020/01/01/world/asia/north-korea-kim-trump.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/01/01/world/asia/north-korea-kim-trump.html</guid>
            <atom:link href="https://www.nytimes.com/2020/01/01/world/asia/north-korea-kim-trump.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>With an election and impeachment trial pending in the United States, North Korea’s leader added elements of caution in his threat of “shocking” action.</description>
            <dc:creator>Choe Sang-Hun</dc:creator>
            <pubDate>Wed, 01 Jan 2020 15:03:36 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States International Relations</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">United Nations</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Nuclear Tests</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Embargoes and Sanctions</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Nuclear Weapons</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Kim Jong-un</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">North Korea</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/01/01/world/01northkorea1/01northkorea1-moth.jpg" width="151" />
            <media:credit>KCNA, via Associated Press</media:credit>
            <media:description>Kim Jong-un at a Workers’ Party meeting in Pyongyang, North Korea, this week.</media:description>
        </item>
        <item>
            <title>Pika-Who? How Pokémon Go Confused the Canadian Military</title>
            <link>https://www.nytimes.com/2020/01/01/world/canada/pokemon-go-canada-military.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/01/01/world/canada/pokemon-go-canada-military.html</guid>
            <atom:link href="https://www.nytimes.com/2020/01/01/world/canada/pokemon-go-canada-military.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>“We should almost hire a 12-year-old to help us out with this,” an official wrote.</description>
            <dc:creator>Mariel Padilla</dc:creator>
            <pubDate>Wed, 01 Jan 2020 13:12:46 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Defense and Military Forces</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Military Bases and Installations</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Pokemon (Fictional Characters)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Mobile Applications</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Canadian Armed Forces</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Canadian Broadcasting Corp</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Niantic Inc</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Canada</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Kingston (Ontario)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">North Bay (Ontario)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Nova Scotia (Canada)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Ontario (Canada)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">Pokemon Go (Video Game)</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/01/21/multimedia/31xp-pokemongo/21xp-pokemongo-moth.jpg" width="151" />
            <media:credit>Marc Bruxelle, via Alamy</media:credit>
            <media:description>A user playing Pokémon Go in Montreal in 2016. After the app was available in Canada, the Canadian Armed Forces issued a public warning, urging civilians to avoid military property when searching for Pokémon.</media:description>
        </item>
        <item>
            <title>Iraq Protests Swarm U.S. Embassy Again, Dispersing Amid Tear Gas</title>
            <link>https://www.nytimes.com/2020/01/01/world/middleeast/us-embassy-baghdad-iraq.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/01/01/world/middleeast/us-embassy-baghdad-iraq.html</guid>
            <atom:link href="https://www.nytimes.com/2020/01/01/world/middleeast/us-embassy-baghdad-iraq.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>The protesters, including members of Iranian-backed militias, largely withdrew after a few hours, but the situation remained volatile.</description>
            <dc:creator>Falih Hassan and Alissa J. Rubin</dc:creator>
            <pubDate>Wed, 01 Jan 2020 14:56:03 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Iraq</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Demonstrations, Protests and Riots</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Diplomatic Service, Embassies and Consulates</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States Defense and Military Forces</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Baghdad (Iraq)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Iran</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/01/01/world/01iraq8/merlin_166544739_79f57c85-d607-4ab5-b8c9-02fbf6b9353c-moth.jpg" width="151" />
            <media:credit>Ahmad Al-Rubaye/Agence France-Presse — Getty Images</media:credit>
            <media:description>Protesters gathered outside the United States Embassy in Baghdad for a second day on Wednesday.</media:description>
        </item>
        <item>
            <title>Why the U.S. Became the Focus of Iraqis’ Anger</title>
            <link>https://www.nytimes.com/2020/01/01/world/middleeast/iraq-embassy-iran.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/01/01/world/middleeast/iraq-embassy-iran.html</guid>
            <atom:link href="https://www.nytimes.com/2020/01/01/world/middleeast/iraq-embassy-iran.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Months of antigovernment protests had centered on Iran’s influence in the country. A rocket attack and a series of airstrikes changed that.</description>
            <dc:creator>Alan Yuhas</dc:creator>
            <pubDate>Wed, 01 Jan 2020 14:16:05 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States International Relations</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States Defense and Military Forces</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Defense and Military Forces</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Demonstrations, Protests and Riots</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Diplomatic Service, Embassies and Consulates</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Corruption (Institutional)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Kataib Hezbollah</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Iran</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Iraq</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/31/world/31iraq-explainer-sub/31iraq-explainer-sub-moth.jpg" width="151" />
            <media:credit>Wissm Al-Okili/Reuters</media:credit>
            <media:description>Protesters outside the American Embassy in Baghdad on Tuesday.</media:description>
        </item>
        <item>
            <title>Hong Kong Protesters Return to Streets as New Year Begins</title>
            <link>https://www.nytimes.com/2020/01/01/world/asia/hong-kong-protest.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/01/01/world/asia/hong-kong-protest.html</guid>
            <atom:link href="https://www.nytimes.com/2020/01/01/world/asia/hong-kong-protest.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Weeks of relative calm ended on Wednesday, as people marched in large numbers and the police deployed tear gas and pepper spray.</description>
            <dc:creator>Russell Goldman, Elaine Yu and Lam Yik Fei</dc:creator>
            <pubDate>Wed, 01 Jan 2020 14:56:18 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Demonstrations, Protests and Riots</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Hong Kong Protests (2019)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">New Year</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Lam, Carrie (1957- )</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Hong Kong</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">China</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/01/01/world/01hongkong-briefing-promo/01hongkong-briefing-top-moth.jpg" width="151" />
            <media:credit>Lam Yik Fei for The New York Times</media:credit>
        </item>
        <item>
            <title>New Year’s Eve 2020: Pictures From Around the World</title>
            <link>https://www.nytimes.com/2019/12/31/world/new-years-eve-2020.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/31/world/new-years-eve-2020.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/31/world/new-years-eve-2020.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Confetti is flying as the new year makes its way across the globe.</description>
            <dc:creator>Sarah Eckinger</dc:creator>
            <pubDate>Wed, 01 Jan 2020 06:38:55 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">New Year</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Holidays and Special Occasions</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/31/video/31vid-shanghai-still/31vid-shanghai-still-moth-v2.jpg" width="151" />
            <media:credit>Associated Press</media:credit>
        </item>
        <item>
            <title>Angola Freezes Assets of Ex-President’s Billionaire Daughter</title>
            <link>https://www.nytimes.com/2019/12/31/world/africa/isabel-dos-santos-frozen-assets.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/31/world/africa/isabel-dos-santos-frozen-assets.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/31/world/africa/isabel-dos-santos-frozen-assets.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Isabel dos Santos, called Africa’s richest woman, is one of three people accused of causing the state losses of more than $1 billion.</description>
            <dc:creator>Reuters</dc:creator>
            <pubDate>Tue, 31 Dec 2019 19:23:11 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Assets, Frozen</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Sonangol Group</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">dos Santos, Isabel</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Dos Santos, Jose Eduardo</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Lourenco, Joao</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Angola</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/31/world/31angola/31angola-moth-v2.jpg" width="151" />
            <media:credit>Mike Coppola/Getty Images for Unitel</media:credit>
            <media:description>Isabel dos Santos in New York last year.</media:description>
        </item>
        <item>
            <title>Carlos Ghosn’s Escape: A Lawyer in Beirut, a French Passport and a Lot of Mystery</title>
            <link>https://www.nytimes.com/2019/12/31/business/carlos-ghosn-escape-japan.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/31/business/carlos-ghosn-escape-japan.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/31/business/carlos-ghosn-escape-japan.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>The prominent former auto executive eluded authorities and the news media to flee while awaiting trial, setting off a flurry of speculation.</description>
            <dc:creator>Ben Dooley and Michael Corkery</dc:creator>
            <pubDate>Wed, 01 Jan 2020 10:36:24 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Ghosn, Carlos</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Japan</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Securities and Commodities Violations</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Extradition</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Nissan Motor Co</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Lebanon</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Courts and the Judiciary</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Renault SA</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/31/business/31GHOSN/31GHOSN-moth.jpg" width="151" />
            <media:credit>Kazuhiro Nogi/Agence France-Presse — Getty Images</media:credit>
            <media:description>Junichiro Hironaka, a lawyer for Carlos Ghosn in Tokyo, addressing reporters there on Tuesday.</media:description>
        </item>
        <item>
            <title>Iraq, Carlos Ghosn, New Year’s Eve: Your Tuesday Briefing</title>
            <link>https://www.nytimes.com/2019/12/31/briefing/iraq-carlos-ghosn-new-years-eve.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/31/briefing/iraq-carlos-ghosn-new-years-eve.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/31/briefing/iraq-carlos-ghosn-new-years-eve.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Here's what you need to know.</description>
            <dc:creator>Chris Stanford</dc:creator>
            <pubDate>Tue, 31 Dec 2019 11:00:07 +0000</pubDate>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/31/world/31usbriefing-amcore/31usbriefing-amcore-moth.jpg" width="151" />
        </item>
        <item>
            <title>Thousands Flee to Shore as Australia Fires Turn Skies Blood Red</title>
            <link>https://www.nytimes.com/2019/12/31/world/australia/fires-red-skies-Mallacoota.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/31/world/australia/fires-red-skies-Mallacoota.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/31/world/australia/fires-red-skies-Mallacoota.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>The country’s east coast was dotted with apocalyptic scenes on the last day of the warmest decade on record in Australia.</description>
            <dc:creator>Isabella Kwai</dc:creator>
            <pubDate>Wed, 01 Jan 2020 13:39:07 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Fires and Firefighters</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Australia</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Victoria (Australia)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">New South Wales (Australia)</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/01/31/world/31ozf-fires-kangaroo/31ozf-fires-kangaroo-moth.jpg" width="151" />
            <media:credit>Matthew Abbott for The New York Times</media:credit>
            <media:description>A kangaroo rushes past a burning house in Lake Conjola, New South Wales, Australia, on Tuesday.</media:description>
        </item>
        <item>
            <title>Your Tuesday Briefing</title>
            <link>https://www.nytimes.com/2019/12/31/briefing/ghosn-brexit-cyprus.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/31/briefing/ghosn-brexit-cyprus.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/31/briefing/ghosn-brexit-cyprus.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Carlos Ghosn, Brexit, Cyprus: Here’s what you need to know.</description>
            <dc:creator>Mike Ives</dc:creator>
            <pubDate>Tue, 31 Dec 2019 05:47:21 +0000</pubDate>
        </item>
        <item>
            <title>The Best Movies and TV Shows New to Netflix, Amazon and Stan in Australia in January</title>
            <link>https://www.nytimes.com/2019/12/30/arts/television/netflix-amazon-stan-movies-tv-australia-january.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/30/arts/television/netflix-amazon-stan-movies-tv-australia-january.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/30/arts/television/netflix-amazon-stan-movies-tv-australia-january.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Our picks for January, including “Bojak Horseman,” “Uncut Gems” and “True History of the Kelly Gang.”</description>
            <dc:creator>Noel Murray</dc:creator>
            <pubDate>Tue, 31 Dec 2019 03:56:31 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Television</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Movies</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Amazon.com Inc</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Netflix Inc</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Australia</category>
        </item>
        <item>
            <title>American Airstrikes Rally Iraqis Against U.S.</title>
            <link>https://www.nytimes.com/2019/12/30/world/middleeast/iraq-airstrikes-us-iran-militias.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/30/world/middleeast/iraq-airstrikes-us-iran-militias.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/30/world/middleeast/iraq-airstrikes-us-iran-militias.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Iraqi leaders say the United States violated Iraqi sovereignty with attacks that killed 24 people in retaliation for the death of an American contractor.</description>
            <dc:creator>Alissa J. Rubin and Ben Hubbard</dc:creator>
            <pubDate>Tue, 31 Dec 2019 13:03:08 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States International Relations</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States Defense and Military Forces</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Defense and Military Forces</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Military Bases and Installations</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Demonstrations, Protests and Riots</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Islamic Revolutionary Guards Corps</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Kataib Hezbollah</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Iran</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Iraq</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Syria</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/30/world/30iraq/30iraq-moth.jpg" width="151" />
            <media:credit>Associated Press</media:credit>
            <media:description>The headquarters of an Iranian-backed militia, Kataib Hezbollah, in Qaim, Iraq, on Monday after an American airstrike.</media:description>
        </item>
        <item>
            <title>Bolivia Expels 3 Diplomats in Tiff With Mexico and Spain Over Morales Aides</title>
            <link>https://www.nytimes.com/2019/12/30/world/americas/bolivia-mexico-spain-diplomats.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/30/world/americas/bolivia-mexico-spain-diplomats.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/30/world/americas/bolivia-mexico-spain-diplomats.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>The caretaker president accused the Mexican ambassador and two Spanish diplomats of breaking norms by aiding former officials linked to Evo Morales, the ousted president.</description>
            <dc:creator>Anatoly Kurmanaev and Raphael Minder</dc:creator>
            <pubDate>Tue, 31 Dec 2019 15:01:10 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Diplomatic Service, Embassies and Consulates</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Anez Chavez, Jeanine</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Morales, Evo</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Bolivia</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">International Relations</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Mexico</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Spain</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/30/world/30bolivia2/30bolivia2-moth.jpg" width="151" />
            <media:credit>Jorge Bernal/Agence France-Presse — Getty Images</media:credit>
            <media:description>Police officers in La Paz, Bolivia, on Monday near the Mexican Embassy. Diplomatic tensions erupted when allies of Evo Morales, the ousted president, took haven in the compound.</media:description>
        </item>
        <item>
            <title>Xinjiang, 7-Eleven, Hong Kong: Your Tuesday Briefing</title>
            <link>https://www.nytimes.com/2019/12/30/briefing/xinjiang-7-eleven-hong-kong-new-years.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/30/briefing/xinjiang-7-eleven-hong-kong-new-years.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/30/briefing/xinjiang-7-eleven-hong-kong-new-years.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Here’s what you need to know.</description>
            <dc:creator>Melina Delkic</dc:creator>
            <pubDate>Mon, 30 Dec 2019 23:17:53 +0000</pubDate>
        </item>
        <item>
            <title>Nicaragua Frees Political Prisoners After International Pressure</title>
            <link>https://www.nytimes.com/2019/12/30/world/americas/nicaragua-political-prisoners.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/30/world/americas/nicaragua-political-prisoners.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/30/world/americas/nicaragua-political-prisoners.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>The release of dozens of Nicaraguan detainees came amid bolstered United States sanctions and criticism of a crackdown on hunger strikers.</description>
            <dc:creator>Frances Robles</dc:creator>
            <pubDate>Tue, 31 Dec 2019 15:08:52 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Nicaragua</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Political Prisoners</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Demonstrations, Protests and Riots</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Hunger Strikes</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Ortega, Daniel</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Murillo, Rosario</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/30/world/30nicaragua2/30nicaragua2-moth.jpg" width="151" />
            <media:credit>Oscar Navarrete/Associated Press</media:credit>
            <media:description>Neyma Hernandez, left, and Ivania Alvarez celebrated on Monday in Managua, Nicaragua, after being released from prison. The women were “aguadores,” taking water to hunger strikers.</media:description>
        </item>
        <item>
            <title>Amid Balmy Winter, Moscow Trucked in Heaps of Fake Snow. A Blizzard Ensued.</title>
            <link>https://www.nytimes.com/2019/12/30/world/europe/moscow-snow-warm.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/30/world/europe/moscow-snow-warm.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/30/world/europe/moscow-snow-warm.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Lacking snow to complete the holiday atmosphere, Moscow bought fake snow from skating rinks. “It will all create a festive mood, I am sure,” one Muscovite said.</description>
            <dc:creator>Ivan Nechepurenko</dc:creator>
            <pubDate>Mon, 30 Dec 2019 19:28:06 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Snow and Snowstorms</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Holidays and Special Occasions</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">New Year</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Bears</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Moscow (Russia)</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/30/world/30moscow-snow1/30moscow-snow1-moth.jpg" width="151" />
            <media:credit>Pavel Golovkin/Associated Press</media:credit>
            <media:description>A Christmas market on Monday in Red Square in Moscow. </media:description>
        </item>
        <item>
            <title>Fireworks, Long a German New Year’s Eve Tradition, Are Losing Their Luster</title>
            <link>https://www.nytimes.com/2019/12/30/world/europe/germany-fireworks-ban.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/30/world/europe/germany-fireworks-ban.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/30/world/europe/germany-fireworks-ban.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Faced with the concerns about safety, pollution and potential damage to historic buildings, Germany is rethinking private fireworks.</description>
            <dc:creator>Christopher F. Schuetze</dc:creator>
            <pubDate>Tue, 31 Dec 2019 10:58:00 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">New Year</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Fireworks</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Berlin (Germany)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Germany</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Aachen (Germany)</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/30/world/30germany3/30germany3-moth.jpg" width="151" />
            <media:credit>Adam Berry/Getty Images</media:credit>
            <media:description>Official fireworks will still take place in Berlin on New Year’s Eve, but private displays have been banned in some areas.</media:description>
        </item>
        <item>
            <title>Sudan Sentences 29 Intelligence Officers to Death for Teacher’s Killing</title>
            <link>https://www.nytimes.com/2019/12/30/world/africa/sudan-death-sentence-intelligence.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/30/world/africa/sudan-death-sentence-intelligence.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/30/world/africa/sudan-death-sentence-intelligence.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>The ruling came just weeks after Omar al-Bashir, the ousted president, was convicted of money laundering and corruption.</description>
            <dc:creator>Abdi Latif Dahir</dc:creator>
            <pubDate>Mon, 30 Dec 2019 19:28:22 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Sudan</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Demonstrations, Protests and Riots</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Bashir, Omar Hassan Al-</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Decisions and Verdicts</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Political Prisoners</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Torture</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Murders, Attempted Murders and Homicides</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Espionage and Intelligence Services</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Human Rights and Human Rights Violations</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Kheir, Ahmed al- (d 2019)</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/30/world/30sudan/30sudan-moth-v2.jpg" width="151" />
            <media:credit>Ashraf Shazly/Agence France-Presse — Getty Images</media:credit>
            <media:description>Protesters with a picture of the teacher Ahmed al-Kheir outside a court in Omdurman, Sudan, on Monday.</media:description>
        </item>
        <item>
            <title>Hanukkah Attack, John Lewis, N.F.L. Playoffs: Your Monday Briefing</title>
            <link>https://www.nytimes.com/2019/12/30/briefing/hanukkah-attack-john-lewis-nfl-playoffs.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/30/briefing/hanukkah-attack-john-lewis-nfl-playoffs.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/30/briefing/hanukkah-attack-john-lewis-nfl-playoffs.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Here's what you need to know.</description>
            <dc:creator>Chris Stanford</dc:creator>
            <pubDate>Mon, 30 Dec 2019 11:04:15 +0000</pubDate>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/30/world/30usbriefing-amcore/30usbriefing-amcore-moth.jpg" width="151" />
        </item>
        <item>
            <title>Woman Who Accused 12 Men of Rape Is Guilty of ‘Public Mischief’ in Cyprus</title>
            <link>https://www.nytimes.com/2019/12/30/world/europe/cyprus-rape-british-woman.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/30/world/europe/cyprus-rape-british-woman.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/30/world/europe/cyprus-rape-british-woman.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>The British woman said that a dozen Israeli men had raped her in a resort town, and then retracted her statement. She could face up to a year in prison.</description>
            <dc:creator>Lizzy Ioannidou and Iliana Magra</dc:creator>
            <pubDate>Mon, 30 Dec 2019 16:00:46 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Sex Crimes</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Cyprus</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Great Britain</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Israel</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/30/world/30cyprus1/30cyprus1-moth.jpg" width="151" />
            <media:credit>Iakovos Hatzistavrou/Agence France-Presse — Getty Images</media:credit>
            <media:description>The British woman who was charged with public mischief, center, arriving at court in Paralimni, Cyprus, on Monday.</media:description>
        </item>
        <item>
            <title>In Indonesia, Outlaw Gold Miners Poison Themselves to Survive</title>
            <link>https://www.nytimes.com/2019/12/30/world/asia/indonesia-gold-environment-mercury.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/30/world/asia/indonesia-gold-environment-mercury.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/30/world/asia/indonesia-gold-environment-mercury.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>One large mining company is trying to shut illegal operations, which use mercury. The small-scale miners say there’s no other way to earn a living.</description>
            <dc:creator>Richard C. Paddock and Adam Dean</dc:creator>
            <pubDate>Mon, 30 Dec 2019 20:24:09 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Mines and Mining</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Gold</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Mercury (Metal)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Hazardous and Toxic Substances</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Environment</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Indonesia</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Sumbawa (Indonesia)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">PT Amman Mineral Nusa Tenggara</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Newmont Mining Corp</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Birth Defects</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Water Pollution</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/27/world/00indonesia-sumbawa-1-promo/00indonesia-sumbawa-1-promo-moth-v3.jpg" width="151" />
            <media:credit>Adam Dean for The New York Times</media:credit>
            <media:description>Wildcat miners digging for gold near Taliwang, Indonesia. The illegal miners use mercury, a toxic chemical, to process the ore.</media:description>
        </item>
        <item>
            <title>A 7-Eleven in Japan Might Close for a Day. Yes, That’s a Big Deal.</title>
            <link>https://www.nytimes.com/2019/12/30/business/7-eleven-japan-work.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/30/business/7-eleven-japan-work.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/30/business/7-eleven-japan-work.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>In a dispute captivating a country of workaholics, Mitoshi Matsumoto says the company is threatening to rescind his franchise after he complained about draconian work hours.</description>
            <dc:creator>Ben Dooley and Hisako Ueno</dc:creator>
            <pubDate>Mon, 30 Dec 2019 22:27:34 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Japan</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">7-Eleven</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Working Hours</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Convenience Stores</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Franchises</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">New Year</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Population</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Labor and Jobs</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Holidays and Special Occasions</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Matsumoto, Mitoshi</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/28/business/00SevenElevenJapan-1/00SevenElevenJapan-1-moth.jpg" width="151" />
            <media:credit>Noriko Hayashi for The New York Times</media:credit>
            <media:description>Mitoshi Matsumoto, the owner of a 7-Eleven in Higashi-Osaka, Japan, wants to close the store on New Year’s Day.</media:description>
        </item>
        <item>
            <title>China Sentences Wang Yi, Christian Pastor, to 9 Years in Prison</title>
            <link>https://www.nytimes.com/2019/12/30/world/asia/china-wang-yi-christian-sentence.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/30/world/asia/china-wang-yi-christian-sentence.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/30/world/asia/china-wang-yi-christian-sentence.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>The founder of one of China’s largest unregistered churches was given a lengthy sentence for what the government called subversion of state power.</description>
            <dc:creator>Paul Mozur and Ian Johnson</dc:creator>
            <pubDate>Tue, 31 Dec 2019 15:06:01 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Early Rain Covenant Church (Chengdu, China)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Communist Party of China</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Wang Yi (1973- )</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Xi Jinping</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">China</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Christians and Christianity</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Religion and Belief</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Human Rights and Human Rights Violations</category>
        </item>
        <item>
            <title>Chinese Scientist Who Genetically Edited Babies Gets 3 Years in Prison</title>
            <link>https://www.nytimes.com/2019/12/30/business/china-scientist-genetic-baby-prison.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/30/business/china-scientist-genetic-baby-prison.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/30/business/china-scientist-genetic-baby-prison.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>He Jiankui’s work was also carried out on a third infant, according to China’s state media, in a new disclosure that is likely to add to the global uproar over such experiments.</description>
            <dc:creator>Sui-Lee Wee</dc:creator>
            <pubDate>Mon, 30 Dec 2019 20:08:38 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">China</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">In Vitro Fertilization</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">He Jiankui</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Ethics and Official Misconduct</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Crispr (DNA)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Acquired Immune Deficiency Syndrome</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Genetic Engineering</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/30/world/30china-genes-1/30china-genes-1-moth.jpg" width="151" />
            <media:credit>Kin Cheung/Associated Press</media:credit>
            <media:description>The scientist He Jiankui at a medical conference in Hong Kong last year, when he announced he had created the world’s first genetically edited babies.</media:description>
        </item>
        <item>
            <title>Ukraine, Huawei, Soccer: Your Monday Briefing</title>
            <link>https://www.nytimes.com/2019/12/30/briefing/Ukraine-Huawei-soccer.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/30/briefing/Ukraine-Huawei-soccer.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/30/briefing/Ukraine-Huawei-soccer.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Here’s what you need to know.</description>
            <dc:creator>Mike Ives</dc:creator>
            <pubDate>Mon, 30 Dec 2019 06:10:21 +0000</pubDate>
        </item>
        <item>
            <title>Left Behind by Migrant Husbands, Women Break the Rules and Go to Work</title>
            <link>https://www.nytimes.com/2019/12/30/world/africa/migrants-women-work.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/30/world/africa/migrants-women-work.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/30/world/africa/migrants-women-work.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Wives are shocking their traditional West African villages by earning money and running large households while their husbands are in Europe seeking jobs.</description>
            <dc:creator>Dionne Searcey and Laura Boushnak</dc:creator>
            <pubDate>Mon, 30 Dec 2019 05:01:13 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Women and Girls</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Senegal</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Middle East and Africa Migrant Crisis</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Widows and Widowers</category>
        </item>
        <item>
            <title>Putin Thanks Trump for Helping Russia Thwart Terrorist Attack</title>
            <link>https://www.nytimes.com/2019/12/29/world/europe/putin-trump-terrorism.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/29/world/europe/putin-trump-terrorism.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/29/world/europe/putin-trump-terrorism.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>The Russian president called the American president to thank him for a tip about an attack said to be aimed at St. Petersburg.</description>
            <dc:creator>Andrew E. Kramer</dc:creator>
            <pubDate>Sun, 29 Dec 2019 21:58:55 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Russia</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Terrorism</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Putin, Vladimir V</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Espionage and Intelligence Services</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Federal Security Service</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States International Relations</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/29/world/29putin/29putin-moth.jpg" width="151" />
            <media:credit>Pool photo by Alexander Nemenov</media:credit>
            <media:description>President Vladimir V. Putin at the Kremlin last week.</media:description>
        </item>
        <item>
            <title>Climate Change and Political Chaos: A Deadly Mix in Honduras Dengue Epidemic</title>
            <link>https://www.nytimes.com/2019/12/29/world/americas/honduras-dengue-epidemic.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/29/world/americas/honduras-dengue-epidemic.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/29/world/americas/honduras-dengue-epidemic.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Rising temperatures are increasing the range of disease-bearing mosquitoes globally. But in Honduras, the effects are compounded by government dysfunction and criminal gangs.</description>
            <dc:creator>Kirk Semple</dc:creator>
            <pubDate>Sun, 29 Dec 2019 23:24:56 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Dengue Fever</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Honduras</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Pan American Health Organization</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">San Pedro Sula (Honduras)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Central America</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Medicine and Health</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Mosquitoes</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Hernandez, Juan Orlando</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Choloma (Honduras)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Deaths (Fatalities)</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/27/world/00honduras-dengue/00honduras-dengue-moth.jpg" width="151" />
            <media:credit>Daniele Volpe for The New York Times</media:credit>
            <media:description>Children being treated for dengue fever at a hospital in San Pedro Sula, Honduras.</media:description>
        </item>
        <item>
            <title>Somalia explosion, Iran documents, North Korea: Your Monday Briefing</title>
            <link>https://www.nytimes.com/2019/12/29/briefing/somalia-attack-iran-documents-xinjiang.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/29/briefing/somalia-attack-iran-documents-xinjiang.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/29/briefing/somalia-attack-iran-documents-xinjiang.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Here’s what you need to know.</description>
            <dc:creator>Melina Delkic</dc:creator>
            <pubDate>Mon, 30 Dec 2019 05:23:41 +0000</pubDate>
        </item>
        <item>
            <title>U.S. Launches Airstrikes on Iranian-Backed Forces in Iraq and Syria</title>
            <link>https://www.nytimes.com/2019/12/29/world/middleeast/us-airstrikes-iran-iraq-syria.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/29/world/middleeast/us-airstrikes-iran-iraq-syria.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/29/world/middleeast/us-airstrikes-iran-iraq-syria.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>The strikes were a response to a rocket attack that killed an American contractor.</description>
            <dc:creator>Julian E. Barnes</dc:creator>
            <pubDate>Mon, 30 Dec 2019 09:42:21 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States Defense and Military Forces</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States International Relations</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Defense and Military Forces</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Defense Department</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Kataib Hezbollah</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Iran</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Iraq</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Syria</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/29/us/politics/29dc-attack2/29dc-attack2-moth-v2.jpg" width="151" />
            <media:credit>Ahmad Al-Rubaye/Agence France-Presse — Getty Images</media:credit>
            <media:description>Iraqi Shiite fighters from Kataib Hezbollah during a military parade in Baghdad in May.</media:description>
        </item>
        <item>
            <title>Somali Terror Group Al Shabab Remains Resilient Despite Setbacks</title>
            <link>https://www.nytimes.com/2019/12/29/world/africa/somalia-attack-shabab.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/29/world/africa/somalia-attack-shabab.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/29/world/africa/somalia-attack-shabab.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>The group suspected in a weekend attack that killed 79 people has lost territory, suffered defections and been targeted by increasing United States airstrikes. But it can still mount large attacks.</description>
            <dc:creator>Abdi Latif Dahir</dc:creator>
            <pubDate>Mon, 30 Dec 2019 15:10:34 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Somalia</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Shabab</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Mogadishu (Somalia)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Terrorism</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Al Qaeda</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Africa</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/29/world/29somalia/29somalia-moth-v2.jpg" width="151" />
            <media:credit>Feisal Omar/Reuters</media:credit>
            <media:description>The site of the truck bomb attack at a checkpoint in Mogadishu, the Somali capital, on Saturday.</media:description>
        </item>
        <item>
            <title>Missile Strikes Military Parade in Yemen, Killing at Least 10</title>
            <link>https://www.nytimes.com/2019/12/29/world/middleeast/missile-military-parade-yemen.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/29/world/middleeast/missile-military-parade-yemen.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/29/world/middleeast/missile-military-parade-yemen.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>The explosion took place at an event for recruits to a separatist militia. Children were among the dead.</description>
            <dc:creator>The Associated Press</dc:creator>
            <pubDate>Sun, 29 Dec 2019 15:17:57 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Deaths (Fatalities)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Houthis</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Yemen</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Saudi Arabia</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/29/world/29yemen/29yemen-moth.jpg" width="151" />
            <media:credit>Reuters</media:credit>
            <media:description>A ballistic missile strike left a hole near a soccer field in Dhale Province, Yemen, on Sunday.</media:description>
        </item>
        <item>
            <title>With Prisoner Swap, Ukraine’s President Inches Toward Peace With Separatists</title>
            <link>https://www.nytimes.com/2019/12/29/world/europe/ukraine-russia-prisoner-swap.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/29/world/europe/ukraine-russia-prisoner-swap.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/29/world/europe/ukraine-russia-prisoner-swap.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Among those traded were riot police officers accused of killing protesters during mass demonstrations in the capital, Kyiv, in 2014.</description>
            <dc:creator>Andrew E. Kramer</dc:creator>
            <pubDate>Sun, 29 Dec 2019 17:00:55 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Putin, Vladimir V</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Zelensky, Volodymyr</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Ukraine</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Russia</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">International Relations</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Prisons and Prisoners</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/29/world/29ukraine1/merlin_166447137_ae16cedb-cf9d-4fbb-add7-addbf44a10ea-moth.jpg" width="151" />
            <media:credit>Genya Savilov/Agence France-Presse — Getty Images</media:credit>
            <media:description>Ukraine and pro-Russian separatists exchanged prisoners near a checkpoint in eastern Ukraine on Sunday.</media:description>
        </item>
        <item>
            <title>The U.N. Tried to Save Hospitals in Syria. It Didn’t Work.</title>
            <link>https://www.nytimes.com/2019/12/29/world/middleeast/united-nations-syria-russia.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/29/world/middleeast/united-nations-syria-russia.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/29/world/middleeast/united-nations-syria-russia.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Russian and Syrian forces have bombed sites on a flawed U.N. no-strike list with impunity. Relief groups are giving up hope.</description>
            <dc:creator>Evan Hill and Whitney Hurst</dc:creator>
            <pubDate>Mon, 30 Dec 2019 00:21:46 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">War Crimes, Genocide and Crimes Against Humanity</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Humanitarian Aid</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Hospitals</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Security Council (UN)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Syrian American Medical Society</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">United Nations</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Assad, Bashar al-</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Egeland, Jan</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Guterres, Antonio</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Idlib (Syria)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Syria</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/29/world/29syria-deconfliction1sub/merlin_154423059_7fb8c12f-88fc-4c7f-8ca4-6d4af23cf196-moth.jpg" width="151" />
            <media:credit>Omar Haj Kadour/Agence France-Presse — Getty Images</media:credit>
            <media:description>The destroyed entrance of a hospital in the village of Kafr Nabl, south of Idlib, Syria, in May.</media:description>
        </item>
        <item>
            <title>Samoa Lifts State of Emergency After Deadly Measles Epidemic</title>
            <link>https://www.nytimes.com/2019/12/29/world/australia/samoa-measles-emergency.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/29/world/australia/samoa-measles-emergency.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/29/world/australia/samoa-measles-emergency.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>The Pacific island nation will reopen schools after a measles outbreak killed 81 people, many of them children.</description>
            <dc:creator>Isabella Kwai</dc:creator>
            <pubDate>Sun, 29 Dec 2019 09:27:14 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Measles</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Vaccination and Immunization</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Samoa</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/29/world/29samoa1/29samoa1-moth.jpg" width="151" />
            <media:credit>Matthew Abbott for The New York Times</media:credit>
            <media:description>Johan Auvele, 3, got the measles vaccination this month from a Samoan health worker who traveled to his village.</media:description>
        </item>
        <item>
            <title>How a Chase Bank Chairman Helped the Deposed Shah of Iran Enter the U.S.</title>
            <link>https://www.nytimes.com/2019/12/29/world/middleeast/shah-iran-chase-papers.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/29/world/middleeast/shah-iran-chase-papers.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/29/world/middleeast/shah-iran-chase-papers.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>The fateful decision in 1979 to admit Mohammed Reza Pahlavi prompted the seizure of the American Embassy in Tehran and helped doom the Carter presidency.</description>
            <dc:creator>David D. Kirkpatrick</dc:creator>
            <pubDate>Sun, 29 Dec 2019 15:15:54 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Iran</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Pahlavi, Mohammed Reza</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Chase Manhattan Bank</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Rockefeller, David</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Carter, Jimmy</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States International Relations</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Kidnapping and Hostages</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Banking and Financial Institutions</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Presidential Election of 1980</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Diplomatic Service, Embassies and Consulates</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Coups D'Etat and Attempted Coups D'Etat</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/29/business/29IRAN-SHAH-01/00IRAN-SHAH-01-moth.jpg" width="151" />
            <media:credit>Associated Press</media:credit>
            <media:description>Shah Mohammed Reza Pahlavi and Empress Farah leaving Iran for the last time on Jan. 16, 1979.</media:description>
        </item>
        <item>
            <title>North Korea Leader Urges ‘Offensive Measures’ at Top Party Meeting</title>
            <link>https://www.nytimes.com/2019/12/28/world/asia/north-korea-party-meeting-weapons.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/28/world/asia/north-korea-party-meeting-weapons.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/28/world/asia/north-korea-party-meeting-weapons.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Analysts warn that Kim Jong-un may end a moratorium on testing long-range missiles and nuclear weapons.</description>
            <dc:creator>Choe Sang-Hun</dc:creator>
            <pubDate>Mon, 30 Dec 2019 01:36:06 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">North Korea</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Kim Jong-un</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Nuclear Tests</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States International Relations</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Workers' Party of Korea</category>
        </item>
        <item>
            <title>Thai Navy SEAL Dies of Blood Infection a Year After Cave Rescue</title>
            <link>https://www.nytimes.com/2019/12/28/world/asia/navy-seal-cave-rescue-dies.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/28/world/asia/navy-seal-cave-rescue-dies.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/28/world/asia/navy-seal-cave-rescue-dies.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>A SEAL who helped rescue of 12 boys and their soccer coach from a flooded cave has died of an infection contracted during the risky operation.</description>
            <dc:creator>The Associated Press</dc:creator>
            <pubDate>Sat, 28 Dec 2019 18:14:55 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Caves and Caverns</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Bangkok (Thailand)</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/28/business/28THAILAND-01/28THAILAND-01-moth.jpg" width="151" />
            <media:credit>Tassanee Vejpongsa/Associated Press</media:credit>
            <media:description>Emergency teams gathered in the staging area during a mission to rescue a trapped youth soccer team and coach on June 26, 2018, in Mae Sai, Chiang Rai province, northern Thailand.</media:description>
        </item>
        <item>
            <title>U.N. Resolution Condemns Myanmar’s Abuse of Rohingya</title>
            <link>https://www.nytimes.com/2019/12/28/world/asia/united-nations-rohingya.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/28/world/asia/united-nations-rohingya.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/28/world/asia/united-nations-rohingya.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>The General Assembly passed a resolution denouncing human rights abuses against Rohingya Muslims and other minority groups.</description>
            <dc:creator>The Associated Press</dc:creator>
            <pubDate>Sat, 28 Dec 2019 15:59:45 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">General Assembly (UN)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Human Rights and Human Rights Violations</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Myanmar</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Rohingya (Ethnic Group)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Minorities</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Refugees and Displaced Persons</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/28/world/28un-rohyngia/merlin_139599072_23db2ef1-3cb0-4044-a8ba-bd2613247cf3-moth.jpg" width="151" />
            <media:credit>Rebecca Conway for The New York Times</media:credit>
            <media:description>A Rohingya refugee in the Kutupalong camp in Bangladesh last year.</media:description>
        </item>
        <item>
            <title>‘The Pendulum Has Swung Back’: Latin America’s Corruption Fight Stalls</title>
            <link>https://www.nytimes.com/2019/12/28/world/americas/latin-america-corruption.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/28/world/americas/latin-america-corruption.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/28/world/americas/latin-america-corruption.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>A drive against graft that started in Brazil left many hoping for a fairer, more equal region. That era is over.</description>
            <dc:creator>Ernesto Londoño and Letícia Casado</dc:creator>
            <pubDate>Mon, 30 Dec 2019 20:17:05 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Brazil</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Latin America</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Corruption (Institutional)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Odebrecht SA</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Bolsonaro, Jair (1955- )</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Da Silva, Luiz Inacio Lula</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Moro, Sergio (1972- )</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Temer, Michel (1940- )</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Government Contracts and Procurement</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Ethics and Official Misconduct</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Bribery and Kickbacks</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/29/world/29Latam-Corruption/Latam-Corruption-moth.jpg" width="151" />
            <media:credit>Victor Moriyama for The New York Times</media:credit>
            <media:description>Nelma Kodama, a black-market currency trader sentenced to 18 years in prison, is now free, and the anti-corruption effort that helped convict her is faltering.</media:description>
        </item>
        <item>
            <title>5 New Standout Safari Camps</title>
            <link>https://www.nytimes.com/2019/12/28/travel/safari-camps.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/28/travel/safari-camps.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/28/travel/safari-camps.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>These lodges help prove that safari camps can be leaders in conservation, sustainability, design, eco-sensitivity and hospitality.</description>
            <dc:creator>Christian L. Wright</dc:creator>
            <pubDate>Sat, 28 Dec 2019 10:00:24 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Camps and Camping</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Safaris</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Tents</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Travel and Vacations</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Rwanda</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">South Africa</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Botswana</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">India</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Costa Rica</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Eco-Tourism</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/29/travel/29checkin-safaris-nayara-03/29checkin-safaris-nayara-03-moth.jpg" width="151" />
        </item>
        <item>
            <title>In China’s Crackdown on Muslims, Children Have Not Been Spared</title>
            <link>https://www.nytimes.com/2019/12/28/world/asia/china-xinjiang-children-boarding-schools.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/28/world/asia/china-xinjiang-children-boarding-schools.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/28/world/asia/china-xinjiang-children-boarding-schools.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>In Xinjiang the authorities have separated nearly half a million children from their families, aiming to instill loyalty to China and the Communist Party.</description>
            <dc:creator>Amy Qin</dc:creator>
            <pubDate>Sat, 28 Dec 2019 17:37:41 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">China</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Children and Childhood</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Uighurs (Chinese Ethnic Group)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Kazakhs (Ethnic Group)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Muslims and Islam</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Political Prisoners</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Human Rights and Human Rights Violations</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Chinese Language</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Communist Party of China</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Hotan (China)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Xi Jinping</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/29/reader-center/28XJ-CHILDREN-A1/merlin_166073571_65b74708-0e9c-49d1-a018-5c979325078e-moth.jpg" width="151" />
            <media:credit>Giulia Marchi for The New York Times</media:credit>
            <media:description>Children heading to school in Hotan, where Beijing is seeking to assimilate and indoctrinate Muslim children.</media:description>
        </item>
        <item>
            <title>Norwegian Spy Jailed by Russia Is Free. He’s Angry, Too, but Not at Moscow.</title>
            <link>https://www.nytimes.com/2019/12/28/world/europe/norwegian-spy-jailed-by-russia-is-free-hes-angry-too-but-not-at-moscow.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/28/world/europe/norwegian-spy-jailed-by-russia-is-free-hes-angry-too-but-not-at-moscow.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/28/world/europe/norwegian-spy-jailed-by-russia-is-free-hes-angry-too-but-not-at-moscow.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Frode Berg, a trusting pensioner, willingly worked for Norwegian intelligence. Then, he says, they hung him out to dry.</description>
            <dc:creator>Anton Troianovski</dc:creator>
            <pubDate>Sat, 28 Dec 2019 10:00:15 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Espionage and Intelligence Services</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Federal Security Service</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">KGB</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Berg, Frode</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Arctic Regions</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Moscow (Russia)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Norway</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/29/world/29norway-spy-promo/29norway-spy-promo-moth-v2.jpg" width="151" />
            <media:credit>Mathias Svold for The New York Times</media:credit>
            <media:description>Frode Berg said that Norway’s military intelligence agency recruited him as an undercover courier without warning him of the risks.</media:description>
        </item>
        <item>
            <title>Somalia Bombing Kills Nearly 80, Raising Fears of Resurgent Militancy</title>
            <link>https://www.nytimes.com/2019/12/28/world/africa/somalia-explosion-mogadishu.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/28/world/africa/somalia-explosion-mogadishu.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/28/world/africa/somalia-explosion-mogadishu.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>A truck filled with explosives blew up at a busy intersection in the capital. It was the latest, and the worst, in a series of recent attacks.</description>
            <dc:creator>Hussein Mohamed, Abdi Latif Dahir and Eric Schmitt</dc:creator>
            <pubDate>Sat, 28 Dec 2019 22:16:35 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Somalia</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Mogadishu (Somalia)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Terrorism</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Shabab</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Deaths (Fatalities)</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/30/world/29somalia4/merlin_166418325_10cfb556-209c-482a-810d-9a193f68e8a5-moth.jpg" width="151" />
            <media:credit>Abdirazak Hussein Farah/Agence France-Presse &amp;mdash; Getty Images</media:credit>
            <media:description>Transporting a wounded person at a hospital in Mogadishu, Somalia, on Saturday.</media:description>
        </item>
    </channel>
</rss>
`;
    return data;
}

