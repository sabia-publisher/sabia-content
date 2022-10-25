export default {
    fontSize: 19, // number
    fontsOptions: [
        {
            label: 'Crimson',
            name: '"Crimson Text", Georgia, serif',
            link: 'https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap',
            defaultTextFont: true
        },
        {
            label: 'Inter',
            name: '"Inter", sans-serif',
            link: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap',
            defaultBaseFont: true
        },
        {
            label: 'Open Dyslexic',
            name: '"Open-Dyslexic", sans-serif',
            link: 'https://fonts.cdnfonts.com/css/open-dyslexic'
        },
        {
            label: 'Atkinson Hyperlegible',
            name: 'Atkinson Hyperlegible',
            link: 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap'
        }
    ],

    cssString: `
        main#rootComponent  {
            transition: background-color 200ms linear;
        }

        .cover.columns-double,
        .cover.columns-single {
            background-color: #C86400;
            background-image: url(https://firebasestorage.googleapis.com/v0/b/editora-sabia.appspot.com/o/capa-livro-clara_plataforma.jpg?alt=media&token=5623508a-dc06-404c-890a-5e32e593d830);
            background-size: cover;
        }

        .cover.columns-double .columnsArea,
        .cover.columns-single .columnsArea {
            column-count: initial !important;
        }

        #rootComponent.cover .viewer-nav {
            color: #fff !important
        }

        #rootComponent.cover .slider-target {
            display: none;
        }

        .gratitudes {
            background: var(--theme-primary, #FFFFFF) !important;
        }

        .introduction.columns-double.currentPage-1,
        .introduction.columns-single.currentPage-1,
        .introduction.columns-single.currentPage-2 {
            background: var(--theme-primary, #FFFFFF) !important;
        }

        .part-a.columns-double.currentPage-1,
        .part-a.columns-double.currentPage-2,
        .part-a.columns-single.currentPage-1,
        .part-a.columns-single.currentPage-2,
        .part-a.columns-single.currentPage-3 {
            background: var(--theme-primary, #FFFFFF) !important;
        }

        .part-b.columns-double.currentPage-1,
        .part-b.columns-double.currentPage-2,
        .part-b.columns-single.currentPage-1,
        .part-b.columns-single.currentPage-2,
        .part-b.columns-single.currentPage-3 {
            background: var(--theme-primary, #FFFFFF) !important;
        }

        .part-c.columns-double.currentPage-1,
        .part-c.columns-double.currentPage-2,
        .part-c.columns-single.currentPage-1,
        .part-c.columns-single.currentPage-2 {
            background: var(--theme-primary, #FFFFFF) !important;
        }

        .references.columns-double.currentPage-1,
        .references.columns-single.currentPage-1 {
            background: var(--theme-primary, #FFFFFF) !important;
        }
    `,

    references: [
        {
            "cit": "ESCOBAR, 2016",
            "ref": "ESCOBAR, Arturo. <strong>Autonomía y Diseño: la realización del comunal</strong>, Colômbia: Editorial Universidad del Cauca, 2016"
        }
    ],

    footnotes: [
        {
            "id": "footnote1",
            "text": "The Triennale di Milano is an exhibition of art and design held thirteen times between 1936 and 1996, and then again in 2016 and 2019. It shall happen again in 2022. The exhibition works in the “expo” format, in which a main theme is decided every three years and includes commissioned works and the nation's participation. The exhibition takes place in the Palazzo Dell’Arte in Milan."
        },
        {
            "id": "footnote2",
            "text": "Creativity professionals or “<em>creatives</em>” are people whose job involves creative work, such as designers, artists, writers, advertisers, artisans, confectioners, make-up artists, hairdressers, and so on. "
        },
        {
            "id": "footnote3",
            "text": "Autonomy refers to the freedom of an individual or community of choosing moral values, as well as deciding his/her/their fate."
        },
        {
            "id": "footnote4",
            "text": "The meaning of ontology is complex, but it generally refers to the philosophical study of the nature of being, becoming or existing. Escobar uses this concept to stress the power of design to create ways of being and doing through its processes and products. "
        },
        {
            "id": "footnote5",
            "text": "I must especially mention Puig della Bellacasa and her profound studies on the concepts of care. Her work is better discussed in the following chapters of this work."
        },
        {
            "id": "footnote6",
            "text": "Tony Fry coins the expression “defuturing” to express the quality of something that results in “negation of world futures for us, and many of our unknowing non-human others”. (2020, Fry, pg 10) In this case, it is used in its positive form, with a clearly contrary meaning. “Futuring” and “defuturing” are expressions that will be used again in the text. "
        },
        {
            "id": "footnote7",
            "text": "The launching happened on November 13th 2017, and can be accessed on the institution's Youtube channel: https://www.youtube.com/watch?v=1TMl-jeisXY&t=1s"
        },
        {
            "id": "footnote8",
            "text": "The so-called <em>biocentric</em> and <em>ecocentric</em> logics propose a radical shift from anthropocentrism (human at the center) to the centralization of life and life-sustaining systems, therefore, breaking the conceptual distance between us and the rest of agents in living systems. Eduardo Gudynas (2019) explains well the history of these terms in environmental movements, and we will look further into this discussion in this book. "
        },
        {
            "id": "footnote9",
            "text": "More on design thinking will be discussed in chapter 2.2. "
        },
        {
            "id": "footnote10",
            "text": "Defined as “the activities associated with the governance of a country or area, especially the debate between parties having power”. Retrieved from https://www.lexico.com/definition/ecology."
        },
        {
            "id": "footnote11",
            "text": "Ecology and economy have the same root in the Greek word oikos, meaning “house”. Economy originally meant “household management” and has subsequently come to refer to an economic system and its interactions. Economies are defined, analyzed, and managed at multiple scales, from households to countries to the entire planet, with attention given to economic interactions, stocks, flows, and benefits for people (Bubb et al., 2017, p. 10.)."
        },
        {
            "id": "footnote12",
            "text": "Objects (living or nonliving) that were not created by human hand."
        },
        {
            "id": "footnote13",
            "text": "This vision is represented by the Gaia hypothesis or Gaia theory, first outlined by James Lovelock and Lynn Margulis in the 1970’s.  The authors’ theory supports the argument that the natural systems of the Earth are self-regulating and adequate for the creation and maintenance of life on the planet. "
        },
        {
            "id": "footnote14",
            "text": "Characteristics of the exchanges between humans and the rest of Nature."
        },
        {
            "id": "footnote15",
            "text": "Term that refers to the geopolitical territory of those in the periphery of the economy. It alludes to the countries that are in the south of the globe (those in South America, Africa, and part of Asia) but can also include poorer regions in the northern hemisphere."
        },
        {
            "id": "footnote16",
            "text": "\"Third World\" is a term popularized during the Cold War (1947-1991) to define countries that remained non-aligned with either NATO or the Warsaw Pact. Countries such as Japan, Canada, South Korea, Western European nations, and their respective allies represented the First World, while the post-Soviet Union countries, Cuba, China, and their respective allies represented the Second World."
        },
        {
            "id": "footnote17",
            "text": "To refer to the culture and philosophical tradition that has its historical roots in early European cultures (e.g., Greco-Roman, Germanic), Judaic and Christian values and Enlightenment thinking and that has shaped Anglo-European and North American society (Zylstra et al., 2014)."
        },
        {
            "id": "footnote18",
            "text": "Also referenced by Gibson et al. (2013, p. 170) as resource curse but referring to the case of Norway and oil extraction."
        },
        {
            "id": "footnote19",
            "text": "Extractivism can be described as a geopolitical, economic, and social relations produced throughout history based on the extraction of natural elements to be sold on the Global Market."
        },
        {
            "id": "footnote20",
            "text": "Refers to a kind of agricultural production based on a single crop or livestock species, usually done in large quantities."
        },
        {
            "id": "footnote21",
            "text": "Global Market is the exchange of goods and services? on an international level. "
        },
        {
            "id": "footnote22",
            "text": "An age in which humanity searches for balanced living with the rest of Nature."
        },
        {
            "id": "footnote23",
            "text": "Climate justice refers to the unequally felt consequences of climate change. It has been proven that socially marginalized communities suffer a greater impact on natural disasters and environmental imbalances for their weaker social and economic protection and/or strong dependence on Nature for sustenance. "
        },
        {
            "id": "footnote24",
            "text": "Wicked problems were first defined by design theorists Horst Rittel and Melvin Webber in 1973 as complex social issues that are very difficult to solve because of their complexity. They differ from “tame” problems of mathematics and chess, since either their root or solution are systemic and hard to point out. This term is usually used in planning, policing, and design. "
        },
        {
            "id": "footnote25",
            "text": "Retrieved from https://unfccc.int/about-us/about-the-secretariat."
        },
        {
            "id": "footnote26",
            "text": "The report can be found on the link: https://unstats.un.org/sdgs/report/2020/The-Sustainable-Development-Goals-Report-2020.pdf"
        },
        {
            "id": "footnote27",
            "text": "The report can be found on the link: https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_Full_Report.pdf."
        },
        {
            "id": "footnote28",
            "text": "The SDGs 2020 report affirms that “the world continues to use natural resources unsustainably”, with a growing carbon footprint from 2010 to 2017 (p. 17) while the IPCC reports that “it is unequivocal that human influence has warmed the atmosphere, ocean and land”. The IPCC provides several analyses to support this affirmation, from the warmth of oceans to greenhouse gas concentration, and so on. "
        },
        {
            "id": "footnote29",
            "text": "Visions on containing deforestation, lowering methane emission and “phasing down” the Party's dependence on coal have been set on the Glasgow Declarations of Forest and Land Use. However, it is known that pursuing such deeds are complex systemic challenges that many times are not taken forward. On this subject, it is worth mentioning the case of Brazil, whose government was one of the countries who signed the Leaders' Declaration on Forests and Land Us on the 12th of November of 2021, committing to reduce drastically deforestation in the country and contain 30% of methane emissions by 2030 (information retrieved from https://ukcop26.org/glasgow-leaders-declaration-on-forests-and-land-use/, accessed on 18.12.2021) . However,  Brazilian leadership has not put forward relevant measures that support this objective. As Brazilian’s Government representatives announce the program “Floresta+”, official data from Deter (the country’s platform for measuring the Amazon Forest’s coverage) shows that, over the last two years under their watch, deforestation on the Amazon has grown immensely compared to previous years."
        },
        {
            "id": "footnote30",
            "text": "Reporter Felipe Werneck (2021) from Brazilian platform Observatório do Clima (Climate’s Observatory, in Portuguese) describes in an article the many difficulties for entering COP26 physical and virtual spaces. From long lines, poor Covid-safety measures and instability of the streaming platform, the organization body failed to make the event as “open and inclusive” as they promised. "
        },
        {
            "id": "footnote31",
            "text": "The Paiter-Suruí people tell they have been contacted for the first time in 1969 by Funai (National Indigenous Foundation of Brazil). Today, they are a community of 1,900 people living in 28 communities in the southern part of the Amazon. More on the Paiter-Suruí people on their platform: www.paiter-surui.com."
        },
        {
            "id": "footnote32",
            "text": "Here applies the technology that allows the substitution of coal and oil-based energy, such as solar and wind energy, or the spread of less polluting products such as electric cars or recycled phones."
        },
        {
            "id": "footnote33",
            "text": "The Yanomami are spread in 288 communities (data from 2011) living between the Brazilian and Venezuelan Amazon. They are hunter-farmers whose contact with the western society became more frequent only at the beginning of the 20th century. They are one of the largest Amerindian groups in the Amazon to have mostly held on to their traditional way of life, according to Albert (Kopenawa, 2010). More information on the already mentioned book by Kopenawa and Albert and at the portal https://pib.socioambiental.org/en/Povo:Yanomami (in Portuguese)."
        },
        {
            "id": "footnote34",
            "text": "The Kalungas say they are the biggest community of the kind in Brazil, summing up to 20.000 families today. They have nurtured quilombo culture and their sustainable ways of living, respecting their surroundings throughout the centuries. An article by Rute Pina (2021) on digital magazine Agência Pública provides more information on the importance of this community to maintenance of sustainable knowledge. More on Quilombo Kalunga on their website http://quilombokalunga.org.br/PKS/?page_id=25 (in Portuguese)."
        },
        {
            "id": "footnote35",
            "text": "Wangari Maathai (1940-2011) was the founder of the Green Belt Movement, an environmental organization that fights for climate justice and the environment. Their work is based on empowering communities, especially women, to maintain and improve their community’s environment and ways of living. Maathai wrote about human deep connections to Nature, especially with trees. More on the Green Belt Movement and Maathai on their platform http://www.greenbeltmovement.org/."
        },
        {
            "id": "footnote36",
            "text": "Biocentrism is the philosophy that all living beings have the same importance and have the right to live (Gudynas, 2019, p. 65)."
        },
        {
            "id": "footnote37",
            "text": "The influence of past philosophers on current culture is well proven. Fry (2011) states “Put simply, we all think and act out of philosophical heritage - we do not have to know anything about the Greeks, Kant, Hegel and so on, to be affected by their thinking.” (p. 80). "
        },
        {
            "id": "footnote38",
            "text": "The study of the nature of knowledge and ways of knowing."
        },
        {
            "id": "footnote39",
            "text": "To treat something or someone as an object, synonym of disregard for her/his/its feelings or well-being, or simply disrespect."
        },
        {
            "id": "footnote40",
            "text": "To know more, see Sealey-Huggins (2018)."
        },
        {
            "id": "footnote41",
            "text": "The Transition town network self defines as “a movement that has been growing since 2005.  It is about communities stepping up to address the big challenges they face by starting local.  By coming together, they are able to crowd-source solutions. They seek to nurture a caring culture, one focused on supporting each other, both as groups or as wider communities.” Retrieved from https://transitionnetwork.org/about-the-movement/what-is-transition/."
        },
        {
            "id": "footnote42",
            "text": "The Right to the City is “as a unified response to gentrification and a call to halt the displacement of low-income people, people of color, marginalized LGBTQ communities, and youths of color from their historic urban neighborhoods. We are a national alliance of racial, economic and environmental justice organizations.” As they state: “. . . a key resource and touchstone is ‘Le droit à la ville’ (The right to the city) a book published in 1968 by French intellectual and philosopher Henri Lefebvre. In the sphere of human rights, this powerful idea was adopted by the World Urban Forum and elaborated into the World Charter of the Right to the City in 2004.  Building from this powerful idea, international principles, and forward looking grassroots organizing, the Right To The City Alliance was established in January 2007.” Retrieved from https://righttothecity.org/about/mission-history/."
        },
        {
            "id": "footnote43",
            "text": "To know more about these initiatives, see https://transitionnetwork.org/ and https://righttothecity.org/."
        },
        {
            "id": "footnote44",
            "text": "Refers to the amount of carbon dioxide released into the atmosphere as a result of the activities of an individual, an organization, or a community."
        },
        {
            "id": "footnote45",
            "text": "The movements of Brazilian tribes are constant and strong, though continually overlooked by the Brazilian government. Updated news can be found on platforms such as the one from the Coalition of Indigenous Peoples of Brazil (APIB) (https://apiboficial.org/noticias/), National Indigenous Mobilization (https://mobilizacaonacionalindigena.wordpress.com/) and the Indigenous Media (https://www.midiaindia.com/)."
        },
        {
            "id": "footnote46",
            "text": "As Thomas Berry liked to identify himself, instead of the commonly used \"theologian\" or \"eco theologian\"."
        },
        {
            "id": "footnote47",
            "text": "Retrieved from https://therightsofnature.org/thomas-berrys-ten-principles-of-jurisprudence/"
        },
        {
            "id": "footnote48",
            "text": "Concept that derives from Marxist thought, it refers to the portion at which a commodity can be exchanged for other commodities."
        },
        {
            "id": "footnote49",
            "text": "Also deriving from Marxist thought, it refers to the tangible qualities of something, its values when applied for the satisfaction of a wish or need."
        },
        {
            "id": "footnote50",
            "text": "The “Movimento dos Trabalhadores Rurais Sem Terra no Brasil” or MST. Influential social movement organized in 1984, self defined as “a mass social movement, formed by rural workers and by all those who want to fight for land reform and against injustice and social inequality in rural areas.”Retrieved from https://www.mstbrazil.org/content/what-mst. "
        },
        {
            "id": "footnote51",
            "text": "American environmental scientist, educator, and writer who was an important contributor to the Limits of Growth (1972) report that exposed the limits of development (Beltrán, 2019, p. 117)."
        },
        {
            "id": "footnote52",
            "text": "Activities that are aimed at improving an individual’s mental or physical health by contact with Nature. "
        },
        {
            "id": "footnote53",
            "text": "As defends Latour (2004), one of the mistakes of environmentalists of the 20th century green movement might have been not engaging in complex, long but necessary, conversations. He writes <em>“In order to force ourselves to slow down, we will have to deal simultaneously with the sciences, with nature, and with politics, in the plural.”</em> (p. 03)"
        },
        {
            "id": "footnote54",
            "text": "The Merriam-Webster Dictionary defines value systems as “the system of established values, norms, or goals existing in a society”."
        },
        {
            "id": "footnote55",
            "text": "To a more complete argument on this matter, see full paper by Veselova, 2019."
        },
        {
            "id": "footnote56",
            "text": "Grassroots means “in the most basic level”, applied in this case it means “innovation carried out by non-experts”."
        },
        {
            "id": "footnote57",
            "text": "On the webpage of the DESIS (Design for Social Innovation and Sustainability) Network, in which Manzini takes part, there is a lot of information available on past and ongoing projects on this theme. Retrieved from https://www.desisnetwork.org/."
        },
        {
            "id": "footnote58",
            "text": "In case you don’t remember the meaning of this word, we have seen it as a concept that comes from the Mexican Zapatista movement as a vision of a <em>world in which many worlds fit</em>, meaning a society in which the profound respect for the other and their ways of being is primordial."
        },
        {
            "id": "footnote59",
            "text": "The idea of non-human actors is introduced by branches of philosophy known as object-oriented ontology and speculative realism, in which objects are an active part of the practical and moral construction of society and its cultures. The English scholar Timothy Morton, for example, considers the Fukushima nuclear disaster a “hyper-object”, or non-human actors that impose “scalar dilemmas” (Morton, 2013 as cited in Forlano, 2016). "
        },
        {
            "id": "footnote60",
            "text": "It is important to clarify what is meant by human-nonhuman assemblage since it plays a central role in this philosophy, and for that we can refer to a piece of her quoting of Bruno Latour (1992): <em>“We have been able to delegate to non-humans not only force as we have known it for centuries but also values, duties, and ethics. It is because of this morality that we, humans, behave so ethically, no matter how weak and wicked we feel we are. The sum of morality does not only remain stable but increases enormously with the population of non humans.”</em> (p. 232). This is considered by Latour the birth of nonhumanity, or an enormous group of actors that carry human values but are not human themselves (Forlano, 2016, p. 48)."
        },
        {
            "id": "footnote61",
            "text": "Retrieved from https://www.ellenmacarthurfoundation.org/circular-economy/concept/schools-of-thought#:~:text=The%20circular%20economy%20concept%20has,%2C%20thought%2Dleaders%20and%20businesses. (Accessed 29.10.2020)"
        },
        {
            "id": "footnote62",
            "text": "See more about the brand on their website mogu.bio"
        },
        {
            "id": "footnote63",
            "text": "See more about the brand on their website pili.bio"
        },
        {
            "id": "footnote64",
            "text": "Her recent publications and lectures revolve around the concept of Respectful Design, what she describes as “something akin to the creation of preferred courses of action based on the intrinsic worth of all human, animal, mineral, fauna and flora and the treatment of them with dignity and regard.” (Tunstall, 2011, p.133)  Highly connected to decolonizing practices, Respectful Design has been practiced in Ontario College of Art & Design University, of which she is the Dean."
        },
        {
            "id": "footnote65",
            "text": "Information retrieved from lecture featured in video entitled “Dori Tunstall Shares the Truth About Decolonizing Design | M.AD INSIGHTERS Series”, available at https://www.youtube.com/watch?v=-ALR4KbhmFQ Accessed on 24.04.2022"
        },
        {
            "id": "footnote66",
            "text": "For Design Activism, the author cites Fuad-Luke (2009) and Thorpe (2008), in this order."
        },
        {
            "id": "footnote67",
            "text": "For Participatory Design, the author cites Sanders & Stappers (2008), Schuler/Namioka (1993) and Simonsen/Robertson (2013), in this order."
        },
        {
            "id": "footnote68",
            "text": "For Design Infrastructuring, the author cites Björgvinsson et al. (2010)"
        },
        {
            "id": "footnote69",
            "text": "As has been discussed in this work in Chapter 3, the consequences of a ruling world vision, as a future vision, has led to epistemicide (the killing of knowledge systems) and domination."
        }
    ]
}
