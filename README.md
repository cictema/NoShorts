# NoReels
NoShorts is a browser extension designed to enhance your YouTube browsing experience by automatically removing all YouTube Shorts (Reels) elements from the page. This extension ensures a cleaner, distraction-free interface, allowing you to focus on the content you care about.

## Version: 1.0

## Code and Test
All code is located in 'noshorts.js'. 
It monitors the page for 'ytd-reel-shelf-renderer' tags, which is YouTube's Shorts component on the search results page, and removes it.
To test plugin, simply load the manifest.js file in 'about:debugging#/runtime/this-firefox'. 

## Features:
    Automatically removes all <ytd-reel-shelf-renderer> elements from YouTube pages.
    Uses a MutationObserver to continuously monitor and remove new Reels elements added through infinite scrolling.
    Lightweight and efficient, running seamlessly in the background without requiring user interaction.

## Permissions:
    activeTab: Allows the extension to access the current tab to modify its content.
    webNavigation: Enables the extension to detect navigation events within the YouTube domain.

## How It Works:
    Upon loading a YouTube page, the extension's content script immediately removes any existing Reels elements. It also sets up a MutationObserver to watch for any new Reels elements added to the page, ensuring they are removed as soon as they appear.

## Usage:
    Simply install the extension, and it will automatically work on all YouTube pages.
    No additional configuration or interaction is needed.

## Installation:
    Chrome:
        Open Chrome and navigate to chrome://extensions/.
        Enable "Developer mode" using the toggle switch at the top right.
        Click on "Load unpacked" and select the extension directory.

    Firefox:
        Open Firefox and navigate to about:debugging#/runtime/this-firefox.
        Click on "Load Temporary Add-on" and select the manifest.json file from the extension directory.

#### Enjoy a cleaner, more focused browsing experience free from the distractions of YouTube Shorts.