import { create } from 'zustand'

export const useStore = create((set) => ({
  isTransitionActive: false,
  setIsTransitionActive: (val) => set({ isTransitionActive: val }),
  isFirstRender: true,
  setIsFirstRender: (val) => set({ isFirstRender: val }),
  scrollerInstance: null,
  setScrollerInstance: (obj) => set({ scrollerInstance: obj }),
  contactFormOpen: false,
  setContactFormOpen: (val) => set({ contactFormOpen: val }),
  popupTeamOpen: false,
  setPopupTeamOpen: (val) => set({ popupTeamOpen: val }),
  popupTeamData: null,
  setPopupTeamData: (obj) => set({ popupTeamData: obj }),
  popupHelpOpen: false,
  setPopupHelpOpen: (val) => set({ popupHelpOpen: val }),
  popupHelpData: null,
  setPopupHelpData: (obj) => set({ popupHelpData: obj }),
}))
