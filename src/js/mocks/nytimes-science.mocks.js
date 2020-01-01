export function getMockData() {
    const data = `
    <rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:nyt="http://www.nytimes.com/namespaces/rss/2.0">
    <channel>
        <title>NYT > Science</title>
        <link>https://www.nytimes.com/section/science?emc=rss&amp;partner=rss</link>
        <atom:link href="https://rss.nytimes.com/services/xml/rss/nyt/Science.xml?" rel="self" type="application/rss+xml" />
        <description />
        <language>en-us</language>
        <copyright>Copyright 2020 The New York Times Company</copyright>
        <lastBuildDate>Wed, 01 Jan 2020 12:00:25 +0000</lastBuildDate>
        <pubDate>Wed, 01 Jan 2020 12:00:25 +0000</pubDate>
        <image>
            <title>NYT > Science</title>
            <url>https://static01.nyt.com/images/misc/NYT_logo_rss_250x40.png</url>
            <link>https://www.nytimes.com/section/science?emc=rss&amp;partner=rss</link>
        </image>
        <item>
            <title>Rocket Launches, Trips to Mars and More 2020 Space and Astronomy Events</title>
            <link>https://www.nytimes.com/2020/01/01/science/space-astronomy-2020.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/01/01/science/space-astronomy-2020.html</guid>
            <atom:link href="https://www.nytimes.com/2020/01/01/science/space-astronomy-2020.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>A year full of highs and lows in space just ended, and the 12 months to come will be full of new highlights in orbit and beyond.</description>
            <dc:creator>Michael Roston</dc:creator>
            <pubDate>Wed, 01 Jan 2020 05:05:07 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Space and Astronomy</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Private Spaceflight</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Rocket Science and Propulsion</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">National Aeronautics and Space Administration</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">European Space Agency</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Boeing Company</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Blue Origin</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">OneWeb Inc</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Space Exploration Technologies Corp</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Starlink</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Virgin Galactic</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Bezos, Jeffrey P</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United Arab Emirates</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">India</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Israel</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Japan</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">China</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Russia</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Moon</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Mars (Planet)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Sun</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Mars 2020 (Mars Rover)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Satellites</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">International Space Station</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Comets</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/01/01/science/01SPACEPREVIEW1/01SPACEPREVIEW1-moth.jpg" width="151" />
            <media:credit>Dmitri Lovetsky/Associated Press</media:credit>
            <media:description>Spectators viewing the launch of a Soyuz rocket carrying crew to the International Space Station from the Baikonur Cosmodrome in Kazakhstan in September.</media:description>
        </item>
        <item>
            <title>An Afterlife So Perilous, You Needed a Guidebook</title>
            <link>https://www.nytimes.com/2019/12/30/science/archaeology-books-egypt-underworld.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/30/science/archaeology-books-egypt-underworld.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/30/science/archaeology-books-egypt-underworld.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Archaeologists unearthed the remains of a 4,000-year-old “Book of Two Ways” — a guide to the Egyptian underworld, and the earliest copy of the first illustrated book.</description>
            <dc:creator>Franz Lidz</dc:creator>
            <pubDate>Mon, 30 Dec 2019 10:00:14 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Egyptian Civilization</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Archaeology and Anthropology</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Tombs and Tombstones</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Art</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Egypt</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Death and Dying</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">Book of Two Ways (Book)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Willems, Harco</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Journal of Egyptian Archaeology</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/31/science/00SCI-AFTERLIFE1/00SCI-AFTERLIFE1-moth.jpg" width="151" />
            <media:credit>Werner Forman/Universal Images Group, via Getty Images</media:credit>
            <media:description>A detail from the floor of a coffin of Gua, physician of Djehutyhotep, a nomarch of Deir el-Bersha, Egypt, during the Middle Kingdom, with markings showing the &amp;ldquo;two ways&amp;rdquo; of the ancient Egyptian afterlife. Researchers recently unearthed the remains of an even older &amp;ldquo;Book of Two Ways.&amp;rdquo;</media:description>
        </item>
        <item>
            <title>Science Panel Staffed With Trump Appointees Says E.P.A. Rollbacks Lack Scientific Rigor</title>
            <link>https://www.nytimes.com/2019/12/31/climate/epa-science-panel-trump.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/31/climate/epa-science-panel-trump.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/31/climate/epa-science-panel-trump.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>The Trump administration staffed an E.P.A. advisory panel with its choice of scientists, but they concluded that three significant regulatory rollbacks broke with established science.</description>
            <dc:creator>Coral Davenport and Lisa Friedman</dc:creator>
            <pubDate>Wed, 01 Jan 2020 01:17:15 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Global Warming</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Environment</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Greenhouse Gas Emissions</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Appointments and Executive Changes</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Water Pollution</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Regulation and Deregulation of Industry</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Fuel Emissions (Transportation)</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/31/climate/31cli-epa2/31cli-epa2-moth.jpg" width="151" />
            <media:credit>Robyn Beck/Agence France-Presse — Getty Images</media:credit>
            <media:description> A Los Angeles freeway in September.</media:description>
        </item>
        <item>
            <title>Chinese Scientist Is Accused of Smuggling Lab Samples, Amid Crackdown on Research Theft</title>
            <link>https://www.nytimes.com/2019/12/31/us/chinese-scientist-cancer-research-investigation.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/31/us/chinese-scientist-cancer-research-investigation.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/31/us/chinese-scientist-cancer-research-investigation.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Zaosong Zheng, a promising cancer researcher, confessed that he had planned to take the stolen samples to Sun Yat-sen Memorial Hospital, and publish the results under his own name.</description>
            <dc:creator>Ellen Barry</dc:creator>
            <pubDate>Wed, 01 Jan 2020 03:35:26 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Research</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Industrial Espionage</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Smuggling</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Intellectual Property</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Harvard University</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Beth Israel Deaconess Medical Center</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">China</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Zheng, Zaosong</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/31/us/31boston-cancer/31boston-cancer-moth.jpg" width="151" />
            <media:credit>Steven Senne/Associated Press</media:credit>
            <media:description>An entrance to Beth Israel Deaconess Medical Center, in Boston, in 2014. Zaosong Zheng was a cancer researcher there recently.</media:description>
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
            <title>Science Under Attack: How Trump Is Sidelining Researchers and Their Work</title>
            <link>https://www.nytimes.com/2019/12/28/climate/trump-administration-war-on-science.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/28/climate/trump-administration-war-on-science.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/28/climate/trump-administration-war-on-science.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>In three years, the administration has diminished the role of science in policymaking while disrupting research projects nationwide. Experts say the effects could be felt for years.</description>
            <dc:creator>Brad Plumer and Coral Davenport</dc:creator>
            <pubDate>Sun, 29 Dec 2019 02:28:19 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Science and Technology</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Research</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Government Employees</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Environment</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Global Warming</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Regulation and Deregulation of Industry</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Federal Budget (US)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Commerce Department</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Environmental Protection Agency</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Interior Department</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">National Academies of the United States</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">National Institutes of Health</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Energy Department</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/29/science/29CLI-SCIENCE-epa1/merlin_166206960_8d393c85-cb38-41de-84e3-053b2c70c014-moth.jpg" width="151" />
            <media:credit>Victor J. Blue for The New York Times</media:credit>
            <media:description>The Environmental Protection Agency in Washington.</media:description>
        </item>
        <item>
            <title>Meteor Showers in 2020 That Will Light Up Night Skies</title>
            <link>https://www.nytimes.com/2020/01/01/science/meteor-showers-2020.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/01/01/science/meteor-showers-2020.html</guid>
            <atom:link href="https://www.nytimes.com/2020/01/01/science/meteor-showers-2020.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>All year long, Earth passes through streams of cosmic debris. Here’s a list of major meteor showers and how to spot one.</description>
            <dc:creator>Nicholas St. Fleur</dc:creator>
            <pubDate>Wed, 01 Jan 2020 05:00:08 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Meteors and Meteorites</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Space and Astronomy</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Earth</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Solar System</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Seasons and Months</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/01/01/science/01meteorshowers/01meteorshowers-moth.jpg" width="151" />
            <media:credit>Soner Kilinc/Anadolu Agency, via Getty Images</media:credit>
            <media:description>Perseid meteors named as 'Orinoid' streak across the sky over Kula town of Manisa, Turkey on October 21, 2017.</media:description>
        </item>
        <item>
            <title>Watching an Interstellar Comet and Hoping for a Bang</title>
            <link>https://www.nytimes.com/2019/12/24/science/interstellar-comet-christmas.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/24/science/interstellar-comet-christmas.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/24/science/interstellar-comet-christmas.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Seeing Comet Borisov won’t be easy for the typical sky gazer, but astronomers still have a lot to learn from this extrasolar tourist.</description>
            <dc:creator>Nicholas St. Fleur</dc:creator>
            <pubDate>Thu, 26 Dec 2019 16:09:47 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Comets</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Stars and Galaxies</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Telescopes and Observatories</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Earth</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Space and Astronomy</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Solar System</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Hubble Space Telescope</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Christmas</category>
        </item>
        <item>
            <title>The Tech That Will Invade Our Lives in 2020</title>
            <link>https://www.nytimes.com/2020/01/01/technology/personaltech/tech-trends-2020.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/01/01/technology/personaltech/tech-trends-2020.html</guid>
            <atom:link href="https://www.nytimes.com/2020/01/01/technology/personaltech/tech-trends-2020.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>From smart homes to ultrafast wireless speeds, here’s what to watch.</description>
            <dc:creator>Brian X. Chen</dc:creator>
            <pubDate>Wed, 01 Jan 2020 10:00:15 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">5G (Wireless Communications)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Computers and the Internet</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Wearable Computing</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Mobile Applications</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Wireless Communications</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Driverless and Semiautonomous Vehicles</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Home Automation and Smart Homes</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Television</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">International Consumer Electronics Show</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Television Sets and Media Devices</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Innovation</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Apple Inc</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Netflix Inc</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/01/01/business/01Techfix-print/01Techfix-print-moth.jpg" width="151" />
            <media:credit>Glenn Harvey</media:credit>
        </item>
        <item>
            <title>New Cruise Ships to Set Sail for Antarctica</title>
            <link>https://www.nytimes.com/2020/01/01/travel/antarctica-cruises.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2020/01/01/travel/antarctica-cruises.html</guid>
            <atom:link href="https://www.nytimes.com/2020/01/01/travel/antarctica-cruises.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Interested in the southernmost continent? Here’s a roundup of some of the new ships and itineraries planned for the bucket-list destination.</description>
            <dc:creator>Nora Walsh</dc:creator>
            <pubDate>Wed, 01 Jan 2020 10:00:14 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Antarctic Regions</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Cruises</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Travel and Vacations</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Eco-Tourism</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Ice</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Hurtigruten</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Lindblad Expeditions</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">National Geographic</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Quark Expeditions</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/01/05/travel/31trending-antart/31trending-antart-moth.jpg" width="151" />
            <media:credit>Sandra Walser and Antarctica21</media:credit>
            <media:description>Antarctica21&amp;rsquo;s expedition ship, Ocean Nova, sails through the polar waters in the Antarctic Peninsula.</media:description>
        </item>
        <item>
            <title>F.D.A. Plans to Ban Most E-Cigarette Flavors but Menthol</title>
            <link>https://www.nytimes.com/2019/12/31/health/e-cigarettes-flavor-ban-trump.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/31/health/e-cigarettes-flavor-ban-trump.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/31/health/e-cigarettes-flavor-ban-trump.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>The tobacco and vaping industries and conservative allies intensively lobbied against a ban on popular flavored e-cigarettes.</description>
            <dc:creator>Sheila Kaplan and Maggie Haberman</dc:creator>
            <pubDate>Wed, 01 Jan 2020 04:44:30 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Teenagers and Adolescence</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Smoking and Tobacco</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">E-Cigarettes</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Menthol</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Recalls and Bans of Products</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Nicotine</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Food and Drug Administration</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Health and Human Services Department</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Juul Labs Inc</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Regulation and Deregulation of Industry</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-healthcare</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Lobbying and Lobbyists</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/11/06/science/05FDA-FLAVORS/05FDA-FLAVORS-moth.jpg" width="151" />
            <media:credit>Seth Wenig/Associated Press</media:credit>
            <media:description>A new study by the National Institute on Drug Abuse found that teenagers preferred mint and mango Juul flavors. Menthol was the least popular. </media:description>
        </item>
        <item>
            <title>How to Travel With Medical Marijuana</title>
            <link>https://www.nytimes.com/2019/12/31/travel/traveling-with-medical-marijuana.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/31/travel/traveling-with-medical-marijuana.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/31/travel/traveling-with-medical-marijuana.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Even as more states allow medical marijuana, traveling between states with cannabis can leave patients in legal limbo.</description>
            <dc:creator>Jonathan Wolfe</dc:creator>
            <pubDate>Tue, 31 Dec 2019 10:00:14 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Travel and Vacations</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Marijuana</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Medical Marijuana</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Law and Legislation</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Luggage and Packing</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Airlines and Airplanes</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Airport Security</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Drug Abuse and Traffic</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Alaska Airlines</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">American Airlines</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Amtrak</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Delta Air Lines Inc</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Food and Drug Administration</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Greyhound Lines Incorporated</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Transportation Security Administration</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/01/05/travel/05TIPS-marijuana/05TIPS-marijuana-moth.jpg" width="151" />
            <media:credit>Lars Leetaru</media:credit>
        </item>
        <item>
            <title>Opioid Deaths Rise When Auto Plants Close, Study Shows</title>
            <link>https://www.nytimes.com/2019/12/30/business/economy/30opioids-auto-plants.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/30/business/economy/30opioids-auto-plants.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/30/business/economy/30opioids-auto-plants.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Research found 85 percent more deaths among those of prime working age in places where car factories closed compared with where they stayed open.</description>
            <dc:creator>Niraj Chokshi</dc:creator>
            <pubDate>Mon, 30 Dec 2019 23:52:12 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Drug Abuse and Traffic</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Opioids and Opiates</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Factories and Manufacturing</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Automobiles</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Deaths (Fatalities)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">JAMA Internal Medicine (Journal)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Shutdowns (Institutional)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Venkataramani, Atheendar</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">University of Pennsylvania</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/30/business/30opiod-econ/merlin_29063175_adfcf8b1-eb12-4d3f-b0cb-539b03c003a4-moth.jpg" width="151" />
            <media:credit>Fabrizio Costantini for the New York Times</media:credit>
            <media:description>A Ford Motor assembly plant in Wixom, Mich., where production was halted in 2007.</media:description>
        </item>
        <item>
            <title>As Tens of Thousands Died, F.D.A. Failed to Police Opioids</title>
            <link>https://www.nytimes.com/2019/12/30/health/FDA-opioids.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/30/health/FDA-opioids.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/30/health/FDA-opioids.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>The agency, whose oversight of opioid safety has largely eluded scrutiny, did not improve flawed programs designed to reduce addiction and overdoses, documents show.</description>
            <dc:creator>Abby Goodnough and Margot Sanger-Katz</dc:creator>
            <pubDate>Tue, 31 Dec 2019 17:28:46 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Opioids and Opiates</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">OxyContin (Drug)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Drugs (Pharmaceuticals)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Pain-Relieving Drugs</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Fentanyl</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Regulation and Deregulation of Industry</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Food and Drug Administration</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-healthcare</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Drug Abuse and Traffic</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/30/science/30OPIOIDS1/30OPIOIDS1-moth.jpg" width="151" />
            <media:credit>J. Scott Applewhite/Associated Press</media:credit>
            <media:description>Demonstrators at a rally in Washington in April.</media:description>
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
            <title>In a Year of Notable Deaths, a World of Women Who Shattered Ceilings</title>
            <link>https://www.nytimes.com/2019/12/26/obituaries/in-a-year-of-notable-deaths-a-world-of-women-who-shattered-ceilings.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/26/obituaries/in-a-year-of-notable-deaths-a-world-of-women-who-shattered-ceilings.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/26/obituaries/in-a-year-of-notable-deaths-a-world-of-women-who-shattered-ceilings.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Their breakthroughs were in law, science, music and business, and, like the more famous who died this year, they left indelible legacies.</description>
            <dc:creator>William McDonald</dc:creator>
            <pubDate>Fri, 27 Dec 2019 02:24:59 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Deaths (Obituaries)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Two Thousand Nineteen</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Women and Girls</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/27/obituaries/27obityear-abram/24Abrams1-moth.jpg" width="151" />
            <media:credit>David L. Ryan/Boston Globe</media:credit>
            <media:description>Ruth Abrams was sworn in by Gov. Michael S. Dukakis in 1977 as the first woman to join the Supreme Judicial Court of Massachusetts, the state&amp;rsquo;s highest court. </media:description>
        </item>
        <item>
            <title>‘Ring of Fire’ Eclipse Dazzles Asia and Middle East</title>
            <link>https://www.nytimes.com/2019/12/26/science/ring-of-fire-eclipse-asia.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/26/science/ring-of-fire-eclipse-asia.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/26/science/ring-of-fire-eclipse-asia.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>An annular solar eclipse, in which the moon covers the sun’s center, leaving a ring of light around it, was visible on Thursday. “You can actually see the solar system in motion,” an astronomer said.</description>
            <dc:creator>Derrick Bryson Taylor</dc:creator>
            <pubDate>Thu, 26 Dec 2019 22:28:56 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Eclipses</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Moon</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Sun</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Middle East</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/26/science/26xp-eclipse-slide-3IPZ/26xp-eclipse-slide-3IPZ-moth.jpg" width="151" />
            <media:credit>Rifka Majjid/Associated Press</media:credit>
            <media:description>Thursday’s annular solar eclipse brought out skywatchers across Asia and the Middle East.</media:description>
        </item>
        <item>
            <title>Black Rhino Born at Michigan Zoo on Christmas Eve</title>
            <link>https://www.nytimes.com/2019/12/25/us/potter-park-zoo-baby-black-rhino.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/25/us/potter-park-zoo-baby-black-rhino.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/25/us/potter-park-zoo-baby-black-rhino.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>Doppsee, a 12-year-old black rhino, gave birth to her first calf, a rare delivery in captivity for the critically endangered species.</description>
            <dc:creator>Derrick Bryson Taylor</dc:creator>
            <pubDate>Wed, 25 Dec 2019 19:30:58 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Rhinoceroses</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Potter Park Zoo</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Endangered and Extinct Species</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Michigan</category>
            <category domain="">Black Rhinos</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/25/us/politics/25xp-rhinoSUB/25xp-rhinoSUB-moth.jpg" width="151" />
            <media:credit>Kaiti Chritz/Potter Park Zoo</media:credit>
            <media:description>The male black rhino calf, which has not been named yet, was walking about 90 minutes after its birth at the Potter Park Zoo in Lansing, Mich.</media:description>
        </item>
        <item>
            <title>Pentagon Warns Military Personnel Against At-Home DNA Tests</title>
            <link>https://www.nytimes.com/2019/12/24/us/military-dna-tests.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/24/us/military-dna-tests.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/24/us/military-dna-tests.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>The tests, from companies such as 23andMe and Ancestry, have become popular holiday gifts, but the military is warning service members of risks to their careers.</description>
            <dc:creator>Heather Murphy and Mihir Zaveri</dc:creator>
            <pubDate>Tue, 24 Dec 2019 23:34:43 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Genetics and Heredity</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">United States Defense and Military Forces</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">DNA (Deoxyribonucleic Acid)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Discrimination</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Defense Department</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Tests (Medical)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">23andMe</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Ancestry.com</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/24/obituaries/24xp-militarydna/24xp-militarydna-moth.jpg" width="151" />
            <media:credit>Gabe Ginsberg/Getty Images for LARAS</media:credit>
            <media:description>The Pentagon has warned military personnel not to use direct-to-consumer DNA tests. </media:description>
        </item>
        <item>
            <title>Chuck Peddle Dies at 82; His $25 Chip Helped Start the PC Age</title>
            <link>https://www.nytimes.com/2019/12/24/technology/chuck-peddle-dead.html?emc=rss&amp;partner=rss</link>
            <guid isPermaLink="true">https://www.nytimes.com/2019/12/24/technology/chuck-peddle-dead.html</guid>
            <atom:link href="https://www.nytimes.com/2019/12/24/technology/chuck-peddle-dead.html?emc=rss&amp;partner=rss" rel="standout" />
            <description>His invention brought digital technology to a new breed of consumer devices and powered early Apple and Commodore computers.</description>
            <dc:creator>Cade Metz</dc:creator>
            <pubDate>Tue, 24 Dec 2019 19:52:47 +0000</pubDate>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Deaths (Obituaries)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Computers and the Internet</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/des">Computer Chips</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Commodore International Ltd</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Apple Inc</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Peddle, Chuck (1937-2019)</category>
            <category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">MOS Technology</category>
            <media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/12/26/obituaries/24peddle/24peddle-moth.jpg" width="151" />
            <media:credit>Tom Munnecke/Getty Images</media:credit>
            <media:description>The computer engineer Chuck Peddle in 1977. The chip he helped develop powered the first big wave of personal computers.</media:description>
        </item>
    </channel>
</rss>
`;
    return data;
}

