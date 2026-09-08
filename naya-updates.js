'use strict';

/*
  STOPAZ exhibition content update
  Source authority: "What Naya needs to do", current revision modified 2026-09-03.
  This layer intentionally changes content only. It does not redesign existing pages,
  remove existing material, or activate the deferred "Antizionist crimes" section.
*/
(() => {
  const esc = (s) => String(s).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const p = (text, cls='') => `<p class="${cls}" data-en="${esc(text)}">${esc(text)}</p>`;

  function installStyles() {
    if (document.getElementById('naya-content-update-styles')) return;
    const style = document.createElement('style');
    style.id = 'naya-content-update-styles';
    style.textContent = `
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
      .naya-marr-note{border-left:1px solid rgba(116,38,45,.8);padding-left:clamp(1rem,2vw,1.5rem);margin:1.25rem 0 0}
      .era-libel-card .naya-expanded-copy{margin-top:1rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,.07)}
      .era-libel-card .naya-expanded-copy p{margin:.72rem 0}
      .home-source-context .three-eras-intro .naya-home-lede{font-size:clamp(1.05rem,1.45vw,1.24rem);line-height:1.56}
      @media(max-width:760px){.naya-archive-grid{grid-template-columns:1fr}.naya-source-update{margin:3.5rem auto}.naya-source-update p{line-height:1.58}}
    `;
    document.head.appendChild(style);
  }

  function updateHome() {
    const context = document.querySelector('.home-source-context');
    if (!context || context.dataset.nayaUpdated === '1') return;
    context.dataset.nayaUpdated = '1';

    const intro = context.querySelector('.three-eras-intro');
    if (intro) {
      const t1 = 'For two thousand years, hatred of Jews has changed its language, its accusations, and its justifications, but not its target. How does this ancient hatred persist while continually taking new forms?';
      const t2 = 'This first-of-its-kind digital exhibition traces Jew-hatred across three distinct eras to reveal antizionism as the successor to antisemitism. In the first era, antijudaism, the Jew was condemned as the enemy of God. In the second, antisemitism, the Jew was cast as the enemy of race. And today, in the era of antizionism, Jews, through the Jewish state, are cast as violators of human rights—and therefore as enemies of humanity.';
      const t3 = 'Central to understanding this continuity is a recurring pattern: before society can vilify the Jew, it must first establish what it considers virtuous. The Jew is then accused of violating that virtue. When faith represented the highest moral good, the Jew was portrayed as the enemy of God. When race and nation became organizing ideals, the Jew was portrayed as their corrupting enemy. Today, as human rights have become a dominant moral ideal, the Jewish state is accused of committing humanity’s gravest crimes.';
      const t4 = 'This is what makes Jew-hatred so enduring and so difficult to recognize: it presents itself as a virtuous hatred. The Jew is not merely disliked but cast as a cosmic villain whose extermination becomes a moral act.';
      intro.innerHTML = p(t1,'naya-home-lede') + p(t2) + p(t3) + p(t4);
    }

    const antisemitism = [...context.querySelectorAll('.era-source-section')].find(section => /Antisemitism/i.test(section.querySelector('h3')?.textContent || ''));
    if (antisemitism && !antisemitism.querySelector('.naya-marr-note')) {
      const box = document.createElement('div');
      box.className = 'naya-marr-note';
      box.innerHTML = p('Wilhelm Marr is central to this transition. In 1879, Marr helped popularize the new political vocabulary of “antisemitism,” presenting hostility to Jews not as a dispute over religion but as an allegedly permanent conflict between peoples. The change in terminology mattered: Jewish difference could now be framed as racial and national, and therefore as something conversion could not erase.');
      antisemitism.appendChild(box);
    }
  }

  function updateAntisemitismPage() {
    if (!/antisemitism\.html$/i.test(location.pathname)) return;
    const main = document.querySelector('main');
    if (!main || document.getElementById('naya-marr-focus')) return;
    const firstExhibit = main.querySelector('.exhibition-section');
    const section = document.createElement('section');
    section.id = 'naya-marr-focus';
    section.className = 'naya-source-update genealogy-script';
    section.innerHTML = `
      <div class="naya-kicker" data-en="THE RACIAL TURN">THE RACIAL TURN</div>
      <h2 data-en="Wilhelm Marr and the New Vocabulary of Antisemitism">Wilhelm Marr and the New Vocabulary of Antisemitism</h2>
      ${p('The nineteenth century did not merely inherit older anti-Jewish accusations; it recoded them. Wilhelm Marr belongs at the center of that transition. In 1879 he helped popularize the term “antisemitism” as a political label, shifting the imagined Jewish danger from theology toward race, nation, heredity, and an allegedly permanent conflict between peoples.','naya-lede')}
      ${p('That linguistic change made conversion an inadequate answer to the antisemite’s charge. If Jewishness was treated as an inherited racial or national condition, baptism could no longer remove the supposed danger. The Jew could be portrayed as a biological, political, economic, and national antagonist at once.')}
      ${p('Marr therefore marks a useful threshold between the first and second eras of Jew-hatred: the target remained the Jew, but the governing moral and explanatory vocabulary became secular, racial, and nationalist.')}
    `;
    if (firstExhibit) firstExhibit.before(section); else main.appendChild(section);
  }

  const expanded = {
    'Settler-Colonialism': [
      'The colonizer libel developed gradually, beginning with the denial of Jewish peoplehood. Before Jews could be portrayed as foreign colonizers in their ancestral homeland, they first had to be stripped of their identity as a nation. In 1903 Lenin attacked the idea of Jewish nationhood as reactionary, and in 1913 Stalin argued that Jews did not constitute a nation. In the 1920s, the Soviet Yevsektsiya and its newspaper Der Emes portrayed Zionism as an instrument of British imperialism and Western capitalism. The formula was taking shape: deny Jewish nationhood, then redefine the Jewish national movement as a colonial project.',
      'The “invader” and “colonizer” vocabulary also circulated before Israel’s establishment. During the Second World War, Haj Amin al-Husseini worked from Axis Europe and participated in Arabic-language propaganda aimed at the Middle East. By the postwar era, the colonial frame could be fused with the language of decolonization and anti-imperialism.',
      'During the era of decolonization, Fayez Sayegh’s Zionist Colonialism in Palestine (1965) and Maxime Rodinson’s “Israel: A Colonial-Settler State?” (1967) helped establish the colonial framework. After 1967, the Soviet Union amplified it internationally. Yuri Ivanov’s Beware: Zionism! (1969) portrayed Zionism as a colonial ideology and a form of aggressive expansion tied to Western imperial power.',
      'The Nakba became a central engine of the colonizer narrative. Palestinian displacement in the 1948 war could be organized into a simple moral structure—indigenous Palestinian, foreign Jewish settler, dispossession—while competing national movements, Jewish displacement, and Jewish historical connection to the land receded from the frame.'
    ],
    'Apartheid': [
      'The apartheid genealogy overlaps with the colonialism narrative but is distinct: the key move was to transform Zionism from a purported form of colonialism into a purported system of racial domination analogous to South Africa.',
      'One early explicit comparison came from Hendrik Verwoerd, South Africa’s prime minister and principal architect of apartheid, after Israel publicly opposed South African apartheid at the United Nations. In 1961 Verwoerd attacked Israel for that position and drew his own comparison between Israel and South Africa.',
      'Sayegh’s 1965 Zionist Colonialism in Palestine framed Zionism in racial terms before Israel occupied the West Bank and Gaza in 1967. After 1967, Soviet propaganda increasingly defined Zionism as an ideology of racial superiority, making the South African analogy especially useful. The equation “Zionism = Racism” created the bridge: colonialism became racial domination; racial domination became apartheid.',
      'By the mid-1970s the comparison was explicit in Soviet-bloc literature. Valery Skurlatov’s Zionism and Apartheid and official Soviet commentary presented Israel and South Africa as analogous political systems, embedding the comparison in an international propaganda vocabulary.'
    ],
    'Genocide': [
      'After the 1967 Six-Day War, Soviet antizionist propaganda increasingly compared Israel and Zionism with Nazi Germany. Posters and political imagery used swastikas, SS associations, jackboots, blood, executions, and concentration-camp imagery. That analogy supplied a moral bridge for later genocide accusations: Israelis could be cast as Nazi-like perpetrators and Palestinian Arabs as their corresponding victims.',
      'Ion Mihai Pacepa, the former head of Romanian foreign intelligence who defected in 1978, later described Soviet-bloc efforts to intensify anti-Israel and anti-Jewish propaganda across the Middle East, including Operation SIG and the circulation of The Protocols of the Elders of Zion in Arabic. His retrospective account should be read as intelligence testimony rather than an archival Soviet directive, but it is part of the documented history of Cold War disinformation claims.',
      'During the 1982 Lebanon War, official Soviet rhetoric moved from Nazi analogy to an explicit genocide accusation. TASS accused Israel of “genocide against the Arab people of Palestine” and spoke of “physical extermination.” By 1984, Novosti propaganda used formulations such as “Genocide Israeli style” and “Zionist-engineered genocide,” extending the earlier inversion of Holocaust and Nazi imagery.',
      'The result was a layered indictment in which Israel could simultaneously be represented as colonial, racist, and Nazi-like. The genocide charge did not emerge in isolation; it inherited and intensified the preceding colonialism, racism, and fascism frames.'
    ]
  };

  const archiveObjects = [
    {
      title:'“But He Does Not Listen to the UN…”', img:'naya-nelyubin-un-1978.webp', meta:'Fyodor F. Nelyubin with V. N. Suslov · design dated 1978; proof record 1980',
      text:'A Soviet propaganda poster directed against Israel. A wagging finger associated with the United Nations reprimands Israel, visually casting the Jewish state as a persistent violator of the international moral order. In Naya’s exhibition framework, the object illustrates the shift toward human-rights-coded condemnation.'
    },
    {
      title:'“Sew on this little piece too!”', img:'naya-lisogorsky-colonial-cartoon.webp', meta:'N. Lisogorsky · Soviet anti-Zionist cartoon · c. 1970s–early 1980s; exact publication/date to verify',
      text:'A seamstress works at a “Made in USA” sewing machine while an Israeli figure points from a map of the Arab world toward a “Greater Israel.” American money and the machine frame territorial expansion as a US-enabled colonial project.'
    },
    {
      title:'“The Israeli Extremists’ Appetite”', img:'naya-israeli-extremists-appetite.webp', meta:'Sovetskaya Moldavia · June 4 · year to verify',
      text:'An Israeli general stretches exaggerated arms across a map marked “Arab Countries.” The image converts territorial ambition into an image of insatiable appetite and depicts Israel as a power consuming the surrounding Arab world.'
    },
    {
      title:'“The Expansionists”', img:'naya-expansionists-krokodil-1973.webp', meta:'Krokodil · No. 20 · 1973',
      text:'Israeli military figures draw a proposed “Greater Israel” across a map of the Middle East while the Star of David becomes outward-pointing arrows. The image gives the colonial-expansion accusation a compact visual form.'
    },
    {
      title:'May Day anti-Zionist display, Moscow', img:'naya-sychov-moscow-1972.webp', meta:'Generally identified with photographer Vladimir Sychov · 1972',
      text:'A giant spider-like creature wearing a military-style cap marked with a Star of David spreads across a globe-like web. The object visualizes “Zionism” not simply as Israeli policy but as a predatory transnational force, recycling older conspiracy imagery within Soviet antizionist propaganda.'
    },
    {
      title:'Zionist Colonialism in Palestine', img:'naya-sayegh-1965.webp', meta:'Fayez A. Sayegh · PLO Research Center · Beirut · September 1965 · Palestine Monographs No. 1',
      text:'The pamphlet is a pivotal text in the colonial framing of Zionism. Published during the global era of decolonization, it situated Zionism within European colonial conquest and racial domination.'
    },
    {
      title:'Beware: Zionism!', img:'naya-ivanov-beware-zionism-1969.webp', meta:'Yuri Ivanov · Moscow · 1969',
      text:'Published by the Communist Party’s political publishing apparatus, Ivanov’s book presented Zionism as a colonial ideology tied to imperialism, capitalism, conspiracy, and aggressive expansion. Its analytical form helped give state propaganda the appearance of political scholarship.'
    },
    {
      title:'“Israel: A Colonial-Settler State?”', img:'naya-rodinson-1967.webp', meta:'Maxime Rodinson · 1967',
      text:'Rodinson reframed Zionism through the history of European colonial expansion rather than primarily as a conflict between competing national movements. The essay became an influential intellectual formulation of the settler-colonial frame.'
    },
    {
      title:'“Israeli Plan”', img:'naya-cherepanov-israeli-plan-1979.webp', meta:'Yuri Andreevich Cherepanov · 1979',
      text:'Israeli settlements are rendered as instruments of colonial advance. A document announces a “Plan for the Construction of Israeli Military Settlements” while fortified structures and barbed wire advance and Arab civilians are driven from the territory.'
    },
    {
      title:'Zionism = Racism', img:'naya-efimovsky-zionism-racism-1976.webp', meta:'Zh. (Joseph) Efimovsky · Combat Pencil · Leningrad · 1976',
      text:'Published one year after UN General Assembly Resolution 3379, the poster shows an Arab man restrained by a Star of David-shaped collar. It translates the political formula “Zionism is racism” into an image of racial domination and helps explain the emerging bridge from racism to the apartheid analogy.'
    }
  ];

  function updateExhibition() {
    if (!/exhibition\.html$/i.test(location.pathname)) return;
    const libels = document.querySelector('.era-libels-section');
    if (!libels || libels.dataset.nayaUpdated === '1') return;
    libels.dataset.nayaUpdated = '1';

    const intro = document.createElement('section');
    intro.className = 'naya-source-update source-antizionism-framework';
    intro.innerHTML = `
      <div class="naya-kicker" data-en="THE ANTIZIONIST ERA">THE ANTIZIONIST ERA</div>
      <h2 data-en="The Three Core Libels">The Three Core Libels</h2>
      ${p('Antizionism demonizes the Jew through the Jewish nation-state. Like antijudaism and antisemitism before it, antizionism portrays its Jewish target, Israel, as the embodiment of evil. Today, that evil is defined through the language of human rights. Israel is therefore accused of the era’s worst moral crimes: racism, colonialism, apartheid, genocide, and Nazism.','naya-lede')}
      ${p('Although antizionism emerged as a full-scale ideological campaign in the Soviet Union after 1967, its roots appeared much earlier. Early Marxist disputes over Jewish nationhood, Nazi and Arab nationalist propaganda, Stalinist anti-Zionist conspiracy accusations, the settler-colonial frame, and the post-1967 Soviet campaign form a genealogy that predates contemporary activist usage.')}
      ${p('Three core accusations—colonialism, apartheid or racism, and genocide or Nazism—have acquired exceptional authority within contemporary antizionism. Together they place Zionism inside the most discredited moral categories of the modern era: illegitimate in origin, racist in essence, and exterminatory in purpose.')}
    `;
    libels.before(intro);

    [...libels.querySelectorAll('.era-libel-card')].forEach(card => {
      const heading = card.querySelector('h3')?.textContent?.trim();
      const paras = expanded[heading];
      if (!paras || card.querySelector('.naya-expanded-copy')) return;
      const box = document.createElement('div');
      box.className = 'naya-expanded-copy';
      box.innerHTML = paras.map(text => p(text)).join('');
      card.appendChild(box);
    });

    const archive = document.createElement('section');
    archive.className = 'naya-source-update naya-archive-update';
    archive.innerHTML = `
      <div class="naya-kicker" data-en="NEW OBJECT NOTES · NAYA REVISION 2026-09-03">NEW OBJECT NOTES · NAYA REVISION 2026-09-03</div>
      <h2 data-en="Archive Objects Added to the Exhibition Record">Archive Objects Added to the Exhibition Record</h2>
      ${p('Naya’s current exhibition document adds the following objects and catalogue interpretations to the working record. Where the document itself marks a publication date or archival attribution as unverified, that qualification is preserved here.','naya-lede')}
      <div class="naya-archive-grid">
        ${archiveObjects.map((o,i) => `<article class="naya-archive-card"><img loading="lazy" decoding="async" src="${esc(o.img)}" alt="${esc(o.title)}"><div class="naya-object-meta"><span>Object ${String(i+1).padStart(2,'0')}</span><span>${esc(o.meta)}</span></div><h3>${esc(o.title)}</h3>${p(o.text)}${/verify/i.test(o.meta) ? '<p class="naya-verification">Catalogue note: exact publication/date remains marked for verification in the source document.</p>' : ''}</article>`).join('')}
      </div>
    `;
    libels.after(archive);
  }

  function run() {
    installStyles();
    updateHome();
    updateAntisemitismPage();
    updateExhibition();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run, {once:true});
  else run();
})();
