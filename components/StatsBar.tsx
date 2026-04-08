export default function StatsBar() {
  const stats = [
    { val: '4', lbl: 'Network Blocking Layers', c1: '#E63946', c2: '#ff7b82' },
    { val: '4', lbl: 'ML / CV Tiers', c1: '#9C4FD4', c2: '#2196F3' },
    { val: '12', lbl: 'Static DNR Rules', c1: '#2196F3', c2: '#00BCD4' },
    { val: '~200', lbl: 'Blocked Domains (PAC)', c1: '#2E7D32', c2: '#4CAF50' },
    { val: '9', lbl: 'Supported Platforms', c1: '#E65100', c2: '#F9A825' },
    { val: '2.5MB', lbl: 'On-Device ML Model', c1: '#F9A825', c2: '#ff7b82' },
  ]
  return (
    <div className="stats-bar">
      {stats.map((s) => (
        <div className="stat" key={s.lbl}>
          <div className="stat-val" style={{ '--c1': s.c1, '--c2': s.c2 } as React.CSSProperties}>{s.val}</div>
          <div className="stat-lbl">{s.lbl}</div>
        </div>
      ))}
    </div>
  )
}
