export const mediaCodecs = [
  {
    kind: "audio",
    mimeType: "audio/opus",
    clockRate: 48000,
    channels: 2,
  },
  {
    kind: "video",
    mimeType: "video/VP8", // You can also add H264 or VP9 if needed
    clockRate: 90000,
    parameters: {},
  },
];

export const webRtcTransportOptions = {
  listenIps: [
    {
      ip: "0.0.0.0", // Listen on all interfaces inside the server
      announcedIp: "sd012.princecodes.online", // <- IMPORTANT: Replace with EC2 public IP or domain
    },
  ],
  enableUdp: true,
  enableTcp: true,
  preferUdp: true,
  initialAvailableOutgoingBitrate: 1000000,
  maxIncomingBitrate: 1500000,
};

// Optional — limit worker ports for AWS firewall
export const workerSettings = {
  rtcMinPort: 40000,
  rtcMaxPort: 49999,
};

// ICE Servers (STUN + TURN)
export const iceServers = [
  { urls: "stun:stun.l.google.com:19302" }, // Public STUN
  {
    urls: "turn:YOUR_DOMAIN_OR_IP:3478", // TURN server (Coturn)
    username: "user", // Your TURN username
    credential: "pass", // Your TURN password
  },
];