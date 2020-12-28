<div width="147px" align="center" >
<img src="https://media.vlpt.us/images/dolarge/post/0f4e3ed7-c07c-4e48-afea-dba71b3b306b/logo.png" />
</div>

***
# 설치 및 실행
***
### Install dependencies
`npm install`

### Build production artifacts
`npm run build`

### node 서버와 react서버 동시에 켜기
server 경로에서
`npm run dev`


# 디렉토리 구조


$ ./tree-md .
# Project tree

.
 * [tree-md](./tree-md)
 * [dir2](./dir2)
   * [file21.ext](./dir2/file21.ext)
   * [file22.ext](./dir2/file22.ext)
   * [file23.ext](./dir2/file23.ext)
 * [dir1](./dir1)
   * [file11.ext](./dir1/file11.ext)
   * [file12.ext](./dir1/file12.ext)
 * [file_in_root.ext](./file_in_root.ext)
 * [README.md](./README.md)
 * [dir3](./dir3)
***
`
| +-- BoongHota  
  +--client  
>>>  public  
>>>  src  
>>>>  api  # Api call functions  
>>>>  components  # components  
>>>>  hooks  # Custom hooks  
>>>>  modules  # Redux actions, reducers, saga  
>>>>  App.js  
>>>>  index.js    
>> server  
>>> model # Data model(mongoose)  
>>> controller.js # business logic  
>>> db.js # db connect settings  
>>> index.js  
>>> snackRouter.js # router  
`
