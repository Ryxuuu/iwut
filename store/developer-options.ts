import { create } from "zustand";
import { persist } from "zustand/middleware";

import { IS_DEV } from "@/constants/is-dev";
import { zustandStorage } from "@/lib/storage";

interface DeveloperOptionsStore {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
}

export const useDeveloperOptionsStore = create<DeveloperOptionsStore>()(
  persist(
    (set) => ({
      enabled: false,
      setEnabled: (enabled) => set({ enabled: IS_DEV && enabled }),
    }),
    {
      name: "developer-options",
      storage: zustandStorage,
      partialize: ({ enabled }) => ({ enabled }),
      merge: (persisted, current) => ({
        ...current,
        enabled:
          IS_DEV &&
          (persisted as { enabled?: unknown } | undefined)?.enabled === true,
      }),
      onRehydrateStorage: () => (state) => {
        // Preview and production share storage. Clear the saved opt-in as well
        // so returning to preview after production requires unlocking again.
        if (!IS_DEV) state?.setEnabled(false);
      },
    },
  ),
);
