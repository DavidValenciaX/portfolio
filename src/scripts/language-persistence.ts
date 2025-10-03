/**
 * Language persistence module
 * Preserves scroll position and section when switching languages
 */

const STORAGE_KEY = 'language_switch_data';

interface LanguageSwitchData {
  scrollPosition: number;
  hash: string;
  timestamp: number;
}

const STORAGE_EXPIRATION_MS = 5000; // 5 seconds

/**
 * Saves current scroll position and hash before language switch
 */
export function saveScrollPosition(): void {
  const data: LanguageSwitchData = {
    scrollPosition: window.scrollY,
    hash: window.location.hash,
    timestamp: Date.now()
  };
  
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving scroll position:', error);
  }
}

/**
 * Restores scroll position after language switch
 */
export function restoreScrollPosition(): void {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    
    if (!stored) {
      return;
    }
    
    const data: LanguageSwitchData = JSON.parse(stored);
    
    // Check if data is not expired
    const isExpired = Date.now() - data.timestamp > STORAGE_EXPIRATION_MS;
    if (isExpired) {
      sessionStorage.removeItem(STORAGE_KEY);
      return;
    }
    
    // Wait for page to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        performRestore(data);
      });
    } else {
      // Use setTimeout to ensure DOM is fully rendered
      setTimeout(() => performRestore(data), 100);
    }
    
    // Clean up storage
    sessionStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error restoring scroll position:', error);
    sessionStorage.removeItem(STORAGE_KEY);
  }
}

/**
 * Performs the actual scroll restoration
 */
function performRestore(data: LanguageSwitchData): void {
  // If there's a hash, navigate to that section
  if (data.hash) {
    const element = document.querySelector(data.hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return;
    }
  }
  
  // Otherwise, restore the exact scroll position
  window.scrollTo({
    top: data.scrollPosition,
    behavior: 'smooth'
  });
}

/**
 * Sets up language switch event listeners
 */
export function setupLanguageSwitchListeners(): void {
  const langOptions = document.querySelectorAll('.lang-option');
  
  langOptions.forEach(option => {
    option.addEventListener('click', (e) => {
      saveScrollPosition();
      // Allow default navigation to proceed
    });
  });
}

