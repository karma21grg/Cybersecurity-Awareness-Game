// Each mission contains a short lesson and a scenario quiz with explanatory feedback.
const missions = [{
    "title": "Phishing 101",
    "icon": "🎣",
    "topic": "Email safety",
    "desc": "An urgent message. A tempting link. Learn when to pause.",
    "learn": "Phishing is a deceptive message designed to make you reveal information, send money, or open harmful links. It can arrive by email, text, or social media. A familiar logo does not prove a message is real.",
    "tips": [
        "Watch for urgency, unexpected requests, and unusual sender addresses.",
        "Open the official app or type a known website address yourself.",
        "Report suspicious messages using your school’s reporting process."
    ],
    "scene": "FICTIONAL SEMO TRAINING EMAIL — not sent by the university\nOffice being represented: IT Help Desk\nOfficial contact for comparison: helpdesk@semo.edu\nActual sender in this example: account-alerts@semo-support.example\nSubject: Your SEMO account closes in 20 minutes!\n\nBefore your next Canvas class, click our link and enter your SE Key password to stop your account from being closed.",
    "q": "What is the safest next step?",
    "options": [
        "Click quickly so the account stays open.",
        "Reply with your password.",
        "Ignore the link and independently contact the SEMO IT Help Desk."
    ],
    "answer": 2,
    "why": "The sender uses semo-support.example, not the official SEMO contact shown above. The urgency and request for your SE Key password are red flags. Independently contact helpdesk@semo.edu through a new message or use the official IT website. Do not reply to the suspicious sender."
}, {
    "title": "Inbox detective",
    "icon": "🕵️",
    "topic": "Spot the red flags",
    "desc": "Inspect a scholarship email before you trust it.",
    "learn": "A convincing email may copy names, logos, and writing styles. Check the full sender address and destination of a link. Correct spelling and HTTPS alone do not establish legitimacy.",
    "tips": [
        "Check the actual domain, not just the display name.",
        "On desktop, hovering can reveal a link destination; on mobile, avoid opening uncertain links.",
        "Verify unexpected scholarship claims with your financial aid office."
    ],
    "scene": "FICTIONAL SEMO TRAINING EMAIL — not sent by the university\nOffice being represented: Admissions & New Student Programs\nOfficial contact for comparison: admissions@semo.edu\nActual sender in this example: awards@semo-admissions.example\nSubject: SEMO welcome scholarship — claim today\n\nWelcome, Redhawk! You were selected for a $2,000 award. Send a $50 gift card code to secure your place. Do not contact other university offices.",
    "q": "Which detail is the clearest warning sign?",
    "options": [
        "The message mentions financial aid.",
        "It requests a gift card payment to receive an award.",
        "It includes the university’s name."
    ],
    "answer": 1,
    "why": "Gift card payment and pressure to avoid verification are warning signs. Independently confirm the claim with admissions@semo.edu or the relevant official office. A SEMO name in the message is not proof of authenticity."
}, {
    "title": "Password power-up",
    "icon": "🔐",
    "topic": "Account protection",
    "desc": "Protect your SE Key and personal accounts with unique passwords.",
    "learn": "Use a long, unique password for every account. A password manager can generate and store passwords. Reusing a password means one breach can endanger several accounts.",
    "tips": [
        "Use a password manager and long unique passwords.",
        "Never enter actual passwords into this game.",
        "Change a compromised password and any reused copies promptly."
    ],
    "scene": "FICTIONAL SEMO TRAINING EMAIL — not sent by the university\nOffice being represented: IT Help Desk\nOfficial contact for comparison: helpdesk@semo.edu\nActual sender in this example: helpdesk@semo.edu\nSubject: Password reuse safety reminder\n\nTraining situation: a reminder tells students to use unique passwords and visit the official SEMO account page independently. Separately, you learn your gaming password was breached. You reused it for your SEMO account.",
    "q": "What should you do about the reused password?",
    "options": [
        "Change both affected passwords to different unique passwords and enable MFA.",
        "Add one digit to both passwords.",
        "Keep the email password because school accounts are different."
    ],
    "answer": 0,
    "why": "Change the exposed gaming password and your reused SEMO password to different unique passwords through the official services. Enable supported MFA and review sessions. This reminder has no obvious malicious request, but the sender address alone still cannot prove authenticity."
}, {
    "title": "The international office impersonator",
    "icon": "🎭",
    "topic": "Social engineering",
    "desc": "A familiar DSO address does not make every request trustworthy.",
    "learn": "Social engineering manipulates people using authority, urgency, fear, or trust. An attacker may pretend to be IT staff, a professor, or a classmate. Verify sensitive requests through a separate trusted channel.",
    "tips": [
        "Do not share passwords or one-time verification codes.",
        "A claimed title is not proof of identity.",
        "End suspicious calls and contact the office using a known number."
    ],
    "scene": "FICTIONAL SEMO TRAINING EMAIL — not sent by the university\nOffice being represented: International student services / DSO\nOfficial contact for comparison: dso@semo.edu\nActual sender in this example: student-review@semo-dso.example\nSubject: Urgent international student account review\n\nTo finish your student record review, reply with your university password and the six-digit login code sent to your phone. We need them within 15 minutes.",
    "q": "What should a SEMO student do?",
    "options": [
        "Send the password and code because the message mentions DSO.",
        "Send only the six-digit code.",
        "Refuse, verify with dso@semo.edu through a new message, and report the suspicious request to IT."
    ],
    "answer": 2,
    "why": "An attacker can impersonate an office you recognize. Do not send passwords or login codes. Verify the request independently with the real DSO contact and report account-security concerns to helpdesk@semo.edu. This scenario describes a made-up cyber scam, not an actual university procedure."
}, {
    "title": "Think before you post",
    "icon": "📸",
    "topic": "Social media",
    "desc": "Keep campus memories without exposing personal details.",
    "learn": "Public posts can expose your routines, location, and identity details. Privacy settings help, but screenshots and resharing can spread content beyond your audience.",
    "tips": [
        "Avoid posting IDs, ticket barcodes, addresses, and real-time location.",
        "Check privacy settings and app permissions.",
        "Ask before sharing someone else’s photo or personal information."
    ],
    "scene": "FICTIONAL SEMO TRAINING EMAIL — not sent by the university\nOffice being represented: Admissions & New Student Programs\nOfficial contact for comparison: admissions@semo.edu\nActual sender in this example: admissions@semo.edu\nSubject: Share your Redhawk welcome photo\n\nFictional example: you see an invitation to share a first-day campus photo. Your photo shows your student ID number, barcode, and the class schedule pinned behind you.",
    "q": "Before sharing the photo, what is the safest choice?",
    "options": [
        "Hide the ID details and schedule, check the audience, and verify any submission link independently.",
        "Publish it unchanged because SEMO students will recognize the ID.",
        "Add your room number so new friends can find you."
    ],
    "answer": 0,
    "why": "Protect your ID details, location, and routine before posting. A university-themed invitation does not remove privacy risks. Verify unfamiliar requests through the official office rather than trusting the displayed sender alone."
}, {
    "title": "Wi-Fi without worry",
    "icon": "📶",
    "topic": "Public networks",
    "desc": "Choose a safer connection at the campus café.",
    "learn": "A Wi-Fi name can be copied by an attacker. Modern HTTPS protects data in transit to a site, but it does not prove that a site or hotspot is legitimate. Prefer trusted networks for sensitive activity.",
    "tips": [
        "Confirm the correct network with staff.",
        "Disable automatic connection to unknown hotspots.",
        "Use mobile data or a trusted connection for sensitive transactions."
    ],
    "scene": "FICTIONAL SEMO TRAINING EMAIL — not sent by the university\nOffice being represented: IT Help Desk\nOfficial contact for comparison: helpdesk@semo.edu\nActual sender in this example: wifi-upgrade@semo-network.example\nSubject: Fast Wi-Fi for SEMO students\n\nConnect to the hotspot SEMO_FreeFast at the café. On its unfamiliar sign-in page, enter your SE Key password to get priority access before class.",
    "q": "What should you do?",
    "options": [
        "Enter your school password to get fast Wi-Fi.",
        "Disconnect, independently ask SEMO IT about the network, and use a trusted connection or mobile data.",
        "Try both networks with the same password."
    ],
    "answer": 1,
    "why": "This is a fictional hotspot name, not a verified SEMO network. The email comes from an unrelated domain and directs you to an unfamiliar password page. Check official IT instructions or contact helpdesk@semo.edu independently before connecting."
}, {
    "title": "Double your defense",
    "icon": "🛡️",
    "topic": "MFA",
    "desc": "Add a second barrier and spot suspicious sign-in prompts.",
    "learn": "Multi-factor authentication (MFA) uses more than one type of evidence, such as a password and an authenticator. Passkeys and security keys can provide phishing-resistant sign-in when supported.",
    "tips": [
        "Enable MFA on important accounts.",
        "Approve prompts only for sign-ins you started.",
        "Keep recovery codes somewhere secure, separate from your everyday login."
    ],
    "scene": "FICTIONAL SEMO TRAINING EMAIL — not sent by the university\nOffice being represented: IT Help Desk\nOfficial contact for comparison: helpdesk@semo.edu\nActual sender in this example: security-prompts@semo-help.example\nSubject: Approve your sign-in to keep Canvas available\n\nYou receive an unexpected MFA approval request while studying. An email claiming to be SEMO IT says to approve it immediately, even though you did not start a sign-in.",
    "q": "What is the safest action?",
    "options": [
        "Approve it to dismiss the notification.",
        "Ignore it forever without checking your account.",
        "Deny it, secure the account through official SEMO channels, and contact helpdesk@semo.edu independently."
    ],
    "answer": 2,
    "why": "Do not approve a sign-in you did not start. The email’s pressure does not validate the login. Deny the request, review account activity through official services, and contact SEMO IT independently if you need help."
}, {
    "title": "Too good to be true",
    "icon": "🎁",
    "topic": "Online scams",
    "desc": "Spot a fake financial aid offer aimed at SEMO students.",
    "learn": "Scammers offer jobs, prizes, or bargains to pressure you into paying or sharing information. Fake-check scams may ask you to deposit a check and send money onward before the bank discovers it is fraudulent.",
    "tips": [
        "Verify employers using independently located contact details.",
        "Do not send money from an unexpected check.",
        "Be suspicious of requests for gift cards, crypto, or upfront fees."
    ],
    "scene": "FICTIONAL SEMO TRAINING EMAIL — not sent by the university\nOffice being represented: Student Financial Services\nOfficial contact for comparison: sfs@semo.edu\nActual sender in this example: payments@semo-aid.example\nSubject: Extra student grant — release fee required\n\nYou have been selected for an extra grant. Buy a $100 gift card and reply with the code to release your funds today. The grant is cancelled if you contact the university first.",
    "q": "How should you handle this offer?",
    "options": [
        "Send the gift card code to receive the grant.",
        "Do not pay; independently verify the offer with sfs@semo.edu and report the suspicious message.",
        "Send a smaller gift card so you risk less money."
    ],
    "answer": 1,
    "why": "Gift card payments, urgent deadlines, and discouraging verification are strong scam signals. Verify through Student Financial Services using sfs@semo.edu from the official university site, not by replying to the suspicious message."
}, {
    "title": "Your student records, your rules",
    "icon": "🗝️",
    "topic": "Privacy & permissions",
    "desc": "Handle international student document requests carefully.",
    "learn": "Student records, identity documents, addresses, and account credentials are sensitive. Share only the information needed for a verified request. Some genuine university processes require documents, so verify the purpose, recipient, and submission method instead of assuming every document request is a scam.",
    "tips": [
        "Verify unexpected requests using official contact details.",
        "Never include your university password or login codes with documents.",
        "Use the submission method confirmed by the real office and share only required information."
    ],
    "scene": "FICTIONAL SEMO TRAINING EMAIL — not sent by the university\nOffice being represented: International student services / DSO\nOfficial contact for comparison: dso@semo.edu\nActual sender in this example: records-upload@semo-documents.example\nSubject: Upload your student documents now\n\nA message you were not expecting asks you to upload passport and student record scans to an unfamiliar public file-sharing link. It also asks for your university password to “confirm ownership.”",
    "q": "What is the safest way to handle the request?",
    "options": [
        "Upload everything because the message names DSO.",
        "Send your password first so the office can check it.",
        "Do not use the unfamiliar link; verify the request and submission method independently with dso@semo.edu."
    ],
    "answer": 2,
    "why": "The unfamiliar link and password request are warning signs. Contact the actual office through dso@semo.edu to confirm whether documents are needed and how to submit them. This game does not describe or replace SEMO’s real document-handling procedures."
}, {
    "title": "Final campus challenge",
    "icon": "🏆",
    "topic": "Put it all together",
    "desc": "Use your detective skills in one final scenario.",
    "learn": "Good cybersecurity decisions combine a pause, independent verification, minimal sharing, and prompt reporting. If you make a mistake, act quickly rather than hiding it.",
    "tips": [
        "Use official channels to verify urgent requests.",
        "If credentials were exposed, change them through the real service and revoke suspicious sessions.",
        "Tell campus IT so it can help assess and contain the incident."
    ],
    "scene": "FICTIONAL SEMO TRAINING EMAIL — not sent by the university\nOffice being represented: Student Financial Services\nOfficial contact for comparison: sfs@semo.edu\nActual sender in this example: refunds@semo-refund.example\nSubject: Your tuition refund is ready\n\nYou entered your SE Key password on the link in this fictional refund email. Seconds later, an MFA request arrives that you did not start. The email says to approve it to release the refund.",
    "q": "What should you do first?",
    "options": [
        "Deny the request, secure your account through official SEMO services, and contact helpdesk@semo.edu. Verify the refund separately with sfs@semo.edu.",
        "Approve the request to complete the refund.",
        "Wait until tomorrow to see whether anything happens."
    ],
    "answer": 0,
    "why": "Deny the unexpected sign-in and secure the exposed account promptly through official channels. Contact helpdesk@semo.edu for account help and sfs@semo.edu independently to verify financial questions. Never use the suspicious sender’s link or approve its login."
}];
const KEY = 'campus-cyber-quest-v1';
let progress = {};
let storageOK = true;
try {
    progress = JSON.parse(localStorage.getItem(KEY) || '{}');
    if (!progress || typeof progress !== 'object' || Array.isArray(progress)) progress = {};
} catch {
    storageOK = false;
    progress = {};
}
const main = document.querySelector('main');
let active = 0,
    answered = false;

