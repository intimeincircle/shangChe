import create from 'zustand'


type A = {
    bears: number
}

export const useStoreItem = create<A>(set => ({
    bears: 0,
    increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 })
}))