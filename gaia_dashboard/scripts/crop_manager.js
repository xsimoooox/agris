/**
 * Agrisense — Crop & Terminology Manager
 * Dynamically updates all UI elements, scores, plans, and metrics based on selected crop.
 */

function updatePageTerminology() {
    if (typeof getCropConfig !== 'function') return;

    const cropId = getSelectedCrop();
    const config = getCropConfig(cropId);
    if (!config) return;

    const lang = (typeof getSavedLang === 'function') ? getSavedLang() : (localStorage.getItem('Agrisense_lang') || localStorage.getItem('Agrisense_lang') || 'fr');
    const isAr = lang === 'ar';

    // 1. BRANDING: Replace any residual "Agrisense" occurrences in visible UI
    const allTextElements = document.querySelectorAll('h1, h2, h3, h4, h5, p, span, div, button, li, a, label, .nav-text, .metric-label, .metric-note, .ref-value');
    allTextElements.forEach(el => {
        // Skip script/style tags or inputs
        if (el.tagName === 'SCRIPT' || el.tagName === 'STYLE' || el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') return;

        // Clean up branding in text nodes if present
        if (el.children.length === 0) {
            if (el.textContent.includes('Agrisense') || el.textContent.includes('Agrisense') || el.textContent.includes('Agrisense')) {
                el.textContent = el.textContent.replace(/Agrisense|Agrisense/g, 'Agrisense').replace(/Agrisense/g, 'Agrisense');
            }
            if (el.textContent.includes('Matching') || el.textContent.includes('matching')) {
                el.textContent = el.textContent.replace(/Score de [Mm]atching [Gg]lobal/g, isAr ? 'نسبة التقدم الزراعي' : 'Score d’avancement')
                    .replace(/[Mm]atching [Ss]core/g, isAr ? 'نسبة التقدم' : 'Score d’avancement')
                    .replace(/[Mm]atching/g, isAr ? 'التقدم' : 'Avancement');
            }
        }
    });

    // Update sidebar logo text
    document.querySelectorAll('.sidebar-header').forEach(header => {
        const gaia = header.querySelector('.gaia-text');
        const eye = header.querySelector('.eye-text');
        if (gaia && eye) {
            gaia.textContent = 'Agri';
            eye.textContent = 'Science';
        } else if (header.children.length === 0 || header.textContent.toLowerCase().includes('terra')) {
            header.innerHTML = '<span class="gaia-text">Agri</span><span class="eye-text">sense</span>';
        }
    });

    // 2. ACTIVE CROP HEADER BADGE
    let cropBadge = document.getElementById('active-crop-indicator');
    const mainTitle = document.querySelector('.main-title');
    if (!cropBadge && mainTitle) {
        cropBadge = document.createElement('div');
        cropBadge.id = 'active-crop-indicator';
        cropBadge.className = 'active-crop-banner';
        cropBadge.setAttribute('style', `
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: rgba(201, 123, 90, 0.08);
            border: 1px solid rgba(201, 162, 39, 0.35);
            padding: 8px 18px;
            border-radius: 25px;
            margin-top: 10px;
            margin-bottom: 25px;
            font-size: 14px;
            font-weight: 600;
            color: #072167;
            box-shadow: 0 4px 15px rgba(201, 123, 90, 0.05);
            transition: all 0.3s ease;
        `);
        mainTitle.parentNode.insertBefore(cropBadge, mainTitle.nextSibling);
    }
    if (cropBadge) {
        const labelText = isAr ? 'الزراعة قيد التحليل :' : 'Culture analysée :';
        cropBadge.innerHTML = `
            <span style="font-size: 1.3rem;">${config.icon}</span>
            <span>${labelText} <strong style="color: #C9A227; font-size: 15px;">${config.display}</strong></span>
            <span style="background: #072167; color: #fff; padding: 2px 10px; border-radius: 12px; font-size: 11px; font-weight: 700; text-transform: uppercase;">Actif</span>
        `;
    }

    // 3. SCORE D'AVANCEMENT (Formerly Score de Matching)
    const scoreTitle = document.querySelector('[data-i18n="dash_matching_score"]');
    if (scoreTitle) {
        scoreTitle.innerHTML = isAr ? '🎯 نسبة التقدم الزراعي' : '🎯 Score d’avancement';
    }

    const scoreDesc = document.getElementById('matching-score-desc') || document.querySelector('[data-i18n="dash_matching_desc"]');
    if (scoreDesc) {
        scoreDesc.innerHTML = isAr
            ? `قطعتك الأرضية حالياً بنسبة <strong>${config.score}%</strong> من الهدف المحدد لـ ${config.display}.`
            : `Votre parcelle est actuellement à <strong>${config.score}%</strong> de l’objectif défini pour cette culture.`;
    }

    const scoreText = document.getElementById('matching-score-text');
    const scoreCircle = document.getElementById('circle-score');
    if (scoreText && config.score) {
        scoreText.innerText = config.score + "%";
    }
    if (scoreCircle && config.score) {
        const circ = 439.82;
        const offset = circ - (config.score / 100 * circ);
        setTimeout(() => { scoreCircle.style.strokeDashoffset = offset; }, 200);
    }

    // Badge under circle
    const scoreBadge = document.querySelector('.card [style*="border-radius: 20px"]');
    if (scoreBadge) {
        scoreBadge.textContent = isAr ? '✓ الهدف الزراعي مستهدف' : '✓ Objectif agricole ciblé';
    }

    // 4. REFERENCE CARD
    const refId = document.getElementById('ref-id');
    const refClient = document.getElementById('ref-client');
    const refCulture = document.getElementById('ref-culture');
    const refIa = document.getElementById('ref-ia');
    const refModule = document.getElementById('ref-module');

    if (refId && config.reference) refId.innerText = config.reference.ref;
    if (refClient && config.reference) refClient.innerText = config.reference.client;
    if (refCulture) refCulture.innerText = config.botanical || `${config.display} sp.`;
    if (refIa && config.reference) refIa.innerText = config.reference.ia_model;
    if (refModule && config.reference) refModule.innerText = config.reference.module;

    // 5. PLAN AGRICOLE (Dynamic: Plan ${selectedCrop})
    const navPlan = document.getElementById('nav-plan');
    if (navPlan) {
        const textEl = navPlan.querySelector('.nav-text');
        const iconEl = navPlan.querySelector('.nav-icon');
        if (textEl) textEl.textContent = isAr ? `خطة ${config.display}` : `Plan ${config.display}`;
        if (iconEl) {
            iconEl.innerHTML = `<span style="font-size: 1.2rem;">${config.icon}</span>`;
        }
        navPlan.setAttribute('data-tooltip', `Plan ${config.display}`);
    }

    // Quick access to plan card on Overview
    const planHeroTitle = document.querySelector('[data-i18n="plan_hero_title"]');
    if (planHeroTitle) {
        planHeroTitle.innerHTML = isAr ? `خطة متكاملة : ${config.display.toUpperCase()}` : `PLAN PARFAIT : ${config.display.toUpperCase()}`;
        const parentH3 = planHeroTitle.closest('h3');
        if (parentH3) {
            const img = parentH3.querySelector('img');
            if (img) img.style.display = 'none';
            // Prepend icon if not already present
            if (!parentH3.querySelector('.crop-inline-icon')) {
                const iconSpan = document.createElement('span');
                iconSpan.className = 'crop-inline-icon';
                iconSpan.style.marginRight = '8px';
                iconSpan.style.fontSize = '1.4rem';
                iconSpan.textContent = config.icon;
                parentH3.insertBefore(iconSpan, planHeroTitle);
            }
        }
    }

    const planDesc = document.querySelector('[data-i18n="dash_plan_desc"]');
    if (planDesc) {
        planDesc.textContent = isAr
            ? `الوصول إلى خطة الزراعة الشاملة والمحسنة بالذكاء الاصطناعي لزيادة إنتاجية ${config.display}.`
            : `Accédez au plan de culture complet et optimisé par IA pour maximiser votre production de ${config.display.toLowerCase()}.`;
    }

    // Main title on plan page if on plan_parfait_arganier.html
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = `<span style="margin-right: 10px;">${config.icon}</span> PLAN PARFAIT - ${config.display.toUpperCase()}`;
    }

    const heroBadge = document.querySelector('.fin-hero-badge') || document.querySelector('.hero-badge');
    if (heroBadge) {
        heroBadge.textContent = `🌱 ${config.display} · 2 Hectares · 25 Ans`;
    }

    // 6. ADAPTED KPIS
    if (config.kpi_targets) {
        const kpis = config.kpi_targets;
        const vHealth = document.querySelector('[data-i18n="dash_kpi_health"]');
        if (vHealth && vHealth.nextElementSibling) vHealth.nextElementSibling.textContent = kpis.health || "75/100";

        const vNdvi = document.querySelector('[data-i18n="dash_kpi_vigueur"]');
        if (vNdvi && vNdvi.nextElementSibling) vNdvi.nextElementSibling.textContent = kpis.ndvi || "0.50";

        const vStress = document.querySelector('[data-i18n="dash_kpi_stress"]');
        if (vStress && vStress.nextElementSibling) vStress.nextElementSibling.textContent = kpis.stress || "170";

        const vRegen = document.querySelector('[data-i18n="dash_kpi_regen"]');
        if (vRegen && vRegen.nextElementSibling) vRegen.nextElementSibling.textContent = kpis.regen || "85%";

        const vMo = document.querySelector('[data-i18n="dash_soil_mo"]');
        if (vMo && vMo.nextElementSibling) vMo.nextElementSibling.textContent = kpis.soil_mo || "1.30%";

        const vDensity = document.querySelector('[data-i18n="dash_soil_density"]');
        if (vDensity && vDensity.nextElementSibling) vDensity.nextElementSibling.textContent = kpis.density || "1.38 g/cm³";

        const vPorosity = document.querySelector('[data-i18n="dash_soil_porosity"]');
        if (vPorosity && vPorosity.nextElementSibling) vPorosity.nextElementSibling.textContent = kpis.porosity || "44%";

        const vPh = document.querySelector('[data-i18n="dash_soil_ph"]');
        if (vPh && vPh.nextElementSibling) vPh.nextElementSibling.textContent = kpis.ph || "7.0";
    }

    // 7. RECOMMENDATIONS
    if (config.recommendations && config.recommendations.length > 0) {
        const recSection = document.getElementById('crop-recommendations-container');
        if (recSection) {
            recSection.innerHTML = config.recommendations.map(rec => `
                <div class="card" style="margin-bottom: 15px; border-left: 4px solid #072167;">
                    <h4 style="margin: 0 0 8px 0; color: #072167;">💡 ${rec.title}</h4>
                    <p style="margin: 0; color: #555; font-size: 14px; line-height: 1.5;">${rec.desc}</p>
                </div>
            `).join('');
        }
    }

    // 8. UPDATE DOCUMENT TITLE
    if (document.title.includes('Agrisense') || document.title.includes('Agrisense')) {
        document.title = document.title.replace(/Agrisense|Agrisense/g, 'Agrisense');
    }
}

// Attach listener on DOMContentLoaded and load
document.addEventListener('DOMContentLoaded', updatePageTerminology);
window.addEventListener('load', updatePageTerminology);
window.addEventListener('AgrisenseLanguageChanged', updatePageTerminology);