function saved(i) {
    return Boolean(progress[i] && typeof progress[i].correct === 'boolean')
}

function completed() {
    return missions.filter((_, i) => saved(i)).length
}

function points() {
    return missions.filter((_, i) => saved(i) && progress[i].correct).length * 100
}

function persist() {
    try {
        localStorage.setItem(KEY, JSON.stringify(progress));
    } catch {
        storageOK = false;
    }
}

function badge() {
    return completed() === 10 ? (points() >= 800 ? 'Cyber Defender' : 'Campus Explorer') : completed() >= 5 ? 'Threat Spotter' : 'Cyber Rookie'
}

function cards() {
    return missions.map((m, i) => `<a class="card" href="#lesson-${i+1}">
<span class="icon" aria-hidden="true">${m.icon}</span>
<span class="tag">Mission ${String(i+1).padStart(2,'0')} · ${m.topic}</span>
<h3>${m.title}</h3>
<p>${m.desc}</p>
<div class="meta">
<span>${saved(i)?(progress[i].correct?'✓ 100 points earned':'✓ Completed · retry available'):'3 min · Lesson + quiz'}</span>
<span aria-hidden="true">↗</span>
</div>
</a>`).join('')
}

function stats() {
    return `<div class="stats">
<div class="stat">
<strong>${completed()} / 10</strong>
<span>Missions completed</span>
</div>
<div class="stat">
<strong>${points()}</strong>
<span>Points · best results</span>
</div>
<div class="stat">
<strong>${badge()}</strong>
<span>Your current badge</span>
</div>
</div>`
}

