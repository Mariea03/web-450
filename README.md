# web-450 - Mastering the MEAN Stack
This repository contains coursework and projects completed for **Web-450**.
Each project demonstrates hands-on experience with full-stack development using
modern JavaScript frameworks and backend technologies.
APRE - Agent Performance Reporting Engine
Date: January 2026
Description: APRE is a reporting dashboard tracking sales, agent performance, and customer feedback, with both server API's and Angular frontend components.

Setup:
Server:
cd apre-server
npm install
npm start

Client:
cd apre-client
npm install
ng serve

Runs on http://localhost: 4200

Testing:
Server: npm test
Client: ng test

Key Features
*Dashboard: Charts and tables for sales agent performance and feedback
*Side Menu: Navigation to Sales Reports, Agent Performance, Customer Feedback, and User Management
*Sales by Salesperson: Select a salesperson to view total sales for the last six months.

Accessing Sales by Salesperson:
1. Open the application in a browser:http://localhost: 4200
2. In the Side Menu, expand Sales Reports
3. Click Sales by Salesperson
4. On the page, select a salesperson from the dropdown and click submit to view their sales for the last 6 months in a table.

API Endpoints
*GET /reports/sales/salesperson - Total sales by salesperson
*GET /reports/sales/regions - List of sales regions
*GET /reports/ sales/regions/:region - Sales for a specific region

Notes:
*Uses mock data for Sales by salesperson
*Session management via ngx-cookie-service
*Includes unit tests for all major components and server endpoints


AGENT PERFOMANCE BY TEAM
Overview
This module displays Agent Performance by Team in a table format. It fetches data from the backend API and renders agent, team, ticket resolved, and score.
The module consist of: 
Component: AgentPerformanceComponent
Service: AgentPerformanceService
API endpoint: /api/reports/agent-performance/team

File Structure
agent-performance/
-agent-performance.component
-agent-performance.service.ts
-agent-performance.component.ts
