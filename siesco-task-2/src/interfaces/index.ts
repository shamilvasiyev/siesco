interface Page {
  name: string;
  actions: string[];
}

export interface RootState {
  pages: Page[];
}
