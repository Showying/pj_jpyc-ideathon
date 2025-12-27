document.addEventListener('DOMContentLoaded', () => {
    // Basic Navigation Logic
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');

    function navigateTo(targetId) {
        // Update Nav
        navItems.forEach(item => {
            if (item.getAttribute('href') === `#${targetId}`) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Update View
        sections.forEach(section => {
            if (section.id === targetId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });

        // Scroll to top
        window.scrollTo(0, 0);
    }

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            navigateTo(targetId);
        });
    });

    // --- Mock Data & Logic ---

    // Initial State
    const state = {
        balance: 24500,
        products: [
            { id: 1, name: "Cyberpunk Cat Tee", price: 2400, image: "https://placehold.co/400x400/1e40af/ffffff?text=Cyber+Cat" },
            { id: 2, name: "Neon Tokyo Mug", price: 1800, image: "https://placehold.co/400x400/f59e0b/ffffff?text=Neon+Mug" }
        ]
    };

    // Render Balance
    const balanceEl = document.getElementById('wallet-balance');
    if (balanceEl) {
        balanceEl.textContent = state.balance.toLocaleString();
    }

    // "Create/Manage" Flow Simulation
    const promptInput = document.getElementById('ai-prompt');
    const generateBtn = document.getElementById('btn-generate');
    const previewArea = document.getElementById('gen-preview');
    const logArea = document.getElementById('automation-log');
    const logContent = document.getElementById('log-content');
    const publishBtn = document.getElementById('btn-publish');

    function addLog(text, delay) {
        return new Promise(resolve => {
            setTimeout(() => {
                const div = document.createElement('div');
                div.className = 'log-line';
                // Timestamp
                const now = new Date();
                const timeStr = now.toLocaleTimeString('ja-JP', { hour12: false }) + "." + String(now.getMilliseconds()).padStart(3, '0').slice(0, 2);
                div.innerHTML = `<span style="opacity:0.5">[${timeStr}]</span> ${text}`;
                logContent.appendChild(div);
                logArea.scrollTop = logArea.scrollHeight;
                resolve();
            }, delay);
        });
    }

    if (generateBtn) {
        generateBtn.addEventListener('click', async () => {
            const prompt = promptInput.value;
            if (!prompt) return;

            // Reset
            previewArea.hidden = true;
            logArea.style.display = 'block';
            logContent.innerHTML = '';
            generateBtn.disabled = true;

            // Automation Sequence (Setup Phase)
            await addLog("プロンプト解析中...", 200);
            await addLog("3Dアセット生成中 (AI Agent)...", 500);
            await addLog("サプライチェーン検索中...", 300);
            await addLog("接続完了: 🏭 工場ノード (自動割当) ✔", 300);
            await addLog("接続完了: 🚚 配送ノード (自動割当) ✔", 300);
            await addLog("スマートコントラクト生成中...", 400);
            await addLog("<span style='color:#3B82F6'>✔ 出品準備完了 (Ready to Publish)</span>", 200);

            // Show Result
            previewArea.hidden = false;
            generateBtn.textContent = "Regenerate Idea";
            generateBtn.disabled = false;

            // Scroll to preview
            previewArea.scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (publishBtn) {
        publishBtn.addEventListener('click', () => {
            alert("Published to Global Market! Smart Contracts deployed.");
            navigateTo('home');
        });
    }

    // --- Role Switching Logic ---
    const roleToggleBtn = document.getElementById('role-toggle');
    let currentRole = 'creator'; // 'creator' or 'buyer'

    function updateRoleUI() {
        const navManage = document.querySelector('a[href="#manage"]'); // Changed from #create to #manage
        const balanceTitle = document.querySelector('#home .card .text-xs');
        const statsCard = document.querySelector('#home .card:nth-of-type(2)');
        const myProductsTitle = document.querySelector('#home h3');
        const headerTitle = document.querySelector('#home h1');
        const avatar = document.querySelector('.user-avatar');
        const buyIndicators = document.querySelectorAll('.buy-indicator');
        const simSaleBtn = document.getElementById('btn-sim-sale');

        if (currentRole === 'creator') {
            // Creator Mode
            roleToggleBtn.textContent = "👤 Creator Mode";
            roleToggleBtn.style.background = "rgba(0, 0, 0, 0.8)";
            if (navManage) navManage.style.display = 'flex';

            // Dashboard Content
            headerTitle.textContent = "Dashboard";
            balanceTitle.textContent = "Total Balance";
            if (statsCard) statsCard.style.display = 'block';
            if (myProductsTitle) myProductsTitle.textContent = "My Products";
            avatar.style.background = "#2563EB"; // Blue for Creator
            if (simSaleBtn) simSaleBtn.style.display = 'block'; // Show Sim Button

            // Re-render Creator Nav if needed
            navItems.forEach(item => {
                if (item.getAttribute('href') === '#manage') item.style.display = 'flex';
            });

            // Market: Hide Buy Indicators
            buyIndicators.forEach(el => el.style.display = 'none');

        } else {
            // Buyer Mode
            roleToggleBtn.textContent = "🛍️ Buyer Mode";
            roleToggleBtn.style.background = "rgba(245, 158, 11, 0.9)"; // Orange for Buyer

            // Hide Manage Tab
            if (navManage) navManage.style.display = 'none';

            // Dashboard -> Wallet
            headerTitle.textContent = "My Wallet";
            balanceTitle.textContent = "Shopping Budget";
            if (statsCard) statsCard.style.display = 'none'; // Buyers don't need sales stats
            if (myProductsTitle) myProductsTitle.textContent = "Purchase History";
            avatar.style.background = "#F59E0B"; // Orange for Buyer
            if (simSaleBtn) simSaleBtn.style.display = 'none'; // Hide Sim Button

            // Market: Show Buy Indicators
            buyIndicators.forEach(el => el.style.display = 'block');
        }
    }

    if (roleToggleBtn) {
        roleToggleBtn.addEventListener('click', () => {
            currentRole = currentRole === 'creator' ? 'buyer' : 'creator';
            updateRoleUI();

            // If switching to buyer while on 'Manage' tab, go home
            if (currentRole === 'buyer' && document.querySelector('#manage.active')) {
                navigateTo('home');
            }

            // Visual feedback
            const container = document.querySelector('.container');
            container.style.opacity = '0.5';
            setTimeout(() => container.style.opacity = '1', 200);
        });
    }

    // --- Sim Sale Logic ---
    const simSaleBtn = document.getElementById('btn-sim-sale');
    if (simSaleBtn) {
        simSaleBtn.addEventListener('click', () => {
            const balanceEl = document.getElementById('wallet-balance');
            let current = parseInt(balanceEl.textContent.replace(/,/g, ''));
            const profit = 800;

            // Animation
            balanceEl.style.color = '#10B981';
            balanceEl.style.transition = '0.2s';
            balanceEl.style.transform = 'scale(1.2)';

            setTimeout(() => {
                current += profit;
                balanceEl.textContent = current.toLocaleString();
                balanceEl.style.transform = 'scale(1)';
                balanceEl.style.color = 'inherit';
                alert("🔔 New Order Received!\n\n+800 JPYC has been transferred to your wallet instantly.");
            }, 300);
        });
    }

    // Initialize
    updateRoleUI();
});

// Logic for Buying Item
window.hasSoldItem = false; // Global flag for sale event
window.buyItem = function (card, price) {
    // Only active in Buyer Mode or generally in Market
    if (confirm(`この商品を ${price} JPYC で購入しますか？`)) {
        // 1. Transaction Animation
        const container = card.querySelector('.split-animation-container');
        if (container) {
            const c1 = document.createElement('div'); c1.className = 'coin'; c1.innerText = '🏭'; c1.style.animation = 'flyTopLeft 1s forwards';
            const c2 = document.createElement('div'); c2.className = 'coin'; c2.innerText = '🚚'; c2.style.animation = 'flyBottom 1s forwards';
            const c3 = document.createElement('div'); c3.className = 'coin'; c3.innerText = '👤'; c3.style.animation = 'flyTopRight 1s forwards';
            container.appendChild(c1); container.appendChild(c2); container.appendChild(c3);
            setTimeout(() => { container.innerHTML = ''; }, 1000);
        }

        // 2. Set State for Creator View
        window.hasSoldItem = true;

        // Show Annotation 6 (Role Switch)
        const anno6 = document.getElementById('anno-role-switch');
        if (anno6) anno6.style.display = 'inline-flex';

        // 3. Feedback (Step 8 equivalent)
        setTimeout(() => {
            if (confirm("⑧ 購入完了! (Step 8)\nスマートコントラクトが自動分配を実行しました。\n\n管理画面に戻って、売上ログ (Step 9) を確認しますか？")) {
                // 1. Switch Tab to Manage
                document.querySelectorAll('.section').forEach(el => el.classList.remove('active'));
                document.getElementById('manage').classList.add('active');

                // 2. Update Bottom Nav
                document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
                document.querySelector('a[href="#manage"]').classList.add('active');

                // 3. Hide Annotation 6 Marker (Since we auto-navigated)
                const anno6 = document.getElementById('anno-role-switch');
                if (anno6) anno6.style.display = 'none';

                // 4. Run Execution Log
                runExecutionLog();
            }
        }, 500);
    }
};

// Toggle Tooltip
window.toggleTooltip = function (marker) {
    const wrapper = marker.closest('.annotation-wrapper');
    const wasActive = wrapper.classList.contains('active');
    document.querySelectorAll('.annotation-wrapper').forEach(el => el.classList.remove('active'));
    if (!wasActive) wrapper.classList.add('active');
};

// Publish Button Logic
const btnPublish = document.getElementById('btn-publish');
if (btnPublish) {
    btnPublish.addEventListener('click', () => {
        // Switch to Market Tab
        document.querySelectorAll('.section').forEach(el => el.classList.remove('active'));
        document.getElementById('market').classList.add('active');
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        document.querySelector('a[href="#market"]').classList.add('active');

        // Auto-switch role to Buyer? Optional, but maybe helpful context
        // For now, keep as is, user can switch role or click manually.
    });
}

// Watch for tab switching to trigger "Execution Log" if sold
document.querySelectorAll('.nav-item').forEach(nav => {
    nav.addEventListener('click', () => {
        const href = nav.getAttribute('href');
        if (href === '#manage' && window.hasSoldItem) {
            runExecutionLog();
            window.hasSoldItem = false; // Reset
        }
    });
});

async function runExecutionLog() {
    const logArea = document.getElementById('execution-log');
    const logContent = document.getElementById('execution-log-content');
    if (!logArea || !logContent) return;

    logArea.style.display = 'block';
    logContent.innerHTML = '';

    // Scroll to log
    logArea.scrollIntoView({ behavior: 'smooth' });

    await addLogTo(logContent, "🔔 イベント: スマートコントラクト '販売' トリガー", 100);
    await addLogTo(logContent, "入金確認: 1,800 JPYC", 400);
    await addLogTo(logContent, "自動分配実行 (Gas: 1 JPYC):", 300);
    await addLogTo(logContent, " - 工場へ: 800 JPYC [送信済]", 300);
    await addLogTo(logContent, " - 配送へ: 500 JPYC [送信済]", 300);
    await addLogTo(logContent, " - あなたへ: 500 JPYC [送信済]", 300);
    await addLogTo(logContent, "<span style='color:#10B981'>✔ トランザクション完了</span>", 200);
}

async function addLogTo(container, text, delay) {
    const div = document.createElement('div');
    div.className = 'log-line';
    div.innerHTML = text;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    await new Promise(r => setTimeout(r, delay));
}
