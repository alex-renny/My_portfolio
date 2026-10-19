import React from 'react';
import './Apps.css';

const releases = [
  {
    name: 'ChatVerse',
    product: 'ReSender',
    version: 'Latest APK release',
    platform: 'Android · APK',
    icon: 'R',
    accent: 'mint',
    description: 'An updated ReSender Android app with smoother messaging, stronger privacy controls, and a more polished startup experience. Your account and chats continue to use the same ReSender service as the web app.',
    url: 'https://github.com/alex-renny/ChatVerse/releases',
    action: 'Download latest APK',
    groups: [
      { title: 'Messaging & privacy', items: ['Improved chat lock behavior and privacy controls', 'Message replies, reactions, search navigation, and chat deletion', 'More responsive real-time messages and chat list activity', 'Notification settings to turn message alerts on or off'] },
      { title: 'Everyday improvements', items: ['Improved image previews and voice message playback', 'Profile editing, login, and registration feedback', 'Admin controls for user management and direct messaging', 'Refreshed startup screen with a white background and smaller rounded logo'] },
    ],
  },
  {
    name: 'Retrora',
    product: 'Mobile games',
    version: 'v1.3.0',
    platform: 'Android · APK',
    icon: '✳',
    accent: 'peach',
    description: 'A collection of arcade and puzzle games, now with two new titles, theme controls, and updated character animations.',
    url: 'https://github.com/alex-renny/RETRORA/releases#release-v1.3.0',
    action: 'Download Retrora.apk',
    groups: [
      { title: 'Forbidden Treasures', items: ['Nokia-inspired mining adventure across jungle, tundra, and volcanic biomes', 'Animated miner, falling boulders, TNT, stamina, gems, and patrolling enemies', 'Unlockable outfits and pickaxes with tactile on-screen controls'] },
      { title: 'Block Fill', items: ['One-stroke neon puzzles with 10 handcrafted levels and endless generated boards', 'Smooth swipe controls, undo, reset, and backward path retracing', 'Unlockable neon palettes and trail effects'] },
      { title: 'Across the app', items: ['Light and dark themes for games and menus', 'Updated character animations'] },
    ],
  },
  {
    name: 'RESONA',
    product: 'Audio editing & mixing',
    version: 'v0.2.0 · Shape Your Sound',
    platform: 'Android · Flutter app',
    icon: '♪',
    accent: 'lilac',
    description: 'A cross-platform audio editor built with Flutter and FFmpeg for combining clips, shaping multi-track timelines, and exporting finished mixes.',
    url: 'https://github.com/alex-renny/RESONA/releases',
    action: 'Download app-release.apk',
    groups: [
      { title: 'Merge & arrange audio', items: ['Select multiple audio files, set timestamps, and order clips', 'Hard cut, crossfade (0.5–5 seconds), and fade-through-silence transitions', 'Live validation for clip bounds and transition compatibility'] },
      { title: 'Multi-track editing', items: ['PCM-derived waveforms with disk caching', 'Mute, solo, volume, pan, lock, rename, add, and delete tracks', 'Drag clips with snapping, trim edges, split at the playhead, and edit in the clip inspector', 'Adjust volume, pan, fades, speed (0.25×–2×), and pitch (−12 to +12 semitones)'] },
      { title: 'Export & personalize', items: ['Undo and redo editing, trimming, movement, and track changes', 'Export MP3, WAV, FLAC, AAC, M4A, or OGG with quality and channel controls', 'Dark, light, and system themes with seven accent colors and interface controls'] },
    ],
  },
];

function Apps() {
  return (
    <section id="apps" className="apps-section releases-section">
      <div className="container">
        <div className="section-header">
          <div className="header-label"><span className="label-dot" /><span className="label-text">Downloads</span></div>
          <h2 className="section-title">Apps &amp; <span className="highlight">Tools</span></h2>
          <p className="section-subtitle">Download or try my apps, APKs, and Progressive Web Apps — tools I've built for real users.</p>
        </div>

        <div className="release-list">
          {releases.map((release, index) => (
            <article className={`release-card release-${release.accent}`} key={release.name}>
              <div className="release-topline">
                <div className="release-identity">
                  <div className="release-icon" aria-hidden="true">{release.icon}</div>
                  <div>
                    <p className="release-product">{release.product}</p>
                    <h3>{release.name}</h3>
                  </div>
                </div>
                <div className="release-meta"><span>{release.version}</span><span>{release.platform}</span></div>
              </div>
              <p className="release-description">{release.description}</p>
              <details className="release-notes">
                <summary>View release notes <span aria-hidden="true">＋</span></summary>
                <div className="release-groups">
                  {release.groups.map(group => (
                    <div className="release-group" key={group.title}>
                      <h4>{group.title}</h4>
                      <ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
                    </div>
                  ))}
                </div>
              </details>
              <div className="release-footer">
                <span className="release-install-note">Open the release page to view files and installation details.</span>
                <a className="release-download" href={release.url} target="_blank" rel="noopener noreferrer">
                  {release.action}<span aria-hidden="true">↗</span>
                </a>
              </div>
              {index < releases.length - 1 && <span className="release-number">0{index + 1}</span>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Apps;
