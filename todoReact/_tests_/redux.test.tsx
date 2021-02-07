import reducers from '../src/store/reducer';
import {
  getAddItemAction,
  getChangeItemAction,
  getDeleteItemAction,
} from '../src/store/actions';

describe('redux test', () => {
  it('addTodo', () => {
    const state = {
      list: [{id: 1, content: 'content-1', status: 0}],
      finished: 0,
      input_value: '',
    };
    const list = {id: 2, content: 'content-2', status: 0};

    const expected = {
      list: [
        {id: 1, content: 'content-1', status: 0},
        {id: 2, content: 'content-2', status: 0},
      ],
      finished: 0,
      input_value: '',
    };
    const result = reducers(state, getAddItemAction(list));
    expect(result).toEqual(expected);
  });
  it('delTodo', () => {
    const state = {
      list: [
        {id: 1, content: 'content-1', status: 0},
        {id: 2, content: 'content-2', status: 0},
      ],
      finished: 0,
      input_value: '',
    };
    const list = {id: 2, content: 'content-2', status: 0};
    const expected = {
      list: [{id: 1, content: 'content-1', status: 0}],
      finished: 0,
      input_value: '',
    };
    const result = reducers(state, getDeleteItemAction(list.id));
    expect(result).toEqual(expected);
  });
  it('changeTodo', () => {
    const state = {
      list: [
        {id: 1, content: 'content-1', status: 0},
        {id: 2, content: 'content-2', status: 0},
      ],
      finished: 0,
      input_value: '',
    };
    const list = {id: 2, content: 'content-2', status: 0};
    const expected = {
      list: [
        {id: 1, content: 'content-1', status: 0},
        {id: 2, content: 'content-2', status: 1},
      ],
      finished: 1,
      input_value: '',
    };
    const result = reducers(state, getChangeItemAction(list.id));
    expect(result).toEqual(expected);
  });
});
