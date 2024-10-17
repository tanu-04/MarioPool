import React from 'react';
import './AdminDashboard.css'; // Import your CSS file

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <header className="dashboard-header">
                <h1>Admin Dashboard</h1>
                <div className="header-right">
                    <span>Welcome, Admin</span>
                    <button className="logout-button">Logout</button>
                </div>
            </header>

            <div className="dashboard-container">
                <aside className="sidebar">
                    <nav>
                        <ul>
                            <li><a href="#users">User Management</a></li>
                            <li><a href="#analytics">Analytics</a></li>
                            <li><a href="#settings">Settings</a></li>
                            <li><a href="#reports">Reports</a></li>
                        </ul>
                    </nav>
                </aside>

                <main className="main-content">
                    <section id="users">
                        <h2>User Management</h2>
                        {/* You can add user management features here */}
                    </section>

                    <section id="analytics">
                        <h2>Analytics</h2>
                        {/* You can add analytics features here */}
                    </section>

                    <section id="settings">
                        <h2>Settings</h2>
                        {/* You can add settings features here */}
                    </section>

                    <section id="reports">
                        <h2>Reports</h2>
                        {/* You can add reporting features here */}
                    </section>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
