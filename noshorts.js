// Function to remove all ytd-reel-shelf-renderer elements
function removeReelShelfRenderers() {
    let elements = document.querySelectorAll('ytd-reel-shelf-renderer');
    elements.forEach(element => {
      element.parentNode.removeChild(element);
    });
  }
  
  // Run the function initially to remove existing elements
  removeReelShelfRenderers();
  
  // Create a MutationObserver to monitor the DOM for new ytd-reel-shelf-renderer elements
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          if (node.tagName === 'YTD-REEL-SHELF-RENDERER') {
            node.parentNode.removeChild(node);
          }
        });
      }
    });
  });
  
  // Start observing the document body for child node additions
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  