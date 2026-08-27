// NXolutionz SaaS — Login Renewal + WhatsApp Daily Stock Report
// Data patterns from NXOL Staff, Inventory, Logins-MISPL, TEZ FIBER Support

const state = {
  role: null,
  currentPage: 'dashboard',
  user: {
    name: 'Ahmed Khan', phone: '0300-1234567', username: '0612083217',
    area: 'Gulgasht', houseCode: 'F-122', plan: '50 Mbps', planPrice: 5899,
    nextBill: '05 Sep 2026', avatar: 'AK'
  }
};

const plans = [
  { id: '10', name: '10 Mbps', price: 1899, speed: '10/10', features: ['Internet','HD TV','Phone'], popular: false },
  { id: '50', name: '50 Mbps', price: 5899, speed: '50/50', features: ['Internet','HD TV','Phone','Library'], popular: true },
  { id: '100', name: '100 Mbps', price: 9899, speed: '100/100', features: ['Internet','HD TV','Phone','Priority'], popular: false }
];

const invoices = [
  { id: 'INV-08', date: '01 Aug 2026', amount: 5899, status: 'Paid', method: 'JazzCash' },
  { id: 'INV-07', date: '01 Jul 2026', amount: 5899, status: 'Paid', method: 'EasyPaisa' },
  { id: 'INV-06', date: '01 Jun 2026', amount: 5899, status: 'Paid', method: 'Bank' }
];

const tickets = [
  { id: 'TKT-1042', subject: '0.0.0.0 IP assign - offline', status: 'Resolved', priority: 'High', username: '0612083217', assignee: 'MISPL Support' },
  { id: 'TKT-0987', subject: 'IPTV buffering / slow', status: 'Open', priority: 'High', username: '0612085486', assignee: 'Ahmad Jutt' },
  { id: 'TKT-1120', subject: 'Fiber signal low - Q 1449', status: 'Open', priority: 'High', username: '0612080934', assignee: 'Field Team' }
];

const customers = [
  { username: '0612083217', name: 'Ahmed Khan', house: 'F-122', plan: '50 Mbps', status: 'Active', due: 0, ip: 'Dynamic' },
  { username: '0612085486', name: 'Fatima Ali', house: 'Q-1449', plan: '100 Mbps', status: 'Active', due: 0, ip: 'Static' },
  { username: '0612080934', name: 'Bilal Hussain', house: 'H-1141', plan: '10 Mbps', status: 'Suspended', due: 1899, ip: '0.0.0.0' },
  { username: '0612083202', name: 'Sara Ahmed', house: 'B-633', plan: '50 Mbps', status: 'Active', due: 0, ip: 'Dynamic' },
  { username: '0612084012', name: 'Usman Raza', house: 'J-197', plan: '100 Mbps', status: 'Active', due: 0, ip: 'Static' },
  { username: '0612080870', name: 'Ayesha Malik', house: 'C-212', plan: '10 Mbps', status: 'Pending Install', due: 3999, ip: '-' },
  { username: '0612083214', name: 'Hassan Raza', house: 'Buch H-21', plan: '50 Mbps', status: 'Active', due: 0, ip: 'Dynamic' },
  { username: '0612083202', name: 'Nomi Malik', house: 'PGHSF C-571', plan: '100 Mbps', status: 'Active', due: 0, ip: 'Dynamic' }
];

const inventory = [
  { item: '2-Core Fiber', unit: 'm', stock: 2450, min: 500, used: 185 },
  { item: '6-Core Fiber', unit: 'm', stock: 380, min: 100, used: 50 },
  { item: 'Dualband/WiFi6 ONU', unit: 'pcs', stock: 47, min: 15, used: 6 },
  { item: 'Small ODF', unit: 'pcs', stock: 62, min: 20, used: 8 },
  { item: 'Large ODF', unit: 'pcs', stock: 18, min: 5, used: 2 },
  { item: 'Green Patch Cord', unit: 'pcs', stock: 95, min: 30, used: 9 },
  { item: '1x2 Splitter', unit: 'pcs', stock: 34, min: 10, used: 3 },
  { item: '1x4/4-Way Splitter', unit: 'pcs', stock: 22, min: 8, used: 2 },
  { item: 'Pigtail', unit: 'pcs', stock: 70, min: 20, used: 5 },
  { item: '12V Adapter', unit: 'pcs', stock: 41, min: 15, used: 1 },
  { item: 'RJ45', unit: 'pcs', stock: 210, min: 50, used: 17 },
  { item: '8-Port Switch', unit: 'pcs', stock: 9, min: 3, used: 1 }
];

const jobs = [
  { id: 'JOB-01', house: 'F-122', area: 'Gulgasht', tech: 'M Altaf', status: 'Completed', materials: '2c 20m, WiFi6, Large+Small ODF, Green patch', type: 'Install' },
  { id: 'JOB-02', house: 'Q-1449', area: 'Sector Q', tech: 'Field', status: 'Pending', materials: '-', type: 'Fiber Issue' },
  { id: 'JOB-03', house: 'Buch H-21', area: 'Buch', tech: 'Tech', status: 'Completed', materials: '2c 100m, Small ODF, Dualband, Patch', type: 'Install' },
  { id: 'JOB-04', house: 'PGHSF C-571', area: 'PGHSF', tech: 'Tech', status: 'Completed', materials: '2c 250m, 1x2, Small ODF, Dualband', type: 'Install' },
  { id: 'JOB-05', house: 'B-633', area: 'Sector B', tech: 'M Altaf', status: 'Completed', materials: '2c 70m, 4-way, Green, WiFi6, Small ODF', type: 'Install' },
  { id: 'JOB-06', house: 'C-212', area: 'Sector C', tech: 'M Altaf', status: 'In Progress', materials: '-', type: 'Install' }
];

