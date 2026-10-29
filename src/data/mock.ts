export const couple = {
  /** Số điện thoại demo (màn OTP). */
  phoneDisplay: '+84 987 654 321',
  /** Sau bao lâu thì giả lập người ấy nhập mã (màn 10 → 11). */
  partnerJoinDelayMs: 6000,
  roomCode: 'CHAM-8QZ7',
  selfName: 'Bạn',
  partnerName: 'Người ấy',
  partnerNickname: 'Bé',
  partnerFullName: 'Minh Triết',
  distanceLabel: '12 km',
  statusLine: 'Anh đang ở đây · Vừa mở ứng dụng 3 phút trước',
} as const;

/** Nội dung chữ của các màn Home/Tab (legacy) — Onboarding & Ghép đôi nằm ở data/copy.ts. */
export const copy = {
  brandWordmark: 'Chạm',
  homeEyebrow: 'Kết nối đồng điệu',
  homeGreeting: 'Chào buổi sáng, Bé',
  homeHeroChip: 'Chạm yêu thương tức thì',
  homeHeroTitle: 'Em nhớ anh',
  homeHeroBody: 'Chạm một cái để gửi ngay tín hiệu yêu thương',
  homeHeroHint: 'Nhấn để truyền nhịp rung haptic',
  quickActionsLabel: 'CÁI CHẠM NHANH',
  quickActionsLink: 'Gửi chỉ với 1 chạm',
  createTap: 'Tạo cái chạm mới',
  recentTapsLabel: 'NHỊP CHẠM GẦN NHẤT',
  recentTapsLink: 'Xem tất cả',
  anniversaryLabel: 'KỶ NIỆM',
  anniversaryTitle: 'Kỷ niệm 428 ngày bên nhau',
  anniversaryQuote: '“Mỗi nhịp chạm là một lần nhớ”',
  anniversaryCaption: 'Hôm nay anh và bạn đã 14 cái chạm',
  tabHome: 'Chạm',
  tabMoments: 'Khoảnh khắc',
  tabTogether: 'Hai đứa',
} as const;

export const quickActions = [
  { id: 'work', title: 'Em đi làm nhé', subtitle: 'Chúc anh ngày vui vẻ', iconGlyph: '▣' },
  { id: 'home', title: 'Em về rồi', subtitle: 'Về đến tổ ấm an toàn', iconGlyph: '⌂' },
  { id: 'hug', title: 'Ôm em nhé', subtitle: 'Cần chút dịu dàng', iconGlyph: '♡' },
  { id: 'call', title: 'Gọi em nha', subtitle: 'Khi nào anh rảnh nhé', iconGlyph: '☎' },
] as const;

export const recentTaps = [
  {
    id: 'hug',
    actor: 'Anh vừa gửi:',
    title: 'Ôm em nhé',
    time: '15 phút trước',
    status: '♥ Đã đáp lại',
    incoming: true,
  },
  {
    id: 'miss',
    actor: 'Bạn đã gửi:',
    title: 'Em nhớ anh ♥',
    time: 'Sáng nay · 07:45',
    status: 'Minh Triết đã nhận',
    incoming: false,
  },
] as const;

export const settingsGroups = [
  {
    id: 'haptics',
    title: 'Giờ ngủ & Haptic',
    subtitle: 'Nhắc nhẹ và rung khi cần im lặng',
  },
  {
    id: 'theme',
    title: 'Theme màu cảm xúc',
    subtitle: 'Bộ 4 palette cho không gian đôi',
  },
  {
    id: 'safety',
    title: 'Face ID & An toàn',
    subtitle: 'Khu vực riêng tư cho hai bạn',
  },
] as const;
