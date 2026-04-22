import { useState } from 'react'
import styles from './Dashboard.module.css'

const profiles = [
  {
    id: 1,
    name: 'Priya S',
    username: 'priya_sharma_1990',
    type: 'Interest Reminder',
    premium: true,
    age: 28,
    height: "5' 4\"",
    religion: 'Hindu',
    caste: 'Sharma',
    profession: 'Software Engineer',
    location: 'Mumbai, India',
    time: '2 hrs ago',
    message: 'Hi, I wish to remind you that I had expressed interest in your profile last week. I hope we can connect soon.',
    avatar: null,
  },
  {
    id: 2,
    name: 'Anjali M',
    username: 'anjali_mehta_1992',
    type: 'Interest',
    premium: false,
    age: 26,
    height: "5' 3\"",
    religion: 'Hindu',
    caste: 'Mehta',
    profession: 'Doctor',
    location: 'Delhi, India',
    time: '4 hrs ago',
    message: null,
    avatar: null,
  },
  {
    id: 3,
    name: 'Deepika R',
    username: 'deepika_rao_88',
    type: 'Interest with Email',
    premium: true,
    age: 30,
    height: "5' 5\"",
    religion: 'Hindu',
    caste: 'Rao',
    profession: 'Architect',
    location: 'Bangalore, India',
    time: '9 hrs ago',
    message: 'Hi, I have liked your profile and believe it to be a good match. If you like my profile too, kindly accept.',
    avatar: null,
  },
  {
    id: 4,
    name: 'Kavita P',
    username: 'kavita_patel_93',
    type: 'Interest Reminder',
    premium: false,
    age: 25,
    height: "5' 2\"",
    religion: 'Hindu',
    caste: 'Patel',
    profession: 'Teacher',
    location: 'Ahmedabad, India',
    time: '19 hrs ago',
    message: null,
    avatar: null,
  },
  {
    id: 5,
    name: 'Shreya K',
    username: 'shreya_kulkarni_91',
    type: 'Interest',
    premium: true,
    age: 27,
    height: "5' 4\"",
    religion: 'Hindu',
    caste: 'Kulkarni',
    profession: 'CA',
    location: 'Pune, India',
    time: '1 day ago',
    message: null,
    avatar: null,
  },
]

const initials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase()
const avatarColors = ['#e8a87c', '#c2a4d4', '#7ec8e3', '#b5d8a8', '#f4a7b9']

