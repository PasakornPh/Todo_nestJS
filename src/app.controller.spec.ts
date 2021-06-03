import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';


describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService,],
    }).compile();

    appController = app.get<AppController>(AppController);
    
  });

  describe('root', () => {
    it('should return "Hello NestJS!"', () => {
      expect(appController.getHello()).toBe('Hello NestJS!');
    });

  });

  describe('hello2', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello2()).toBe('Hello World!');
    });

  });

  // =====================================================================================================

  // Example Simple Test  ref. https://jestjs.io/docs/using-matchers

  beforeAll(() => {
    // call before all test
  })

  afterAll(() => {
    // call after all test
  })

  beforeEach(() => {
    // call every before test case
  })

  afterEach(() => {
    // call every after test case
  })

  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);   // toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan, toBeLessThanOrEqual
  });

  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });

  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });

  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ];
  
  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
  });

});
