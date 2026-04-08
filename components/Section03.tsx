export default function Section03() {
  return (
    <div className="section">
      <div className="section-header" style={{ '--c1': '#E63946', '--c2': '#E65100' } as React.CSSProperties}>
        <span className="section-num">03</span>
        <h2 className="section-title"><span className="hl">4-Layer</span> Network Blocking Architecture</h2>
      </div>

      <div className="layer-stack">
        <div className="layer-item layer-1">
          <div className="layer-num">1</div>
          <div className="layer-body">
            <h4>PAC Script — True Socket-Level Blocking</h4>
            <p>A <strong>Proxy Auto-Config (PAC)</strong> script — <code>FindProxyForURL(url, host)</code> — executes inside Chrome&apos;s <em>network process</em>, not the renderer, not extension JS. It fires <strong>before DNS resolution, before TCP connection, before any TLS handshake, before any single HTTP byte is transmitted</strong>. When the PAC function returns <code>&quot;PROXY 127.0.0.1:1&quot;</code>, Chrome attempts to connect to localhost port 1 where nothing is listening — producing immediate <code>ERR_FAILED</code>. The IP-level check uses PAC&apos;s built-in <code>dnsResolve()</code> to block domain-rotated CDNs. Installed via <code>chrome.proxy.settings.set()</code> with <code>mandatory:true</code>.</p>
          </div>
          <div className="layer-badge">EARLIEST<br />Pre-DNS<br />Pre-TCP<br />ERR_FAILED</div>
        </div>

        <div className="layer-item layer-2">
          <div className="layer-num">2</div>
          <div className="layer-body">
            <h4>Static declarativeNetRequest — Compiled Native Rules</h4>
            <p>DNR rules are compiled by Chrome into a native binary format evaluated in the request pipeline — <strong>not in JavaScript</strong>. They survive service worker sleep and fire on every matching request instantly. The 12 static rules in <code>block_rules.json</code> cover major adult sites with <code>||domain</code> anchors, blocking all resource types: <code>main_frame</code>, <code>media</code>, <code>xmlhttprequest</code>, and <code>script</code>. They are always active — even while the service worker is sleeping or restarting.</p>
          </div>
          <div className="layer-badge">COMPILED<br />Native Binary<br />Always Active<br />12 Rules</div>
        </div>

        <div className="layer-item layer-3">
          <div className="layer-num">3</div>
          <div className="layer-body">
            <h4>Dynamic declarativeNetRequest — Per-Video-ID Rules</h4>
            <p>When a video is identified as harmful (by keyword or ML), <code>background.js</code> registers additional DNR rules at runtime via <code>chrome.declarativeNetRequest.updateDynamicRules()</code>. <strong>4 rules per video ID</strong> are added covering the watch page URL, Shorts URL, CDN stream (<code>googlevideo.com</code>), and thumbnail CDN (<code>ytimg.com</code>). On first visit: content script overlay fires. On subsequent visits: the dynamic DNR intercepts <code>main_frame</code> navigation before the page renders — ERR_FAILED. CDN streams show as <code>(cancelled)</code> in DevTools.</p>
          </div>
          <div className="layer-badge">RUNTIME<br />Per-Video-ID<br />4 Rules/Video<br />(cancelled)</div>
        </div>

        <div className="layer-item layer-4">
          <div className="layer-num">4</div>
          <div className="layer-body">
            <h4>Content Script — DOM Overlays &amp; JS Prototype Injection</h4>
            <p>Injected at <code>document_start</code> before any DOM is parsed. Overrides 4 browser APIs in the page&apos;s own JavaScript realm: <code>HTMLMediaElement.prototype.play</code> (silently resolves), <code>HTMLMediaElement.prototype.src</code> setter (swallows assignments), <code>window.fetch()</code> (returns fake 200 for flagged stream URLs), and <code>XMLHttpRequest.prototype.open()</code> (redirects to <code>about:blank</code>). Full-page overlay uses <code>position:fixed; inset:0; z-index:2147483647</code>. Three-layer hover-bypass prevention stops video previews on hover.</p>
          </div>
          <div className="layer-badge">LATEST<br />DOM-Level<br />JS Override<br />Overlay</div>
        </div>
      </div>

      <div style={{ marginTop: '24px' }}>
        <div className="panel" style={{ '--c1': '#2196F3', '--c2': '#00BCD4' } as React.CSSProperties}>
          <div className="panel-title">Dynamic DNR Rules — 4 Rules Per Blocked Video ID</div>
          <table className="dnr-table">
            <thead>
              <tr><th>Rule Type</th><th>URL Pattern</th><th>Resource Types</th><th>Priority</th><th>Effect</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Watch Page</td>
                <td><code>*youtube.com/watch*v={'{id}'}*</code></td>
                <td>main_frame, sub_frame</td>
                <td><span className="prio-badge">90</span></td>
                <td style={{ color: '#ff8a8a' }}>ERR_FAILED on navigation</td>
              </tr>
              <tr>
                <td>Shorts Page</td>
                <td><code>*youtube.com/shorts/{'{id}'}*</code></td>
                <td>main_frame, sub_frame</td>
                <td><span className="prio-badge">90</span></td>
                <td style={{ color: '#ff8a8a' }}>ERR_FAILED on navigation</td>
              </tr>
              <tr>
                <td>CDN Stream</td>
                <td><code>*googlevideo.com/*{'{id}'}*</code></td>
                <td>media, xmlhttprequest</td>
                <td><span className="prio-badge">90</span></td>
                <td style={{ color: '#ffb07a' }}>(cancelled) in DevTools</td>
              </tr>
              <tr>
                <td>Thumbnail CDN</td>
                <td><code>*ytimg.com/vi/{'{id}'}/*</code></td>
                <td>image, media</td>
                <td><span className="prio-badge">95</span></td>
                <td style={{ color: '#ffc947' }}>Thumbnail image blocked</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="infobox warn" style={{ marginTop: '10px' }}>
        <div className="infobox-icon">⚠️</div>
        <div className="infobox-body">
          <strong>Why youtubei/v1 is NOT blocked</strong>
          Blocking YouTube&apos;s internal API endpoint causes a false &quot;You&apos;re offline&quot; error — it is also used for connectivity health checks. Instead, API calls for blocked videos are intercepted inside the page&apos;s JavaScript world via <code>fetch()</code> and <code>XHR.open()</code> prototype overrides injected by the content script at document_start.
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <div className="panel" style={{ '--c1': '#2E7D32', '--c2': '#4CAF50' } as React.CSSProperties}>
          <div className="panel-title">Three-Layer Hover-Bypass Prevention</div>
          <table className="hover-table">
            <thead>
              <tr><th>Layer</th><th>Mechanism</th><th>What It Prevents</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="layer-circle" style={{ '--lc2': '#2E7D32' } as React.CSSProperties}>1</span></td>
                <td>Content-script event capture (capture phase)</td>
                <td>mouseover / mouseenter / pointerover → hardKillMedia() on blocked cards</td>
              </tr>
              <tr>
                <td><span className="layer-circle" style={{ '--lc2': '#2E7D32' } as React.CSSProperties}>2</span></td>
                <td>MutationObserver watching full DOM tree</td>
                <td>Kills any &lt;video&gt; or &lt;audio&gt; inserted into blocked card wrappers</td>
              </tr>
              <tr>
                <td><span className="layer-circle" style={{ '--lc2': '#2E7D32' } as React.CSSProperties}>3</span></td>
                <td>Page-context prototype override</td>
                <td>play(), src setter, srcObject setter silenced — no video data loads</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="codeblock" style={{ marginTop: '20px' }}>
        <div className="codeblock-header">
          <div className="codeblock-dots"><div className="dot dot-r"></div><div className="dot dot-y"></div><div className="dot dot-g"></div></div>
          <div className="codeblock-title">dns_block.js — Core PAC Logic (executes inside Chrome&apos;s Network Process)</div>
        </div>
        <pre>
          <span className="cm">{'// Called by Chrome\'s network stack BEFORE DNS · BEFORE TCP · BEFORE any HTTP byte'}</span>{'\n'}
          <span className="kw">function</span> <span className="fn">FindProxyForURL</span>(url, host) {'{'}
          {'\n  '}<span className="cm">// Always pass through localhost and private RFC-1918 ranges</span>
          {'\n  '}<span className="kw">if</span> (<span className="fn">isInNet</span>(host, <span className="str">&quot;127.0.0.0&quot;</span>, <span className="str">&quot;255.0.0.0&quot;</span>))    <span className="kw">return</span> <span className="str">&quot;DIRECT&quot;</span>;
          {'\n  '}<span className="kw">if</span> (<span className="fn">isInNet</span>(host, <span className="str">&quot;10.0.0.0&quot;</span>,  <span className="str">&quot;255.0.0.0&quot;</span>))    <span className="kw">return</span> <span className="str">&quot;DIRECT&quot;</span>;
          {'\n  '}<span className="kw">if</span> (<span className="fn">isInNet</span>(host, <span className="str">&quot;192.168.0.0&quot;</span>,<span className="str">&quot;255.255.0.0&quot;</span>)) <span className="kw">return</span> <span className="str">&quot;DIRECT&quot;</span>;
          {'\n\n  '}<span className="cm">// O(1) hash lookup — domain OR any parent domain in blocklist?</span>
          {'\n  '}<span className="kw">if</span> (<span className="fn">isDomainBlocked</span>(host))  <span className="kw">return</span> <span className="str">&quot;PROXY 127.0.0.1:1&quot;</span>; <span className="cm">// → ERR_FAILED</span>
          {'\n\n  '}<span className="cm">// IP-level check — catches domain rotation and direct IP access</span>
          {'\n  '}<span className="cm">// dnsResolve() runs inside network process — before browser DNS cache</span>
          {'\n  '}<span className="kw">var</span> ip = <span className="fn">dnsResolve</span>(host);
          {'\n  '}<span className="kw">if</span> (ip &amp;&amp; SW_IPS[ip])       <span className="kw">return</span> <span className="str">&quot;PROXY 127.0.0.1:1&quot;</span>; <span className="cm">// → ERR_FAILED</span>
          {'\n\n  '}<span className="kw">return</span> <span className="str">&quot;DIRECT&quot;</span>; <span className="cm">// host is safe — allow connection</span>
          {'\n}{'}
        </pre>
      </div>
    </div>
  )
}