// Login renewals (MISPL Logins chat — 6 month renewals, expiry → low traffic)
const renewals = [
  { username: '0612083217', name: 'Ahmed Khan', plan: '50 Mbps', expires: '10 Sep 2026', daysLeft: 13, status: 'Active', lastRenewed: '10 Mar 2026', period: '6 months' },
  { username: '0612085486', name: 'Fatima Ali', plan: '100 Mbps', expires: '28 Aug 2026', daysLeft: 0, status: 'Expiring Today', lastRenewed: '28 Feb 2026', period: '6 months' },
  { username: '0612080934', name: 'Bilal Hussain', plan: '10 Mbps', expires: '15 Aug 2026', daysLeft: -13, status: 'Expired', lastRenewed: '15 Feb 2026', period: '6 months' },
  { username: '0612083202', name: 'Sara Ahmed', plan: '50 Mbps', expires: '05 Sep 2026', daysLeft: 8, status: 'Active', lastRenewed: '05 Mar 2026', period: '6 months' },
  { username: '0612084012', name: 'Usman Raza', plan: '100 Mbps', expires: '01 Sep 2026', daysLeft: 4, status: 'Expiring Soon', lastRenewed: '01 Mar 2026', period: '6 months' },
  { username: '0612080870', name: 'Ayesha Malik', plan: '10 Mbps', expires: '20 Sep 2026', daysLeft: 23, status: 'Active', lastRenewed: '20 Mar 2026', period: '6 months' },
  { username: '0612083214', name: 'Hassan Raza', plan: '50 Mbps', expires: '12 Sep 2026', daysLeft: 15, status: 'Active', lastRenewed: '12 Mar 2026', period: '6 months' },
  { username: '0612083202', name: 'Nomi Malik', plan: '100 Mbps', expires: '30 Aug 2026', daysLeft: 2, status: 'Expiring Soon', lastRenewed: '28 Feb 2026', period: '6 months' }
];

// WhatsApp-style daily stock reports (NXOL INVENTORY group format)
const dailyStockReports = [
  { date: '28 Aug 2026', tech: 'M Altaf Sukhera', entries: [
    { house: 'F-122', materials: '2cor fiber 20mtr\nGreen patch kod\nWifi6 device\nLarge odf\nSmall odf complete' },
    { house: 'B-633', materials: '2 cor fiber 70mtr\n4 way sapliter 1\nGreen patch kod\nWifi6 device\nSmall odf complete' }
  ]},
  { date: '27 Aug 2026', tech: 'Field Tech', entries: [
    { house: 'Buch H-21', materials: '2core fiber 100M\nSmall odf\nDoulband onu\nPatch cord' },
    { house: 'PGHSF C-571', materials: '2 Core fiber 250M\n1*2 fiber sipleter\nSmall odf\nDoulband onu' }
  ]},
  { date: '26 Aug 2026', tech: 'M Altaf Sukhera', entries: [
    { house: 'J-197', materials: 'Small odf\nDoulband onu\nPatch cord' },
    { house: 'C-212', materials: '2 cor fiber 45mtr\nGreen patch kod\nWifi6 device\nSmall odf' }
  ]},
  { date: '25 Aug 2026', tech: 'Field Tech', entries: [
    { house: 'Q-1449', materials: 'Fiber signal check only - no material' },
    { house: 'H-1141', materials: '2cor fiber 80mtr\nGreen patch\nDualband\nSmall odf' }
  ]}
];

const areas = ['Gulgasht','Model Town','Wapda Town','Garden Town','Jinnah Town','Civil Line','Buch Villas','PGHSF','Sector A','Sector B','Sector C','Sector F','Sector H','Sector J','Sector Q','Sector R'];

function showView(v) {
  document.getElementById('login-form').classList.toggle('hidden', v !== 'login');
  document.getElementById('register-form').classList.toggle('hidden', v !== 'register');
}

function login(role) {
  state.role = role;
  document.getElementById('auth-view').classList.add('hidden');
  document.getElementById('app-view').classList.remove('hidden');
  ['nav-customer','nav-admin','nav-tech'].forEach(function(id) {
    document.getElementById(id).classList.add('hidden');
  });
  if (role === 'admin') {
    document.getElementById('role-label').textContent = 'Admin / MISPL';
    document.getElementById('user-name').textContent = 'Admin';
    document.getElementById('user-plan').textContent = 'Super Admin';
    document.getElementById('user-avatar').textContent = 'AD';
    document.getElementById('nav-admin').classList.remove('hidden');
    navTo('admin-dashboard');
  } else if (role === 'technician') {
    document.getElementById('role-label').textContent = 'Field Technician';
    document.getElementById('user-name').textContent = 'M Altaf Sukhera';
    document.getElementById('user-plan').textContent = 'Field Staff';
    document.getElementById('user-avatar').textContent = 'MA';
    document.getElementById('nav-tech').classList.remove('hidden');
    navTo('tech-jobs');
  } else {
    document.getElementById('role-label').textContent = 'Customer Portal';
    document.getElementById('user-name').textContent = state.user.name;
    document.getElementById('user-plan').textContent = state.user.plan;
    document.getElementById('user-avatar').textContent = state.user.avatar;
    document.getElementById('nav-customer').classList.remove('hidden');
    navTo('dashboard');
  }
}

