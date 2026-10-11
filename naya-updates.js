'use strict';

/*
  STOPAZ exhibition content update
  Source authority: "What Naya needs to do", verbatim contributions in author-account revisions dated 2026-08-26 through 2026-09-03.
  Homepage authority: STOPAZ source document revision 147, dated 2026-10-05.
  Additional pending introductions confirmed by Kile as Naya's suggestions on 2026-10-11.
  Text window: 2026-08-11 through 2026-10-11. No generated editorial prose.
  This layer intentionally changes content only. It does not redesign existing pages,
  remove existing material, or activate the deferred "Antizionist crimes" section.
*/
(() => {
  const esc = (s) => String(s).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const p = (text, cls='') => `<p lang="en" dir="ltr" data-source-author="author-supplied" class="${cls}" data-en="${esc(text)}">${esc(text)}</p>`;

  function installStyles() {
    if (document.getElementById('naya-content-update-styles')) return;
    const style = document.createElement('style');
    style.id = 'naya-content-update-styles';
    style.textContent = `
      .naya-eras-context summary{cursor:pointer;font:500 clamp(1.6rem,3vw,2.6rem)/1.2 var(--museum-serif,Georgia,serif);padding:1rem 0;color:#eee}
      .naya-eras-context .era-source-section{margin:2rem 0}
      .naya-section-links{display:flex;flex-wrap:wrap;gap:.7rem 1.4rem;margin-top:1.5rem}
      .naya-section-links a{color:#eee;text-underline-offset:5px}
      .naya-archive-guide{margin:1.5rem 0}
      .naya-archive-guide summary{cursor:pointer;padding:.8rem 0}
      .naya-archive-guide h3{font-size:1.3rem;margin-top:1rem}
      .era-libels-grid{grid-template-columns:1fr!important;gap:3rem!important}
      .era-libel-card{max-width:850px;width:100%;margin-inline:auto;scroll-margin-top:5rem}
      .era-libel-card p{line-height:1.7!important;max-width:78ch;margin:0 0 1.2rem!important}
      .naya-source-update{max-width:1180px;margin:clamp(4rem,8vw,8rem) auto;padding:0 clamp(1.1rem,4vw,3rem)}
      .naya-source-update .naya-kicker{font:500 .72rem/1.2 var(--museum-sans,"Source Sans 3",sans-serif);letter-spacing:.18em;text-transform:uppercase;color:#9d9da7;margin-bottom:1rem}
      .naya-source-update h2,.naya-source-update h3{font-family:var(--museum-serif,"Cormorant Garamond",serif);font-weight:500;color:#f0f0f2}
      .naya-source-update h2{font-size:clamp(2.25rem,5vw,4.6rem);line-height:.98;margin:0 0 1.3rem}
      .naya-source-update h3{font-size:clamp(1.5rem,2.4vw,2.15rem);line-height:1.05;margin:0 0 .8rem}
      .naya-source-update p{max-width:78ch;color:#d1d1d7;font:400 clamp(.98rem,1.08vw,1.08rem)/1.62 var(--museum-sans,"Source Sans 3",sans-serif);margin:.8rem 0}
      .naya-source-update .naya-lede{font-size:clamp(1.1rem,1.45vw,1.3rem);line-height:1.55;color:#eeeeef;max-width:70ch}
      .naya-archive-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.06);margin-top:2rem}
      .naya-archive-card{background:#17171a;padding:clamp(1.25rem,2.4vw,2rem);min-width:0}
      .naya-archive-card .naya-object-meta{display:flex;flex-wrap:wrap;gap:.45rem .8rem;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:#8f8f99;margin-bottom:.7rem}
      .naya-archive-card img{display:block;width:100%;height:auto;max-height:520px;object-fit:contain;background:#111114;margin:0 0 1.15rem}
      .naya-archive-card p{font-size:.96rem;line-height:1.55;margin:.55rem 0;max-width:none}
      .naya-archive-card .naya-verification{color:#a9a9b1;font-size:.83rem}
      .era-libel-card .naya-expanded-copy{margin-top:1rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,.07)}
      .era-libel-card .naya-expanded-copy p{margin:.72rem 0}
      .home-source-context .three-eras-intro .naya-home-lede{font-size:clamp(1.05rem,1.45vw,1.24rem);line-height:1.56}
      @media(max-width:760px){.naya-archive-grid{grid-template-columns:1fr}.naya-source-update{margin:3.5rem auto}.naya-source-update p{line-height:1.58}}
    `;
    document.head.appendChild(style);
  }

  const sourceCopy = {
  "intro": [
    "For two thousand years, hatred of Jews has changed its language, its accusations, and its justifications, but not its target. How does this ancient hatred persist while continually taking new forms?",
    "This first-of-its-kind digital exhibition traces Jew-hatred across three distinct eras to reveal antizionism as the successor to antisemitism. In the first era, antijudaism, the Jew was condemned as the enemy of God. In the second, antisemitism, the Jew was cast as the enemy of race. And today, in the era of antizionism, Jews, through the Jewish state, are cast as violators of human rights—and therefore as enemies of humanity.",
    "Central to understanding this continuity is a recurring pattern: before society can vilify the Jew, it must first establish what it considers virtuous. The Jew is then accused of violating that virtue. When faith represented the highest moral good, the Jew was portrayed as the enemy of God. When race and nation became organizing ideals, the Jew was portrayed as their corrupting enemy. Today, as human rights have become a dominant moral ideal, the Jewish state is accused of committing humanity’s gravest crimes."
  ],
  "eras": [
    {
      "title": "Antijudaism",
      "paragraphs": [
        "For nearly two millennia, hatred of Jews was expressed primarily through the language of religion. In Christian Europe, where faith provided the dominant moral framework, the Jew was cast as the violator of what society held sacred: God, Christ, and Christian truth. Jews were accused of rejecting and killing Christ, desecrating the host, poisoning wells, conspiring against Christians, and murdering Christian children for their blood. These were not simply expressions of prejudice; they were libels that transformed the Jew into a cosmic villain—an enemy not merely of Christians, but of God Himself. Once the Jew was imagined as capable of the most monstrous crimes against the sacred, persecution could be understood not as cruelty, but as moral defense. Expulsions, forced conversions, segregation, massacres, and other forms of persecution could therefore be justified by those carrying them out as acts in service of a higher good. This established a pattern that would survive long after religious authority began to fade: first define the era’s highest virtue, then accuse the Jew of violating it. The language would change. The accusations would change. But the structure of the hatred would endure.",
        "This is what makes Jew-hatred so enduring and so difficult to recognize: it presents itself as a virtuous hatred. The Jew is not merely disliked but cast as a cosmic villain whose extermination becomes a moral act."
      ]
    },
    {
      "title": "Antisemitism",
      "paragraphs": [
        "Like antijudaism, which cast the Jew as a violator of society’s religious virtues, the antisemitic era recast the Jew as a violator of the virtues of an increasingly secular society. As European society shifted from a religious to a secular worldview, the moral framework changed—and the image of the Jew changed with it."
      ]
    },
    {
      "title": "Antizionism",
      "paragraphs": [
        "The postwar world supplied a new moral language. Empires were collapsing, national liberation movements were overturning colonial rule, and racism had become one of the defining evils of the age. Apartheid came to symbolize legalized racial domination; genocide, humanity’s ultimate crime. Human rights emerged as the era’s defining moral virtue. And once again, the Jew was recast as its enemy. Now reimagined as Zionist, the Jew was accused of embodying the very evils the postwar world had learned to condemn: racism, colonialism, apartheid, and genocide.",
        "Antizionism demonizes the Jew through the Jewish nation-state. Like antijudaism and antisemitism before it, antizionism portrays its Jewish target, Israel, as the embodiment of evil. Today, that evil is defined through the language of human rights. Israel is therefore accused of the era’s worst moral crimes: racism, colonialism, apartheid, genocide, and Nazism.",
        "Although antizionism emerged as a full-scale ideological campaign in the Soviet Union after 1967, its roots appeared much earlier. Antizionist ideas can already be found in Lenin’s writings in 1903 and later in the 1952 show trial of Rudolf Slánský, the Jewish General Secretary of the Communist Party of Czechoslovakia, who was accused of participating in a “Zionist conspiracy” against the state and subsequently executed. Slogans such as “Zionism is racism” and “Israel is committing a genocide” come from the Soviet Union. Few know the history of antizionism."
      ]
    }
  ],
  "framework": [
    "Antizionism demonizes the Jew through the Jewish nation-state. Like antijudaism and antisemitism before it, antizionism portrays its Jewish target, Israel, as the embodiment of evil. Today, that evil is defined through the language of human rights. Israel is therefore accused of the era’s worst moral crimes: racism, colonialism, apartheid, genocide, and Nazism.",
    "Although antizionism emerged as a full-scale ideological campaign in the Soviet Union after 1967, its roots appeared much earlier. Antizionist ideas can already be found in Lenin’s writings in 1903 and later in the 1952 show trial of Rudolf Slánský, the Jewish General Secretary of the Communist Party of Czechoslovakia, who was accused of participating in a “Zionist conspiracy” against the state and subsequently executed. Slogans such as “Zionism is racism” and “Israel is committing a genocide” come from the Soviet Union. Few know the history of antizionism."
  ],
  "libelIntro": [],
  "libels": [
    {
      "title": "Colonialism",
      "id": "colonialism",
      "paragraphs": [
        "The colonizer libel developed gradually, beginning with the denial of Jewish peoplehood. Before Jews could be portrayed as foreign colonizers in their ancestral homeland, they first had to be stripped of their identity as a nation. This process can be traced to early Soviet Marxism. In 1903, Lenin attacked the idea of Jewish nationhood as “reactionary,” and in 1913 Stalin explicitly argued that Jews did not constitute a nation. The next step was to recast Zionism as colonialism. In the 1920s, the Soviet Yevsektsiya and its newspaper Der Emes portrayed Zionism as an instrument of British imperialism and Western capitalism. The formula was taking shape: deny Jewish nationhood, then redefine the Jewish national movement as a colonial project.",
        "During the era of decolonization, this accusation became more explicit. Fayez Sayegh’s Zionist Colonialism in Palestine (1965) and Maxime Rodinson’s “Israel: A Colonial-Settler State?” (1967) helped establish the colonial framework. After 1967, the Soviet Union amplified it internationally. In Beware: Zionism! (1969), Soviet propagandist Yuri Ivanov portrayed Zionism as a “colonial ideology” and a form of “aggressive colonial expansion in the Middle East.” His book placed Zionism within a larger system of Western imperialism and presented Israel as an instrument of foreign capitalist power. This framing was subsequently repeated and disseminated internationally through the Soviet antizionist propaganda apparatus.",
        "Jews as invaders of Arab lands and colonizers existed not only well before Sayegh but more critically, before the re-establishment of Israel. Jews as invaders and occupiers in the context of the Levant first appeared in 1940/1941 when the Grand Mufti of Jerusalem, Haj Amin al-Husseini, traveled to Germany to meet with Hitler and high-ranking Nazi officials. Inspired by Nazi anti-Jewish propaganda, al-Husseini played a pivotal role in helping to translate into Arabic Nazi propaganda. By 1941, Arab broadcast radio spread the “invader” and “colonizer” libels, accusing Jews of wanting to take over Arab Lands and “colonize Palestine.” By 1971, the Soviets ran a sophisticated campaign against Israel, deploying the Zionism is racism and imperialism libels.",
        "The Nakba would become a central engine of the colonizer libel. The hundreds of thousands of Palestinian Arabs who fled during the 1948 war supplied the narrative with its defining image: the Palestinian refugee dispossessed by the Jewish settlers. Detached from the larger history of the war, competing national movements, Jewish displacement, and Jewish historical connection to the land, the Nakba could be organized into a simple moral structure: indigenous Palestinian → foreign Jewish settler → dispossession. In this formulation, the Nakba functions not merely as a Palestinian account of catastrophe and displacement but as the foundational evidence for interpreting Zionism itself as a project of settler conquest.",
        "The power of the settler-colonialism libel lies in its ability to recast Jews as foreign interlopers, severing them from their historical connection to the land and erasing Jewish peoplehood from the story. It therefore accomplishes two things at once: it inverts history by denying Jewish nationhood while demonizing Jews through the dominant moral language of the postwar world—colonialism, racism, and oppression."
      ]
    },
    {
      "title": "Apartheid and Racism Libels",
      "id": "apartheid",
      "paragraphs": [
        "The equation “Zionism = Racism” was crucial to the emerging apartheid charge. Apartheid South Africa had become the postwar world’s most recognizable symbol of institutionalized racism. By defining Zionism itself as a racist ideology, Soviet propaganda could place Israel within the same moral and political category as South Africa: colonialism became racial domination; racial domination became apartheid.",
        "The apartheid libel has a particularly traceable genealogy. It overlaps with the colonialism narrative we just mapped, but its history is distinct: the key move was to transform Zionism from a purported form of colonialism into a purported system of racial domination analogous to South Africa. One of the earliest explicit comparisons came not from Palestinian Arabs or the Soviet Union, but from Hendrik Verwoerd, the South African prime minister and principal architect of apartheid.",
        "Israel was then publicly opposing South African apartheid at the United Nations. In 1961 Verwoerd attacked Israel for doing so and compared Israel's creation to South Africa's own situation. The episode is important because during the early 1960s Israel was actually cultivating relationships with newly independent African states and taking an increasingly vocal anti-apartheid position. The apartheid libel gained particular traction with Fayez Sayegh’s Zionist Colonialism in Palestine, an instrumental in introducing the apartheid analogy into Palestinian advocacy and international institutions. Historian Nina Fischer's research concludes that Sayegh was “almost singlehandedly responsible for introducing the apartheid analogy at the United Nations.” In his 1965 Zionist Colonialism in Palestine, Sayegh already characterized Zionism in racial terms. His argument centered on what he called racial self-segregation, exclusiveness and supremacy. Importantly, this was before Israel occupied the West Bank and Gaza in 1967.",
        "The Soviet Union played an important role in systematizing and internationalizing the comparison of Zionism with apartheid, particularly in the 1970s. After 1967, Soviet propaganda increasingly argued that Zionism was not simply nationalism but an ideology of racial superiority. This made the South African analogy especially useful. Apartheid had become an internationally recognizable symbol of institutionalized racism; if Zionism could be defined as racism, Israel could then be placed in the same moral category as apartheid South Africa. As such, the apartheid libel relied heavily on the “Zionism is racism” charge.",
        "By the mid-1970s this comparison was explicit. One particularly important Soviet-bloc publication was Valery Skurlatov's Zionism and Apartheid (Сионизм и апартеид). Soviet propaganda literature used supposed parallels between Jewish “chosenness” and white supremacy to claim that Israel and South Africa were governed by analogous doctrines of racial separation. In August 1977, Soviet writer N. Oleynikov wrote through the official TASS news agency: “Tel Aviv and Pretoria are akin.”"
      ]
    },
    {
      "title": "Genocide",
      "id": "genocide",
      "paragraphs": [
        "After the 1967 Six-Day War, Soviet antizionist propaganda increasingly compared Israelis and Zionism with Nazi Germany. This matters enormously for the genocide genealogy because it supplied the necessary moral analogy: if Israelis could be represented as the ideological heirs or imitators of Nazis, Palestinian Arabs could correspondingly be represented as their victims.",
        "General Ion Pacepa, chief of Romania’s foreign intelligence service, played a significant role in Soviet bloc operations directed against Israel and the US. In 1978, he became the highest-ranking intelligence officer ever to defect from the Soviet sphere and, among many secret revelations, provided details of KGB operations against Israel. Pacepa says the chairman of the KGB, Yuri Andropov (later Leonid Brezhnev’s successor as General Secretary of the Soviet Communist Party), told him:",
        "“We needed to instill a Nazi-style hatred for the Jews throughout the Islamic world, and to turn this weapon of the emotions into a terrorist bloodbath against Israel and its main supporter, the United States.”",
        "To achieve its objectives, the Kremlin devised Operation SIG, a disinformation campaign intended “to turn the whole Islamic world against Israel and the US.” Pacepa reported that by 1978, under Operation SIG, the KGB had sent some 4,000 Soviet bloc “agents of influence” into Islamic countries to help achieve this. They also printed and circulated vast amounts of anti-Israel and anti-Jewish propaganda, including the fabricated, antisemitic text The Protocols of the Elders of Zion, translated into Arabic.",
        "During the 1970s, Soviet rhetoric increasingly combined several accusations that we've already been tracing separately:",
        "Israel = colonialism",
        "Zionism = racism",
        "Israel = Nazi-like aggressor",
        "These accusations reinforced one another. Palestinian Arabs could now be represented simultaneously as an indigenous population facing colonial dispossession, an Arab population subjected to racism, and a people facing Nazi-like violence. During the 1982 Lebanon War, the Soviet state moved from analogy to an explicit accusation of genocide. On June 6, the official Soviet news agency TASS accused Israel of pursuing: “genocide against the Arab people of Palestine” and described the objective as their: “physical extermination.” By 1984, the language becomes even more striking. The Soviet foreign-propaganda agency Novosti published an English-language pamphlet entitled Zionists Count on Terror. Izabella Tabarovsky has documented language in it including: “Genocide Israeli style,” “Zionist-engineered genocide” and even “the ‘final solution’ of the Palestinian question.”"
      ]
    }
  ],
  "archive": []
};
  const homeIntro = ["In May 2026, Stop Antizionism made history with the first World Symposium Against Antizionism. In 2027, we are making history again.", "The Third Era tells a story no museum has told. This first-of-its-kind exhibition brings the largely overlooked history of antizionism into public view. Through powerful archival documents, historical images, primary sources, multimedia, and survivor testimony, visitors will experience the evolution of Jew-hatred and discover how old libels were transformed, adapted, and given new language for a new era.", "Premiering in 2027, The Third Era is more than an exhibition. It is the beginning of a lasting educational initiative designed to travel to museums and universities, reach new generations, and bring a missing chapter of modern Jewish history into the public consciousness."];
  const paragraphs = values => values.map(text => p(text)).join('\n');
  const erasMarkup = () => '<div class="three-eras-intro" lang="en" dir="ltr">' + paragraphs(homeIntro) + '</div>' + sourceCopy.eras.map(era => '<div class="era-source-section" lang="en" dir="ltr"><h3>' + esc(era.title) + '</h3>' + paragraphs(era.paragraphs) + '</div>').join('');

  function updateHome() {
    const context = document.querySelector('.home-source-context');
    if (!context || context.dataset.nayaUpdated === '1') return;
    context.dataset.nayaUpdated = '1';
    const framework = document.querySelector('.home-framework');
    context.innerHTML = '<h2>The Three Eras of Jew-Hatred</h2>' + paragraphs(sourceCopy.intro) + erasMarkup();
    if (framework) context.querySelector('.era-source-section').before(framework);
  }

  const archiveObjects = [
  {
    "title": "“But He Does Not Listen to the UN…”",
    "img": "naya-nelyubin-un-1978.webp",
    "meta": "Fyodor F. Nelyubin with V. N. Suslov · design dated 1978; proof record 1980",
    "paragraphs": []
  },
  {
    "title": "“Sew on this little piece too!”",
    "img": "naya-lisogorsky-colonial-cartoon.webp",
    "meta": "N. Lisogorsky · Soviet anti-Zionist cartoon",
    "paragraphs": []
  },
  {
    "title": "“The Israeli Extremists’ Appetite”",
    "img": "naya-israeli-extremists-appetite.webp",
    "meta": "Sovetskaya Moldavia · June 4",
    "paragraphs": []
  },
  {
    "title": "“The Expansionists”",
    "img": "naya-expansionists-krokodil-1973.webp",
    "meta": "Krokodil · No. 20 · 1973",
    "paragraphs": []
  },
  {
    "title": "May Day anti-Zionist display, Moscow",
    "img": "naya-sychov-moscow-1972.webp",
    "meta": "Generally identified with photographer Vladimir Sychov · 1972",
    "paragraphs": []
  },
  {
    "title": "Zionist Colonialism in Palestine",
    "img": "naya-sayegh-1965.webp",
    "meta": "Fayez A. Sayegh · PLO Research Center · Beirut · September 1965 · Palestine Monographs No. 1",
    "paragraphs": []
  },
  {
    "title": "Beware: Zionism!",
    "img": "naya-ivanov-beware-zionism-1969.webp",
    "meta": "Yuri Ivanov · Moscow · 1969",
    "paragraphs": []
  },
  {
    "title": "“Israel: A Colonial-Settler State?”",
    "img": "naya-rodinson-1967.webp",
    "meta": "Maxime Rodinson · 1967",
    "paragraphs": []
  },
  {
    "title": "“Israeli Plan”",
    "img": "naya-cherepanov-israeli-plan-1979.webp",
    "meta": "Yuri Andreevich Cherepanov · 1979",
    "paragraphs": []
  },
  {
    "title": "Zionism = Racism",
    "img": "naya-efimovsky-zionism-racism-1976.webp",
    "meta": "Zh. (Joseph) Efimovsky · Combat Pencil · Leningrad · 1976",
    "paragraphs": []
  }
];

  function updateExhibition() {
    if (!/exhibition\.html$/i.test(location.pathname)) return;
    const libels = document.querySelector('.era-libels-section');
    if (!libels || libels.dataset.nayaUpdated === '1') return;
    libels.dataset.nayaUpdated = '1';

    const intro = document.createElement('section');
    intro.className = 'naya-source-update source-antizionism-framework';
    intro.id = 'antizionist-era';
    intro.lang = 'en';
    intro.dir = 'ltr';
    intro.innerHTML = '<h2>The Antizionist Era</h2>' + paragraphs(sourceCopy.framework) + '<h3>The Three Core Libels</h3>' + paragraphs(sourceCopy.libelIntro) + '<nav class="naya-section-links" aria-label="Explore the three libels"><a href="#colonialism">Colonialism</a><a href="#apartheid">Apartheid and racism</a><a href="#genocide">Genocide</a><a href="#exhibition-archive">The archive</a></nav>';
    libels.before(intro);
    const grid = libels.querySelector('.era-libels-grid');
    grid.innerHTML = sourceCopy.libels.map((essay,i)=>'<article class="era-libel-card" id="'+essay.id+'" lang="en" dir="ltr"><span aria-hidden="true" class="era-structure-number">0'+(i+1)+'</span><h3>'+esc(essay.title)+'</h3>'+paragraphs(essay.paragraphs).replace('<p class="" data-en="Settler-colonialism removes', '<h4>Settler-Colonialism and Settlers</h4><p class="" data-en="Settler-colonialism removes')+'</article>').join('');
    const archive = document.createElement('section');
    archive.className = 'naya-source-update naya-archive-update';
    archive.id = 'exhibition-archive';
    archive.lang = 'en';
    archive.dir = 'ltr';
    archive.innerHTML = '<h2>The Archive</h2>' + paragraphs(sourceCopy.archive) + '<div class="naya-archive-grid">' + archiveObjects.map((o,i)=>'<article class="naya-archive-card"><img loading="lazy" decoding="async" src="'+esc(o.img)+'" alt="'+esc(o.title)+'"><div class="naya-object-meta"><span>Object '+String(i+1).padStart(2,'0')+'</span><span>'+esc(o.meta)+'</span></div><h3>'+esc(o.title)+'</h3>'+paragraphs(o.paragraphs)+'</article>').join('')+'</div>';
    libels.after(archive);
  }

  function run() {
    installStyles();
    updateHome();
    updateExhibition();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run, {once:true});
  else run();
})();

