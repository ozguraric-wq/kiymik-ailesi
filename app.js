(() => {
  'use strict';
  const characters = [
    {name:'Öykü',role:'7 yaş · Merakıyla yol açan',age:'Küçük mucit, büyük hayal gücü',intro:'Neşeli, yaratıcı ve elinden iş gelen Öykü, her soruna bir çözüm arar. Bilmeceleri, zekâ oyunlarını ve dedesinin atölyesinde güvenle üretmeyi sever. En yakın arkadaşları Aslı, Ece ve Alp’tir.',traits:['Meraklı','Becerikli','Kararlı'],detail:'Sevdikleri tarafından hatırlanmak onun için çok değerlidir. Kırıldığında duygularını doğrudan söylemek yerine peluş ayıcığıyla dertleşir; işlerini bazen son dakikaya bırakır.'},
    {name:'Arda',role:'9 yaş · Yerinde duramayan ağabey',age:'Biraz sakar, çok iyi niyetli',intro:'Futbola tutkun, resme yetenekli Arda’nın dünyası hareketlidir. Kardeşiyle didişse de onu hep korur. Bilmeceler sormayı ve dedesinin anlattığı geçmiş hikâyelerini dinlemeyi çok sever.',traits:['Hareketli','Yardımsever','Yetenekli'],detail:'Sabırsızlığı ve dağınıklığı bazen işleri karıştırır. Resim yaparken kendi alanına ihtiyaç duyar; en yakın arkadaşı ve sırdaşı Çetin’dir.'},
    {name:'Dede',role:'Cemal Dede · Ailenin usta elleri',age:'Atölyenin ustası, ailenin hafızası',intro:'Baba mesleği marangozluğu sürdüren dede, torunları için sevgiyle üreten bilge ve muzip bir karakterdir. Evin bahçesindeki atölyesinde ahşap oyuncaklar yapar, bildiklerini çocuklarla paylaşır.',traits:['Becerikli','Bilge','Muzip'],detail:'Geçmiş ile bugün arasında köprü kurarken yeniliklere de açıktır. Gür bıyıklarını taraması ve bazen yanlış duyduğu sözlere verdiği beklenmedik cevaplar onun tanıdık hâlleridir.'},
    {name:'Anne',role:'Ailenin düzen kuran, şakacı yanı',age:'Özenli, koruyucu ve çözüm odaklı',intro:'Evdeki otorite figürü anne, bir sorunla karşılaştığında olasılıkları dikkatle değerlendirir. Temizliğe ve düzene önem verir; çocuklarına küçük şakalar ve sürprizler yapmayı da ihmal etmez.',traits:['Mantıklı','Koruyucu','Şakacı'],detail:'Çocuklarını koruma isteği davranışlarına yön verir. Farklı boylarda eski ve yeni anahtarlar biriktirir; kayınpederine sevgi ve saygıyla yaklaşır.'},
    {name:'Baba',role:'Ailenin şefkatli, telaşlı koruyucusu',age:'Paylaşan, kollayan, bazen panikleyen',intro:'Baba için ailenin güvenliği her şeyden önce gelir. Ev işlerini paylaşır, çocuklarına sevgiyle yaklaşır. Anneyle birlikte dayanışmanın, dürüstlüğün ve karşılıklı saygının örneğini gösterir.',traits:['Şefkatli','Paylaşımcı','Koruyucu'],detail:'Çocuklarına kıyamadığı için bazen ev kurallarını esnetir. Sorunlarda önce en kötü olasılığı düşünmesi, aile hayatında komik telaşlara yol açar.'},
    {name:'Aslı',role:'Öykü’nün mahalleden arkadaşı',age:'Kitap kurdu, oyun kurucu',intro:'Okumayı ve oyun kurmayı seven Aslı, grubun güçlü fikirleri olan üyesidir. Dürüst ve güvenilirdir; plan yaparken ayrıntıları düşünür. Sosyalleşmeyi ve rekabeti sever.',traits:['Kitapsever','Planlı','Lider ruhlu'],detail:'Arkadaşlarını yönlendirmeyi tercih eder; bazen inatçı ve bencil davranabilir. Öykü onunla tatlı tatlı anlaşmanın yolunu bulur.'},
    {name:'Ece',role:'Öykü’nün sınıf ve sıra arkadaşı',age:'Kelimelerle oynayan maceraperest',intro:'Empatik, yardımsever ve uzlaşmacı Ece, yeni oyunlara ve deneyimlere hemen açıktır. Sözcüklerin hecelerini değiştirip komik ifadeler üretir; rekabet etmekten çok birlikte hareket etmeyi sever.',traits:['Uyumlu','Maceraperest','Empatik'],detail:'Baskı altında ya da zamanla yarışırken telaşlanabilir. Öykü’nün akılcı çözümleri zor anlarında ona yardımcı olur.'},
    {name:'Alp',role:'Öykü’nün mahalleden arkadaşı',age:'Cesareti büyük, kalbi cömert',intro:'Tatlıları ve özellikle üzümü çok seven Alp, dünyayı kendine özgü “tatlı” ifadelerle anlatır. Cesaret isteyen işlerde öne çıkar; arkadaşlarının fikirlerini önemser, elindekini paylaşır.',traits:['Cesur','Adaletli','Cömert'],detail:'Her şeyi tatlılarla anlatması komik cümleler doğurur. Öykü, Alp’in bu kendine özgü ifadelerini sevgiyle düzeltir.'},
    {name:'Çetin',role:'Arda’nın en yakın arkadaşı',age:'Sahanın dostu, güvenilir sırdaş',intro:'Futbola ve futbolculara meraklı Çetin, Arda’nın en yakın arkadaşı ve sırdaşıdır. Dürüst, temiz kalpli bir çocuk olarak arkadaş grubunun güvenilir üyelerinden biridir.',traits:['Dürüst','Dost canlısı','Futbol tutkunu'],detail:'Arda’yla ortak tutkuları futbol olsa da gitar çalmaya da özenir. Arkadaşlık, onun hikâyelerdeki en güçlü bağıdır.'}
  ];
  const episodeMeta = [
    ['Kaybolan Röportaj','Birlikte öğrenmek','Dedesiyle yaptığı röportajın kaydolmadığını fark eden Öykü, ödevini kurtarmak için bambaşka bir çözüm bulur.'],
    ['Tasarruf Dedektifleri İş Başında','Kaynaklara özen','Küçülen kalemler, eski gömlekler ve yağmur suyu… Aile, kullanılmaz sanılan şeylerin yeni bir hayatı olabileceğini keşfeder.'],
    ['Unutulan Şifre','Aile hafızası','Eski bir sandığın şifresi unutulmuştur. Üzerindeki Eskişehir izleri, aileyi ortak bir hatıranın peşine düşürür.'],
    ['Çocuk Dedemiz','Kuşaklar arası bağ','Birlikte hazırladıkları fotoğraf filmi, Öykü ve Arda’yı dedelerinin çocukluk dünyasına uzanan bir maceraya taşır.'],
    ['Piknik Nerede Yapılır?','Hayal gücü','Yağmur ve elektrik kesintisi piknik planını bozar. Dede, salonun ortasında bambaşka bir eğlencenin kapısını açar.'],
    ['Ailenin Yeni Üyesi','Canlılara sorumluluk','Sarı tekir Zımpara aileye katılır. Çocuklar, yeni dostlarının ihtiyaçlarına birlikte çözüm üretmeyi öğrenir.'],
    ['Emektar Tezgâha Ne Olacak?','Onarmak ve üretmek','Dededen miras kalan çalışma tezgâhı çatlar. Aile, onun manevi değerini koruyacak ortak bir çözüm arar.'],
    ['Satış Kahramanı','Paylaşmanın değeri','Bahçe satışında eski oyuncaklarından ayrılmak Öykü’ye zor gelir. Bir hatıra oyunu, paylaşmaya başka gözle bakmasını sağlar.'],
    ['Yenilmez Yeşil Ejderha’nın Arkadaşı','Hoşgörü ve kardeşlik','Öykü, Arda’nın sergi için yaptığı ejderha resmine pembe bir fil ekler. İyi niyetli bir sürpriz, kardeşlik sınavına dönüşür.'],
    ['Kurabiye Avı','Zekâ ve iş birliği','Çocuklar, annenin hazırladığı kurabiyelere ulaşmak için bir ekip olur. Ama bu eğlenceli planın sonunda başka bir sürpriz vardır.'],
    ['“Çok Gizli” Bahçe Sığınağı','Kişisel sınırlara saygı','Öykü, Arda’nın gizli sığınağını güzelleştirmek isterken onu üzer. Sevginin, izin istemeyi de içerdiğini keşfeder.'],
    ['Sabır Kutusunun İçinde Ne Var?','Sabır ve haklar','Bir hafta boyunca açılmayacak kutular aileye dağıtılır. Arda, merakına ve sabırsızlığına karşı bu oyunu sürdürebilecek midir?']
  ];
  const $ = (selector) => document.querySelector(selector);
  const tabs = $('#character-tabs');
  const panel = $('#character-panel');
  const position = index => `${(index % 3) * 50}% ${Math.floor(index / 3) * 50}%`;
  function el(tag, className, text) { const node=document.createElement(tag); if(className)node.className=className;if(text)node.textContent=text;return node; }
  function selectCharacter(index, focus=false) {
    [...tabs.children].forEach((button,i)=>{button.setAttribute('aria-selected',String(i===index));button.tabIndex=i===index?0:-1;});
    const c=characters[index];
    const visual=el('div','character-visual');
    const portrait=el('div','character-portrait');portrait.style.backgroundPosition=position(index);portrait.setAttribute('role','img');portrait.setAttribute('aria-label',`${c.name} karakteri için konsept çizim`);
    visual.append(portrait,el('span','portrait-caption',c.age));
    const copy=el('div','character-copy');copy.append(el('p','eyebrow',c.role),el('h3','',c.name),el('p','',c.intro));
    const traits=el('div','traits');c.traits.forEach(t=>traits.append(el('span','',t)));copy.append(traits);
    const detail=el('p','character-detail');detail.append(el('strong','','Onu tanıdık yapan: '),document.createTextNode(c.detail));copy.append(detail);
    panel.replaceChildren(visual,copy);panel.setAttribute('aria-labelledby',`character-${index}`);
    if(focus)tabs.children[index].focus();
  }
  characters.forEach((c,i)=>{const button=el('button','character-tab');button.type='button';button.id=`character-${i}`;button.setAttribute('role','tab');button.setAttribute('aria-controls','character-panel');const portrait=el('span','mini-portrait');portrait.setAttribute('aria-hidden','true');portrait.style.backgroundPosition=position(i);button.append(portrait,document.createTextNode(c.name));button.addEventListener('click',()=>selectCharacter(i));button.addEventListener('keydown',event=>{let next=i;if(event.key==='ArrowRight')next=(i+1)%characters.length;else if(event.key==='ArrowLeft')next=(i+characters.length-1)%characters.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=characters.length-1;else return;event.preventDefault();selectCharacter(next,true);});tabs.append(button);});
  selectCharacter(0);
  const dialog=$('#episode-dialog');let dialogTrigger=null;
  function openEpisode(index,trigger){const source=window.KIYMIK_EPISODES[index];const meta=episodeMeta[index];dialogTrigger=trigger;$('#dialog-kicker').textContent=`BÖLÜM DÜNYASI / HİKÂYE ${String(index+1).padStart(2,'0')}`;$('#dialog-title').textContent=meta[0];$('#dialog-theme').textContent=meta[1];const content=$('#dialog-content');content.replaceChildren();(source.content.split(/\n+/).filter(Boolean)).forEach(text=>content.append(el('p','',text)));document.body.classList.add('dialog-open');dialog.showModal();dialog.scrollTop=0;}
  episodeMeta.forEach((meta,index)=>{const card=el('button','episode-card');card.type='button';card.setAttribute('aria-haspopup','dialog');card.setAttribute('aria-label',`${meta[0]} — hikâyeyi oku`);const top=el('div','episode-top');top.append(el('span','episode-no',String(index+1).padStart(2,'0')),el('span','episode-theme',meta[1]));const link=el('span','episode-link','Hikâyeyi oku');link.append(el('b','','↗'));card.append(top,el('h3','',meta[0]),el('p','',meta[2]),link);card.addEventListener('click',()=>openEpisode(index,card));$('#episodes-grid').append(card);});
  $('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');dialogTrigger?.focus();});
  const menuToggle=$('.menu-toggle'),menu=$('#mobile-menu');
  function closeMenu(){menu.hidden=true;menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Menüyü aç');}
  menuToggle.addEventListener('click',()=>{const willOpen=menu.hidden;menu.hidden=!willOpen;menuToggle.setAttribute('aria-expanded',String(willOpen));menuToggle.setAttribute('aria-label',willOpen?'Menüyü kapat':'Menüyü aç');});
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!menu.hidden){closeMenu();menuToggle.focus();}});
  document.addEventListener('click',event=>{if(!menu.hidden&&!menu.contains(event.target)&&!menuToggle.contains(event.target))closeMenu();});
  const motionButton=$('.motion-toggle');motionButton.addEventListener('click',()=>{const paused=document.body.classList.toggle('motion-paused');motionButton.setAttribute('aria-pressed',String(paused));motionButton.replaceChildren(document.createTextNode(paused?'Hareketi başlat ':'Hareketi durdur '));const mark=el('span','',paused?'▷':'Ⅱ');mark.setAttribute('aria-hidden','true');motionButton.append(mark);});
  if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;document.querySelectorAll('.desktop-nav a').forEach(a=>{if(a.getAttribute('href')===`#${entry.target.id}`)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});});},{rootMargin:'-15% 0px -55% 0px'});document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));}
})();
