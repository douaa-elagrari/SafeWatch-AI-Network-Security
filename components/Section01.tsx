export default function Section01() {
  return (
    <div className="section">
      <div className="section-header" style={{ '--c1': '#E63946', '--c2': '#E65100' } as React.CSSProperties}>
        <span className="section-num">01</span>
        <h2 className="section-title"><span className="hl">Project Overview</span> &amp; Architecture</h2>
      </div>

      <div className="panel" style={{ '--c1': '#E63946', '--c2': '#2196F3' } as React.CSSProperties}>
        <div className="panel-title"> Core Design Principle</div>
        <p style={{ color: 'var(--graylt)', fontSize: '13.5px', lineHeight: '1.65' }}>
          <strong style={{ color: '#fff' }}>Block as early and as deep as possible.</strong> Each tier catches what the previous one misses. The stack is ordered from lowest (socket level) to highest (DOM), so the most expensive operations — cloud ML APIs — only run when all lightweight checks have already passed. This minimises latency, API cost, and computational overhead.
        </p>
      </div>

      <div className="infobox info" style={{ marginBottom: '20px' }}>
        <div className="infobox-icon"></div>
        <div className="infobox-body">
          <strong>Supported Platforms</strong>
          YouTube · Google Search · Bing · Reddit · Twitter/X · TikTok · Instagram · Twitch · Vimeo — all covered by the same unified blocking pipeline, with platform-specific DOM selectors.
        </div>
      </div>

      <div className="panel" style={{ '--c1': '#2196F3', '--c2': '#00BCD4' } as React.CSSProperties}>
        <div className="panel-title">Complete File Structure</div>
        <div className="filetree">
          {[
            ['manifest.json', 'ft-ctx-bun', '— Config —', 'MV3 descriptor · permissions · DNR rule sets · CSP headers'],
            ['sw_loader.js', 'ft-ctx-sw', 'Service Worker', 'Bootstraps all SW scripts via importScripts() — single entry point'],
            ['background.js', 'ft-ctx-sw', 'Service Worker', 'Core logic: rule management · ML routing · block logging · badge counter'],
            ['content_script.js', 'ft-ctx-cs', 'Page Context', 'Card scanner · keyword engine · DOM overlays · JS prototype injection'],
            ['dns_block.js', 'ft-ctx-sw', 'Service Worker', 'PAC script builder + chrome.proxy.settings installer'],
            ['dns_blocklist.js', 'ft-ctx-sw', 'Service Worker', '~200 domains + server IPs for PAC-level interception'],
            ['ml_offscreen.js', 'ft-ctx-off', 'Offscreen DOM', 'Tier 1: NSFW.js MobileNet v2 inference listener'],
            ['ml_tier2_coco.js', 'ft-ctx-off', 'Offscreen DOM', 'Tier 2: COCO-SSD lite_mobilenet object detection'],
            ['ml_tier3_openai.js', 'ft-ctx-off', 'Offscreen DOM', 'Tier 3: OpenAI omni-moderation-latest cloud vision API'],
            ['ml_tier4_sightengine.js', 'ft-ctx-off', 'Offscreen DOM', 'Tier 4: Sightengine hate-symbol · gore · violence detection'],
            ['rules/block_rules.json', 'ft-ctx-dnr', 'DNR Engine', '12 static compiled rules for major adult domains'],
            ['models/nsfw_mobilenet/', 'ft-ctx-bun', 'Bundled', 'MobileNet v2 weights — 2.5 MB, runs entirely on-device · zero latency'],
            ['popup.html', 'ft-ctx-bun', 'Extension UI', 'User dashboard · block log · stats · Kids Mode toggle'],
          ].map(([file, ctxClass, ctx, role]) => (
            <div className="ft-row" key={file}>
              <span className="ft-file">{file}</span>
              <span className={`ft-ctx ${ctxClass}`}>{ctx}</span>
              <span className="ft-role">{role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
