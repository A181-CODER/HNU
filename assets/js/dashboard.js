/**
 * HNU Smart Platform - Demo Dashboard Client
 * 
 * Demo dashboard with mock data for presentation
 */

const DashboardClient = {
    
    // Demo courses data
    demoCourses: [
        {
            code: 'ISE201',
            name: 'هياكل بيانات وخوارزميات',
            doctor: 'د. محمد أحمد',
            schedule: 'الأحد 10:00 ص - 12:00 م',
            location: 'مبنى 2 - قاعة 205',
            credits: '3'
        },
        {
            code: 'ISE202',
            name: 'قواعد بيانات',
            doctor: 'د. فاطمة محمود',
            schedule: 'الاثنين 2:00 م - 4:00 م',
            location: 'مبنى 1 - معمل 103',
            credits: '3'
        },
        {
            code: 'ISE203',
            name: 'برمجة كائنية التوجه',
            doctor: 'د. أحمد علي',
            schedule: 'الثلاثاء 10:00 ص - 12:00 م',
            location: 'مبنى 2 - معمل 201',
            credits: '3'
        },
        {
            code: 'ISE204',
            name: 'شبكات حاسوب',
            doctor: 'د. سارة حسن',
            schedule: 'الأربعاء 12:00 م - 2:00 م',
            location: 'مبنى 3 - قاعة 301',
            credits: '3'
        }
    ],
    
    // Demo tracks data
    demoTracks: [
        { name: 'Frontend Development', completion: 75, students: 120 },
        { name: 'Backend Development', completion: 60, students: 95 },
        { name: 'Mobile Development', completion: 45, students: 80 },
        { name: 'DevOps', completion: 30, students: 65 },
        { name: 'Cyber Security', completion: 55, students: 70 }
    ],
    
    /**
     * Initialize dashboard with demo data
     */
    async init() {
        // Check authentication
        if (!window.HNUAuth || !window.HNUAuth.isAuthenticated()) {
            window.location.href = '/index.html';
            return;
        }
        
        try {
            // Load user profile
            await this.loadUserProfile();
            
            // Load demo courses
            this.loadDemoCourses();
            
            // Load demo tracks
            this.loadDemoTracks();
            
        } catch (error) {
            console.error('Dashboard initialization error:', error);
            this.showError('فشل تحميل البيانات. يرجى إعادة المحاولة.');
        }
    },
    
    /**
     * Load and display user profile
     */
    async loadUserProfile() {
        const profile = await window.HNUAuth.getUserProfile();
        
        // Update profile section
        document.getElementById('studentName').textContent = profile.name;
        document.getElementById('studentId').textContent = profile.id;
        document.getElementById('studentEmail').textContent = profile.email;
        document.getElementById('studentCollege').textContent = profile.college;
        document.getElementById('studentLevel').textContent = `المستوى ${profile.level}`;
        document.getElementById('studentGPA').textContent = `GPA: ${profile.gpa.toFixed(2)}`;
        
        // Update greeting based on time
        const hour = new Date().getHours();
        let greeting = 'صباح الخير';
        if (hour >= 12 && hour < 17) greeting = 'مساء الخير';
        else if (hour >= 17) greeting = 'مساء النور';
        
        document.getElementById('greeting').textContent = `${greeting}, ${profile.name.split(' ')[0]}`;
    },
    
    /**
     * Load demo courses
     */
    loadDemoCourses() {
        const coursesContainer = document.getElementById('coursesList');
        coursesContainer.innerHTML = '';
        
        this.demoCourses.forEach(course => {
            const courseCard = this.createCourseCard(course);
            coursesContainer.appendChild(courseCard);
        });
    },
    
    /**
     * Create course card element
     */
    createCourseCard(course) {
        const card = document.createElement('div');
        card.className = 'course-card';
        
        card.innerHTML = `
            <div class="course-header">
                <h3>${course.code}</h3>
                <span class="credits">${course.credits} ساعات</span>
            </div>
            <div class="course-body">
                <p class="course-name">${course.name}</p>
                <p class="doctor"><i class="fas fa-user-tie"></i> ${course.doctor}</p>
                <div class="schedule">
                    <p><i class="far fa-clock"></i> ${course.schedule}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${course.location}</p>
                </div>
            </div>
            <div class="course-footer">
                <button class="btn-materials" onclick="alert('سيتم فتح المواد الدراسية قريباً')">
                    <i class="fas fa-book"></i> المواد الدراسية
                </button>
                <button class="btn-assignment" onclick="alert('سيتم فتح تسليم الواجب قريباً')">
                    <i class="fas fa-upload"></i> تسليم الواجب
                </button>
            </div>
        `;
        
        return card;
    },
    
    /**
     * Load demo tracks
     */
    loadDemoTracks() {
        const tracksContainer = document.getElementById('tracksProgress');
        tracksContainer.innerHTML = '';
        
        this.demoTracks.forEach(track => {
            const trackCard = this.createTrackCard(track);
            tracksContainer.appendChild(trackCard);
        });
        
        // Update stats
        document.getElementById('totalTracks').textContent = this.demoTracks.length;
        document.getElementById('activeStudents').textContent = 
            this.demoTracks.reduce((sum, t) => sum + t.students, 0);
    },
    
    /**
     * Create track progress card
     */
    createTrackCard(track) {
        const card = document.createElement('div');
        card.className = 'track-card';
        
        const progressPercent = track.completion;
        const progressColor = progressPercent >= 80 ? '#00ffcc' : 
                             progressPercent >= 50 ? '#ffd700' : '#ff6b6b';
        
        card.innerHTML = `
            <div class="track-header">
                <h4>${track.name}</h4>
                <span class="students-count">${track.students} طالب</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progressPercent}%; background: ${progressColor}"></div>
            </div>
            <div class="progress-info">
                <span>نسبة الإنجاز: ${progressPercent}%</span>
                <span class="completion-status">${this.getCompletionStatus(progressPercent)}</span>
            </div>
            <button class="btn-track" onclick="alert('سيتم فتح تفاصيل المسار قريباً')">
                <i class="fas fa-arrow-right"></i> متابعة المسار
            </button>
        `;
        
        return card;
    },
    
    /**
     * Get completion status text
     */
    getCompletionStatus(percent) {
        if (percent >= 80) return 'ممتاز';
        if (percent >= 60) return 'جيد جداً';
        if (percent >= 50) return 'جيد';
        return 'بحاجة لتحسين';
    },
    
    /**
     * Show error message
     */
    showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        
        document.querySelector('.dashboard-container').prepend(errorDiv);
        
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    },
    
    /**
     * Refresh dashboard data
     */
    async refresh() {
        const refreshBtn = document.getElementById('refreshBtn');
        refreshBtn.classList.add('loading');
        
        try {
            await this.init();
        } finally {
            refreshBtn.classList.remove('loading');
        }
    }
};

// Initialize dashboard when page loads
document.addEventListener('DOMContentLoaded', () => {
    DashboardClient.init();
});

// Make functions available globally for onclick handlers
window.DashboardClient = DashboardClient;

console.log('Demo Dashboard Client loaded successfully');
