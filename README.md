# NoReels
Firefox plugin that removes all YouTube Reels from search results on youtube.com

## Test
To test plugin, simply load the manifest.js file in 'about:debugging#/runtime/this-firefox'. 

## Code
All code is located in 'noshorts.js'. 
It monitors the page for 'ytd-reel-shelf-renderer' tags, which is YouTube's Shorts component on the search results page, and removes it.