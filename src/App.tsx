import { Link, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import './App.css';

const personas = [
  { label: '부지런하고 성실해요', tone: 'from-orange-100 to-amber-100', emoji: '🌞' },
  { label: '꼼꼼하고 규칙적이에요', tone: 'from-sky-100 to-cyan-100', emoji: '📐' },
  { label: '감성이 풍부해요', tone: 'from-rose-100 to-pink-100', emoji: '🎨' },
  { label: '영리하고 영특해요', tone: 'from-purple-100 to-indigo-100', emoji: '🧠' },
  { label: '창의적이에요', tone: 'from-lime-100 to-green-100', emoji: '✨' },
  { label: '호기심이 많아요', tone: 'from-emerald-100 to-teal-100', emoji: '🔍' },
];

const filters = ['동물', '매직', '바다', '성공', '마법', '용기', '감정', '자신감', '연애', '비밀', '환경'];

const featuredBooks = [
  { title: '스위트 드림', meta: '베스트셀러', pill: '마술사 리옹', tone: 'from-rose-100 to-orange-100' },
  { title: '곰곰이 스마일', meta: '베스트셀러', pill: '곰곰이', tone: 'from-sky-100 to-indigo-100' },
  { title: '꼬리를 흔들어봐', meta: '베스트셀러', pill: '미카엘리아', tone: 'from-emerald-100 to-teal-100' },
  { title: '우리의 태양', meta: '새로 나온 책', pill: '솔라', tone: 'from-amber-100 to-yellow-100' },
];

const ranking = [
  { rank: 1, title: '지구는 항해 중', badge: '베스트셀러' },
  { rank: 2, title: '1%의 준비', badge: '베스트셀러' },
  { rank: 3, title: '명작 스스로 도서관', badge: '베스트셀러' },
  { rank: null, title: '꼬리를 흔들어봐', badge: '베스트셀러' },
];

const spotlight = [
  { title: '우리는 몽글몽글 완두콩', desc: '아이들의 감정과 성장을 응원하는 책', tone: 'from-indigo-500/60 via-slate-800 to-slate-900' },
  { title: '행복을 찾아서', desc: '따뜻한 이야기가 담긴 그림책', tone: 'from-slate-700 via-slate-900 to-black' },
];

function Header() {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 text-slate-900 no-underline">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-sm" />
          <div className="font-semibold text-lg">키즈스홀</div>
        </Link>
        <div className="flex items-center gap-4 text-sm text-slate-700">
          <Link
            to="/login"
            className="rounded-full border border-slate-200 px-4 py-2 font-semibold text-slate-800 no-underline hover:border-slate-300 hover:bg-slate-50"
          >
            로그인
          </Link>
          <button className="rounded-full bg-slate-900 px-4 py-2 text-white shadow-sm hover:bg-slate-800">아이 DNA 맞춤 콘파스</button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-3 px-6 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500" />
          <div className="font-semibold text-slate-900">키즈스홀</div>
        </div>
        <div className="flex flex-wrap gap-4">
          <span>이용약관</span>
          <span>개인정보처리방침</span>
          <span>환불 정책</span>
          <span>기업 소개</span>
          <span>이메일 무단수집 거부</span>
        </div>
        <div>© 2024 Kids Schole. All rights reserved.</div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <main className="mx-auto flex max-w-screen-xl flex-col gap-16 px-6 py-10">
      <section className="grid gap-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-8 py-10 text-white shadow-xl lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-wide text-amber-200">
            아이 DNA 맞춤
          </div>
          <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
            우리 아이 DNA 맞춤 <span className="text-amber-300">콘텐츠 콘파스</span>
          </h1>
          <p className="max-w-xl text-white/80">
            아이의 성향에 맞춘 육아, 생활, 콘텐츠의 솔루션으로 아이의 성향에 맞춘 맞춤형 교육 콘텐츠를 만나보세요.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-slate-50">
              아이 DNA 맞춤 콘텐츠
            </button>
            <button className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:border-white">
              스스로 콘파스 가입
            </button>
          </div>
        </div>
        <div className="grid gap-4 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-6 backdrop-blur">
          <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-amber-200 via-orange-200 to-pink-200 shadow-lg" />
          <div className="grid grid-cols-2 gap-4 text-slate-900">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <div className="text-xs font-semibold text-amber-500">베스트셀러</div>
              <div className="mt-2 text-lg font-bold">아이 DNA 맞춤 콘텐츠</div>
              <p className="mt-1 text-sm text-slate-600">아이에게 맞는 콘텐츠가 포함된 맞춤 책</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">성공</span>
                <span className="text-sm font-semibold text-amber-600">여기로 이동</span>
              </div>
            </div>
            <div className="grid gap-4 rounded-2xl bg-white p-4 shadow-sm">
              <div className="h-24 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200" />
              <div className="h-24 rounded-xl bg-gradient-to-br from-pink-100 to-amber-100" />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-2 text-center">
          <div className="mx-auto h-1 w-12 rounded-full bg-amber-400" />
          <h2 className="text-3xl font-bold text-slate-900">원하는 콘텐츠를 찾아보세요.</h2>
          <p className="text-slate-600">모든 학부모가 꼭 봐야 할 추천 콘텐츠</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {personas.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm hover:shadow"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                <span className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${item.tone}`}>{item.emoji}</span>
              </span>
              <span className="text-sm font-semibold text-slate-800">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map((tag) => (
            <button
              key={tag}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50"
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">모든 학부모가 꼭 봐야 할 추천 콘텐츠</p>
            <h3 className="text-2xl font-bold text-slate-900">알고리즘이 추천해주는 콘텐츠</h3>
          </div>
          <button className="text-sm font-semibold text-amber-600 hover:text-amber-700">카테고리별 콘텐츠 전체보기</button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredBooks.map((book) => (
            <div
              key={book.title}
              className="group rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`aspect-[3/4] w-full rounded-t-2xl bg-gradient-to-br ${book.tone}`} />
              <div className="space-y-2 p-4">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-amber-500">{book.meta}</span>
                </div>
                <div className="text-lg font-bold text-slate-900">{book.title}</div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{book.pill}</span>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">성공</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-slate-900">마음의 성장 도서를 추천해요</h3>
          <button className="text-sm font-semibold text-slate-600 hover:text-slate-800">마음콘텐츠 바로가기</button>
        </div>
        <div className="grid gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 md:grid-cols-2 lg:grid-cols-4">
          {ranking.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-lg font-bold text-white">
                {item.rank ?? 'NEW'}
              </div>
              <div className="space-y-1">
                <div className="text-sm font-semibold text-amber-500">{item.badge}</div>
                <div className="text-base font-semibold text-slate-900">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-xl">
        <div className="flex items-center justify-between text-white">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-300">키즈스홀의 추천 콘텐츠</p>
            <h3 className="mt-1 text-3xl font-bold">콘텐츠 라이브러리</h3>
            <p className="mt-2 text-sm text-white/70">엄선한 큐레이션으로 아이의 성장을 돕는 콘텐츠를 만나보세요.</p>
          </div>
          <div className="flex gap-2">
            <button className="rounded-full border border-white/20 p-3 text-white hover:border-white/40">‹</button>
            <button className="rounded-full border border-white/20 p-3 text-white hover:border-white/40">›</button>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {spotlight.map((item) => (
            <div key={item.title} className={`rounded-2xl bg-gradient-to-br ${item.tone} p-6 shadow-lg ring-1 ring-white/10`}>
              <div className="aspect-[3/4] w-full rounded-xl bg-white/10" />
              <div className="mt-4">
                <div className="text-sm font-semibold text-amber-200">베스트셀러</div>
                <div className="text-xl font-bold text-white">{item.title}</div>
                <p className="mt-1 text-sm text-white/70">{item.desc}</p>
                <button className="mt-3 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/20">
                  커뮤니티 똑똑이 도서 추천 리스트 보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <div className="text-sm font-semibold text-amber-500">아이 쇼핑몰도 오픈 예정</div>
          <div className="mt-2 text-2xl font-bold text-slate-900">아이의 마음을 담은 상품을 만나보세요</div>
          <p className="mt-2 text-sm text-slate-600">아이 DNA 맞춤 콘파스에서 큐레이션한 상품들을 곧 만나보실 수 있어요.</p>
          <button className="mt-4 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
            아이 스스로 쇼핑하기
          </button>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <div className="text-sm font-semibold text-amber-500">키즈스홀 라이브 방송</div>
          <div className="mt-2 text-2xl font-bold text-slate-900">누르면 바로 시청 가능</div>
          <p className="mt-2 text-sm text-slate-600">키즈스홀 인스타그램을 통해 매주 새로운 라이브를 만나보세요.</p>
          <button className="mt-4 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50">
            @kids_shole 팔로우하기
          </button>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-semibold text-amber-500">아이 콘파스 정기배송</div>
              <div className="mt-1 text-2xl font-bold text-slate-900">
                내 아이에게 맞는 <span className="text-amber-600">콘텐츠를 제안</span>합니다.
              </div>
            </div>
            <button className="rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50">
              바로가기
            </button>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="h-32 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200" />
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-800">베스트셀러</div>
              <p>우리는 동화책, 그림책, 오디오북, 웹툰, 뮤지컬, 영상을 큐레이션하여 아이에게 맞춤형 콘텐츠를 제안합니다.</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-6 shadow-sm ring-1 ring-amber-100">
          <div className="text-sm font-semibold text-amber-700">한정 수량 이벤트</div>
          <div className="mt-1 text-xl font-bold text-amber-900">지금 구매하고 기프트를 받아보세요</div>
          <div className="mt-4 h-36 rounded-xl bg-white/60" />
          <button className="mt-4 w-full rounded-full bg-amber-600 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-amber-500">
            콘파스 정기배송 알아보기
          </button>
        </div>
      </section>
    </main>
  );
}

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
