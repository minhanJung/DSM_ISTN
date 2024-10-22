const menuItems = {
  items: [
    {
      id: 'navigation',
      title: 'Naviation',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: 'feather icon-home',
          url: '/app/dashboard/default'
        }
      ]
    },
    {
      id: 'CM', //client management
      title: '고객관리',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'Client', 
          title: '고객사',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'pk',
              title: 'PK',
              type: 'item',
              url: '/basic/PK'//button->PK
            },
            {
              id: 'client_code',
              title: '고객사별 코드',
              type: 'item',
              url: '/basic/badges'
            },
            {
              id: 'client_name',
              title: '고객사명',
              type: 'item',
              url: '/basic/breadcrumb-paging'
            },
            {
              id: 'common_items',
              title: '공동항목',
              type: 'item',
              url: '/basic/collapse'
            },
            
          ]
        }
      ]
    },
    {
      id: 'asset_management', //ui-forms-> 자산관리
      title: '자산관리', //FORMS & TABLES -> 자산관리
      type: 'group',
      icon: 'icon-group',
      children: [
        {
          id: 'internal_real_assets',
          title: '사내 실물자산',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
           
            {
              id: 'real_assets', 
              title: '실물',
              type: 'item',
              url: '/basic/tabs-pills'
            },
            {
              id: 'sw', 
              title: 'SW',
              type: 'item',
              url: '/basic/typography'
            },
            
            {
              id: 'hw', 
              title: 'HW',
              type: 'item',
              url: '/basic/tabs-pills' // 새로 페이지 만들어야함
            }
          ]
        },
        
      ]
    },
    {
      id: 'contract_management', // chart-maps -> contact_management
      title: '계약관리',
      type: 'group',
      icon: 'icon-charts',
      children: [
        {
          id: 'maintenance', // charts-> maintenance
          title: '유지보수',
          type: 'collapse',
          icon: 'feather icon-pie-chart',
          //url: '/charts/nvd3'
          children: [
           
            {
              id: 'sales', // 새로 페이지 만들어야함
              title: '영업',
              type: 'item',
              url: '/basic/tabs-pills'
            },
            {
              id: 'contract_name',// 새로 페이지 만들어야함
              title: '계약명',
              type: 'item',
              url: '/basic/typography'
            },
          ]
        },

        {
          id: 'client_management', // tables-> contract_management
          title: '고객관리',
          type: 'collapse',
          icon: 'feather icon-file-text',
          //url: '/tables/react-bootstrap'
          children: [
           
            {
              id: 'client',
              title: '고객사',
              type: 'item',
              url: '/basic/tabs-pills'
            },
            {
              id: 'client_name',
              title: '고객명',
              type: 'item',
              url: '/basic/typography'
            },
          ]
        },
        {
          id: 'sales_management', 
          title: '영업관리',
          type: 'collapse',
          icon: 'feather icon-file-text',
          //url: '/tables/react-bootstrap'
          children: [
           
            {
              id: 'sales_opportunity',  // 영업기회
              title: '영업기회',
              type: 'item',
              url: '/sales/opportunity'
            },
            {
              id: 'activity_status',  // 활동현황
              title: '활동현황',
              type: 'item',
              url: '/activity/status'
            },
            {
              id: 'file_management',  // 파일관리
              title: '파일관리',
              type: 'item',
              url: '/file/management'
            },
            {
              id: 'item_management',  // 품목관리
              title: '품목관리',
              type: 'item',
              url: '/item/management'
            },
            {
              id: 'contract_management',  // 계약관리
              title: '계약관리',
              type: 'item',
              url: '/contract/management'
            },
            {
              id: 'handover_responsibility',  // 담당이관
              title: '담당이관',
              type: 'item',
              url: '/handover/responsibility'
            }
            
          ]
        },
        {
          id: 'sales_purchase_management', 
          title: '매출매입관리',
          type: 'collapse',
          icon: 'feather icon-file-text',
          //url: '/tables/react-bootstrap'
          children: [
           
            {
              id: 'sales_issuance_history',  // 매출발행내역
              title: '매출발행내역',
              type: 'item',
              url: '/sales/issuance-history'
            },
            {
              id: 'accounts_receivable_management',  // 미수관리
              title: '미수관리',
              type: 'item',
              url: '/sales/accounts-receivable-management'
            }
          ]
        },
        //업무관리
         {
          id: 'task_management',   // 업무관리
          title: '업무관리',
          type: 'collapse',
          icon: 'feather icon-file-text',
          //url: '/tables/react-bootstrap'
          children: [
            {
              id: 'calendar',  // 캘린더
              title: '캘린더',
              type: 'item',
              url: '/task/calendar'
            },
            {
              id: 'todo',  // 할일
              title: '할일',
              type: 'item',
              url: '/task/todo'
            },
            {
              id: 'task_journal',  // 업무일지
              title: '업무일지',
              type: 'item',
              url: '/task/journal'
            },
            {
              id: 'expense_management',  // 지출관리
              title: '지출관리',
              type: 'item',
              url: '/task/expense-management'
            }
          ]
        },
        //공지사항
        {
          id: 'announcements',  // 공지사항
          title: '공지사항',
          type: 'collapse',
          icon: 'feather icon-file-text',
          //url: '/tables/react-bootstrap'
          children: [
            {
              id: 'board_',  // 게시판
              title: '게시판 ',
              type: 'collapse',
              children: [
                {
                  id: 'sales_materials',  // 영업자료
                  title: '영업자료',
                  type: 'item',
                  url: '/board/sales-materials'
                },
                {
                  id: 'sales_whitepaper',  //  제품소개서
                  title: '제품소개서',
                  type: 'item',
                  url: '/board/sales-materials'
                }
              ]
            }
            
          ]
        },
        //통합분석
        {
          id: 'integrated_analysis',  // 통합분석
          title: '통합분석',
          type: 'collapse',  // 'collapse'로 설정
          icon: 'feather icon-file-text',
          children: [
            {
              id: 'goal_management',  // 목표관리
              title: '목표관리',
              type: 'item',
              url: '/analysis/goal-management'
            },
            {
              id: 'mbo_analysis',  // MBO분석 (수주기준, 매출기준, 이익기준, 기간배분, 품목기준)
              title: 'MBO분석',
              type: 'collapse',
              children: [
                {
                  id: 'order_criteria',  // 수주기준
                  title: '수주기준',
                  type: 'item',
                  url: '/analysis/mbo/order-criteria'
                },
                {
                  id: 'sales_criteria',  // 매출기준
                  title: '매출기준',
                  type: 'item',
                  url: '/analysis/mbo/sales-criteria'
                },
                {
                  id: 'profit_criteria',  // 이익기준
                  title: '이익기준',
                  type: 'item',
                  url: '/analysis/mbo/profit-criteria'
                },
                {
                  id: 'time_allocation',  // 기간배분
                  title: '기간배분',
                  type: 'item',
                  url: '/analysis/mbo/time-allocation'
                },
                {
                  id: 'item_criteria',  // 품목기준
                  title: '품목기준',
                  type: 'item',
                  url: '/analysis/mbo/item-criteria'
                }
              ]
        
            },
            {
              id: 'forecasting',  // Forecasting
              title: 'Forecasting',
              type: 'collapse',  // collapse로 설정
              children: [
                {
                  id: 'scheduled_date_criteria',  // 예정일기준
                  title: '예정일기준',
                  type: 'item',
                  url: '/analysis/forecasting/scheduled-date'
                },
                {
                  id: 'possibility_criteria',  // 가능성기준
                  title: '가능성기준',
                  type: 'item',
                  url: '/analysis/forecasting/possibility'
                },
                {
                  id: 'time_allocation',  // 기간배분
                  title: '기간배분',
                  type: 'item',
                  url: '/analysis/forecasting/time-allocation'
                }
              ]
            },
            {
              id: 'contract_analysis',  // 계약분석
              title: '계약분석',
              type: 'collapse',  // collapse로 설정
              children: [
                {
                  id: 'contract_date_criteria',  // 계약일기준
                  title: '계약일기준',
                  type: 'item',
                  url: '/analysis/contract/contract-date'
                },
                {
                  id: 'time_allocation',  // 기간배분
                  title: '기간배분',
                  type: 'item',
                  url: '/analysis/contract/time-allocation'
                }
              ]
            },
            
            {
              id: 'opportunity_analysis',  // 기회분석
              title: '기회분석',
              type: 'item',
              url: '/analysis/opportunity'
            },
            {
              id: 'activity_analysis',  // 활동분석
              title: '활동분석',
              type: 'item',
              url: '/analysis/activity'
            }
          ]
        },
        //컨설팅
        {
          id: 'consulting', // tables-> contract_management
          title: '컨설팅',
          type: 'item',
          icon: 'feather icon-file-text',
          //url: '/tables/react-bootstrap'
        }
      ]
    },
    {
      id: 'pages',
      title: 'Pages',
      type: 'group',
      icon: 'icon-pages',
      children: [
        {
          id: 'auth',
          title: 'Authentication',
          type: 'collapse',
          icon: 'feather icon-lock',
          
          children: [
            {
              id: 'signup-1',
              title: 'Sign up',
              type: 'item',
              url: '/auth/signup-1',
              target: true,
              breadcrumbs: false
            },
            {
              id: 'signin-1',
              title: 'Sign in',
              type: 'item',
              url: '/auth/signin-1',
              target: true,
              breadcrumbs: false
            }
          ]
        },
        {
          id: 'sample-page',
          title: 'Sample Page',
          type: 'item',
          url: '/sample-page',
          classes: 'nav-item',
          icon: 'feather icon-sidebar'
        },
        {
          id: 'daouoffice',
          title: '다우오피스',
          type: 'item',
          icon: 'feather icon-book',
          classes: 'nav-item',
          url: 'https://dsmentoring.daouoffice.com/',
          target: true,
          external: true
        },
        {
          id: 'menu-level',
          title: 'Menu Levels',
          type: 'collapse',
          icon: 'feather icon-menu',
          children: [
            {
              id: 'menu-level-1.1',
              title: 'Menu Level 1.1',
              type: 'item',
              url: '#!'
            },
            {
              id: 'menu-level-1.2',
              title: 'Menu Level 2.2',
              type: 'collapse',
              children: [
                {
                  id: 'menu-level-2.1',
                  title: 'Menu Level 2.1',
                  type: 'item',
                  url: '#'
                },
                {
                  id: 'menu-level-2.2',
                  title: 'Menu Level 2.2',
                  type: 'collapse',
                  children: [
                    {
                      id: 'menu-level-3.1',
                      title: 'Menu Level 3.1',
                      type: 'item',
                      url: '#'
                    },
                    {
                      id: 'menu-level-3.2',
                      title: 'Menu Level 3.2',
                      type: 'item',
                      url: '#'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'disabled-menu',
          title: 'Disabled Menu',
          type: 'item',
          url: '#',
          classes: 'nav-item disabled',
          icon: 'feather icon-power'
        }
      ]
    }
  ]
};

export default menuItems;
