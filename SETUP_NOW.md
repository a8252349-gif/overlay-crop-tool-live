# 지금 바로 실행하기

## 1. Node 20 사용

```bash
nvm use 20
```

`nvm`이 없다면 먼저 설치한 뒤 Node 20을 사용하세요. 이 프로젝트는 Node 20 기준입니다.

## 2. 환경변수 만들기

```bash
cp .env.example .env.local
```

`.env.local`의 아래 항목을 실제 값으로 바꿉니다.

```env
COUPON_MODE=demo
DEMO_COUPON_CODE=DEMO-PET-2026

AI_MODE=openai
OPENAI_API_KEY=sk-실제_API_키
OPENAI_IMAGE_MODEL=gpt-image-2
OPENAI_IMAGE_QUALITY=high
OPENAI_IMAGE_SIZE=1024x1536
AI_LOG_USAGE=true

ORDER_TOKEN_SECRET=충분히-긴-임의-문자열
```

API 키에 `<` 또는 `>`를 넣지 마세요.

## 3. 설치 및 실행

```bash
npm install
npm run dev
```

브라우저에서 아래 주소를 엽니다.

```text
http://localhost:3000/make
```

데모 쿠폰:

```text
쿠폰코드: DEMO-PET-2026
휴대전화: 임의의 10~11자리 번호
```

`COUPON_MODE=demo`, `AI_MODE=openai` 조합이면 쿠폰은 테스트용이고 사진은 실제 OpenAI API로 제작됩니다.

## 4. 이번 출력 규격

- 상반신 증멍사진: 머리, 귀, 목, 어깨, 윗가슴
- 최종 비율: 가로 5 : 세로 7
- 최종 해상도: 2500 × 3500px JPG
- 좌우 배경을 덧붙이지 않음
- GPT Image가 만든 전체 캔버스를 위아래만 소량 중앙 크롭해 5:7로 변환
- 문구는 AI가 아니라 홈페이지 캔버스에서 합성

## 5. 실제 비용 확인

사진을 만들면 터미널에 다음 형태로 출력됩니다.

```text
[GPT Image 사용량] {
  totalCostUsd: '0.193715'
}
```

`0.193715`는 실제로 약 0.19달러입니다.