function logout() {
  document.getElementById('app-view').classList.add('hidden');
  document.getElementById('auth-view').classList.remove('hidden');
  showView('login');
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('-translate-x-full');
  document.getElementById('sidebar-overlay').classList.toggle('hidden');
}

function navTo(page) {
  state.currentPage = page;
  document.querySelectorAll('.sidebar-link').forEach(function(el) {
    el.classList.remove('active');
    el.classList.add('text-slate-400');
  });
  var a = document.querySelector('[onclick="navTo(\'' + page + '\')"]');
  if (a) {
    a.classList.add('active');
    a.classList.remove('text-slate-400');
  }
  var titles = {
    dashboard: 'Dashboard', billing: 'Billing', plans: 'Plans', support: 'Support', profile: 'Profile',
    'admin-dashboard': 'Overview', 'admin-customers': 'Customers & Logins', 'admin-tickets': 'Tickets',
    'admin-plans': 'Plans', 'admin-coverage': 'Coverage', 'admin-inventory': 'Inventory', 'admin-jobs': 'Jobs',
    'admin-renewals': 'Login Renewals', 'admin-daily-stock': 'Daily Stock Report',
    'tech-jobs': 'My Jobs', 'tech-inventory': 'Stock', 'tech-report': 'Submit Report', 'tech-daily-stock': 'Daily Stock Report'
  };
  document.getElementById('page-title').textContent = titles[page] || page;
  if (window.innerWidth < 1024) {
    document.getElementById('sidebar').classList.add('-translate-x-full');
    document.getElementById('sidebar-overlay').classList.add('hidden');
  }
  renderPage(page);
}

function badge(s) {
  var m = {
    Paid: 'bg-green-500/15 text-green-400', Active: 'bg-green-500/15 text-green-400',
    Resolved: 'bg-green-500/15 text-green-400', Completed: 'bg-green-500/15 text-green-400',
    OK: 'bg-green-500/15 text-green-400', Open: 'bg-yellow-500/15 text-yellow-400',
    'In Progress': 'bg-blue-500/15 text-blue-400', Pending: 'bg-yellow-500/15 text-yellow-400',
    Suspended: 'bg-red-500/15 text-red-400', 'Pending Install': 'bg-orange-500/15 text-orange-400',
    'Low Stock': 'bg-red-500/15 text-red-400', Expired: 'bg-red-500/15 text-red-400',
    'Expiring Today': 'bg-red-500/15 text-red-400', 'Expiring Soon': 'bg-yellow-500/15 text-yellow-400'
  };
  return '<span class="px-2 py-0.5 rounded-full text-xs font-medium ' + (m[s] || 'bg-slate-500/15 text-slate-400') + '">' + s + '</span>';
}

function card(t, v, s) {
  return '<div class="bg-dark-900 border border-slate-800 rounded-xl p-5"><div class="text-slate-400 text-sm mb-1">' + t +
    '</div><div class="text-xl font-bold">' + v + '</div><div class="text-xs text-slate-500">' + s + '</div></div>';
}

function renderPage(page) {
  var main = document.getElementById('main-content');
  var map = {
    dashboard: customerDash, billing: billingPage, plans: plansPage, support: supportPage, profile: profilePage,
    'admin-dashboard': adminDash, 'admin-customers': adminCust, 'admin-tickets': adminTickets,
    'admin-plans': adminPlans, 'admin-coverage': adminCov, 'admin-inventory': adminInv, 'admin-jobs': adminJobs,
    'admin-renewals': adminRenewals, 'admin-daily-stock': adminDailyStock,
    'tech-jobs': techJobs, 'tech-inventory': techInv, 'tech-report': techReport, 'tech-daily-stock': techDailyStock
  };
  main.innerHTML = (map[page] || function() { return '<p>Not found</p>'; })();
}

function customerDash() {
  return '<div class="space-y-6"><div class="bg-gradient-to-r from-brand-900/40 to-dark-800 rounded-2xl p-6 border border-brand-800/30">' +
    '<h2 class="text-xl font-bold">Assalam-o-Alaikum, ' + state.user.name.split(' ')[0] + ' 👋</h2>' +
    '<p class="text-slate-400 text-sm">Username: <span class="text-brand-400 font-mono">' + state.user.username +
    '</span> · House: ' + state.user.houseCode + '</p></div>' +
    '<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">' +
    card('Plan', state.user.plan, 'Rs. ' + state.user.planPrice.toLocaleString() + '/mo') +
    card('Next Bill', state.user.nextBill, 'Rs. ' + state.user.planPrice.toLocaleString()) +
    card('Balance', 'Rs. 0', 'Clear') + card('Login', 'Online', 'IP Dynamic') + '</div>' +
    '<div class="bg-dark-900 border border-slate-800 rounded-xl p-6"><h3 class="font-semibold mb-3">Quick Actions</h3>' +
    '<div class="flex flex-wrap gap-3">' +
    '<button onclick="navTo(\'billing\')" class="px-4 py-2 rounded-lg bg-brand-600 text-white text-sm">Pay Bill</button>' +
    '<button onclick="navTo(\'plans\')" class="px-4 py-2 rounded-lg bg-dark-800 border border-slate-700 text-sm">Upgrade</button>' +
    '<button onclick="navTo(\'support\')" class="px-4 py-2 rounded-lg bg-dark-800 border border-slate-700 text-sm">New Ticket</button></div></div></div>';
}

