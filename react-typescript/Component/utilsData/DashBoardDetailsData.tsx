export const itemsWithNoContents = [
  "syncContacs",
  "syncCalender",
  "feedPreferences",
  "premiumSubscription",
  "viewPurchaseHistory",
  "hibernateAccount",
  "closeAccount",
];
export const verificationInputdata = ["", "", "", "", "", ""];

export const AccountPreferencesData = [
  {
    title: "Profile Information",
    description: "Basic information associated with your profile",
    id: "proffile-info",
    items: [
      {
        name: "name",
        title: "Full Name, D.O.B, Nationality",
        description: "Provide full name & D.O.B as per your ID documents",
        values: {
          fullname: "Robert Miles",
          dateOfBirth: "11/04/1987",
          nationality: "German",
        },
      },
      {
        name: "address",
        title: "Address",
        description: "Provide residential address as per proof of address",
        values: {
          address: "15 Neutwache Frankfurt, Down Town Station, Berlin, 21149",
        },
      },
    ],
  },
  {
    title: "Site Preferences",
    description: "Manage your Enoch experience",
    id: "site-prefrnc",
    items: [
      {
        name: "time",
        title: "Time Zone",
        description: "Select a time zone",
        default: "(GMT+01:00) CET",
        input: {
          values: [
            "GMT (Greenwich Mean Time)",
            " GMT (Universal Coordinated Time)",
            " GMT+1 (European Central Time)",
            " GMT+2 (Eastern European Time)",
            " GMT+2 (Saudi Arabia Standard Time)",
            "GMT+3 (Eastern African Time)",
          ],
        },
      },
      {
        name: "language",
        title: "Language",
        description: "Select a language you use on infinity",
        default: "English",
        input: {
          values: [
            "Dutch",
            "English (India)",
            "English (UK)",
            "English (USA)",
            "Esperanto",
            "Estonian",
          ],
        },
      },
      {
        name: "contentLanguage",
        title: "Content Language",
        description: "Select a language for translation",
        default: "English",
        input: {
          values: [
            "Dutch",
            "English (India)",
            "English (UK)",
            "English (USA)",
            "Esperanto",
            "Estonian",
          ],
        },
      },
      {
        name: "Autoplay",
        title: "Autoplay Videos ",
        description: "Choose autoplay videos on infinity",
        default: "",
      },
      {
        name: "showingProfile",
        title: "Showing profile",
        description: "Choose to show or hide your profile to other member",
        default: "",
        input: {
          values: [
            "No One",
            "Your Connections",
            "Your Network",
            "All Enoch Members",
            "Esperanto",
            "Estonian",
          ],
        },
      },
      {
        name: "feedPreferences",
        title: "Feed preferences",
        description: "Feed preferences",
        default: "",
      },
      {
        name: "peopleAlsoViewed",
        title: "People also viewed",
        description: "Choose if this feature appears on your profille",
        default: "",
      },
    ],
  },
  {
    title: "Syncing Options",
    description: "Manage your Enoch experience ",
    id: "sync-option",
    items: [
      {
        name: "syncCalender",
        title: "Sync Calendar",
        description:
          "Manage or Sync Calendar to get timely updates about who you’ll be meeting with",
      },
      {
        name: "syncContacs",
        title: "Sync Contacts",
        description:
          "Manage or Sync Contacts to connect with people you know directly from your address book",
      },
    ],
  },
  {
    title: "Subcriptions & Payments",
    description: "Keep track of Purchases and Subscription Status",
    id: "subscription-payment",
    items: [
      {
        name: "premiumSubscription",
        title: "Premium Subscription",
        description: "See your Billing Information and Cancel Premium",
      },
      {
        name: "viewPurchaseHistory",
        title: "View Purchase History",
        description: "See your previous Purchases and Transaction on Linkedin",
      },
    ],
  },
  {
    title: "Partners & Services",
    description: "Services you have connected your Enoch Account",
    id: "partners-service",
    items: [
      {
        name: "microsoft",
        title: "Microsoft",
        default: "0 Connected Accounts",
        description:
          "View Microsoft Account you’ve connected to your Linkedin Account",
        link: "#",
        linkText: "Change",
      },
      {
        name: "twitter",
        title: "Twitter",
        description: "Manage your Twitter Info on your Linkedin Account",
        default: "Not Connected",
        link: "#",
        linkText: "+ Add a Twitter Account",
      },
    ],
  },
  {
    title: "Account Management",
    description: "Control your Enoch Account",
    id: "account-mngt",
    items: [
      {
        name: "mergeAccounts",
        title: "Merge Accounts",
        description:
          "Transfer Connections from a duplicate Account, then ciose it",
      },
      {
        name: "hibernateAccount",
        title: "Hibernate Account",
        description: "Temporarily Deactivate your Account",
      },
      {
        name: "closeAccount",
        title: "Close Account",
        description:
          "Learn about your options and close your account if you wish",
      },
    ],
  },
];

