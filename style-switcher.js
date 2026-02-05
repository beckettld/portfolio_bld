// Style Switcher JavaScript

(function() {
    'use strict';

    // Get base path for stylesheets (relative to current page)
    function getBasePath() {
        const script = document.querySelector('script[src*="style-switcher.js"]');
        if (!script) return '';
        const scriptPath = script.getAttribute('src');
        // Use the script directory (e.g., "" or "../") to reach the root styles
        return scriptPath.replace(/style-switcher\.js.*$/, '');
    }

    // Style definitions
    const basePath = getBasePath();
    const styles = {
        'technopunk': basePath + 'style.css',
        'minimal': basePath + 'style-minimal.css',
        'bohemian': basePath + 'style-bohemian.css'
    };

    // Initialize
    function init() {
        // Get or create style switcher
        let switcher = document.getElementById('style-switcher');
        if (!switcher) {
            switcher = createStyleSwitcher();
            document.body.appendChild(switcher);
        }

        // Ensure the existing stylesheet is marked for switching
        const existingStyle = document.querySelector('link[data-style-sheet]') ||
            document.querySelector('link[rel="stylesheet"]');
        if (existingStyle) {
            existingStyle.setAttribute('data-style-sheet', 'true');
        }

        // Load saved preferences
        const savedStyle = localStorage.getItem('selectedStyle') || 'technopunk';
        const savedColor = localStorage.getItem('selectedColor') || '#ff3300';

        // Set initial values
        document.getElementById('style-select').value = savedStyle;
        document.getElementById('color-picker').value = savedColor;

        // Apply saved style
        switchStyle(savedStyle);
        applyColor(savedColor);

        // Add event listeners
        document.getElementById('style-select').addEventListener('change', function(e) {
            switchStyle(e.target.value);
            localStorage.setItem('selectedStyle', e.target.value);
        });

        document.getElementById('color-picker').addEventListener('change', function(e) {
            applyColor(e.target.value);
            localStorage.setItem('selectedColor', e.target.value);
        });
    }

    // Create style switcher UI
    function createStyleSwitcher() {
        const container = document.createElement('div');
        container.id = 'style-switcher';
        container.className = 'style-switcher';

        const styleLabel = document.createElement('label');
        styleLabel.textContent = 'Style:';
        styleLabel.setAttribute('for', 'style-select');

        const styleSelect = document.createElement('select');
        styleSelect.id = 'style-select';
        styleSelect.innerHTML = `
            <option value="technopunk">Technopunk</option>
            <option value="minimal">Minimalistic</option>
            <option value="bohemian">Bohemian</option>
        `;

        const colorLabel = document.createElement('label');
        colorLabel.textContent = 'Accent Color:';
        colorLabel.setAttribute('for', 'color-picker');

        const colorPicker = document.createElement('input');
        colorPicker.type = 'color';
        colorPicker.id = 'color-picker';
        colorPicker.value = '#ff3300';

        container.appendChild(styleLabel);
        container.appendChild(styleSelect);
        container.appendChild(colorLabel);
        container.appendChild(colorPicker);

        return container;
    }

    // Switch stylesheet
    function switchStyle(styleName) {
        // Update existing stylesheet or create one if missing
        let link = document.querySelector('link[data-style-sheet]');
        if (!link) {
            link = document.createElement('link');
            link.rel = 'stylesheet';
            link.setAttribute('data-style-sheet', 'true');
            document.head.appendChild(link);
        }
        link.href = styles[styleName] || styles['technopunk'];

        // Update color picker based on style default
        const defaultColors = {
            'technopunk': '#ff3300',
            'minimal': '#2563eb',
            'bohemian': '#d4a574'
        };
        
        const defaultColor = defaultColors[styleName] || '#ff3300';
        document.getElementById('color-picker').value = defaultColor;
        applyColor(defaultColor);
    }

    // Apply accent color
    function applyColor(color) {
        const root = document.documentElement;
        
        // Convert hex to RGB for hover calculations
        const rgb = hexToRgb(color);
        if (!rgb) return;

        // Calculate hover color (lighter)
        const hoverR = Math.min(255, rgb.r + 30);
        const hoverG = Math.min(255, rgb.g + 30);
        const hoverB = Math.min(255, rgb.b + 30);
        const hoverColor = `rgb(${hoverR}, ${hoverG}, ${hoverB})`;

        // Calculate secondary color (slightly different)
        const secondaryR = Math.min(255, rgb.r + 20);
        const secondaryG = Math.min(255, rgb.g + 20);
        const secondaryB = Math.min(255, rgb.b + 20);
        const secondaryColor = `rgb(${secondaryR}, ${secondaryG}, ${secondaryB})`;

        // Apply CSS variables
        root.style.setProperty('--accent-color', color);
        root.style.setProperty('--accent-hover', hoverColor);
        root.style.setProperty('--accent-secondary', secondaryColor);
    }

    // Convert hex to RGB
    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
