/**
 * Leave a secondary/informational page.
 * Prefer returning to the same-origin page the user came from;
 * otherwise go to the primary home experience.
 */
export function leaveSecondary(navigateHome: () => void, goBack: () => void) {
  if (typeof window === "undefined") {
    navigateHome();
    return;
  }

  let sameOriginReferrer = false;
  try {
    sameOriginReferrer =
      Boolean(document.referrer) &&
      new URL(document.referrer).origin === window.location.origin;
  } catch {
    sameOriginReferrer = false;
  }

  if (sameOriginReferrer && window.history.length > 1) {
    goBack();
    return;
  }

  navigateHome();
}
