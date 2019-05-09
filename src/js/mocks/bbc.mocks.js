export function getMockData() {
    const data = `
    <?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet title="XSL_formatting" type="text/xsl" href="/shared/bsp/xsl/rss/nolsol.xsl"?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0" xmlns:media="http://search.yahoo.com/mrss/">
    <channel>
        <title><![CDATA[BBC News - Home]]></title>
        <description><![CDATA[BBC News - Home]]></description>
        <link>https://www.bbc.co.uk/news/</link>
        <image>
            <url>https://news.bbcimg.co.uk/nol/shared/img/bbc_news_120x60.gif</url>
            <title>BBC News - Home</title>
            <link>https://www.bbc.co.uk/news/</link>
        </image>
        <generator>RSS for Node</generator>
        <lastBuildDate>Wed, 08 May 2019 14:56:16 GMT</lastBuildDate>
        <copyright><![CDATA[Copyright: (C) British Broadcasting Corporation, see http://news.bbc.co.uk/2/hi/help/rss/4498287.stm for terms and conditions of reuse.]]></copyright>
        <language><![CDATA[en-gb]]></language>
        <ttl>15</ttl>
        <item>
            <title><![CDATA[MOCKS - Royal baby: Duke and Duchess of Sussex share first glimpse of son]]></title>
            <description><![CDATA[The Duchess of Sussex describes her baby boy, who is wrapped in a white shawl, as "the dream".]]></description>
            <link>https://www.bbc.co.uk/news/uk-48201625</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/uk-48201625</guid>
            <pubDate>Wed, 08 May 2019 14:29:04 GMT</pubDate>
            <media:thumbnail width="2048" height="1152" url="http://c.files.bbci.co.uk/1362C/production/_106840497_hi053820529.jpg"/>
        </item>
        <item>
            <title><![CDATA[London Bridge attack inquest: One attacker seen cleaning his knife on CCTV]]></title>
            <description><![CDATA[Khuram Butt was seen on CCTV cleaning his 12in knife inside a restaurant, shortly after eight people were killed.]]></description>
            <link>https://www.bbc.co.uk/news/uk-48201085</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/uk-48201085</guid>
            <pubDate>Wed, 08 May 2019 14:55:50 GMT</pubDate>
            <media:thumbnail width="976" height="549" url="http://c.files.bbci.co.uk/14B98/production/_96388848_composite.jpg"/>
        </item>
        <item>
            <title><![CDATA[Brexit: Theresa May rejects calls to resign]]></title>
            <description><![CDATA[The PM rejects calls for her to quit despite a growing clamour for her to name her departure date.]]></description>
            <link>https://www.bbc.co.uk/news/uk-politics-48199725</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/uk-politics-48199725</guid>
            <pubDate>Wed, 08 May 2019 14:40:23 GMT</pubDate>
            <media:thumbnail width="976" height="549" url="http://c.files.bbci.co.uk/1452C/production/_106844238_theresa_may_hoc_8th_may.jpg"/>
        </item>
        <item>
            <title><![CDATA[Keith Flint: Prodigy star took drugs before death]]></title>
            <description><![CDATA[A coroner says there was not enough evidence to say singer Keith Flint had taken his own life.]]></description>
            <link>https://www.bbc.co.uk/news/uk-england-essex-48200575</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/uk-england-essex-48200575</guid>
            <pubDate>Wed, 08 May 2019 10:31:35 GMT</pubDate>
            <media:thumbnail width="976" height="549" url="http://c.files.bbci.co.uk/17D15/production/_105975579_keith_flint_pa.jpg"/>
        </item>
        <item>
            <title><![CDATA[Joseph McCann charged with Watford kidnap and rape]]></title>
            <description><![CDATA[Joseph McCann is accused of attacking a 21-year-old woman who was abducted at knifepoint in Watford.]]></description>
            <link>https://www.bbc.co.uk/news/uk-england-london-48200467</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/uk-england-london-48200467</guid>
            <pubDate>Wed, 08 May 2019 11:19:52 GMT</pubDate>
            <media:thumbnail width="976" height="549" url="http://c.files.bbci.co.uk/D88D/production/_106773455_mediaitem106773452.jpg"/>
        </item>
        <item>
            <title><![CDATA[Scotland's bottle return scheme deposit to be set at 20p]]></title>
            <description><![CDATA[All retailers will have to comply and the scheme will affect plastic drinks containers, cans and glass.]]></description>
            <link>https://www.bbc.co.uk/news/uk-scotland-scotland-politics-48198098</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/uk-scotland-scotland-politics-48198098</guid>
            <pubDate>Wed, 08 May 2019 14:26:08 GMT</pubDate>
            <media:thumbnail width="976" height="549" url="http://c.files.bbci.co.uk/219C/production/_106840680_bottles_two976.jpg"/>
        </item>
        <item>
            <title><![CDATA[Food outlets ‘should list all ingredients’ says food agency]]></title>
            <description><![CDATA[Outlets should list all ingredients to avoid allergy tragedies, the Food Standards Agency recommends.]]></description>
            <link>https://www.bbc.co.uk/news/business-48200085</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/business-48200085</guid>
            <pubDate>Wed, 08 May 2019 13:49:39 GMT</pubDate>
            <media:thumbnail width="2048" height="1152" url="http://c.files.bbci.co.uk/13365/production/_106839687_gettyimages-490621248.jpg"/>
        </item>
        <item>
            <title><![CDATA[British people 'having less sex' than previously]]></title>
            <description><![CDATA[Who is getting the most and what's the average amount? National survey results reveal all.]]></description>
            <link>https://www.bbc.co.uk/news/health-48184848</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/health-48184848</guid>
            <pubDate>Wed, 08 May 2019 00:01:25 GMT</pubDate>
            <media:thumbnail width="976" height="549" url="http://c.files.bbci.co.uk/1557E/production/_106822478_gettyimages-626646900.jpg"/>
        </item>
        <item>
            <title><![CDATA[Trump: Billion dollar losses were 'for tax purposes']]></title>
            <description><![CDATA[The US President tells the New York Times that his $1bn property empire losses were "for tax purposes".]]></description>
            <link>https://www.bbc.co.uk/news/business-48201786</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/business-48201786</guid>
            <pubDate>Wed, 08 May 2019 13:52:15 GMT</pubDate>
            <media:thumbnail width="976" height="549" url="http://c.files.bbci.co.uk/11A63/production/_87719227_donaldtrumpprofile.jpg"/>
        </item>
        <item>
            <title><![CDATA[Women's World Cup: England boss Phil Neville names squad]]></title>
            <description><![CDATA[England captain Steph Houghton will lead a 23-strong squad to the Women's World Cup in France this summer.]]></description>
            <link>https://www.bbc.co.uk/sport/football/48198403</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/sport/football/48198403</guid>
            <pubDate>Wed, 08 May 2019 11:14:57 GMT</pubDate>
            <media:thumbnail width="2048" height="1152" url="http://c.files.bbci.co.uk/18699/production/_106839999_houghton_getty2.jpg"/>
        </item>
        <item>
            <title><![CDATA[Kerry Katona fined £500 for failing to send her child to school]]></title>
            <description><![CDATA[The former Atomic Kitten singer sometimes had to take the child to work with her, a court hears.]]></description>
            <link>https://www.bbc.co.uk/news/uk-england-sussex-48201107</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/uk-england-sussex-48201107</guid>
            <pubDate>Wed, 08 May 2019 13:59:19 GMT</pubDate>
            <media:thumbnail width="600" height="338" url="http://c.files.bbci.co.uk/10ACE/production/_105920386_katona2_btonmagct_pa.jpg"/>
        </item>
        <item>
            <title><![CDATA[Dancing five-year-old amputee goes viral]]></title>
            <description><![CDATA[Video of a five-year-old Afghan amputee which shows him joyously dancing after being fitted with a new leg has been widely shared online.]]></description>
            <link>https://www.bbc.co.uk/news/uk-48198079</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/uk-48198079</guid>
            <pubDate>Wed, 08 May 2019 11:42:13 GMT</pubDate>
            <media:thumbnail width="1920" height="1080" url="http://c.files.bbci.co.uk/17609/production/_106835759_afghanboy.jpg"/>
        </item>
        <item>
            <title><![CDATA[Cambridge University college bell removed over slavery link]]></title>
            <description><![CDATA[A former student donated the Demerara Bell to St Catharine's College in Cambridge in 1960.]]></description>
            <link>https://www.bbc.co.uk/news/uk-england-cambridgeshire-48202399</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/uk-england-cambridgeshire-48202399</guid>
            <pubDate>Wed, 08 May 2019 13:12:32 GMT</pubDate>
            <media:thumbnail width="976" height="549" url="http://c.files.bbci.co.uk/0959/production/_106839320_geograph-4896676-by-n-chadwick.jpg"/>
        </item>
        <item>
            <title><![CDATA[Parliament refit: First images released of temporary Commons chamber]]></title>
            <description><![CDATA[The proposed new venue, complete with green benches, will be used while Parliament is refurbished.]]></description>
            <link>https://www.bbc.co.uk/news/uk-politics-48199355</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/uk-politics-48199355</guid>
            <pubDate>Wed, 08 May 2019 13:51:47 GMT</pubDate>
            <media:thumbnail width="2048" height="1152" url="http://c.files.bbci.co.uk/17A2E/production/_106841869_ec8a3426-694c-4e01-b0ed-6c25896acc72.jpg"/>
        </item>
        <item>
            <title><![CDATA[David Attenborough WLTM trance producer]]></title>
            <description><![CDATA[The broadcaster wants DJs to remix his 1956 recording of a Balinese gamelan ensemble.]]></description>
            <link>https://www.bbc.co.uk/news/entertainment-arts-48198945</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/entertainment-arts-48198945</guid>
            <pubDate>Wed, 08 May 2019 08:29:21 GMT</pubDate>
            <media:thumbnail width="1024" height="576" url="http://c.files.bbci.co.uk/CB69/production/_106837025_daviud.jpg"/>
        </item>
        <item>
            <title><![CDATA[Dutch footballer Van der Laan sacked for throwing Ajax sickie]]></title>
            <description><![CDATA[Jordie van der Laan decided to see Ajax beat Spurs in the Champions League semi-final and lost his job.]]></description>
            <link>https://www.bbc.co.uk/news/world-europe-48198759</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/world-europe-48198759</guid>
            <pubDate>Wed, 08 May 2019 12:33:53 GMT</pubDate>
            <media:thumbnail width="976" height="549" url="http://c.files.bbci.co.uk/A193/production/_106836314_gettyimages-1022628942.jpg"/>
        </item>
        <item>
            <title><![CDATA[CEO Secrets: 'Buying a beer gave me my big break']]></title>
            <description><![CDATA[MediaCom boss Stephen Allan tells how an unusual tactic gave him his big break in the ad industry.]]></description>
            <link>https://www.bbc.co.uk/news/business-48137501</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/business-48137501</guid>
            <pubDate>Tue, 07 May 2019 23:01:58 GMT</pubDate>
            <media:thumbnail width="1024" height="576" url="http://c.files.bbci.co.uk/D59E/production/_106768645_c645fae6-0324-4b1f-87c5-209dc5ec0040.jpg"/>
        </item>
        <item>
            <title><![CDATA[Marion Stokes: The woman who taped 30 years of TV news]]></title>
            <description><![CDATA[Marion Stokes recorded US broadcasts from 1979 until her death in 2012. Her son explains why.]]></description>
            <link>https://www.bbc.co.uk/news/world-us-canada-48190528</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/world-us-canada-48190528</guid>
            <pubDate>Tue, 07 May 2019 23:39:09 GMT</pubDate>
            <media:thumbnail width="1024" height="576" url="http://c.files.bbci.co.uk/16821/production/_106839129_p078lgz9.jpg"/>
        </item>
        <item>
            <title><![CDATA[The drag troupe stirring up the scene]]></title>
            <description><![CDATA[Could Drag Syndrome, a group of queens and kings with Down's syndrome, hit the big time with their drag act?]]></description>
            <link>https://www.bbc.co.uk/news/disability-48185331</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/disability-48185331</guid>
            <pubDate>Wed, 08 May 2019 00:18:52 GMT</pubDate>
            <media:thumbnail width="1024" height="576" url="http://c.files.bbci.co.uk/FDCD/production/_106837946_p0787wj3.jpg"/>
        </item>
        <item>
            <title><![CDATA[Liverpool beat Barcelona: Greatest Champions League comebacks of all time]]></title>
            <description><![CDATA[Where does Liverpool's win over Barcelona rank among the all-time Champions League comebacks?]]></description>
            <link>https://www.bbc.co.uk/sport/football/48163330</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/sport/football/48163330</guid>
            <pubDate>Wed, 08 May 2019 08:23:35 GMT</pubDate>
            <media:thumbnail width="2048" height="1152" url="http://c.files.bbci.co.uk/12A91/production/_106833467_livefrpoll.jpg"/>
        </item>
        <item>
            <title><![CDATA[Game of Thrones' coffee cup and 6 other TV and film bloopers]]></title>
            <description><![CDATA[A stray coffee cup is the latest in a long line of on screen inconsistencies. We explore the best.]]></description>
            <link>https://www.bbc.co.uk/news/entertainment-arts-48186376</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/entertainment-arts-48186376</guid>
            <pubDate>Tue, 07 May 2019 16:07:45 GMT</pubDate>
            <media:thumbnail width="976" height="549" url="http://c.files.bbci.co.uk/15420/production/_106827078_blooper-comp.jpg"/>
        </item>
        <item>
            <title><![CDATA[Royal wedding choir writes lullaby for royal baby]]></title>
            <description><![CDATA[The choir that sang at the royal wedding have written a lullaby for the Duke and Duchess of Sussex's new baby.]]></description>
            <link>https://www.bbc.co.uk/news/uk-48072488</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/uk-48072488</guid>
            <pubDate>Mon, 06 May 2019 23:05:53 GMT</pubDate>
            <media:thumbnail width="976" height="549" url="http://c.files.bbci.co.uk/D310/production/_106823045_choir.jpg"/>
        </item>
        <item>
            <title><![CDATA[The NFL is opening its first academy for young players in the UK]]></title>
            <description><![CDATA[The NFL announces a new partnership offering specialist training and education in London.]]></description>
            <link>https://www.bbc.co.uk/news/newsbeat-48192436</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/newsbeat-48192436</guid>
            <pubDate>Tue, 07 May 2019 16:37:25 GMT</pubDate>
            <media:thumbnail width="976" height="549" url="http://c.files.bbci.co.uk/11047/production/_106830796_gettyimages-856251808.jpg"/>
        </item>
        <item>
            <title><![CDATA[BBC News Channel]]></title>
            <description><![CDATA[Britain's most-watched news channel, delivering breaking news and analysis all day, every day.]]></description>
            <link>https://www.bbc.co.uk/news/10318089</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/10318089</guid>
            <pubDate>Wed, 01 May 2019 18:23:45 GMT</pubDate>
            <media:thumbnail width="2048" height="1152" url="http://c.files.bbci.co.uk/059C/production/_106463410_ecb0b10f-d372-402e-aced-e7b92ab4ebd1.png"/>
        </item>
        <item>
            <title><![CDATA[US college scandal: How much difference does going to a top university make?]]></title>
            <description><![CDATA[Why parents fighting to get their children into a top college may get less than they expect.]]></description>
            <link>https://www.bbc.co.uk/news/world-us-canada-47963633</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/world-us-canada-47963633</guid>
            <pubDate>Tue, 07 May 2019 23:38:34 GMT</pubDate>
            <media:thumbnail width="976" height="549" url="http://c.files.bbci.co.uk/13FA9/production/_106633818_huffman_two.jpg"/>
        </item>
        <item>
            <title><![CDATA[Amanda Abbington on Twitter bans and The Son's West End transfer]]></title>
            <description><![CDATA[The Sherlock actress on her show's move to the West End and behaving on social media.]]></description>
            <link>https://www.bbc.co.uk/news/entertainment-arts-48131844</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/entertainment-arts-48131844</guid>
            <pubDate>Wed, 08 May 2019 00:07:11 GMT</pubDate>
            <media:thumbnail width="976" height="549" url="http://c.files.bbci.co.uk/E914/production/_106786695_gettyimages-944857244.jpg"/>
        </item>
        <item>
            <title><![CDATA[European elections: How The Brexit Party and Change UK compare]]></title>
            <description><![CDATA[What are these would-be political insurgents offering and what do they have in common?]]></description>
            <link>https://www.bbc.co.uk/news/uk-politics-48187302</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/uk-politics-48187302</guid>
            <pubDate>Wed, 08 May 2019 00:31:16 GMT</pubDate>
            <media:thumbnail width="976" height="549" url="http://c.files.bbci.co.uk/6204/production/_106829052_brexitpartysups.jpg"/>
        </item>
        <item>
            <title><![CDATA[The mums who took cocaine during play dates]]></title>
            <description><![CDATA[With cocaine use at a 10-year high, two mothers describe the impact of using on their lives.]]></description>
            <link>https://www.bbc.co.uk/news/uk-48147865</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/uk-48147865</guid>
            <pubDate>Wed, 08 May 2019 00:22:00 GMT</pubDate>
            <media:thumbnail width="976" height="549" url="http://c.files.bbci.co.uk/DB27/production/_106830165_cocaine3.jpg"/>
        </item>
        <item>
            <title><![CDATA[A really simple guide to the European elections]]></title>
            <description><![CDATA[Voters across the EU are about to go to the polls - find out who's involved and what's at stake.]]></description>
            <link>https://www.bbc.co.uk/news/world-europe-48186027</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/world-europe-48186027</guid>
            <pubDate>Wed, 08 May 2019 11:17:55 GMT</pubDate>
            <media:thumbnail width="976" height="549" url="http://c.files.bbci.co.uk/CAD2/production/_106822915_eu_simple_guide_976_v3.png"/>
        </item>
        <item>
            <title><![CDATA[The retail revolution: How mail order changed middle-class life]]></title>
            <description><![CDATA[By offering a range of goods at low prices, mail order helped transform middle-class life.]]></description>
            <link>https://www.bbc.co.uk/news/business-47954905</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/business-47954905</guid>
            <pubDate>Tue, 07 May 2019 23:04:24 GMT</pubDate>
            <media:thumbnail width="976" height="549" url="http://c.files.bbci.co.uk/13D4D/production/_106592218_9761350gettyimages-87226399.jpg"/>
        </item>
        <item>
            <title><![CDATA[Chelsea transfer ban: Fifa rejects Premier League club's appeal]]></title>
            <description><![CDATA[Chelsea boss Maurizio Sarri says it will be "not be easy" to challenge Liverpool and Manchester City next season, after an unsuccessful appeal against Fifa's transfer ban.]]></description>
            <link>https://www.bbc.co.uk/sport/football/48202945</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/sport/football/48202945</guid>
            <pubDate>Wed, 08 May 2019 14:09:30 GMT</pubDate>
            <media:thumbnail width="2048" height="1152" url="http://c.files.bbci.co.uk/12AC4/production/_105748467_gettyimages-1125473773.jpg"/>
        </item>
        <item>
            <title><![CDATA[Bolton Wanderers given 14 days by High Court to appoint administrator]]></title>
            <description><![CDATA[Bolton Wanderers are set to go into administration after the club appeared in the High Court over a £1.2m unpaid tax bill.]]></description>
            <link>https://www.bbc.co.uk/sport/football/48199290</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/sport/football/48199290</guid>
            <pubDate>Wed, 08 May 2019 11:34:46 GMT</pubDate>
            <media:thumbnail width="2048" height="1152" url="http://c.files.bbci.co.uk/FBF6/production/_106320546_bolton.jpg"/>
        </item>
        <item>
            <title><![CDATA[Watch: Archer makes early breakthrough for England]]></title>
            <description><![CDATA[Watch Jofra Archer remove Fakhar Zaman during England's one-day international against Pakistan at The Oval.]]></description>
            <link>https://www.bbc.co.uk/sport/av/cricket/48204665</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/sport/av/cricket/48204665</guid>
            <pubDate>Wed, 08 May 2019 13:55:56 GMT</pubDate>
            <media:thumbnail width="1024" height="576" url="http://c.files.bbci.co.uk/8E48/production/_106842463_p078m8gf.jpg"/>
        </item>
        <item>
            <title><![CDATA[Liverpool inspired, Barcelona unsettled - How Anfield makes near-impossible results reality ]]></title>
            <description><![CDATA[The magic of Anfield was key to Liverpool's stunning Champions League fightback against Barcelona, says their European Cup winning former defender Mark Lawrenson.]]></description>
            <link>https://www.bbc.co.uk/sport/football/48196082</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/sport/football/48196082</guid>
            <pubDate>Wed, 08 May 2019 06:16:01 GMT</pubDate>
            <media:thumbnail width="624" height="351" url="http://c.files.bbci.co.uk/F783/production/_106836336_liverpool.jpg"/>
        </item>
        <item>
            <title><![CDATA['The whole team is in beast mode' - 90-second freestyle rap on Liverpool's title chances]]></title>
            <description><![CDATA[UK grime artist and Liverpool fan Big Zuu reps his club's Premier League title chances in a 90-second freestyle.]]></description>
            <link>https://www.bbc.co.uk/sport/av/football/48150125</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/sport/av/football/48150125</guid>
            <pubDate>Fri, 03 May 2019 12:22:02 GMT</pubDate>
            <media:thumbnail width="1920" height="1080" url="http://c.files.bbci.co.uk/159C6/production/_106781588_bigzuuthumbnail-1.jpg"/>
        </item>
        <item>
            <title><![CDATA[Spurs' Vertonghen fit for second leg against Ajax]]></title>
            <description><![CDATA[Tottenham defender Jan Vertonghen could play in a protective mask in the Champions League semi-final second leg against Ajax.]]></description>
            <link>https://www.bbc.co.uk/sport/football/48192369</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/sport/football/48192369</guid>
            <pubDate>Tue, 07 May 2019 16:51:29 GMT</pubDate>
            <media:thumbnail width="2048" height="1152" url="http://c.files.bbci.co.uk/14A0C/production/_106829448_jan_vertonghen_getty.jpg"/>
        </item>
        <item>
            <title><![CDATA[The night the US bombed a Chinese embassy]]></title>
            <description><![CDATA[The CIA blamed bad mapping but China has never believed that the strikes were an accident.]]></description>
            <link>https://www.bbc.co.uk/news/world-europe-48134881</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/world-europe-48134881</guid>
            <pubDate>Mon, 06 May 2019 23:12:57 GMT</pubDate>
            <media:thumbnail width="1537" height="865" url="http://c.files.bbci.co.uk/13E71/production/_106812518_shutterstock_editorial_8355819c_huge.jpg"/>
        </item>
        <item>
            <title><![CDATA[Venezuela crisis: The political battle and the people caught in the middle]]></title>
            <description><![CDATA[The latest protests in Venezuela are just the most recent chapter in a long-running crisis.]]></description>
            <link>https://www.bbc.co.uk/news/world-latin-america-48030691</link>
            <guid isPermaLink="true">https://www.bbc.co.uk/news/world-latin-america-48030691</guid>
            <pubDate>Fri, 03 May 2019 23:12:45 GMT</pubDate>
            <media:thumbnail width="2048" height="1152" url="http://c.files.bbci.co.uk/CA10/production/_106782715_gettyimages-1140584161.jpg"/>
        </item>
    </channel>
</rss>
    `;
    return data;
}

