
const routes = [
  {
    path: '/student',
    redirect: '/student/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/Home.vue') },
      { path: 'company', component: () => import('pages/StudentCompany.vue') },
      { path: 'company/internships', component: () => import('pages/StudentCompanyInternships.vue') },
      { path: 'internships', component: () => import('pages/Internships.vue') },
      { path: 'savedinternships', component: () => import('pages/SavedInternships.vue') },
      { path: 'discovercompanies', component: () => import('pages/DiscoverCompanies.vue') },
      { path: 'applications', component: () => import('pages/Applications.vue') },
      { path: 'profile', component: () => import('pages/Profile.vue') },
      { path: 'internship', component: () => import('pages/Internship.vue') },
      { path: 'internship/report', component: () => import('pages/Report.vue') },
      { path: 'internship/apply', component: () => import('pages/InternshipApply.vue') },
      { path: 'internship/apply/thanks', component: () => import('pages/ApplyThanks.vue') },
    ]
  },
  {
    path: '/company',
    redirect: '/company/reviews',
    component: () => import('layouts/CompanyMainLayout.vue'),
    children: [
      { path: 'reviews', component: () => import('src/pages/CompanyReviews.vue') },
      { path: 'internships', component: () => import('src/pages/CompanyInternships.vue') },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
