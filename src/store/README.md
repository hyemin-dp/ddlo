# Redux 사용 가이드

## 패키지

- `@reduxjs/toolkit`, `react-redux`

## 스토어 구조

- `src/store/index.ts`: `configureStore`로 스토어 생성, `RootState`, `AppDispatch` 타입 export
- `src/store/hooks.ts`: `useAppDispatch`, `useAppSelector` 타입 안전한 훅
- `src/store/uiSlice.ts`: 예시 UI 슬라이스 (로그인 CTA 표시 여부)

## 사용 방법

1. 컴포넌트에서 훅 import

```tsx
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleLoginCTA } from '../store/uiSlice';
```

2. 상태 조회/액션 디스패치

```tsx
const showCTA = useAppSelector((state) => state.ui.showLoginCTA);
const dispatch = useAppDispatch();

return <button onClick={() => dispatch(toggleLoginCTA())}>{showCTA ? '숨기기' : '보여주기'}</button>;
```

3. 새 슬라이스 추가

- `createSlice`로 파일 추가 → `src/store/index.ts`의 `reducer`에 등록
- 필요한 액션/리듀서는 slice 파일에서 export 후 컴포넌트에서 사용
