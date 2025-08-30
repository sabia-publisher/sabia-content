<script setup>
import readerSettings from '../../composables/readerSettings'
import { onClickOutside, onKeyStroke } from '@vueuse/core'

const timeline = ref(null)
const show = ref(false)

function open() {
    readerSettings.setBlocked(true)
    show.value = true
    window.addEventListener("wheel", scrollHorizontal)
}

function close() {
    readerSettings.setBlocked(false)
    show.value = false
    window.removeEventListener("wheel", scrollHorizontal)
}

function scrollHorizontal(e) {
    if (e.deltaY > 0)
        timeline.value.scrollLeft += 150
    else
        timeline.value.scrollLeft -= 150
}

onClickOutside(timeline, () => close())
onKeyStroke('Escape', () => close())
</script>

<template>
    <div>
        <div>
            <button @click="open()" class="border border-green my-4 p-4 bg-red-700 text-white w-full rounded-md">
                Open Timeline
            </button>
        </div>

        <div v-if="show" class="fixed top-0 left-0 z-20 w-screen h-screen flex p-4 justify-center items-center bg-black/50">
            <div ref="timeline" class="bg-white p-8 pb-4 rounded-lg w-full h-[80vh] overflow-x-auto overflow-y-hidden">
                <ul class="[ timeline-wrapper ] m-0 p-0">
                    <li class="origin-blue">
                        <h3>19th century</h3>

                        <figure class="rounded w-full">
                            <img src="" alt="">
                        </figure>

                        <p>Expressions of concern about the wastage of natural resources (utilitarian vision) or about the conservation of
                        beautiful natural sceneries were expressed by few individuals, but not abundant.</p>
                    </li>

                    <li class="origin-bege">
                        <h3>1948</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/1948.png">
                        </figure>

                        <p>The International Union for Conservation of Nature – IUCN was established by representatives of governments and
                        conservation organizations stimulated by Unesco. The group signed a formal act constituting the International Union for
                        the Protection of Nature (IUPN).</p>
                    </li>

                    <li class="origin-bege">
                        <h3>1951</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/1951.png">
                        </figure>

                        <p>The World Wildlife Fund – WWF, first named World Wide Fund for Nature was founded in 1961 as an international
                        non-governmental organization that works in the field of wilderness preservation and the reduction of human impact on
                        the environment.</p>
                    </li>

                    <li class="origin-green">
                        <h3>1962</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/1962.png">
                        </figure>

                        <p>Silent Spring, by Rachel Carson, brings together research on toxicology, ecology, and epidemiology to suggest that
                        agricultural pesticides are building to catastrophic levels, linked to damage to animal species and human health.</p>
                    </li>

                    <li class="origin-bege">
                        <h3>1968</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/1968.png">
                        </figure>

                        <p>Intergovernmental Conference for Rational Use and Conservation of the Biosphere, the first international conference on
                        biosphere protection, was held by Unesco.</p>
                    </li>

                    <li class="origin-red">
                        <h3>1971</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/1971.png">
                        </figure>

                        <p>The creation of Greenpeace in Canada</p>

                        <p class="origin-green">In the same year the International Institute for Environment and Development (IIED) was established in the United
                        Kingdom to seek ways for countries to make economic progress without destroying their environments. It is also the year
                        that the Organization for Economic Co-operation and Development (OECD) Council makes polluting companies financially
                        accountable for their actions.</p>
                    </li>

                    <li class="origin-blue">
                        <h3>1972</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/1972.png">
                        </figure>

                        <p>The United Nations Conference on Human Environment, in Stockholm, the first world conference on environment and
                        development brings up the pollution and acid rain problems of northern Europe. It leads to the establishment of many
                        national environmental protection agencies and the United Nations Environment Programme (Unep).</p>
                    </li>

                    <li class="origin-red">
                        <h3>1973</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/1973.png">
                        </figure>

                        <p>Publication of the influential book Small is Beautiful by Ernst Friedrich Schumacher; Molina and Rowland released their
                        relevant work on CFC emissions in the scientific journal Nature, proving its continued damage to the ozone layer (1974);</p>

                        <p class="origin-green">Opec oil crisis fuels limits-to-growth debate.</p>
                    </li>

                    <li class="origin-green">
                        <h3>1974</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/1974.png">
                        </figure>

                        <p>Latin American World Model is the South American response to Limits to Growth developed by the Fundación Bariloche and
                        calls for growth and equity for the region.</p>
                    </li>

                    <li class="origin-green">
                        <h3>1976</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/1976.png">
                        </figure>

                        <p>Habitat, the UN Conference on Human Settlements, is the first global meeting to link the environment and human
                        settlement.</p>
                    </li>

                    <li class="origin-green">
                        <h3>1978</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/1978.png">
                        </figure>

                        <p>OECD Directorate of the Environment relaunches research on environmental and economic linkages. The work builds the
                        foundation for the 1987 report, Our Common Future.</p>
                    </li>

                    <li class="origin-red">
                        <h3>1980</h3>

                        <p>The World Conservation Strategy was released by The International Union for the Conservation of Nature and Natural
                        Resources (now known as the World Conservation Union). The main agents of habitat destruction were identified in a
                        section entitled ‘Towards Sustainable Development’ as being poverty, population pressure, social inequity, and the terms
                        of trade. In the same year the Global 2000 report was authorized by US President Jimmy Carter, a document in which
                        biodiversity is regarded as important to a well-functioning planet; This was also one of the first definitions of
                        Sustainable Development.</p>

                        <p>The World Health Assembly unanimously adopted a Global Strategy for Health for All by the year 2000 (1981).</p>
                    </li>

                    <li class="origin-red">
                        <h3>1982</h3>

                        <p>The publishing of the United Nations World Charter for Nature that presented the principle that every form of life is
                        unique and should be respected regardless of its value to humankind.</p>

                        <p>The United Nations General Assembly established the World Commission on Environment and Development (WCED) (1983).</p>
                    </li>

                    <li class="origin-red">
                        <h3>1983</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/1983.png">
                        </figure>

                        <p>The World Meteorological Society, Unep and the International Council of Scientific Unions predicted global warming would
                        occur by reported accumulation of CO2 in Earth's atmosphere. In the same year British and American scientists discovered
                        a hole in the ozone layer at the Antarctic.</p>
                    </li>

                    <li class="origin-green">
                        <h3>1985</h3>

                        <p>Meeting in Austria of the World Meteorological Society, Unep and the International Council of Scientific Unions reports
                        on the buildup of carbon dioxide and other “greenhouse gases” in the atmosphere. They predict global warming.</p>
                    </li>

                    <li class="origin-blue">
                        <h3>1987</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/1987.png">
                        </figure>

                        <p>The Brundtland Report also known as “Our Common Future” made the expression “sustainable development” popular as it
                        connected social, economic, cultural, and environmental issues. It was published by the World Commission on Environment
                        and Development.</p>
                    </li>

                    <li class="origin-green">
                        <h3>1990</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/1990.png">
                        </figure>

                        <p>International Institute for Sustainable Development (IISD) was established in Canada and began publishing the Earth
                        Negotiations Bulletin in 1992</p>

                        <p class="origin-blue">In the same year, in compass with The Brundtland Report, the BID, or Inter-American Development Bank (Banco
                        Interamericano del Desarollo), known as a relevant source of development financing for Latin America and the Caribbean,
                        together with the UNDP designed the “Our own agenda”, a Central and South American version of “Our common future”.</p>
                    </li>

                    <li class="origin-blue">
                        <h3>1991</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/1991.png">
                        </figure>

                        <p>The IUCN, the United Nations Environment Programme – Unep and the WWF develop the Caring for the Earth world
                        conservation strategy, the first of its kind to bring up ethics as a central matter to sustainability and valuing all
                        kinds of life non subordinated to human valorization.</p>
                    </li>

                    <li class="origin-red">
                        <h3>1992</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/1992.png">
                        </figure>

                        <p>The Business Council for Sustainable Development which later became the World Business Council for Sustainable
                        Development, published Changing Course. This book established business interests in promoting Sustainable Development
                        practices. In the same year the UN Conference on Environment and Development (UNCED) (also known as the Earth Summit)
                        was held in Rio de Janeiro. Agreements were reached on Agenda 21, the Convention on Biological Diversity, and the
                        Framework Convention on Climate Change, the Rio Declaration, and non-binding Forest Principles. In this year The Earth
                        Council was established in Costa Rica as a focal point for facilitating follow-up and implementation of the agreements
                        reached at the Earth Summit, and linking national Sustainable Development councils. Climate Change, the Rio Declaration,
                        and the Forest Principles were reached.</p>

                        <p class="origin-blue">Consent on the discussion about an Earth Charter was not reached.</p>

                        <p class="origin-blue">At the Earth Summit, though not central to the event, there was also the Brazilian Forum for NGOs, Social Movements,
                        Environment and Development (<em>Fórum Brasileiro de ONGs e Movimentos Sociais para o Meio Ambiente e o Desenvolvimento –
                        FBOMS</em>) where the intrinsic value of Nature is highlighted.</p>
                    </li>

                    <li class="origin-red">
                        <h3>1993</h3>

                        <p>The first meeting of the UN Commission on Sustainable Development took place.</p>
                    </li>

                    <li class="origin-red">
                        <h3>1995</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/1995.png">
                        </figure>

                        <p>The international community agreed for the first time on the goal to eradicate poverty at the World Summit for Social
                        Development, held in Copenhagen.</p>
                    </li>

                    <li class="origin-red">
                        <h3>1997</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/1997.png">
                        </figure>

                        <p>The Kyoto Protocol regarding greenhouse gas emissions was signed by delegates to the UN Framework Convention on Climate
                        Change Third Conference of the Parties (COP-3). In this same year, the UN General Assembly review of Earth Summit
                        progress noted that the efforts to implement Agenda 21 by the signers was not enough</p>
                    </li>

                    <li class="origin-bege">
                        <h3>1998</h3>

                        <p>Indian economist Amartya Sen won the Nobel Prize for his contributions to a new perspective on the root and the possible
                        responses to social disasters, such as extreme poverty and famine. His reflections for an economy based on long-term,
                        systemic, and solid public responsibility shifted traditional views of economic health at the time.</p>
                    </li>

                    <li class="origin-green">
                        <h3>1999</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/1999.png">
                        </figure>

                        <p>Launch of the Dow Jones Sustainability Indexes. The first of its kind, the tool provides guidance to investors looking
                        for profitable companies that follow sustainable development principles.</p>
                    </li>

                    <li class="origin-red">
                        <h3>2000</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/2000.png">
                        </figure>

                        <p>It was recognized that almost half of the world’s population now lived in cities that occupy less than 2% of the Earth’s
                        land surface, but use 75% of Earth’s resources.</p>
                    </li>

                    <li class="origin-red">
                        <h3>2002</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/2002.png">
                        </figure>

                        <p>The second World Summit on Sustainable Development was held in Johannesburg during which world governments, concerned
                        citizens, UN agencies, multilateral financial institutions, and other major groups participated and assessed global
                        change since the United Nations Conference on Environment and Development in 1992. At the Summit the following was
                        reported:</p>

                        <p>1. A third of the world’s population lives in countries suffering from moderate to high water stress.</p>
                        <p>2. Eighty percent of all disease in developing countries is caused by consumption of contaminated water.</p>
                        <p>3. Twelve percent of bird species, 25% of mammal species and 34% of fish species are under threat of extinction.</p>
                        <p>4. Air pollution is estimated to cause 5% of the world’s deaths each year.</p>
                        <p>5. A hundred and thirteen million of the world’s children do not have access to primary education while 20% of adults
                            are illiterate, two-thirds of those are women.</p>
                        <p>6. Global consumption of mineral, wood, plastics, and other materials increased by 240% between 1960 and 1995</p>

                        <p>The Summit’s plan of implementation recognized that an unprecedented level of commitment and co-operation is required
                        from all sectors and countries if change is going to occur. More than one hundred world leaders made a recommitment to
                        the principles and practice of sustainable development. Leading businesspeople from many global companies also gave
                        their commitment to changing their practices to be more socially and environmentally responsible. This summit ended with
                        a number of agreements in the key areas of: Water and sanitation, energy, global warming, natural resources and
                        biodiversity, trade, human rights, and health.</p>
                    </li>

                    <li class="origin-blue">
                        <h3>2003</h3>

                        <p>A group of South American environmental ministries promoted a document called Manifesto pela vida (Manifest for Live).
                        The initiative was based on ethical principles that could base plans for sustainable development that included topics on
                        social justice. It was supported by Unep</p>
                    </li>

                    <li class="origin-bege">
                        <h3>2005</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/2005.png">
                        </figure>

                        <p>With most of the world’s nations, but the United States, ratifying the Kyoto Protocol, it officially goes into force.</p>
                    </li>

                    <li class="origin-bege">
                        <h3>2007</h3>

                        <p>Bali Action Plan is signed at the 13th United Nations Climate Change Conference (COP 13), agreeing on long-term
                        strategies to fight climate change based on shared vision, mitigation, adaptation, technology, and financing. In the
                        same year the European Union agreed to cut C02 emissions by 20% by 2020 in the 2020 Climate & Energy Package. Under the
                        Kyoto Protocol, the EU was already committed to an 8% decrease. The plan also called for biofuels to make up at least
                        10% of vehicle fuel by 2020. In the same year, the UN Intergovernmental Panel on Climate Change (IPCC) released the
                        final portion of a multipart report that estimated the cost of reversing the emissions of greenhouse gases thought to
                        cause climate change.</p>
                    </li>

                    <li class="origin-green">
                        <h3>2008</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/2008.png">
                        </figure>

                        <p>World food, fuel, and financial crises converge as global food prices increase 43% in one year. At the same time,
                        financial institutions falter over the collapse of mortgage loans in the United States and markets tumble, bringing the
                        world into a recession. In the same year, due to the increased difficulties in maintaining a healthy and safe lifestyle
                        in the countryside, for the first time in history, more than 50% of the world’s population lived in towns and cities.</p>
                    </li>

                    <li class="origin-bege">
                        <h3>2009</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/2009.png">
                        </figure>

                        <p>The COP15 in Copenhagen is considered a failure as 193 countries failed to reach a consensus on replacement for the 1997
                        Kyoto Protocol emissions treaty, set to expire in 2012.</p>
                    </li>

                    <li class="origin-bege">
                        <h3>2010</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/2010.png">
                        </figure>

                        <p>United Nations Climate Change Conference in Cancun (COP 16), Mexico ends with agreements on funding for climate change
                        mitigation strategies in vulnerable parts of the developing world, while the United Nations biodiversity efforts focused
                        through new Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services (IPBES).</p>

                        <p class="origin-green">In the same year, the Economics of Ecosystems and Biodiversity final report called for wider recognition of nature’s
                        contribution to human livelihoods, health, security, and culture by decision-makers. Also in 2010, BP Deepwater Horizon
                        oil rig explosion leaked 5 million barrels of crude oil into the Gulf of Mexico for 87 days before the well was sealed,
                        damaging wildlife habitats, fisheries, tourism, and the economy in the region.</p>
                    </li>

                    <li class="origin-bege">
                        <h3>2011</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/2011.png">
                        </figure>

                        <p>The Fukushima Daiichi nuclear disaster reinforced the need to rethink the prioritization of economy and production over
                        caring for life, since hundreds of thousands of humans and non-humans were directly negatively affected.</p>
                    </li>

                    <li class="origin-bege">
                        <h3>2012</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/2012.png">
                        </figure>

                        <p>Rio +20 celebrates the 20th anniversary of the Earth Summit conference, while native Brazilians demonstrate against the
                        Belo Monte dam complex, a project that killed many human and non-human beings. One major issue brought up in the event
                        were the increasing murders of environmental activists.</p>
                    </li>

                    <li class="origin-bege">
                        <h3>2013</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/2013.png">
                        </figure>

                        <p>Argentinian cardinal Jorge Mario Bergoglio is elected Pope, leader of the Catholic Church. He chooses the name Francis,
                        after St. Francis of Assisi, the patron saint of the poor and of animals and the environment. Among his many attempts to
                        mobilize discussions against oppression of peoples and Nature, in 2015 he issued Laudito Si, an environmental encyclical
                        calling for environmental justice and dialogue in the international community, especially on climate change.</p>
                    </li>

                    <li class="origin-bege">
                        <h3>2014</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/2014.png">
                        </figure>

                        <p>US National Climate Assessment report, elaborated by more than 300 experts from thirteen government agencies, states:
                        “Observations unequivocally show that climate is changing and that the warming of the past 50 years is primarily due to
                        human-induced emissions of heat-trapping gasses.” Finally.</p>
                    </li>

                    <li class="origin-bege">
                        <h3>2015</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/2015.png">
                        </figure>

                        <p><strong>Paris Agreement signed</strong> by 175 countries. The aims of the agreement are:</p>

                        <p>“(a) Holding the increase in the global average temperature to well below 2 °C above pre-industrial levels and to pursue
                        efforts to limit the temperature increase to 1.5 °C above pre-industrial levels, recognizing that this would
                        significantly reduce the risks and impacts of climate change.</p>
                        <p>(b) Increasing the ability to adapt to the adverse impacts of climate change and foster climate resilience and low
                        greenhouse gas emissions development, in a manner that does not threaten food production.</p>
                        <p>(c) Making finance flows consistent with a pathway towards low greenhouse gas emissions and climate-resilient
                        development.” Under the Paris Agreement, each country must determine, plan, and regularly report on the contribution
                        that it undertakes to mitigate global warming.</p>

                        <p>In the same year the Sustainable Development Goals – SDGs were set in 2015 by the United Nations General Assembly. These
                        seventeen interlinked global goals were designed to be a "blueprint to achieve a better and more sustainable future for
                        all" that are intended to be achieved by the year 2030. They are included in a UN Resolution called the 2030 Agenda.</p>
                    </li>

                    <li class="origin-bege">
                        <h3>2016</h3>

                        <!-- <figure class="rounded w-full">
                            <img src="" alt="">
                        </figure> -->

                        <p>Donald Trump becomes president of the world’s largest economy, famously recognized for his anti-environmental attitude.
                        He orders a stop to climate change prevention and research in a series of executive orders in the same year and attempts
                        to dismantle regulations that protect public health and natural resources. The move is widely seen as gravely mistaken,
                        especially by the European Union and the Vatican. Two years later, one of his loyal allies in South America, Jair
                        Bolsonaro, became president of Brazil, representing a win for agribusiness and anti-environmental politics. Also, forest
                        people and environmentalists had been constantly attacked by him and his party.</p>
                    </li>

                    <li class="origin-bege">
                        <h3>2018</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/2018.png">
                        </figure>

                        <p>Climate change report containing detailed impacts of a temperature rise of 1.5 ºC was released by the UN
                        Intergovernmental Panel on Climate Change (IPCC) and rejected by US, Saudi Arabia, Kuwait, and Russia at the climate
                        summit in Poland.</p>
                    </li>

                    <li class="origin-bege">
                        <h3>2019</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/2019.png">
                        </figure>

                        <p>The Green New Deal resolution was introduced in US Congress by Senator Edward Markey and Representative Alexandria
                        Ocasio-Cortez. Although the resolution did not pass, it represents a starting point for discussions about long-term
                        changes in US energy and environmental policy. The 2019 UN Climate Action Summit brings world leaders, scientists, and
                        climate activists together and counts with the participation of young activists, among them Greta Thunberg, who
                        addresses the conference:</p>

                        <blockquote><p>This is all wrong. I shouldn’t be up here. I should be back in school on the other side of the ocean. Yet you all come
                        to us young people for hope? How dare you! You have stolen my dreams and my childhood with your empty words. And yet I’m
                        one of the lucky ones. People are suffering. People are dying. Entire ecosystems are collapsing. We are in the beginning
                        of a mass extinction. And all you can talk about is money and fairytales of eternal economic growth. How dare you!</p></blockquote>

                        <p>Later on, Greta calls on Fridays for Future, protests led by young strikers who mobilized for concrete actions on
                        climate change related politics. In the same year Australia suffered the worst fires in its history, while the Amazon
                        reached new records on deforestation.</p>
                    </li>

                    <li class="origin-bege">
                        <h3>2020</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/2020.png">
                        </figure>

                        <p>The Covid-19 pandemic kills millions of people, reinforcing the unsustainability of our economic system. While a large
                        portion of the production activities were shut down, an increase in wildlife presence in cities and reduction in air
                        pollution is evident.</p>
                    </li>

                    <li class="origin-bege">
                        <h3>2021</h3>

                        <figure class="rounded w-full">
                            <img src="/9786599492938/images/2021.png">
                        </figure>

                        <p>Newly-elected US President Joe Biden starts reversing Trump’s anti-climate legacy by instructing the US government to
                        pause and review all oil and gas drilling on federal land, eliminate fossil fuel subsidies and sign an order to rejoin
                        the Paris Climate Accord. He says: “We have already waited too long to deal with this climate crisis, we can’t wait any
                        longer. . . . We see it with our own eyes, we feel it in our bones. It’s time to act.”</p>
                    </li>

                    <li class="origin-bege">
                        <h3>2021</h3>

                        <!-- <figure class="rounded w-full">
                            <img src="" alt="">
                        </figure> -->

                        <p>The COP-26 Summit revolved around the failure of the Paris Agreement, insufficient funding for poorer countries to
                        pursue sustainable goals and the distance between what has been promised and what has been done. It was also the COP
                        edition with a larger presence of indigenous and activists, that, besides their strength and right to participation,
                        were still kept on the margins on negotiation for main decisions. The Glasgow Climate Pact, a document drawn from the
                        event and adopted by almost 200 countries, as admitted by the United Nations, “will not radically alter the global
                        landscape on climate change”. The COP-26 will be further discussed in another Chapter.</p>
                    </li>
