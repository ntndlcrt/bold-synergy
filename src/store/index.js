import { create } from 'zustand'

export const useStore = create((set) => ({
  isTransitionActive: false,
  setIsTransitionActive: (val) => set({ isTransitionActive: val }),
  isFirstLoad: true,
  setIsFirstLoad: (val) => set({ isFirstLoad: val }),
  scrollerInstance: null,
  setScrollerInstance: (obj) => set({ scrollerInstance: obj }),
  popupContactOpen: false,
  setPopupContactOpen: (val) => set({ popupContactOpen: val }),
  popupTeamOpen: false,
  setPopupTeamOpen: (val) => set({ popupTeamOpen: val }),
  popupTeamData: null,
  setPopupTeamData: (obj) => set({ popupTeamData: obj }),
  popupHelpOpen: false,
  setPopupHelpOpen: (val) => set({ popupHelpOpen: val }),
  popupHelpData: null,
  setPopupHelpData: (obj) => set({ popupHelpData: obj }),
  searchOpen: false,
  setSearchOpen: (val) => set({ searchOpen: val }),
}))