function home() {
    main.innerHTML = `<section class="hero">
<div>
<span class="eyebrow">🎮 SEMO students: your quest starts here</span>
<h1>Scams beware.<br>You’re leveling up!</h1>
<p>Built for SEMO students: protect your SE Key, spot campus email scams, and make safer choices—one Redhawk mission at a time.</p>
<div class="actions">
<a class="button" href="#lesson-${Math.min(missions.findIndex((_,i)=>!saved(i))+1||1,10)}">${completed()?'Continue your quest':'Start your quest'} →</a>
<a class="button secondary" href="#missions">Explore missions</a>
</div>
<span class="small">10 bite-sized lessons · Real-life scenarios · No sign-up</span>
</div>
<div class="art" aria-label="Cybersecurity training illustration">
<span class="label">CAMPUS SECURITY // TRAINING MODE</span>
<div class="shield" aria-hidden="true">🛡️</div>
<h3>Meet your inner scam detective.</h3>
<p>Pause. Check. Protect.</p>
<div class="row">
<span>Suspicious email</span>
<span class="green">SPOTTED ✓</span>
</div>
<div class="row">
<span>Account defense</span>
<span class="green">UPGRADED ↑</span>
</div>
<div class="row">
<span>Your digital future</span>
<span class="green">IN YOUR HANDS</span>
</div>
</div>
</section>${stats()}<div class="sectionhead">
<div>
<span class="eyebrow">The learning path</span>
<h2>Pick a mission. Unlock your superpower.</h2>
<p>Pick any mission. Learn a skill, then put it to the test.</p>
</div>
<span class="badge">Learn at your own pace</span>
</div>
<section class="grid" aria-label="Ten cybersecurity missions">${cards()}</section>`
}