function billingPage() {
  return '<div class="space-y-6"><div class="bg-dark-900 border border-slate-800 rounded-xl p-6">' +
    '<h3 class="text-lg font-semibold">Balance: <span class="text-green-400">Rs. 0</span></h3>' +
    '<p class="text-slate-400 text-sm mb-4">Due ' + state.user.nextBill + ' · ' + state.user.username + '</p>' +
    '<button onclick="alert(\'JazzCash / EasyPaisa payment\')" class="px-5 py-2.5 rounded-xl bg-brand-600 text-white">Pay Now</button></div>' +
    '<div class="bg-dark-900 border border-slate-800 rounded-xl p-6"><h3 class="font-semibold mb-3">Invoices</h3><table class="w-full text-sm">' +
    '<tr class="text-slate-400 border-b border-slate-800"><th class="pb-2 text-left">ID</th><th class="pb-2 text-left">Date</th><th class="pb-2 text-left">Amount</th><th class="pb-2 text-left">Status</th></tr>' +
    invoices.map(function(i) {
      return '<tr class="border-b border-slate-800/50"><td class="py-2 text-brand-400">' + i.id + '</td><td class="py-2">' + i.date +
        '</td><td class="py-2">Rs. ' + i.amount + '</td><td class="py-2">' + badge(i.status) + '</td></tr>';
    }).join('') + '</table></div></div>';
}

function plansPage() {
  return '<div class="grid grid-cols-1 md:grid-cols-3 gap-5">' + plans.map(function(p) {
    return '<div class="bg-dark-900 border ' + (p.popular ? 'border-brand-500' : 'border-slate-800') + ' rounded-2xl p-6">' +
      '<div class="text-lg font-bold">' + p.name + '</div><div class="text-2xl font-extrabold text-brand-400">Rs. ' + p.price.toLocaleString() +
      '</div><div class="text-sm text-slate-400 mb-3">' + p.speed + '</div><ul class="text-sm mb-4">' +
      p.features.map(function(f) { return '<li>• ' + f + '</li>'; }).join('') + '</ul>' +
      '<button class="w-full py-2 rounded-xl ' + (state.user.plan === p.name ? 'bg-slate-800 text-slate-400' : 'bg-brand-600 text-white') + '">' +
      (state.user.plan === p.name ? 'Current' : 'Select') + '</button></div>';
  }).join('') + '</div>';
}

function supportPage() {
  return '<div class="space-y-6"><div class="bg-dark-900 border border-slate-800 rounded-xl p-6">' +
    '<h3 class="font-semibold mb-3">New Ticket</h3>' +
    '<input id="ticket-subject" class="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-slate-700 mb-3 outline-none" placeholder="e.g. 0.0.0.0 IP / Fiber signal low" />' +
    '<select class="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-slate-700 mb-3 outline-none"><option>Login/IP (0.0.0.0)</option><option>Speed</option><option>IPTV</option><option>Fiber Signal</option><option>Static IP</option></select>' +
    '<button onclick="alert(\'Ticket sent to NXOL Staff / MISPL\')" class="px-5 py-2.5 rounded-xl bg-brand-600 text-white">Submit</button></div>' +
    '<div class="bg-dark-900 border border-slate-800 rounded-xl p-6"><h3 class="font-semibold mb-3">Tickets</h3><table class="w-full text-sm">' +
    '<tr class="text-slate-400 border-b border-slate-800"><th class="pb-2 text-left">ID</th><th class="pb-2 text-left">Subject</th><th class="pb-2 text-left">Status</th><th class="pb-2 text-left">Assignee</th></tr>' +
    tickets.map(function(t) {
      return '<tr class="border-b border-slate-800/50"><td class="py-2 text-brand-400">' + t.id + '</td><td class="py-2">' + t.subject +
        '</td><td class="py-2">' + badge(t.status) + '</td><td class="py-2 text-slate-400">' + t.assignee + '</td></tr>';
    }).join('') + '</table></div></div>';
}

function profilePage() {
  return '<div class="bg-dark-900 border border-slate-800 rounded-xl p-6 max-w-lg">' +
    '<div class="font-bold text-lg mb-1">' + state.user.name + '</div><div class="font-mono text-brand-400 text-sm mb-4">' +
    state.user.username + '</div><div class="space-y-3 text-sm"><div>Phone: ' + state.user.phone +
    '</div><div>House: ' + state.user.houseCode + '</div><div>Area: ' + state.user.area + '</div></div></div>';
}

