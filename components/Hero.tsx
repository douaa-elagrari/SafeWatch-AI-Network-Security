export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-grid">
        <div>
          <div className="hero-badge"><span></span> CHROME EXTENSION · MANIFEST V3</div>
          <div className="hero-title">
            <span className="accent">Safe</span>Watch
            <span className="version">v5.1.0 — Network-Level Content Filter</span>
          </div>
          <div className="hero-sub">
            A production-grade Chrome extension enforcing multi-layer content filtering across 9 major platforms. Five-tier defence stack spanning socket-level proxy blocking, compiled browser network rules, on-device machine learning, cloud vision APIs and DOM-level JavaScript injection.
          </div>
          <div className="hero-tags">
            <span className="tag tag-r">PAC/Proxy Socket Blocking</span>
            <span className="tag tag-o">declarativeNetRequest (DNR)</span>
            <span className="tag tag-b">TensorFlow.js · NSFW.js</span>
            <span className="tag tag-p">OpenAI Moderation API</span>
            <span className="tag tag-c">Sightengine CV API</span>
            <span className="tag tag-g">DOM Injection · MutationObserver</span>
          </div>
        </div>
        
      </div>
    </div>
  )
}
