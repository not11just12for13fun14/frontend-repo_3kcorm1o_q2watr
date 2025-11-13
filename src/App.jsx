import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function App() {
  const sections = [
    {
      id: 'girizgah',
      title: 'Gıdalarda 3D Uygulamaları',
      points: [
        '3D teknolojileri; üretim, tasarım, kalite ve pazarlamada gıda sektörünü dönüştürüyor.',
        'Bu sunum; kullanım alanları, faydalar, zorluklar ve gelecek trendlerine odaklanır.',
      ],
    },
    {
      id: 'urun-gelistirme',
      title: 'Ürün Geliştirme ve Tasarım',
      points: [
        '3D modelleme ile yeni ürün formları (çikolata, hamur işleri, makarna şekilleri).',
        'Tat/tekstür denemeleri öncesi sanal prototip: daha az malzeme, daha hızlı döngü.',
        'Ambalaj ergonomisi ve raf görünürlüğü için 3D görselleştirme.',
      ],
    },
    {
      id: 'uretim-3d-yazici',
      title: '3D Yazıcı ile Gıda Üretimi',
      points: [
        'Püre bazlı baskı: çikolata, peynir, patates, bitkisel püreler.',
        'Kişiselleştirme: besin içeriği, porsiyon, şekil ve marka öğeleri.',
        'Toplu üretimde özelleştirilmiş kalıp ve aparatların 3D basımı.',
      ],
    },
    {
      id: 'kalite-kontrol',
      title: 'Kalite Kontrol ve AR/VR',
      points: [
        '3D tarama ile şekil/ölçü tutarlılığı (ör. meyve boyutu, hamur kalınlığı).',
        'AR ile üretim hattında görsel yönergeler ve operatör eğitimi.',
        'VR ile hijyen ve güvenlik senaryolarının simülasyonu.',
      ],
    },
    {
      id: 'pazarlama',
      title: 'Pazarlama, Menü ve Müşteri Deneyimi',
      points: [
        '3D menüler: ürünü gerçek boyut ve açıyla inceleme, allergen/kalori overlay.',
        'E-ticarette 360° ürün görüntüleme ve etkileşimli ambalaj deneyimi.',
        'AR filtreler: markalı içecek/atıştırmalıkla sosyal etkileşim artırma.',
      ],
    },
    {
      id: 'tedarik',
      title: 'Tedarik Zinciri ve Operasyon',
      points: [
        'Depolama düzeni ve soğuk zincir planlamasında 3D tesis simülasyonları.',
        '3D basılı yedek parçalarla bakım sürelerini kısaltma.',
        'Lojistikte rota ve paketleme optimizasyonu için görsel analitik.',
      ],
    },
    {
      id: 'faydalar',
      title: 'Faydalar',
      points: [
        'Hızlı prototipleme ile maliyet ve atık azalır.',
        'Kişiselleştirme ve premium deneyim ile daha yüksek katma değer.',
        'Eğitim ve kalite süreçlerinde standartlaşma ve izlenebilirlik.',
      ],
    },
    {
      id: 'zorluklar',
      title: 'Zorluklar',
      points: [
        'Gıda güvenliği ve hijyen standartlarına uygun ekipman ihtiyacı.',
        'Hammadde formülasyonu: baskıya uygun viskozite/tekstür.',
        'Yatırım maliyeti ve yetkinlik açığı (tasarım, AR/VR, veri).',
      ],
    },
    {
      id: 'ornekler',
      title: 'Vaka Örnekleri',
      points: [
        'Kişiye özel diyet gıdaları: protein/karbonhidrat oranı ayarlı 3D baskı.',
        'Pastanelerde 3D baskı çikolata dekorları ile hızlı özelleştirme.',
        'İçecek markalarının AR ile “kutuyu tara, hikayeyi keşfet” kampanyaları.',
      ],
    },
    {
      id: 'araclar',
      title: 'Araçlar ve Teknolojiler',
      points: [
        'Modelleme: Blender, Fusion 360; Hızlı prototip: SLA/FDM; Gıda 3D yazıcıları.',
        'Görselleştirme: WebGL, Three.js, Spline; Mobil AR: WebAR, ARKit/ARCore.',
        'Kalite ölçüm: 3D tarayıcı, bilgisayarlı görü ve yapay zeka destekleri.',
      ],
    },
    {
      id: 'gelecek',
      title: 'Gelecek Trendleri',
      points: [
        'Kişiselleştirilmiş beslenme ve fonksiyonel gıdalarda artış.',
        'Dayanıklı, sürdürülebilir malzeme ve ambalaj tasarımları.',
        'Gerçek zamanlı 3D kalite analitiği ve dijital ikiz tesisler.',
      ],
    },
    {
      id: 'sonuc',
      title: 'Sonuç',
      points: [
        '3D teknolojileri; tasarımdan pazarlamaya tüm değer zincirinde fark yaratır.',
        'Doğru strateji: pilot projeler → yetkinlik geliştirme → ölçekleme.',
        'Müşteri deneyimi ve verimlilik birlikte büyür.',
      ],
    },
  ]

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50 to-white text-gray-800">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-inner" />
            <span className="font-semibold">3D Gıda Sunumu</span>
          </div>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            {sections.slice(0,6).map((s) => (
              <button key={s.id} onClick={() => scrollTo(s.id)} className="px-2 py-1 rounded hover:bg-rose-100">
                {s.title.split(' ')[0]}
              </button>
            ))}
          </nav>
          <a href="/test" className="text-xs text-rose-600 hover:text-rose-700">Bağlantı Testi</a>
        </div>
      </header>

      {/* Hero with Spline */}
      <section className="relative h-[70vh] md:h-[75vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/Tddl75W6Ij9Qp77j/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-lg max-w-xl"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-rose-700 leading-tight">
              Gıdalarda 3D Uygulamaları
            </h1>
            <p className="mt-3 text-gray-700">
              Ürün tasarımından pazarlamaya, 3D teknolojileriyle daha yaratıcı, hızlı ve kişiselleştirilmiş çözümler.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button onClick={() => scrollTo('urun-gelistirme')} className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg">
                Hemen Keşfet
              </button>
              <button onClick={() => scrollTo('faydalar')} className="bg-white hover:bg-rose-50 text-rose-700 border border-rose-200 px-4 py-2 rounded-lg">
                Neden 3D?
              </button>
            </div>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
      </section>

      {/* Agenda */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-rose-100">
          <h2 className="text-2xl font-bold text-rose-700">Gündem</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm">
            {sections.slice(1, 7).map((s) => (
              <button key={s.id} onClick={() => scrollTo(s.id)} className="text-left p-3 rounded-lg bg-rose-50 hover:bg-rose-100">
                {s.title}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-16 space-y-10">
        {sections.map((section) => (
          <motion.section
            id={section.id}
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-rose-100"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-rose-700">{section.title}</h3>
            <ul className="mt-4 space-y-2 list-disc pl-5">
              {section.points.map((p, i) => (
                <li key={i} className="text-gray-700">{p}</li>
              ))}
            </ul>
          </motion.section>
        ))}
      </div>

      {/* Footer */}
      <footer className="border-t border-rose-100 py-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} 3D Gıda Sunumu • Geliştirildi: Vibe Coding</p>
      </footer>
    </div>
  )
}

export default App
