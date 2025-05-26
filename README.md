# Healthcare Dashboard

A static, responsive web dashboard for healthcare providers to visualize patient vitals and key metrics. This project was developed as an assignment to replicate a provided design, focusing on visual fidelity, component structure, responsiveness, and code quality. The dashboard displays mock data and is built with React, Vite, Tailwind CSS, and Lucide React icons.

## Live Demo
View the deployed application at:  
[https://healthcare-dashboard-8sbos1nmx-prasanths-projects-23ebf04f.vercel.app/](https://healthcare-dashboard-8sbos1nmx-prasanths-projects-23ebf04f.vercel.app/)

## Features
- **Static Dashboard**: Displays mock data for health metrics, appointments, and schedules without interactivity.
- **Responsive Design**: Adapts to mobile, tablet, and desktop screens using Tailwind CSS grid layouts.
- **Components**:
  - **Header**: Displays the application title and user profile with a static search bar.
  - **Sidebar**: Navigation menu with Lucide icons for different sections.
  - **Dashboard Overview**: Grid of health status cards showing key metrics (e.g., heart rate: 70 bpm).
  - **Anatomy Section**: Visualizes an anatomical illustration with health indicators (e.g., "Healthy Heart").
  - **Calendar View**: Shows a static weekly calendar with highlighted days.
  - **Upcoming Schedule**: Lists upcoming appointments with doctor details.
  - **Activity Feed**: Displays a static CSS-based bar chart for appointment activity.
- **Design Fidelity**: Matches the provided reference design with minimalist colors (blues, grays, whites), shadows, and rounded corners.
- **Accessibility**: Images include `alt` attributes; semantic HTML is used.

## Technologies Used
- **React.js**: Frontend library for building UI components.
- **Vite**: Build tool for fast development and production builds.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Lucide React**: Icon library for navigation and UI elements.
- **Node.js**: Runtime for development and build processes.

## Project Structure

healthcare-dashboard/├── public/│   └── favicon.ico├── src/│   ├── assets/│   │   ├── anatomy.svg│   │   └── avatar.png│   ├── components/│   │   ├── Header.jsx│   │   ├── Sidebar.jsx│   │   ├── DashboardMainContent.jsx│   │   ├── DashboardOverview.jsx│   │   ├── AnatomySection.jsx│   │   ├── HealthStatusCards.jsx│   │   ├── CalendarView.jsx│   │   ├── UpcomingSchedule.jsx│   │   ├── ActivityFeed.jsx│   │   └── SimpleAppointmentCard.jsx│   ├── data/│   │   ├── navigation.js│   │   ├── healthData.js│   │   └── appointments.js│   ├── styles/│   │   └── tailwind.css│   ├── App.jsx│   └── main.jsx├── index.html├── package.json├── tailwind.config.js├── vite.config.js└── README.md

## Prerequisites
- **Node.js**: v18 or higher
- **npm**: v8 or higher
- **Git**: For version control
- **Vercel CLI**: For deployment (optional)

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Prasanth-malla/healthcare-dashboard.git
   cd healthcare-dashboard


Install Dependencies:
npm install


Add Assets (if missing):

Place anatomy.svg and avatar.png in src/assets/.
Example: Download anatomy.svg from SVGRepo.
Example: Use a 32x32 placeholder for avatar.png from Placeholder.com.


Place favicon.ico in public/.
Example: Download from Favicon.io.




Run Locally:
npm run dev


Open http://localhost:5173 in your browser to view the dashboard.


Build for Production:
npm run build


Output is generated in the dist/ folder.


Preview Build:
npm run preview


Open http://localhost:4173 to preview the production build.



Deployment Instructions
The project is deployed on Vercel. To deploy your own instance:

Install Vercel CLI:
npm install -g vercel


Deploy to Vercel:
cd healthcare-dashboard
vercel --prod


Follow prompts to select the project scope (e.g., prasanths-projects-23ebf04f) and confirm Vite settings:
Build Command: vite build
Output Directory: dist
Install Command: npm install
Development Command: vite --port $PORT




Access the Deployed Site:

Vercel provides a live URL (e.g., https://healthcare-dashboard-8sbos1nmx-prasanths-projects-23ebf04f.vercel.app/).


Link to GitHub:

In the Vercel dashboard, connect the repository (Prasanth-malla/healthcare-dashboard) for automatic deployments on git push.



Screenshots
Reference design:
Assignment Context
This project was developed as part of a coding assignment to create a static healthcare dashboard. The evaluation criteria include:

Visual Fidelity (50%): Replicates the provided design’s layout, colors, and typography.
Component Structure (20%): Uses modular, reusable React components with mock data.
Responsiveness (15%): Adapts to mobile, tablet, and desktop screens.
Code Quality (15%): Clean, commented code following React best practices.

The project avoids interactivity (no useState, useEffect, or event handlers) and uses mock data for all content. The code is original to avoid disqualification per the assignment’s rules.
Troubleshooting

404 Errors for Assets:
Ensure anatomy.svg, avatar.png, and favicon.ico are in src/assets/ and public/.
Verify paths in AnatomySection.jsx and Header.jsx (e.g., import anatomySvg from '../assets/anatomy.svg').
Check dist/assets/ after npm run build to confirm assets are included.


Build Issues:
Run npm install to resolve missing dependencies.
Check Vercel build logs in the dashboard.


Visual Discrepancies:
Compare with the design image and adjust Tailwind classes (e.g., p-6, text-sm).



License
This project is licensed under the MIT License. See the LICENSE file for details.
Contact
For issues or inquiries, please open an issue on the GitHub repository.```
