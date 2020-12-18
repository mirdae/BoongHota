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
  3-1. push할 리모트 브랜치 정의   
  `git push --set-upstream origin [브랜치명(로컬 브랜치와 같은 이름으로)]`  
  3-2. push  
  `git push`

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
`[#1] ADD : 검색 필터 로직(filter) 추가`

- `FIX` - 보통 올바르지 않은 동작을 고친 경우에 사용합니다.  
- `ADD` - 코드나 테스트, 예제, 문서 등의 추가가 있을 때 사용합니다  
- `REMOVE` - 코드의 삭제가 있을 때 사용  
- `REFACTOR` - 전면 수정이 있을 때 사용합니다.  
- `UPDATE` - 원래도 정상적으로 동작하고 있었지만, 수정, 추가, 보완을 한다는 개념입니다. 코드보다는 주로 문서나 리소스, 라이브러리등에 사용합니다  
- `IMPROVE` - 향상이 있을 때 사용합니다. 호환성, 테스트 커버리지, 성능, 검증 기능, 접근성 등 다양한 것들이 목적  
- `MAKE` - 주로 기존 동작의 변경을 명시합니다.  
- `REVISE` - 문서의 개정이 있을 때 주로 사용합니다.  
- `CORRECT` - 주로 문법의 오류나 타입의 변경, 이름 변경 등에 사용합니다.  
- `MOVE` - 코드의 이동이 있을 때 사용합니다.  
- `RENAME` - 이름 변경이 있을 때 사용합니다.  
- `VERIFY` - 검증 코드를 넣을 때 주로 사용합니다.  
- `SET` - 변수 값을 변경하는 등의 작은 수정에 주로 사용합니다.  

## 기타
### branch 한 눈에 보기
- Insights 탭 -> Network

## 참고할만한 것들
- [Git 뉴비를 위한 기초 사용법 - 시작하기](https://evan-moon.github.io/2019/07/25/git-tutorial/)
- [자주 사용하는 기초 Git 명령어 정리하기](https://medium.com/@pks2974/%EC%9E%90%EC%A3%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EA%B8%B0%EC%B4%88-git-%EB%AA%85%EB%A0%B9%EC%96%B4-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-533b3689db81)
 
