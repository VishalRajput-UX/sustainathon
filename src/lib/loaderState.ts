// Module-level state tracking whether the initial site loader has finished.
// This survives client-side route transitions within the SPA session.

let hasInitialLoaderFinished = false;

export const isSiteLoaded = (): boolean => {
  return hasInitialLoaderFinished;
};

export const markSiteAsLoaded = (): void => {
  hasInitialLoaderFinished = true;
};
