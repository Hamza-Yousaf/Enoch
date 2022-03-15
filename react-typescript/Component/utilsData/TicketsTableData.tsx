export const MarkData = [
  "All",
  "None",
  "Read",
  "Unread",
  "Starred",
  "Unstarred",
];
export const TableHeadCellData = [
  "Lead",
  "Ticket ID",
  "Category",
  "Subject",
  "",
  "Status",
  "Date & Time",
  "",
];
export const TableHeadCellDataDraft = [
  "Lead",
  "Category",
  "Subject",
  "Message",
  "Date & Time",
  "",
];
export const TicketsInInbox = [
  {
    userImg: "images/usr1.png",
    userName: "Regina Cooper",
    mainID: "876829",
    subID: "K033",
    Category: "Security",
    Subject: "Be aware of scam",
    Status: "N/A",
    dateAndTime: "12/05/2021 10:30 AM",
    read: true,
    images: [
      {
        src: "images/image-icon.png",
      },
    ],
    messageThread: [
      {
        type: "receiver",
        message: (
          <>
            <p>Hi Support,</p>
            <p>Please find attached KYC documents. </p>
            <p>Thanks,</p>
            <p>Robert Rose</p>
          </>
        ),
        date: "10/05/2021",
        images: [
          {
            src: "images/image-icon.png",
            imgText: "Image...",
          },
          {
            src: "images/copyof.png",
            imgText: "Copy...",
          },
          {
            src: "images/image-icon.png",
            imgText: "Image...",
          },
          {
            src: "images/copyof.png",
            imgText: "Copy...",
          },
        ],
      },
      {
        type: "sender",
        message: (
          <>
            <p>@Robertrose </p>
            <p>Thank you, I will include KYC desk</p>
            <p>Thanks ,</p>
          </>
        ),
        date: "Yesterday",
        senderImg: "images/chat-user.png",
        senderName: "Regina Copper",
        senderRole: "Support Desk",
      },
    ],
    usersAndActionsInThread: [
      {
        type: "customer",
        userImg: "images/avtr.png",
        date: "10/05/2021",
      },
      {
        type: "support",
        userImg: "images/chat-user.png",
        date: "Yesterday",
        userName: "Regina Copper",
        role: "Support Desk",
      },
      {
        type: "action",
        activity: "Regina Include Jack",
      },
      {
        type: "support",
        userImg: "images/user3.png",
        date: "12:14 PM",
        userName: "Jack Williams",
        role: "KYC Desk",
      },
      {
        type: "action",
        activity: "Added Luciana Kereney & Annita Feggins",
      },
      {
        type: "doubleAction",
        user1Img: "images/user4.png",
        user1Name: "Luciana Kerney",
        user1Role: "KYC Desk",
        date: "12/05/2021",
        user2Img: "images/user5.png",
        user2Name: "Anita Feggins",
        user2Role: "KYC Desk",
      },
    ],
  },
  {
    userImg: "images/user2.png",
    userName: "Robert Rose",
    mainID: "876829",
    subID: "K032",
    Category: "Account",
    Subject: "KYC Documents",
    Status: "In-Progress",
    dateAndTime: "11/05/2021 11:00 AM",
    read: false,

    images: [
      {
        src: "images/image-icon.png",
      },
      {
        src: "images/copyof.png",
      },
      {
        src: "images/image-icon.png",
      },
      {
        src: "images/copyof.png",
      },
    ],
    messageThread: [
      {
        type: "receiver",
        message: (
          <>
            <p>Hi Support,</p>
            <p>Please find attached KYC documents. </p>
            <p>Thanks,</p>
            <p>Robert Rose</p>
          </>
        ),
        date: "10/05/2021",
        images: [
          {
            src: "images/image-icon.png",
            imgText: "Image...",
          },
          {
            src: "images/copyof.png",
            imgText: "Copy...",
          },
          {
            src: "images/image-icon.png",
            imgText: "Image...",
          },
          {
            src: "images/copyof.png",
            imgText: "Copy...",
          },
        ],
      },
      {
        type: "sender",
        message: (
          <>
            <p>@Robertrose </p>
            <p>Thank you, I will include KYC desk</p>
            <p>Thanks ,</p>
          </>
        ),
        date: "Yesterday",
        senderImg: "images/chat-user.png",
        senderName: "Regina Copper",
        senderRole: "Support Desk",
      },
    ],
    usersAndActionsInThread: [],
  },
  {
    userImg: "images/usr1.png",
    userName: "Regina Cooper",
    mainID: "876829",
    subID: "K024",
    Category: "Promotion",
    Subject: "Stake stable coin 22% APY",
    Status: "N/A",
    dateAndTime: "10/05/2021 05:00 AM",
    read: false,

    images: [],
    messageThread: [],
    usersAndActionsInThread: [],
  },
  {
    userImg: "images/usr1.png",
    userName: "Regina Cooper",
    mainID: "876829",
    subID: "K020",
    Category: "Promotion",
    Subject: "Stake in pool $YOM /$USDC",
    Status: "solved",
    dateAndTime: "05/05/2021 10:00 AM",
    read: true,

    images: [],
    messageThread: [],
    usersAndActionsInThread: [],
  },
  {
    userImg: "images/user2.png",
    userName: "Robert Rose",
    mainID: "876829",
    subID: "K018",
    Category: "Account",
    Subject: "Correct My Address",
    Status: "solved",
    dateAndTime: "11/05/2021 11:00 AM",
    read: false,

    images: [
      {
        src: "images/image-icon.png",
      },
    ],
    messageThread: [],
    usersAndActionsInThread: [],
  },
  {
    userImg: "images/user2.png",
    userName: "Robert Rose",
    mainID: "876829",
    subID: "K012",
    Category: "LP",
    Subject: "what’s LP Reward",
    Status: "solved",
    dateAndTime: "28/04/2021 10:30 AM",
    read: false,
    images: [],
    messageThread: [],
    usersAndActionsInThread: [],
  },
  {
    userImg: "images/DanBrooks.png",
    userName: "Dan Brooks",
    mainID: "876829",
    subID: "K010",
    Category: "LaunchPad",
    Subject: "Upcoming Projects",
    Status: "solved",
    dateAndTime: "25/04/2021 09:30 AM",
    read: false,
    images: [],
    messageThread: [],
    usersAndActionsInThread: [],
  },
  {
    userImg: "images/StevenGomes.png",
    userName: "Steven Gomes",
    mainID: "876829",
    subID: "K011",
    Category: "Exchange",
    Subject: "I am not able to trade",
    Status: "solved",
    dateAndTime: "12/04/2021 09:00 AM",
    read: true,
    images: [
      {
        src: "images/image-icon.png",
      },
    ],
    messageThread: [],
    usersAndActionsInThread: [],
  },
];

