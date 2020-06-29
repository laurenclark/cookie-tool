const InfoDialogData = [
    {
        title: 'Strictly Necessary',
        description:
            'Essential in order to enable you to navigate the website and use its features, such as accessing secure areas of the website.',
        cookies: null,
    },
    {
        title: 'Marketing',
        description:
            'Used to deliver advertising that is more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaign. They are usually placed by advertising networks with the website operator’s permission.',
        cookies: [
            {
                name: 'driftt_aid',
                provider: 'Drift Livechat',
                expiry: 'Session',
                purpose: 'Marketing',
            },
            {
                name: 'driftt_sid',
                provider: 'Drift Livechat',
                expiry: 'Session',
                purpose: 'Marketing',
            },
        ],
    },
    {
        title: 'Personalisation',
        description:
            'Allows the website to remember choices you make (such as your user name, language or the region you are in) and provide enhanced, more personal features. For example, a website may be able to provide you with local weather reports or traffic news by storing data about the region in which you are currently located.',
        cookies: null,
    },
    {
        title: 'Analytics',
        description:
            'Provides information about how a web site performs, how each page renders, and whether there are technical issues on the web site to the web site operator. This storage type generally doesn’t collect information that identifies a visitor.',
        cookies: [
            {
                name: '_ga',
                provider: 'Google',
                expiry: 'Session',
                purpose: 'Session Analytics',
            },
            {
                name: '_gid',
                provider: 'Google',
                expiry: 'Session',
                purpose: 'Session Analytics',
            },
        ],
    },
];

export default InfoDialogData;
