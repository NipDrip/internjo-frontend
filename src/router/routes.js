
const routes = [
  {
    path: '/student',
    redirect: '/student/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/Home.vue') },
      { path: 'company', component: () => import('pages/StudentCompany.vue') },
      { path: 'company/internships', component: () => import('pages/StudentCompanyInternships.vue') },
      { path: 'company/review', component: () => import('pages/StudentCompanyReview.vue') },
      { path: 'company/review/thanks', component: () => import('pages/ReviewThanks.vue') },
      { path: 'internships', component: () => import('pages/Internships.vue') },
      { path: 'savedinternships', component: () => import('pages/SavedInternships.vue') },
      { path: 'discovercompanies', component: () => import('pages/DiscoverCompanies.vue') },
      { path: 'applications', component: () => import('pages/Applications.vue') },
      { path: 'profile', component: () => import('pages/Profile.vue') },
      { path: 'internship', component: () => import('pages/Internship.vue') },
      { path: 'internship/report', component: () => import('pages/Report.vue') },
      { path: 'internship/report/thanks', component: () => import('pages/ReportThanks.vue') },
      { path: 'internship/apply', component: () => import('pages/InternshipApply.vue') },
      { path: 'internship/apply/thanks', component: () => import('pages/ApplyThanks.vue') },
    ]
  },
  {
    path: '/company/admin',
    redirect: '/company/admin/internships',
    component: () => import('layouts/CompanyMainLayout.vue'),
    children: [
      { path: 'profile', component: () => import('src/pages/CompanyProfile.vue') },
      { path: 'internships', component: () => import('src/pages/CompanyInternships.vue') },
      { path: 'applicants', component: () => import('src/pages/CompanyApplicants.vue') },
      { path: 'reviews', component: () => import('src/pages/CompanyReviews.vue') },
      { path: 'employees', component: () => import('src/pages/CompanyReviews.vue') },
      { path: 'internship/edit', component: () => import('src/pages/CompanyInternshipEdit.vue') },
      { path: 'internship/view', component: () => import('src/pages/CompanyInternshipView.vue') },
      { path: 'internship/new', component: () => import('src/pages/CompanyInternshipNew.vue') },
      { path: 'internship/applicants', component: () => import('src/pages/CompanyInternshipApplicants.vue') },
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
      { path: 'internship/edit', component: () => import('src/pages/CompanyInternshipEdit.vue') },
      { path: 'internship/view', component: () => import('src/pages/CompanyInternshipView.vue') },
      { path: 'internship/new', component: () => import('src/pages/CompanyInternshipNew.vue') },
      { path: 'internship/applicants', component: () => import('src/pages/CompanyInternshipApplicants.vue') },
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
