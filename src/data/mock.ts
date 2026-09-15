export const couple = {
  roomCode: 'CHAM-8QZ7',
  selfName: 'Bạn',
  partnerName: 'Người ấy',
  partnerNickname: 'Bé',
  partnerFullName: 'Minh Triết',
  distanceLabel: '12 km',
  statusLine: 'Anh đang ở đây · Vừa mới ủng hộ 3 phút trước',
} as const;

export const copy = {
  brand: 'CHẠM',
  brandWordmark: 'Chạm',
  splashHint: 'Chạm để bắt đầu',
  loginHello: 'Chào bạn',
  loginSubtitle: 'Bước vào không gian dành riêng cho hai người.',
  continueApple: 'Tiếp tục với Apple',
  continueGoogle: 'Tiếp tục với Google',
  or: 'hoặc',
  continuePhone: 'Đăng nhập bằng số điện thoại',
  phoneTitle: 'Nhập số điện thoại',
  phoneSubtitle: 'Chúng tôi sẽ gửi mã xác nhận đến số điện thoại này.',
  phonePlaceholder: 'Số điện thoại của bạn',
  continue: 'Tiếp tục',
  profileTitle: 'Về bạn',
  profileSubtitle: 'Hãy cho CHẠM biết một chút về bạn nhé',
  connectTitle: 'Cài Đặt Kết Nối',
  connectHeadline: 'Kết nối với người ấy',
  connectSubtitle: 'Chỉ hai bạn có thể vào không gian này. Hãy chọn phương thức kết nối.',
  createSpaceTitle: 'Tạo không gian mới',
  createSpaceBody: 'Tạo mã lời mời rồi gửi cho người ấy để bắt đầu điều này.',
  joinSpaceTitle: 'Tham gia bằng mã',
  joinSpaceBody: 'Nhập mã số kết nối hoặc quét QR do đối phương chia sẻ.',
  inviteHeadline: 'Mời người ấy',
  inviteSubtitle: 'Gửi mã kết nối này hoặc để người ấy đến mã không gian chung của hai bạn.',
  coupleCodeLabel: 'MÃ KẾT NỐI CỦA HAI BẠN',
  copyCode: 'Sao chép mã',
  shareInvite: 'Gửi lời mời qua tin nhắn',
  showQr: 'Hiển thị mã QR để quét trực tiếp',
  waitingHeadline: 'Đang chờ người ấy',
  waitingSubtitle: 'Người ấy sẽ thấy mã này và bước vào không gian chung cùng lúc với bạn.',
  homeGreeting: 'Chào buổi sáng, Bé',
  homeHeroTitle: 'Em nhớ anh',
  homeHeroBody: 'Chạm một cái để gửi ngay tín hiệu yêu thương',
  homeHeroHint: 'Nhấn để truyền một rung hoàc',
  quickActionsLabel: 'CÁI CHẠM NHANH',
} as const;

export const quickActions = [
  { id: 'work', title: 'Em đi làm nhé', subtitle: 'Chúc anh ngày mới' },
  { id: 'home', title: 'Em về rồi', subtitle: 'Mở cửa đón em toàn' },
  { id: 'hug', title: 'Ôm em nhé', subtitle: 'Gửi một ôm dịu dàng' },
  { id: 'call', title: 'Gọi em nha', subtitle: 'Khi nào anh rảnh nhé' },
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