function adminDash() {
  var expiring = renewals.filter(function(r) { return r.daysLeft <= 7; }).length;
  return '<div class="space-y-6"><div class="grid grid-cols-2 lg:grid-cols-4 gap-4">' +
    card('Customers', '1,248', '+42 mo') + card('Revenue', 'Rs. 48.2L', '+8.3%') +
    card('Open Tickets', '23', '5 IP issues') + card('Logins expiring ≤7d', String(expiring), 'Renew now') + '</div>' +
    '<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">' +
    '<div class="bg-dark-900 border border-slate-800 rounded-xl p-6"><h3 class="font-semibold mb-3">Recent (Staff / MISPL)</h3>' +
    '<div class="space-y-2 text-sm"><div>• Install done — Buch H-21 (2c 100m + Dualband)</div>' +
    '<div>• IP issue 0612083217 (0.0.0.0) → MISPL recheck</div>' +
    '<div>• Login renewals due — 0612085486, 0612084012</div></div></div>' +
    '<div class="bg-dark-900 border border-slate-800 rounded-xl p-6"><h3 class="font-semibold mb-3">Quick links</h3>' +
    '<div class="flex flex-wrap gap-2">' +
    '<button onclick="navTo(\'admin-renewals\')" class="px-3 py-2 rounded-lg bg-brand-600 text-white text-sm">Login Renewals</button>' +
    '<button onclick="navTo(\'admin-daily-stock\')" class="px-3 py-2 rounded-lg bg-dark-800 border border-slate-700 text-sm">Daily Stock Report</button>' +
    '<button onclick="navTo(\'admin-inventory\')" class="px-3 py-2 rounded-lg bg-dark-800 border border-slate-700 text-sm">Inventory</button></div></div></div></div>';
}

function adminCust() {
  return '<div class="bg-dark-900 border border-slate-800 rounded-xl overflow-hidden"><table class="w-full text-sm">' +
    '<tr class="text-slate-400 border-b border-slate-800 bg-dark-800/50"><th class="px-3 py-2 text-left">Username</th><th class="px-3 py-2 text-left">Name</th><th class="px-3 py-2 text-left">House</th><th class="px-3 py-2 text-left">IP</th><th class="px-3 py-2 text-left">Status</th><th class="px-3 py-2 text-left">Due</th></tr>' +
    customers.map(function(c) {
      return '<tr class="border-b border-slate-800/50"><td class="px-3 py-2 font-mono text-brand-400">' + c.username +
        '</td><td class="px-3 py-2">' + c.name + '</td><td class="px-3 py-2">' + c.house +
        '</td><td class="px-3 py-2 ' + (c.ip === '0.0.0.0' ? 'text-red-400 font-medium' : '') + '">' + c.ip +
        '</td><td class="px-3 py-2">' + badge(c.status) + '</td><td class="px-3 py-2 ' +
        (c.due > 0 ? 'text-red-400' : 'text-green-400') + '">' + (c.due > 0 ? 'Rs.' + c.due : '—') + '</td></tr>';
    }).join('') + '</table></div><p class="text-sm text-amber-300 mt-3">From MISPL: 0.0.0.0 IP → offline. Restart ONT + MikroTik recheck.</p>';
}

function adminTickets() {
  return '<div class="bg-dark-900 border border-slate-800 rounded-xl overflow-hidden"><table class="w-full text-sm">' +
    '<tr class="text-slate-400 border-b border-slate-800 bg-dark-800/50"><th class="px-3 py-2 text-left">ID</th><th class="px-3 py-2 text-left">Subject</th><th class="px-3 py-2 text-left">User</th><th class="px-3 py-2 text-left">Status</th><th class="px-3 py-2 text-left">Assignee</th></tr>' +
    tickets.map(function(t) {
      return '<tr class="border-b border-slate-800/50"><td class="px-3 py-2 text-brand-400">' + t.id + '</td><td class="px-3 py-2">' +
        t.subject + '</td><td class="px-3 py-2 font-mono text-xs">' + t.username + '</td><td class="px-3 py-2">' +
        badge(t.status) + '</td><td class="px-3 py-2 text-slate-400">' + t.assignee + '</td></tr>';
    }).join('') + '</table></div>';
}

function adminPlans() {
  return '<div class="grid grid-cols-1 md:grid-cols-3 gap-4">' + plans.map(function(p) {
    return '<div class="bg-dark-900 border border-slate-800 rounded-xl p-5"><div class="font-bold">' + p.name +
      '</div><div class="text-xl text-brand-400 font-bold">Rs. ' + p.price.toLocaleString() +
      '</div><div class="text-sm text-slate-400">' + p.speed + '</div></div>';
  }).join('') + '</div>';
}

function adminCov() {
  return '<div class="bg-dark-900 border border-slate-800 rounded-xl p-6"><h3 class="font-semibold mb-4">Coverage (Website + Staff chats)</h3>' +
    '<div class="grid grid-cols-2 sm:grid-cols-4 gap-2">' + areas.map(function(a) {
      return '<div class="px-3 py-2 rounded-lg bg-dark-800 border border-slate-700 text-sm">' + a + '</div>';
    }).join('') + '</div></div>';
}