export default function Dashboard({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('interests')
  const [activeSection, setActiveSection] = useState('Interests & Requests')
  const [filter, setFilter] = useState('All Pending')
  const [accepted, setAccepted] = useState({})
  const [declined, setDeclined] = useState({})
  const [hoveredProfile, setHoveredProfile] = useState(null)
  const [activeNavItem, setActiveNavItem] = useState('Inbox')

  const navItems = ['My Shaadi', 'Search', 'Matches', 'Inbox', 'Explore']

  const sidebarSections = [
    { label: 'Emails', count: 1 },
    { label: 'Interests & Requests', count: 481, active: true },
    { label: 'Filtered Out', sub: true },
    { label: 'Accepted Members', count: 118 },
    { label: 'Sent' },
    { label: 'Archived' },
    { label: 'Notifications & Feeds' },
  ]

  const quickLinks = [
    'Shortlists & more',
    'My Matches',
    'Reverse Matches',
    '2-way Matches',
    'Add Saved Searches',
    'My Help',
  ]

  return (
    <div className={styles.page}>
      {/* ── Top Orange Nav ── */}
      <header className={styles.topNav}>
        <div className={styles.topNavInner}>
          <div className={styles.logoArea} onClick={() => onNavigate('home')}>
            <span className={styles.logoText}>shaadi</span>
            <span className={styles.logoDot}>.com</span>
            <span className={styles.logoTM}>®</span>
          </div>
          <nav className={styles.navLinks}>
            {navItems.map(item => (
              <button
                key={item}
                className={`${styles.navBtn} ${activeNavItem === item ? styles.navBtnActive : ''}`}
                onClick={() => setActiveNavItem(item)}
              >
                {item}
                {item === 'Matches' && <span className={styles.matchBadge}>1022</span>}
                {['My Shaadi', 'Search', 'Inbox', 'Explore'].includes(item) && (
                  <span className={styles.chevron}>▾</span>
                )}
              </button>
            ))}
          </nav>
          <div className={styles.topRight}>
            <span className={styles.callInfo}>📞 Call 18605003456</span>
            <button className={styles.helpBtn}>24/7 Help options ▾</button>
            <div className={styles.userBadge}>BP_Female ▾</div>
          </div>
        </div>
      </header>

      {/* ── Sub Nav Bar ── */}
      <div className={styles.certBar}>
        ✅ Only site to be ISO 9001:2008 &amp; VeriSign Certified
      </div>

      {/* ── Body ── */}
      <div className={styles.body}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <button className={styles.sendEmailBtn}>✉ SEND EMAIL</button>

          <ul className={styles.sideList}>
            {sidebarSections.map((s, i) => (
              <li
                key={i}
                className={`${styles.sideItem} ${s.active || s.label === activeSection ? styles.sideItemActive : ''} ${s.sub ? styles.sideItemSub : ''}`}
                onClick={() => setActiveSection(s.label)}
              >
                {s.sub && <span className={styles.subArrow}>└</span>}
                <span className={styles.sideLabel}>{s.label}</span>
                {s.count && <span className={styles.sideCount}>({s.count})</span>}
              </li>
            ))}
          </ul>

          {/* My Shaadi box */}
          <div className={styles.sideBox}>
            <div className={styles.sideBoxTitle}>My Shaadi</div>
            <ul className={styles.sideBoxList}>
              <li>- My Contact Details</li>
              <li className={styles.sideBoxHighlight}>My Profile</li>
              <li>- My Photos</li>
              <li>- My Partner Preferences</li>
              <li className={styles.sideBoxMore}>- More <span>+</span></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className={styles.sideBox}>
            <div className={styles.sideBoxTitle}>Quick Links</div>
            <ul className={styles.sideBoxList}>
              {quickLinks.map(l => (
                <li key={l}>- {l}</li>
              ))}
            </ul>
          </div>

          {/* Profile ID Search */}
          <div className={styles.profileSearch}>
            <div className={styles.profileSearchTitle}>Profile ID Search</div>
            <div className={styles.profileSearchRow}>
              <input className={styles.profileInput} placeholder="Enter Profile ID" />
              <button className={styles.goBtn}>Go</button>
            </div>
          </div>

          {/* Useful Links */}
          <div className={styles.usefulLinks}>
            <div className={styles.usefulLinksTitle}>Useful Links</div>
            <a href="#" className={styles.usefulLink}>👥 Refer a Friend</a>
            <a href="#" className={styles.usefulLink}>❓ Need Help?</a>
            <a href="#" className={styles.usefulLink}>🔒 Security Tips</a>
            <a href="#" className={styles.usefulLink}>🚫 Report Misuse</a>
          </div>
        </aside>

        {/* Main Content */}
        <main className={styles.main}>
          <div className={styles.mainHeader}>
            <h1 className={styles.pageTitle}>Interests &amp; Requests</h1>
          </div>

          {/* Toolbar */}
          <div className={styles.toolbar}>
            <div className={styles.toolbarLeft}>
              <input type="checkbox" className={styles.selectAll} />
              <button className={styles.toolbarIconBtn} title="Delete">🗑</button>
            </div>
            <div className={styles.toolbarRight}>
              <span className={styles.showLabel}>Show</span>
              <select
                className={styles.filterSelect}
                value={filter}
                onChange={e => setFilter(e.target.value)}
              >
                <option>All Pending</option>
                <option>New Interests</option>
                <option>Reminders</option>
                <option>Interest with Email</option>
              </select>
            </div>
          </div>

          {/* Profile Cards */}
          <div className={styles.cardList}>
            {profiles.map((p, idx) => (
              <div
                key={p.id}
                className={`${styles.card} ${accepted[p.id] ? styles.cardAccepted : ''} ${declined[p.id] ? styles.cardDeclined : ''}`}
              >
                <input type="checkbox" className={styles.cardCheck} />

                {/* Avatar */}
                <div
                  className={styles.avatarWrap}
                  style={{ background: avatarColors[idx % avatarColors.length] }}
                  onMouseEnter={() => setHoveredProfile(p.id)}
                  onMouseLeave={() => setHoveredProfile(null)}
                >
                  <span className={styles.avatarInitials}>{initials(p.name)}</span>
                  <div className={styles.avatarOverlay}>View Profile</div>

                  {/* Hover tooltip */}
                  {hoveredProfile === p.id && (
                    <div className={styles.tooltip}>
                      <div className={styles.tooltipRow}><span>Age / Height</span><span>: {p.age}, {p.height}</span></div>
                      <div className={styles.tooltipRow}><span>Religion / Caste</span><span>: {p.religion}, {p.caste}</span></div>
                      <div className={styles.tooltipRow}><span>Profession</span><span>: {p.profession}</span></div>
                      <div className={styles.tooltipRow}><span>Location</span><span>: {p.location}</span></div>
                      <div className={styles.tooltipLinks}>
                        <a href="#">View History ▶</a>
                        <a href="#">View full profile ▶</a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <span className={styles.cardType}>{p.type} from </span>
                    <a href="#" className={styles.cardName}>{p.username}</a>
                    {p.premium && <span className={styles.premiumBadge}>PREMIUM+</span>}
                  </div>

                  {p.message && (
                    <p className={styles.cardMessage}>
                      {p.message} <a href="#" className={styles.seeMore}>See more...</a>
                    </p>
                  )}

                  {!declined[p.id] && !accepted[p.id] && (
                    <div className={styles.cardActions}>
                      <button
                        className={styles.acceptBtn}
                        onClick={() => setAccepted(a => ({ ...a, [p.id]: true }))}
                      >
                        Accept
                      </button>
                      <button
                        className={styles.declineBtn}
                        onClick={() => setDeclined(d => ({ ...d, [p.id]: true }))}
                      >
                        Decline ▾
                      </button>
                    </div>
                  )}

                  {accepted[p.id] && (
                    <div className={styles.statusTag}>✅ Accepted</div>
                  )}
                  {declined[p.id] && (
                    <div className={`${styles.statusTag} ${styles.declinedTag}`}>❌ Declined</div>
                  )}
                </div>

                <div className={styles.cardTime}>{p.time}</div>
              </div>
            ))}
          </div>
        </main>

        {/* Right Profile Panel */}
        <aside className={styles.profilePanel}>
          <div className={styles.activityBar}>
            Activity Factor <strong>100%</strong> <span className={styles.qMark}>?</span>
          </div>

          <div className={styles.profileCard}>
            <div className={styles.profilePhotoBox}>
              <div className={styles.profilePhotoPlaceholder}>
                <span>📷</span>
                <p>Photo Coming Soon</p>
              </div>
            </div>

            <div className={styles.profileInfo}>
              <div className={styles.profileName}>My Profile <span>(SH27707129)</span></div>
              <table className={styles.profileTable}>
                <tbody>
                  <tr><td>Age / Height</td><td>: 28 / 5'8"</td><td>Religion / Caste</td><td>: Hindu, Sharma</td></tr>
                  <tr><td>Marital Status</td><td>: Never Married</td><td>Location</td><td>: Mumbai</td></tr>
                  <tr><td>Posted by</td><td>: Self</td><td>Mother Tongue</td><td>: Hindi</td></tr>
                </tbody>
              </table>

              <div className={styles.manageBox}>
                <div className={styles.manageTitle}>Manage your profile</div>
                <div className={styles.manageGrid}>
                  <a href="#">• Edit Personal Profile</a>
                  <a href="#">• View Profile Stats</a>
                  <a href="#">• Set Contact Filters</a>
                  <a href="#">• Edit Partner Profile</a>
                  <a href="#">• Manage Photos</a>
                  <a href="#">• Hide / Delete Profile</a>
                  <a href="#">• Edit Contact Details</a>
                  <a href="#">• Hobbies &amp; Interests</a>
                </div>
                <a href="#" className={styles.previewLink}>Preview your profile ▶</a>
              </div>
            </div>
          </div>

          {/* About / Partner Preference Tabs */}
          <div className={styles.profileTabs}>
            <button
              className={`${styles.profileTab} ${activeTab === 'about' ? styles.profileTabActive : ''}`}
              onClick={() => setActiveTab('about')}
            >About Myself</button>
            <button
              className={`${styles.profileTab} ${activeTab === 'partner' ? styles.profileTabActive : ''}`}
              onClick={() => setActiveTab('partner')}
            >Partner Preference ↓</button>
          </div>

          <div className={styles.profileSection}>
            <div className={styles.sectionHeading}>
              Personality, Family Details, Career, Partner Expectations etc.
              <a href="#" className={styles.editLink}>Edit ▶</a>
            </div>
            <p className={styles.sectionText}>
              Looking for a life partner who is kind, family-oriented and ambitious. I value tradition while embracing modern values. I enjoy travelling, cooking and spending quality time with loved ones. My family is very important to me and I am close to my parents and siblings. I work as a Software Engineer at a leading tech firm and enjoy my work. I am looking for someone who shares similar values and goals in life.
            </p>
          </div>

          <div className={styles.profileSection}>
            <div className={styles.sectionHeading}>
              Basics &amp; Lifestyle
              <a href="#" className={styles.editLink}>Edit ▶</a>
            </div>
            <div className={styles.basicsGrid}>
              <div><span className={styles.bLabel}>Age</span><span>: 28</span></div>
              <div><span className={styles.bLabel}>Diet</span><span>: Non-Veg</span></div>
              <div><span className={styles.bLabel}>Date of Birth</span><span>: 15-Mar-1996</span></div>
              <div><span className={styles.bLabel}>Drink</span><span>: Occasionally</span></div>
              <div><span className={styles.bLabel}>Marital Status</span><span>: Never Married</span></div>
              <div><span className={styles.bLabel}>Smoke</span><span>: No</span></div>
              <div><span className={styles.bLabel}>Height</span><span>: 5'8" (173cm)</span></div>
              <div><span className={styles.bLabel}>Personal Values</span><span>: Traditional</span></div>
              <div><span className={styles.bLabel}>Complexion</span><span>: Fair</span></div>
              <div><span className={styles.bLabel}>Sun Sign</span><span>: Pisces</span></div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
