/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app-container');
    if (appContainer) {
        // Existing message
        const messageElement = document.createElement('p');
        messageElement.textContent = 'I AM ALIVE';
        messageElement.setAttribute('aria-live', 'polite'); // For accessibility
        appContainer.appendChild(messageElement);

        // New button
        const colorButton = document.createElement('button');
        colorButton.textContent = 'Click Me to Change Color';
        colorButton.id = 'color-change-button';
        colorButton.setAttribute('aria-pressed', 'false'); // Initial state

        let isColorActive = false;
        const originalColor = '#007bff'; // Defined in CSS as initial
        const activeColor = '#28a745'; // Defined in CSS for .active

        colorButton.addEventListener('click', () => {
            isColorActive = !isColorActive;
            colorButton.classList.toggle('active');
            colorButton.setAttribute('aria-pressed', isColorActive.toString());
            // Optional: change text or provide more visual feedback
            if (isColorActive) {
                colorButton.textContent = 'Color Changed!';
            } else {
                colorButton.textContent = 'Click Me to Change Color';
            }
        });

        appContainer.appendChild(colorButton);

    } else {
        console.error('App container not found');
    }
});