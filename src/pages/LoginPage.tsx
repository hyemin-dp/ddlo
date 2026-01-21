import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-50 px-6 py-16">
      <div className="w-full max-w-xl rounded-3xl bg-white p-10 shadow-xl ring-1 ring-slate-100">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-sm" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Kids Schole</p>
            <h1 className="text-2xl font-bold text-slate-900">로그인</h1>
          </div>
        </div>
        <div className="space-y-4 text-sm text-slate-600">
          <p>아직 로그인 API가 연결되지 않았습니다. 여기에 실제 인증 폼이 들어갈 예정입니다.</p>
          <p>필요한 필드를 알려주시면 맞춰서 구성할게요.</p>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <button className="rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800">
            소셜 로그인 버튼 자리
          </button>
          <button className="rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
            이메일 로그인 자리
          </button>
        </div>
        <div className="mt-8 flex items-center justify-between text-sm text-slate-600">
          <span>아직 계정이 없나요?</span>
          <button className="font-semibold text-emerald-600 hover:text-emerald-700">회원가입 페이지 준비중</button>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
          <span>돌아가기</span>
          <Link to="/" className="font-semibold text-emerald-600 hover:text-emerald-700">
            홈으로 이동
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
