/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app-container');
    if (appContainer) {
        const messageElement = document.createElement('p');
        messageElement.textContent = 'I AM ALIVE';
        messageElement.setAttribute('aria-live', 'polite'); // For accessibility
        appContainer.appendChild(messageElement);
    } else {
        console.error('App container not found');
    }
});