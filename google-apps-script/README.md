# Google Apps Script 설치

쿠폰 서버와 이야기 게시판은 `doGet`, `doPost` 이름이 겹치므로 **각각 별도의 Apps Script 프로젝트**로 배포합니다.

## 1. 쿠폰 서버

1. 기존 쿠폰 스프레드시트에서 확장 프로그램 → Apps Script를 엽니다.
2. `CouponServer.gs` 전체를 붙여넣습니다.
3. 스크립트 속성을 등록합니다.
   - `COUPON_API_SECRET`: Render의 `COUPON_API_SECRET`과 같은 값
   - `RESULT_FOLDER_ID`: 결과를 보관할 Google Drive 폴더 ID
   - `COUPON_SPREADSHEET_ID`: 선택 사항. 스크립트가 시트에 종속되어 있으면 생략 가능
   - `COUPON_SHEET_NAME`: 기본값 `쿠폰목록`
   - `RESULT_RETENTION_DAYS`: 기본값 `7`
4. `setupCouponServer()`를 한 번 실행합니다.
5. 웹 앱으로 새 배포하고 실행 사용자는 나, 액세스 사용자는 모든 사용자로 설정합니다.
6. `/exec` 주소를 Render의 `COUPON_API_URL`에 넣습니다.

스마트스토어 자동화가 `/api/integrations/smartstore/issue`를 호출하면 사용 가능한 코드 한 개가 `issued` 상태로 배정됩니다. 자동화에서는 응답의 `code`를 문자에 넣어 구매자에게 보내면 됩니다.

## 2. 이야기 게시판

1. 별도 스프레드시트와 별도 Apps Script 프로젝트를 만듭니다.
2. `StoryBoard.gs`를 붙여넣습니다.
3. `STORY_API_SECRET` 스크립트 속성을 등록합니다.
4. `setupStoryBoard()`를 실행한 뒤 웹 앱으로 배포합니다.
5. `/exec` 주소를 Render의 `STORY_API_URL`에 넣습니다.
