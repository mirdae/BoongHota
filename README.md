# BoongHota

## 작업 flow
### 프로젝트 내려받기
1. 프로젝트를 생성할 로컬 디렉토리로 이동

2. 프로젝트 내려받기  
`git clone https://github.com/BoongHota/BoongHota.git BoongHota`

3. 프로젝트 디렉토리로 이동  
`cd BoongHota`

### 브랜치 생성하기
1. 브랜치 생성  
`git branch [브랜치명]`

2. 생성한 브랜치로 이동  
`git checkout [브랜치명]`

3. 작업 시작!

### 작업(커밋) 단위 쪼개기
1. 일부 작업이 완료되면(ex. 가게 정보 post API 설계) add  
`git add .`

2. 커밋하기  
`git commit -m '[커밋 메세지]'`

3. 리모트(깃허브) 브랜치로 push 하기  
`git push --set-upstream origin [브랜치명]`

### Pull Request
1. push하면 리모트(깃허브) 저장소에 new pull request 알림이 뜸 -> 클릭

2. 작업 내용 작성

3. 나머지 두 사람이 코드 리뷰를 하고 approve 혹은 reject

4. 리뷰를 하는 두 사람이 모두 approve하면 pull request를 생성한 사람이 merge

### Pull
1. 로컬에서 dev 브랜치로 이동 (없으면 생성(`git branch dev`) 후 이동)  
`git checkout dev`

2. merge된 리모트 dev 브랜치에서 코드 내려받기  
`git pull`

## 이슈 라벨링
- `docs` : 문서작업과 관련된 이슈
- `feat` : 기능 개발과 관련된 이슈
- `fix` : 버그와 관련된 이슈
- `env` : 개발 환경 설정과 관련된 이슈

## 브랜치 규칙
ex)
- `feat/[개발할 내용]`
- `env`
- `fix/[수정할 내용]`

## 커밋 메세지 규칙
- `[#이슈번호] 라벨 : 내용`
ex)
`[#1] feat : 추가 버튼 컴포넌트 생성 및 로직 구현`
