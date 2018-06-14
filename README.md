# TodoMVC

![](https://github.com/tastejs/todomvc-app-css/raw/master/screenshot.png)
[DEMO](http://demo.hyunmos.me/todo-vanilla/)

## Basic Feature

- **C**reate list
- **U**pdate list
- **D**elete list
- Toggle list status when click
- Save list when page is refreshed
- Filter by hash url
- Clear button about cleaning completed list

## Detail Basic Feature

1. 할 일을 입력하고 `Enter`를 입력하면 리스트에 추가된다.
   - 아무런 입력값이 없을 경우 할 일이 추가되지 않는다.
1. 추가된 할 일의 왼쪽 둥근 체크를 누를 경우 상태가 완료됨으로 변경된다.
1. 리스트 아이템의 오른쪽 X 버튼을 통해 아이템을 리스트에서 삭제할 수 있다.
1. 할 일을 더블 클릭할 경우 할 일을 변경할 수 있다.
   - 더블클릭 후 입력가능한 상태로 변경되며 바깥 영역 클릭 혹은 엔터 입력시 현재 입력된 값으로 최신화된다.
   - 입력가능한 상태에서 아무런 입력값이 없는 경우 해당 할 일은 삭제된다.
   - 입력가능한 상태에서 ESC 키를 누를 경우 할 일이 변경되지 않고 이전 값이 유지된다.
1. 왼쪽 하단에 몇 개의 할 일이 남았는지 표시한다.
1. 할 일 입력칸 왼쪽 화살표를 클릭하면 모든 할 일이 완료됨으로 변경된다.
   - 완료된 할 일과 완료되지 않은 할 일이 동시에 존재할 때 클릭하면 모든 할 일이 완료됨으로 변경된다.
1. `All`, `Active`, `Completed`를 통해 리스트를 필터링해서 보여준다.
   - `All`(모든 할 일), `Active`(완료되지 않은 할 일), `Completed`(완료된 할 일)
   - 필터를 누를 경우 URL은 각각 `All`(`/#/`), `Active`(`/#/active`), `Completed`(`/#/completed`)으로 변경된다.
1. `Clear completed`를 누를 경우 완료된 모든 할 일을 삭제한다.
1. 새로고침시 추가되어 있는 모든 할 일이 유지된다.
   - URL에 따라 초기 필터링이 결정된다.

## Optional Feature

- Redo / Undo