export const TicketsInSent = [
  {
    userImg: "images/user2.png",
    userName: "Robert Rose",
    mainID: "876829",
    subID: "K032",
    Category: "Account",
    Subject: "KYC Documents",
    Status: "In-Progress",
    dateAndTime: "11/05/2021 11:00 AM",
    read: false,
    images: [
      {
        src: "images/image-icon.png",
      },
      {
        src: "images/copyof.png",
      },
      {
        src: "images/image-icon.png",
      },
      {
        src: "images/copyof.png",
      },
    ],
    messageThread: [
      {
        type: "receiver",
        message: (
          <>
            <p>Hi Support,</p>
            <p>Please find attached KYC documents. </p>
            <p>Thanks,</p>
            <p>Robert Rose</p>
          </>
        ),
        date: "10/05/2021",
        images: [
          {
            src: "images/image-icon.png",
            imgText: "Image...",
          },
          {
            src: "images/copyof.png",
            imgText: "Copy...",
          },
          {
            src: "images/image-icon.png",
            imgText: "Image...",
          },
          {
            src: "images/copyof.png",
            imgText: "Copy...",
          },
        ],
      },
      {
        type: "sender",
        message: (
          <>
            <p>@Robertrose </p>
            <p>Thank you, I will include KYC desk</p>
            <p>Thanks ,</p>
          </>
        ),
        date: "Yesterday",
        senderImg: "images/chat-user.png",
        senderName: "Regina Copper",
        senderRole: "Support Desk",
      },
    ],
    usersAndActionsInThread: [
      {
        type: "customer",
        userImg: "images/avtr.png",
        date: "10/05/2021",
      },
      {
        type: "support",
        userImg: "images/chat-user.png",
        date: "Yesterday",
        userName: "Regina Copper",
        role: "Support Desk",
      },
    ],
  },

  {
    userImg: "images/usr1.png",
    userName: "Regina Cooper",
    mainID: "876829",
    subID: "K020",
    Category: "Promotion",
    Subject: "Stake in pool $YOM /$USDC",
    Status: "solved",
    dateAndTime: "05/05/2021 10:00 AM",
    read: true,

    images: [],
    messageThread: [
      {
        type: "receiver",
        message: (
          <>
            <p>Hi Support,</p>
            <p>Please find attached KYC documents. </p>
            <p>Thanks,</p>
            <p>Robert Rose</p>
          </>
        ),
        date: "10/05/2021",
        images: [
          {
            src: "images/image-icon.png",
            imgText: "Image...",
          },
          {
            src: "images/copyof.png",
            imgText: "Copy...",
          },
          {
            src: "images/image-icon.png",
            imgText: "Image...",
          },
          {
            src: "images/copyof.png",
            imgText: "Copy...",
          },
        ],
      },
      {
        type: "sender",
        message: (
          <>
            <p>@Robertrose </p>
            <p>Thank you, I will include KYC desk</p>
            <p>Thanks ,</p>
          </>
        ),
        date: "Yesterday",
        senderImg: "images/chat-user.png",
        senderName: "Regina Copper",
        senderRole: "Support Desk",
      },
    ],
    usersAndActionsInThread: [
      {
        type: "customer",
        userImg: "images/avtr.png",
        date: "10/05/2021",
      },
      {
        type: "support",
        userImg: "images/chat-user.png",
        date: "Yesterday",
        userName: "Regina Copper",
        role: "Support Desk",
      },
    ],
  },

  {
    userImg: "images/DanBrooks.png",
    userName: "Dan Brooks",
    mainID: "876829",
    subID: "K010",
    Category: "LaunchPad",
    Subject: "Upcoming Projects",
    Status: "solved",
    dateAndTime: "25/04/2021 09:30 AM",
    read: false,
    images: [],
    messageThread: [
      {
        type: "receiver",
        message: (
          <>
            <p>Hi Support,</p>
            <p>Please find attached KYC documents. </p>
            <p>Thanks,</p>
            <p>Robert Rose</p>
          </>
        ),
        date: "10/05/2021",
        images: [
          {
            src: "images/image-icon.png",
            imgText: "Image...",
          },
          {
            src: "images/copyof.png",
            imgText: "Copy...",
          },
          {
            src: "images/image-icon.png",
            imgText: "Image...",
          },
          {
            src: "images/copyof.png",
            imgText: "Copy...",
          },
        ],
      },
      {
        type: "sender",
        message: (
          <>
            <p>@Robertrose </p>
            <p>Thank you, I will include KYC desk</p>
            <p>Thanks ,</p>
          </>
        ),
        date: "Yesterday",
        senderImg: "images/chat-user.png",
        senderName: "Regina Copper",
        senderRole: "Support Desk",
      },
    ],
    usersAndActionsInThread: [
      {
        type: "customer",
        userImg: "images/avtr.png",
        date: "10/05/2021",
      },
      {
        type: "support",
        userImg: "images/chat-user.png",
        date: "Yesterday",
        userName: "Regina Copper",
        role: "Support Desk",
      },
    ],
  },
  {
    userImg: "images/StevenGomes.png",
    userName: "Steven Gomes",
    mainID: "876829",
    subID: "K011",
    Category: "Exchange",
    Subject: "I am not able to trade",
    Status: "solved",
    dateAndTime: "12/04/2021 09:00 AM",
    read: true,
    images: [
      {
        src: "images/image-icon.png",
      },
    ],
    messageThread: [],
    usersAndActionsInThread: [],
  },
];

