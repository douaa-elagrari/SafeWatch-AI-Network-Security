export default function Section02() {
  // Inline SVG icon components
  const IconUser = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
  const IconGlobe = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
  const IconSearch = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
  const IconLink = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
  const IconServer = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6" y2="6"/><line x1="6" y1="18" x2="6" y2="18"/></svg>;
  const IconMonitor = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
  const IconAlert = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
  const IconBan = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>;
  const IconBot = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="16" r="2"/><path d="M8 11V8c0-2.2 1.8-4 4-4s4 1.8 4 4v3"/><line x1="8" y1="21" x2="8" y2="23"/><line x1="16" y1="21" x2="16" y2="23"/></svg>;
  const IconCross = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
  const IconCheck = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>;

  return (
    <div className="section">
      <div className="section-header" style={{ '--c1': '#E63946', '--c2': '#2196F3' } as React.CSSProperties}>
        <span className="section-num">02</span>
        <h2 className="section-title">
          <span className="hl">Without</span> vs{' '}
          <span style={{ background: 'linear-gradient(90deg,#2196F3,#00BCD4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>With SafeWatch</span>
          {' '}— Request Lifecycle
        </h2>
      </div>

      <div className="compare-grid">
        {/* WITHOUT */}
        <div className="compare-card normal">
          <div className="compare-label bad">
            <span style={{ display: 'inline-flex', marginRight: '6px', color: '#ff6b6b' }}><IconCross /></span>
            WITHOUT SafeWatch — Unprotected Browser
          </div>
          <div className="flow">
            <div className="flow-node fn-user"><span className="icon"><IconUser /></span> User navigates to URL / clicks content</div>
            <div className="flow-arrow" style={{ '--c1': '#aaa' } as React.CSSProperties}></div>
            <div className="flow-node fn-browser"><span className="icon"><IconGlobe /></span> Chrome initiates TCP connection</div>
            <div className="flow-arrow" style={{ '--c1': '#2196F3' } as React.CSSProperties}></div>
            <div className="flow-node fn-dns"><span className="icon"><IconSearch /></span> DNS lookup resolves domain → IP address</div>
            <div className="flow-arrow" style={{ '--c1': '#f9a825' } as React.CSSProperties}></div>
            <div className="flow-node fn-tcp"><span className="icon"><IconLink /></span> TCP/TLS handshake established</div>
            <div className="flow-arrow" style={{ '--c1': '#4caf50' } as React.CSSProperties}></div>
            <div className="flow-node fn-server"><span className="icon"><IconServer /></span> HTTP request sent to server (adult/harmful)</div>
            <div className="flow-arrow" style={{ '--c1': '#7b2fbe' } as React.CSSProperties}></div>
            <div className="flow-node fn-render"><span className="icon"><IconMonitor /></span> Response received — page renders</div>
            <div className="flow-arrow" style={{ '--c1': '#aaa' } as React.CSSProperties}></div>
            <div className="flow-node fn-content"><span className="icon"><IconAlert /></span> Harmful content displayed to user</div>
          </div>
          <div style={{ marginTop: '16px', padding: '12px 14px', background: 'rgba(230,57,70,0.1)', border: '1px solid rgba(230,57,70,0.25)', borderRadius: '8px', fontSize: '12.5px', color: '#ff8a8a' }}>
            <strong>Result:</strong> Zero interception. All content — adult, violent, hate-symbol, NSFW — loads without restriction.
          </div>
        </div>

        {/* WITH */}
        <div className="compare-card protected">
          <div className="compare-label good">
            <span style={{ display: 'inline-flex', marginRight: '6px', color: '#4ade80' }}><IconCheck /></span>
            WITH SafeWatch v5.1 — 4-Layer Defence
          </div>
          <div className="flow">
            <div className="flow-node fn-user"><span className="icon"><IconUser /></span> User navigates to URL / clicks content</div>
            <div className="flow-arrow" style={{ '--c1': '#E63946' } as React.CSSProperties}></div>
            <div className="flow-node fn-block-r"><span className="icon"><IconBan /></span> LAYER 1 — PAC Script fires (pre-DNS, pre-TCP) <span className="intercept">ERR_FAILED →</span></div>
            <div className="flow-arrow" style={{ '--c1': '#E65100' } as React.CSSProperties}></div>
            <div className="flow-node fn-browser" style={{ opacity: 0.5 }}><span className="icon"><IconGlobe /></span> Chrome checks DNR rules before TCP</div>
            <div className="flow-arrow" style={{ '--c1': '#E65100' } as React.CSSProperties}></div>
            <div className="flow-node fn-block-o"><span className="icon"><IconBan /></span> LAYER 2 — Static DNR Rule matches (compiled) <span className="intercept">BLOCKED →</span></div>
            <div className="flow-arrow" style={{ '--c1': '#2196F3' } as React.CSSProperties}></div>
            <div className="flow-node fn-block-b"><span className="icon"><IconBan /></span> LAYER 3 — Dynamic DNR per video-ID fires <span className="intercept">(cancelled) →</span></div>
            <div className="flow-arrow" style={{ '--c1': '#4caf50' } as React.CSSProperties}></div>
            <div className="flow-node fn-block-g"><span className="icon"><IconBan /></span> LAYER 4 — Content script overlay + JS override <span className="intercept">OVERLAY →</span></div>
            <div className="flow-arrow" style={{ '--c1': '#aaa' } as React.CSSProperties}></div>
            <div className="flow-node fn-block-p"><span className="icon"><IconBot /></span> ML CASCADE — Keyword → NSFW.js → COCO → OpenAI → Sightengine <span className="intercept">CARD BLOCKED →</span></div>
          </div>
          <div style={{ marginTop: '16px', padding: '12px 14px', background: 'rgba(33,150,243,0.1)', border: '1px solid rgba(33,150,243,0.25)', borderRadius: '8px', fontSize: '12.5px', color: '#82c4ff' }}>
            <strong>Result:</strong> Intercepted at the earliest possible layer. Content never loads. No harmful data transmitted.
          </div>
        </div>
      </div>
    </div>
  );
}