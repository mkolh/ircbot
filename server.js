var irc = require('irc');


//change to the channel of your choice
var channel = "##mkolh";

var config = {
	channels: [channel],
	server: "irc.freenode.net",
	botName: "TESTBOT3000"
};

var bot = new irc.Client(config.server, config.botName, {
	channels: config.channels
});

//will be the greeting with the list of USA stuff
// bot.addListener("join", function(channel, who){
// 	bot.say(who + " , what would you like to learn?" + "\n" + list);
// });

bot.addListener("message", function(from, to, text, message){
	bot.say(config.channels[0], "Dumb-dumb says:");
});

bot.addListener("message", function(from, to, text, message) {
	console.log(message);
	bot.say(config.channels[0], message.args[1]);
});


var USA = {
  "intro": {
    "background": {
      "text": "Britain's American colonies broke with the mother country in 1776 and were recognized as the new nation of the United States of America following the Treaty of Paris in 1783. During the 19th and 20th centuries, 37 new states were added to the original 13 as the nation expanded across the North American continent and acquired a number of overseas possessions. The two most traumatic experiences in the nation's history were the Civil War (1861-65), in which a northern Union of states defeated a secessionist Confederacy of 11 southern slave states, and the Great Depression of the 1930s, an economic downturn during which about a quarter of the labor force lost its jobs. Buoyed by victories in World Wars I and II and the end of the Cold War in 1991, the US remains the world''s most powerful nation state. Since the end of World War II, the economy has achieved relatively steady growth, low unemployment and inflation, and rapid advances in technology."
    }
  },
  "geo": {
    "location": {
      "text": "North America, bordering both the North Atlantic Ocean and the North Pacific Ocean, between Canada and Mexico"
    },
    "geographic_coordinates": {
      "text": "38 00 N, 97 00 W"
    },
    "map_references": {
      "text": "North America"
    },
    "area": {
      "total": "9,826,675 sq km",
      "land": "9,161,966 sq km",
      "water": "664,709 sq km",
      "note": "includes only the 50 states and District of Columbia"
    },
    "area_comparative": {
      "text": "about half the size of Russia; about three-tenths the size of Africa; about half the size of South America (or slightly larger than Brazil); slightly larger than China; more than twice the size of the European Union"
    },
    "land_boundaries": {
      "total": "12,034 km",
      "border_countries": "Canada 8,893 km (including 2,477 km with Alaska), Mexico 3,141 km",
      "note": "US Naval Base at Guantanamo Bay, Cuba is leased by the US and is part of Cuba; the base boundary is 28 km"
    },
    "coastline": {
      "text": "19,924 km"
    },
    "maritime_claims": {
      "territorial_sea": "12 nm",
      "contiguous_zone": "24 nm",
      "exclusive_economic_zone": "200 nm",
      "continental_shelf": "not specified"
    },
    "climate": {
      "text": "mostly temperate, but tropical in Hawaii and Florida, arctic in Alaska, semiarid in the great plains west of the Mississippi River, and arid in the Great Basin of the southwest; low winter temperatures in the northwest are ameliorated occasionally in January and February by warm chinook winds from the eastern slopes of the Rocky Mountains"
    },
    "terrain": {
      "text": "vast central plain, mountains in west, hills and low mountains in east; rugged mountains and broad river valleys in Alaska; rugged, volcanic topography in Hawaii"
    },
    "elevation_extremes": {
      "lowest_point": "Death Valley -86 m",
      "highest_point": "Mount McKinley (Denali) 6,194 m (highest point in North America)",
      "note": "the peak of Mauna Kea (4,207 m above sea level) on the island of Hawaii rises about 10,200 m above the Pacific Ocean floor; by this measurement, it is the world's tallest mountain - higher than Mount Everest (8,850 m), which is recognized as the tallest mountain above sea level"
    },
    "natural_resources": {
      "text": "coal, copper, lead, molybdenum, phosphates, rare earth elements, uranium, bauxite, gold, iron, mercury, nickel, potash, silver, tungsten, zinc, petroleum, natural gas, timber",
      "note": "the US has the world's largest coal reserves with 491 billion short tons accounting for 27% of the world's total"
    },
    "land_use": {
      "arable_land": "16.29%",
      "permanent_crops": "0.26%",
      "other": "83.44% (2011)"
    },
    "irrigated_land": {
      "text": "266,440 sq km (2007)"
    },
    "total_renewable_water_resources": {
      "text": "3,069 cu km (2011)"
    },
    "freshwater_withdrawal_domestic_industrial_agricultural": {
      "total": "478.4  cu km/yr (14%/46%/40%)",
      "per_capita": "1,583  cu m/yr (2005)"
    },
    "natural_hazards": {
      "text": "tsunamis; volcanoes; earthquake activity around Pacific Basin; hurricanes along the Atlantic and Gulf of Mexico coasts; tornadoes in the Midwest and Southeast; mud slides in California; forest fires in the west; flooding; permafrost in northern Alaska, a major impediment to development",
      "volcanism": "volcanic activity in the Hawaiian Islands, Western Alaska, the Pacific Northwest, and in the Northern Mariana Islands; both Mauna Loa (elev. 4,170 m) in Hawaii and Mount Rainier (elev. 4,392 m) in Washington have been deemed \"Decade Volcanoes\" by the International Association of Volcanology and Chemistry of the Earth's Interior, worthy of study due to their explosive history and close proximity to human populations; Pavlof (elev. 2,519 m) is the most active volcano in Alaska's Aleutian Arc and poses a significant threat to air travel since the area constitutes a major flight path between North America and East Asia; St. Helens (elev. 2,549 m), famous for the devastating 1980 eruption, remains active today; numerous other historically active volcanoes exist, mostly concentrated in the Aleutian arc and Hawaii; they include: in Alaska: Aniakchak, Augustine, Chiginagak, Fourpeaked, Iliamna, Katmai, Kupreanof, Martin, Novarupta, Redoubt, Spurr, Wrangell; in Hawaii: Trident, Ugashik-Peulik, Ukinrek Maars, Veniaminof; in the Northern Mariana Islands: Anatahan; and in the Pacific Northwest: Mount Baker, Mount Hood"
    },
    "environment_current_issues": {
      "text": "air pollution resulting in acid rain in both the US and Canada; large emitter of carbon dioxide from the burning of fossil fuels; water pollution from runoff of pesticides and fertilizers; limited natural freshwater resources in much of the western part of the country require careful management; desertification"
    },
    "environment_international_agreements": {
      "party_to": "Air Pollution, Air Pollution-Nitrogen Oxides, Antarctic-Environmental Protocol, Antarctic-Marine Living Resources, Antarctic Seals, Antarctic Treaty, Climate Change, Desertification, Endangered Species, Environmental Modification, Marine Dumping, Marine Life Conservation, Ozone Layer Protection, Ship Pollution, Tropical Timber 83, Tropical Timber 94, Wetlands, Whaling",
      "signed_but_not_ratified": "Air Pollution-Persistent Organic Pollutants, Air Pollution-Volatile Organic Compounds, Biodiversity, Climate Change-Kyoto Protocol, Hazardous Wastes"
    },
    "geography_note": {
      "text": "world's third-largest country by size (after Russia and Canada) and by population (after China and India); Mt. McKinley is highest point in North America and Death Valley the lowest point on the continent"
    }
  },
  "people": {
    "nationality": {
      "noun": "American(s)",
      "adjective": "American"
    },
    "ethnic_groups": {
      "text": "white 79.96%, black 12.85%, Asian 4.43%, Amerindian and Alaska native 0.97%, native Hawaiian and other Pacific islander 0.18%, two or more races 1.61% (July 2007 estimate)",
      "note": "a separate listing for Hispanic is not included because the US Census Bureau considers Hispanic to mean persons of Spanish/Hispanic/Latino origin including those of Mexican, Cuban, Puerto Rican, Dominican Republic, Spanish, and Central or South American origin living in the US who may be of any race or ethnic group (white, black, Asian, etc.); about 15.1% of the total US population is Hispanic"
    },
    "languages": {
      "text": "English 82.1%, Spanish 10.7%, other Indo-European 3.8%, Asian and Pacific island 2.7%, other 0.7% (2000 census)",
      "note": "the US has no official national language, but English has acquired official status in 28 of the 50 states; Hawaiian is an official language in the state of Hawaii"
    },
    "religions": {
      "text": "Protestant 51.3%, Roman Catholic 23.9%, Mormon 1.7%, other Christian 1.6%, Jewish 1.7%, Buddhist 0.7%, Muslim 0.6%, other or unspecified 2.5%, unaffiliated 12.1%, none 4% (2007 est.)"
    },
    "population": {
      "text": "316,668,567 (July 2013 est.)"
    },
    "age_structure": {
      "0_14_years": "20% (male 32,344,207/female 31,006,688)",
      "15_24_years": "13.7% (male 22,082,128/female 21,157,025)",
      "25_54_years": "40.2% (male 63,802,736/female 63,581,749)",
      "55_64_years": "12.3% (male 18,699,338/female 20,097,791)",
      "65_years_and_over": "13.9% (male 19,122,853/female 24,774,052) (2013 est.)"
    },
    "dependency_ratios": {
      "total_dependency_ratio": "50.4 %",
      "youth_dependency_ratio": "29.4 %",
      "elderly_dependency_ratio": "21 %",
      "potential_support_ratio": "4.8 (2013)"
    },
    "median_age": {
      "total": "37.2 years",
      "male": "35.9 years",
      "female": "38.5 years (2013 est.)"
    },
    "population_growth_rate": {
      "text": "0.9% (2013 est.)"
    },
    "birth_rate": {
      "text": "13.66 births/1,000 population (2013 est.)"
    },
    "death_rate": {
      "text": "8.39 deaths/1,000 population (2013 est.)"
    },
    "net_migration_rate": {
      "text": "3.64 migrant(s)/1,000 population (2013 est.)"
    },
    "urbanization": {
      "urban_population": "82% of total population (2010)",
      "rate_of_urbanization": "1.2% annual rate of change (2010-15 est.)"
    },
    "major_urban_areas_population": {
      "text": "New York-Newark 19.3 million; Los Angeles-Long Beach-Santa Ana 12.675 million; Chicago 9.134 million; Miami 5.699 million; WASHINGTON, D.C. (capital) 4.421 million (2009)"
    },
    "sex_ratio": {
      "at_birth": "1.05 male(s)/female",
      "0_14_years": "1.04 male(s)/female",
      "15_24_years": "1.04 male(s)/female",
      "25_54_years": "1 male(s)/female",
      "55_64_years": "0.93 male(s)/female",
      "65_years_and_over": "0.77 male(s)/female",
      "total_population": "0.97 male(s)/female (2013 est.)"
    },
    "mother_s_mean_age_at_first_birth": {
      "text": "25 (2006 est.)"
    },
    "maternal_mortality_rate": {
      "text": "21 deaths/100,000 live births (2010)"
    },
    "infant_mortality_rate": {
      "total": "5.9 deaths/1,000 live births",
      "male": "6.55 deaths/1,000 live births",
      "female": "5.22 deaths/1,000 live births (2013 est.)"
    },
    "life_expectancy_at_birth": {
      "total_population": "78.62 years",
      "male": "76.19 years",
      "female": "81.17 years (2013 est.)"
    },
    "total_fertility_rate": {
      "text": "2.06 children born/woman (2013 est.)"
    },
    "contraceptive_prevalence_rate": {
      "text": "76.4%",
      "note": "percent of women aged 15-44 (2010)"
    },
    "health_expenditures": {
      "text": "17.9% of GDP (2010)"
    },
    "physicians_density": {
      "text": "2.67 physicians/1,000 population (2004)"
    },
    "hospital_bed_density": {
      "text": "3 beds/1,000 population (2009)"
    },
    "drinking_water_source": {
      "improved": "urban: 100% of population; rural: 94% of population; total: 99% of population",
      "unimproved": "urban: 0% of population; rural: 6% of population; total: 1% of population (2010 est.)"
    },
    "sanitation_facility_access": {
      "improved": "urban: 100% of population; rural: 99% of population; total: 100% of population",
      "unimproved": "urban: 0% of population; rural: 1% of population; total: 0% of population (2010 est.)"
    },
    "hiv_aids_adult_prevalence_rate": {
      "text": "0.6% (2009 est.)"
    },
    "hiv_aids_people_living_with_hiv_aids": {
      "text": "1.2 million (2009 est.)"
    },
    "hiv_aids_deaths": {
      "text": "17,000 (2009 est.)"
    },
    "obesity_adult_prevalence_rate": {
      "text": "33% (2008)"
    },
    "children_under_the_age_of_5_years_underweight": {
      "text": "1.3% (2004)"
    },
    "education_expenditures": {
      "text": "5.4% of GDP (2009)"
    },
    "literacy": {
      "definition": "age 15 and over can read and write",
      "total_population": "99%",
      "male": "99%",
      "female": "99% (2003 est.)"
    },
    "school_life_expectancy_primary_to_tertiary_education": {
      "total": "17 years",
      "male": "16 years",
      "female": "18 years (2010)"
    },
    "unemployment_youth_ages_15_24": {
      "total": "17.3%",
      "male": "18.7%",
      "female": "15.7% (2011)"
    }
  },
  "govt": {
    "country_name": {
      "conventional_long_form": "United States of America",
      "conventional_short_form": "United States",
      "abbreviation": "US or USA"
    },
    "government_type": {
      "text": "Constitution-based federal republic; strong democratic tradition"
    },
    "capital": {
      "name": "Washington, DC",
      "geographic_coordinates": "38 53 N, 77 02 W",
      "time_difference": "UTC-5 (during Standard Time)",
      "daylight_saving_time": "+1hr, begins second Sunday in March; ends first Sunday in November",
      "note": "the 50 United States cover six time zones"
    },
    "administrative_divisions": {
      "text": "50 states and 1 district*; Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, District of Columbia*, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina, North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina, South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, Wyoming"
    },
    "dependent_areas": {
      "text": "American Samoa, Baker Island, Guam, Howland Island, Jarvis Island, Johnston Atoll, Kingman Reef, Midway Islands, Navassa Island, Northern Mariana Islands, Palmyra Atoll, Puerto Rico, Virgin Islands, Wake Island",
      "note": "from 18 July 1947 until 1 October 1994, the US administered the Trust Territory of the Pacific Islands; it entered into a political relationship with all four political entities: the Northern Mariana Islands is a commonwealth in political union with the US (effective 3 November 1986); the Republic of the Marshall Islands signed a Compact of Free Association with the US (effective 21 October 1986); the Federated States of Micronesia signed a Compact of Free Association with the US (effective 3 November 1986); Palau concluded a Compact of Free Association with the US (effective 1 October 1994)"
    },
    "independence": {
      "text": "4 July 1776 (declared); 3 September 1783 (recognized by Great Britain)"
    },
    "national_holiday": {
      "text": "Independence Day, 4 July (1776)"
    },
    "constitution": {
      "text": "17 September 1787, effective 4 March 1789; amended many times, most recently in 1992"
    },
    "legal_system": {
      "text": "common law system based on English common law at the federal level; state legal systems based on common law except Louisiana, which is based on Napoleonic civil code; judicial review of legislative acts"
    },
    "international_law_organization_participation": {
      "text": "withdrew acceptance of compulsory ICJ jurisdiction in 2005; withdrew acceptance of ICCt jurisdiction in 2002"
    },
    "suffrage": {
      "text": "18 years of age; universal"
    },
    "executive_branch": {
      "chief_of_state": "President Barack H. OBAMA (since 20 January 2009); Vice President Joseph R. BIDEN (since 20 January 2009); note - the president is both the chief of state and head of government",
      "head_of_government": "President Barack H. OBAMA (since 20 January 2009); Vice President Joseph R. BIDEN (since 20 January 2009)",
      "cabinet": "Cabinet appointed by the president with Senate approval",
      "elections": "president and vice president elected on the same ticket by a college of representatives who are elected directly from each state; president and vice president serve four-year terms (eligible for a second term); election last held 6 November 2012 (next to be held on 8 November 2016)",
      "election_results": "Barack H. OBAMA reelected president; percent of popular vote - Barack H. OBAMA 50.6%, Mitt ROMNEY 47.9%, other 1.5%;"
    },
    "legislative_branch": {
      "text": "bicameral Congress consists of the Senate (100 seats, 2 members elected from each state by popular vote to serve six-year terms; one-third elected every two years) and the House of Representatives (435 seats; members directly elected by popular vote to serve two-year terms)",
      "elections": "Senate - last held on 6 November 2012 (next to be held on 4 November 2014); House of Representatives - last held on 6 November 2012 (next to be held on 4 November 2014)",
      "election_results": "Senate - percent of vote by party - NA; seats by party - Democratic Party 54, Republican Party 45, independent 1; House of Representatives - percent of vote by party - NA; seats by party - Democratic Party 201, Republican Party 234"
    },
    "judicial_branch": {
      "highest_courts": "US Supreme Court (consists of 9 justices - the chief justice and 8 associate justices) note - The US court system consists of the federal court system and the state court systems; although each court system is responsible for hearing certain types of cases, neither is completely independent of the other, and the systems often interact",
      "judge_selection_and_term_of_office": "president nominates, and with the advice and consent of the Senate, appoints Supreme Court justices; justices appointed for life",
      "subordinate_courts": "Courts of Appeal (includes the US Court of Appeal for the Federal District and 12 regional appeals courts); 94 federal district courts in 50 states and territories"
    },
    "political_parties_and_leaders": {
      "text": "Democratic Party [Debbie Wasserman SCHULTZ]; Green Party; Libertarian Party [Mark HINKLE]; Republican Party [Reince PRIEBUS]"
    },
    "political_pressure_groups_and_leaders": {
      "text": "environmentalists; business groups; labor unions; churches; ethnic groups; political action committees or PACs; health groups; education groups; civic groups; youth groups; transportation groups; agricultural groups; veterans groups; women's groups; reform lobbies"
    },
    "international_organization_participation": {
      "text": "ADB (nonregional member), AfDB (nonregional member), ANZUS, APEC, Arctic Council, ARF, ASEAN (dialogue partner), Australia Group, BIS, BSEC (observer), CBSS (observer), CD, CE (observer), CERN (observer), CICA (observer), CP, EAPC, EAS, EBRD, EITI (implementing country), FAO, FATF, G-20, G-5, G-7, G-8, G-10, IADB, IAEA, IBRD, ICAO, ICC (national committees), ICRM, IDA, IEA, IFAD, IFC, IFRCS, IGAD (partners), IHO, ILO, IMF, IMO, IMSO, Interpol, IOC, IOM, ISO, ITSO, ITU, ITUC (NGOs), MIGA, MINUSTAH, MONUSCO, NAFTA, NATO, NEA, NSG, OAS, OECD, OPCW, OSCE, Paris Club, PCA, PIF (partner), SAARC (observer), SELEC (observer), SICA (observer), SPC, UN, UNCTAD, UNESCO, UNHCR, UNITAR, UNMIL, UNMISS, UNRWA, UNSC (permanent), UNTSO, UPU, WCO, WHO, WIPO, WMO, WTO, ZC"
    },
    "flag_description": {
      "text": "13 equal horizontal stripes of red (top and bottom) alternating with white; there is a blue rectangle in the upper hoist-side corner bearing 50 small, white, five-pointed stars arranged in nine offset horizontal rows of six stars (top and bottom) alternating with rows of five stars; the 50 stars represent the 50 states, the 13 stripes represent the 13 original colonies; the blue stands for loyalty, devotion, truth, justice, and friendship; red symbolizes courage, zeal, and fervency, while white denotes purity and rectitude of conduct; commonly referred to by its nickname of Old Glory",
      "note": "the design and colors have been the basis for a number of other flags, including Chile, Liberia, Malaysia, and Puerto Rico"
    },
    "national_symbols": {
      "text": "bald eagle"
    },
    "national_anthem": {
      "name": "\"The Star-Spangled Banner\"",
      "lyrics_music": "Francis Scott KEY/John Stafford SMITH",
      "note": "adopted 1931; during the War of 1812, after witnessing the successful American defense of Fort McHenry in Baltimore following British naval bombardment, Francis Scott KEY wrote the lyrics to what would become the national anthem; the lyrics were set to the tune of \"The Anacreontic Song\"; only the first verse is sung"
    }
  },
  "econ": {
    "economy_overview": {
      "text": "The US has the largest and most technologically powerful economy in the world, with a per capita GDP of $49,800. In this market-oriented economy, private individuals and business firms make most of the decisions, and the federal and state governments buy needed goods and services predominantly in the private marketplace. US business firms enjoy greater flexibility than their counterparts in Western Europe and Japan in decisions to expand capital plant, to lay off surplus workers, and to develop new products. At the same time, they face higher barriers to enter their rivals' home markets than foreign firms face entering US markets. US firms are at or near the forefront in technological advances, especially in computers and in medical, aerospace, and military equipment; their advantage has narrowed since the end of World War II. The onrush of technology largely explains the gradual development of a \"two-tier labor market\" in which those at the bottom lack the education and the professional/technical skills of those at the top and, more and more, fail to get comparable pay raises, health insurance coverage, and other benefits. Since 1975, practically all the gains in household income have gone to the top 20% of households. Since 1996, dividends and capital gains have grown faster than wages or any other category of after-tax income. Imported oil accounts for nearly 55% of US consumption. Crude oil prices doubled between 2001 and 2006, the year home prices peaked; higher gasoline prices ate into consumers' budgets and many individuals fell behind in their mortgage payments. Oil prices climbed another 50% between 2006 and 2008, and bank foreclosures more than doubled in the same period. Besides dampening the housing market, soaring oil prices caused a drop in the value of the dollar and a deterioration in the US merchandise trade deficit, which peaked at $840 billion in 2008. The sub-prime mortgage crisis, falling home prices, investment bank failures, tight credit, and the global economic downturn pushed the United States into a recession by mid-2008. GDP contracted until the third quarter of 2009, making this the deepest and longest downturn since the Great Depression. To help stabilize financial markets, in October 2008 the US Congress established a $700 billion Troubled Asset Relief Program (TARP). The government used some of these funds to purchase equity in US banks and industrial corporations, much of which had been returned to the government by early 2011. In January 2009 the US Congress passed and President Barack OBAMA signed a bill providing an additional $787 billion fiscal stimulus to be used over 10 years - two-thirds on additional spending and one-third on tax cuts - to create jobs and to help the economy recover. In 2010 and 2011, the federal budget deficit reached nearly 9% of GDP. In 2012 the federal government reduced the growth of spending and the deficit shrank to 7.6% of GDP. Wars in Iraq and Afghanistan required major shifts in national resources from civilian to military purposes and contributed to the growth of the budget deficit and public debt. Through 2011, the direct costs of the wars totaled nearly $900 billion, according to US government figures. US revenues from taxes and other sources are lower, as a percentage of GDP, than those of most other countries. In March 2010, President OBAMA signed into law the Patient Protection and Affordable Care Act, a health insurance reform that will extend coverage to an additional 32 million American citizens by 2016, through private health insurance for the general population and Medicaid for the impoverished. Total spending on health care - public plus private - rose from 9.0% of GDP in 1980 to 17.9% in 2010. In July 2010, the president signed the DODD-FRANK Wall Street Reform and Consumer Protection Act, a law designed to promote financial stability by protecting consumers from financial abuses, ending taxpayer bailouts of financial firms, dealing with troubled banks that are \"too big to fail,\" and improving accountability and transparency in the financial system - in particular, by requiring certain financial derivatives to be traded in markets that are subject to government regulation and oversight. In December 2012, the Federal Reserve Board announced plans to purchase $85 billion per month of mortgage-backed and Treasury securities in an effort to hold down long-term interest rates, and to keep short term rates near zero until unemployment drops to 6.5% from the December rate of 7.8%, or until inflation rises above 2.5%. Long-term problems include stagnation of wages for lower-income families, inadequate investment in deteriorating infrastructure, rapidly rising medical and pension costs of an aging population, energy shortages, and sizable current account and budget deficits - including significant budget shortages for state governments."
    },
    "gdp_purchasing_power_parity": {
      "text": "$15.94 trillion (2012 est.); $15.6 trillion (2011 est.); $15.32 trillion (2010 est.)",
      "note": "data are in 2012 US dollars"
    },
    "gdp_official_exchange_rate": {
      "text": "$15.68 trillion (2012 est.)"
    },
    "gdp_real_growth_rate": {
      "text": "2.2% (2012 est.); 1.8% (2011 est.); 2.4% (2010 est.)"
    },
    "gdp_per_capita_ppp": {
      "text": "$50,700 (2012 est.); $50,000 (2011 est.); $49,500 (2010 est.)",
      "note": "data are in 2012 US dollars"
    },
    "gross_national_saving": {
      "text": "10.1% of GDP (2012 est.); 9.2% of GDP (2011 est.); 8.9% of GDP (2010 est.)"
    },
    "gdp_composition_by_end_use": {
      "household_consumption": "70.9%",
      "government_consumption": "19.5%",
      "investment_in_fixed_capital": "12.8%",
      "investment_in_inventories": "0.4%",
      "exports_of_goods_and_services": "13.9%",
      "imports_of_goods_and_services": "-17.5% (2012 est.)"
    },
    "gdp_composition_by_sector_of_origin": {
      "agriculture": "1.1%",
      "industry": "19.2%",
      "services": "79.7% (2012 est.)"
    },
    "agriculture_products": {
      "text": "wheat, corn, other grains, fruits, vegetables, cotton; beef, pork, poultry, dairy products; fish; forest products"
    },
    "industries": {
      "text": "highly diversified, world leading, high-technology innovator, second largest industrial output in world; petroleum, steel, motor vehicles, aerospace, telecommunications, chemicals, electronics, food processing, consumer goods, lumber, mining"
    },
    "industrial_production_growth_rate": {
      "text": "3.2% (2012 est.)"
    },
    "labor_force": {
      "text": "155 million",
      "note": "includes unemployed (2012 est.)"
    },
    "labor_force_by_occupation": {
      "farming_forestry_and_fishing": "0.7%",
      "manufacturing_extraction_transportation_and_crafts": "20.3%",
      "managerial_professional_and_technical": "37.3%",
      "sales_and_office": "24.2%",
      "other_services": "17.6%",
      "note": "figures exclude the unemployed (2009)"
    },
    "unemployment_rate": {
      "text": "8.1% (2012 est.); 9% (2011 est.)"
    },
    "population_below_poverty_line": {
      "text": "15.1% (2010 est.)"
    },
    "household_income_or_consumption_by_percentage_share": {
      "lowest_10%": "2%",
      "highest_10%": "30% (2007 est.)"
    },
    "distribution_of_family_income_gini_index": {
      "text": "45 (2007); 40.8 (1997)"
    },
    "budget": {
      "revenues": "$2.449 trillion",
      "expenditures": "$3.538 trillion",
      "note": "for the US, revenues exclude social contributions of approximately $1.0 trillion; expenditures exclude social benefits of approximately $2.3 trillion (2012 est.)"
    },
    "taxes_and_other_revenues": {
      "text": "15.6% of GDP",
      "note": "excludes contributions for social security and other programs; if social contributions were added, taxes and other revenues would amount to approximately 22% of GDP (2012 est.)"
    },
    "budget_surplus_or_deficit": {
      "text": "-6.9% of GDP (2012 est.)"
    },
    "public_debt": {
      "text": "72.5% of GDP (2012 est.); 67.8% of GDP (2011 est.)",
      "note": "data cover only what the United States Treasury denotes as \"Debt Held by the Public,\" which includes all debt instruments issued by the Treasury that are owned by non-US Government entities; the data include Treasury debt held by foreign entities; the data exclude debt issued by individual US states, as well as intra-governmental debt; intra-governmental debt consists of Treasury borrowings from surpluses in the trusts for Federal Social Security, Federal Employees, Hospital Insurance (Medicare and Medicaid), Disability and Unemployment, and several other smaller trusts; if data for intra-government debt were added, \"Gross Debt\" would increase by about one-third of GDP"
    },
    "fiscal_year": {
      "text": "1 October - 30 September"
    },
    "inflation_rate_consumer_prices": {
      "text": "2.1% (2012 est.); 3.1% (2011 est.)"
    },
    "central_bank_discount_rate": {
      "text": "0.5% (31 December 2010); 0.5% (31 December 2009)"
    },
    "commercial_bank_prime_lending_rate": {
      "text": "3.25% (31 December 2012 est.); 3.25% (31 December 2011 est.)"
    },
    "stock_of_narrow_money": {
      "text": "$2.311 trillion (31 December 2012 est.); $2.01 trillion (31 December 2011 est.)"
    },
    "stock_of_broad_money": {
      "text": "$12.99 trillion (31 December 2011 est.); $12.07 trillion (31 December 2010 est.)"
    },
    "stock_of_domestic_credit": {
      "text": "$16.16 trillion (31 December 2012 est.); $15.61 trillion (31 December 2011 est.)"
    },
    "market_value_of_publicly_traded_shares": {
      "text": "$15.64 trillion (31 December 2011); $17.14 trillion (31 December 2010); $15.08 trillion (31 December 2009)"
    },
    "current_account_balance": {
      "text": "-$487.2 billion (2012 est.); -$465.9 billion (2011 est.)"
    },
    "exports": {
      "text": "$1.564 trillion (2012 est.); $1.497 trillion (2011 est.)"
    },
    "exports_commodities": {
      "text": "agricultural products (soybeans, fruit, corn) 9.2%, industrial supplies (organic chemicals) 26.8%, capital goods (transistors, aircraft, motor vehicle parts, computers, telecommunications equipment) 49.0%, consumer goods (automobiles, medicines) 15.0%"
    },
    "exports_partners": {
      "text": "Canada 18.9%, Mexico 14%, China 7.2%, Japan 4.5% (2012)"
    },
    "imports": {
      "text": "$2.299 trillion (2012 est.); $2.236 trillion (2011 est.)"
    },
    "imports_commodities": {
      "text": "agricultural products 4.9%, industrial supplies 32.9% (crude oil 8.2%), capital goods 30.4% (computers, telecommunications equipment, motor vehicle parts, office machines, electric power machinery), consumer goods 31.8% (automobiles, clothing, medicines, furniture, toys)"
    },
    "imports_partners": {
      "text": "China 19%, Canada 14.1%, Mexico 12%, Japan 6.4%, Germany 4.7% (2012)"
    },
    "reserves_of_foreign_exchange_and_gold": {
      "text": "$150.2 billion (31 December 2012 est.); $148 billion (31 December 2011 est.)"
    },
    "debt_external": {
      "text": "$15.93 trillion (31 December 2012); $15.51 trillion (31 December 2011)",
      "note": "approximately 4/5ths of US external debt is denominated in US dollars; foreign lenders have been willing to hold US dollar denominated debt instruments because they view the dollar as the world's reserve currency"
    },
    "stock_of_direct_foreign_investment_at_home": {
      "text": "$2.723 trillion (31 December 2012 est.); $2.548 trillion (31 December 2011 est.)"
    },
    "stock_of_direct_foreign_investment_abroad": {
      "text": "$4.507 trillion (31 December 2012 est.); $4.156 trillion (31 December 2011 est.)"
    },
    "exchange_rates": {
      "british_pounds_per_us_dollar": "0.6324 (2012 est.), 0.624 (2011 est.), 0.6472 (2010), 0.6175 (2009), 0.5302 (2008)",
      "canadian_dollars_per_us_dollar": "(2012 est.), 1.001 (2012 est.), 0.9895 (2011 est), 1.0302 (2010 est.), 1.1431 (2009), 1.0364 (2008)",
      "chinese_yuan_per_us_dollar": "(2011 est.), 6.311 (2012 est.), 6.4615 (20111 est.), 6.7703 (2010 est.), 6.8314 (2009), 6.9385 (2008)",
      "euros_per_us_dollar": "0.7838 (2012 est.), 0.7185 (2011 est.), 0.755 (2010 est.), 0.7198 (2009), 0.6827 (2008)",
      "japanese_yen_per_us_dollar": "79.42 (2012 est.), 79.81 (2011 est.), 87.78 (2010), 93.57 (2009), 103.58 (2008)"
    }
  },
  "energy": {
    "electricity_production": {
      "text": "4.12 trillion kWh (2010 est.)"
    },
    "electricity_consumption": {
      "text": "3.889 trillion kWh (2010 est.)"
    },
    "electricity_exports": {
      "text": "19.41 billion kWh (2010 est.)"
    },
    "electricity_imports": {
      "text": "45.23 billion kWh (2010 est.)"
    },
    "electricity_installed_generating_capacity": {
      "text": "1.025 billion kW (2010 est.)"
    },
    "electricity_from_fossil_fuels": {
      "text": "75.5% of total installed capacity (2010 est.)"
    },
    "electricity_from_nuclear_fuels": {
      "text": "9.9% of total installed capacity (2010 est.)"
    },
    "electricity_from_hydroelectric_plants": {
      "text": "7.7% of total installed capacity (2010 est.)"
    },
    "electricity_from_other_renewable_sources": {
      "text": "4.8% of total installed capacity (2010 est.)"
    },
    "crude_oil_production": {
      "text": "9.023 million bbl/day (2011 est.)"
    },
    "crude_oil_exports": {
      "text": "43,800 bbl/day (2009 est.)"
    },
    "crude_oil_imports": {
      "text": "9.013 million bbl/day (2009 est.)"
    },
    "crude_oil_proved_reserves": {
      "text": "20.68 billion bbl (1 January 2012 est.)"
    },
    "refined_petroleum_products_production": {
      "text": "17.88 million bbl/day (2009 est.)"
    },
    "refined_petroleum_products_consumption": {
      "text": "18.84 million bbl/day (2011 est.)"
    },
    "refined_petroleum_products_exports": {
      "text": "1.876 million bbl/day (2009 est.)"
    },
    "refined_petroleum_products_imports": {
      "text": "1.255 million bbl/day (2009 est.)"
    },
    "natural_gas_production": {
      "text": "651.3 billion cu m (2011 est.)"
    },
    "natural_gas_consumption": {
      "text": "689.9 billion cu m (2011 est.)"
    },
    "natural_gas_exports": {
      "text": "42.67 billion cu m (2011 est.)"
    },
    "natural_gas_imports": {
      "text": "97.86 billion cu m (2011 est.)"
    },
    "natural_gas_proved_reserves": {
      "text": "7.716 trillion cu m (1 January 2009 est.)"
    },
    "carbon_dioxide_emissions_from_consumption_of_energy": {
      "text": "5.61 billion Mt (2010 est.)"
    }
  },
  "comm": {
    "telephones_main_lines_in_use": {
      "text": "146 million (2011)"
    },
    "telephones_mobile_cellular": {
      "text": "290.3 million (2011)"
    },
    "telephone_system": {
      "general_assessment": "a large, technologically advanced, multipurpose communications system",
      "domestic": "a large system of fiber-optic cable, microwave radio relay, coaxial cable, and domestic satellites carries every form of telephone traffic; a rapidly growing cellular system carries mobile telephone traffic throughout the country",
      "international": "country code - 1; multiple ocean cable systems provide international connectivity; satellite earth stations - 61 Intelsat (45 Atlantic Ocean and 16 Pacific Ocean), 5 Intersputnik (Atlantic Ocean region), and 4 Inmarsat (Pacific and Atlantic Ocean regions) (2011)"
    },
    "broadcast_media": {
      "text": "4 major terrestrial TV networks with affiliate stations throughout the country, plus cable and satellite networks, independent stations, and a limited public broadcasting sector that is largely supported by private grants; overall, thousands of TV stations broadcasting; multiple national radio networks with many affiliate stations; while most stations are commercial, National Public Radio (NPR) has a network of some 600 member stations; satellite radio available; overall, nearly 15,000 radio stations operating (2008)"
    },
    "internet_country_code": {
      "text": ".us"
    },
    "internet_hosts": {
      "text": "505 million (2012); note - the US Internet total host count includes the following top level domain host addresses: .us, .com, .edu, .gov, .mil, .net, and .org"
    },
    "internet_users": {
      "text": "245 million (2009)"
    }
  },
  "trans": {
    "airports": {
      "text": "13,513 (2013)"
    },
    "airports_with_paved_runways": {
      "total": "5,054",
      "over_3_047_m": "189",
      "2_438_to_3_047_m": "235",
      "1_524_to_2_437_m": "1,478",
      "914_to_1_523_m": "2,249",
      "under_914_m": "903 (2013)"
    },
    "airports_with_unpaved_runways": {
      "total": "8,459",
      "over_3_047_m": "1",
      "2_438_to_3_047_m": "6",
      "1_524_to_2_437_m": "140",
      "914_to_1_523_m": "1,552",
      "under_914_m": "6,760 (2013)"
    },
    "heliports": {
      "text": "5,287 (2013)"
    },
    "pipelines": {
      "text": "natural gas 1,984,321 km; petroleum products 240,711 km (2013)"
    },
    "railways": {
      "total": "224,792 km",
      "standard_gauge": "224,792 km 1.435-m gauge (2007)"
    },
    "roadways": {
      "total": "6,506,204 km",
      "paved": "4,374,784 km (includes 75,238 km of expressways)",
      "unpaved": "2,131,420 km (2008)"
    },
    "waterways": {
      "text": "41,009 km (19,312 km used for commerce; Saint Lawrence Seaway of 3,769 km, including the Saint Lawrence River of 3,058 km, is shared with Canada) (2012)"
    },
    "merchant_marine": {
      "total": "393",
      "by_type": "barge carrier 6, bulk carrier 55, cargo 51, carrier 2, chemical tanker 30, container 84, passenger 18, passenger/cargo 56, petroleum tanker 35, refrigerated cargo 3, roll on/roll off 27, vehicle carrier 26",
      "foreign_owned": "85 (Australia 1, Bermuda 5, Denmark 31, France 4, Germany 5, Malaysia 2, Norway 17, Singapore 16, UK 4)",
      "registered_in_other_countries": "794 (Antigua and Barbuda 7, Australia 2, Bahamas 109, Belgium 1, Bermuda 26, Canada 10, Cayman Islands 57, Comoros 2, Cyprus 5, Georgia 1, Greece 8, Honduras 1, Hong Kong 44, Indonesia 2, Ireland 2, Isle of Man 1, Italy 23, Liberia 53, Malta 34, Marshall Islands 200, Netherlands 16, Norway 10, Panama 90, Portugal 4, Saint Kitts and Nevis 1, Saint Vincent and the Grenadines 18, Singapore 36, South Korea 8, Togo 1, UK 14, Vanuatu 2, unknown 6) (2010)"
    },
    "ports_and_terminals": {
      "cargo_ports_tonnage": "Baton Rouge, Corpus Christi, Hampton Roads, Houston, Long Beach, Los Angeles, New Orleans, New York, Plaquemines, Tampa, Texas City",
      "container_ports_teus": "Los Angeles (7,849,985), Long Beach (6,350,125), New York/New Jersey (5,265,058), Savannah (2,616,126), Oakland (2,236,244), Hampton Roads (2,083,278) (2008)",
      "cruise_departure_ports_passengers": "Miami (2,032,000), Port Everglades (1,277,000), Port Canaveral (1,189,000), Seattle (430,000), Long Beach (415,000) (2009)",
      "oil_terminals": "LOOP terminal, Haymark terminal"
    }
  },
  "military": {
    "military_branches": {
      "text": "United States Armed Forces: US Army, US Navy (includes Marine Corps), US Air Force, US Coast Guard; note - Coast Guard administered in peacetime by the Department of Homeland Security, but in wartime reports to the Department of the Navy (2013)"
    },
    "military_service_age_and_obligation": {
      "text": "18 years of age (17 years of age with parental consent) for male and female voluntary service; no conscription; maximum enlistment age 42 (Army), 27 (Air Force), 34 (Navy), 28 (Marines); service obligation 8 years, including 2-5 years active duty (Army), 2 years active (Navy), 4 years active (Air Force, Marines); DoD is eliminating prohibitions restricting women from assignments in units smaller than brigades or near combat units (2013)"
    },
    "manpower_available_for_military_service": {
      "males_age_16_49": "73,270,043",
      "females_age_16_49": "71,941,969 (2010 est.)"
    },
    "manpower_fit_for_military_service": {
      "males_age_16_49": "60,620,143",
      "females_age_16_49": "59,401,941 (2010 est.)"
    },
    "manpower_reaching_militarily_significant_age_annually": {
      "male": "2,161,727",
      "female": "2,055,685 (2010 est.)"
    },
    "military_expenditures": {
      "text": "4.6% of GDP (2010)"
    }
  },
  "issues": {
    "disputes_international": {
      "text": "the US has intensified domestic security measures and is collaborating closely with its neighbors, Canada and Mexico, to monitor and control legal and illegal personnel, transport, and commodities across the international borders; abundant rainfall in recent years along much of the Mexico-US border region has ameliorated periodically strained water-sharing arrangements; 1990 Maritime Boundary Agreement in the Bering Sea still awaits Russian Duma ratification; Canada and the United States dispute how to divide the Beaufort Sea and the status of the Northwest Passage but continue to work cooperatively to survey the Arctic continental shelf; The Bahamas and US have not been able to agree on a maritime boundary; US Naval Base at Guantanamo Bay is leased from Cuba and only mutual agreement or US abandonment of the area can terminate the lease; Haiti claims US-administered Navassa Island; US has made no territorial claim in Antarctica (but has reserved the right to do so) and does not recognize the claims of any other states; Marshall Islands claims Wake Island; Tokelau included American Samoa's Swains Island among the islands listed in its 2006 draft constitution"
    },
    "refugees_and_internally_displaced_persons": {
      "refugees_country_of_origin": "the US admitted 58,238 refugees during FY2012 including 15,070 (Bhutan); 14,160 (Burma); 12,163 (Iraq); 4,911 (Somalia); 1,948 (Cuba); 1,758 (Iran); 1,346 (Eritrea)"
    },
    "illicit_drugs": {
      "text": "world's largest consumer of cocaine (shipped from Colombia through Mexico and the Caribbean), Colombian heroin, and Mexican heroin and marijuana; major consumer of ecstasy and Mexican methamphetamine; minor consumer of high-quality Southeast Asian heroin; illicit producer of cannabis, marijuana, depressants, stimulants, hallucinogens, and methamphetamine; money-laundering center"
    }
  }
};

