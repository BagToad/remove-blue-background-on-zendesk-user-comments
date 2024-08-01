// ==UserScript==
// @name        Remove blue shading on comment background
// @namespace   Violentmonkey Scripts
// @match       https://*.zendesk.com/agent/tickets/*
// @grant       none
// @version     1.0
// @author      Kynan Ware
// @description Remove the blue background on user-comments in Zendesk agent workspace
// ==/UserScript==

let styleTag = document.createElement('style');

// Add some style rules to it
styleTag.innerHTML = `
[data-test-id="omni-log-item-message"][type="end-user"] {
    background-color: transparent;
}
`;

// Append the style tag to the head of the document
document.head.appendChild(styleTag);
