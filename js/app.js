// NexusRank Pro - GitHub Deploy Version
// Tool configurations
const TOOL_CONFIGS = {
    'seo-writer': {
        name: 'AI SEO Writer',
        icon: 'fas fa-pen-nib',
        description: 'Generate comprehensive, SEO-optimized articles up to 10,000 words',
        options: [
            {
                label: 'Word Count',
                type: 'select',
                options: ['500-1000', '1000-2000', '2000-5000', '5000-10000']
            },
            {
                label: 'Tone',
                type: 'select', 
                options: ['Professional', 'Casual', 'Academic', 'Creative']
            }
        ]
    },
    'humanizer': {
        name: 'AI Humanizer',
        icon: 'fas fa-user-friends',
        description: 'Transform AI-generated content into natural, human-like text',
        options: [
            {
                label: 'Style',
                type: 'select',
                options: ['Natural', 'Conversational', 'Professional', 'Academic']
            },
            {
                label: 'Complexity',
                type: 'select',
                options: ['Simple', 'Medium', 'Complex', 'Advanced']
            }
        ]
    },
    'detector': {
        name: 'AI Detector',
        icon: 'fas fa-search',
        description: 'Detect AI-generated content with advanced analysis',
        options: [
            {
                label: 'Sensitivity',
                type: 'select',
                options: ['Low', 'Medium', 'High', 'Maximum']
            },
            {
                label: 'Analysis Type',
                type: 'select',
                options: ['Basic', 'Detailed', 'Comprehensive', 'Expert']
            }
        ]
    },
    'paraphraser': {
        name: 'Paraphraser',
        icon: 'fas fa-sync-alt',
        description: 'Rewrite content while preserving meaning and improving clarity',
        options: [
            {
                label: 'Rewrite Level',
                type: 'select',
                options: ['Light', 'Medium', 'Heavy', 'Complete']
            },
            {
                label: 'Style',
                type: 'select',
                options: ['Academic', 'Business', 'Casual', 'Creative']
            }
        ]
    },
    'grammar': {
        name: 'Grammar Checker',
        icon: 'fas fa-spell-check',
        description: 'Advanced grammar and style checking with suggestions',
        options: [
            {
                label: 'Check Level',
                type: 'select',
                options: ['Basic', 'Standard', 'Advanced', 'Professional']
            },
            {
                label: 'Language',
                type: 'select',
                options: ['US English', 'UK English', 'Canadian English', 'Australian English']
            }
        ]
    },
    'improver': {
        name: 'Text Improver',
        icon: 'fas fa-magic',
        description: 'Enhance readability, style, and overall content quality',
        options: [
            {
                label: 'Improvement Type',
                type: 'select',
                options: ['Clarity', 'Engagement', 'Professionalism', 'Creativity']
            },
            {
                label: 'Target Audience',
                type: 'select',
                options: ['General', 'Business', 'Academic', 'Technical']
            }
        ]
    }
};

// Usage tracking
const MAX_FREE_USES = 1;

function getUsageCounts() {
    const counts = localStorage.getItem('nexusrank_usage');
    return counts ? JSON.parse(counts) : {};
}

function setUsageCounts(counts) {
    localStorage.setItem('nexusrank_usage', JSON.stringify(counts));
}

function canUseTool(toolId) {
    if (isProUser()) return true;
    const counts = getUsageCounts();
    return (counts[toolId] || 0) < MAX_FREE_USES;
}

function incrementUsage(toolId) {
    const counts = getUsageCounts();
    counts[toolId] = (counts[toolId] || 0) + 1;
    setUsageCounts(counts);
}

function isProUser() {
    return localStorage.getItem('nexusrank_pro') === 'true';
}

function setProUser(isPro) {
    localStorage.setItem('nexusrank_pro', isPro.toString());
}

// DOM manipulation
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
}

function handleToolClick(toolId) {
    if (!canUseTool(toolId)) {
        showSupportModal();
    } else {
        showToolModal(toolId);
    }
}