function adminInv() {
  return '<div class="bg-dark-900 border border-slate-800 rounded-xl overflow-hidden"><table class="w-full text-sm">' +
    '<tr class="text-slate-400 border-b border-slate-800 bg-dark-800/50"><th class="px-3 py-2 text-left">Item</th><th class="px-3 py-2 text-left">Stock</th><th class="px-3 py-2 text-left">Min</th><th class="px-3 py-2 text-left">Used</th><th class="px-3 py-2 text-left">Status</th></tr>' +
    inventory.map(function(i) {
      return '<tr class="border-b border-slate-800/50"><td class="px-3 py-2">' + i.item + '</td><td class="px-3 py-2 ' +
        (i.stock <= i.min ? 'text-red-400 font-bold' : '') + '">' + i.stock + ' ' + i.unit +
        '</td><td class="px-3 py-2 text-slate-400">' + i.min + '</td><td class="px-3 py-2">' + i.used +
        '</td><td class="px-3 py-2">' + (i.stock <= i.min ? badge('Low Stock') : badge('OK')) + '</td></tr>';
    }).join('') + '</table></div><p class="text-xs text-slate-500 mt-2">Typical job: 2-core fiber + Dualband/WiFi6 ONU + Small ODF + Green patch ± splitter</p>';
}

function adminJobs() {
  return '<div class="bg-dark-900 border border-slate-800 rounded-xl overflow-hidden"><table class="w-full text-sm">' +
    '<tr class="text-slate-400 border-b border-slate-800 bg-dark-800/50"><th class="px-3 py-2 text-left">Job</th><th class="px-3 py-2 text-left">House</th><th class="px-3 py-2 text-left">Area</th><th class="px-3 py-2 text-left">Tech</th><th class="px-3 py-2 text-left">Materials</th><th class="px-3 py-2 text-left">Status</th></tr>' +
    jobs.map(function(j) {
      return '<tr class="border-b border-slate-800/50"><td class="px-3 py-2 text-brand-400">' + j.id + '</td><td class="px-3 py-2 font-medium">' +
        j.house + '</td><td class="px-3 py-2">' + j.area + '</td><td class="px-3 py-2">' + j.tech +
        '</td><td class="px-3 py-2 text-xs text-slate-400">' + j.materials + '</td><td class="px-3 py-2">' + badge(j.status) + '</td></tr>';
    }).join('') + '</table></div>';
}

// ========== LOGIN RENEWAL WORKFLOW ==========
function adminRenewals() {
  var expiring = renewals.filter(function(r) { return r.daysLeft <= 7; });
  var expired = renewals.filter(function(r) { return r.daysLeft < 0; });
  var html = '<div class="space-y-6">';
  html += '<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">';
  html += card('Total Logins', String(renewals.length), 'Tracked');
  html += card('Expiring ≤7 days', String(expiring.length), 'Action needed');
  html += card('Already Expired', String(expired.length), 'Traffic drop risk');
  html += '</div>';
  html += '<div class="bg-amber-900/20 border border-amber-700/40 rounded-xl p-4 text-sm text-amber-200">';
  html += '<strong>From MISPL chats:</strong> Expired logins cause low traffic / offline users. Renew for 6 months. After renew → recheck MikroTik if 0.0.0.0 IP.';
  html += '</div>';
  html += '<div class="bg-dark-900 border border-slate-800 rounded-xl overflow-hidden">';
  html += '<div class="p-4 border-b border-slate-800 flex flex-wrap gap-2 justify-between items-center">';
  html += '<h3 class="font-semibold">Login Renewal Queue</h3>';
  html += '<div class="flex gap-2">';
  html += '<button onclick="bulkRenew()" class="px-3 py-1.5 text-xs rounded-lg bg-brand-600 hover:bg-brand-500 text-white">Bulk Renew Selected</button>';
  html += '<button onclick="alert(\'Export CSV for Accounts team\')" class="px-3 py-1.5 text-xs rounded-lg bg-dark-800 border border-slate-700">Export</button>';
  html += '</div></div>';
  html += '<table class="w-full text-sm"><thead><tr class="text-left text-slate-400 border-b border-slate-800 bg-dark-800/50">';
  html += '<th class="px-3 py-2"><input type="checkbox" id="renew-all" onclick="toggleAllRenew(this)" /></th>';
  html += '<th class="px-3 py-2">Username</th><th class="px-3 py-2">Name</th><th class="px-3 py-2">Plan</th>';
  html += '<th class="px-3 py-2">Expires</th><th class="px-3 py-2">Days Left</th><th class="px-3 py-2">Status</th><th class="px-3 py-2">Action</th>';
  html += '</tr></thead><tbody>';
  renewals.forEach(function(r) {
    var dayCls = r.daysLeft < 0 ? 'text-red-400 font-bold' : (r.daysLeft <= 7 ? 'text-yellow-400 font-medium' : 'text-slate-300');
    html += '<tr class="border-b border-slate-800/50 hover:bg-dark-800/30">';
    html += '<td class="px-3 py-2"><input type="checkbox" class="renew-cb" data-user="' + r.username + '" /></td>';
    html += '<td class="px-3 py-2 font-mono text-brand-400">' + r.username + '</td>';
    html += '<td class="px-3 py-2">' + r.name + '</td>';
    html += '<td class="px-3 py-2">' + r.plan + '</td>';
    html += '<td class="px-3 py-2">' + r.expires + '</td>';
    html += '<td class="px-3 py-2 ' + dayCls + '">' + r.daysLeft + '</td>';
    html += '<td class="px-3 py-2">' + badge(r.status) + '</td>';
    html += '<td class="px-3 py-2"><button onclick="renewLogin(\'' + r.username + '\',\'' + r.name + '\')" class="text-brand-400 hover:text-brand-300 text-xs font-medium">Renew 6m</button></td>';
    html += '</tr>';
  });
  html += '</tbody></table></div>';
  html += '<div class="bg-dark-900 border border-slate-800 rounded-xl p-5">';
  html += '<h3 class="font-semibold mb-3">Renewal Workflow</h3>';
  html += '<ol class="text-sm text-slate-300 space-y-2 list-decimal list-inside">';
  html += '<li>Accounts / Admin opens this page — see who is expiring or expired</li>';
  html += '<li>Payment confirmed (JazzCash / EasyPaisa / Bank) if required</li>';
  html += '<li>Click <strong>Renew 6m</strong> (or bulk) → expiry extended, status → Active</li>';
  html += '<li>If user still offline / 0.0.0.0 IP → escalate to MISPL Technical Support for MikroTik recheck</li>';
  html += '<li>Optional: notify customer via WhatsApp / SMS</li>';
  html += '</ol></div></div>';
  return html;
}