<!--
                    <li class="origin-">
                        <h3></h3>

                        <figure class="rounded w-full">
                            <img src="" alt="">
                        </figure>

                        <p></p>
                    </li>

                    <li class="origin-">
                        <h3></h3>

                        <figure class="rounded w-full">
                            <img src="" alt="">
                        </figure>

                        <p></p>
                    </li> -->
                </ul>
            </div>
        </div>

    </div>
</template>

<style scoped lang="postcss">
.timeline-wrapper {
    column-count: 4;
    grid-column-gap: 0;
    column-gap: 0;
    margin: 0 !important;
    height: 100%;

    @media (max-width: 1600px) {
        column-count: 3;
    }

    @media (max-width: 1300px) {
        column-count: 2;
    }

    @media (max-width: 640px) {
        column-count: 1;
    }
}

.timeline-wrapper > li {
    break-before: column;
    break-inside: avoid-column;

    @apply flex-shrink-0 px-3;

    &::before {
        display: none;
    }

    h3 {
      position: relative;
      margin-bottom: 1em;
      color: #222;

      &::after {
        content: '';
        position: absolute;
        bottom: -0.45em;
        left: 0;
        border-bottom: 5px solid #000;
        width: 75px;
      }
    }

    figure {
        margin-bottom: 1em;
    }

    p {
        color: #222;
        position: relative;

        &.origin-blue,
        &.origin-red,
        &.origin-bege,
        &.origin-green {
            padding-top: 1em;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                border-bottom: 5px solid #000;
                width: 75px;
            }
        }

        &.origin-blue::before {
            border-bottom-color: rgb(140 150 179);
        }
        &.origin-red::before {
            border-bottom-color: rgb(200 70 60);
        }

        &.origin-green::before {
            border-bottom-color: rgb(110, 180, 100);
        }

        &.origin-bege::before {
            border-bottom-color: rgb(185, 136, 61);
        }
    }

    &.origin-blue {
        h3::after {
            border-bottom-color: rgb(140 150 179);
        }
    }

    &.origin-red {
        h3::after {
            border-bottom-color: rgb(200 70 60);
        }
    }

    &.origin-green {
        h3::after {
            border-bottom-color: rgb(110, 180, 100);
        }
    }

    &.origin-bege {
        h3::after {
            border-bottom-color: rgb(185, 136, 61);
        }
    }

    :deep(ol) {
        list-style: initial;

        li {
            list-style: initial;

            &::before {
                display: none;
            }
        }
    }
}
</style>
