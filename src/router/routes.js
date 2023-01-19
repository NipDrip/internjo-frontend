

const routes = [
  {
    path: '/',
    component: () => import('layouts/Login.vue'),
    children: [
      {path: 'login', component: () => import('pages/Login.vue')},
    ]
  },
  {
    path: '/student',
    redirect: '/student/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/Home.vue') },
      { path: 'company/:id', component: () => import('pages/StudentCompany.vue') },
      { path: 'company/:id/internships', component: () => import('pages/StudentCompanyInternships.vue') },
      { path: 'profile', component: () => import('pages/Profile.vue') },
      { path: 'discovercompanies', component: () => import('pages/DiscoverCompanies.vue') },
      { path: 'savedinternships', component: () => import('pages/SavedInternships.vue') },
      { path: 'applications', component: () => import('pages/Applications.vue') },
      { path: 'application/:id/review', component: () => import('pages/StudentCompanyReview.vue') },
      { path: 'application/:id/review/thanks', component: () => import('pages/ReviewThanks.vue') },
      { path: 'internships', component: () => import('pages/Internships.vue') },
      { path: 'internship/:id', component: () => import('pages/Internship.vue') },
      { path: 'internship/:id/report', component: () => import('pages/Report.vue') },
      { path: 'internship/:id/report/thanks', component: () => import('pages/ReportThanks.vue') },
      { path: 'internship/:id/apply', component: () => import('pages/InternshipApply.vue') },
      { path: 'internship/:id/apply/thanks', component: () => import('pages/ApplyThanks.vue') },
    ]
  },
  {
    path: '/company/admin',
    redirect: '/company/admin/inactiveemployees',
    component: () => import('layouts/CompanyMainLayout.vue'),
    children: [
      { path: 'profile', component: () => import('src/pages/CompanyProfile.vue') },
      { path: 'reviews', component: () => import('src/pages/CompanyReviews.vue') },
      { path: 'inactiveemployees', component: () => import('src/pages/CompanyInactiveEmployees.vue') },
      { path: 'activeemployees', component: () => import('src/pages/CompanyActiveEmployees.vue') },
    ]
  },
  {
    path: '/company/employee',
    redirect: '/company/employee/internships',
    component: () => import('layouts/CompanyEmployeeMainLayout.vue'),
    children: [
      { path: 'internships', component: () => import('src/pages/CompanyInternships.vue') },
      { path: 'applicants', component: () => import('src/pages/CompanyApplicants.vue') },
      { path: 'reviews', component: () => import('src/pages/CompanyReviews.vue') },
      { path: 'internship/:id/edit', component: () => import('src/pages/CompanyInternshipEdit.vue') },
      { path: 'internship/:id/view', component: () => import('src/pages/CompanyInternshipView.vue') },
      { path: 'internship/:id/new', component: () => import('src/pages/CompanyInternshipNew.vue') },
      { path: 'internship/:id/applicants', component: () => import('src/pages/CompanyInternshipApplicants.vue') },
      { path: 'internship/:id/applicant/:app_id/email', component: () => import('src/pages/CompanyApplicantEmail.vue') },
      { path: 'internship/:id/applicant/:app_id/email/sent', component: () => import('src/pages/CompanyApplicantEmailSent.vue') },
    ]
  },
  {
    path: '/admin',
    redirect: '/admin/validations',
    component: () => import('layouts/AdminMainLayout.vue'),
    children: [
      { path: 'validations', component: () => import('src/pages/AdminValidations.vue') },
      { path: 'reports', component: () => import('src/pages/AdminReports.vue') },
      { path: 'accounts/company', component: () => import('src/pages/AdminCompanyAccounts.vue') },
      { path: 'accounts/student', component: () => import('src/pages/AdminStudentAccounts.vue') },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]



export default routes
