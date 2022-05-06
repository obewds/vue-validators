import{_ as n,c as s,o as a,a as p}from"./app.d3aa70dd.js";const y='{"title":"@obewds/vue-validators Tests","description":"","frontmatter":{"head":[["link",{"rel":"icon","href":"favicon.ico"}]]},"headers":[{"level":2,"title":"Testing Status","slug":"testing-status"},{"level":2,"title":"Vitest Tests","slug":"vitest-tests"}],"relativePath":"tests.md"}',t={},e=p(`<h1 id="obewds-vue-validators-tests" tabindex="-1">@obewds/vue-validators Tests <a class="header-anchor" href="#obewds-vue-validators-tests" aria-hidden="true">#</a></h1><h2 id="testing-status" tabindex="-1">Testing Status <a class="header-anchor" href="#testing-status" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">CURRENT STATUS</p><p><strong>100%</strong> Coverage<br><strong>100%</strong> Passing</p></div><h2 id="vitest-tests" tabindex="-1">Vitest Tests <a class="header-anchor" href="#vitest-tests" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// ./tests/vue-validators.test.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> animationDirections <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> blockLevelElementTags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> blockOrders <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> buttonTypes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> elementTags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> emptyElementTags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> fontAwesomeFamilies <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> fontAwesomeSizes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> headingLevels <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> inlineLevelElementTags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> inputTypes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> sourceAudioTypes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> sourceImageTypes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> sourceVideoTypes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> unsupportedElementTags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;animationDirections data set array returns a truthy value&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>animationDirections<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>animationDirections<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;blockLevelElementTags data set array returns a truthy value&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>blockLevelElementTags<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>blockLevelElementTags<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;blockOrders data set array returns a truthy value&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>blockOrders<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>blockOrders<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;buttonTypes data set array returns a truthy value&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>buttonTypes<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>buttonTypes<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;elementTags data set array returns a truthy value&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>elementTags<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>elementTags<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;emptyElementTags data set array returns a truthy value&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>emptyElementTags<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>emptyElementTags<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;fontAwesomeFamilies data set array returns a truthy value&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>fontAwesomeFamilies<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>fontAwesomeFamilies<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;fontAwesomeSizes data set array returns a truthy value&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>fontAwesomeSizes<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>fontAwesomeSizes<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;headingLevels data set array returns a truthy value&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>headingLevels<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>headingLevels<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;inlineLevelElementTags data set array returns a truthy value&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>inlineLevelElementTags<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>inlineLevelElementTags<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;inputTypes data set array returns a truthy value&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>inputTypes<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>inputTypes<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;sourceAudioTypes data set array returns a truthy value&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>sourceAudioTypes<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>sourceAudioTypes<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;sourceImageTypes data set array returns a truthy value&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>sourceImageTypes<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>sourceImageTypes<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;sourceVideoTypes data set array returns a truthy value&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>sourceVideoTypes<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>sourceVideoTypes<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;unsupportedElementTags data set array returns a truthy value&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>unsupportedElementTags<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>unsupportedElementTags<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br></div></div>`,5),c=[e];function o(u,l,i,r,k,b){return a(),s("div",null,c)}var d=n(t,[["render",o]]);export{y as __pageData,d as default};
