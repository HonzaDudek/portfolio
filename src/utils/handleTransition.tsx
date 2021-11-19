export const handExitComplete = (hashId: string): void => {
  if (typeof window !== 'undefined') {
    // Get the hash from the url

    if (hashId) {
      // Use the hash to find the first element with that id
      const element = document.getElementById(hashId);
      window.location.hash = hashId;

      if (element) {
        // Smooth scroll to that elment
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }
  }
};