export const TicketsInDraft = [
  {
    userImg: "images/user2.png",
    Category: "Account",
    Subject: "Find my documents",
    read: "true",
    dateAndTime: "11/05/2021 11:00 AM",
    message: "Sent you the documents",
    subID: "1",
  },
  {
    userImg: "images/usr1.png",
    Category: "Promotion",
    Subject: "Profile picture issue",
    read: "true",
    dateAndTime: "05/05/2021 10:00 AM",
    message: "Please find all desired attachment for my KYC to br done...",
    subID: "2",
  },
  {
    userImg: "images/DanBrooks.png",
    Category: "LaunchPad",
    Subject: "wallet",
    read: true,
    dateAndTime: "25/04/2021 09:30 AM",
    message: " ",
    subID: "3",
  },
];

export const TableActionData = [
  {
    name: "Delete",
    itemClass: "hDelete",
    images: [
      { imgSrc: "images/hDelete.png", imgClass: "img-fluid del-norml" },
      {
        imgSrc: "images/redDelete.png",
        imgClass: "img-fluid reddel-hov",
      },
    ],
  },
  {
    name: "download",
    itemClass: "",
    liClass: "disable-tickets",
    images: [
      {
        imgSrc: "images/hDownload.png",
        imgClass: "img-fluid",
      },
    ],
  },
  {
    name: "Share",
    itemClass: "",
    liClass: "disable-tickets share-ticket",
    images: [
      {
        imgSrc: "images/hShare.png",
        imgClass: "img-fluid",
      },
    ],
  },
  {
    name: "Forward",
    itemClass: "img-fluid",
    liClass: "disable-tickets forword-ticket",
    images: [
      {
        imgSrc: "images/hForword.png",
        imgClass: "img-fluid",
      },
    ],
  },
];
