export default function RevovoxHomepage() {
  const demos = [
    {
      title: 'Фуд-блог',
      description: 'Русский → Английский',
      image:
        'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'YouTube Shorts',
      description: 'Тот же голос. Новый язык.',
      image:
        'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Talking Head',
      description: 'Сохранение темпа и эмоций',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(80,80,255,0.25),transparent_40%)]" />

      <header className="relative z-10 border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-white text-black flex items-center justify-center font-black text-sm">
              RV
            </div>
            <div>
              <div className="font-semibold tracking-tight text-lg">REVOVOX AI</div>
              <div className="text-xs text-white/50">AI-дубляж для создателей контента</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#demo" className="hover:text-white transition">Демо</a>
            <a href="#how" className="hover:text-white transition">Как это работает</a>
            <a href="#pricing" className="hover:text-white transition">Цены</a>
          </nav>

          <button className="px-5 py-2 rounded-2xl bg-white text-black font-medium hover:scale-105 transition-transform">
            Попробовать
          </button>
        </div>
      </header>

      <main className="relative z-10">
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/70 mb-6">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Перевод видео с сохранением вашего голоса
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] max-w-2xl">
              Ваши видео
              <br />
              теперь может
              <br />
              смотреть весь мир.
            </h1>

            <p className="mt-8 text-xl text-white/65 leading-relaxed max-w-xl">
              REVOVOX AI переводит ваши ролики на английский язык,
              сохраняя ваш голос, интонацию и подачу.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="px-7 py-4 rounded-2xl bg-white text-black font-semibold text-lg hover:scale-[1.03] transition-transform shadow-2xl shadow-white/10">
                Смотреть демо
              </button>

              <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 text-white font-semibold text-lg hover:bg-white/10 transition">
                Загрузить видео
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-white/50">
              <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
                Talking-head контент
              </div>
              <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
                Shorts & Reels
              </div>
              <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
                Тот же голос
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-blue-500/20 blur-3xl rounded-full" />

            <div className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-black relative">
                <img
                  src="https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?q=80&w=1400&auto=format&fit=crop"
                  alt="creator"
                  className="w-full h-full object-cover opacity-80"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute top-5 left-5 flex gap-2">
                  <div className="px-3 py-1 rounded-full bg-black/70 border border-white/10 text-xs font-medium">
                    Оригинал
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white text-black text-xs font-bold">
                    Английская озвучка
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="font-semibold">Фуд-блог / YouTube Shorts</div>
                        <div className="text-sm text-white/50">
                          Голос и темп сохранены
                        </div>
                      </div>

                      <div className="px-3 py-1 rounded-full bg-green-400/10 text-green-300 text-xs border border-green-400/20">
                        Demo Ready
                      </div>
                    </div>

                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <div className="w-2/3 h-full bg-white rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="demo"
          className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10"
        >
          <div className="max-w-2xl mb-14">
            <div className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">
              Примеры
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              До / после
            </h2>

            <p className="mt-5 text-white/60 text-lg leading-relaxed">
              Пользователь должен услышать, что это всё ещё он.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {demos.map((demo) => (
              <div
                key={demo.title}
                className="group rounded-[28px] overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all"
              >
                <div className="aspect-[9/16] overflow-hidden relative">
                  <img
                    src={demo.image}
                    alt={demo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <button className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[18px] border-l-white ml-1" />
                    </div>
                  </button>
                </div>

                <div className="p-5">
                  <div className="font-semibold text-lg">{demo.title}</div>
                  <div className="text-white/50 mt-1 text-sm">
                    {demo.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="how"
          className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10"
        >
          <div className="max-w-2xl mb-14">
            <div className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">
              Как это работает
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Максимально просто
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                number: '01',
                title: 'Загрузите видео',
                text: 'Shorts, Reels, YouTube или talking-head контент.',
              },
              {
                number: '02',
                title: 'Выберите язык',
                text: 'Сейчас фокус на английском дубляже.',
              },
              {
                number: '03',
                title: 'Получите результат',
                text: 'Тот же голос, подача и эмоции — но для новой аудитории.',
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8"
              >
                <div className="text-white/30 text-sm mb-6">{item.number}</div>
                <div className="text-2xl font-bold mb-4">{item.title}</div>
                <div className="text-white/55 leading-relaxed">{item.text}</div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="pricing"
          className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10"
        >
          <div className="rounded-[36px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-10 md:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">
                Стоимость
              </div>

              <h2 className="text-4xl md:text-5xl font-black tracking-tight max-w-2xl">
                Оплата только
                <br />
                за минуты обработки
              </h2>

              <p className="mt-6 text-white/60 text-lg max-w-xl leading-relaxed">
                Без сложных подписок и корпоративных тарифов.
                Просто загружайте видео и получайте результат.
              </p>
            </div>

            <div className="w-full max-w-md rounded-[28px] border border-white/10 bg-black/40 p-8 backdrop-blur-xl">
              <div className="text-white/50 text-sm mb-2">Старт</div>

              <div className="flex items-end gap-2 mb-6">
                <div className="text-6xl font-black">₽</div>
                <div className="text-7xl font-black leading-none">10</div>
                <div className="text-white/50 mb-2">/ минута</div>
              </div>

              <div className="space-y-4 text-white/65 mb-8">
                <div>— Сохранение голоса</div>
                <div>— Перевод на английский</div>
                <div>— Talking-head контент</div>
                <div>— Shorts / Reels / YouTube</div>
              </div>

              <button className="w-full py-4 rounded-2xl bg-white text-black font-bold text-lg hover:scale-[1.02] transition-transform">
                Попробовать REVOVOX
              </button>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-6">
                Creator-first AI tool
              </div>

              <h2 className="text-4xl md:text-6xl font-black tracking-tight max-w-4xl mx-auto leading-[0.95]">
                Не перезаписывайте видео.
                <br />
                Просто говорите
                <br />
                на весь мир.
              </h2>

              <p className="mt-8 text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
                REVOVOX AI помогает создателям контента
                выходить на глобальную аудиторию без новой съёмки.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 rounded-2xl bg-white text-black font-bold text-lg hover:scale-[1.03] transition-transform">
                  Смотреть демо
                </button>

                <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 font-bold text-lg hover:bg-white/10 transition">
                  Загрузить видео
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