export const signInAndSecurityData = [
  {
    title: "Account Access",
    description: "Settings to help you keep your account secure",
    id: "account-access",
    items: [
      {
        name: "emailAddresses",
        title: "Email addresses",
        description: "Add or remove email addresses on your account ",
        default: "1 Email address",
      },
      {
        name: "phoneNumbers",
        title: "Phone numbers",
        description: "Add a phone number in case you have trouble signing in",
        default: "1 phone number",
      },
      {
        name: "changePassword",
        title: "Change Password",
        description: "Choose a unique password to protect your account",
        default: "Last changed : 14 Feb, 2021",
      },
      {
        name: "signInPlace",
        title: "Where you are Signed-In",
        description: "Add a Phone number in case you have trouble Signing In",
        default: "3 Active session",
      },
      {
        name: "passwordRemember",
        title: "Devices that remember your Password",
        description: "Add a Phone number in case you have trouble Signing In",
        default: "0 device",
      },
      {
        name: "twoStepVerification",
        title: "Two step verification",
        description: "Activate this feature for enhanced account security",
        default: "on",
      },
    ],
  },
];

export const VisibilityData = [
  {
    id: "profile-network",
    title: "Visibility of your profile & network",
    description:
      "Make your profile and contact info only visible to those you choose",
    items: [
      {
        title: "Profile viewing options",
        description: "Choose whether you’re visible or viewing in private mode",
        question: "Select what others see when you’ve viewed their profile",
        inputType: "radioSelect",
        inputOptions: [
          {
            id: "profile1",
            title: "Your name and headline",
            icon: true,
            value: "Robert Miles",
            valueDescription: "Manager – Design studio Adobe",
          },
          {
            id: "profile2",
            title: "Private profile characteristics",
            icon: true,
            value: "Someone at Adobe",
            valueDescription: "",
          },
          {
            id: "profile3",
            title: "Private mode",
            icon: true,
            value: "Anonymous Enoch Member",
          },
        ],
        extraBlock: (
          <p style={{ fontSize: 12 }}>
            Selecting Private profile characteristics or Private mode will
            disable Who's Viewed Your Profile and erase your viewer history.
            <br />
            <a href="#">Upgrade to Premium</a>
            to see all your viewers in the last 90 days while browsing in
            private mode.
          </p>
        ),
      },
      {
        title: "Story viewing options",
        description: "Choose whether you’re visible or viewing in private mode",
        question: "Select what creators see when you’ve viewed their story",
        inputType: "radioSelect",
        inputOptions: [
          {
            id: "story1",
            title: "Your name and headline",
            icon: true,
            value: "Robert Miles",
            valueDescription: "Manager – Design studio Adobe",
          },
          {
            id: "story2",
            title: "Private profile characteristics",
            icon: true,
            value: "Someone at Adobe",
            valueDescription: "",
          },
          {
            id: "story3",
            title: "Private mode",
            icon: true,
            value: "Anonymous Enoch Member",
          },
        ],
      },
      {
        title: "Edit your public profile",
        description:
          "Choose how your profile appears to non-logged in members via search",
      },

      {
        title: "Who can see or download your email address",
        description:
          "Choose who can see your email address on your profile or in approved apps or download it in their data export",
        question: `Who can see jaisinghdesign@gmail.com on your profile or in 
        approved apps?`,
        inputType: "selectBox",
        inputOptions: ["Your connection", "Everyone on Enoch"],
        extraBlock: (
          <p style={{ fontSize: 12 }} className="visibility-para1 mb-0">
            If someone can see your email address, they will be able to contact
            you directly.
            <a href="#">Learn more</a> You can control your primary email
            address in <a href="#">settings.</a>
          </p>
        ),
      },
      {
        title: "Who can see your connections",
        description: "Choose who can see your list of connections",
        question: "Who can see your connections displayed on your profile",
        inputType: "selectBox",
        inputOptions: ["Nobody", "Your Connections", "EveryOne"],
        extraBlock: (
          <p style={{ fontSize: 12 }} className="visibility-para2 mb-0">
            Other members will still be able to see connections that have
            endorsed you or any connections they share with you. If you don’t
            want your endorsements visible, switch your option to Only you.
            <a href="#">Learn more</a>
          </p>
        ),
      },
      {
        title: "Who can see your last name",
        description: "Choose how you want your name to appearCloseFull",
        question: "Select how your last name appears to others.",
        inputType: "radioSelect",
        inputOptions: [
          {
            id: "lastName1",
            title: "Your name and headline",
            icon: true,
            value: "Robert Miles",
            valueDescription: "Manager – Design studio Adobe",
          },
          {
            id: "lastName2",
            title: "",
            icon: true,
            value: "Robert M.",
            valueDescription: "Manager – Design studio Adobe",
          },
        ],
        extraBlock: (
          <div className="visibility-profile-work">
            <h3>How does this work?</h3>
            <ul>
              <li>
                - Only the first initial of your last name will be displayed for
                anyone who isn't a connection.
              </li>
              <li>
                - Your connections will continue to see your full first and last
                name.
              </li>
              <li>
                - Anyone who's interested in connecting with you can still find
                you by using your first and last name.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Representing your organization and interests",
        description:
          "Show your name and/or profile information with other content shown on LinkedIn?",
        question:
          "Show your name and/or profile information with other content shown on Enoch?",
        inputType: "switch",
        defaultValue: "Yes",
        extraBlock: (
          <p style={{ fontSize: 12 }} className="visibility-para2">
            Your information can be presented with content such as job postings,
            company pages and insights, sponsored content, and other content
            related to your publicly expressed interests. Public interests can
            include a service you like, public events you are attending, or a
            company you follow or have interacted with on LinkedIn by sharing or
            commenting on its posts.
          </p>
        ),
      },
      {
        title: "Profile visibility off Enoch",
        description:
          "Choose how your profile appears via partners’ and other permitted services",
        question:
          "Choose how your profile appears via partners’ and other permitted services",
        inputType: "switch",
        defaultValue: "Yes",
      },
      {
        title: "Profile discovery using email address",
        description:
          "Choose who can discover your profile if they haven't connected with you, but have your email addressCloseNobody",
        question:
          "Who can discover your profile or connect with you if they have your email address?",
        inputType: "selectBox",
        inputOptions: ["Nobody", "2nd-degree connections", "Everyone"],
        defaultValue: "Nobody",
        extraBlock: (
          <p style={{ fontSize: 12 }} className="visibility-para2 mb-0">
            Your 1st-degree connections can always discover you, since you're
            already connected with them.
            <a href="#">Learn more</a>
          </p>
        ),
      },
      {
        title: "Blocking",
        description: "See your list and make changes if you’d like",
        question: "You’re currently blocking 2 people:",
        inputType: "list",
        inputOptions: [
          {
            name: "Nikki Gomes",
            sinceWhen: "2 years ago",
          },
          {
            name: "Dan Brooks",
            sinceWhen: "10 months ago",
          },
        ],
      },
    ],
  },
  {
    id: "visibility-activity",
    title: "Visibility of your Enoch Activity",
    description:
      "Make sure your network only sees the activity you choose to show",
    items: [
      {
        title: "Manage active status",
        description: "Choose who can see when you are on LinkedIn",
        question:
          "Who can see that you are currently active while you are using Enoch?",
        inputType: "radioSelect",
        inputOptions: [
          {
            id: "manage1",
            icon: false,
            value: "Your Connections only",
            valueDescription:
              "All LinkedIn members will be able to see when you are on LinkedIn.",
          },
          {
            id: "manage2",
            icon: false,
            value: "All Enoch members",
            valueDescription:
              "All LinkedIn members will be able to see when you are on LinkedIn.",
          },
          {
            id: "manage3",
            icon: false,
            value: "No one",
            valueDescription: `No LinkedIn member will be able to see when you are on LinkedIn, and you will not be 
            able to see when others are active.`,
          },
        ],
        extraBlock: (
          <div className="visibility-profile-work">
            <p>
              Enoch may use data relating to your activity on Enoch to
              personalize our services, so that they can be more relevant and
              useful to you and others.
            </p>
          </div>
        ),
      },
      {
        title: "Share profile updates with your network",
        description:
          "Choose if your network is notified about key updates from your profile",
        question:
          "Should we notify your network when your profile is updated or upon work anniversaries?",
        inputType: "switch",
        defaultValue: "Yes",
        extraBlock: (
          <p style={{ fontSize: 12 }} className="visibility-para2">
            Your profile updates can include job changes, education changes.
            <a href="#">Learn more</a>
          </p>
        ),
      },
      {
        title: "Notify connections when you're in the news",
        description:
          "Choose if your network is notified when you've been mentioned in an article or blog post",
        question:
          "Should we notify your connections and followers when you’re mentioned in the news?",
        inputType: "switch",
        defaultValue: "Yes",
      },
      {
        title: "Mentions or Tags",
        description: "Choose whether other members can mention or tag you",
        question: "Choose whether other members can mention or tag you",
        inputType: "switch",
        defaultValue: "Yes",
        extraBlock: (
          <p style={{ fontSize: 12 }} className="visibility-para1">
            Example of mentions include tagging you in posts/comments or tags in
            photos. You can control the visibility of your existing mentions.
            <a href="#">Learn more</a>
          </p>
        ),
      },
      {
        title: "Followers",
        description: "Choose who can follow you and see your public updates",
        question:
          "Choosing “Everyone” lets people outside your network follow your public updates. If you switch from “Everyone” to “Your connections,” you’ll lose any out-of-network followers you have now. Any changes you make will take effect in about 24 hours.",
        inputType: "selectBox",
        inputOptions: ["Your Connections", "EveryOne on Enoch"],
      },
    ],
  },
];

export const communicationsData = [
  {
    id: "get-notification",
    title: "How you get your notifications",
    descripton:
      "Controls to make sure you only get notified about what's important to you",
    items: [
      {
        title: "On Enoch",
        description: `Received via enoch web and app`,
      },
      {
        title: "Email",
        description: "Received via your primary email",
      },
      {
        title: "Push",
        description: "Pops up on your device",
      },
    ],
  },
  {
    title: "Who can Reach you",
    descripton: "Manage who you'd like to get communications from",
    id: "who-reach",
    items: [
      {
        title: "Invitations to connect",
        description: "Choose who can connect with you",
        defaultValue: "Everyone",
      },
      {
        title: "Choose who can connect with you",
        description:
          "Choose what invitations you'd like to receive from your network",
        defaultValue: "on",
      },
      {
        title: "Messages",
        description: "Allow select people to message you",
        defaultValue: "inmail",
      },
      {
        title: "Research invites",
        description:
          "Choose if you want to get invites from LinkedIn to participate in research",
        defaultValue: "Yes",
      },
    ],
  },
  {
    title: "Messaging Experience",
    description: "Choose how would you like Enoch to customize your experience",
    id: "message-exp",
    items: [
      {
        title: "Read receipts and typing indicators",
        description: "Turn on read receipts and typing Indicators",
        defaultValue: "on",
      },
      {
        title: "Reply suggestions",
        description: "Turn on recommended replies when messaging",
      },
    ],
  },
];

export const dataPrivacyData = [
  {
    title: "How Enoch uses your Data",
    description: "Manage how your data is used and download it anytime",
    id: "use-your-data",
    items: [
      {
        title: "Manage your data and activity",
        description:
          "Review the data that you’ve provided, and make changes if you’d like",
      },
      {
        title: "Get a copy of your data",
        description:
          "See your options for accessing a copy of your account data, connections, and more",
      },
      {
        title: "Salary Data On Enoch",
        description: "See and delete your salary data",
      },
      {
        title: "Search History",
        description: "Clear all previous searches performed on LinkedIn",
      },
      {
        title: "Personal Demographic Information",
        description:
          "Choose what details you provide about your personal demographics",
      },
      {
        title: "Social, economic, and workplace research",
        description:
          "Choose whether we can make some of your data available for policy and academic research",
        defaultValue: "Yes",
      },
    ],
  },
  {
    title: "Job Seeking Preferences",
    description: "Privacy controls for job seeking activity on Enoch",
    id: "job-seeking",
    items: [
      {
        title: "Job Application Settings",
        description:
          "Choose what information Enoch saves when you submit a job application",
      },
      {
        title: "Sharing your profile when you click Apply",
        description:
          "Choose if you want to share your full profile with the job poster when you're taken off Enoch after clicking Apply",
      },
      {
        title: "Commute preferences",
        description:
          "Set commute times and get job recommendations based on your preferences",
      },
      {
        title:
          "Signal your interest to recruiters at companies you've created job alerts for",
        descripton:
          "This will be applied for companies that you've created job alerts for",
        defaultValue: "No",
      },
      {
        title: "Stored job applicant accounts",
        description:
          "Match which third-party job applicant accounts are stored on Enoch",
        defaultValue: "0 stored accounts",
      },
    ],
  },
  {
    title: "Other Applications",
    description: "Control how associated accounts can use your data",
    id: "other-application",
    items: [
      {
        title: "Permitted Services",
        description: "View services you’ve authorized and manage data sharing",
        defaultValue: "0 connected Apps",
      },
      {
        title: "Microsoft Word",
        description:
          "Choose whether work experience from your profile can be shown in Resume Assistant within Microsoft Word",
        defaultValue: "Yes",
      },
    ],
  },
];

export const advertisingData = [
  {
    title: "Advertising preferences",
    description: "Choose how your data is used to show you more relevant ads",
    id: "advertising-data",
    items: [
      {
        title: "Profile data for personalizing ads",
        description: "Choose how ads appear to you",
        defaultValue: "0 connected Apps",
      },
      {
        title: "Interest categories",
        description:
          "See more relevant ads, such as job ads, based on your and similar members’ activities on Enoch and Bing",
      },
    ],
  },
  {
    title: "Data collected on Enoch",
    description:
      "Choose what type of data you would like LinkedIn to use to show you more relevant ads",
    id: "data-collected",
    items: [
      {
        title: "connections",
        description:
          "Choose whether your connections can be used to show you relevant ads",
        defaultValue: "yes",
      },
      {
        title: "Location",
        description:
          "Choose whether your location can be used to show you relevant ads",
        defaultValue: "Yes",
      },
      {
        title: "Demographics",
        description:
          "Choose whether your age or gender can be used to show you relevant ads",
      },
      {
        title: "Companies You Follow",
        description:
          "See more relevant ads, such as job ads, based on companies you follow",
        defaultValue: "Yes",
      },
      {
        title: "Groups",
        description:
          "Choose whether the groups you've joined can be used to show you relevant ads",
        defaultValue: "Yes",
      },
      {
        title: "Education",
        description:
          "See more relevant ads, such as job ads, based on your education",
      },
      {
        title: "Job Information",
        description:
          "See more relevant ads, such as job ads, based on your job information",
      },
      {
        title: "Employer",
        description:
          "See more relevant ads, such as job ads, based on your company information",
      },
    ],
  },
  {
    title: "Third Party Data",
    description: "Choose how your data is used to show you more relevant ads",
    id: "third-party-data",
    items: [
      {
        title: "Audience insights for websites you visit",
        description:
          "Choose if your data can be used anonymously by third party websites to help them better understand their audiences",
        defaultValue: "Yes",
      },
      {
        title: "Ads outside of Enoch",
        description:
          "Choose if you want to see relevant ads on websites and apps outside of Enoch",
        defaultValue: "Yes",
      },
      {
        title: "Interactions with businesses",
        description:
          "Choose how your information given to businesses is used to show you relevant ads",
        defaultValue: "Yes",
      },
      {
        title: "Ad-related actions",
        description:
          "Choose if your actions on ads can be used to understand and report aggregate ad performance",
        defaultValue: "Yes",
      },
    ],
  },
];
