import { create } from 'zustand';

const useStore = create((set) => ({
  user: null,
  coins: 0,
  posts: [],
  setUser: (user) => set({ user }),
  addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
  addCoins: (amount) =>
    set((state) => ({
      coins: state.coins + (state.coins < 1000 ? amount : 0),
    })),
}));

export default useStore;
