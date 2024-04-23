class TodoItem {
  constructor(title, dueDate) {
    this.title = title; // 할 일 제목
    this.dueDate = dueDate; // 마감 기한
    this.completed = false; // 완료 여부 초기값은 false
  }

  // 항목의 완료 여부를 토글하는 메소드
  toggleComplete() {
    this.completed = !this.completed;
  }
}

export default TodoItem;
