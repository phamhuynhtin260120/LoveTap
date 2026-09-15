"""Generate Stitch catalog PNGs from captured board copy (no Stitch MCP)."""

from __future__ import annotations

import json
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).parent
DESIGNS = ROOT / "designs"
DESIGNS.mkdir(exist_ok=True)

W, H = 390, 844
BG = (255, 246, 243)
INK = (58, 42, 42)
PINK = (196, 92, 106)
MUTED = (154, 122, 122)
CARD = (255, 255, 255)

SCREENS = [
    {
        "id": "02-splash",
        "number": "02",
        "label": "Splash Screen",
        "route": "/",
        "status": "done",
        "copySource": "stitch-screenshot",
        "lines": ["CHẠM", "Chạm để bắt đầu"],
    },
    {
        "id": "03-login",
        "number": "03",
        "label": "Login Screen",
        "route": "/login",
        "status": "done",
        "copySource": "stitch-screenshot",
        "lines": [
            "CHẠM",
            "Chào bạn",
            "Bước vào không gian dành riêng cho hai người.",
            "Tiếp tục với Apple",
            "Tiếp tục với Google",
            "hoặc",
            "Đăng nhập bằng số điện thoại",
        ],
    },
    {
        "id": "04-phone",
        "number": "04",
        "label": "Phone Number",
        "route": "/phone",
        "status": "done",
        "copySource": "stitch-screenshot",
        "lines": [
            "Nhập số điện thoại",
            "Chúng tôi sẽ gửi mã xác nhận đến số điện thoại này.",
            "Số điện thoại của bạn",
            "Tiếp tục",
        ],
    },
    {
        "id": "05-otp",
        "number": "05",
        "label": "OTP Confirm",
        "route": "/otp",
        "status": "done",
        "copySource": "inferred-from-flow",
        "lines": [
            "Nhập mã xác nhận",
            "Mã 6 số đã gửi đến số điện thoại của bạn.",
            "Tiếp tục",
        ],
    },
    {
        "id": "06-profile-setup",
        "number": "06",
        "label": "Profile Setup",
        "route": "/profile-setup",
        "status": "done",
        "copySource": "stitch-screenshot",
        "lines": [
            "Về bạn",
            "Hãy cho CHẠM biết một chút về bạn nhé",
            "Tên của bạn",
            "Người ấy sẽ gọi bạn là gì?",
            "Tiếp tục",
        ],
    },
    {
        "id": "07-connect",
        "number": "07",
        "label": "Connection Method",
        "route": "/connect",
        "status": "done",
        "copySource": "stitch-screenshot",
        "lines": [
            "Cài Đặt Kết Nối",
            "Kết nối với người ấy",
            "Chỉ hai bạn có thể vào không gian này.",
            "Hãy chọn phương thức bắt đầu:",
            "Khuyên dùng nếu bạn là người tạo trước",
            "Tạo không gian mới",
            "Khởi tạo mã tức thì",
            "Nếu người ấy đã tạo mã",
            "Tham gia bằng mã",
            "Nhập mã 6 chữ số / Quét QR",
            "Cùng xây tổ ấm số",
            "Không gian hoàn toàn riêng tư. Mã hóa đầu cuối giữa hai thiết bị.",
        ],
    },
    {
        "id": "08-invite",
        "number": "08",
        "label": "Create Invitation",
        "route": "/invite",
        "status": "done",
        "copySource": "stitch-screenshot",
        "lines": [
            "Mời người ấy",
            "MÃ KẾT NỐI CỦA HAI BẠN",
            "CHAM-8QZ7",
            "Sao chép mã",
            "Gửi lời mời qua tin nhắn",
            "Hiển thị mã QR để quét trực tiếp",
        ],
    },
    {
        "id": "09-join",
        "number": "09",
        "label": "Join With Code",
        "route": "/join",
        "status": "done",
        "copySource": "inferred-from-flow",
        "lines": [
            "Tham gia bằng mã",
            "Nhập mã 6 chữ số do người ấy chia sẻ.",
            "Quét mã QR",
        ],
    },
    {
        "id": "10-waiting",
        "number": "10",
        "label": "Waiting for partner",
        "route": "/waiting",
        "status": "done",
        "copySource": "stitch-screenshot",
        "lines": [
            "Đang chờ người ấy",
            "Người ấy sẽ thấy mã này và bước vào không gian chung cùng lúc với bạn.",
            "CHAM-8QZ7",
            "Vào không gian đôi",
        ],
    },
    {
        "id": "11-qr",
        "number": "11",
        "label": "Show QR",
        "route": "/qr",
        "status": "done",
        "copySource": "inferred-from-flow",
        "lines": ["Mã QR kết nối", "Để người ấy quét mã này bằng CHẠM.", "CHAM-8QZ7"],
    },
    {
        "id": "12-home",
        "number": "12",
        "label": "Main Home / Chạm",
        "route": "/home",
        "status": "done",
        "copySource": "stitch-screenshot",
        "lines": [
            "Chạm",
            "Kết nối đồng điệu",
            "Chào buổi sáng, Bé",
            "Minh Triết · 12 km",
            "Anh đang ở đây · Vừa mở ứng dụng 3 phút trước",
            "Chạm yêu thương tức thì",
            "Em nhớ anh",
            "Chạm một cái để gửi ngay tín hiệu yêu thương",
            "Nhấn để truyền nhịp rung haptic",
            "CÁI CHẠM NHANH",
            "Gửi chỉ với 1 chạm",
            "Em đi làm nhé / Chúc anh ngày vui vẻ",
            "Em về rồi / Về đến tổ ấm an toàn",
            "Ôm em nhé / Cần chút dịu dàng",
            "Gọi em nha / Khi nào anh rảnh nhé",
            "Tạo cái chạm mới",
            "NHỊP CHẠM GẦN NHẤT",
            "KỶ NIỆM",
            "Kỷ niệm 428 ngày bên nhau",
            "Mỗi nhịp chạm là một lần nhớ",
            "Hôm nay anh và bạn đã 14 cái chạm",
            "Tab: Chạm / Khoảnh khắc / Hai đứa",
        ],
    },
    {
        "id": "13-create-tap",
        "number": "13",
        "label": "Create Tap",
        "route": "/create-tap",
        "status": "done",
        "copySource": "inferred-from-flow",
        "lines": ["Tạo cái chạm mới", "Tên cái chạm", "Lời nhắn", "Lưu cái chạm"],
    },
    {
        "id": "14-taps",
        "number": "14",
        "label": "All Recent Taps",
        "route": "/taps",
        "status": "done",
        "copySource": "inferred-from-flow",
        "lines": [
            "Nhịp chạm gần nhất",
            "Anh vừa gửi: Ôm em nhé",
            "Bạn đã gửi: Em nhớ anh",
        ],
    },
    {
        "id": "15-moments",
        "number": "15",
        "label": "Khoảnh khắc",
        "route": "/moments",
        "status": "done",
        "copySource": "stitch-screenshot",
        "lines": ["Khoảnh khắc", "Kỷ niệm 428 ngày bên nhau", "14 cái chạm hôm nay"],
    },
    {
        "id": "16-together",
        "number": "16",
        "label": "Hai đứa",
        "route": "/together",
        "status": "done",
        "copySource": "stitch-screenshot",
        "lines": ["Hai đứa", "Bạn & Minh Triết", "428 ngày bên nhau", "CHAM-8QZ7"],
    },
    {
        "id": "17-moment-detail",
        "number": "17",
        "label": "Moment Detail",
        "route": "/moment/428",
        "status": "done",
        "copySource": "inferred-from-flow",
        "lines": [
            "Kỷ niệm 428 ngày bên nhau",
            "Mỗi nhịp chạm là một lần nhớ",
            "Hôm nay anh và bạn đã 14 cái chạm",
        ],
    },
    {
        "id": "18-skeleton-home",
        "number": "18",
        "label": "Skeleton Home",
        "route": "/skeleton/home",
        "status": "done",
        "copySource": "inferred-from-flow",
        "lines": ["Skeleton loading — Home"],
    },
    {
        "id": "19-skeleton-moments",
        "number": "19",
        "label": "Skeleton Moments",
        "route": "/skeleton/moments",
        "status": "done",
        "copySource": "inferred-from-flow",
        "lines": ["Skeleton loading — Khoảnh khắc"],
    },
    {
        "id": "20-skeleton-together",
        "number": "20",
        "label": "Skeleton Together",
        "route": "/skeleton/together",
        "status": "done",
        "copySource": "inferred-from-flow",
        "lines": ["Skeleton loading — Hai đứa"],
    },
    {
        "id": "21-skeleton-settings",
        "number": "21",
        "label": "Skeleton Settings",
        "route": "/skeleton/settings",
        "status": "done",
        "copySource": "inferred-from-flow",
        "lines": ["Skeleton loading — Cài đặt"],
    },
    {
        "id": "29-settings",
        "number": "29",
        "label": "Settings Hub",
        "route": "/profile",
        "status": "done",
        "copySource": "stitch-screenshot",
        "lines": [
            "Cài đặt",
            "Phòng đôi #CHAM-8QZ7",
            "Bạn & Người ấy",
            "Giờ ngủ & Haptic",
            "Theme màu cảm xúc",
            "Face ID & An toàn",
        ],
    },
    {
        "id": "30-couple",
        "number": "30",
        "label": "Couple Profile Card",
        "route": "/settings/couple",
        "status": "done",
        "copySource": "stitch-screenshot",
        "lines": ["Hồ sơ đôi", "CHAM-8QZ7", "Bạn & Minh Triết", "428 ngày"],
    },
    {
        "id": "31-haptics",
        "number": "31",
        "label": "Sleep & Haptic",
        "route": "/settings/haptics",
        "status": "done",
        "copySource": "stitch-screenshot",
        "lines": [
            "Giờ ngủ & Haptic",
            "Nhắc nhẹ và rung khi cần im lặng",
            "Bắt đầu giờ ngủ",
            "Cường độ rung",
        ],
    },
    {
        "id": "32-theme",
        "number": "32",
        "label": "Emotion Theme",
        "route": "/settings/theme",
        "status": "done",
        "copySource": "stitch-screenshot",
        "lines": ["Theme màu cảm xúc", "Hồng kem", "Đào", "Sương", "Đêm"],
    },
    {
        "id": "33-safety",
        "number": "33",
        "label": "Face ID & Safety",
        "route": "/settings/safety",
        "status": "done",
        "copySource": "stitch-screenshot",
        "lines": [
            "Face ID & An toàn",
            "Khu vực riêng tư cho hai bạn",
            "Khoá bằng Face ID",
            "Mã hóa đầu cuối",
        ],
    },
]


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
    ]
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def draw_screen(spec: dict) -> None:
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img)
    draw.rounded_rectangle((16, 16, W - 16, H - 16), 28, fill=CARD)
    title = f"{spec['number']}. {spec['label']}"
    draw.text((32, 36), title, fill=PINK, font=font(18, True))
    draw.text((32, 64), spec["route"], fill=MUTED, font=font(13))
    y = 100
    for line in spec["lines"]:
        draw.text((32, y), line, fill=INK, font=font(14))
        y += 28
        if y > H - 80:
            break
    draw.text((32, H - 48), spec["copySource"], fill=MUTED, font=font(11))
    img.save(DESIGNS / f"{spec['id']}.png")


def main() -> None:
    for spec in SCREENS:
        draw_screen(spec)
    meta = {
        "projectId": "12434091030029404358",
        "title": "CHẠM Mobile App Prototype",
        "sourceUrl": "https://stitch.withgoogle.com/projects/12434091030029404358",
        "deviceType": "MOBILE",
        "lastSyncTime": "2026-09-15T07:30:00.000Z",
        "catalogNote": "PNGs generated from captured Stitch copy. stitch-screenshot = seen on board; inferred-from-flow = numbered gap filled from adjacent frames.",
        "screens": {
            spec["id"]: {
                "number": spec["number"],
                "label": spec["label"],
                "route": spec["route"],
                "status": spec["status"],
                "copySource": spec["copySource"],
                "design": f".stitch/designs/{spec['id']}.png",
            }
            for spec in SCREENS
        },
    }
    (ROOT / "metadata.json").write_text(json.dumps(meta, ensure_ascii=False, indent=2) + "\n")
    print(f"wrote {len(SCREENS)} catalog frames")


if __name__ == "__main__":
    main()
