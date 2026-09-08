'use strict';

/*
  STOPAZ Digital Exhibition — museum-grade production behavior
  Presentation, wayfinding, catalogue disclosure, and accessibility only.
  It intentionally does not alter the project's thesis, timeline facts, or libel taxonomy.
*/
(() => {
  const qsa = (sel, root=document) => [...root.querySelectorAll(sel)];

  const slugify = (value) => String(value || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 70) || 'object';

  function uniqueId(base) {
    let id = base;
    let n = 2;
    while (document.getElementById(id)) id = `${base}-${n++}`;
    return id;
  }

  function installPermanentObjectIds() {
    const sections = qsa('.exhibition-section');
    sections.forEach((section, index) => {
      const title = section.querySelector('.art-caption-title,.info-title,h2,h3')?.textContent?.trim() || `Object ${index + 1}`;
      const date = section.querySelector('.art-caption-date,.info-meta')?.textContent?.trim() || '';
      if (!section.id) section.id = uniqueId(`object-${slugify(`${date}-${title}`)}`);
      section.dataset.museumObjectIndex = String(index + 1);

      const caption = section.querySelector('.art-caption-inline');
      if (caption && !caption.querySelector('.museum-object-link')) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'museum-object-link';
        btn.textContent = 'LINK';
        btn.setAttribute('aria-label', `Copy permanent link to ${title}`);
        btn.addEventListener('click', async (event) => {
          event.stopPropagation();
          const url = new URL(location.href);
          url.hash = section.id;
          try {
            await navigator.clipboard.writeText(url.href);
            const old = btn.textContent;
            btn.textContent = 'COPIED';
            setTimeout(() => { btn.textContent = old; }, 1200);
          } catch {
            location.hash = section.id;
          }
        });
        caption.appendChild(btn);
      }
    });
  }

  function classifyObjectRhythm() {
    const sections = qsa('.exhibition-section');
    sections.forEach((section, index) => {
      const img = section.querySelector('img.gallery-image');
      if (!img) return;
      const classify = () => {
        const w = Number(img.dataset.nativeWidth) || img.naturalWidth || img.width || 1;
        const h = Number(img.dataset.nativeHeight) || img.naturalHeight || img.height || 1;
        const ratio = w / h;
        section.classList.remove('museum-object-wide','museum-object-tall','museum-object-small','museum-feature-object');
        if (ratio >= 1.28) section.classList.add('museum-object-wide');
        else if (ratio <= .76) section.classList.add('museum-object-tall');
        if (w <= 650 || h <= 650 || img.classList.contains('quality-source-limited')) section.classList.add('museum-object-small');
        if (index % 5 === 0 || section.classList.contains('timeline-key')) section.classList.add('museum-feature-object');
      };
      if (img.complete) classify(); else img.addEventListener('load', classify, {once:true});
    });
  }

  function makeMotionOneWay() {
    const rooms = qsa('.exhibition-section,.genealogy-script,.chronology-interlude,.libel-marker,.era-structure-section,.naya-source-update,.home-source-context');
    if (!rooms.length) return;
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      rooms.forEach(room => room.classList.add('museum-seen'));
      return;
    }
    const seen = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const room = entry.target;
        /* allow the initial entrance to complete, then freeze the room in its final state */
        setTimeout(() => room.classList.add('museum-seen'), 1050);
        observer.unobserve(room);
      });
    }, {threshold:.08, rootMargin:'0px 0px -10% 0px'});
    rooms.forEach(room => seen.observe(room));
  }

  function revealUsefulProvenance() {
    qsa('.wall-archive-hidden,.history-wall-hidden').forEach(block => {
      const text = block.textContent.replace(/\s+/g,' ').trim();
      const meaningful = text.length > 35 && !/^(archive|history|source)\s*$/i.test(text);
      if (meaningful) block.classList.add('museum-provenance-visible');
    });
  }

  const catalogue = {
    '“But He Does Not Listen to the UN…”': {
      creator:'Fyodor Fedorovich Nelyubin, with V. N. Suslov. Soviet poster artists; additional creator biography remains to be completed in the working catalogue.',
      setting:'Soviet anti-Israel propaganda from the late Brezhnev period. The UN reprimand places Israel inside the moral language of international institutions and human rights.',
      archive:'Design dated 1978; a separate archival/auction record identifies a 1980 proof. Holding institution, permanent catalogue record, and rights credit remain to be supplied in the current working document.'
    },
    '“Sew on this little piece too!”': {
      creator:'N. Lisogorsky. Biographical context remains to be completed in the working catalogue.',
      setting:'Soviet anti-Zionist caricature presenting territorial expansion as a US-enabled project of constructing “Greater Israel.”',
      archive:'Exact publication, date, holding institution, permanent source, and rights credit are explicitly still to be verified.'
    },
    '“The Israeli Extremists’ Appetite”': {
      creator:'Published in Sovetskaya Moldavia; individual artist attribution is not supplied in the current working document.',
      setting:'Soviet visual propaganda portraying Israeli territorial ambition as an insatiable appetite consuming surrounding Arab lands.',
      archive:'June 4 publication record; year, holding institution, permanent source, and rights credit remain to be verified.'
    },
    '“The Expansionists”': {
      creator:'Published in Krokodil, No. 20 (1973); individual artist attribution is not supplied in the current working document.',
      setting:'A Soviet satirical image representing Israeli military figures as architects of a territorial “Greater Israel.”',
      archive:'Krokodil, No. 20, 1973. Holding institution, catalogue/accession record, permanent source, and rights credit remain to be added.'
    },
    'May Day anti-Zionist display, Moscow': {
      creator:'Photograph generally identified with Vladimir Sychov; final creator credit should follow the permanent archival record selected for publication.',
      setting:'May Day demonstration, Moscow, 1972. The display visualizes “Zionism” as a monstrous transnational force and reuses older conspiracy imagery.',
      archive:'Current working text identifies the photograph and scholarly discussion but does not yet supply a holding collection/accession number or final rights credit.'
    },
    'Zionist Colonialism in Palestine': {
      creator:'Fayez A. Sayegh, Palestinian intellectual and diplomat; published by the PLO Research Center.',
      setting:'Beirut, September 1965, during the global era of decolonization. The pamphlet became a pivotal text in the colonial framing of Zionism.',
      archive:'Palestine Monographs No. 1, PLO Research Center, Beirut. A permanent holding-library record and rights/credit line remain to be attached to the exhibit object.'
    },
    'Beware: Zionism!': {
      creator:'Yuri Ivanov; published through the Soviet Communist Party political publishing apparatus.',
      setting:'Moscow, 1969, in the post-1967 Soviet anti-Zionist campaign. The book gave propaganda claims the format of political analysis.',
      archive:'Moscow, 1969 edition. The current working document does not yet specify the displayed copy’s holding institution, catalogue number, or rights credit.'
    },
    '“Israel: A Colonial-Settler State?”': {
      creator:'Maxime Rodinson, French Marxist scholar.',
      setting:'1967 essay that interpreted Zionism through the history of European colonial expansion.',
      archive:'Publication is identified in the working document; the specific displayed scan’s permanent bibliographic/holding record and rights credit remain to be attached.'
    },
    '“Israeli Plan”': {
      creator:'Yuri Andreevich Cherepanov.',
      setting:'1979 Soviet cartoon presenting settlements, fortifications, and displacement as instruments of a colonial advance.',
      archive:'1979 object. Holding institution, collection/catalogue number, permanent source, and rights credit remain to be added.'
    },
    'Zionism = Racism': {
      creator:'Zh. (Joseph) Efimovsky; published by the Leningrad propaganda collective Combat Pencil (Боевой карандаш).',
      setting:'1976, one year after UN General Assembly Resolution 3379. The poster translates the “Zionism is racism” formula into an image of racial domination.',
      archive:'Combat Pencil, Leningrad, 1976. Holding institution, permanent catalogue/accession record, and rights credit remain to be attached to the displayed copy.'
    }
  };

  function addNayaCatalogueFields() {
    qsa('.naya-archive-card').forEach(card => {
      if (card.querySelector('.museum-catalogue-record')) return;
      const title = card.querySelector('h3')?.textContent?.trim();
      if (!title) return;
      const record = catalogue[title] || {
        creator:'Creator information remains to be completed from the approved working catalogue.',
        setting:'Historical-setting note remains to be completed from the approved working catalogue.',
        archive:'Holding institution, permanent source, and rights/credit information remain to be verified.'
      };
      const objectText = card.querySelector('p:not(.naya-verification)')?.textContent?.trim() || 'See object caption above.';
      const box = document.createElement('div');
      box.className = 'museum-catalogue-record';
      box.setAttribute('aria-label','Catalogue record');
      const rows = [
        ['Object', objectText],
        ['Creator', record.creator],
        ['Historical setting', record.setting],
        ['Archive', record.archive]
      ];
      box.innerHTML = rows.map(([key,value]) => `<div class="museum-catalogue-row"><div class="museum-catalogue-key">${key}</div><div class="museum-catalogue-value"></div></div>`).join('') + '<div class="museum-catalogue-status">Working catalogue · source verification preserved</div>';
      [...box.querySelectorAll('.museum-catalogue-value')].forEach((node,i) => node.textContent = rows[i][1]);
      card.appendChild(box);
      if (!card.id) card.id = uniqueId(`archive-${slugify(title)}`);
    });
  }

  function collectStops() {
    const stops = [];
    const push = (node,label) => {
      if (!node || stops.some(stop => stop.node === node)) return;
      if (!node.id) node.id = uniqueId(`room-${slugify(label)}`);
      stops.push({node,label});
    };

    qsa('.exhibition-section').forEach(section => {
      const title = section.querySelector('.art-caption-title,.info-title,h2,h3')?.textContent?.trim();
      const date = section.querySelector('.art-caption-date')?.textContent?.trim();
      if (title) push(section, date ? `${date} — ${title}` : title);
    });
    qsa('.genealogy-script').forEach(section => {
      const title = section.querySelector('h2,h3')?.textContent?.trim();
      if (title) push(section,title);
    });
    qsa('.naya-archive-card').forEach(card => {
      const title = card.querySelector('h3')?.textContent?.trim();
      if (title) push(card,`Archive — ${title}`);
    });
    return stops;
  }

  function installWayfinder() {
    if (document.getElementById('museum-wayfinder')) return;
    if (!/exhibition\.html$/i.test(location.pathname)) return;
    const stops = collectStops();
    if (stops.length < 3) return;

    const nav = document.createElement('nav');
    nav.id = 'museum-wayfinder';
    nav.setAttribute('aria-label','Exhibition wayfinding');
    nav.innerHTML = `
      <button class="museum-wayfinder-toggle" type="button" aria-expanded="false" aria-controls="museum-wayfinder-panel"><span class="museum-progress-dot" aria-hidden="true"></span><span class="museum-wayfinder-current">01 / ${String(stops.length).padStart(2,'0')}</span></button>
      <div class="museum-wayfinder-panel" id="museum-wayfinder-panel">
        <div class="museum-wayfinder-heading">Exhibition chronology & object index</div>
        <div class="museum-wayfinder-list"></div>
      </div>`;
    document.body.appendChild(nav);

    const toggle = nav.querySelector('.museum-wayfinder-toggle');
    const current = nav.querySelector('.museum-wayfinder-current');
    const list = nav.querySelector('.museum-wayfinder-list');
    const items = stops.map((stop,index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'museum-wayfinder-item';
      button.innerHTML = `<span class="museum-wayfinder-number">${String(index+1).padStart(2,'0')}</span><span class="museum-wayfinder-label"></span>`;
      button.querySelector('.museum-wayfinder-label').textContent = stop.label;
      button.addEventListener('click', () => {
        stop.node.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block:'start'});
        history.replaceState(null,'',`#${stop.node.id}`);
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded','false');
      });
      list.appendChild(button);
      return button;
    });

    const setActive = (index) => {
      items.forEach((item,i) => item.classList.toggle('is-active',i === index));
      current.textContent = `${String(index+1).padStart(2,'0')} / ${String(stops.length).padStart(2,'0')}`;
    };
    setActive(0);

    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded',String(open));
    });
    document.addEventListener('click', event => {
      if (!nav.contains(event.target)) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded','false');
      }
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded','false');
        toggle.focus();
      }
    });

    if ('IntersectionObserver' in window) {
      const activeObserver = new IntersectionObserver(entries => {
        const candidates = entries.filter(entry => entry.isIntersecting);
        if (!candidates.length) return;
        candidates.sort((a,b) => Math.abs(a.boundingClientRect.top - innerHeight*.34) - Math.abs(b.boundingClientRect.top - innerHeight*.34));
        const idx = stops.findIndex(stop => stop.node === candidates[0].target);
        if (idx >= 0) setActive(idx);
      }, {threshold:[.01,.15,.35],rootMargin:'-20% 0px -55% 0px'});
      stops.forEach(stop => activeObserver.observe(stop.node));
    }
  }

  function labelThirdEraAsAbout() {
    /* Content is retained; this only clarifies that the transition is institutional/project information. */
    qsa('.third-era-transition').forEach(section => section.setAttribute('data-exhibition-role','about-new-york-exhibition'));
  }

  function init() {
    document.documentElement.classList.add('museum-production-pass');
    installPermanentObjectIds();
    classifyObjectRhythm();
    makeMotionOneWay();
    revealUsefulProvenance();
    addNayaCatalogueFields();
    labelThirdEraAsAbout();
    installWayfinder();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(init,0), {once:true});
  else setTimeout(init,0);
})();