function renewLogin(username, name) {
  if (!confirm('Renew login ' + username + ' (' + name + ') for 6 months?\n\nMatches MISPL Accounts flow.')) return;
  var r = renewals.find(function(x) { return x.username === username; });
  if (r) {
    r.daysLeft = 180;
    r.status = 'Active';
    r.expires = '28 Feb 2027';
    r.lastRenewed = '28 Aug 2026';
    r.period = '6 months';
  }
  alert('Renewed: ' + username + '\nNew expiry: 28 Feb 2027 (6 months)\n\nIf traffic still low → ask MISPL to recheck MikroTik.');
  navTo('admin-renewals');
}

function toggleAllRenew(el) {
  document.querySelectorAll('.renew-cb').forEach(function(cb) { cb.checked = el.checked; });
}

function bulkRenew() {
  var selected = [];
  document.querySelectorAll('.renew-cb:checked').forEach(function(cb) {
    selected.push(cb.getAttribute('data-user'));
  });
  if (!selected.length) { alert('Select at least one login'); return; }
  if (!confirm('Bulk renew ' + selected.length + ' login(s) for 6 months?')) return;
  selected.forEach(function(u) {
    var r = renewals.find(function(x) { return x.username === u; });
    if (r) {
      r.daysLeft = 180;
      r.status = 'Active';
      r.expires = '28 Feb 2027';
      r.lastRenewed = '28 Aug 2026';
    }
  });
  alert('Bulk renewed ' + selected.length + ' logins for 6 months.');
  navTo('admin-renewals');
}

// ========== WHATSAPP-STYLE DAILY STOCK REPORT ==========
function adminDailyStock() { return dailyStockPage(true); }
function techDailyStock() { return dailyStockPage(false); }

function dailyStockPage(isAdmin) {
  var today = '28 Aug 2026';
  var html = '<div class="space-y-6">';
  html += '<div class="bg-gradient-to-r from-brand-900/40 to-dark-800 rounded-xl p-5 border border-brand-800/30">';
  html += '<h2 class="font-bold text-lg">Daily Stock Report</h2>';
  html += '<p class="text-sm text-slate-400">WhatsApp-style format from <strong>🚧 NXOL INVENTORY</strong> — submit after each job or end of day</p></div>';

  html += '<div class="bg-dark-900 border border-slate-800 rounded-xl p-6">';
  html += '<h3 class="font-semibold mb-3">Submit Today\'s Report <span class="text-slate-500 text-sm font-normal">(' + today + ')</span></h3>';
  html += '<p class="text-xs text-slate-500 mb-4">Same style as WhatsApp: House code, then materials line by line</p>';
  html += '<textarea id="daily-stock-input" rows="7" class="w-full px-4 py-3 rounded-xl bg-dark-800 border border-slate-700 focus:border-brand-500 outline-none font-mono text-sm" placeholder="F-122\n2cor fiber 20mtr\nGreen patch kod\nWifi6 device\nSmall odf complete\n\nBuch H-21\n2core fiber 100M\nSmall odf\nDoulband onu\nPatch cord"></textarea>';
  html += '<div class="flex flex-wrap gap-2 mt-3">';
  html += '<button onclick="submitDailyStock()" class="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-medium text-sm">Submit Report</button>';
  html += '<button onclick="fillSampleStock()" class="px-4 py-2.5 rounded-xl bg-dark-800 border border-slate-700 text-sm">Fill Sample</button>';
  html += '</div></div>';

  html += '<div class="bg-dark-900 border border-slate-800 rounded-xl p-6">';
  html += '<h3 class="font-semibold mb-4">Recent Daily Reports</h3>';
  dailyStockReports.forEach(function(rep) {
    html += '<div class="mb-5 last:mb-0">';
    html += '<div class="flex items-center gap-2 mb-2"><span class="text-brand-400 font-medium text-sm">' + rep.date + '</span>';
    html += '<span class="text-slate-500 text-xs">· ' + rep.tech + '</span></div>';
    html += '<div class="space-y-2">';
    rep.entries.forEach(function(e) {
      html += '<div class="bg-dark-800/60 border border-slate-700/50 rounded-lg p-3 font-mono text-xs">';
      html += '<div class="text-brand-300 font-semibold mb-1">' + e.house + '</div>';
      html += '<div class="text-slate-400 whitespace-pre-wrap">' + e.materials + '</div></div>';
    });
    html += '</div></div>';
  });
  html += '</div>';

  html += '<div class="bg-dark-900 border border-slate-800 rounded-xl p-5">';
  html += '<h3 class="font-semibold mb-3">Today\'s Consumption Summary</h3>';
  html += '<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">';
  html += '<div class="bg-dark-800 rounded-lg p-3"><div class="text-slate-400 text-xs">2-Core Fiber</div><div class="font-bold">185 m</div></div>';
  html += '<div class="bg-dark-800 rounded-lg p-3"><div class="text-slate-400 text-xs">WiFi6 / Dualband ONU</div><div class="font-bold">6 pcs</div></div>';
  html += '<div class="bg-dark-800 rounded-lg p-3"><div class="text-slate-400 text-xs">Small ODF</div><div class="font-bold">8 pcs</div></div>';
  html += '<div class="bg-dark-800 rounded-lg p-3"><div class="text-slate-400 text-xs">Green Patch</div><div class="font-bold">9 pcs</div></div>';
  html += '</div>';
  if (isAdmin) {
    html += '<p class="text-xs text-slate-500 mt-3">Admin can deduct from Inventory after verifying reports.</p>';
  }
  html += '</div></div>';
  return html;
}

