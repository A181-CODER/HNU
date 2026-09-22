const FeaturesModule = {
    demoData: {
        chatbotMessages: [{ from: 'bot', text: 'أهلاً بك! أنا حلواني بوت، كيف يمكنني مساعدتك اليوم؟' }],
        books: [
            { id: 1, title: 'شرح خوارزميات', seller: 'محمد أحمد', price: '50 جنيه', condition: 'جيد جداً' },
            { id: 2, title: 'ملخص قواعد بيانات', seller: 'فاطمة محمود', price: '30 جنيه', condition: 'ممتاز' },
            { id: 3, title: 'كتاب شبكات', seller: 'علي حسن', price: '80 جنيه', condition: 'جيد' }
        ],
        studyRooms: [
            { id: 1, name: 'غرفة 1 - خوارزميات', members: 3, maxMembers: 6, topic: 'مراجعة امتحان' },
            { id: 2, name: 'غرفة 2 - قواعد بيانات', members: 2, maxMembers: 4, topic: 'مشروع الترم' }
        ],
        mentors: [
            { id: 1, name: 'خريج: أحمد سامي', company: 'مايكروسوفت', field: 'Frontend' },
            { id: 2, name: 'طالبة: نورة محمد', level: '4', gpa: '3.9', field: 'Cyber Security' }
        ],
        warnings: [
            { course: 'هياكل بيانات', risk: 'متوسط', attendance: '75%', recommendation: 'زيادة الحضور' },
            { course: 'قواعد بيانات', risk: 'منخفض', attendance: '90%', recommendation: 'استمر هكذا' }
        ],
        sentiments: [
            { aspect: 'المحاضرات', positive: 75, neutral: 20, negative: 5 },
            { aspect: 'الدكاترة', positive: 85, neutral: 10, negative: 5 },
            { aspect: 'المعامل', positive: 60, neutral: 30, negative: 10 }
        ],
        successPaths: [
            { path: 'Frontend → Junior Dev', successRate: '85%', avgGPA: '3.2' },
            { path: 'Backend → Senior Dev', successRate: '78%', avgGPA: '3.0' }
        ],
        reports: [],
        achievements: [
            { id: 1, title: 'أفضل طالب في المقرر', date: '2024-01', icon: 'fa-trophy' },
            { id: 2, title: 'إتمام مسار Frontend', date: '2024-02', icon: 'fa-certificate' },
            { id: 3, title: 'المساعدة في المنتدى', date: '2024-03', icon: 'fa-hands-helping' }
        ],
        projects: [
            { id: 1, title: 'نظام إدارة مكتبة', team: '3 طلاب', field: 'Web Development', status: 'قائم للعرض' },
            { id: 2, title: 'تطبيق ذكي للمواعيد', team: '2 طلاب', field: 'Mobile App', status: 'قائم للعرض' }
        ],
        volunteerHours: { total: 45, activities: 8, certificate: 'متاح' },
        alumni: [
            { name: 'أحمد محمد', company: 'Google', position: 'Software Engineer', gradYear: '2022' },
            { name: 'سارة علي', company: 'Amazon', position: 'Data Analyst', gradYear: '2023' }
        ],
        collaborations: [
            { id: 1, title: 'تطبيق صحي', colleges: ['هندسة', 'تجارة'], members: 5 },
            { id: 2, title: 'تحليل بيانات تعليمية', colleges: ['نظم ذكية', 'حاسبات'], members: 4 }
        ]
    },
    init() { console.log('Features loaded'); },
    loadChatbot() { const c = document.getElementById('chatbotMessages'); if(!c)return; c.innerHTML=''; this.demoData.chatbotMessages.forEach(m => { const d=document.createElement('div'); d.className='chat-message '+m.from; d.textContent=m.text; c.appendChild(d); }); },
    sendChatMessage(t) { const c=document.getElementById('chatbotMessages'); if(!c)return; const u=document.createElement('div'); u.className='chat-message user'; u.textContent=t; c.appendChild(u); setTimeout(()=>{ const b=document.createElement('div'); b.className='chat-message bot'; b.textContent='شكراً لسؤالك! هذا ديمو.'; c.appendChild(b); c.scrollTop=c.scrollHeight; },1000); },
    loadBookExchange() { const c=document.getElementById('booksList'); if(!c)return; c.innerHTML=''; this.demoData.books.forEach(b=>{ const card=document.createElement('div'); card.className='feature-card'; card.innerHTML='<h4>'+b.title+'</h4><p><i class="fas fa-user"></i> '+b.seller+'</p><p><i class="fas fa-tag"></i> '+b.price+'</p><button class="btn-feature" onclick="alert(\'سيتم التواصل قريباً\')">تواصل</button>'; c.appendChild(card); }); },
    loadStudyRooms() { const c=document.getElementById('studyRoomsList'); if(!c)return; c.innerHTML=''; this.demoData.studyRooms.forEach(r=>{ const card=document.createElement('div'); card.className='feature-card'; card.innerHTML='<h4>'+r.name+'</h4><p><i class="fas fa-users"></i> '+r.members+'/'+r.maxMembers+'</p><button class="btn-feature" onclick="alert(\'سيتم الفتح قريباً\')">انضم</button>'; c.appendChild(card); }); },
    loadMentorship() { const c=document.getElementById('mentorsList'); if(!c)return; c.innerHTML=''; this.demoData.mentors.forEach(m=>{ const card=document.createElement('div'); card.className='feature-card'; card.innerHTML='<h4>'+m.name+'</h4><p><i class="fas fa-briefcase"></i> '+(m.company||m.level)+'</p><p><i class="fas fa-graduation-cap"></i> '+m.field+'</p><button class="btn-feature" onclick="alert(\'سيتم طلب الإرشاد قريباً\')">اطلب إرشاد</button>'; c.appendChild(card); }); },
    loadEarlyWarning() { const c=document.getElementById('warningsList'); if(!c)return; c.innerHTML=''; this.demoData.warnings.forEach(w=>{ const color=w.risk==='متوسط'?'#ffd700':'#00ffcc'; const card=document.createElement('div'); card.className='feature-card'; card.style.borderColor=color; card.innerHTML='<h4>'+w.course+'</h4><p><i class="fas fa-exclamation-triangle"></i> خطر: <span style="color:'+color+'">'+w.risk+'</span></p><p><i class="fas fa-clock"></i> '+w.attendance+'</p><p><i class="fas fa-lightbulb"></i> '+w.recommendation+'</p>'; c.appendChild(card); }); },
    loadSentimentAnalysis() { const c=document.getElementById('sentimentsChart'); if(!c)return; c.innerHTML=''; this.demoData.sentiments.forEach(s=>{ const d=document.createElement('div'); d.className='sentiment-bar'; d.innerHTML='<p>'+s.aspect+'</p><div class="progress-bar"><div class="progress-fill" style="width:'+s.positive+'%;background:#00ffcc"></div></div><small>إيجابي:'+s.positive+'% | محايد:'+s.neutral+'% | سلبي:'+s.negative+'%</small>'; c.appendChild(d); }); },
    loadSuccessPaths() { const c=document.getElementById('successPathsList'); if(!c)return; c.innerHTML=''; this.demoData.successPaths.forEach(p=>{ const card=document.createElement('div'); card.className='feature-card'; card.innerHTML='<h4>'+p.path+'</h4><p><i class="fas fa-chart-line"></i> '+p.successRate+'</p><p><i class="fas fa-graduation-cap"></i> '+p.avgGPA+'</p>'; c.appendChild(card); }); },
    loadAnonymousReporting() { const f=document.getElementById('reportForm'); if(!f)return; f.onsubmit=(e)=>{ e.preventDefault(); alert('تم إرسال البلاغ بنجاح.'); f.reset(); }; },
    loadAchievements() { const c=document.getElementById('achievementsList'); if(!c)return; c.innerHTML=''; this.demoData.achievements.forEach(a=>{ const card=document.createElement('div'); card.className='feature-card achievement'; card.innerHTML='<i class="fas '+a.icon+'"></i><h4>'+a.title+'</h4><small>'+a.date+'</small>'; c.appendChild(card); }); },
    loadProjectsIncubator() { const c=document.getElementById('projectsList'); if(!c)return; c.innerHTML=''; this.demoData.projects.forEach(p=>{ const card=document.createElement('div'); card.className='feature-card'; card.innerHTML='<h4>'+p.title+'</h4><p><i class="fas fa-users"></i> '+p.team+'</p><p><i class="fas fa-code"></i> '+p.field+'</p><button class="btn-feature" onclick="alert(\'سيتم العرض قريباً\')">عرض</button>'; c.appendChild(card); }); },
    loadVolunteerSystem() { const c=document.getElementById('volunteerStats'); if(!c)return; c.innerHTML='<div class="stat-box"><i class="fas fa-clock"></i><h3>'+this.demoData.volunteerHours.total+'</h3><p>ساعة</p></div><div class="stat-box"><i class="fas fa-calendar-check"></i><h3>'+this.demoData.volunteerHours.activities+'</h3><p>نشاط</p></div><div class="stat-box"><i class="fas fa-certificate"></i><h3>'+this.demoData.volunteerHours.certificate+'</h3><p>الشهادة</p></div>'; },
    loadAlumniGallery() { const c=document.getElementById('alumniList'); if(!c)return; c.innerHTML=''; this.demoData.alumni.forEach(a=>{ const card=document.createElement('div'); card.className='feature-card'; card.innerHTML='<h4>'+a.name+'</h4><p><i class="fas fa-building"></i> '+a.company+'</p><p><i class="fas fa-briefcase"></i> '+a.position+'</p><p><i class="fas fa-graduation-cap"></i> '+a.gradYear+'</p>'; c.appendChild(card); }); },
    loadCrossCollegeCollab() { const c=document.getElementById('collaborationsList'); if(!c)return; c.innerHTML=''; this.demoData.collaborations.forEach(col=>{ const card=document.createElement('div'); card.className='feature-card'; card.innerHTML='<h4>'+col.title+'</h4><p><i class="fas fa-university"></i> '+col.colleges.join(' + ')+'</p><p><i class="fas fa-users"></i> '+col.members+'</p><button class="btn-feature" onclick="alert(\'سيتم الفتح قريباً\')">انضم</button>'; c.appendChild(card); }); },
    openFeature(id) {
        const modal=document.getElementById('featureModal'), title=document.getElementById('modalTitle'), content=document.getElementById('modalContent');
        if(!modal)return;
        const names={chatbot:'حلواني بوت',books:'تبادل الكتب',study:'غرف الدراسة',mentor:'نظام ظلال',warning:'الإنذار المبكر',sentiment:'تحليل المشاعر',success:'مسارات النجاح',report:'إبلاغ مجهول',achievements:'الإنجازات',projects:'حاضنة المشاريع',volunteer:'التطوع',alumni:'الخريجين',collab:'تعاون الكليات'};
        const contents={chatbot:'<div id="chatbotMessages" style="height:200px;overflow-y:auto;margin-bottom:15px;"></div><input type="text" id="chatInput" placeholder="اكتب سؤالك..." style="width:100%;padding:10px;border-radius:8px;border:1px solid rgba(0,255,204,0.2);background:rgba(0,255,204,0.05);color:white;font-family:Cairo;" onkeypress="if(event.key===\'Enter\'){FeaturesModule.sendChatMessage(this.value);this.value=\'\';}"/><button class="btn-feature" onclick="const i=document.getElementById(\'chatInput\');FeaturesModule.sendChatMessage(i.value);i.value=\'\';" style="margin-top:10px;">إرسال</button>',books:'<div id="booksList"></div>',study:'<div id="studyRoomsList"></div>',mentor:'<div id="mentorsList"></div>',warning:'<div id="warningsList"></div>',sentiment:'<div id="sentimentsChart"></div>',success:'<div id="successPathsList"></div>',report:'<form id="reportForm"><div class="form-group"><select id="reportCategory"><option value="academic">مشكلة أكاديمية</option><option value="administrative">مشكلة إدارية</option><option value="technical">مشكلة تقنية</option></select></div><div class="form-group"><textarea id="reportDescription" rows="4" placeholder="وصف المشكلة..."></textarea></div><button type="submit">إرسال</button></form>',achievements:'<div id="achievementsList"></div>',projects:'<div id="projectsList"></div>',volunteer:'<div id="volunteerStats"></div>',alumni:'<div id="alumniList"></div>',collab:'<div id="collaborationsList"></div>'};
        title.textContent=names[id]||'الميزة';
        content.innerHTML=contents[id]||'<p>ديمو.</p>';
        modal.style.display='flex';
        setTimeout(()=>{ if(id==='chatbot')this.loadChatbot(); if(id==='books')this.loadBookExchange(); if(id==='study')this.loadStudyRooms(); if(id==='mentor')this.loadMentorship(); if(id==='warning')this.loadEarlyWarning(); if(id==='sentiment')this.loadSentimentAnalysis(); if(id==='success')this.loadSuccessPaths(); if(id==='report')this.loadAnonymousReporting(); if(id==='achievements')this.loadAchievements(); if(id==='projects')this.loadProjectsIncubator(); if(id==='volunteer')this.loadVolunteerSystem(); if(id==='alumni')this.loadAlumniGallery(); if(id==='collab')this.loadCrossCollegeCollab(); },100);
    },
    closeFeatureModal() { const m=document.getElementById('featureModal'); if(m)m.style.display='none'; }
};
document.addEventListener('DOMContentLoaded',()=>{FeaturesModule.init();});
window.FeaturesModule=FeaturesModule;
console.log('HNU Features loaded');
