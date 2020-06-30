const config = {
    settings: {
        title: 'Storage Preferences',
        description: `When you visit web sites, they may store or retrieve
        data in your web browser. This storage is often necessary for basic functionality of the web site or the storage may be used for the purposes of marketing,analytics, and personalization of the web site such as
        storing your preferences. Privacy is important to us so you have the option of disabling certain types of storage that may not be necessary to the basic functioning of the web site. Blocking categories may impact your experience on the web site.`,
        save_text: `Save`,
        accept_all_text: `Accept All`,
        privacy_policy_text: `data storage policy`,
        privacy_policy_description: `This website stores data such as cookies to enable important site
            functionality including analytics, targeting, and personalization. You
            may alter your preferences at any time or accept the default settings.`,
        privacy_policy_url: `https://www.rawnet.com/privacy-policy`,
        disclosure_text: `Disclosure`
    },
    initialDialog: [
        { title: 'Marketing', id: 'rawCookieMarketing' },
        { title: 'Personalisation', id: 'rawCookiePersonalisation' },
        { title: 'Analytics', id: 'rawCookieAnalytics' }
    ],
    cookies: {
        marketing: [
            'driftt_aid',
            'driftt_sid',
            'DFTT_END_USER_PREV_BOOTSTRAPPED'
        ],
        analytics: ['_ga', '_gid'],
        personalisation: []
    },
    scripts: {
        analyticsCode: 'UA-9333142-1',
        analytics: 'https://www.google-analytics.com/analytics.js',
        marketing:
            'https://js.driftt.com/include/1593265200000/fbthhes9t4e7.js',
        personalisation: []
    }
};

export { config };
