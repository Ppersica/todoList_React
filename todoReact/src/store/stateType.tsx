export interface TODOITEM {
  id: number;
  content: string;
  status: number;
}
export interface TODO {
  list: {
    id: number;
    content: string;
    status: number;
  }[];
  finished: number;
  input_value: string;
}
