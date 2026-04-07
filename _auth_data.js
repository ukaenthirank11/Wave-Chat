(function () {
  const emoji = function (codePoint) {
    return String.fromCodePoint(codePoint);
  };

  const sunsetArt =
    '<svg class="sunset-art" viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sunset preview">' +
    "<defs>" +
    '<linearGradient id="sunsetSky" x1="0" y1="0" x2="0" y2="1">' +
    '<stop offset="0%" stop-color="#d49aa4" />' +
    '<stop offset="44%" stop-color="#7f7d84" />' +
    '<stop offset="100%" stop-color="#57585d" />' +
    "</linearGradient>" +
    "</defs>" +
    '<rect width="320" height="210" fill="url(#sunsetSky)" />' +
    '<circle cx="198" cy="89" r="16" fill="#ff6a75" />' +
    '<rect y="152" width="320" height="58" fill="#45484d" />' +
    '<rect y="163" width="320" height="7" fill="#62666d" opacity="0.55" />' +
    '<path d="M90 90L118 126L118 153L114 153L114 130L86 96Z" fill="#2e2d31" />' +
    '<path d="M113 101L145 143L145 153L140 153L140 145L108 105Z" fill="#2e2d31" />' +
    '<path d="M138 101L170 143L170 153L165 153L165 145L133 105Z" fill="#2e2d31" />' +
    '<path d="M164 101L196 143L196 153L191 153L191 145L159 105Z" fill="#2e2d31" />' +
    '<path d="M189 101L221 143L221 153L216 153L216 145L184 105Z" fill="#2e2d31" />' +
    '<path d="M214 101L246 143L246 153L241 153L241 145L209 105Z" fill="#2e2d31" />' +
    '<rect x="84" y="120" width="166" height="5" fill="#2e2d31" />' +
    '<rect x="94" y="134" width="148" height="5" fill="#2e2d31" opacity="0.92" />' +
    "</svg>";

  window.WAVECHAT_DATA = {
    countries: [
      {
        id: "IN",
        name: "India",
        dialCode: "+91",
        minLength: 10,
        maxLength: 10,
        mobileRegex: "^[6-9][0-9]{9}$",
        placeholder: "9876543210",
        validationHint: "Indian mobile numbers are 10 digits and usually start with 6 to 9."
      },
      {
        id: "US",
        name: "United States",
        dialCode: "+1",
        minLength: 10,
        maxLength: 10,
        mobileRegex: "^[2-9][0-9]{9}$",
        placeholder: "4155550123",
        validationHint: "US mobile numbers are usually 10 digits after the country code."
      },
      {
        id: "GB",
        name: "United Kingdom",
        dialCode: "+44",
        minLength: 10,
        maxLength: 10,
        mobileRegex: "^7[0-9]{9}$",
        placeholder: "7400123456",
        validationHint: "UK mobile numbers usually begin with 7 after removing the country code."
      },
      {
        id: "CA",
        name: "Canada",
        dialCode: "+1",
        minLength: 10,
        maxLength: 10,
        mobileRegex: "^[2-9][0-9]{9}$",
        placeholder: "6045550188",
        validationHint: "Canadian mobile numbers use the same 10 digit format as the US."
      },
      {
        id: "AU",
        name: "Australia",
        dialCode: "+61",
        minLength: 9,
        maxLength: 9,
        mobileRegex: "^4[0-9]{8}$",
        placeholder: "412345678",
        validationHint: "Australian mobile numbers usually begin with 4 after the country code."
      },
      {
        id: "DE",
        name: "Germany",
        dialCode: "+49",
        minLength: 10,
        maxLength: 11,
        mobileRegex: "^[1-9][0-9]{9,10}$",
        placeholder: "15123456789",
        validationHint: "German mobile numbers vary in length, usually 10 to 11 digits."
      },
      {
        id: "FR",
        name: "France",
        dialCode: "+33",
        minLength: 9,
        maxLength: 9,
        mobileRegex: "^[67][0-9]{8}$",
        placeholder: "612345678",
        validationHint: "French mobile numbers often begin with 6 or 7 after the country code."
      }
    ],
    contacts: [
      {
        id: "sarah",
        name: "Sarah Chen",
        initials: "SC",
        avatarSrc: "assets/img/avatars/sarah.png",
        preview: "See you tomorrow! " + emoji(0x1f60a),
        lastMessage: "See you tomorrow! " + emoji(0x1f60a),
        time: "2m",
        unread: 2,
        status: "Online",
        presence: "online",
        about: "Available for quick replies",
        colorStart: "#ff8ea2",
        colorEnd: "#c92746"
      },
      {
        id: "marcus",
        name: "Marcus Johnson",
        initials: "MJ",
        avatarSrc: "assets/img/avatars/marcus.png",
        preview: "I just shared the deck with everyone.",
        lastMessage: "I just shared the deck with everyone.",
        time: "18m",
        unread: 0,
        status: "Last seen 18m ago",
        presence: "away",
        about: "In a client meeting",
        colorStart: "#d8a45c",
        colorEnd: "#8f5a17"
      },
      {
        id: "emily",
        name: "Emily Rodriguez",
        initials: "ER",
        avatarSrc: "assets/img/avatars/emily.png",
        preview: "Let me check and get back to you.",
        lastMessage: "Let me check and get back to you.",
        time: "1h",
        unread: 0,
        status: "Last seen 1h ago",
        presence: "offline",
        about: "Focused mode enabled",
        colorStart: "#9dc4ff",
        colorEnd: "#4765af"
      },
      {
        id: "design-team",
        name: "Design Team",
        initials: "DT",
        avatarSrc: "assets/img/avatars/design-team.png",
        preview: "Alex: Perfect! " + emoji(0x1f44d),
        lastMessage: "Alex: Perfect! " + emoji(0x1f44d),
        time: "4h",
        unread: 5,
        status: "6 people online",
        presence: "group",
        about: "Daily design sync",
        colorStart: "#9b8a78",
        colorEnd: "#4c3e31"
      },
      {
        id: "david",
        name: "David Kim",
        initials: "DK",
        avatarSrc: "assets/img/avatars/david.png",
        preview: "Sounds good. I will update the sheet.",
        lastMessage: "Sounds good. I will update the sheet.",
        time: "Yesterday",
        unread: 0,
        status: "Last seen yesterday",
        presence: "offline",
        about: "Working remotely",
        colorStart: "#8aa3c8",
        colorEnd: "#304a6d"
      },
      {
        id: "lisa",
        name: "Lisa Thompson",
        initials: "LT",
        avatarSrc: "assets/img/avatars/lisa.png",
        preview: "Can we reschedule for Friday afternoon?",
        lastMessage: "Can we reschedule for Friday afternoon?",
        time: "2d",
        unread: 1,
        status: "Offline",
        presence: "offline",
        about: "Travel day",
        colorStart: "#b7938a",
        colorEnd: "#6a4b42"
      }
    ],
    conversationSeeds: {
      sarah: [
        {
          id: "sarah-1",
          type: "text",
          author: "contact",
          text: "I saw the launch update in the news " + emoji(0x1f389),
          time: "8:26 AM"
        },
        {
          id: "sarah-2",
          type: "text",
          author: "contact",
          text: "Proud of the team " + emoji(0x1f497),
          time: "8:27 AM"
        },
        {
          id: "sarah-3",
          type: "self",
          author: "self",
          text: "Thank you. It was a long week, but worth it.",
          time: "8:31 AM",
          seen: true
        },
        {
          id: "sarah-4",
          type: "image",
          author: "contact",
          title: "Check out this sunset from my office.",
          time: "8:36 AM",
          imageSrc: "assets/img/chat/sunset.png",
          artwork: sunsetArt
        },
        {
          id: "sarah-5",
          type: "text",
          author: "self",
          text: "That view is amazing " + emoji(0x1f60d),
          time: "8:41 AM",
          seen: true
        },
        {
          id: "sarah-6",
          type: "text",
          author: "contact",
          text: "Lunch tomorrow at 12:30?",
          time: "8:42 AM"
        },
        {
          id: "sarah-7",
          type: "text",
          author: "contact",
          text: "See you tomorrow! " + emoji(0x1f60a),
          time: "8:43 AM"
        }
      ],
      marcus: [
        {
          id: "marcus-1",
          type: "text",
          author: "contact",
          text: "I just shared the deck with everyone.",
          time: "9:02 AM"
        },
        {
          id: "marcus-2",
          type: "text",
          author: "self",
          text: "Great. I will review it after standup.",
          time: "9:06 AM",
          seen: true
        }
      ],
      emily: [
        {
          id: "emily-1",
          type: "text",
          author: "contact",
          text: "Let me check the final copy and get back to you.",
          time: "7:48 AM"
        }
      ],
      "design-team": [
        {
          id: "design-1",
          type: "text",
          author: "contact",
          text: "Alex: Perfect! Final assets are uploaded.",
          time: "Yesterday"
        },
        {
          id: "design-2",
          type: "text",
          author: "self",
          text: "Nice work everyone. We can lock the handoff.",
          time: "Yesterday",
          seen: true
        }
      ],
      david: [
        {
          id: "david-1",
          type: "text",
          author: "contact",
          text: "Sounds good. I will update the sheet.",
          time: "Yesterday"
        }
      ],
      lisa: [
        {
          id: "lisa-1",
          type: "text",
          author: "contact",
          text: "Can we reschedule for Friday afternoon?",
          time: "Monday"
        }
      ]
    },
    stories: [
      {
        id: "own-story",
        name: "My Status",
        avatarSrc: "",
        timeLabel: "Tap to add status",
        isOwn: true,
        viewed: false,
        title: "My Status",
        subtitle: "Share a photo, video, or quick update with your contacts.",
        mediaType: "image",
        imageSrc: "assets/img/chat/sunset.png",
        accentStart: "#ff4f61",
        accentEnd: "#ff9f45"
      },
      {
        id: "story-sarah",
        name: "Sarah Chen",
        avatarSrc: "assets/img/avatars/sarah.png",
        timeLabel: "31m ago",
        viewed: false,
        title: "Sarah's Status",
        subtitle: "Sunset views after the launch review.",
        mediaType: "image",
        imageSrc: "assets/img/chat/sunset.png",
        accentStart: "#ff4f61",
        accentEnd: "#ff9f45"
      },
      {
        id: "story-marcus",
        name: "Marcus Johnson",
        avatarSrc: "assets/img/avatars/marcus.png",
        timeLabel: "48m ago",
        viewed: false,
        title: "Marcus' Status",
        subtitle: "A quick clip from today's meetup.",
        mediaType: "video",
        videoSrc: "assets/media/SRC.mp4",
        accentStart: "#5b63ff",
        accentEnd: "#7d32ff"
      },
      {
        id: "story-emily",
        name: "Emily Rodriguez",
        avatarSrc: "assets/img/avatars/emily.png",
        timeLabel: "3h ago",
        viewed: true,
        title: "Emily's Status",
        subtitle: "Wrapped up another design review.",
        mediaType: "image",
        imageSrc: "assets/img/chat/sunset.png",
        accentStart: "#7d32ff",
        accentEnd: "#ff4f61"
      },
      {
        id: "story-design",
        name: "Design Team",
        avatarSrc: "assets/img/avatars/design-team.png",
        timeLabel: "5h ago",
        viewed: true,
        title: "Design Team Status",
        subtitle: "Behind the scenes from the studio.",
        mediaType: "video",
        videoSrc: "assets/media/SRC.mp4",
        accentStart: "#00a3ff",
        accentEnd: "#7d32ff"
      }
    ],
    cameraFilters: [
      {
        id: "cat",
        emoji: emoji(0x1f431),
        previewStart: "#575757",
        previewEnd: "#2b2b2b"
      },
      {
        id: "earth",
        emoji: emoji(0x1f30d),
        previewStart: "#003a74",
        previewEnd: "#1d7ecf"
      },
      {
        id: "hearts",
        emoji: emoji(0x1f60d),
        previewStart: "#6f2cf0",
        previewEnd: "#ff006f"
      },
      {
        id: "cool",
        emoji: emoji(0x1f60e),
        previewStart: "#3e3e3e",
        previewEnd: "#747474"
      },
      {
        id: "party",
        emoji: emoji(0x1f973),
        previewStart: "#5a1fff",
        previewEnd: "#1db4ff"
      }
    ],
    calendarRows: [
      ["29", "30", "31", "1", "2", "3", "4"],
      ["5", "6", "7", "8", "9", "10", "11"],
      ["12", "13", "14", "15", "16", "17", "18"],
      ["19", "20", "21", "22", "23", "24", "25"],
      ["26", "27", "28", "29", "30", "1", "2"]
    ],
    keypad: [
      { value: "1", letters: "" },
      { value: "2", letters: "ABC" },
      { value: "3", letters: "DEF" },
      { value: "4", letters: "GHI" },
      { value: "5", letters: "JKL" },
      { value: "6", letters: "MNO" },
      { value: "7", letters: "PQRS" },
      { value: "8", letters: "TUV" },
      { value: "9", letters: "WXYZ" },
      { value: "*", letters: "" },
      { value: "0", letters: "+" },
      { value: "#", letters: "" }
    ],
    callLogs: [
      {
        id: "call-1",
        contactId: "sarah",
        direction: "incoming",
        callType: "video",
        timeLabel: "45m ago",
        count: 2
      },
      {
        id: "call-2",
        contactId: "marcus",
        direction: "missed",
        callType: "voice",
        timeLabel: "1h ago",
        count: 1
      },
      {
        id: "call-3",
        contactId: "emily",
        direction: "outgoing",
        callType: "video",
        timeLabel: "3h ago",
        count: 1
      },
      {
        id: "call-4",
        contactId: "design-team",
        direction: "incoming",
        callType: "voice",
        timeLabel: "Yesterday",
        count: 5
      },
      {
        id: "call-5",
        contactId: "lisa",
        direction: "missed",
        callType: "video",
        timeLabel: "2d ago",
        count: 1
      }
    ],
    favoriteContactIds: ["sarah", "marcus", "design-team", "lisa"],
    quickEmojis: [":)", "<3", "haha", "wow", "fire", "party"],
    chatMenuItems: [
      { id: "view-contact", label: "View contact" },
      { id: "media", label: "Media, links, and docs" },
      { id: "search-chat", label: "Search" },
      { id: "mute", label: "Mute notifications" },
      { id: "clear-chat", label: "Clear chat" },
      { id: "export-chat", label: "Export chat" },
      { id: "shortcut", label: "Add shortcut" },
      { id: "block", label: "Block" },
      { id: "report", label: "Report" }
    ],
    attachmentOptions: [
      {
        id: "photo",
        label: "Photo",
        description: "Send a saved image preview",
        icon: "camera"
      },
      {
        id: "video",
        label: "Video",
        description: "Share the attached demo clip",
        icon: "video"
      },
      {
        id: "document",
        label: "Document",
        description: "Send project notes as text",
        icon: "paperclip"
      }
    ],
    tabs: [
      { id: "chats", label: "Chats", badge: 0, icon: "chat" },
      { id: "stories", label: "Status", badge: 2, icon: "story" },
      { id: "camera", label: "Camera", badge: 0, icon: "camera" },
      { id: "calls", label: "Calls", badge: 1, icon: "call" }
    ]
  };
})();
