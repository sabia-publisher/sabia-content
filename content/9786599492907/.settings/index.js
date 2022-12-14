export default {
    fontSize: 19, // number
    fontsOptions: [
        {
            label: 'Libre Franklin',
            name: '"Libre Franklin", sans-serif;',
            link: 'https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap',
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

        .capa.columns-double,
        .capa.columns-single {
            background-color: rgb(24, 64, 151);
            background-image: url(https://firebasestorage.googleapis.com/v0/b/editora-sabia.appspot.com/o/okabayashi.jpg?alt=media&token=614c19c5-15bf-4c0f-a0a8-48a1381ac662);
            background-size: cover;
        }

        .capa.columns-double .columnsArea,
        .capa.columns-single .columnsArea {
            column-count: initial !important;
        }

        #rootComponent.capa .viewer-nav {
            color: #fff !important
        }

        #rootComponent.capa .slider-target {
            display: none;
        }

        .estudos-decoloniais.columns-double.currentPage-1,
        .estudos-decoloniais.columns-single.currentPage-1,
        .estudos-decoloniais.columns-single.currentPage-2 {
            background-image: url(https://firebasestorage.googleapis.com/v0/b/editora-sabia.appspot.com/o/okabayashi.jpg?alt=media&token=614c19c5-15bf-4c0f-a0a8-48a1381ac662);
            background-color: rgb(24, 64, 151);
            background-size: cover;
        }

        .estudos-culturais-do-design.columns-double.currentPage-1,
        .estudos-culturais-do-design.columns-single.currentPage-1,
        .estudos-culturais-do-design.columns-single.currentPage-2 {
            background-image: url(https://firebasestorage.googleapis.com/v0/b/editora-sabia.appspot.com/o/okabayashi.jpg?alt=media&token=614c19c5-15bf-4c0f-a0a8-48a1381ac662);
            background-color: rgb(24, 64, 151);
            background-size: cover;
        }

        .design-decolonial.columns-double.currentPage-1,
        .design-decolonial.columns-single.currentPage-1,
        .design-decolonial.columns-single.currentPage-2 {
            background-image: url(https://firebasestorage.googleapis.com/v0/b/editora-sabia.appspot.com/o/okabayashi.jpg?alt=media&token=614c19c5-15bf-4c0f-a0a8-48a1381ac662);
            background-color: rgb(24, 64, 151);
            background-size: cover;
        }
    `,

    references: [
        {
            "cit": "GAMA, 2019",
            "ref": "GAMA, Mara. <strong>As tr??s rotas que trouxeram a centen??ria Bauhaus ao Brasil</strong>. Folha de S??o Paulo, S??o Paulo, 1 abr. 2019. Dispon??vel em: https://www1.folha.uol.com.br/ilustrissima/2019/03/as-tres-rotas-que-trouxeram-a-centenaria-bauhaus-ao-brasil.shtml. Acesso em: 4 abr. 2019"
        },
        {
            "cit": "LEON, 2006",
            "ref": "LEON, Ethel. <strong>O Instituto de Arte Contempor??nea do Museu de Arte Moderna (MAM) de S??o Paulo dos anos 1950</strong>. S??o Paulo, 2006."
        },
        {
            "cit": "LUGONES, 1978",
            "ref": "LUGONES, Maria. <strong>Colonialidad y g??nero</strong>. T??bula Rasa, Bogot??, Col??mbia, n. 9, p. 73-101, julho-dezembro de 1978."
        },
        {
            "cit": "OCAD, 2017",
            "ref": "Ontario College of Arts and Design University. <strong>OCAD University Academic Plan: TRANSFORMING STUDENT EXPERIENCE 2017-2022</strong>. Canad??, 2017. Dispon??vel em: https://www.ocadu.ca/Assets/content/governance/Academic-Plan-2017.pdf?_ga=2.3898422.729932804.1559359442-570091336.1559263063. Acesso em 29 de maio de 2019."
        },
        {
            "cit": "KRENAK, 1999",
            "ref": "KRENAK, Ailton. O eterno retorno do encontro. In: NOVAES, Adauto (org.), <strong>A Outra Margem do Ocidente</strong>, Minc-Funarte/Companhia Das Letras, 1999."
        },
        {
            "cit": "ANI, 1994",
            "ref": "ANI, Marimba. <strong>Yurugu: An Afrikan-Centered Critique of European Cultural Thought and Behaviour</strong>. 1. ed. Trenton: Africa World Press, 1994. 636 p."
        },
        {
            "cit": "SVAMPA, 2011",
            "ref": "SVAMPA, Maristella. Extrativismo neodesenvolvimentista e movimentos sociais. Um giro ecoterritorial rumo a novas alternativas?. In: Grupo permanente de trabajo sobre alternativas al desarrollo. <strong>M??s All?? del Desarrollo</strong>. Quito: Funda????o Rosa Luxemburgo, 2011."
        },
        {
            "cit": "KHANDWALA, 2019",
            "ref": "KHANDWALA, Anoushka. <strong>What does it mean to decolonize design?: Dismantling Design History 101</strong>. [S. l.]: Aiga Eye on Design, 5 jun. 2019. Dispon??vel em: https://eyeondesign.aiga.org/what-does-it-mean-to-decolonize-design/ Acesso em: 12 out. 2019"
        },
        {
            "cit": "ESCOBAR, 2016",
            "ref": "ESCOBAR, Arturo. <strong>Autonom??a y Dise??o: la realizaci??n del comunal</strong>, Col??mbia: Editorial Universidad del Cauca, 2016"
        },
        {
            "cit": "COUTO, 2008",
            "ref": "COUTO, Rita Maria de Souza. <strong>Escritos sobre Ensino de Design no Brasil</strong>. 1?? ed, Rio de Janeiro, 2008."
        },
        {
            "cit": "ESCOBAR, 2007",
            "ref": "ESCOBAR, Arturo. <strong>La invenci??n del Tercer Mundo</strong>. Caracas: Fundaci??n Editorial el perro y la rana, 2007."
        },
        {
            "cit": "FEENBERG, 2010",
            "ref": "FEENBERG, Andrew. O que ?? Filosofia da Tecnologia? In: NEDER, Ricardo T. <strong>A Teoria Cr??tica de Andrew Feenberg: racionaliza????o democr??tica, poder e tecnologia</strong>. Bras??lia ??? DF: Observat??rio pela Tecnologia Social na Am??rica Latina / CDS / UNB / Capes, 2010"
        },
        {
            "cit": "DOWBOR, 2017",
            "ref": "DOWBOR, Ladislau. <strong>A era do capital improdutivo: Por que oito fam??lias tem mais riqueza do que a metade da popula????o do mundo?</strong>. S??o Paulo: Autonomia Liter??ria, 2017."
        },
        {
            "cit": "MALDONADO, 1991",
            "ref": "MALDONADO, Tom??s. <strong>Disegno indutriale: un riesame</strong>. It??lia: Giangiacomo Feltrinelli Editore, 1991."
        },
        {
            "cit": "ACOSTA, 2011",
            "ref": "ACOSTA, Alberto. Extrativismo e neoextrativismo: Duas faces da mesma maldi????o. In: <strong>Grupo permanente de trabajo sobre alternativas al desarrollo. M??s All?? del Desarrollo</strong>. Quito: Funda????o Rosa Luxemburgo, 2011"
        },
        {
            "cit": "BONSIEPE, 1978b",
            "ref": "BONSIEPE, Gui. <strong>Teoria y practica del diseno industrial: Elementos para una manual??stica cr??tica</strong>. Barcelona: Gustavo Gili, 1978b"
        },
        {
            "cit": "PAPANEK, 1984",
            "ref": "PAPANEK, Victor. <strong>Design for the Real World: Human Ecology and Social Change</strong>, 2?? ed. 1984."
        },
        {
            "cit": "CHAU??, 2000",
            "ref": "CHAU??, Marilena. <strong>Brasil. Mito fundador e sociedade autorit??ria</strong>. S??o Paulo: Funda????o Perseu Abramo, 2000."
        },
        {
            "cit": "NASCIMENTO, 1978",
            "ref": "NASCIMENTO, Abdias do. <strong>O genoc??dio do negro brasileiro: Processo de racismo mascarado</strong>. Rio de Janeiro: Paz e Terra S/A, 1978."
        },
        {
            "cit": "BALLESTRIN, 2013",
            "ref": "BALLESTRIN, Luciana. Am??rica Latina e o giro decolonial. <strong>Revista Brasileira de Ci??ncia Pol??tica</strong>, n?? 11. Bras??lia, maio/agosto de 2013, pp. 89-117."
        },
        {
            "cit": "BONSIEPE, 1978",
            "ref": "BONSIEPE, Gui. <strong>Dise??o Industrial, Tecnolog??a y Dependencia</strong>. Cole????o Mixcoac Insurgentes. M??xico: Editorial Edicol S.A., 1978."
        },
        {
            "cit": "BONSIEPE, 1983",
            "ref": "BONSIEPE, Gui. <strong>A  ???tecnologia??? da tecnologia</strong>. S??o Paulo, Edgard Blucher, 1983."
        },
        {
            "cit": "United Nations, 1949",
            "ref": "United Nations. <strong>World Economic Report 1948-1949</strong>, 1949."
        },
        {
            "cit": "FEDERICI, 2004",
            "ref": "FEDERICI, Silvia. <strong>Calib?? e a Bruxa: Mulheres, corpo e acumula????o primitiva</strong>, Brooklyn, Autonomedia, 2004,"
        },
        {
            "cit": "AGUINAGA et al., 2011",
            "ref": "AGUINAGA, et al. Pensar a partir do feminismo: Cr??ticas e alternativas ao desenvolvimento. In: <strong>Grupo permanente de trabajo sobre alternativas al desarrollo. M??s All?? del Desarrollo</strong>. Quito: Funda????o Rosa Luxemburgo, 2011."
        },
        {
            "cit": "RODNEY, 1975",
            "ref": "RODNEY, Walter. <strong>Como a Europa subdesenvolveu a ??frica</strong>. Lisboa: Seara Nova, 1975."
        },
        {
            "cit": "ANSARI, 2018",
            "ref": "ANSARI, Ahmed. <strong>What a Decolonisation of Design Involves: Two Programmes for Emancipation. Beyond Change: Questioning the role of design in times of global transformations</strong>, 2018. Dispon??vel em: https://www.decolonisingdesign.com/actions-and-interventions/publications/2018/what-a-decolonisation-of-design-involves-by-ahmed-ansari. Acesso em 12 de outubro de 2019."
        },
        {
            "cit": "SOARES, 2019b",
            "ref": "SOARES, Horrana Porf??rio. <strong>A hist??ria do ???Cad?? os Pretos no Design???? - Parte 2</strong>. 2019. Dispon??vel em: https://medium.com/@hon.porfirio/a-hist%C3%B3ria-do-cad%C3%AA-os-pretos-no-design-5e55f75e7137. Acesso em 27 de outubro de 2019."
        },
        {
            "cit": "LANG, 2016",
            "ref": "LANG, Miriam. Alternativas al Desarrollo. <strong>Descolonizar o Imagin??rio, debates sobre pr??s extrativismo e alternativas ao desenvolvimento</strong>. Funda????o Rosa Luxemburgo, 2016, pp. 25-44."
        },
        {
            "cit": "FANON, 1961",
            "ref": "FANON, Frantz. <strong>Os condenados da terra</strong>. Rio de Janeiro: Civiliza????o Brasileira, 1961."
        },
        {
            "cit": "DUSSEL, 1993",
            "ref": "DUSSEL, Enrique. <strong>Eurocentrism and Modernity: Introduction to the Frankfurt Lectures</strong>. The Postmodernism Debate in Latin America, Durham, v. 20-3, ed. 2, p. 65-76, 1993."
        },
        {
            "cit": "MACHADO, 2018",
            "ref": "MACHADO, Carlos Eduardo Dias. <strong>A constru????o da ra??a branca e a suposta incapacidade intelectual negra para a ci??ncia, tecnologia e inova????o/</strong>. Revista da ABPN: Caderno Tem??tico: Letramentos de Reexist??ncia, [s. l.], v. 10, ed. Especial, p. 12-29, 2018."
        },
        {
            "cit": "BARDI, 1994",
            "ref": "BARDI, Lina Bo. <strong>Tempos de Grossura: O design no impasse</strong>. S??o Paulo: Instituto Lina Bo e PM Bardi, 1994."
        },
        {
            "cit": "DAGNINO, 2004",
            "ref": "DAGNINO, Renato; BRAND??O, Fl??vio Cruvinel; NOVAES, Henrique Tahan. Sobre o Marco Anal??tico-conceitual da Tecnologia Social. In: LASSANCE JR, Antonio E. <strong>Tecnologia Social: uma estrat??gia para o desenvolvimento</strong>. Funda????o Banco do Brasil: Rio de Janeiro ??? RJ, 2004"
        },
        {
            "cit": "SANTOS, 2009",
            "ref": "SANTOS, Boaventura de Sousa. Para al??m do pensamento abissal: das linhas globais a uma ecologia de saberes. In: SANTOS, Boaventura de Sousa; MENESES, Maria Paula. <strong>Epistemologias do Sul</strong>. Coimbra: Edi????es Almedina, S.A., 2009."
        },
        {
            "cit": "SOARES, 2019",
            "ref": "SOARES, Horrana Porf??rio. <strong>A hist??ria do ???Cad?? os Pretos no Design???? - Parte 1</strong>. 2019 Dispon??vel em: https://medium.com/@hon.porfirio/a-hist%C3%B3ria-do-cad%C3%AA-os-pretos-no-design-4213c484ba1f. Acesso em 16 de novembro de 2019."
        },
        {
            "cit": "FRANK, 1980",
            "ref": "FRANK, Andre Gunder. <strong>Acumula????o dependente e subdesenvolvimento: repensando a teoria da depend??ncia</strong>. Bras??lia: Editora Brasiliense, 1980"
        },
        {
            "cit": "United Nations, 1951",
            "ref": "United Nations. <strong>World Economic Report 1950-1951</strong>, 1951."
        },
        {
            "cit": "SANTOS, 2002",
            "ref": "SANTOS, Boaventura de Sousa. <strong>Para uma sociologia das aus??ncias e uma sociologia das emerg??ncias</strong>. Revista Cr??tica de Ci??ncias Sociais, n?? 63. Centro de Estudos Sociais da Universidade de Coimbra, Coimbra, outubro de 2002: pp. 237-280. Dispon??vel em: http://journals.openedition.org/rccs/1285"
        },
        {
            "cit": "MIGNOLO, 2016",
            "ref": "MIGNOLO, Walter. <strong>COLONIALIDADE: O lado mais escuro da modernidade. Revista brasileira de ci??ncias sociais</strong>, v. 32, n?? 94. 2016."
        },
        {
            "cit": "TUNSTALL, 2017",
            "ref": "TUNSTALL, Elizabeth Dori. <strong>Intersectional Perspectives on Design, Politics and Power</strong>. Decolonising design: Decolonising design, 2017. Podcast. Dispon??vel em: https://www.mixcloud.com/decolonisingdesign/intersectional-perspectives-on-design-politics-and-power-elizabeth-dori-tunstall/. Acesso em 28 de maio de 2019."
        },
        {
            "cit": "MANZINI, 2008",
            "ref": "MANZINI, Ezio. <strong>Design para inova????o social e sustentabilidade</strong>, 2008, pp. 19-59."
        },
        {
            "cit": "TONKINWISE, 2015",
            "ref": "TONKINWISE, Cameron. <strong>Design for transitions - from what to what?</strong>. Design Philosophy Papers. Estados Unidos, 2015."
        },
        {
            "cit": "DIAS, 2015",
            "ref": "DIAS, Dora. Breve hist??rico da Faculdade de Arquitetura e Urbanismo da Universidade de S??o Paulo. In: DIAS, Dora. <strong>O ensino de Comunica????o Visual na FAU-USP: hist??ria, implementa????o e caracter??sticas</strong>. 2015. Disserta????o (Mestrado em Arquitetura e Urbanismo) - Faculdade de Arquitetura e Urbanismo, Universidade de S??o Paulo, S??o Paulo, 2015"
        },
        {
            "cit": "GONZALEZ, 1988",
            "ref": "GONZALEZ, L??lia. <strong>A categoria pol??tico-cultural de amefricanidade</strong>. In: Tempo Brasileiro. Rio de Janeiro, N??. 92/93 (jan./jun.). 1988, p. 69-82."
        },
        {
            "cit": "DUBOIS, 2016",
            "ref": "DUBOIS, Laurent. <strong>Why Haiti should be at the centre of the Age of Revolution</strong>. Aeon, 7 de novembro de 2016. Dispon??vel em : https://aeon.co/essays/why-haiti-should-be-at-the-centre-of-the-age-of-revolution. Acesso em 11 de maio de 2021."
        },
        {
            "cit": "PRADO, 2015",
            "ref": "PRADO, Fernando Correa. <strong>A ideologia do desenvolvimento e a controv??rsia da depend??ncia no Brasil contempor??neo</strong>. Orientador: Prof. Dr. Jos?? Lu??s da Costa Fiori. 2015. Tese (Doutorado em Economia Pol??tica Internacional) - Instituto de Economia da Universidade Federal do Rio de Janeiro, Rio de Janeiro, 2015."
        },
        {
            "cit": "ROCHA, 2018",
            "ref": "ROCHA, Ciro Fico Vieira da. <strong>Visualiza????o de dados sociais</strong>. 2018. Trabalho de Conclus??o de Curso (Bacharelado em Design) - Faculdade de Arquitetura e Urbanismo, Universidade de S??o Paulo, S??o Paulo, 2018."
        },
        {
            "cit": "SOUZA, 2001",
            "ref": "SOUZA, Francisco Raul Cornejo de. <strong>As formas da forma: o design brasileiro entre o modernismo e a moderniza????o</strong>. 2001. Tese (Doutorado em Sociologia) - Faculdade de Filosofia, Letras e Ci??ncias Humanas da Universidade de S??o Paulo, S??o Paulo, 2001."
        },
        {
            "cit": "SANTOS, 2001",
            "ref": "SANTOS, Maria Cec??lia Loschiavo dos. Repensando a Pesquisa e a P??s-gradua????o em design. In: <strong>Perspectivas do ensino e da pesquisa em design na p??s-gradua????o</strong>, 2001, Faculdade de Arquitetura e Urbanismo da Universidade de S??o Paulo. Anais [...]. S??o Paulo: Conselho Nacional de Desenvolvimento Tecnol??gico (CNPq), 2001."
        },
        {
            "cit": "GUDYNAS, 2009",
            "ref": "GUDYNAS, Eduardo. <strong>La dimensi??n ecol??gica del buen vivir: entre el fantasma de la Modernidad y el desaf??o bioc??ntrico</strong>. Uruguay. Revista Obets, n?? 4, p. 49-53. Centro de Investigaci??n y Promoci??n Franciscano y Ecol??gico (CIPFE), 2009"
        },
        {
            "cit": "COCHINOV, 2009",
            "ref": "COCHINOV, Allan. Foreword. In: PILLOTON, Emily. <strong>Design Revolution: 100 products that empower people</strong>. [S. l.]: Metropolis Books, 2009."
        },
        {
            "cit": "MAGALH??ES, 1998",
            "ref": "MAGALH??ES, Alo??sio. <strong>O que o desenho industrial pode fazer pelo pa??s?</strong> Por uma nova conceitua????o e uma ??tica do desenho industrial no Brasil. Rio de Janeiro. Arcos, Volume 1, 1998."
        },
        {
            "cit": "QUIJANO, 2005",
            "ref": "QUIJANO, An??bal. <strong>Colonialidade do poder, Eurocentrismo e Am??rica Latina. A colonialidade do saber: eurocentrismo e ci??ncias sociais</strong>. Perspectivas latino-americanas. CLACSO, Consejo Latinoamericano de Ciencias Sociales, 2005."
        },
        {
            "cit": "Museum of Modern Art, s/d",
            "ref": "Museum of Modern Art. <strong>Good Design Quotes (1941- 1959)</strong>. Dispon??vel em https://www.moma.org/d/pdfs/W1siZiIsIjIwMTkvMDIvMjgvOHNnY2VzZWV2NV9WR0RfUXVvdGVzLnBkZiJdXQ/VGD%20Quotes.pdf?sha=14ab2a43e9963ee0. Acesso em 29 de maio de 2019."
        },
        {
            "cit": "SANTOS, 1993",
            "ref": "SANTOS, Maria Cec??lia Loschiavo dos; ARANTES, Otilia Beatriz Fiori. <strong>Tradi????o e modernidade no m??vel brasileiro: vis??es da utopia na obra de Carrera, Tenreno, Zanine e Sergio Rodrigues</strong>. 1993.Universidade de S??o Paulo, S??o Paulo, 1993."
        },
        {
            "cit": "FURTADO, 1961",
            "ref": "FURTADO, Celso. <strong>Desenvolvimento e subdesenvolvimento</strong>, Rio de Janeiro: Editora Fundo de Cultura, 1961"
        },
        {
            "cit": "CUNHA JR, 2010",
            "ref": "CUNHA JR, Henrique. <strong>Tecnologia Africana na Forma????o Brasileira</strong>. 1. ed. Rio de Janeiro: Centro de articula????o de Popula????es Marginalizadas - CeaP, 2010"
        },
        {
            "cit": "Minist??rio da Economia, 2019",
            "ref": "Minist??rio da Economia. <strong>Comex Vis: Continentes e Blocos - Mercado Comum do Sul</strong>, Mercosul. Dispon??vel em: http://www.mdic.gov.br/comercio-exterior/estatisticas-de-comercio-exterior/comex-vis/frame-bloco?bloco=mercosul. Acesso em 1 de junho de 2019."
        },
        {
            "cit": "GROSFOGUEL, 2016",
            "ref": "GROSFOGUEL, Ram??n. <strong>A estrutura do conhecimento nas universidades ocidentalizadas: racismo/sexismo epist??mico e os quatro genoc??dios/epistemic??dios do longo s??culo XVI</strong>. Revista Sociedade e Estado, [S. l.], janeiro/abril 2016."
        },
        {
            "cit": "TUCK e YANG, 2012",
            "ref": "TUCK, Eve; YANG, K. Wayne. <strong>Decolonization is not a metaphor</strong>. Decolonization: Indigeneity, Education & Society, [S. l.], 2012."
        },
        {
            "cit": "LIMA, 2018",
            "ref": "LIMA, Verena Ferreira Tidei de. <strong>Ensino superior em design de moda no Brasil: pr??xis e (in)sustentabilidade</strong>. 2018. Tese (Doutorado em Arquitetura e Urbanismo) - Faculdade de Arquitetura e Urbanismo da Universidade de S??o Paulo, S??o Paulo, 2018."
        }
    ],

    footnotes: [
        {
            "id": "footnote1",
            "text": "Este trecho ?? uma fala da historiadora aymara Silvia Rivera Cusicanqui, citada por Escobar (2016)"
        },
        {
            "id": "footnote2",
            "text": "Devo essa reflex??o ao meu pai, Koji Okabayashi, em comunica????o pessoal no ano de 2019."
        },
        {
            "id": "footnote3",
            "text": "O neodesenvolvimentismo ?? comumente utilizado para descrever as pol??ticas econ??micas dos governos progressistas latino americanos dos anos 2000-2010, que ???apostaram, na pr??tica, no neodesenvolvimentismo e aprofundaram o modelo extrativista ??? argumentando com a necessidade de financiar o investimento social com os royalties obtidos com a exporta????o de commodities.??? (ACOSTA, 2011, p. 34). Maristella Svampa, aponta para a contradi????o deste modelo, que, por um lado utiliza da ret??rica do desenvolvimento econ??mico e social numa chave ???positiva???, de ???soberania nacional??? e popular, e por outro valem-se de pr??ticas que expulsam popula????es para a implementa????o da infraestrutura que a atividade extrativista intensiva exige e levam ?? destrui????o ambiental e das din??micas sociais locais (SVAMPA, 2011)."
        },
        {
            "id": "footnote4",
            "text": "Mais sobre o car??ter ontol??gico do design ser?? elaborado com maior profundidade adiante."
        },
        {
            "id": "footnote5",
            "text": "Defini????o extra??da do gloss??rio presente no livro <em>Yurugu: An Afrikan Centered Critique on European Cultural Thought and Behaviour</em>."
        },
        {
            "id": "footnote6",
            "text": "Esse ponto central ?? o que Ani chama de asili da cultura europeia, complementado por outros dois conceitos: utamaroho, ou a forma como a asili se desdobra na subjetividade dos europeus; e utamawazo, a forma como a asili se manifesta atrav??s da epistemologia europeia. Em outras palavras utamaroho ?? o comportamento culturalmente estruturado e utamawazo o pensamento culturalmente estruturado (ANI, 1994)."
        },
        {
            "id": "footnote7",
            "text": "Para um compilado de textos que explicitam a vis??o euroc??ntrica sobre os povos n??o-europeus ver O genoc??dio do negro brasileiro, de Abdias do Nascimento (1968); <em>Yurugu: An Afrikan- Centered Critique on European Thought and Behaviour</em>, de Marimba Ani; e o artigo A constru????o da ra??a branca e a suposta incapacidade intelectual negra para a ci??ncia, tecnologia e inova????o, de Carlos Eduardo Dias Machado."
        },
        {
            "id": "footnote8",
            "text": "<em>Abya-Yala</em> ?? uma das formas como os povos origin??rios da Am??rica latina se referem ao continente americano num esfor??o em deixar de utilizar o nome dado pelos colonizadores europeus. Significa \"continente vida\" no idioma do povo gunaduna da Col??mbia e Panam?? (ESCOBAR, 2016)."
        },
        {
            "id": "footnote9",
            "text": "<em>Maafa</em> ?? uma express??o do idioma Swahili que significa ???grande Desastre???. Us??-la para se referir ao per??odo que compreende o tr??fico transatl??ntico de africanos escravizadas faz parte do esfor??o de intelectuais afrocentradas de criar seus pr??prios termos para se referir ?? hist??ria de seu povo no continente e na di??spora."
        },
        {
            "id": "footnote10",
            "text": "Essa no????o me foi apresentada em uma fala da colega pesquisadora Horrana Porf??rio em um semin??rio interno do Grupo de Estudos em Tecnologia Social (Tecsol) no dia 5 de outubro de 2019, ap??s visita ?? exposi????o Design e tecnologia no tempo da escravid??o, do Museu Afro-Brasil."
        },
        {
            "id": "footnote11",
            "text": "Aqui, por trabalho reprodutivo entende-se todo o trabalho relacionado ao cuidado, f??sico e emocional, fundamental para a manuten????o da vida. (FEDERICI, 2004)."
        },
        {
            "id": "footnote12",
            "text": "As quest??es concernentes ?? rela????o entre o design e o sistema capitalista ter??o papel secund??rio nas an??lises presentes nesse trabalho, embora sejam indissoci??veis. Aqui, trago uma perspectiva epistemol??gica/cultural sobre o design, sem focar tanto nos aspectos econ??micos e materiais. No futuro, sem d??vidas, essas s??o quest??es a serem incorporadas neste olhar, principalmente no que diz respeito ?? rela????o do design com o ???desenvolvimento???."
        },
        {
            "id": "footnote13",
            "text": "?? interessante explicitar o car??ter contradit??rio deste processo. Para que a modernidade prevale??a enquanto projeto universal, os elementos que denunciam suas bases coloniais devem ser apagados. Entretanto, o pr??prio processo de apagamento configura o processo colonial de destrui????o do outro."
        },
        {
            "id": "footnote14",
            "text": "Tive contato com essa informa????o durante uma visita guiada pelo centro hist??rico de S??o Paulo promovida pelas pesquisadoras integrantes do NEPEN (N??cleo de Estudantes e Pesquisadores Negros) do Departamento de Geografia da USP. De acordo com as pesquisadoras, embora a demoli????o da capela tenha ocorrido em 1904, o letreiro da Casa Mathilde (famosa doceria portuguesa na Pra??a Ant??nio Prado) ???desde 1850??? d?? a entender que a confeitaria ???sempre esteve ali???, contribuindo para o apagamento hist??rico da presen??a de africanos escravizados e livres na forma????o urbana da cidade de S??o Paulo. A Casa Mathilde est?? constru??da sobre o cemit??rio da capela."
        },
        {
            "id": "footnote15",
            "text": "Digo isso partindo da no????o de que a expuls??o de popula????es ind??genas de seus territ??rios ancestrais ignora a indissociabilidade entre seus modos de vida e sua cultura ao territ??rio e tomando como base aa defini????o do crime de genoc??dio estabelecida no artigo 6 da Conven????o de Genebra de 1949."
        },
        {
            "id": "footnote16",
            "text": "Aqui, ironicamente o desenvolvimento (capitalista) ?? colocado como um processo inc??modo..."
        },
        {
            "id": "footnote17",
            "text": "Comex Vis: Continentes e Blocos - Mercado Comum do Sul, Mercosul. Dispon??vel em: <a href=\"http: //www.mdic.gov.br/comercioexterior/estatisticas-de-comercioexterior/comex-vis/framebloco?bloco=mercosul\">http://www.mdic.gov.br/comercioexterior/estatisticas-de-comercioexterior/comex-vis/framebloco?bloco=mercosul</a>. Acesso em 1 de junho de 2019."
        },
        {
            "id": "footnote18",
            "text": "Devo essa reflex??o a uma fala de Ailton Krenak no epis??dio sobre as Guerras de Conquista na s??rie documental <em>Guerras do Brasil</em>."
        },
        {
            "id": "footnote19",
            "text": "Aqui, associo o design ao termo ???sociobioc??ntrico??? utilizado por Alberto Acosta  para caracterizar as transi????es inspiradas pelo conceito do Bem Viver em seu artigo <em>Extrativismo e neoextrativismo: Duas faces da mesma maldi????o</em>, presente no livro <em>Descolonizar o Imagin??rio: Debates sobre p??s-extrativismo e alternativas ao desenvolvimento</em> (ACOSTA, 2011)."
        }

    ]
}
