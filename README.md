# Project BoongHota

### 어디있니 붕호타
- 집 근처 붕어빵, 호떡, 타코야끼 가게를 찾아주는 서비스에요.  
- 전국 붕세권, 호세권, 타세권(?)도 한 눈에 볼 수 있어요.

### 찾고 싶은 가게 유형을 선택할 수 있어요!
<p align="center">
 <img width="800" src="https://user-images.githubusercontent.com/34447105/103453156-49f1bd80-4d1a-11eb-80c4-b83ea1c4ede6.PNG"/>
</p>
<br/>
<br/>

### 사장님이라면 직접 가게를 등록하실 수도 있어요!
<p align="center">
 <img width="800" src="https://user-images.githubusercontent.com/34447105/103453157-4bbb8100-4d1a-11eb-918c-341d572dd3f1.PNG"/>
</p>
<br/>
<br/>

### 아직 준비중이에요..
<p align="center">
 <img width="800" src="https://user-images.githubusercontent.com/34447105/103453158-4cecae00-4d1a-11eb-9627-d2c7e30753eb.PNG"/>
</p>
<br/>
<br/>

### 지도에서 내 주변 가게를 찾을 수 있어요!
<p align="center">
 <img width="800" src="https://user-images.githubusercontent.com/34447105/103453160-4eb67180-4d1a-11eb-828b-5762e1f75853.PNG"/>
</p>
<br/>
<br/>

### 귀여운 애니메이션도 있어요^.^;;
<p align="center">
 <img width="800" src="https://media.vlpt.us/images/dolarge/post/b756bdff-a536-41d9-9f76-766282981d92/ezgif.com-gif-maker%20(6).gif"/>
</p>
<br/>
<br/>
                                                                                                                        
# 실행 방법
### 클라이언트(리액트) dev 서버로 실행하기
```git clone https://github.com/BoongHota/BoongHota.git  
cd client  
npm i  
npm start  
```

### node 서버와 함께 실행하기
```git clone https://github.com/BoongHota/BoongHota.git  
cd server  
npm i  
npm start  
cd ../client  
npm i

(dev mode)
npm start

(prod mode)
준비중..
```
<br/>
<br/>

# 디렉토리 구조
```
├ BoongHota  
 ├ client  
  ├ public  
  ├  src  
   ├  api  # Api call functions  
   ├  components  # UI components  
   ├  hooks  # Custom hooks  
   ├  modules  # Redux actions, reducers, saga  
   ├  App.js  
   ├  index.js    
 ├ server  
  ├  model # Data model(mongoose)  
  ├  controller.js # Controller
  ├  db.js # Db connection  
  ├  index.js  
  ├  snackRouter.js # router  
```
<br/>
<br/>

# 기술 스택
| Area | Tech Stack|
| - | - |
| Frontend | ![](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square&logo=TypeScript&logoColor=white) ![](https://img.shields.io/badge/React-61dafb?style=flat-square&logo=React&logoColor=white) ![](https://img.shields.io/badge/Redux-764abc?style=flat-square&logo=Redux&logoColor=white) ![](https://img.shields.io/badge/Sass-cc6699?style=flat-square&logo=Sass&logoColor=white) |
| Backend | ![](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square&logo=TypeScript&logoColor=white) ![](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white) ![](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white)|

<br/>
<br/>

# Wiki
- [Convention](https://github.com/BoongHota/BoongHota/wiki/Git-&-Github)
- [API docs](https://github.com/BoongHota/BoongHotaClient/wiki/API-%EB%AA%85%EC%84%B8%EC%84%9C)