function lesson(i) {
    active = i;
    answered = false;
    const m = missions[i];
    main.innerHTML = `<article class="lesson">
<a class="back" href="#missions">← All missions</a>
<p class="eyebrow">Mission ${i+1} of 10 · ${m.topic}</p>
<h1>${m.title}</h1>
<p>${m.desc}</p>
<div class="panel">
<h2>Learn the essentials</h2>
<p>${m.learn}</p>
<ul>${m.tips.map(t=>`<li>${t}</li>`).join('')}</ul>
<div class="tip">
<strong>Mission mindset:</strong> Take a breath. Verify before you act.</div>
<button id="startQuiz">Let’s play! Take the challenge ↓</button>
</div>
<section class="panel" id="quiz" aria-label="Mission quiz">
<span class="tag">Decision time · 100 points</span>
<h2>What would you do?</h2>
<div class="scenario">${m.scene}</div>
<h3>${m.q}</h3>
<div class="options">${m.options.map((o,j)=>`<button class="option" data-answer="${j}">${String.fromCharCode(65+j)}. ${o}</button>`).join('')}</div>
<div id="feedback" aria-live="polite">
</div>
</section>
<p class="small">All scenario messages are fictional. SEMO and its official contact addresses are real; these training examples are not messages from SEMO or an official SEMO product.</p>
</article>`;
    document.querySelector('#startQuiz').onclick = () => {
        document.querySelector('#quiz').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        document.querySelector('.option').focus({
            preventScroll: true
        })
    };
    document.querySelectorAll('[data-answer]').forEach(b => b.onclick = () => answer(Number(b.dataset.answer)))
}