function fillSampleStock() {
  var el = document.getElementById('daily-stock-input');
  if (el) {
    el.value = 'F-122\n2cor fiber 20mtr\nGreen patch kod\nWifi6 device\nLarge odf\nSmall odf complete\n\nBuch H-21\n2core fiber 100M\nSmall odf\nDoulband onu\nPatch cord';
  }
}

function submitDailyStock() {
  var el = document.getElementById('daily-stock-input');
  var text = el ? el.value.trim() : '';
  if (!text) {
    alert('Please enter at least one house + materials (WhatsApp format)');
    return;
  }
  var preview = text.split('\n').slice(0, 5).join('\n');
  alert('Daily stock report submitted!\n\n' + preview + '\n...\n\nAppears under Admin → Daily Stock Report. Can deduct inventory.');
  if (el) el.value = '';
}

function techJobs() {
  return '<div class="space-y-4"><div class="bg-brand-900/30 border border-brand-800/40 rounded-xl p-4"><h2 class="font-bold">Field Jobs</h2>' +
    '<p class="text-sm text-slate-400">Report materials after install (Inventory group format)</p></div>' +
    jobs.map(function(j) {
      return '<div class="bg-dark-900 border border-slate-800 rounded-xl p-4"><div class="flex justify-between"><div><div class="font-bold">' +
        j.house + '</div><div class="text-sm text-slate-400">' + j.area + ' · ' + j.type + '</div></div>' + badge(j.status) +
        '</div><div class="text-sm text-slate-400 mt-2 mb-2">Materials: ' + j.materials + '</div>' +
        '<button onclick="navTo(\'tech-report\')" class="px-3 py-1.5 text-xs rounded-lg bg-brand-600 text-white mr-2">Submit Report</button>' +
        '<button onclick="navTo(\'tech-daily-stock\')" class="px-3 py-1.5 text-xs rounded-lg bg-dark-800 border border-slate-700">Daily Stock</button></div>';
    }).join('') + '</div>';
}

function techInv() {
  return '<div class="grid grid-cols-2 sm:grid-cols-3 gap-3">' + inventory.slice(0, 9).map(function(i) {
    return '<div class="bg-dark-900 border border-slate-800 rounded-xl p-4 text-center"><div class="text-xs text-slate-400">' +
      i.item + '</div><div class="text-xl font-bold ' + (i.stock <= i.min ? 'text-red-400' : '') + '">' + i.stock +
      '</div><div class="text-xs text-slate-500">' + i.unit + '</div></div>';
  }).join('') + '</div>';
}

function techReport() {
  return '<div class="max-w-lg bg-dark-900 border border-slate-800 rounded-xl p-6">' +
    '<h3 class="font-semibold mb-1">Submit Material Report</h3><p class="text-sm text-slate-400 mb-4">Same format as NXOL INVENTORY WhatsApp</p>' +
    '<input class="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-slate-700 mb-3 outline-none" placeholder="House: F-122 / Buch H-21 / PGHSF C-571" />' +
    '<input type="number" class="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-slate-700 mb-3 outline-none" placeholder="2-Core Fiber meters" />' +
    '<div class="grid grid-cols-2 gap-2 mb-3"><select class="px-3 py-2.5 rounded-xl bg-dark-800 border border-slate-700 outline-none"><option>Dualband ONU</option><option>WiFi6</option></select>' +
    '<select class="px-3 py-2.5 rounded-xl bg-dark-800 border border-slate-700 outline-none"><option>Small ODF</option><option>Large ODF</option></select></div>' +
    '<div class="grid grid-cols-2 gap-2 mb-3"><select class="px-3 py-2.5 rounded-xl bg-dark-800 border border-slate-700 outline-none"><option>Green Patch</option><option>None</option></select>' +
    '<select class="px-3 py-2.5 rounded-xl bg-dark-800 border border-slate-700 outline-none"><option>No Splitter</option><option>1x2</option><option>1x4</option></select></div>' +
    '<button onclick="alert(\'Report submitted. Stock updated.\')" class="w-full py-3 rounded-xl bg-brand-600 text-white font-semibold">Submit Report</button>' +
    '<button onclick="navTo(\'tech-daily-stock\')" class="w-full mt-2 py-2 rounded-xl bg-dark-800 border border-slate-700 text-sm">Or use Daily Stock Report (WhatsApp paste)</button></div>';
}

showView('login');
