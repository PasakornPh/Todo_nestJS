import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoService],
    }).compile();

    service = module.get<TodoService>(TodoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  it('should return legth of todo array', () => {
    const title = "Pasakorn"
    const subtitle = "Phareyart"
    service.addTodo(title, subtitle)

    expect(service.todoArray.length).toEqual(1)   // .toEqual  เอาไว้ตรวจสอบว่ามันเท่ากับ .... หรือไม่
    // ตรวจสอบว่าข้อมูลที่ใส่เพิ่มเข้าไป 1 ตัวเเล้วใน array มีความยาว 1 หรือไม่
  });

  it('should return addTodo for a Todo', () => {
    const title = "Pasakorn"
    const subtitle = "Phareyart"
    expect(service.addTodo(title, subtitle)).toBe('title: Pasakorn, subtitle: Phareyart');  // .toBe มันควรจะเป็นอะไร
    //คาดหวังว่าเมื่อเรียก addTodo ไปเเล้วข้อความที่เเสดงควรจะเป็น title: Pasakorn, subtitle: Phareyart
  });

  it('should delete todo in todo array', () => {
    // Add Todo array
    const title = "Pasakorn"
    const subtitle = "Phareyart"
    service.addTodo(title, subtitle)

    expect(service.todoArray.length).toEqual(1)   // .toEqual  เอาไว้ตรวจสอบว่ามันเท่ากับ 1 หรือไม่

    // Remove Todo array
    const id_todo = service.todoArray.find(item=> {return item.titie === "Pasakorn"}).id  // find first id by title
    service.removeTodoById(`${id_todo}`)
    expect(service.todoArray.length).toEqual(0)   // .toEqual  เอาไว้ตรวจสอบว่ามันเท่ากับ 0 หรือไม่
  });

  it('should show message error', () => {
    const id_todo = "AAAAA-BBBBB-CCCCC-DDDD"
    expect(service.removeTodoById(`${id_todo}`)).toBe(`Todo with ${id_todo} not found`)
  });

});