function answer(j) {
    if (answered) return;
    answered = true;
    const m = missions[active],
        correct = j === m.answer;
    progress[active] = {
        correct: correct || (saved(active) && progress[active].correct),
        lastAnswer: j
    };
    persist();
    if (correct) celebrate();
    document.querySelectorAll('[data-answer]').forEach(b => {
        b.disabled = true;
        const n = Number(b.dataset.answer);
        if (n === m.answer) b.classList.add('correct');
        else if (n === j) b.classList.add('wrong')
    });
    document.querySelector('#feedback').innerHTML = `<div class="feedback ${correct?'':'bad'}">
<strong>${correct?'🎉 Nailed it! +100 points':'💡 Plot twist! Let’s crack this one.'}</strong>
<p>${m.why}</p>
</div>
<div class="actions">
<button id="retry" class="secondary">Try again</button>
<a class="button" href="${active===9?'#progress':'#lesson-'+(active+2)}">${active===9?'See your results':'Next mission →'}</a>
</div>
<p class="small">${storageOK?'Progress saved in this browser.':'Browser storage unavailable. Progress lasts for this session.'} Retrying never removes your best score.</p>`;
    document.querySelector('#retry').onclick = () => lesson(active)
}

function result() {
    main.innerHTML = `<span class="eyebrow">Your learning dashboard</span>
<h1>Your progress, your pace.</h1>
<p>Complete every mission, practice tricky decisions, and build your confidence.</p>${stats()}<div class="panel">
<span class="badge">${badge()}</span>
<h2>${completed()===10?'Quest complete. Keep those habits going!':'Every mission makes a difference.'}</h2>
<p>${completed()} of 10 lessons completed · ${points()/100} correct best answers</p>
<div class="bar" aria-label="${completed()*10}% complete">
<span style="width:${completed()*10}%">
</span>
</div>${missions.map((m,i)=>`<div class="progressrow"><a href="#lesson-${i+1}">${i+1}. ${m.title}</a><span>${saved(i)?(progress[i].correct?'✓ 100 points':'Completed · practice again'):'Not started'}</span></div>`).join('')}<div class="actions">
<a class="button" href="#missions">Explore missions</a>
<button class="secondary" id="export">Download progress</button>
<button class="danger" id="reset">Reset progress</button>
</div>
<p class="small">No account, database, or personal information is required. Progress is stored locally on this browser/device. Reset removes this browser’s saved quiz results.</p>
</div>`;
    document.querySelector('#reset').onclick = () => {
        if (confirm('Reset all saved mission scores in this browser?')) {
            progress = {};
            persist();
            result()
        }
    };
    document.querySelector('#export').onclick = () => {
        const data = {
            project: 'Campus Cyber Quest',
            completed: completed(),
            points: points(),
            badge: badge(),
            missions: missions.map((m, i) => ({
                mission: m.title,
                completed: saved(i),
                bestCorrect: saved(i) ? progress[i].correct : null
            }))
        };
        const u = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], {
            type: 'application/json'
        }));
        const a = document.createElement('a');
        a.href = u;
        a.download = 'campus-cyber-progress.json';
        a.click();
        URL.revokeObjectURL(u)
    }
}

