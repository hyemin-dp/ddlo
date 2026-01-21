# API 사용 가이드

## 파일 구조

- `src/api/client.ts`: 공용 axios 인스턴스
  - `baseURL`: `import.meta.env.VITE_API_BASE_URL` 없으면 `https://api.example.com`
  - 요청 인터셉터: `Authorization` 헤더에 로컬스토리지 토큰 주입, `X-Request-Id` 설정
  - 응답 인터셉터: 408/429/502/503/504 또는 네트워크 에러 시 최대 2회 재시도(지수형 딜레이)
- `src/api/auth.ts`: 로그인 API 예시 (`login`)

## 사용 예시

```tsx
import { login } from '../api/auth';

async function handleLogin() {
  try {
    const res = await login({ email: 'test@example.com', password: 'pw1234' });
    console.log('login success', res.user);
  } catch (err) {
    console.error('login failed', err);
  }
}
```

## 토큰 처리

- `login` 성공 시 `localStorage`에 `accessToken`/`refreshToken`을 저장합니다.
- 자동으로 `Authorization` 헤더가 붙으므로 이후 호출은 추가 작업 없이 인증됩니다.
