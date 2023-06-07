# rebase_test
rebase 로 원격 커밋할 때의 상태 확인용 repo

## 결론
- rebase 할 때, 원격에 이미 브랜치를 push 했다면, 로컬에서 rebase시 후에 push 과정에서 reset or pull(동일한 내용이 커밋 해쉬만 다르게 2번 찍힘ㅇㅂㅇ)이 필요하다.
- Rebase를 하고 싶을 때는, 지금의 분리된 브랜치를 원격에 push하지 말 것!!!
