/* Full Hebrew and Russian translations of the supplied exhibition copy. */
(() => {
const rows = [
  [
    "Within this, the Jew was recast as the Zionist.",
    "בתוך המסגרת הזאת עוצב היהודי מחדש כציוני.",
    "В этой системе еврей был переосмыслен как сионист."
  ],
  [
    "Apartheid converts political conflict into racial ontology.",
    "אפרטהייד הופך סכסוך פוליטי לאונטולוגיה גזעית.",
    "Апартеид превращает политический конфликт в расовую онтологию."
  ],
  [
    "Israel = colonialism",
    "ישראל = קולוניאליזם",
    "Израиль = колониализм"
  ],
  [
    "Zionism = racism",
    "ציונות = גזענות",
    "Сионизм = расизм"
  ],
  [
    "Israel = Nazi-like aggressor",
    "ישראל = תוקפן דמוי־נאצי",
    "Израиль = агрессор нацистского типа"
  ],
  [
    "It attributes exterminatory purpose to Jewish sovereignty.",
    "היא מייחסת תכלית השמדתית לריבונות היהודית.",
    "Оно приписывает еврейскому суверенитету истребительную цель."
  ],
  [
    "Object",
    "פריט",
    "Экспонат"
  ],
  [
    "Creator",
    "יוצר",
    "Автор"
  ],
  [
    "Historical setting",
    "הקשר היסטורי",
    "Исторический контекст"
  ],
  [
    "Archive",
    "ארכיון",
    "Архив"
  ],
  [
    "“But He Does Not Listen to the UN…”",
    "״אבל הוא אינו מקשיב לאו״ם…״",
    "«А он — не слушает ООН…»"
  ],
  [
    "Fyodor F. Nelyubin with V. N. Suslov · design dated 1978; proof record 1980",
    "פיודור פ' נליובין עם ו' נ' סוסלוב · העיצוב מתוארך ל־1978; רישום הדפסת ניסיון מ־1980",
    "Фёдор Ф. Нелюбин совместно с В. Н. Сусловым · эскиз датирован 1978 годом; пробный оттиск — 1980 годом"
  ],
  [
    "“Sew on this little piece too!”",
    "״תפרי גם את החתיכה הקטנה הזאת!״",
    "«Пришей и этот кусочек!»"
  ],
  [
    "N. Lisogorsky · Soviet anti-Zionist cartoon",
    "נ׳ ליסוגורסקי · קריקטורה סובייטית אנטי־ציונית",
    "Н. Лисогорский · советская антисионистская карикатура"
  ],
  [
    "The caption reads: “Sew on this little piece too!”",
    "הכיתוב אומר: ״תפרי גם את החתיכה הקטנה הזאת!״",
    "Подпись гласит: «Пришей и этот кусочек!»"
  ],
  [
    "N. Lisogorsky. Biographical context remains to be completed in the working catalogue.",
    "נ' ליסוגורסקי. ההקשר הביוגרפי יושלם בקטלוג העבודה.",
    "Н. Лисогорский. Биографический контекст предстоит дополнить в рабочем каталоге."
  ],
  [
    "Soviet anti-Zionist caricature presenting territorial expansion as a US-enabled project of constructing “Greater Israel.”",
    "קריקטורה סובייטית אנטי־ציונית המציגה התפשטות טריטוריאלית כמיזם הנתמך בידי ארצות הברית לבניית ״ישראל גדולה״.",
    "Советская антисионистская карикатура, представляющая территориальную экспансию как поддерживаемый США проект строительства «Великого Израиля»."
  ],
  [
    "“The Israeli Extremists’ Appetite”",
    "״תיאבונם של הקיצונים הישראלים״",
    "«Аппетиты израильских экстремистов»"
  ],
  [
    "Sovetskaya Moldavia · June 4",
    "סובייטסקאיה מולדביה · 4 ביוני",
    "Советская Молдавия · 4 июня"
  ],
  [
    "Image: “The Israeli Extremists’ Appetite”. Sovetskaya Moldavia, June 4. Soviet Union",
    "תמונה: ״תיאבונם של הקיצונים הישראלים״. סובייטסקאיה מולדביה, 4 ביוני. ברית המועצות",
    "Изображение: «Аппетит израильских экстремистов». Советская Молдавия, 4 июня. Советский Союз"
  ],
  [
    "“The Expansionists”",
    "״המתפשטים״",
    "«Экспансионисты»"
  ],
  [
    "Krokodil · No. 20 · 1973",
    "קרוקודיל · גיליון 20 · 1973",
    "«Крокодил» · № 20 · 1973"
  ],
  [
    "May Day anti-Zionist display, Moscow",
    "מיצג אנטי־ציוני באחד במאי, מוסקבה",
    "Антисионистская композиция на Первомае, Москва"
  ],
  [
    "Generally identified with photographer Vladimir Sychov · 1972",
    "מיוחס בדרך כלל לצלם ולדימיר סיצ'וב · 1972",
    "Обычно приписывается фотографу Владимиру Сычёву · 1972"
  ],
  [
    "Zionist Colonialism in Palestine",
    "הקולוניאליזם הציוני בפלסטין",
    "Сионистский колониализм в Палестине"
  ],
  [
    "Fayez A. Sayegh · PLO Research Center · Beirut · September 1965 · Palestine Monographs No. 1",
    "פאיז א' סאייג · מרכז המחקר של אש״ף · ביירות · ספטמבר 1965 · מונוגרפיות פלסטין מס' 1",
    "Файез А. Сайег · Исследовательский центр ООП · Бейрут · сентябрь 1965 · «Палестинские монографии», № 1"
  ],
  [
    "Fayez A. Sayegh, Palestinian intellectual and diplomat; published by the PLO Research Center.",
    "פאיז א' סאייג, אינטלקטואל ודיפלומט פלסטיני; פורסם בידי מרכז המחקר של אש״ף.",
    "Файез А. Сайег, палестинский интеллектуал и дипломат; издание Исследовательского центра ООП."
  ],
  [
    "Beware: Zionism!",
    "זהירות: ציונות!",
    "Осторожно: сионизм!"
  ],
  [
    "Yuri Ivanov · Moscow · 1969",
    "יורי איוואנוב · מוסקבה · 1969",
    "Юрий Иванов · Москва · 1969"
  ],
  [
    "Yuri Ivanov; published through the Soviet Communist Party political publishing apparatus.",
    "יורי איוואנוב; פורסם באמצעות מנגנון ההוצאה הפוליטית של המפלגה הקומוניסטית הסובייטית.",
    "Юрий Иванов; издание политического издательского аппарата Коммунистической партии Советского Союза."
  ],
  [
    "“Israel: A Colonial-Settler State?”",
    "״ישראל: מדינה קולוניאלית־התיישבותית?״",
    "«Израиль: колониально-поселенческое государство?»"
  ],
  [
    "Maxime Rodinson · 1967",
    "מקסים רודינסון · 1967",
    "Максим Родинсон · 1967"
  ],
  [
    "Maxime Rodinson, French Marxist scholar.",
    "מקסים רודינסון, חוקר מרקסיסט צרפתי.",
    "Максим Родинсон, французский учёный-марксист."
  ],
  [
    "1967 essay that interpreted Zionism through the history of European colonial expansion.",
    "מאמר מ־1967 שפירש את הציונות דרך תולדות ההתפשטות הקולוניאלית האירופית.",
    "Эссе 1967 года, трактующее сионизм через историю европейской колониальной экспансии."
  ],
  [
    "“Israeli Plan”",
    "״התוכנית הישראלית״",
    "«Израильский план»"
  ],
  [
    "Yuri Andreevich Cherepanov · 1979",
    "יורי אנדרייביץ' צ'רפנוב · 1979",
    "Юрий Андреевич Черепанов · 1979"
  ],
  [
    "Yuri Andreevich Cherepanov.",
    "יורי אנדרייביץ' צ'רפנוב.",
    "Юрий Андреевич Черепанов."
  ],
  [
    "1979 Soviet cartoon presenting settlements, fortifications, and displacement as instruments of a colonial advance.",
    "קריקטורה סובייטית מ־1979 המציגה יישובים, ביצורים ועקירה ככלים של התקדמות קולוניאלית.",
    "Советская карикатура 1979 года, представляющая поселения, укрепления и вытеснение населения как инструменты колониального наступления."
  ],
  [
    "Zionism = Racism",
    "ציונות = גזענות",
    "Сионизм = расизм"
  ],
  [
    "Zh. (Joseph) Efimovsky · Combat Pencil · Leningrad · 1976",
    "ז' (יוסף) אפימובסקי · העיפרון הלוחם · לנינגרד · 1976",
    "Ж. (Иосиф) Ефимовский · «Боевой карандаш» · Ленинград · 1976"
  ],
  [
    "Zh. (Joseph) Efimovsky; published by the Leningrad propaganda collective Combat Pencil (Боевой карандаш).",
    "ז' (יוסף) אפימובסקי; פורסם בידי קולקטיב התעמולה הלנינגרדי ״העיפרון הלוחם״ (Боевой карандаш).",
    "Ж. (Иосиф) Ефимовский; издание ленинградского пропагандистского коллектива «Боевой карандаш»."
  ],
  [
    "The Three Eras of Jew-Hatred",
    "שלוש תקופות של שנאת יהודים",
    "Три эпохи ненависти к евреям"
  ],
  [
    "Antijudaism",
    "אנטי־יהדות",
    "Антииудаизм"
  ],
  [
    "Antisemitism",
    "אנטישמיות",
    "Антисемитизм"
  ],
  [
    "Antizionism",
    "אנטי־ציונות",
    "Антисионизм"
  ],
  [
    "The Antizionist Era",
    "עידן האנטי־ציונות",
    "Эпоха антисионизма"
  ],
  [
    "The Three Core Libels",
    "שלוש העלילות המרכזיות",
    "Три основных навета"
  ],
  [
    "Colonialism",
    "קולוניאליזם",
    "Колониализм"
  ],
  [
    "Apartheid and Racism Libels",
    "עלילות האפרטהייד והגזענות",
    "Наветы об апартеиде и расизме"
  ],
  [
    "Apartheid and racism",
    "אפרטהייד וגזענות",
    "Апартеид и расизм"
  ],
  [
    "Genocide",
    "רצח עם",
    "Геноцид"
  ],
  [
    "Settler-Colonialism and Settlers",
    "קולוניאליזם התיישבותי ומתיישבים",
    "Поселенческий колониализм и поселенцы"
  ],
  [
    "The archive",
    "הארכיון",
    "Архив"
  ],
  [
    "The Archive",
    "הארכיון",
    "Архив"
  ],
  [
    "How to read the archive",
    "כיצד לקרוא את הארכיון",
    "Как читать архив"
  ],
  [
    "THE RACIAL TURN",
    "המפנה הגזעי",
    "РАСОВЫЙ ПОВОРОТ"
  ],
  [
    "Creator, context & archive",
    "יוצר, הקשר וארכיון",
    "Автор, контекст и архив"
  ],
  [
    "Exact publication/date remains to be verified.",
    "הפרסום והתאריך המדויקים עדיין טעונים אימות.",
    "Точные издание и дата требуют уточнения."
  ],
  [
    "Working catalogue · source verification preserved",
    "קטלוג עבודה · הערות אימות המקורות נשמרו",
    "Рабочий каталог · примечания об уточнении источников сохранены"
  ],
  [
    "Catalogue record",
    "רשומת קטלוג",
    "Каталожная запись"
  ],
  [
    "Exhibition index",
    "מפתח התערוכה",
    "Указатель выставки"
  ],
  [
    "EXHIBITION INDEX",
    "מפתח התערוכה",
    "УКАЗАТЕЛЬ ВЫСТАВКИ"
  ],
  [
    "LINK",
    "קישור",
    "ССЫЛКА"
  ],
  [
    "COPIED",
    "הועתק",
    "СКОПИРОВАНО"
  ],
  [
    "Archive",
    "ארכיון",
    "Архив"
  ],
  [
    "Explore the three libels",
    "עיון בשלוש העלילות",
    "Исследовать три навета"
  ],
  [
    "Open exhibition index",
    "פתיחת מפתח התערוכה",
    "Открыть указатель выставки"
  ],
  [
    "Close exhibition index",
    "סגירת מפתח התערוכה",
    "Закрыть указатель выставки"
  ],
  [
    "See object caption above.",
    "ראו את כיתוב הפריט לעיל.",
    "См. подпись к экспонату выше."
  ],
  [
    "Object 01",
    "פריט 01",
    "Экспонат 01"
  ],
  [
    "Object 02",
    "פריט 02",
    "Экспонат 02"
  ],
  [
    "Object 03",
    "פריט 03",
    "Экспонат 03"
  ],
  [
    "Object 04",
    "פריט 04",
    "Экспонат 04"
  ],
  [
    "Object 05",
    "פריט 05",
    "Экспонат 05"
  ],
  [
    "Object 06",
    "פריט 06",
    "Экспонат 06"
  ],
  [
    "Object 07",
    "פריט 07",
    "Экспонат 07"
  ],
  [
    "Object 08",
    "פריט 08",
    "Экспонат 08"
  ],
  [
    "Object 09",
    "פריט 09",
    "Экспонат 09"
  ],
  [
    "Object 10",
    "פריט 10",
    "Экспонат 10"
  ],
  [
    "About this work",
    "על היצירה",
    "Об этой работе"
  ]
];
const normalize = text => String(text || '').replace(/\s+/g,' ').trim();
rows.push(
  ['Exhibition chronology & object index','ציר הזמן ומפתח הפריטים של התערוכה','Хронология выставки и указатель экспонатов'],
  ['Exhibition wayfinding','ניווט בתערוכה','Навигация по выставке'],
  ['Three eras of Jew-hatred','שלוש תקופות של שנאת יהודים','Три эпохи ненависти к евреям'],
  ['Antijudaism gallery image','תמונת הכניסה לחדר האנטי־יהדות','Изображение у входа в зал антииудаизма'],
  ['Antisemitism gallery image','תמונת הכניסה לחדר האנטישמיות','Изображение у входа в зал антисемитизма'],
  ['Antizionism gallery image','תמונת הכניסה לחדר האנטי־ציונות','Изображение у входа в зал антисионизма'],
  ['Antijudaism gallery introduction','תמונת המבוא לחדר האנטי־יהדות','Вступительное изображение зала антииудаизма'],
  ['Antisemitism gallery introduction','תמונת המבוא לחדר האנטישמיות','Вступительное изображение зала антисемитизма'],
  ['Bund Archival Image','תצלום ארכיוני של הבונד','Архивная фотография Бунда']
);

const dictionary = new Map(rows.map(row=>[normalize(row[0]),row]));
function prepare() {
  document.querySelectorAll("[data-source-author]").forEach(node=>{delete node.dataset.he; delete node.dataset.ru; node.lang="en"; node.dir="ltr";});
  document.querySelectorAll("[data-source-author]").forEach(node=>{delete node.dataset.he; delete node.dataset.ru; node.lang="en"; node.dir="ltr";});
  // Existing translations remain the source for objects that were already bilingual.
  document.querySelectorAll('[data-en][data-he][data-ru]').forEach(node=>{
    const key=normalize(node.dataset.en);
    if (!dictionary.has(key)) dictionary.set(key,[node.dataset.en,node.dataset.he,node.dataset.ru]);
  });
  document.querySelectorAll('[data-en],main p,main h1,main h2,main h3,main h4,main summary,main a,main button,.naya-kicker,.naya-object-meta span,.museum-catalogue-key,.museum-catalogue-value,.museum-catalogue-status,.museum-object-link,.museum-wayfinder-heading').forEach(node=>{
    if (node.querySelector('img,picture,svg,video') || node.matches('[data-he][data-ru]')) return;
    if (node.hasAttribute('data-source-author')) return;
    if (node.hasAttribute('data-source-author')) return;
    const en = node.dataset.en || node.textContent;
    const values = dictionary.get(normalize(en));
    if (!values) return;
    ['en','he','ru'].forEach((lang,i)=>node.dataset[lang]=values[i]);
  });
  document.querySelectorAll('.naya-source-update[lang],.naya-source-update [lang],.home-source-context [lang]').forEach(node=>{
    if (!node.hasAttribute('data-source-author')) { node.removeAttribute('lang'); node.removeAttribute('dir'); }
  });
  document.querySelectorAll('img[alt]').forEach(img=>{
    if (!img.dataset.altEn) img.dataset.altEn=img.alt;
  });
}
function apply() {
  prepare();
  const lang = ['he','ru'].includes(document.documentElement.lang) ? document.documentElement.lang : 'en';
  document.documentElement.dir = lang==='he' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-en][data-he][data-ru]').forEach(node=>{
    if (node.id === 'audio-btn' || node.querySelector('img,picture,svg,video')) return;
    const value=node.dataset[lang];
    node.textContent=value;
    if (node.dataset.fullText) node.dataset.fullText=value;
  });
  document.querySelectorAll('img[data-alt-en]').forEach(img=>{
    const values=dictionary.get(normalize(img.dataset.altEn));
    if(values) img.alt=values[{en:0,he:1,ru:2}[lang]];
  });
  document.querySelectorAll('.museum-wayfinder-item[data-room-target]').forEach(button=>{
    const stop=document.getElementById(button.dataset.roomTarget);
    const heading=stop?.querySelector('.art-caption-title,.info-title,h2,h3');
    const label=button.querySelector('.museum-wayfinder-label');
    if(heading && label) label.textContent=heading.textContent.trim();
  });
  document.querySelectorAll('[aria-label]').forEach(node=>{
    if (!node.dataset.localeAria) node.dataset.localeAria=node.getAttribute('aria-label');
    const values=dictionary.get(normalize(node.dataset.localeAria));
    if(values) node.setAttribute('aria-label', values[{en:0,he:1,ru:2}[lang]]);
  });
  document.querySelectorAll('button.art-box').forEach(button=>{
    const description=button.querySelector('img')?.alt;
    if (!description) return;
    const prefix={en:'Enlarge artwork: ',he:'הגדלת היצירה: ',ru:'Увеличить произведение: '}[lang];
    button.setAttribute('aria-label',prefix+description);
  });
  document.querySelectorAll('.museum-object-link').forEach(button=>{
    const title=button.closest('.art-caption-inline')?.querySelector('.art-caption-title')?.textContent;
    if (!title) return;
    const prefix={en:'Copy permanent link to ',he:'העתקת קישור קבוע אל ',ru:'Скопировать постоянную ссылку на '}[lang];
    button.setAttribute('aria-label',prefix+title);
  });
  window.gallerySound?.update();
  const current = new URL(location.href);
  current.searchParams.set('lang',lang);
  history.replaceState(null,'',current.href);
  document.querySelectorAll('a[href]').forEach(link=>{
    const target=new URL(link.getAttribute('href'),location.href);
    if (target.origin!==location.origin || !/\/(index|exhibition|antijudaism|antisemitism)\.html$/.test(target.pathname)) return;
    target.searchParams.set('lang',lang);
    link.href=target.href;
  });
}
window.galleryLocale={prepare,apply};
prepare();

})();

