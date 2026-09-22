/**
 * HNU Smart Platform - Demo Authentication Module
 * 
 * Simple demo login for presentation purposes
 * Username: user
 * Password: any digit from 0 to 9
 */

const AuthModule = {
    
    // Demo user session
    currentUser: null,
    
    /**
     * Demo login function
     * Accepts username "user" and password 0-9
     */
    login(username, password) {
        // Validate credentials
        if (username.toLowerCase() === 'user' && /^[0-9]$/.test(password)) {
            // Create demo user data
            this.currentUser = {
                name: 'أحمد محمد إبراهيم',
                id: '20240001',
                email: 'ahmed.ibrahim@hnu.edu.eg',
                college: 'كلية هندسة النظم الذكية',
                level: '2',
                gpa: 3.45
            };
            
            // Store session
            localStorage.setItem('hnu_demo_user', JSON.stringify(this.currentUser));
            localStorage.setItem('hnu_demo_session', 'true');
            
            return { success: true, user: this.currentUser };
        }
        
        return { success: false, error: 'بيانات الدخول غير صحيحة. جرب user وأي رقم من 0 لـ 9' };
    },
    
    /**
     * Check if user is logged in
     */
    isAuthenticated() {
        const session = localStorage.getItem('hnu_demo_session');
        const userData = localStorage.getItem('hnu_demo_user');
        
        if (session === 'true' && userData) {
            this.currentUser = JSON.parse(userData);
            return true;
        }
        
        return false;
    },
    
    /**
     * Get current user profile
     */
    getUserProfile() {
        if (!this.isAuthenticated()) {
            throw new Error('Not authenticated');
        }
        
        return Promise.resolve(this.currentUser);
    },
    
    /**
     * Logout and clear session
     */
    logout() {
        this.currentUser = null;
        localStorage.removeItem('hnu_demo_user');
        localStorage.removeItem('hnu_demo_session');
        
        // Redirect to home
        window.location.href = '/index.html';
    },
    
    /**
     * Get auth header (demo - no real token needed)
     */
    getAuthHeader() {
        if (!this.isAuthenticated()) {
            throw new Error('Not authenticated');
        }
        
        return {
            'Content-Type': 'application/json'
        };
    }
};

// Export for browser usage
window.HNUAuth = AuthModule;

console.log('HNU Demo Auth Module loaded - Use "user" and any digit 0-9 to login');