function showToolModal(toolId) {
    const tool = TOOL_CONFIGS[toolId];
    if (!tool) return;

    const modal = document.getElementById('tool-modal');
    const modalContent = modal.querySelector('.glass-panel');
    
    modalContent.innerHTML = `
        <div class="p-6">
            <div class="flex items-center justify-between mb-6">
                <h3 class="font-jetbrains text-2xl font-bold neon-text text-neon-blue">${tool.name}</h3>
                <button onclick="hideModal('tool-modal')" class="text-gray-400 hover:text-white text-xl">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    <label class="block font-jetbrains text-sm font-bold mb-2 text-neon-blue">Input</label>
                    <textarea id="tool-input" class="cyber-input w-full h-64 resize-none font-mono text-sm" 
                              placeholder="Enter your text here..."></textarea>
                    
                    <div class="mt-4 grid grid-cols-2 gap-4">
                        ${tool.options.map(option => `
                            <div>
                                <label class="block font-jetbrains text-xs font-bold mb-1 text-neon-blue">${option.label}</label>
                                <select class="cyber-input w-full" data-option="${option.label}">
                                    <option value="">Select ${option.label}</option>
                                    ${option.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                                </select>
                            </div>
                        `).join('')}
                    </div>
                    
                    <button onclick="processText('${toolId}')" class="neon-button w-full mt-6 py-3 rounded-lg font-jetbrains">
                        <i class="fas fa-play mr-2"></i>Process Text
                    </button>
                </div>
                
                <div>
                    <label class="block font-jetbrains text-sm font-bold mb-2 text-neon-blue">Output</label>
                    <div id="tool-output" class="cyber-input w-full h-64 overflow-y-auto font-mono text-sm bg-gray-900/50">
                        Results will appear here...
                    </div>
                    
                    <div class="mt-4 grid grid-cols-2 gap-4">
                        <button onclick="copyOutput()" class="purple-button px-4 py-2 rounded-lg font-jetbrains">
                            <i class="fas fa-copy mr-2"></i>Copy
                        </button>
                        <button onclick="downloadOutput('${toolId}')" class="purple-button px-4 py-2 rounded-lg font-jetbrains">
                            <i class="fas fa-download mr-2"></i>Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    showModal('tool-modal');
}

function showSupportModal() {
    showModal('support-modal');
}

function closeModal(modalId) {
    hideModal(modalId);
}

async function processText(toolId) {
    const input = document.getElementById('tool-input').value.trim();
    if (!input) {
        alert('Please enter some text to process.');
        return;
    }

    const outputEl = document.getElementById('tool-output');
    outputEl.innerHTML = '<div class="animate-pulse">Processing your text...</div>';

    // Get selected options
    const options = {};
    document.querySelectorAll('[data-option]').forEach(select => {
        const option = select.getAttribute('data-option');
        options[option] = select.value;
    });

    try {
        // Call the DeepSeek API worker
        // Option 1: Direct worker URL (replace YOUR-USERNAME)
        // const response = await fetch('https://nexusrank-pro-worker.YOUR-USERNAME.workers.dev/', {
        
        // Option 2: Use relative path with _redirects (recommended)
        const response = await fetch('/api/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: toolId,
                input: input,
                options: options
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        if (result.success) {
            outputEl.innerHTML = result.output || 'No output generated.';
            incrementUsage(toolId);
        } else {
            outputEl.innerHTML = `Error: ${result.error || 'Failed to process text'}`;
        }
    } catch (error) {
        console.error('Error processing text:', error);
        outputEl.innerHTML = 'Error: Failed to connect to AI service. Please try again later.';
    }
}

function copyOutput() {
    const output = document.getElementById('tool-output').textContent;
    if (output && output !== 'Results will appear here...') {
        navigator.clipboard.writeText(output).then(() => {
            alert('Content copied to clipboard!');
        }).catch(() => {
            alert('Failed to copy content.');
        });
    }
}

function downloadOutput(toolId) {
    const output = document.getElementById('tool-output').textContent;
    if (output && output !== 'Results will appear here...') {
        const blob = new Blob([output], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `nexusrank-${toolId}-output.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    // Check for pro credentials (hidden until Patreon payment)
    if (username === 'prouser606' && password === 'tUChSUZ7drfMkYm') {
        setProUser(true);
        hideModal('login-modal');
        alert('Successfully logged in as Pro user!');
        updateUI();
    } else {
        alert('Invalid credentials. Pro access requires Patreon subscription.');
    }
}

function updateUI() {
    const isPro = isProUser();
    const counts = getUsageCounts();
    
    // Update tool cards with current usage
    Object.keys(TOOL_CONFIGS).forEach(toolId => {
        const card = document.querySelector(`[data-tool="${toolId}"]`);
        if (card) {
            const button = card.querySelector('button');
            const usageBar = card.querySelector('.usage-indicator div');
            
            if (isPro) {
                button.innerHTML = '<i class="fas fa-play mr-2"></i>Use Tool (Pro)';
                if (usageBar) usageBar.style.width = '100%';
            } else {
                const usage = counts[toolId] || 0;
                const canUse = usage < MAX_FREE_USES;
                button.innerHTML = `<i class="fas fa-play mr-2"></i>Use Tool`;
                if (usageBar) usageBar.style.width = `${(usage / MAX_FREE_USES) * 100}%`;
            }
        }
    });
}

function renderTools() {
    const toolsGrid = document.getElementById('tools-grid');
    if (!toolsGrid) return;

    const toolsHTML = Object.entries(TOOL_CONFIGS).map(([toolId, tool]) => {
        const isHumanizer = toolId === 'humanizer' || toolId === 'paraphraser' || toolId === 'improver';
        const iconColor = isHumanizer ? 'text-neon-purple' : 'text-neon-blue';
        
        return `
            <div class="tool-card p-6 rounded-xl cursor-pointer" data-tool="${toolId}" onclick="handleToolClick('${toolId}')">
                <div class="text-center mb-6">
                    <i class="${tool.icon} text-4xl ${iconColor} mb-4"></i>
                    <h3 class="font-jetbrains text-xl font-bold mb-2">${tool.name}</h3>
                    <p class="text-gray-400">${tool.description}</p>
                </div>
                
                <div class="usage-indicator h-2 rounded-full mb-4 bg-gray-700">
                    <div class="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full transition-all duration-300" style="width: 0%"></div>
                </div>
                
                <div class="text-center">
                    <button class="neon-button w-full py-3 rounded-lg font-jetbrains" onclick="event.stopPropagation(); handleToolClick('${toolId}')">
                        <i class="fas fa-play mr-2"></i>
                        <span>Use Tool</span>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    toolsGrid.innerHTML = toolsHTML;
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    renderTools();
    updateUI();

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Modal event listeners
    document.getElementById('pro-login-btn')?.addEventListener('click', () => showModal('login-modal'));
    document.getElementById('mobile-pro-login-btn')?.addEventListener('click', () => showModal('login-modal'));
    document.getElementById('close-login-modal')?.addEventListener('click', () => hideModal('login-modal'));
    document.getElementById('close-support-modal')?.addEventListener('click', () => hideModal('support-modal'));
    
    // Login form
    document.getElementById('login-form')?.addEventListener('submit', handleLogin);

    // Close modals when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('fixed') && e.target.classList.contains('inset-0')) {
            const modalId = e.target.id;
            if (modalId) hideModal(modalId);
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Update UI periodically to reflect usage changes
    setInterval(updateUI, 1000);
});