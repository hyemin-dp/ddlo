# kids-schole-react-app

디피니션 키즈스콜레 리액트 프로젝트.

## Run

```
npm install
npm run dev
```

## Architecture

```
src/
├── api/              # API 호출 관련 코드 (axios 인스턴스, 서비스 로직)
├── assets/           # 이미지, 폰트, 아이콘 등 정적 파일
├── components/       # 공통 UI 컴포넌트
│   ├── common/       # Button, Input 등 전역에서 쓰이는 공통 컴포넌트
│   └── layout/       # Header, Footer, Sidebar 등 레이아웃
├── hooks/            # 커스텀 훅 (useAuth, useForm 등)
├── pages/            # 라우팅되는 각 페이지 단위 컴포넌트
│   ├── Home/
│   ├── Login/
│   └── Profile/
├── store/            # 상태 관리 (Redux slices, Zustand stores 등)
├── styles/           # 글로벌 스타일, 테마 설정
├── utils/            # 유틸리티 함수 (날짜 포맷팅, 정규식 등)
├── App.js            # 메인 라우팅 설정
└── main.js           # 엔트리 포인트
```
