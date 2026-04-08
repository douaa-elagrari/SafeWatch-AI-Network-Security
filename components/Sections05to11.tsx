// ===================== SECTION 05 =====================
export function Section05() {
  // Icons
  const IconLightning = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
  const IconRedCircle = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>;
  const IconPurpleCircle = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>;
  const IconOrangeCircle = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>;
  const IconYellowCircle = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>;
  const IconSearch = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;

  return (
    <div className="section">
      <div className="section-header" style={{ '--c1': '#00BCD4', '--c2': '#2196F3' } as React.CSSProperties}>
        <span className="section-num">05</span>
        <h2 className="section-title"><span className="hl">Keyword</span> &amp; NLP Analysis Engine</h2>
      </div>

      <div className="infobox tip">
        <div className="infobox-icon"><IconLightning /></div>
        <div className="infobox-body">
          <strong>Fastest Filter — Zero Network Cost</strong>
          The keyword engine runs synchronously before any ML inference. Zero latency, zero API calls. Most harmful cards are blocked in milliseconds. Text is aggregated from video title, aria-label attributes, and channel metadata, then analysed in two passes.
        </div>
      </div>

      <div className="kw-panels-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px', marginTop: '18px' }}>
        <div className="panel" style={{ '--c1': '#00BCD4', '--c2': '#2196F3' } as React.CSSProperties}>
          <div className="panel-title">Pass 1 — Exact Word-Boundary Match (Confidence: 0.90)</div>
          <p style={{ fontSize: '12.5px', color: 'var(--gray)', marginBottom: '14px' }}>Regex pattern: <code style={{ fontFamily: '\'IBM Plex Mono\',monospace', color: '#7edff0' }}>/\b{'{keyword}'}\b/i</code> — case-insensitive, word boundary enforced.</p>
          <div className="kw-grid">
            <div className="kw-card" style={{ '--kc': '#E63946' } as React.CSSProperties}>
              <h5><span style={{ display: 'inline-block', marginRight: '6px' }}><IconRedCircle /></span> violence</h5>
              <div className="kw-tags">
                <span className="kw-tag">shooting</span><span className="kw-tag">massacre</span><span className="kw-tag">torture</span><span className="kw-tag">gore</span><span className="kw-tag">beheading</span><span className="kw-tag">warzone</span><span className="kw-tag">airstrike</span><span className="kw-tag">drone strike</span>
              </div>
            </div>
            <div className="kw-card" style={{ '--kc': '#9C4FD4' } as React.CSSProperties}>
              <h5><span style={{ display: 'inline-block', marginRight: '6px' }}><IconPurpleCircle /></span> sensitive</h5>
              <div className="kw-tags">
                <span className="kw-tag">suicide</span><span className="kw-tag">self-harm</span><span className="kw-tag">drug</span><span className="kw-tag">cartel</span><span className="kw-tag">isis</span><span className="kw-tag">trafficking</span><span className="kw-tag">vape</span><span className="kw-tag">shisha</span>
              </div>
            </div>
            <div className="kw-card" style={{ '--kc': '#E65100' } as React.CSSProperties}>
              <h5><span style={{ display: 'inline-block', marginRight: '6px' }}><IconOrangeCircle /></span> fire</h5>
              <div className="kw-tags">
                <span className="kw-tag">fire</span><span className="kw-tag">wildfire</span><span className="kw-tag">arson</span><span className="kw-tag">inferno</span><span className="kw-tag">blaze</span><span className="kw-tag">explosion</span><span className="kw-tag">pyromaniac</span>
              </div>
            </div>
            <div className="kw-card" style={{ '--kc': '#F9A825' } as React.CSSProperties}>
              <h5><span style={{ display: 'inline-block', marginRight: '6px' }}><IconYellowCircle /></span> weapons</h5>
              <div className="kw-tags">
                <span className="kw-tag">gun</span><span className="kw-tag">ak47</span><span className="kw-tag">ar-15</span><span className="kw-tag">pipe bomb</span><span className="kw-tag">ghost gun</span><span className="kw-tag">suppressor</span><span className="kw-tag">ied</span>
              </div>
            </div>
          </div>
        </div>

        <div className="panel" style={{ '--c1': '#2196F3', '--c2': '#00BCD4' } as React.CSSProperties}>
          <div className="panel-title">Pass 2 — NLP Semantic Expansion (Confidence: 0.85)</div>
          <p style={{ fontSize: '12.5px', color: 'var(--gray)', marginBottom: '14px' }}>Covers near-synonyms and contextual variants missed by exact word boundary matching.</p>
          <div className="kw-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            <span className="kw-tag" style={{ color: '#ff8a8a' }}>attack</span><span className="kw-tag" style={{ color: '#ff8a8a' }}>shoot</span><span className="kw-tag" style={{ color: '#ffb07a' }}>blaze</span><span className="kw-tag" style={{ color: '#ffb07a' }}>explosive</span><span className="kw-tag" style={{ color: '#ffc947' }}>weapon</span><span className="kw-tag" style={{ color: '#ffc947' }}>armed</span><span className="kw-tag" style={{ color: '#c59eff' }}>extremist</span><span className="kw-tag" style={{ color: '#c59eff' }}>radical</span><span className="kw-tag" style={{ color: '#82c4ff' }}>graphic</span><span className="kw-tag" style={{ color: '#82c4ff' }}>brutal</span><span className="kw-tag" style={{ color: '#81c995' }}>danger</span><span className="kw-tag" style={{ color: '#81c995' }}>lethal</span>
          </div>
          <div className="infobox info" style={{ marginTop: '16px' }}>
            <div className="infobox-icon"><IconSearch /></div>
            <div className="infobox-body" style={{ fontSize: '12px' }}>
              <strong>Google &amp; Bing Search Results</strong>
              Same keyword engine hides matching search result cards — <code>div.g</code> on Google and <code>li.b_algo</code> on Bing — by collapsing them to zero height without breaking page layout.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===================== SECTION 06 =====================
export function Section06() {
  const IconRefresh = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>;
  const IconWait = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
  const IconScan = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
  const IconClear = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6h18M8 6V4h8v2M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>;
  const IconBridge = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 5h12v14H6z"/><path d="M9 9h6M9 13h4"/></svg>;

  return (
    <div className="section">
      <div className="section-header" style={{ '--c1': '#2E7D32', '--c2': '#00BCD4' } as React.CSSProperties}>
        <span className="section-num">06</span>
        <h2 className="section-title"><span className="hl">Content Script</span> — Scanning, DOM &amp; SPA Handling</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
        <div className="panel" style={{ '--c1': '#2E7D32', '--c2': '#4CAF50' } as React.CSSProperties}>
          <div className="panel-title"><span style={{ marginRight: '6px' }}></span> YouTube Card Element Types (13 total)</div>
          <div className="filetree" style={{ background: 'transparent', padding: 0 }}>
            {[
              ['ytd-video-renderer', 'Standard feed video cards'],
              ['ytd-reel-item-renderer', 'Shorts reel cards in feed'],
              ['ytd-shorts', 'Full Shorts player element'],
              ['ytd-compact-video-renderer', 'Sidebar recommended videos'],
              ['ytd-grid-video-renderer', 'Channel page grid view'],
              ['ytd-playlist-video-renderer', 'Playlist item cards'],
              ['ytd-search-video-renderer', 'YouTube search result cards'],
              ['+ 6 more types', 'Comments, notifications, etc.'],
            ].map(([file, role]) => (
              <div className="ft-row" key={file}>
                <span className="ft-file">{file}</span>
                <span className="ft-role">{role}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="panel" style={{ '--c1': '#00BCD4', '--c2': '#2196F3' } as React.CSSProperties}>
          <div className="panel-title"><span style={{ marginRight: '6px' }}></span> SPA Navigation Handling</div>
          <div className="flow">
            <div className="flow-node fn-dns" style={{ fontSize: '12px' }}><span className="icon"><IconRefresh /></span> YouTube changes location.href without full page reload</div>
            <div className="flow-arrow" style={{ '--c1': '#f9a825' } as React.CSSProperties}></div>
            <div className="flow-node fn-browser" style={{ fontSize: '12px' }}><span className="icon"><IconWait /></span> 600ms polling interval detects URL change</div>
            <div className="flow-arrow" style={{ '--c1': '#2196F3' } as React.CSSProperties}></div>
            <div className="flow-node fn-tcp" style={{ fontSize: '12px' }}><span className="icon"><IconWait /></span> 800ms DOM-settle delay (waits for dynamic content)</div>
            <div className="flow-arrow" style={{ '--c1': '#4caf50' } as React.CSSProperties}></div>
            <div className="flow-node fn-render" style={{ fontSize: '12px' }}><span className="icon"><IconScan /></span> Re-runs scanCards() on new page DOM</div>
            <div className="flow-arrow" style={{ '--c1': '#aaa' } as React.CSSProperties}></div>
            <div className="flow-node fn-user" style={{ fontSize: '12px' }}><span className="icon"><IconClear /></span> Old page overlays removed before re-scan</div>
          </div>
        </div>
      </div>

      <div className="panel" style={{ '--c1': '#9C4FD4', '--c2': '#2196F3', marginTop: '18px' } as React.CSSProperties}>
        <div className="panel-title"><span style={{ marginRight: '6px' }}></span> Blocked Video ID Registry — Cross-Realm Data Sharing</div>
        <p style={{ fontSize: '13px', color: 'var(--graylt)', lineHeight: '1.65' }}>
          The content script (isolated world) and the injected page-context script cannot share JavaScript variables directly due to MV3 security isolation. SafeWatch solves this with a hidden DOM bridge: a <code style={{ fontFamily: '\'IBM Plex Mono\',monospace', color: '#c59eff' }}>&lt;meta id=&quot;sw-blocked-ids-store&quot;&gt;</code> element whose <code style={{ fontFamily: '\'IBM Plex Mono\',monospace', color: '#c59eff' }}>data-ids</code> attribute holds a JSON-encoded list of blocked video IDs. When a video is blocked by keyword or ML, its ID is written to this element. The page-context <code style={{ fontFamily: '\'IBM Plex Mono\',monospace', color: '#c59eff' }}>fetch()</code> override reads <code>data-ids</code> on every stream request to decide which URLs to silently cancel.
        </p>
      </div>
    </div>
  );
}

// ===================== SECTION 07 =====================
export function Section07() {
  const IconBlocked = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>;
  const IconLightning = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
  const IconTV = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="8" y1="20" x2="16" y2="20"/></svg>;
  const IconBot = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="16" r="2"/><path d="M8 11V8c0-2.2 1.8-4 4-4s4 1.8 4 4v3"/></svg>;

  return (
    <div className="section">
      <div className="section-header" style={{ '--c1': '#E63946', '--c2': '#9C4FD4' } as React.CSSProperties}>
        <span className="section-num">07</span>
        <h2 className="section-title"><span className="hl">End-to-End</span> Blocking Scenarios</h2>
      </div>

      <div className="scenario-grid">
        <div className="scenario sc-a">
          <h4> Scenario A — Blocked Adult Domain</h4>
          <div className="scenario-flow">
            <div className="sf-step"><span className="sf-arrow">▸</span> User navigates to adult domain URL</div>
            <div className="sf-step"><span className="sf-arrow">▸</span> PAC script fires in Chrome network process (pre-DNS)</div>
            <div className="sf-step"><span className="sf-arrow">▸</span> <code>isDomainBlocked(host)</code> → true → returns <code>&quot;PROXY 127.0.0.1:1&quot;</code></div>
            <div className="sf-step"><span className="sf-arrow">▸</span> TCP connect to port 1 fails immediately — nothing is listening</div>
            <div className="sf-step"><span className="sf-arrow">▸</span> Static DNR rule also fires simultaneously as second guard</div>
            <div className="sf-step"><span className="sf-arrow">▸</span> No page content ever loads, no DNS lookup made</div>
          </div>
          <div className="outcome"><IconBlocked /> ERR_FAILED — "This site can't be reached"</div>
        </div>

        <div className="scenario sc-b">
          <h4>Scenario B — YouTube Shorts with Keyword in Title</h4>
          <div className="scenario-flow">
            <div className="sf-step"><span className="sf-arrow">▸</span> SPA inserts new Shorts card into DOM</div>
            <div className="sf-step"><span className="sf-arrow">▸</span> MutationObserver fires → <code>scanCards()</code> runs</div>
            <div className="sf-step"><span className="sf-arrow">▸</span> Reads card title → keyword match (e.g. <code>&quot;gore&quot;</code>) → confidence 0.90</div>
            <div className="sf-step"><span className="sf-arrow">▸</span> <code>blockCard()</code> applies dark overlay + ⊘ icon on card element</div>
            <div className="sf-step"><span className="sf-arrow">▸</span> <code>hardKillMedia()</code> on all &lt;video&gt; inside card</div>
            <div className="sf-step"><span className="sf-arrow">▸</span> Background adds 4 dynamic DNR rules for the video ID</div>
            <div className="sf-step"><span className="sf-arrow">▸</span> Any direct URL navigation → ERR_FAILED. CDN stream → (cancelled)</div>
          </div>
          <div className="outcome"><IconLightning /> Card blocked in &lt;5ms + DNR rules registered</div>
        </div>

        <div className="scenario sc-c">
          <h4>Scenario C — Watch Page / Shorts Player, Flagged Title</h4>
          <div className="scenario-flow">
            <div className="sf-step"><span className="sf-arrow">▸</span> User navigates to watch page or Shorts player URL</div>
            <div className="sf-step"><span className="sf-arrow">▸</span> Content script fires at <code>document_start</code> — before any DOM</div>
            <div className="sf-step"><span className="sf-arrow">▸</span> Page-context JS prototype overrides installed immediately</div>
            <div className="sf-step"><span className="sf-arrow">▸</span> After 1.8s, <code>checkCurrentPage()</code> reads DOM title element</div>
            <div className="sf-step"><span className="sf-arrow">▸</span> Keyword match found → <code>blockFullPage()</code> called</div>
            <div className="sf-step"><span className="sf-arrow">▸</span> Full-screen overlay injected (<code>z-index: 2147483647</code>) with "Content Blocked / Access Restricted" UI</div>
            <div className="sf-step"><span className="sf-arrow">▸</span> <code>document.body.overflow = 'hidden'</code> — no scroll bypass</div>
            <div className="sf-step"><span className="sf-arrow">▸</span> "Go Back" button calls <code>history.back()</code></div>
          </div>
          <div className="outcome"><IconTV /> Full-page overlay — "Content Blocked" screen shown</div>
        </div>

        <div className="scenario sc-d">
          <h4> Scenario D — No Keyword, Caught by ML Vision</h4>
          <div className="scenario-flow">
            <div className="sf-step"><span className="sf-arrow">▸</span> Feed card scanned — no keyword match in title or labels</div>
            <div className="sf-step"><span className="sf-arrow">▸</span> Thumbnail &lt;img&gt; drawn to 224×224 canvas, encoded as JPEG base64</div>
            <div className="sf-step"><span className="sf-arrow">▸</span> dataUrl sent to background SW → forwarded to Offscreen Document</div>
            <div className="sf-step"><span className="sf-arrow">▸</span> NSFW.js MobileNet classifies: <code>Sexy = 0.78</code> &gt; threshold 0.60</div>
            <div className="sf-step"><span className="sf-arrow">▸</span> Returns <code>blocked: true, method: "ML model"</code> to content script</div>
            <div className="sf-step"><span className="sf-arrow">▸</span> Content script calls <code>blockCard()</code> — overlay applied</div>
            <div className="sf-step"><span className="sf-arrow">▸</span> Block log entry written with confidence score, model used, timestamp</div>
          </div>
          <div className="outcome"><IconBot /> Card blocked via ML — logged as "ML model" method</div>
        </div>
      </div>
    </div>
  );
}

// ===================== SECTION 08 =====================
export function Section08() {
  const IconMessage = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
  const IconLog = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>;

  return (
    <div className="section">
      <div className="section-header" style={{ '--c1': '#00BCD4', '--c2': '#2196F3' } as React.CSSProperties}>
        <span className="section-num">08</span>
        <h2 className="section-title"><span className="hl">Background Service Worker</span> &amp; Message API</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
        <div className="panel" style={{ '--c1': '#00BCD4', '--c2': '#2196F3' } as React.CSSProperties}>
          <div className="panel-title"> Message-Passing API</div>
          <table className="msg-table">
            <thead><tr><th>Message Type</th><th>Action</th></tr></thead>
            <tbody>
              <tr><td><span className="msg-type">BLOCK_VIDEO</span></td><td style={{ fontSize: '12px' }}>Add 4 dynamic DNR rules + write block log entry with full metadata</td></tr>
              <tr><td><span className="msg-type">ML_ANALYZE</span></td><td style={{ fontSize: '12px' }}>Forward thumbnail dataUrl to offscreen ML document for inference</td></tr>
              <tr><td><span className="msg-type">BLOCK_DOMAIN</span></td><td style={{ fontSize: '12px' }}>Add dynamic DNR rule for entire domain (all resource types)</td></tr>
              <tr><td><span className="msg-type">GET_STATS</span></td><td style={{ fontSize: '12px' }}>Return rule count, total/today block counts, domain/video lists</td></tr>
              <tr><td><span className="msg-type">CLEAR_BLOCKS</span></td><td style={{ fontSize: '12px' }}>Remove all dynamic DNR rules (id ≥ 200), clear log, reset badge</td></tr>
            </tbody>
          </table>
        </div>

        <div className="panel" style={{ '--c1': '#2196F3', '--c2': '#9C4FD4' } as React.CSSProperties}>
          <div className="panel-title"> Block Log Entry Structure</div>
          <div className="codeblock" style={{ margin: 0 }}>
            <div className="codeblock-header">
              <div className="codeblock-dots"><div className="dot dot-r"></div><div className="dot dot-y"></div><div className="dot dot-g"></div></div>
              <div className="codeblock-title">chrome.storage.local — capped at 500 entries</div>
            </div>
            <pre style={{ fontSize: '11.5px' }}>
              {'{'}{'\n'}
              {'  '}<span className="str">&quot;title&quot;</span>:{'      '}<span className="str">&quot;Video title text&quot;</span>,{'\n'}
              {'  '}<span className="str">&quot;category&quot;</span>:{'   '}<span className="str">&quot;violence&quot;</span>,{'\n'}
              {'  '}<span className="str">&quot;confidence&quot;</span>: <span className="num">0.92</span>,{'\n'}
              {'  '}<span className="str">&quot;method&quot;</span>:{'     '}<span className="str">&quot;keyword&quot;</span>,  <span className="cm">// or &quot;ML model&quot;</span>{'\n'}
              {'  '}<span className="str">&quot;videoId&quot;</span>:{'    '}<span className="str">&quot;GV0YKjKVjYs&quot;</span>,{'\n'}
              {'  '}<span className="str">&quot;url&quot;</span>:{'        '}<span className="str">&quot;https://youtube.com/shorts/...&quot;</span>,{'\n'}
              {'  '}<span className="str">&quot;timestamp&quot;</span>:{'  '}<span className="str">&quot;2026-04-03T14:22:11Z&quot;</span>{'\n'}
              {'}'}
            </pre>
          </div>
          <div style={{ marginTop: '12px', fontSize: '12.5px', color: 'var(--gray)' }}>
            Toolbar badge shows <strong style={{ color: '#fff' }}>today's block count</strong> with red <code style={{ fontFamily: '\'IBM Plex Mono\',monospace', color: '#ff8a8a' }}>#EF4444</code> background. Each block increments the badge counter atomically.
          </div>
        </div>
      </div>
    </div>
  );
}

// ===================== SECTION 09 =====================
export function Section09() {
  const IconShield = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
  const IconCSP = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 22 7 22 17 12 22 2 17 2 7 12 2"/><line x1="12" y1="22" x2="12" y2="12"/><line x1="22" y1="7" x2="12" y2="12"/><line x1="2" y1="7" x2="12" y2="12"/></svg>;

  return (
    <div className="section">
      <div className="section-header" style={{ '--c1': '#F9A825', '--c2': '#E65100' } as React.CSSProperties}>
        <span className="section-num">09</span>
        <h2 className="section-title"><span className="hl">Permissions</span> &amp; MV3 Compliance</h2>
      </div>

      <div className="panel" style={{ '--c1': '#F9A825', '--c2': '#E65100' } as React.CSSProperties}>
        <table className="perm-table">
          <thead><tr><th>Permission</th><th>Required For</th><th>MV3 Note</th></tr></thead>
          <tbody>
            <tr><td className="perm-code">proxy</td><td>PAC script installation via chrome.proxy.settings (Layer 1)</td><td className="perm-why">Mandatory for socket-level interception</td></tr>
            <tr><td className="perm-code">declarativeNetRequest</td><td>Static + dynamic URL blocking rules (Layers 2 &amp; 3)</td><td className="perm-why">Replaces deprecated webRequest blocking</td></tr>
            <tr><td className="perm-code">declarativeNetRequestFeedback</td><td>Reading matched rules for block logging</td><td className="perm-why">Required to see which rules fired</td></tr>
            <tr><td className="perm-code">offscreen</td><td>Hidden DOM for TensorFlow.js inference (all 4 ML tiers)</td><td className="perm-why">MV3 requirement — SW has no DOM</td></tr>
            <tr><td className="perm-code">scripting</td><td>Programmatic content script injection into page context</td><td className="perm-why">Replaces deprecated tabs.executeScript</td></tr>
            <tr><td className="perm-code">storage</td><td>Block log, user settings, Kids Mode toggle, filter config</td><td className="perm-why">chrome.storage.local, capped at 500</td></tr>
            <tr><td className="perm-code">webNavigation</td><td>SPA navigation detection — URL change events</td><td className="perm-why">Required for YouTube SPA routing</td></tr>
            <tr><td className="perm-code">tabs</td><td>Tab URL access for per-tab rule scoping</td><td className="perm-why">Limited to activeTab in most calls</td></tr>
          </tbody>
        </table>
      </div>

      <div className="infobox warn" style={{ marginTop: '14px' }}>
        <div className="infobox-icon"></div>
        <div className="infobox-body">
          <strong>CSP — 'wasm-unsafe-eval' Required</strong>
          TensorFlow.js uses WebAssembly for accelerated matrix operations. Without <code>wasm-unsafe-eval</code> in the extension's Content Security Policy, TF.js refuses to initialise inside the sandboxed extension origin — Tier 1 and Tier 2 ML would be completely non-functional.
        </div>
      </div>
    </div>
  );
}

// ===================== SECTION 10 =====================
export function Section10() {
  const IconBalance = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M4 4l8 4 8-4M4 12l8 4 8-4M4 20l8-4 8 4"/></svg>;

  return (
    <div className="section">
      <div className="section-header" style={{ '--c1': '#9C4FD4', '--c2': '#E63946' } as React.CSSProperties}>
        <span className="section-num">10</span>
        <h2 className="section-title"><span className="hl">Design Decisions</span> &amp; Engineering Trade-offs</h2>
      </div>

      <div className="panel" style={{ '--c1': '#9C4FD4', '--c2': '#E63946' } as React.CSSProperties}>
        <table className="trade-table">
          <thead><tr><th>Decision</th><th>Benefit</th><th>Trade-off</th></tr></thead>
          <tbody>
            <tr><td className="td-decision">PAC <code>mandatory:true</code></td><td className="td-benefit">If PAC errors → block all traffic (safe default). No content slips through on PAC error.</td><td className="td-tradeoff">A PAC bug could block all legitimate traffic. Requires thorough testing of PAC logic.</td></tr>
            <tr><td className="td-decision">Not blocking <code>youtubei/v1</code></td><td className="td-benefit">Prevents false "You're offline" error — API also used for connectivity health checks.</td><td className="td-tradeoff">API calls for blocked videos intercepted later via JS prototype overrides (more complex).</td></tr>
            <tr><td className="td-decision">Static + Dynamic DNR Split</td><td className="td-benefit">Static rules always active even while SW is sleeping. Zero latency for major domains.</td><td className="td-tradeoff">Dynamic rules lost if SW fails to restart — per-video blocks may need re-registration.</td></tr>
            <tr><td className="td-decision">Single Offscreen Document</td><td className="td-benefit">All 4 ML tiers share one document — MV3 limit is exactly 1 offscreen document.</td><td className="td-tradeoff">Race condition on cold start — mitigated by 15s timeout and pre-warm on install.</td></tr>
            <tr><td className="td-decision">On-Device Tier 1 (bundled weights)</td><td className="td-benefit">Zero latency, zero API cost, works offline — most content blocked without internet.</td><td className="td-tradeoff">Adds 2.5MB to extension size. Only detects NSFW; cannot detect hate symbols alone.</td></tr>
            <tr><td className="td-decision">Fail-Open for Cloud API Tiers</td><td className="td-benefit">Extension works without API keys configured — graceful degradation.</td><td className="td-tradeoff">If keys are absent, Tiers 3 &amp; 4 are bypassed — only on-device ML and keyword active.</td></tr>
            <tr><td className="td-decision">Hidden &lt;meta&gt; DOM bridge for ID sharing</td><td className="td-benefit">Works within MV3 isolated worlds — no eval, no shared memory needed.</td><td className="td-tradeoff">Slightly unconventional pattern — relies on DOM attribute as communication channel.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ===================== SECTION 11 =====================
export function Section11() {
  const IconFlag = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>;
  const IconCancel = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>;
  const IconOverlay = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg>;
  const IconCard = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8h20"/></svg>;

  return (
    <div className="section">
      <div className="section-header" style={{ '--c1': '#2E7D32', '--c2': '#00BCD4' } as React.CSSProperties}>
        <span className="section-num">11</span>
        <h2 className="section-title"><span className="hl">System Summary</span> &amp; Outcome Reference</h2>
      </div>

      <div className="panel" style={{ '--c1': '#2E7D32', '--c2': '#00BCD4', marginBottom: '20px' } as React.CSSProperties}>
        <div className="panel-title"> What Each Outcome Means</div>
        <div className="summary-grid">
          <div className="sum-item" style={{ '--sc2': '#E63946' } as React.CSSProperties}>
            <div className="label"><IconCancel /> ERR_FAILED</div>
            <div className="desc">PAC script (Layer 1) or Static/Dynamic DNR (Layers 2–3) blocked the navigation before it started. The TCP connection was never established. No content was ever transmitted.</div>
          </div>
          <div className="sum-item" style={{ '--sc2': '#E65100' } as React.CSSProperties}>
            <div className="label"><IconCancel /> (cancelled) in DevTools</div>
            <div className="desc">Dynamic DNR block action aborted a media request or XHR stream mid-pipeline. The CDN stream request to googlevideo.com was intercepted before any video data was received.</div>
          </div>
          <div className="sum-item" style={{ '--sc2': '#2196F3' } as React.CSSProperties}>
            <div className="label"><IconOverlay /> "Content Blocked" Overlay</div>
            <div className="desc">Content script injected its full-page HTML block (position:fixed, z-index:2147483647). Triggered by keyword match on watch page/Shorts player title after 1.8s DOM settle.</div>
          </div>
          <div className="sum-item" style={{ '--sc2': '#9C4FD4' } as React.CSSProperties}>
            <div className="label"><IconCard /> Card Overlay (⊘ icon)</div>
            <div className="desc">Keyword engine or ML pipeline (NSFW.js / COCO / OpenAI / Sightengine) detected harmful content in a feed card thumbnail or metadata. blockCard() applied dark overlay.</div>
          </div>
        </div>
      </div>

      <div style={{ background: 'linear-gradient(135deg,rgba(46,125,50,0.1),rgba(0,188,212,0.06))', border: '1px solid rgba(46,125,50,0.25)', borderRadius: '12px', padding: '26px 28px' }}>
        <div style={{ fontFamily: '\'Syne\',sans-serif', fontSize: '18px', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>SafeWatch v5.1 — Architecture Summary</div>
        <p style={{ color: 'var(--graylt)', fontSize: '13.5px', lineHeight: '1.75', maxWidth: '900px' }}>
          SafeWatch v5.1 achieves the deepest content filtering stack possible within Chrome MV3 constraints. <strong style={{ color: '#81c995' }}>Socket-level PAC blocking (Layer 1)</strong> fires before any TCP connection exists. <strong style={{ color: '#82c4ff' }}>Static and dynamic declarativeNetRequest rules (Layers 2–3)</strong> intercept navigations and media streams at the native request pipeline — compiled, not interpreted. <strong style={{ color: '#ffc947' }}>Content script overlays and page-context JS prototype overrides (Layer 4)</strong> handle cases where network-level blocking would break YouTube's own infrastructure. The <strong style={{ color: '#c59eff' }}>four-tier ML cascade</strong> escalates from zero-cost on-device inference (NSFW.js MobileNet, 2.5MB) through cloud vision APIs (OpenAI, Sightengine), ensuring no single point of failure. The result: a system where harmful content is intercepted at the earliest technically possible layer, minimising both user exposure and computational cost.
        </p>
      </div>
    </div>
  );
}

// ===================== FOOTER =====================
export function Footer() {
  const IconDoc = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="16" y2="17" />
    </svg>
  );

  const IconSeparator = () => <span style={{ opacity: 0.3, margin: '0 8px' }}>|</span>;

  return (
    <footer style={{
      marginTop: '48px',
      padding: '28px 0 20px',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      fontFamily: "'Inter', system-ui, sans-serif"
    }}>
      {/* Main footer content — two rows, well separated */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        {/* Row 1: Project identity and version (left aligned, but structured) */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'baseline',
          gap: '12px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          paddingBottom: '16px'
        }}>
          <span style={{ fontWeight: 700, fontSize: '14px', color: '#fff', letterSpacing: '0.02em' }}>
            SafeWatch v5.1.0
          </span>
          <span style={{ color: 'var(--gray)', fontSize: '12px' }}>Technical Architecture Report</span>
          <span style={{ color: 'var(--gray)', fontSize: '12px' }}>April 2026</span>
        </div>

        {/* Row 2: Author + credentials (grid-like, clean) */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px'
        }}>
          {/* Left block: Author name and role */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'rgba(255,255,255,0.02)',
            padding: '6px 14px 6px 10px',
            borderRadius: '40px',
            border: '1px solid rgba(255,255,255,0.05)'
          }}>
            <IconDoc />
            <span style={{ color: 'var(--graylt)', fontSize: '12.5px', fontWeight: 500 }}>
              Douaa Elagrari
            </span>
            <IconSeparator />
            <span style={{ color: 'var(--gray)', fontSize: '11.5px' }}>Security Engineering</span>
            <IconSeparator />
            <span style={{ color: 'var(--gray)', fontSize: '11.5px' }}>ML/CV Pipeline</span>
          </div>

          {/* Right block: Tech stack tags (clean badges) */}
          <div style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            <span style={{
              fontSize: '10.5px',
              padding: '4px 10px',
              background: 'rgba(0,188,212,0.12)',
              borderRadius: '20px',
              color: '#7edff0',
              letterSpacing: '0.01em'
            }}>Chrome MV3</span>
            <span style={{
              fontSize: '10.5px',
              padding: '4px 10px',
              background: 'rgba(156,79,212,0.12)',
              borderRadius: '20px',
              color: '#c59eff'
            }}>TensorFlow.js</span>
            <span style={{
              fontSize: '10.5px',
              padding: '4px 10px',
              background: 'rgba(33,150,243,0.12)',
              borderRadius: '20px',
              color: '#82c4ff'
            }}>DNR + PAC</span>
          </div>
        </div>

        {/* Row 3: Footer legal / reference line (optional, very minimal) */}
        <div style={{
          marginTop: '4px',
          fontSize: '10px',
          color: 'var(--gray)',
          opacity: 0.5,
          textAlign: 'center',
          borderTop: '1px solid rgba(255,255,255,0.03)',
          paddingTop: '14px',
          letterSpacing: '0.3px'
        }}>
          <span>© 2026 SafeWatch — Open reference architecture for MV3 content filtering</span>
        </div>
      </div>
    </footer>
  );
}