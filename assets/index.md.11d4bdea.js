import{_ as n,c as s,o as a,a as p}from"./app.97324bba.js";const m='{"title":"vue-validators","description":"","frontmatter":{"head":[["link",{"rel":"icon","href":"favicon.ico"}]]},"headers":[{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"Import Component","slug":"import-component"},{"level":3,"title":"Script setup syntax","slug":"script-setup-syntax"},{"level":3,"title":"Composition API syntax","slug":"composition-api-syntax"},{"level":2,"title":"Uninstall","slug":"uninstall"}],"relativePath":"index.md"}',t={},e=p(`<h1 id="vue-validators" tabindex="-1">vue-validators <a class="header-anchor" href="#vue-validators" aria-hidden="true">#</a></h1><p>Welcome to the docs page for OBE:WDS&#39;s <code>vue-validators</code> data sets for <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a>!</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><pre><code><span class="token function">npm</span> <span class="token function">install</span> @obewds/vue-validators --save-dev
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="import-component" tabindex="-1">Import Component <a class="header-anchor" href="#import-component" aria-hidden="true">#</a></h2><h3 id="script-setup-syntax" tabindex="-1">Script setup syntax <a class="header-anchor" href="#script-setup-syntax" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// import a validator individually</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> blockLevelElementTags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/vue-validators&#39;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> elementTags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/vue-validators&#39;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> emptyElementTags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/vue-validators&#39;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> inlineLevelElementTags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/vue-validators&#39;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> unsupportedElementTags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/vue-validators&#39;</span>

    <span class="token comment">// import validators together</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> blockLevelElementTags<span class="token punctuation">,</span> elementTags<span class="token punctuation">,</span> emptyElementTags<span class="token punctuation">,</span> inlineLevelElementTags<span class="token punctuation">,</span> unsupportedElementTags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/vue-validators&#39;</span>

    <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
            <span class="token literal-property property">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span>prop<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>blockLevelElementTags<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="composition-api-syntax" tabindex="-1">Composition API syntax <a class="header-anchor" href="#composition-api-syntax" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> elementTags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/vue-validators&#39;</span>

    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
                <span class="token literal-property property">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span>prop<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>elementTags<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="uninstall" tabindex="-1">Uninstall <a class="header-anchor" href="#uninstall" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><pre><code><span class="token function">npm</span> uninstall @obewds/vue-validators
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,11),o=[e];function l(r,c,i,u,k,d){return a(),s("div",null,o)}var v=n(t,[["render",l]]);export{m as __pageData,v as default};