function guide() {
    main.innerHTML = `<article class="lesson">
<span class="eyebrow">How to play</span>
<h1>A little practice. A safer campus.</h1>
<div class="panel">
<h2>Your quest in five steps</h2>
<ol>
<li>Choose any of the ten missions from the home page or mission library.</li>
<li>Read the short lesson and its practical tips.</li>
<li>Read the fictional scenario and select the safest response.</li>
<li>Review instant feedback explaining the correct choice.</li>
<li>Continue to another mission or retry. Check My progress for scores and badges.</li>
</ol>
<p>Each correct mission is worth 100 points, for a maximum of 1,000. Your best result counts; retries do not add duplicate points. Completing five missions earns Threat Spotter. Completing all ten earns Campus Explorer, or Cyber Defender with at least 800 points.</p>
<a class="button" href="#missions">Choose a mission →</a>
</div>
<div class="panel">
<h2>Designed for learning</h2>
<p>No timer, no password collection, and no sign-up. Use a keyboard to navigate: Tab moves between controls, Enter activates links and buttons, and Space activates buttons. Lessons are available in any order.</p>
<p>For a suspected real account incident, independently contact the SEMO IT Help Desk at helpdesk@semo.edu or use the official IT website. This game uses fictional examples and general safety practices.</p>
</div>
<div class="panel">
<h2>Real SEMO contacts, fictional messages</h2>
<p>These public office addresses are used for comparison in the quizzes. They do not prove that a message is authentic. This student project is not an official SEMO website. No messages are sent by this game.</p>
<ul>
<li>
<strong>IT Help Desk:</strong> helpdesk@semo.edu · <a href="https://it.semo.edu/TDClient/93/IT/KB/Article/14571/IT-Help-Desk-Hours-of-Operation-and-Location-Information" target="_blank" rel="noopener noreferrer">Official source</a>
</li>
<li>
<strong>Admissions & New Student Programs:</strong> admissions@semo.edu · <a href="https://semo.edu/admissions/" target="_blank" rel="noopener noreferrer">Official source</a>
</li>
<li>
<strong>International student services / DSO:</strong> dso@semo.edu · <a href="https://semo.edu/international/student-services/stem" target="_blank" rel="noopener noreferrer">Official source</a>
</li>
<li>
<strong>Student Financial Services:</strong> sfs@semo.edu · <a href="https://semo.edu/student-support/financial-services/" target="_blank" rel="noopener noreferrer">Official source</a>
</li>
</ul>
</div>
</article>`
}

function render() {
    const hash = location.hash || '#home';
    if (/^#lesson-(?:[1-9]|10)$/.test(hash)) lesson(Number(hash.split('-')[1]) - 1);
    else if (hash === '#progress') result();
    else if (hash === '#guide') guide();
    else if (hash === '#missions') main.innerHTML = `<span class="eyebrow">Choose your next challenge</span>
<h1>Choose your adventure.</h1>
<p>Ten SEMO student scenarios. Ten everyday decisions. Start anywhere.</p>${stats()}<section class="grid" aria-label="Mission library">${cards()}</section>`;
    else home();
    window.scrollTo(0, 0)
}
window.addEventListener('hashchange', render);
render();

// A brief, decorative celebration; reduced-motion preferences are respected.
function celebrate() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const party = document.createElement("div");
    party.className = "party";
    party.setAttribute("aria-hidden", "true");
    party.innerHTML = Array.from({
        length: 20
    }, (_, i) => `<span style="left:${i*5}%;animation-delay:${(i%5)*.07}s">${["⭐","🎉","✨","🟣"][i%4]}</span>`).join("");
    document.body.appendChild(party);
    setTimeout(() => party.remove(), 2300);
}
