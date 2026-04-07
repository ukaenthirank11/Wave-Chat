(function () {
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
      { id: "US", name: "United States", dialCode: "+1" },
      { id: "GB", name: "United Kingdom", dialCode: "+44" },
      { id: "IN", name: "India", dialCode: "+91" },
      { id: "CA", name: "Canada", dialCode: "+1" },
      { id: "AU", name: "Australia", dialCode: "+61" },
      { id: "DE", name: "Germany", dialCode: "+49" },
      { id: "FR", name: "France", dialCode: "+33" }
    ],
    contacts: [
      {
        id: "sarah",
        name: "Sarah Chen",
        initials: "SC",
        avatarSrc: "assets/img/avatars/sarah.png",
        preview: "See you tomorrow! 😊",
        lastMessage: "See you tomorrow! 😊",
        time: "5m",
        unread: 2,
        status: "Online",
        colorStart: "#ff8ea2",
        colorEnd: "#c92746"
      },
      {
        id: "marcus",
        name: "Marcus Johnson",
        initials: "MJ",
        avatarSrc: "assets/img/avatars/marcus.png",
        preview: "Thanks for the update",
        lastMessage: "Thanks for the update",
        time: "30m",
        unread: 0,
        status: "Active 30m ago",
        colorStart: "#d8a45c",
        colorEnd: "#8f5a17"
      },
      {
        id: "emily",
        name: "Emily Rodriguez",
        initials: "ER",
        avatarSrc: "assets/img/avatars/emily.png",
        preview: "Let me check and get back to you",
        lastMessage: "Let me check and get back to you",
        time: "2h",
        unread: 0,
        status: "Active 2h ago",
        colorStart: "#9dc4ff",
        colorEnd: "#4765af"
      },
      {
        id: "design-team",
        name: "Design Team",
        initials: "DT",
        avatarSrc: "assets/img/avatars/design-team.png",
        preview: "Alex: Perfect! 👍",
        lastMessage: "Alex: Perfect! 👍",
        time: "4h",
        unread: 5,
        status: "6 people",
        colorStart: "#9b8a78",
        colorEnd: "#4c3e31"
      },
      {
        id: "david",
        name: "David Kim",
        initials: "DK",
        avatarSrc: "assets/img/avatars/david.png",
        preview: "Sounds good",
        lastMessage: "Sounds good",
        time: "yesterday",
        unread: 0,
        status: "Yesterday",
        colorStart: "#8aa3c8",
        colorEnd: "#304a6d"
      },
      {
        id: "lisa",
        name: "Lisa Thompson",
        initials: "LT",
        avatarSrc: "assets/img/avatars/lisa.png",
        preview: "Can we reschedule?",
        lastMessage: "Can we reschedule?",
        time: "2d",
        unread: 0,
        status: "2 days ago",
        colorStart: "#b7938a",
        colorEnd: "#6a4b42"
      }
    ],
    stories: [
      {
        id: "own-story",
        name: "My Story",
        avatarSrc: "assets/img/avatars/david.png",
        timeLabel: "Just now",
        isOwn: true,
        viewed: false,
        title: "My Story",
        subtitle: "Share a photo or clip with everyone.",
        mediaType: "image",
        imageSrc: "assets/img/chat/sunset.png",
        accentStart: "#ff4f61",
        accentEnd: "#ff9f45"
      },
      {
        id: "story-sarah",
        name: "Sarah Chen",
        avatarSrc: "assets/img/avatars/sarah.png",
        timeLabel: "31m",
        viewed: false,
        title: "Sarah's Story",
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
        timeLabel: "48m",
        viewed: false,
        title: "Marcus' Story",
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
        timeLabel: "3h",
        viewed: true,
        title: "Emily's Story",
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
        timeLabel: "5h",
        viewed: true,
        title: "Design Team Story",
        subtitle: "Behind the scenes from the studio.",
        mediaType: "video",
        videoSrc: "assets/media/SRC.mp4",
        accentStart: "#00a3ff",
        accentEnd: "#7d32ff"
      }
    ],
    story: {
      id: "aadhitya",
      name: "Aadhitya",
      initials: "AA",
      timeLabel: "31m",
      title: "Aadhitya's Story",
      subtitle: "Story content would appear here",
      colorStart: "#7d2ef3",
      colorMid: "#f70382",
      colorEnd: "#ff6b00"
    },
    cameraFilters: [
      {
        id: "cat",
        emoji: "🐱",
        previewStart: "#575757",
        previewEnd: "#2b2b2b"
      },
      {
        id: "earth",
        emoji: "🌍",
        previewStart: "#003a74",
        previewEnd: "#1d7ecf"
      },
      {
        id: "hearts",
        emoji: "😍",
        previewStart: "#6f2cf0",
        previewEnd: "#ff006f"
      },
      {
        id: "cool",
        emoji: "😎",
        previewStart: "#3e3e3e",
        previewEnd: "#747474"
      },
      {
        id: "party",
        emoji: "🤩",
        previewStart: "#5a1fff",
        previewEnd: "#1db4ff"
      }
    ],
    chatMessages: [
      {
        id: "m-1",
        type: "text",
        author: "contact",
        text: "I saw the update in the news 🎉",
        time: "8:26 AM"
      },
      {
        id: "m-2",
        type: "text",
        author: "contact",
        text: "💗",
        time: "8:26 AM"
      },
      {
        id: "m-3",
        type: "text",
        author: "self",
        text: "Thanks! Want to celebrate tomorrow?",
        time: "8:31 AM",
        seen: true
      },
      {
        id: "m-4",
        type: "image",
        author: "contact",
        title: "Check out this beautiful sunset from my office!",
        time: "8:36 AM",
        imageSrc: "assets/img/chat/sunset.png",
        artwork: sunsetArt
      },
      {
        id: "m-5",
        type: "text",
        author: "self",
        text: "Wow! That's stunning 🤩",
        time: "8:41 AM",
        seen: true
      },
      {
        id: "m-6",
        type: "text",
        author: "contact",
        text: "Absolutely! How about lunch at that new place?",
        time: "9:01 AM"
      },
      {
        id: "m-7",
        type: "text",
        author: "self",
        text: "Perfect! 12:30 works for me",
        time: "9:06 AM",
        seen: true
      },
      {
        id: "m-8",
        type: "text",
        author: "contact",
        text: "See you tomorrow! 😊",
        time: "9:08 AM"
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
        description: "Send the saved sunset preview",
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
      { id: "stories", label: "Stories", badge: 1, icon: "story" },
      { id: "camera", label: "Camera", badge: 0, icon: "camera" },
      { id: "calls", label: "Calls", badge: 1, icon: "call" }
    ]
  };
})();
