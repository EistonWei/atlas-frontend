import React from 'react';

import Overview from '../Screens/CampaignOverview'
import Update from '../Screens/CampaignUpdate'
import Scope from '../Screens/CampaignScope'
import WebsitePreScope from '../Screens/CampaignWebsitePreScope'
import Audits from '../Screens/CampaignAudits'
import Reports from '../Screens/CampaignReports'
import Invoices from '../Screens/CampaignInvoices'


export const routes = [
    {
        path: "/campaign",
        isolate: "private",
        exact: true,
        redirect: "/campaign/overview",
    },
    {
        path: "/campaign/overview",
        isolate: "private",
        exact: true,
        name:"Overview",
        component: Overview
    },
    {
        path: "/campaign/update",
        isolate: "private",
        exact: true,
        name:"Update",
        component: Update
    },
    {
        path: "/campaign/scope",
        isolate: "private",
        exact: true,
        name:"Scope",
        component: Scope
    },
    {
        path: "/campaign/website-pre-scope",
        isolate: "private",
        exact: true,
        name:"Website Pre-Scope",
        component: WebsitePreScope
    },
    {
        path: "/campaign/audits",
        isolate: "private",
        exact: true,
        name:"Audits",
        component: Audits
    },
    {
        path: "/campaign/reports",
        isolate: "private",
        exact: true,
        name:"Reports",
        component: Reports
    },
    {
        path: "/campaign/invoices",
        isolate: "private",
        exact: true,
        name:"Invoices",
        component: Invoices
    }
]
export default {
    routes
}