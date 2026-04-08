export default function Section04() {
  // Inline SVG icons (same style as Section02)
  const IconBrain = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4a4 4 0 0 1 3.5 6.1A4 4 0 0 1 12 20a4 4 0 0 1-3.5-6.1A4 4 0 0 1 12 4z"/><path d="M12 8v8"/><path d="m8.5 11 7 2"/><path d="m8.5 15 7-2"/></svg>;
  const IconLock = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
  const IconCloud = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17.5 19H9a3.5 3.5 0 0 1 0-7h.5A5.5 5.5 0 0 1 17 12.5 3.5 3.5 0 0 1 17.5 19z"/></svg>;
  const IconImage = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="2.5"/><path d="m21 15-5-4-3 3-4-4-5 5"/></svg>;
  const IconLightning = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
  const IconMagnify = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
  const IconShield = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
  const IconCheckCircle = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="18 8 12 16 8 12"/></svg>;
  const IconPass = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#81c995" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>;

  return (
    <div className="section">
      <div className="section-header" style={{ '--c1': '#9C4FD4', '--c2': '#2196F3' } as React.CSSProperties}>
        <span className="section-num">04</span>
        <h2 className="section-title"><span className="hl">4-Tier Machine Learning</span> &amp; Computer Vision Pipeline</h2>
      </div>

      <div className="infobox note">
        <div className="infobox-body">
          <strong>Offscreen Document Architecture</strong>
          Because MV3 service workers have no DOM access, all TensorFlow.js inference runs inside a hidden <strong>Offscreen Document</strong> (<code>ml_offscreen.html</code>) created via <code>chrome.offscreen.createDocument()</code> with reason <code>DOM_SCRAPING</code>. This hidden document has full DOM and WebGL/WASM access. The model is pre-warmed on install to eliminate cold-start latency. MV3 allows only one offscreen document at a time — all 4 ML tiers share it via message passing.
        </div>
      </div>

      <div className="ml-grid" style={{ marginTop: '20px' }}>
        {/* T1 */}
        <div className="ml-card ml-t1">
          <div className="ml-tier-label">Tier 1</div>
          <div className="ml-type-badge"><IconLock /> On-Device · Bundled</div>
          <h4>NSFW.js + TensorFlow.js</h4>
          <div className="engine">MobileNet v2 · 224×224px · 2.5MB weights</div>
          <p style={{ fontSize: '12px', color: 'var(--gray)', marginTop: '4px' }}>Fine-tuned convolutional neural network bundled inside the extension. Content script draws each thumbnail to a canvas, encodes as JPEG base64, forwards to offscreen document for inference. Classifies into 5 mutually exclusive classes:</p>
          <div className="ml-classes">
            <span className="ml-class" style={{ '--mc': '#E63946' } as React.CSSProperties}>Porn</span>
            <span className="ml-class" style={{ '--mc': '#E63946' } as React.CSSProperties}>Hentai</span>
            <span className="ml-class" style={{ '--mc': '#F9A825' } as React.CSSProperties}>Sexy</span>
            <span className="ml-class" style={{ '--mc': '#81c995' } as React.CSSProperties}>Neutral</span>
            <span className="ml-class" style={{ '--mc': '#82c4ff' } as React.CSSProperties}>Drawing</span>
          </div>
          <div className="ml-threshold">
            <span>Block threshold</span>
            <span className="tval">0.60</span>
          </div>
          <div style={{ fontSize: '11.5px', color: '#a0a0b0', marginTop: '6px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '8px' }}>
            <IconCheckCircle /> Zero API cost · Works offline · No cold-start delay after pre-warm
          </div>
        </div>

        {/* T2 */}
        <div className="ml-card ml-t2">
          <div className="ml-tier-label">Tier 2</div>
          <div className="ml-type-badge"><IconLock /> On-Device · Bundled</div>
          <h4>COCO-SSD Object Detection</h4>
          <div className="engine">lite_mobilenet_v2 · 80 COCO classes</div>
          <p style={{ fontSize: '12px', color: 'var(--gray)', marginTop: '4px' }}>Performs bounding-box object detection. SafeWatch maps a subset to dangerous categories with combo-logic to prevent false positives on travel/food thumbnails:</p>
          <div className="ml-classes">
            <span className="ml-class" style={{ '--mc': '#E63946' } as React.CSSProperties}>knife ≥0.80</span>
            <span className="ml-class" style={{ '--mc': '#E63946' } as React.CSSProperties}>baseball bat ≥0.80</span>
            <span className="ml-class" style={{ '--mc': '#F9A825' } as React.CSSProperties}>scissors ×2</span>
            <span className="ml-class" style={{ '--mc': '#F9A825' } as React.CSSProperties}>airplane ×2</span>
            <span className="ml-class" style={{ '--mc': '#F9A825' } as React.CSSProperties}>truck ×2</span>
          </div>
          <div className="ml-threshold">
            <span>Base threshold</span>
            <span className="tval">0.55</span>
          </div>
          <div style={{ fontSize: '11.5px', color: '#a0a0b0', marginTop: '6px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '8px' }}>
            <IconCheckCircle /> Single-hit on knife/bat · Combo logic prevents false positives
          </div>
        </div>

        {/* T3 */}
        <div className="ml-card ml-t3">
          <div className="ml-tier-label">Tier 3</div>
          <div className="ml-type-badge"><IconCloud /> Cloud API · Vision-Capable</div>
          <h4>OpenAI Moderation API</h4>
          <div className="engine">omni-moderation-latest · POST /v1/moderations</div>
          <p style={{ fontSize: '12px', color: 'var(--gray)', marginTop: '4px' }}>Passes thumbnail as base64 image URL directly in JSON body. Returns per-category probability scores. API key stored in <code style={{ fontFamily: '\'IBM Plex Mono\',monospace', fontSize: '10px', color: '#ffb07a' }}>chrome.storage.local</code>. Absent key → silently skipped (fail-open):</p>
          <div className="ml-classes">
            <span className="ml-class" style={{ '--mc': '#E63946' } as React.CSSProperties}>violence/graphic</span>
            <span className="ml-class" style={{ '--mc': '#E65100' } as React.CSSProperties}>violence</span>
            <span className="ml-class" style={{ '--mc': '#F9A825' } as React.CSSProperties}>hate</span>
            <span className="ml-class" style={{ '--mc': '#F9A825' } as React.CSSProperties}>harassment</span>
            <span className="ml-class" style={{ '--mc': '#9C4FD4' } as React.CSSProperties}>self-harm</span>
          </div>
          <div className="ml-threshold">
            <span>violence/graphic (lowest)</span>
            <span className="tval">0.55</span>
          </div>
          <div style={{ fontSize: '11.5px', color: '#a0a0b0', marginTop: '6px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '8px' }}>
            <IconCloud /> Free tier · Fails open if no API key configured
          </div>
        </div>

        {/* T4 */}
        <div className="ml-card ml-t4">
          <div className="ml-tier-label">Tier 4</div>
          <div className="ml-type-badge"><IconCloud /> Cloud API · Multimodal</div>
          <h4>Sightengine Hate-Symbol Detection</h4>
          <div className="engine">POST api.sightengine.com/1.0/check.json</div>
          <p style={{ fontSize: '12px', color: 'var(--gray)', marginTop: '4px' }}>Multipart form upload — base64 decoded to Blob in offscreen document (cannot do in service worker). 4 Sightengine models requested in a single API call:</p>
          <div className="ml-classes">
            <span className="ml-class" style={{ '--mc': '#E63946' } as React.CSSProperties}>hate-symbols</span>
            <span className="ml-class" style={{ '--mc': '#E65100' } as React.CSSProperties}>gore</span>
            <span className="ml-class" style={{ '--mc': '#E65100' } as React.CSSProperties}>violence</span>
            <span className="ml-class" style={{ '--mc': '#F9A825' } as React.CSSProperties}>weapons</span>
          </div>
          <p style={{ fontSize: '11.5px', color: 'var(--gray)', marginTop: '6px' }}>Swastikas · KKK · white-supremacy symbols · racist imagery · graphic gore</p>
          <div className="ml-threshold">
            <span>All categories</span>
            <span className="tval">0.55</span>
          </div>
          <div style={{ fontSize: '11.5px', color: '#a0a0b0', marginTop: '6px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '8px' }}>
            <IconCloud /> Credentials in storage · Fails open if absent
          </div>
        </div>
      </div>

      {/* ML Flow Diagram */}
      <div style={{ marginTop: '24px', background: '#070d17', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px' }}>
        <div style={{ fontFamily: '\'Syne\',sans-serif', fontSize: '13px', fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px' }}>ML CASCADE FLOW — Thumbnail Processing Pipeline</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 0, overflowX: 'auto', paddingBottom: '8px', WebkitOverflowScrolling: 'touch' as any }}>
          {/* Input */}
          <div style={{ flexShrink: 0, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '8px', padding: '12px 16px', fontSize: '12px', textAlign: 'center', minWidth: '110px' }}>
            <div style={{ fontSize: '22px', marginBottom: '4px' }}><IconImage /></div>
            <div style={{ color: '#fff', fontWeight: 600 }}>Thumbnail</div>
            <div style={{ color: 'var(--gray)', fontSize: '10.5px', marginTop: '2px' }}>224×224 canvas<br />base64 JPEG</div>
          </div>
          <div style={{ flexShrink: 0, padding: '0 8px', color: 'var(--gray)', fontSize: '18px' }}>→</div>
          {/* Keyword */}
          <div style={{ flexShrink: 0, background: 'rgba(0,188,212,0.08)', border: '1px solid rgba(0,188,212,0.25)', borderRadius: '8px', padding: '12px 14px', fontSize: '12px', textAlign: 'center', minWidth: '120px' }}>
            <div style={{ fontSize: '20px', marginBottom: '4px' }}><IconLightning /></div>
            <div style={{ color: '#7edff0', fontWeight: 600, fontSize: '11.5px' }}>KEYWORD FIRST</div>
            <div style={{ color: 'var(--gray)', fontSize: '10.5px', marginTop: '2px' }}>Zero latency<br />Sync match</div>
            <div style={{ marginTop: '6px', background: 'rgba(0,188,212,0.15)', borderRadius: '4px', padding: '3px 6px', fontSize: '10px', color: '#7edff0' }}>MATCH → Block</div>
          </div>
          <div style={{ flexShrink: 0, padding: '0 8px', color: 'var(--gray)', fontSize: '18px' }}>→</div>
          {/* Tier 1 */}
          <div style={{ flexShrink: 0, background: 'rgba(123,47,190,0.1)', border: '1px solid rgba(123,47,190,0.3)', borderRadius: '8px', padding: '12px 14px', fontSize: '12px', textAlign: 'center', minWidth: '120px', borderTop: '2px solid #9C4FD4' }}>
            <div style={{ fontSize: '20px', marginBottom: '4px' }}><IconBrain /></div>
            <div style={{ color: '#c59eff', fontWeight: 600, fontSize: '11.5px' }}>TIER 1</div>
            <div style={{ color: 'var(--gray)', fontSize: '10.5px', marginTop: '2px' }}>NSFW.js<br />On-device</div>
            <div style={{ marginTop: '6px', background: 'rgba(123,47,190,0.15)', borderRadius: '4px', padding: '3px 6px', fontSize: '10px', color: '#c59eff' }}>&gt;0.60 → Block</div>
          </div>
          <div style={{ flexShrink: 0, padding: '0 8px', color: 'var(--gray)', fontSize: '18px' }}>→</div>
          {/* Tier 2 */}
          <div style={{ flexShrink: 0, background: 'rgba(33,150,243,0.1)', border: '1px solid rgba(33,150,243,0.3)', borderRadius: '8px', padding: '12px 14px', fontSize: '12px', textAlign: 'center', minWidth: '120px', borderTop: '2px solid #2196F3' }}>
            <div style={{ fontSize: '20px', marginBottom: '4px' }}><IconMagnify /></div>
            <div style={{ color: '#82c4ff', fontWeight: 600, fontSize: '11.5px' }}>TIER 2</div>
            <div style={{ color: 'var(--gray)', fontSize: '10.5px', marginTop: '2px' }}>COCO-SSD<br />On-device</div>
            <div style={{ marginTop: '6px', background: 'rgba(33,150,243,0.15)', borderRadius: '4px', padding: '3px 6px', fontSize: '10px', color: '#82c4ff' }}>&gt;0.55 → Block</div>
          </div>
          <div style={{ flexShrink: 0, padding: '0 8px', color: 'var(--gray)', fontSize: '18px' }}>→</div>
          {/* Tier 3 */}
          <div style={{ flexShrink: 0, background: 'rgba(230,81,0,0.1)', border: '1px solid rgba(230,81,0,0.3)', borderRadius: '8px', padding: '12px 14px', fontSize: '12px', textAlign: 'center', minWidth: '120px', borderTop: '2px solid #E65100' }}>
            <div style={{ fontSize: '20px', marginBottom: '4px' }}><IconCloud /></div>
            <div style={{ color: '#ffb07a', fontWeight: 600, fontSize: '11.5px' }}>TIER 3</div>
            <div style={{ color: 'var(--gray)', fontSize: '10.5px', marginTop: '2px' }}>OpenAI API<br />Cloud</div>
            <div style={{ marginTop: '6px', background: 'rgba(230,81,0,0.15)', borderRadius: '4px', padding: '3px 6px', fontSize: '10px', color: '#ffb07a' }}>&gt;0.55 → Block</div>
          </div>
          <div style={{ flexShrink: 0, padding: '0 8px', color: 'var(--gray)', fontSize: '18px' }}>→</div>
          {/* Tier 4 */}
          <div style={{ flexShrink: 0, background: 'rgba(230,57,70,0.1)', border: '1px solid rgba(230,57,70,0.3)', borderRadius: '8px', padding: '12px 14px', fontSize: '12px', textAlign: 'center', minWidth: '120px', borderTop: '2px solid #E63946' }}>
            <div style={{ fontSize: '20px', marginBottom: '4px' }}><IconShield /></div>
            <div style={{ color: '#ff8a8a', fontWeight: 600, fontSize: '11.5px' }}>TIER 4</div>
            <div style={{ color: 'var(--gray)', fontSize: '10.5px', marginTop: '2px' }}>Sightengine<br />Cloud</div>
            <div style={{ marginTop: '6px', background: 'rgba(230,57,70,0.15)', borderRadius: '4px', padding: '3px 6px', fontSize: '10px', color: '#ff8a8a' }}>&gt;0.55 → Block</div>
          </div>
          <div style={{ flexShrink: 0, padding: '0 8px', color: 'var(--gray)', fontSize: '18px' }}>→</div>
          {/* Pass */}
          <div style={{ flexShrink: 0, background: 'rgba(46,125,50,0.1)', border: '1px solid rgba(46,125,50,0.3)', borderRadius: '8px', padding: '12px 14px', fontSize: '12px', textAlign: 'center', minWidth: '110px' }}>
            <div style={{ fontSize: '20px', marginBottom: '4px' }}><IconPass /></div>
            <div style={{ color: '#81c995', fontWeight: 600, fontSize: '11.5px' }}>SAFE</div>
            <div style={{ color: 'var(--gray)', fontSize: '10.5px', marginTop: '2px' }}>All tiers<br />passed</div>
            <div style={{ marginTop: '6px', background: 'rgba(46,125,50,0.15)', borderRadius: '4px', padding: '3px 6px', fontSize: '10px', color: '#81c995' }}>Content shown</div>
          </div>
        </div>
        <div style={{ marginTop: '14px', fontSize: '11.5px', color: 'var(--gray)', fontFamily: '\'IBM Plex Mono\',monospace' }}>
          ↑ Each tier only receives thumbnails that <em>passed</em> all previous tiers — expensive cloud APIs run last, minimising cost.
        </div>
      </div>
    </div>
  );
}