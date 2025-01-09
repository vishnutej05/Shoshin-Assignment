import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import MetricCard from "./components/MetricCard";
import AnnouncementItem from "./components/AnnouncementItem";
import ScheduleItem from "./components/ScheduleItem";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-full shadow-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={isMobileMenuOpen} />

      {/* Main Content */}
      <div className="md:ml-64 p-4 md:p-8">
        <Header />

        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        {/* Main Dashboard Grid */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Stats and Metrics */}
          <div className="flex-1 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard
                title="Available Position"
                value="24"
                subtitle="4 Urgently needed"
                subtitleColor="text-red-500"
                bgColor="bg-red-100"
              />
              <StatCard
                title="Job Open"
                value="10"
                subtitle="4 Active hiring"
                subtitleColor="text-blue-500"
                bgColor="bg-blue-100"
              />
              <StatCard
                title="New Employees"
                value="24"
                subtitle="4 Department"
                subtitleColor="text-purple-500"
                bgColor="bg-purple-100"
              />
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MetricCard
                title="Total Employees"
                value="216"
                trend="2% Past month"
                details={["120 Men", "96 Women"]}
              />
              <MetricCard
                title="Talent Request"
                value="16"
                trend="5% Past month"
                details={["6 Men", "10 Women"]}
              />
            </div>

            {/* Announcements Section */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-medium">Announcement</h3>
                <span className="text-sm text-gray-500">
                  Today, 13 Sep 2021
                </span>
              </div>

              <div className="divide-y">
                <AnnouncementItem
                  title="Outing schedule for every department"
                  time="5 Minutes ago"
                  isPinned
                />
                <AnnouncementItem
                  title="Meeting HR Department"
                  time="Yesterday, 12:30 PM"
                  isPinned
                />
                <AnnouncementItem
                  title="IT Department need two more talents for UX/UI Designer position"
                  time="Yesterday, 09:15 AM"
                />
              </div>

              <button className="text-blue-500 text-sm mt-4">
                See All Announcement
              </button>
            </div>
          </div>

          {/* Right Column - Recent Activity and Schedule */}
          <div className="lg:w-96 space-y-6">
            {/* Recent Activity */}
            <div className="bg-navy-900 text-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Recently Activity</h3>
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors">
                  See All Activity
                </button>
              </div>

              <div className="mb-2 text-sm">10:40 AM, Fri 10 Sept 2021</div>
              <h4 className="font-medium mb-2">You Posted a New Job</h4>
              <p className="text-sm text-gray-300">
                Kindly check the requirements and terms of work and make sure
                everything is right.
              </p>
            </div>

            {/* Upcoming Schedule */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-medium">Upcoming Schedule</h3>
                <span className="text-sm text-gray-500">
                  Today, 13 Sep 2021
                </span>
              </div>

              <div className="space-y-2">
                <div className="text-sm text-gray-500 mb-2">Priority</div>
                <ScheduleItem
                  title="Review candidate applications"
                  time="Today - 11:30 AM"
                  priority
                />

                <div className="text-sm text-gray-500 mt-4 mb-2">Other</div>
                <ScheduleItem
                  title="Interview with candidates"
                  time="Today - 10:30 AM"
                />
                <ScheduleItem
                  title="Short meeting with product designer from IT Department"
                  time="Today - 09:15 AM"
                />
              </div>

              <button className="text-blue-500 text-sm mt-4">
                Create a New Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
